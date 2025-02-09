import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Vendors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { vendors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(vendors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(vendors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [vendors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the vendors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Caterer' ? navigate('/vendor') : navigate('/vendor/Caterer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Caterer' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Caterer</p>
          <p onClick={() => speciality === 'Decorator' ? navigate('/vendor') : navigate('/vendor/Decorator')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Decorator' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Decorator</p>
          <p onClick={() => speciality === 'Photographer' ? navigate('/vendor') : navigate('/vendor/Photographer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Photographer' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Photographer</p>
          <p onClick={() => speciality === 'Event Cordinator' ? navigate('/vendor') : navigate('/vendor/Event Cordinator')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Event Cordinator' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Event Cordinator</p>
          <p onClick={() => speciality === 'DJ' ? navigate('/vendor') : navigate('/vendor/DJ')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'DJ' ? 'bg-[#E2E5FF] text-black ' : ''}`}>DJ</p>
          <p onClick={() => speciality === 'Venue Provider' ? navigate('/vendor') : navigate('/vendor/Venue Provider')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Venue Provider' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Venue Provider</p>
          <p onClick={() => speciality === 'Support Staff' ? navigate('/vendor') : navigate('/vendor/Support Staff')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Support Staff' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Support Staff</p>
          <p onClick={() => speciality === 'AV & Tech Support' ? navigate('/vendor') : navigate('/vendor/AV & Tech Support')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'AV & Tech Support' ? 'bg-[#E2E5FF] text-black ' : ''}`}>AV & Tech Support</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vendors