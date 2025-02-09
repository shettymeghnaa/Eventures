import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import VendorContextProvider from './context/VendorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <VendorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </VendorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
