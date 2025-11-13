import Image from "next/image";
import { Counter, MotionDiv } from "./ui/motion-wrapper";

const TestimonialSection = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='rounded-[40px] w-full flex flex-col lg:flex-row items-center justify-between'>
          {/* Left Side - Dog Image */}
          <MotionDiv
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative flex justify-center items-center w-[531px] h-[594px]'>
            <Image
              src='/testimonial-banner.png'
              alt='Dog'
              fill
              className='object-contain'
            />
            <div className='absolute top-[357px] left-[222px]'>
              <div className='relative'>
                {/* Speech Bubble */}
                <div className="absolute top-0 left-0 w-[357px] h-[140px] bg-[#5CCB60] rounded-b-2xl rounded-tr-2xl before:content-[''] before:absolute before:-left-[18.5px] before:w-0 before:h-0 before:border-t-transparent before:border-b-[20.5px] before:border-b-transparent before:border-r-22 before:border-r-[#5CCB60]">
                  <div className='flex items-center gap-[7px] mt-5 ml-5 mb-1'>
                    <Image
                      src='/pet-lover.png'
                      alt='pet lover'
                      width={32}
                      height={32}
                      className='object-contain'
                    />
                    <h6 className='text-white font-onset text-base font-semibold'>
                      Alex julian
                    </h6>
                  </div>
                  <p className='font-onset font-light text-white text-base px-5'>
                    From advice to service booking, everything is seamless. I
                    trust Petgon with all my pet care needs!
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Right Side - Text and Button */}
          <MotionDiv
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='w-1/2 flex flex-col justify-center items-start text-left mt-10 lg:mt-0 space-y-6'>
            <h2 className='text-[76px] font-(family-name:--font-clash-display) leading-[70px] font-bold text-white'>
              What Our <br />
              <span className='text-[#FF7F56]'>Pet Parents</span> <br />
              Are Saying
            </h2>
            <p className='text-white/90 text-lg max-w-[600px] leading-[160%] font-onset font-light'>
              Hear what real pet parents have to say about their experience —
              <br />
              and how Petgon has made caring for their furry friends easier,
              smarter, and more joyful.
            </p>
            <button className='h-[46px] w-[184px] bg-[#F56A3D] hover:bg-[#FF7F56] text-white text-lg font-normal rounded-full transition duration-200 font-onset cursor-pointer'>
              Learn more
            </button>
          </MotionDiv>
        </div>

        {/* Stats Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className='-top-[46px] bg-[#5240B7] text-white relative z-10 rounded-[40px] py-8 px-6 flex flex-col md:flex-row items-center justify-around gap-6 shadow-xl'>
          <div className='text-start'>
            <h3 className='text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold'>
              +<Counter to={12000} duration={2.5} />
            </h3>
            <p className='text-white/80 font-onset font-normal'>
              Regular Pet Parents User
            </p>
          </div>
          <div className='text-start'>
            <h3 className='text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold'>
              +<Counter to={10} duration={2} /> Years
            </h3>
            <p className='text-white/80 font-onset font-normal'>
              Provide Best Services for Pet
            </p>
          </div>
          <div className='text-start'>
            <h3 className='text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold'>
              +<Counter to={5} duration={1.5} /> Award
            </h3>
            <p className='text-white/80 font-onset font-normal'>
              We Got for Our Better Services
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default TestimonialSection;
