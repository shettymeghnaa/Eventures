import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Eventures, your trusted partner in planning and organizing unforgettable events effortlessly.
          At Eventures, we understand the challenges of finding the perfect vendors for your special occasions, whether it's a wedding, corporate event, or private party..</p>
          <p>Eventures is committed to revolutionizing event planning through technology. We continuously enhance our platform, integrating smart recommendations, seamless booking, and real-time communication to provide a hassle-free experience. Whether you are planning your first event or managing multiple occasions, Eventures is here to support you at every step.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Eventures is to create a seamless event planning experience for everyone. We aim to bridge the gap between customers and trusted vendors, making it easier to find, book, and collaborate with top professionals for any event.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Easily discover and book top vendors for your events in just a few clicks.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access a network of trusted event professionals, from photographers to caterers, all in one place.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Get tailored vendor recommendations based on your event type, location, and budget.</p>
        </div>
      </div>

    </div>
  )
}

export default About
