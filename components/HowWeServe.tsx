"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HowWeServe() {
  return (
    <div
      id='services'
      className='min-h-[728px] flex items-center justify-between'>
      {/* Grid */}
      <div className='grid grid-cols-2 gap-10  container mx-auto items-center'>
        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='flex flex-col justify-center'>
          <div className='text-[70px] text-white mb-4 font-(family-name:--font-clash-display) font-bold'>
            <h2 className='-mb-[138px]'>How We</h2>
            <br />
            <h2 className='-mb-[138px]'>Serve Our</h2>
            <br />
            <h2 className='text-[#FEA552]'>Pet Partners</h2>
          </div>
          <p className='text-white text-lg font-onset max-w-[570px] w-full mb-7'>
            We provide trusted care services, expert advice, and smart tools to
            help you give your pets the best life possible. From easy booking to
            real-time updates and personalized support, we make pet care simple,
            reliable, and joyful — just the way it should be.
          </p>

          <Button className='py-6 rounded-full w-[184px] mt-8 bg-[#F56A3D] hover:bg-[#F25C54] text-xl cursor-pointer'>
            Learn more
          </Button>
        </motion.div>

        {/* Left Side - Service Cards Grid */}
        <div className='flex flex-col items-end justify-center'>
          <div className='grid grid-cols-2 gap-4 font-onset'>
            {/* Trusted Pet Service Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className='bg-[#EA913E] rounded-3xl p-5 flex flex-col min-h-[298px] max-w-[286px]'>
              <div
                className='w-[62px] h-[62px] border border-black rounded-lg flex items-center justify-center mb-8 bg-[#D38238]
              '>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.9867 2.97333L7.33336 5.48C5.80003 6.05333 4.54669 7.86666 4.54669 9.49333V19.4C4.54669 20.9733 5.58669 23.04 6.85336 23.9867L12.5867 28.2667C14.4667 29.68 17.56 29.68 19.44 28.2667L25.1734 23.9867C26.44 23.04 27.48 20.9733 27.48 19.4V9.49333C27.48 7.85333 26.2267 6.04 24.6934 5.46666L18.04 2.97333C16.9067 2.56 15.0934 2.56 13.9867 2.97333Z'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12.0667 15.8267L14.2133 17.9733L19.9466 12.24'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-white text-2xl font-bold mb-3'>
                Trusted Pet Service
              </h3>
              <p className='text-white opacity-90 text-lg'>
                Easily find and book top-rated vets, groomers, walkers, and
                trainers.
              </p>
            </motion.div>

            {/* Expert Care Advice Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className='bg-[#5240B7] rounded-3xl p-5 flex flex-col min-h-[298px] max-w-[286px]'>
              <div
                className='w-[62px] h-[62px] rounded-lg flex items-center justify-center mb-8 bg-[#6554C3]
              '>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M19.6504 3.68241H10.7797C8.0064 3.67174 5.73307 5.88241 5.66774 8.65441V22.9384C5.6064 25.7557 7.83974 28.0904 10.6571 28.1531C10.6984 28.1531 10.7384 28.1544 10.7797 28.1531H21.4317C24.2237 28.0397 26.4237 25.7331 26.4037 22.9384V10.7171L19.6504 3.68241Z'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.3002 3.66663V7.54529C19.3002 9.43863 20.8308 10.9733 22.7242 10.9786H26.3975'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.0508 20.4779H11.8508'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16.3243 15.4746H11.8496'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-white text-2xl font-bold mb-3'>
                Expert Care Advice
              </h3>
              <p className='text-white opacity-90 text-lg'>
                Access a library of guides, tips, and health insights tailored
                to your pet&apos;s needs.
              </p>
            </motion.div>

            {/* Smart Reminders Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className='bg-[#5CCB60] rounded-3xl p-5 flex flex-col min-h-[298px] max-w-[286px]'>
              <div className='w-[62px] h-[62px] rounded-lg flex items-center justify-center mb-8 bg-[#47BA4C]'>
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M2.33331 25.6667H25.6666'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14 7C8.20167 7 3.5 11.7017 3.5 17.5V25.6667H24.5V17.5C24.5 11.7017 19.7983 7 14 7Z'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M14 2.33325V3.49992'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4.66669 4.66675L5.83335 5.83341'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M23.3334 4.66675L22.1667 5.83341'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-white text-2xl font-bold mb-3'>
                Smart Reminders
              </h3>
              <p className='text-white opacity-90 text-lg'>
                Stay on top of vet visits, vaccinations, grooming schedules, and
                more.
              </p>
            </motion.div>

            {/* Personal Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className='bg-[#FC87A7] rounded-3xl p-5 flex flex-col min-h-[298px] max-w-[286px]'>
              <div className='w-[62px] h-[62px] rounded-lg flex items-center justify-center mb-8 bg-[#F06E91]'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16.0003 16C19.6823 16 22.667 13.0152 22.667 9.33333C22.667 5.65143 19.6823 2.66667 16.0003 2.66667C12.3184 2.66667 9.33368 5.65143 9.33368 9.33333C9.33368 13.0152 12.3184 16 16.0003 16Z'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M27.4803 29.3333C27.4803 23.44 22.4137 18.6667 16.0003 18.6667C9.58699 18.6667 4.52032 23.44 4.52032 29.3333'
                    stroke='white'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-white text-2xl font-bold mb-3'>
                Personal Profile
              </h3>
              <p className='text-white opacity-90 text-lg'>
                Manage your pet&apos;s records, track health milestones, and
                receive customized care.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
