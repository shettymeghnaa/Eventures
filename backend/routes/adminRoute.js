import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addVendor, allVendors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/vendorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-vendor", authAdmin, upload.single('image'), addVendor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-vendors", authAdmin, allVendors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;