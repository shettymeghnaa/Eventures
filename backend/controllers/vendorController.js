import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import vendorModel from "../models/userModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API for vendor Login 
const loginVendor = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await vendorModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get vendor appointments for vendor panel
const appointmentsVendor = async (req, res) => {
    try {

        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for vendor panel
const appointmentCancel = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to mark appointment completed for vendor panel
const appointmentComplete = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get all vendors list for Frontend
const vendorList = async (req, res) => {
    try {

        const vendors = await vendorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, vendors })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change vendor availablity for Admin and vendor Panel
const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await vendorModel.findById(docId)
        await vendorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get vendor profile for  vendor Panel
const vendorProfile = async (req, res) => {
    try {

        const { docId } = req.body
        const profileData = await vendorModel.findById(docId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update vendor profile data from  vendor Panel
const updateVendorProfile = async (req, res) => {
    try {

        const { docId, fees, address, available } = req.body

        await vendorModel.findByIdAndUpdate(docId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for vendor panel
const vendorDashboard = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({ docId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let customers = []

        appointments.map((item) => {
            if (!customers.includes(item.userId)) {
                customers.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            customers: customers.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginVendor,
    appointmentsVendor,
    appointmentCancel,
    vendorList,
    changeAvailablity,
    appointmentComplete,
    vendorDashboard,
    vendorProfile,
    updateVendorProfile
}