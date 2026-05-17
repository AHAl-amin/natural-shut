'use client'

import React from 'react'
import { Check } from 'lucide-react'

const DetoxPlanAdventage = () => {
  const benefits = [
    'এটি আপনার দেহে জমে থাকা চর্বি গুলো কে বার্ন করে শরীরে শক্তি সঞ্চয় করবে,ফলে আপনার বার বার ক্ষুদা লাগবেনা।',
    'বিজ্ঞান এবং প্রকৃতির সমন্বয়ে প্রস্তুত করা অত্যন্ত কার্যকরি একটি প্রোডাক্ট!!',
    'ডায়েট এবং এক্সারসাইজ এর ঝামেলা ছাড়াই ওজন কমানোর সেরা প্রোডাক্ট',
    'পেট,পিঠ,থাই যেখানেই অতিরিক্ত চর্বি আছে তা বার্ন করে ফেলবে।',
    'খাবারের শরীরের শেইপ ঠিক রেখে সামগ্রিক ভাবে ওজন কমাবে।ফেরায়',
    'ডায়াবেটিস এবং উচ্ছ রক্তচাপ এর ঝুকি কমাবে।',
    'চেহারার লাবন্যতা বৃদ্ধি করবে।',
    'হজম শক্তি বৃদ্ধি করবে।',
    'ভুঁড়ি কমাবে।'
  ]

  const timeline = [
    { days: '১০ দিন', intensity: 'light' },
    { days: '২০ দিন', intensity: 'medium' },
    { days: '৩০ দিন', intensity: 'dark' }
  ]

  return (
    <div className='w-full flex justify-center mb-10 '>
      {/* Header */}
      <div className='2xl:max-w-7xl lg:max-w-6xl w-full'>
        <div className='bg-[#1BA500] text-white py-4 px-6 text-center'>
          <h1 className='text-xl md:text-2xl font-bold'>ডেটোক্স প্লাম এর উপকারিতা</h1>
        </div>

        {/* Main Content */}
        <div className='px-4 py-12 md:px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>

            {/* Left Side - Benefits List */}
            <div className='space-y-2'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex gap-3 items-center'>
                  <Check className='p-1 size-6 text-white bg-[#1BA500] rounded-full flex-shrink-0 mt-1' />
                  <p className='text-[#54595F] text-[20px] font-semibold leading-relaxed'>{benefit}</p>
                </div>
              ))}
            </div>

            {/* Right Side - Product Section */}
            <div>
              <img src="https://naturalshut.com/wp-content/uploads/2025/08/Untitled-design.png" alt="Adventage image" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className='flex justify-center pt-4'>
          <button className='bg-[#61CE70]  text-white font-bold 
          py-2 px-8 rounded cursor-pointer text-lg transition-colors duration-200 shadow-lg'>
            আমি ফিট হতে চাই 👇
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetoxPlanAdventage
