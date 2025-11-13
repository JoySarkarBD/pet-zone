import Image from "next/image";
import { MotionDiv } from "./ui/motion-wrapper";

const BookingCTA = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className='rounded-[40px] px-20 relative py-[70px] container  flex items-center justify-center'>
      <div className=' bg-[#FFE067] rounded-[40px] h-[400px] flex items-center justify-between w-full'>
        {/* Left Side: Image of person and dog */}
        <MotionDiv
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex relative items-center abs w-[571px] h-[381px]'>
          <Image
            src='/cta-banner.png'
            alt='Person with Dog'
            fill
            className='rounded-[20px] absolute top-2.5!'
          />
        </MotionDiv>

        {/* Right Side: Text, Button, and Customers Section */}
        <MotionDiv
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='ml-10 px-20 flex flex-col items-start space-y-4'>
          <h2 className='text-[62px] leading-[69px] font-(family-name:--font-clash-display) font-bold text-black'>
            Book <span className='text-[#F56A3D]'>Now Online</span> <br /> with
            Discount
          </h2>
          <div className='flex items-center gap-x-3 mt-9'>
            <button className='bg-[#FF7F56] text-white py-3 px-8 rounded-full text-xl hover:bg-[#E86C4D] transition duration-200 font-normal font-onset cursor-pointer'>
              Book Now
            </button>
            <div className='flex items-center space-x-3'>
              <div className='flex -space-x-3'>
                {/* Add profile images here */}
                <Image
                  src='/user-3.png'
                  alt='Customer 1'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <Image
                  src='/user-2.png'
                  alt='Customer 2'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <Image
                  src='/user-1.png'
                  alt='Customer 3'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </div>
              <p className='text-lg font-medium text-[#121212] font-onset'>
                Customers 1,800+
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default BookingCTA;
