import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Single",
      price: "€5",
      period: "/month",
      description: "The essentials for accurate analysis.",
      features: [
        "Up to 10k pageviews/month",
        "Up to 5 websites",
        "Up to 1 account",
        "Up to 5 custom events",
        "Up to 100 custom dimensions",
      ],
      cta: "Buy plan",
      bgColor: "#FEA552",
    },
    {
      name: "Multiple",
      price: "€10",
      period: "/month",
      description: "You can derive from an analytics tool.",
      features: [
        "Up to 10k pageviews/month",
        "Up to 20 websites",
        "Up to 15 team accounts",
        "Up to 15 custom events",
        "Up to 100 custom dimensions",
      ],
      cta: "Buy plan",
      bgColor: "#5CCB60",
    },
    {
      name: "Custom",
      price: "Custom",
      description: "The ultimate plan for every company.",
      features: [
        "Up to 10k pageviews/month",
        "Unlimited websites",
        "Unlimited team accounts",
        "Unlimited custom events",
        "Unlimited custom dimensions",
      ],
      cta: "Contact Us",
      bgColor: "#FC87A7",
    },
  ];

  return (
    <section
      id='pricing'
      className='min-h-[763px] bg-[#9B5DFF] rounded-[60px] flex items-center justify-center py-20 px-6 md:px-12'>
      <div className='w-full container'>
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-14 text-center md:text-left'>
          <h2 className='text-6xl font-(family-name:--font-clash-display) font-bold text-white'>
            Pricing <span className='text-[#FFE067]'>Plan</span>
          </h2>
          <Link
            href='#'
            className='text-[#FFE067] font-medium transition flex items-center text-[34px] font-onset'>
            Learn more
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className='relative rounded-3xl p-8 text-white shadow-xl transform transition-all font-onset
              '
              style={{
                backgroundColor: plan.bgColor,
              }}>
              {/* Plan Name */}
              <h3 className='text-2xl font-semibold mb-6'>{plan.name}</h3>

              {/* Price */}
              <div>
                <p className='text-[42px] font-bold'>
                  {plan.price}
                  {plan.period && (
                    <span
                      className='text-[16px] text-white/80 font-normal
                    '>
                      {plan.period}
                    </span>
                  )}
                </p>
              </div>

              {/* Description */}
              <p className='text-[16px] text-white/80 mb-6'>
                {plan.description}
              </p>

              {/* CTA Button */}
              <Button className='w-full rounded-full mb-8 font-semibold text-white py-7 text-[20px] bg-[#F56A3D] hover:bg-[#F25C54] cursor-pointer'>
                {plan.cta}
              </Button>

              {/* Features */}
              <ul className='space-y-3'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-start gap-2 text-sm'>
                    <Check className='w-5 h-5 text-[#6148FB] mt-0.5' />
                    <span className='text-[16px]'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
