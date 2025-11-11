import Image from 'next/image'

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-[40px] w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Dog Image */}
          <div className="relative flex justify-center items-center w-[531px] h-[594px]">
            <Image
              src="/testimonial-banner.png"
              alt="Dog"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Side - Text and Button */}
          <div className="w-1/2 flex flex-col justify-center items-start text-left mt-10 lg:mt-0 space-y-6">
            <h2 className="text-[76px] font-(family-name:--font-clash-display) leading-[70px] font-bold text-white">
              What Our <br />
              <span className="text-[#FF7F56]">Pet Parents</span> <br />Are Saying
            </h2>
            <p className="text-white/90 text-lg max-w-[600px] leading-relaxed">
              Hear what real pet parents have to say about their experience — and
              how Petgon has made caring for their furry friends easier, smarter,
              and more joyful.
            </p>
            <button className="h-[46px] w-[184px] bg-[#F56A3D] hover:bg-[#FF7F56] text-white text-lg font-semibold rounded-full transition duration-200">
              Learn more
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="-top-[46px] bg-[#5240B7] text-white relative z-10 rounded-[40px] py-8 px-6 flex flex-col md:flex-row items-center justify-around gap-6 shadow-xl">
          <div className="text-start">
            <h3 className="text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold">+12,000</h3>
            <p className="text-white/80">Regular Pet Parents User</p>
          </div>
          <div className="text-start">
            <h3 className="text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold">+10 Years</h3>
            <p className="text-white/80">Provide Best Services for Pet</p>
          </div>
          <div className="text-start">
            <h3 className="text-[64px] leading-[69px] font-(family-name:--font-clash-display) font-semibold">+5 Award</h3>
            <p className="text-white/80">We Got for Our Better Services</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection