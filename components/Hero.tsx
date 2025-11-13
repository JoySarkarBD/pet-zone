import Image from "next/image";
import { Button } from "./ui/button";
import { MotionDiv, MotionSpan } from "./ui/motion-wrapper";

export default function Hero() {
  return (
    <section className='min-h-screen bg-[#5C52FF] relative overflow-hidden bg-[url("/vector-bg-top-left.png"),_url("/vector-bg-top-right.png"),_url("/vector-bg-bottom-left.png"),_url("/vector-bg-bottom-right.png"),_url("/vector-header-group.png")] bg-no-repeat bg-position-[0_18.5px,100%_18.5px,0_100%,100%_100%,74%_44px]'>
      {/* Top Line */}
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex items-center justify-center gap-[34px] text-white text-[114px] font-(family-name:--font-clash-display) font-bold leading-none mt-[50px]'>
        <div className='flex items-center justify-center gap-1'>
          <span>Ad</span>
          {/* Pets Circle */}
          <div className='relative w-20 h-[75px] mt-3'>
            {/* Back Circle */}
            <div className='absolute top-[-15px] w-20 h-[75px] bg-[#61BB66] rounded-full'></div>

            {/* Front Circle */}
            <div className='absolute font-inter inset-0 flex flex-col items-center justify-center bg-[#AEE090] rounded-full shadow-lg'>
              <p className='text-[10px] text-[#1A2E35]'>Pets</p>
              <h2 className='text-4xl font-extrabold text-[#1A2E35] leading-none flex items-center'>
                <span>5k</span>
                <span className='text-sm font-semibold'>+</span>
              </h2>
            </div>
          </div>
          <span>Pt</span>
        </div>

        <MotionSpan
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex items-center justify-center gap-1'>
          l{/* Image circle */}
          <div className='relative w-20 h-[75px] mt-3'>
            {/* Back Circle */}
            <div className='absolute top-2.5 w-20 h-[75px] bg-[#A1D0EE] rounded-full'></div>

            {/* Image Circle */}
            <div className='absolute font-inter inset-0 flex flex-col items-center justify-center bg-[#AEE090] rounded-full shadow-lg'>
              <Image
                src='/ellipse-2.png'
                alt='Pet Lover'
                width={100}
                height={100}
                className='object-contain'
              />
            </div>
          </div>
          ve,
        </MotionSpan>
      </MotionDiv>
      {/* Bottom Line */}
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className='flex items-center justify-center gap-[34px] text-white text-[114px] font-(family-name:--font-clash-display) font-bold leading-none mt-5'>
        <div className='flex items-center justify-center gap-1'>
          <span>F</span>
          {/* Doctors Circle */}
          <div className='relative w-20 h-[75px] mt-3'>
            {/* Back Circle */}
            <div className='absolute top-2.5 w-20 h-[75px] bg-[#EB889D] rounded-full'></div>

            {/* Front Circle */}
            <div className='absolute font-inter inset-0 flex flex-col items-center justify-center bg-[#FCC0D0] rounded-full shadow-lg'>
              <p className='text-[10px] text-[#1A2E35]'>Doctors</p>
              <h2 className='text-4xl font-extrabold text-[#1A2E35] leading-none flex items-center'>
                <span>2k</span>
                <span className='text-sm font-semibold'>+</span>
              </h2>
            </div>
          </div>
          <span>ster</span>
        </div>
        <span className='text-[#FFE067]'>Happiness</span>
      </MotionDiv>
      {/* Subtitle Line */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='flex flex-col items-center text-center mt-4 max-w-[617px] mx-auto  tracking-wide'>
        <p className='font-onset font-light text-white/80 text-lg px-5'>
          We Are well-equipped and well-prepared to protect your heath and
          hygiene while serve you. Our preparations include
        </p>
        <Button className='py-6 rounded-full w-[188px] mt-5 bg-[#F56A3D] hover:bg-[#F25C54] text-xl cursor-pointer font-normal font-onset'>
          Get Started
        </Button>
      </MotionDiv>
      {/* Pet Group Image */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='my-8 flex items-center justify-center w-full px-4'>
        <div className='w-full max-w-[1038px]'>
          <Image
            src='/pets.png'
            alt='Pet Group'
            width={1038}
            height={350}
            className='w-full h-auto object-contain p-4 border-8 rounded-full border-[#FFE067]'
            priority
          />
        </div>
      </MotionDiv>
    </section>
  );
}
