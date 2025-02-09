
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Effortless event planning starts here. Explore a curated list of top-rated professionals, compare services, and book with confidence—all in one place. Whether it’s a wedding, birthday, or corporate event, we bring your vision to life with trusted experts.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
          <li>Home</li>
    <li>About Us</li>
    <li>How It Works</li>
    <li>Terms & Privacy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9392891419</li>
            <li>eventures25@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Eventures.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
