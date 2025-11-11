import Image from "next/image";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="bg-[#3491FA] rounded-[80px]">
      <div
        className='min-h-[763px] 
   container flex flex-col items-center justify-center
    '>
        <div className='flex flex-row items-center justify-between w-full mb-10'>
          <h2 className="text-[70px] font-(family-name:--font-clash-display) font-bold">Top <span className="text-[#FFE067]">Categories</span></h2>
          <Link href='#' className="text-[34px] font-medium font-onset text-[#FFE067]">See All</Link>
        </div>
        <div className='flex w-full items-center justify-center'>
          <div className="grid grid-cols-4 w-full gap-x-4">
            <div className=" w-full h-[450px] rounded-[30px] overflow-hidden shadow-lg bg-[#FFF0A7] relative">
              {/* Image Section */}
              <div className="relative w-full h-[400px]">
                <Image
                  src="/kittens.png" // Use the correct path for the image
                  alt="kittens"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Cloud Shape Section */}
              <div className="absolute bottom-0 left-0 w-full bg-[url('/card_vactor.png')] bg-cover h-[168px] bg-no-repeat">
                {/* Cloud effect */}
              </div>

              {/* Content Section */}
              <div className="left-5 bottom-[76px] relative z-10">
                <h2 className="text-2xl text-white font-semibold ">Kittens</h2>
                <p className="text-base text-white">xnonenk, 4 miceui</p>
                <div className="flex items-center gap-x-2">
                  <button className="mt-2 text-base bg-[#F56A3D] w-[126px] text-white h-[46px] rounded-full hover:bg-[#E55A2D] focus:outline-none">
                    Details
                  </button>
                  <div className="mt-2">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="46" height="46" rx="23" fill="#D38238" />
                      <path d="M26.75 18.875C27.5784 18.875 28.25 19.5465 28.25 20.375M23 18.2769L23.5138 17.75C25.112 16.111 27.7032 16.111 29.3014 17.75C30.8566 19.3449 30.9044 21.9153 29.4096 23.5699L25.1148 28.3236C23.9738 29.5865 22.0262 29.5865 20.8852 28.3236L16.5904 23.5699C15.0956 21.9153 15.1434 19.3449 16.6986 17.75C18.2968 16.111 20.888 16.111 22.4862 17.75L23 18.2769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
            <div className=" w-full  h-[450px] rounded-[30px] overflow-hidden shadow-lg bg-[#9BD7FF] relative">
              {/* Image Section */}
              <div className="relative w-full h-[400px]">
                <Image
                  src="/indoor-cats.png"
                  alt="kittens"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Cloud Shape Section */}
              <div className="absolute bottom-0 left-0 w-full bg-[url('/indoor-cats-vactor.png')] bg-cover h-[204px] bg-no-repeat">
                {/* Cloud effect */}
              </div>

              {/* Content Section */}
              <div className="left-5 bottom-[76px] relative z-10">
                <h2 className="text-2xl text-white font-semibold ">Indoor Cats</h2>
                <p className="text-base text-white">xnonenk, 4 miceui</p>
                <div className="flex items-center gap-x-2">
                  <button className="mt-2 text-base bg-[#F56A3D] w-[126px] text-white h-[46px] rounded-full hover:bg-[#E55A2D] focus:outline-none">
                    Details
                  </button>
                  <div className="mt-2">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="46" height="46" rx="23" fill="#D38238" />
                      <path d="M26.75 18.875C27.5784 18.875 28.25 19.5465 28.25 20.375M23 18.2769L23.5138 17.75C25.112 16.111 27.7032 16.111 29.3014 17.75C30.8566 19.3449 30.9044 21.9153 29.4096 23.5699L25.1148 28.3236C23.9738 29.5865 22.0262 29.5865 20.8852 28.3236L16.5904 23.5699C15.0956 21.9153 15.1434 19.3449 16.6986 17.75C18.2968 16.111 20.888 16.111 22.4862 17.75L23 18.2769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
            <div className=" w-full  h-[450px] rounded-[30px] overflow-hidden shadow-lg bg-[#CFFFCC] relative">
              {/* Image Section */}
              <div className="relative w-full h-[400px]">
                <Image
                  src="/service-dogs.png"
                  alt="kittens"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Cloud Shape Section */}
              <div className="absolute bottom-0 left-0 w-full bg-[url('/service-dogs-vector.png')] bg-cover h-[204px] bg-no-repeat">
                {/* Cloud effect */}
              </div>

              {/* Content Section */}
              <div className="left-5 bottom-[76px] relative z-10">
                <h2 className="text-2xl text-white font-semibold ">Service Dogs</h2>
                <p className="text-base text-white">xnonenk, 4 miceui</p>
                <div className="flex items-center gap-x-2">
                  <button className="mt-2 text-base bg-[#F56A3D] w-[126px] text-white h-[46px] rounded-full hover:bg-[#E55A2D] focus:outline-none">
                    Details
                  </button>
                  <div className="mt-2">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="46" height="46" rx="23" fill="#D38238" />
                      <path d="M26.75 18.875C27.5784 18.875 28.25 19.5465 28.25 20.375M23 18.2769L23.5138 17.75C25.112 16.111 27.7032 16.111 29.3014 17.75C30.8566 19.3449 30.9044 21.9153 29.4096 23.5699L25.1148 28.3236C23.9738 29.5865 22.0262 29.5865 20.8852 28.3236L16.5904 23.5699C15.0956 21.9153 15.1434 19.3449 16.6986 17.75C18.2968 16.111 20.888 16.111 22.4862 17.75L23 18.2769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
            <div className=" w-full  h-[450px] rounded-[30px] overflow-hidden shadow-lg bg-[#FFD3DF] relative">
              {/* Image Section */}
              <div className="relative w-full h-[400px]">
                <Image
                  src="/puppies.png"
                  alt="puppies"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Cloud Shape Section */}
              <div className="absolute bottom-0 left-0 w-full bg-[url('/puppies-vector.png')] bg-cover h-[189px] bg-no-repeat">
                {/* Cloud effect */}
              </div>

              {/* Content Section */}
              <div className="left-5 bottom-[76px] relative z-10">
                <h2 className="text-2xl text-white font-semibold ">Puppies</h2>
                <p className="text-base text-white">xnonenk, 4 miceui</p>
                <div className="flex items-center gap-x-2">
                  <button className="mt-2 text-base bg-[#F56A3D] w-[126px] text-white h-[46px] rounded-full hover:bg-[#E55A2D] focus:outline-none">
                    Details
                  </button>
                  <div className="mt-2">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="46" height="46" rx="23" fill="#D38238" />
                      <path d="M26.75 18.875C27.5784 18.875 28.25 19.5465 28.25 20.375M23 18.2769L23.5138 17.75C25.112 16.111 27.7032 16.111 29.3014 17.75C30.8566 19.3449 30.9044 21.9153 29.4096 23.5699L25.1148 28.3236C23.9738 29.5865 22.0262 29.5865 20.8852 28.3236L16.5904 23.5699C15.0956 21.9153 15.1434 19.3449 16.6986 17.75C18.2968 16.111 20.888 16.111 22.4862 17.75L23 18.2769Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
