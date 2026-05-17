const NeedCourses = () => {
    const courses = [
        {
            id: 1,
            title: 'এক মাসের কোর্স',
            description: 'আপনি যদি 5 থেকে 7 কেজি ওজন কমাতে চান তাহলে আমাদের এক নাম্বার প্যাকেজটি। এক প্যাকেট এক মাসের কোর্সটি নিতে হবে ।',
            buttonText: '5 থেকে 7 কেজি কমাতে চাই👇',
            buttonColor: 'bg-[#61CE70]'
        },
        {
            id: 2,
            title: 'দুই মাসের কোর্স',
            description: 'আপনি যদি 12 থেকে 15 কেজি ওজন কমাতে চান তাহলে আমাদের দুই নাম্বার প্যাকেজটি । দুই প্যাকেট দুই মাসের কোর্সটি নিতে হবে ।',
            buttonText: '12 থেকে 15+ কেজি কমাতে চাই👇',
            buttonColor: 'bg-[#61CE70]'
        },
        {
            id: 3,
            title: 'তিন মাসের কোর্স',
            description: 'আপনি যদি 15 থেকে 20 কেজি ওজন কমাতে চান তাহলে আমাদের তিন নাম্বার প্যাকেজটি। এক মাসে কোটি এক প্যাকেট এক মাসের কোর্সটি নিতে পারেন।',
            buttonText: '15 থেকে 20+ কেজি কমাতে চাই👇',
            buttonColor: 'bg-[#61CE70]'
        }
    ];

    return (
        <div className='w-full flex justify-center mb-10 '>

            <div className="w-full ">
                {/* Courses Cards Section */}
                <div className='bg-[#1BA500] 2xl:max-w-7xl lg:max-w-6xl w-full mx-auto text-white py-4 px-6 text-center my-6 '>
                    <h1 className='text-xl md:text-2xl font-bold'>আপনার জন্য কোন কোর্সটি প্রয়োজন ?</h1>
                </div>
                <div className=" bg-[#DFDFDF] flex justify-center ">
                    <div className="2xl:max-w-7xl lg:max-w-6xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                            {courses.map((course) => (
                                <div key={course.id} className="border-3 border-black  overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-3">
                                    {/* Card Header */}
                                    <div className="px-6 py-4 text-center">
                                        <h3 className="text-2xl font-bold text-red-400">{course.title}</h3>
                                    </div>

                                    {/* Card Body */}
                                    <div className="px-6 py-6">
                                        <p className="text-green-600 text-[15px] text-center leading-relaxed font-medium">
                                            {course.description}
                                        </p>
                                    </div>

                                    {/* Card Button */}
                                    <div className="px-6 py-4 text-center">
                                        <button className={`${course.buttonColor} text-white  px-6 py-2.5 rounded-lg font-bold text-[15px] cursor-pointer hover:opacity-90 transition-opacity w-full`}>
                                            {course.buttonText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Offer Section */}
                <div className="w-full bg-green-600 px-4 py-26">
                    <div className="2xl:max-w-7xl lg:max-w-6xl w-full text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white lg:mb-12 mb-8">
                            আজকের অফার মূল্য <span className="text-yellow-300">1390</span> টাকা মাত্র
                        </h2>
                        <p className="text-gray-200 text-lg md:text-2xl font-semibold">
                            দুই বা তিন মাসের কোর্স টি অর্ডার করলে সারা দেশে ডেলিভারি চার্জ সম্পূর্ন ফ্রী!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedCourses;