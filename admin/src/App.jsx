import { useContext } from 'react'
import { VendorContext } from './context/VendorContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddVendor from './pages/Admin/AddVendor';
import VendorsList from './pages/Admin/VendorsList';
import Login from './pages/login';
import VendorAppointments from './pages/Vendor/VendorAppointments';
import VendorDashboard from './pages/Vendor/VendorDashboard';
import VendorProfile from './pages/Vendor/VendorProfile';

const App = () => {

  const { dToken } = useContext(VendorContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-vendor' element={<AddVendor />} />
          <Route path='/vendor-list' element={<VendorsList />} />
          <Route path='/vendor-dashboard' element={<VendorDashboard />} />
          <Route path='/vendor-appointments' element={<VendorAppointments />} />
          <Route path='/vendor-profile' element={<VendorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App