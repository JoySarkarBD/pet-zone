import Image from "next/image";
import { MotionDiv } from "./ui/motion-wrapper";

interface CategoryCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  bgColor: string;
  cloudImageSrc: string;
  vectorHeight?: number; // Fix typo: vectorHight -> vectorHeight
}

export const CategoryCard = ({
  imageSrc,
  altText,
  title,
  description,
  bgColor,
  cloudImageSrc,
  vectorHeight = 168, // Default height if no value is passed
}: CategoryCardProps) => (
  <MotionDiv
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className={`w-full h-[450px] rounded-[30px] overflow-hidden shadow-lg ${bgColor} relative`}>
    {/* Image Section */}
    <div className='relative w-full h-[400px]'>
      <Image src={imageSrc} alt={altText} fill className='object-contain' />
    </div>

    {/* Cloud Shape Section with Inline Style */}
    <div
      className='absolute bottom-0 left-0 w-full bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${cloudImageSrc})`,
        height: `${vectorHeight}px`,
      }} // Inline height
    />

    {/* Content Section */}
    <div className='left-5 bottom-[76px] relative z-10'>
      <h2 className='text-2xl text-white font-semibold font-onset'>{title}</h2>
      <p className='text-base text-white font-onset'>{description}</p>
      <div className='flex items-center gap-x-2'>
        <button className='mt-2 text-base bg-[#F56A3D] w-[126px] text-white h-[46px] rounded-full hover:bg-[#E55A2D] focus:outline-none font-onset cursor-pointer'>
          Details
        </button>
        <div className='mt-2 cursor-pointer'>
          <svg
            width='46'
            height='46'
            viewBox='0 0 46 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='46' height='46' rx='23' fill='#D38238' />
            <path
              d='M26.75 18.875C27.5784 18.875 28.25 19.5465 28.25 20.375M23 18.2769L23.5138 17.75C25.112 16.111 27.7032 16.111 29.3014 17.75C30.8566 19.3449 30.9044 21.9153 29.4096 23.5699L25.1148 28.3236C23.9738 29.5865 22.0262 29.5865 20.8852 28.3236L16.5904 23.5699C15.0956 21.9153 15.1434 19.3449 16.6986 17.75C18.2968 16.111 20.888 16.111 22.4862 17.75L23 18.2769Z'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </div>
  </MotionDiv>
);
