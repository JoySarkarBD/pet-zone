"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className='min-h-[763px] bg-[#9B5DFF] rounded-[80px] flex items-center justify-center'>
      <div className='container'>
        <div
          id='about'
          className='min-h-[763px] bg-[#9B5DFF] rounded-[80px] flex items-center justify-center'>
          {/* Grid */}
          <div className='grid grid-cols-2 gap-10 items-center w-full justify-between'>
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className='flex items-center justify-start'>
              <Image
                src='/cat-and-dog.png'
                alt='About Pet Zone'
                width={596}
                height={400}
                className='object-contain'
                priority
                quality={100} // <-- maximum quality
              />
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='flex flex-col justify-end'>
              <h2 className='text-[70px] text-white mb-4 font-(family-name:--font-clash-display) font-bold'>
                About <span className='text-[#FFE067]'>Petgon</span>
              </h2>
              <p className='text-white text-lg font-onset max-w-[545px] w-full mb-7'>
                At Petgon, we believe pets are family. Our platform is dedicated
                to making pet care simpler, smarter, and more joyful. Whether
                you’re looking for trusted services, expert advice, or simply
                ways to better care for your furry friends, Petgon brings
                everything you need together in one place.
              </p>

              <ul className='font-onset text-lg'>
                {[
                  "Find top-rated vets, groomers, trainers",
                  "Access tips, guides, and advice curated",
                  "Get reminders, updates, and service alerts",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 text-white mb-5'>
                    <Image
                      src='/subtract.png'
                      width={30}
                      height={30}
                      alt='Checkmark'
                      className='object-contain'
                      quality={100}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button className='py-6 rounded-full w-[184px] mt-8 bg-[#F56A3D] hover:bg-[#F25C54] text-xl cursor-pointer'>
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
