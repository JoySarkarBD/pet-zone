import { Button } from "@/components/ui/button";
import { Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='bg-[#FFE067] w-full shadow-sm'>
      <div className='max-w-[1224px] mx-auto flex items-center justify-between px-6 py-3'>
        {/* Left Section - Logo */}
        <Link href='/' className='flex items-center'>
          <div className='bg-transparent'>
            <Image
              src='/logo.png'
              alt='Petgon Logo'
              width={112}
              height={44}
              className='object-contain'
            />
          </div>
        </Link>

        {/* Middle Section - Nav Links */}
        <div className='hidden md:flex items-center gap-[34px] text-sm font-medium text-gray-800'>
          <Link
            href='/'
            className='hover:text-[#F25C54] font-onset transition-colors text-lg text-[#081E3A] '>
            Home
          </Link>
          <Link
            href='/#services'
            className='hover:text-[#F25C54] font-onset transition-colors text-lg text-[#081E3A] '>
            Services
          </Link>
          <Link
            href='/contact'
            className='hover:text-[#F25C54] font-onset transition-colors text-lg text-[#081E3A] '>
            Contact
          </Link>
          <Link
            href='/portfolio'
            className='hover:text-[#F25C54] font-onset transition-colors text-lg text-[#081E3A] '>
            Portfolio
          </Link>
        </div>

        {/* Right Section - Icons */}
        <div className='flex items-center gap-3'>
          <Button className='bg-[#F56A3D] w-[50px] h-[50px] hover:bg-[#e14b45] rounded-full text-white flex items-center justify-center'>
            <Search className='!w-6 !h-6' />
          </Button>
          <Button className='bg-[#F56A3D] w-[50px] h-[50px] hover:bg-[#e14b45] rounded-full text-white flex items-center justify-center'>
            <User2 className='!w-6 !h-6' />
          </Button>
        </div>
      </div>
    </nav>
  );
}
