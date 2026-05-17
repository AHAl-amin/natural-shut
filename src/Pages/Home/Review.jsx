'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviewsData = [
    {
        id: 1,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Hum valo',
            },
            {
                sender: 'customer',
                text: 'Ager dame dewa jabe na apu',
            },
            {
                sender: 'reply',
                text: 'Na apu',
            },
            {
                sender: 'reply',
                text: '2 din agea new shipment asche',
            },
            {
                sender: 'reply',
                text: 'Dam besi porche ekhn',
            },
        ],
    },
    {
        id: 2,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Ami detox pulm ta khacchi ek bela kore kintu temoin kichu tho bujhte partechi na',
            },
            {
                sender: 'reply',
                text: 'Continue koren',
            },
            {
                sender: 'customer',
                text: 'Mithila Farjana Katha replied to an ad',
            },
            {
                sender: 'reply',
                text: 'Hi Mithila! আপনার নাম চট্টি উল্কা !',
            },
            {
                sender: 'customer',
                text: 'Apnadr product ta valoi kaj korteche',
            },
        ],
    },
    {
        id: 3,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Detox plum ta abar nite chai',
            },
            {
                sender: 'customer',
                text: 'Ag plastic and accessories, chokpara medical',
            },
            {
                sender: 'reply',
                text: 'This may be a high-quality lead',
            },
            {
                sender: 'reply',
                text: 'Ager t kemon kaj k',
            },
            {
                sender: 'customer',
                text: 'Komce',
            },
        ],
    },
    {
        id: 4,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Onk valo product hai',
            },
            {
                sender: 'reply',
                text: 'Thank you for your feedback',
            },
            {
                sender: 'customer',
                text: 'Ager dam koto ache',
            },
            {
                sender: 'reply',
                text: 'Same price as before',
            },
            {
                sender: 'customer',
                text: 'Thik ache',
            },
        ],
    },
    {
        id: 5,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Product kaista ache',
            },
            {
                sender: 'customer',
                text: 'Kobe pabo',
            },
            {
                sender: 'reply',
                text: '3 days delivery',
            },
            {
                sender: 'customer',
                text: 'Thik ache',
            },
            {
                sender: 'customer',
                text: 'Dua rokho',
            },
        ],
    },
    {
        id: 6,
        name: 'কাস্টমার রিভিউ',
        rating: 5,
        messages: [
            {
                sender: 'customer',
                text: 'Ato din por order korlam',
            },
            {
                sender: 'customer',
                text: 'Product ekdom valo',
            },
            {
                sender: 'reply',
                text: 'We are glad you are happy',
            },
            {
                sender: 'customer',
                text: 'Areo order korbo',
            },
            {
                sender: 'reply',
                text: 'Thank you',
            },
        ],
    },
];

const ReviewCard = ({ review }) => {
    return (
        <div className="h-full bg-white rounded-xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-100 to-teal-50 px-5 py-4 text-center border-b border-teal-200">
                <h3 className="text-xl font-bold text-teal-800">{review.name}</h3>

            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-4 overflow-y-auto">
                <div className="space-y-3">
                    {review.messages.map((msg, idx) => (
                        <div>
                            <div
                                key={idx}
                                className={`flex gap-2 ${msg.sender === 'reply' ? 'justify-end' : 'justify-start'
                                    }`}
                            >

                                {msg.sender === 'customer' && (
                                    <div className="w-7 h-7 rounded-full bg-red-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                                        👤
                                    </div>
                                )}
                                <div
                                    className={`max-w-xs px-3 py-2 rounded-lg text-xs ${msg.sender === 'reply'
                                        ? 'bg-blue-500 text-white rounded-br-none'
                                        : 'bg-slate-100 text-slate-700 rounded-bl-none'
                                        }`}
                                >

                                    {msg.text}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            {/* Rating & Button */}
            <div className="px-4 py-4 bg-slate-50 border-t border-slate-200 flex flex-col items-center gap-2">
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 fill-teal-700 text-teal-700"
                        />
                    ))}
                </div>
                <button className="px-4 py-1.5 bg-teal-700 text-white rounded-full text-xs font-semibold hover:bg-teal-800 transition-colors duration-300">
                    সফলতার রিভিউ
                </button>
            </div>
        </div>
    );
};

export default function Review() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, reviewsData.length - cardsToShow) : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= reviewsData.length - cardsToShow ? 0 : prevIndex + 1
        );
    };

    const slidePercentage = (currentIndex * 100) / cardsToShow;

    return (
        <div className='flex justify-center mt-10'>
            <div className=" 2xl:max-w-7xl lg:max-w-6xl w-full">
                <div className="">
                    {/* Title */}
                    <div className='bg-[#1BA500] text-white py-4 px-6 text-center mb-10'>
                        <h1 className='text-xl md:text-2xl font-bold'>ডেটোক্স প্লাম এর কাস্টমার রিভিও</h1>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Left Button */}
                        <button
                            onClick={goToPrevious}
                            className="absolute  top-1/2 -translate-y-1/2 z-20 p-2 lg:p-3 rounded-full bg-white border border-teal-300 shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-300"
                            aria-label="Previous review"
                        >

                            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                        </button>

                        {/* Cards Container */}
                        <div className="overflow-hidden px-4">
                            <div
                                className="flex gap-5 transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${slidePercentage}%)` }}
                            >
                                {reviewsData.map((review) => (
                                    <div
                                        key={review.id}
                                        className="flex-none basis-[calc(100%/3)] min-w-[calc(100%/3)]"
                                    >
                                        <ReviewCard review={review} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Button */}
                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 lg:p-3 rounded-full bg-white border border-teal-300 shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-300"
                            aria-label="Next review"
                        >
                            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {Array.from({
                            length: Math.max(1, reviewsData.length - cardsToShow + 1),
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'bg-teal-700 w-3 h-3'
                                    : 'bg-slate-300 w-2 h-2 hover:bg-slate-400'
                                    }`}
                                aria-label={`Go to reviews ${index + 1}`}
                            />
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
}
