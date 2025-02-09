import express from 'express';
import { loginVendor, appointmentsVendor, appointmentCancel, vendorList, changeAvailablity, appointmentComplete, vendorDashboard, vendorProfile, updateVendorProfile } from '../controllers/vendorController.js';
import authVendor from '../middleware/authVendor.js';
const vendorRouter = express.Router();

vendorRouter.post("/login", loginVendor)
vendorRouter.post("/cancel-appointment", authVendor, appointmentCancel)
vendorRouter.get("/appointments", authVendor, appointmentsVendor)
vendorRouter.get("/list", vendorList)
vendorRouter.post("/change-availability", authVendor, changeAvailablity)
vendorRouter.post("/complete-appointment", authVendor, appointmentComplete)
vendorRouter.get("/dashboard", authVendor, vendorDashboard)
vendorRouter.get("/profile", authVendor, vendorProfile)
vendorRouter.post("/update-profile", authVendor, updateVendorProfile)

export default vendorRouter;