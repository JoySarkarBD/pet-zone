"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryCard } from "./CategoryCard";

export default function TopCategories() {
  return (
    <div className='bg-[#3491FA] rounded-[80px] py-16'>
      <div className='min-h-[763px] container flex flex-col items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-row items-center justify-between w-full mb-10'>
          <h2 className='text-[70px] font-(family-name:--font-clash-display) font-bold'>
            Top <span className='text-[#FFE067]'>Categories</span>
          </h2>
          <Link
            href='#'
            className='text-[34px] font-medium font-onset text-[#FFE067]'>
            See All
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex w-full items-center justify-center'>
          <div className='grid grid-cols-4 w-full gap-x-4'>
            <CategoryCard
              imageSrc='/kittens.png'
              altText='kittens'
              title='Kittens'
              description='xnonenk, 4 miceui'
              bgColor='bg-[#FFF0A7]'
              cloudImageSrc='/card_vactor.png'
              vectorHeight={168}
            />
            <CategoryCard
              imageSrc='/indoor-cats.png'
              altText='indoor cats'
              title='Indoor Cats'
              description='xnonenk, 4 miceui'
              bgColor='bg-[#9BD7FF]'
              cloudImageSrc='/indoor-cats-vactor.png'
              vectorHeight={204}
            />
            <CategoryCard
              imageSrc='/service-dogs.png'
              altText='service dogs'
              title='Service Dogs'
              description='xnonenk, 4 miceui'
              bgColor='bg-[#CFFFCC]'
              cloudImageSrc='/service-dogs-vector.png'
              vectorHeight={202}
            />
            <CategoryCard
              imageSrc='/puppies.png'
              altText='puppies'
              title='Puppies'
              description='xnonenk, 4 miceui'
              bgColor='bg-[#FFD3DF]'
              cloudImageSrc='/puppies-vector.png'
              vectorHeight={189}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='w-full mt-10'>
          <button className='bg-[#F56A3D] hover:bg-[#E55A2D] w-full h-[76px] text-[22px] font-medium text-white border-0 rounded-full font-onset cursor-pointer'>
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
