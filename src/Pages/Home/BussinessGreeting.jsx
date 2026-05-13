import React from 'react'

function BussinessGreeting() {
  return (
    <div className=' bg-[#02C654] py-12 flex items-center justify-center'>
      <div className='  space-y-4 2xl:max-w-7xl lg:max-w-6xl w-full   '>
        {/* Main Heading with Gradient */}
        <div className='bg-gradient-to-r  from-[#7E00AC] to-[#FF0000] rounded-2xl py-2 shadow-lg'>
          <h1 className='text-white text-3xl md:text-4xl font-bold text-center'>
            এক মাসে 5-30+ কেজি ওজন কমাতে চান?
          </h1>
        </div>

        {/* Subheading */}
        <div className='text-[#E0E0D8] text-lg md:text-2xl lg:text-[28px] px-1 font-semibold text-center'>
          100% ন্যাচারাল - শতভাগ অরিজিনাল পণ্যের নিশ্চয়তা । মেদ ও ভুঁড়ি কমাবে 5 থেকে 30+ কেজি -ইনশাআল্লাহ ।
        </div>

        {/* Featured Box with Gradient */}
        <div className='bg-gradient-to-r from-[#7E00AC] to-[#FF0000] rounded-2xl py-2 shadow-lg'>
          <h2 className='text-white text-2xl md:text-3xl font-bold text-center'>
            🔥 অতিরিক্ত ওজন ও ভুঁড়ি কমান ডায়েট ছাড়াই ! 😴
          </h2>
        </div>

        {/* Subheading Section */}
        <div className='text-white text-xl md:text-2xl font-bold text-center'>
          ওজন নিয়ে ভয় এবার করুন জয়✌️
        </div>

        {/* Description Text */}
        <div className='text-[#FFD700] text-center text-sm md:text-base font-medium'>
         এটি অ্যাডভান্স ফর্মুলায় তৈরি যা আপনার শরীরের বুড়ি ওজন কমাবে মাত্র ১৫ থেকে ২০ দিনে । তাই দেরি না করে আজই অর্ডার করুন
        </div>

        {/* Call to Action Button */}
        <div className='flex justify-center pt-4'>
          <button className='bg-[#87CEEB] hover:bg-[#6BC5E3] text-white font-bold 
          py-2 px-8 rounded cursor-pointer text-lg transition-colors duration-200 shadow-lg'>
            আমি ফিট হতে চাই 👇
          </button>
        </div>
      </div>
    </div>
  )
}

export default BussinessGreeting
