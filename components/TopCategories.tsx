import Link from "next/link";

export default function TopCategories() {
  return (
    <div
      className='min-h-[763px] 
    
   container mx-auto flex items-center justify-center
    bg-[#3491FA] rounded-[80px]'>
      <div className='flex items-center justify-center'>
        <div
          className='flex items-center justify-between w-full
        '>
          <h2>Top Categories</h2>

          <Link href='#'>See All</Link>
        </div>
      </div>
    </div>
  );
}
