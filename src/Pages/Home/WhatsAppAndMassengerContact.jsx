import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

const WhatsAppAndMassengerContact = () => {
    return (
        <section className=" px-4 md:px-6">
            <div className="2xl:max-w-7xl lg:max-w-6xl w-full mx-auto">
                <div className=" border-dashed border-4 border-red-500 px-2 py-4">
                    <h2 className="text-center text-3xl font-bold leading-tight text-slate-900 sm:text-[35px] ">
                        আমাদের প্রতিনিধি একটিভ থাকে কোন সমস্যা হলে সাথে সাথে মেসেজ করবেন।
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 px-6">
                        <a
                            href="https://m.me/GlownnestBD/"
                            className="inline-flex items-center justify-center gap-3  bg-[#4267B2] px-6 py-4 text-lg font-semibold rounded text-white  transition hover:bg-[#385294]"
                            target='_blank'
                        >
                            <FaFacebookMessenger className="h-5 w-5" />
                            ফেইসবুক মেসেজ করুন
                        </a>
                        <a
                            href="https://wa.me/8801328139861"
                            className="inline-flex items-center justify-center gap-3 rounded bg-[#075E54] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#064d45]"
                            target='_blank'
                        >
                            <FaWhatsapp className="h-5 w-5" />
                            হোয়াট্সঅ্যাপ মেসেজ করুন
                        </a>
                    </div>
                </div>


                <div className="mt-10 rounded-[10px] bg-red-600 px-6 py-2 text-center ">
                    <p className="  font-bold text-white xl:text-4xl lg:text-3xl sm:text-xl text-lg">

                        ফোনে অর্ডার করুন অথবা প্রয়োজনে কল করুন-01328139861
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhatsAppAndMassengerContact;