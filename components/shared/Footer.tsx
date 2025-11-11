import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-[#2F2666] text-white'>
      {/* Main Footer Content */}
      <div className='container py-12'>
        <div className='grid grid-cols-4 gap-12'>
          {/* Brand Section */}
          <div className='col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <Image
                src='/logo.png'
                alt='Petgon Logo'
                width={112}
                height={44}
                className='object-contain'
              />
            </div>
            <p className='text-white/80 text-sm font-onset mb-4 leading-relaxed font-medium'>
              Petgon is pet care and pet
              <br /> adopt easy solutions.
            </p>
            <p className='text-white text-xs font-onset'>© 2025 Copyright</p>
          </div>

          {/* Quick Links Section 1 */}
          <div>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section 2 */}
          <div>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/#about'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors'>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className='text-white hover:text-white text-[16px] font-medium font-onset transition-colors mb-6'>
              Social media
            </h3>
            <div className='flex gap-1'>
              <Link
                href='#'
                className='w-[62px] h-[62px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='Facebook'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_1_160)'>
                    <path
                      d='M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_160'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href='#'
                className='w-[62px] h-[62px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='Instagram'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z'
                    fill='white'
                  />
                </svg>
              </Link>
              <Link
                href='#'
                className='w-[62px] h-[62px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='Twitter'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM14.7461 7.27539C14.318 7.15683 13.6634 7.17401 13.2773 7.30957C12.2282 7.69092 11.5651 8.67382 11.6406 9.75L11.666 10.165L11.2461 10.1143C9.71851 9.91936 8.38409 9.25843 7.25098 8.14844L6.69629 7.59766L6.55371 8.00391C6.25155 8.91059 6.44475 9.86867 7.07422 10.5127C7.40987 10.8685 7.33456 10.9196 6.75586 10.708C6.55508 10.6404 6.37912 10.5894 6.36133 10.6143C6.30257 10.6736 6.5036 11.4449 6.66309 11.75C6.88134 12.1737 7.32667 12.5892 7.81348 12.835L8.22461 13.0293L7.7373 13.0381C7.26745 13.0381 7.25043 13.0467 7.30078 13.2246C7.46874 13.7754 8.13252 14.3601 8.87109 14.6143L9.39062 14.792L8.9375 15.0635C8.26613 15.4531 7.47729 15.6735 6.68848 15.6904C6.31209 15.6989 6.00219 15.7324 6 15.7578C6 15.8426 7.02416 16.3175 7.62012 16.5039C9.40783 17.0546 11.5312 16.8174 13.126 15.877C14.2591 15.2075 15.3931 13.8769 15.9219 12.5889C16.2072 11.9026 16.4921 10.6486 16.4922 10.0469C16.4922 9.65707 16.5173 9.60572 16.9873 9.13965C17.2643 8.86849 17.5248 8.57204 17.5752 8.4873C17.659 8.32645 17.6505 8.32672 17.2227 8.4707C16.5093 8.7249 16.4083 8.6908 16.7607 8.30957C17.0209 8.0384 17.332 7.5464 17.332 7.40234C17.3309 7.37763 17.2046 7.42016 17.0625 7.49609C16.9112 7.58083 16.5758 7.70799 16.3242 7.78418L15.8711 7.92773L15.46 7.64844C15.2333 7.4959 14.914 7.32623 14.7461 7.27539Z'
                    fill='white'
                  />
                </svg>
              </Link>
              <Link
                href='#'
                className='w-[62px] h-[62px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='YouTube'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z'
                    fill='white'
                  />
                </svg>
              </Link>
              <Link
                href='#'
                className='w-[62px] h-[62px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                aria-label='LinkedIn'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM15.1572 9.74707C13.7134 9.74707 13.067 10.5403 12.7061 11.0967V9.93945H9.98633C10.0221 10.7079 9.98633 18.1104 9.98633 18.1104H12.7061V13.5469C12.7061 13.3027 12.723 13.0586 12.7949 12.8838C12.9915 12.396 13.4393 11.8917 14.1904 11.8916C15.1749 11.8916 15.5683 12.6403 15.5684 13.7383V18.1094H18.2881V13.4248C18.2881 10.9153 16.9466 9.74723 15.1572 9.74707ZM5.76172 18.1094H8.48047V9.93945H5.76172V18.1094ZM7.13867 6C6.20844 6 5.6007 6.61009 5.60059 7.41113C5.60059 8.19569 6.19053 8.82324 7.10352 8.82324H7.12109C8.06909 8.82306 8.65918 8.19557 8.65918 7.41113C8.64143 6.61011 8.06886 6.00003 7.13867 6Z'
                    fill='white'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-[#241D4F] py-4'>
        <div className='container mx-auto px-16 flex justify-between items-center'>
          <Link
            href='#'
            className='text-white text-[16px] font-onset transition-colors font-medium'>
            Privacy policy
          </Link>
          <Link
            href='mailto:Petgon.com'
            className='text-[#FFE067] hover:text-[#FFC61F] text-sm font-onset transition-colors font-medium'>
            Petgon.com
          </Link>
          <Link
            href='tel:+01765432'
            className='text-[#FFE067] hover:text-white text-sm font-onset transition-colors font-medium'>
            +01765432
          </Link>
          <p className='text-white/60 text-sm font-onset font-medium'>
            Acc no: 1255495456
          </p>
        </div>
      </div>
    </footer>
  );
}
