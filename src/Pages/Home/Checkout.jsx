import { useState } from 'react'
import { FaRegCheckCircle, FaLock } from 'react-icons/fa'

const productOptions = [
    {
        id: 1,
        title: 'Detox Plum (1 BOX)',
        price: 1390,
        label: '১ বক্স',
        image:
            'https://naturalshut.com/wp-content/uploads/2025/08/109528882bd462df635b999d56de3abe-1024x971.jpg',
    },
    {
        id: 2,
        title: 'Detox Plum (2 BOX)',
        price: 2590,
        label: '২ বক্স',
        image:
            'https://naturalshut.com/wp-content/uploads/2025/08/109528882bd462df635b999d56de3abe-1024x971.jpg',
    },
    {
        id: 3,
        title: 'Detox Plum (3 BOX)',
        price: 3590,
        label: '৩ বক্স',
        image:
            'https://naturalshut.com/wp-content/uploads/2025/08/109528882bd462df635b999d56de3abe-1024x971.jpg',
    },
]

const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const Checkout = () => {
    const [selectedProduct, setSelectedProduct] = useState(productOptions[0])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const subtotal = selectedProduct.price
    const shipmentCharge = 0
    const total = subtotal + shipmentCharge

    return (
        <section className="py-10 px-4 md:px-6">
            <div className="mx-auto max-w-7xl rounded-[28px] border-4 border-[#08793d] bg-[#e8f6ff] p-4 sm:p-6">
                <div className="rounded-2xl bg-[#0f5da8] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_30px_rgba(4,75,141,0.25)] sm:text-base">
                    অর্ডার করতে আপনার সঠিক তথ্য দিয়ে অর্ডার করবেন তুরন্ত টাকা করে কনফার্ম অর্ডার বাটন ক্লিক করুন
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[1.8fr_1.2fr]">
                    <div className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {productOptions.map((product) => {
                                const isSelected = product.id === selectedProduct.id
                                return (
                                    <button
                                        key={product.id}
                                        type="button"
                                        onClick={() => setSelectedProduct(product)}
                                        className={`relative flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left shadow-sm transition duration-200 ${isSelected
                                                ? 'border-[#08793d] bg-white shadow-[0_16px_50px_rgba(0,0,0,0.08)]'
                                                : 'border-slate-200 bg-white/90 hover:border-[#08793d]/70 hover:bg-white'
                                            }`}
                                    >
                                        <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${isSelected ? 'border-[#08793d] bg-[#08793d] text-white' : 'border-slate-300 bg-white'}`}>
                                            {isSelected ? <FaRegCheckCircle className="h-4 w-4" /> : <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />}
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-3">
                                                <div>
                                                    <p className="text-sm font-medium text-slate-600">{product.title}</p>
                                                    <p className="mt-2 text-sm text-slate-500">{product.label}</p>
                                                </div>
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                                                    ৳ {formatPrice(product.price)}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">Billing details</h3>
                            <div className="mt-5 space-y-4">
                                <label className="block text-sm font-medium text-slate-700">
                                    আপনার নাম লিখুন <span className="text-red-600">*</span>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Alamin"
                                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#08793d] focus:ring-2 focus:ring-[#08793d]/20"
                                    />
                                </label>
                                <label className="block text-sm font-medium text-slate-700">
                                    মোবাইল নাম্বার লিখুন <span className="text-red-600">*</span>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="01711111111"
                                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#08793d] focus:ring-2 focus:ring-[#08793d]/20"
                                    />
                                </label>
                                <label className="block text-sm font-medium text-slate-700">
                                    সম্পূর্ণ ঠিকানা - স্ট্রীট, থানা/উপজেলা ও জেলা লিখুন <span className="text-red-600">*</span>
                                    <textarea
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="sirabdi, sherpur,"
                                        rows={4}
                                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#08793d] focus:ring-2 focus:ring-[#08793d]/20"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">Selected product</h3>
                            <div className="mt-4 space-y-3">
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-sm font-medium text-slate-700">Product</p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">{selectedProduct.title}</p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <p className="text-sm text-slate-500">Box type</p>
                                        <p className="mt-2 text-base font-semibold text-slate-900">{selectedProduct.label}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <p className="text-sm text-slate-500">Price</p>
                                        <p className="mt-2 text-base font-semibold text-slate-900">৳ {formatPrice(selectedProduct.price)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900">Your order</h3>
                            <div className="mt-6 space-y-5">
                                <div className="flex items-start gap-3 rounded-3xl bg-slate-50 p-4">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="h-20 w-20 rounded-3xl object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-sm font-semibold text-slate-900">{selectedProduct.title}</p>
                                            <span className="text-sm font-semibold text-slate-900">x1</span>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-500">Subtotal</p>
                                        <p className="mt-1 text-base font-semibold text-slate-900">৳ {formatPrice(subtotal)}</p>
                                    </div>
                                </div>
                                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                                    ক্যাশ অন ডেলিভারি এ ৩০% সিকিউরিটি চার্জ থাকতে পারে। অর্ডার স্থির করার আগে ঠিকানা এবং মোবাইল নম্বর সঠিক আছে কিনা একটি একবার চেক করে নিন।
                                </div>
                                <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                                        <span>Subtotal</span>
                                        <span>৳ {formatPrice(subtotal)}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-slate-200 py-3">
                                        <span>Shipment Charge</span>
                                        <span>৳ {formatPrice(shipmentCharge)}</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 text-base font-semibold text-slate-900">
                                        <span>Total</span>
                                        <span>৳ {formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2fa74b] px-5 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(45,152,82,0.28)] transition hover:bg-[#28a13f]">
                                <FaLock className="h-4 w-4" />
                                কনফার্ম অর্ডার ৳ {formatPrice(total)}
                            </button>
                        </div>

                        <div className="rounded-[24px] bg-[#15773a] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(22,83,42,0.3)]">
                            সঠিক মোবাইল নং ও ঠিকানা দিয়ে অর্ডার করুন। সঠিকভাবে অর্ডার প্লেস করার ২৪ ঘণ্টার মধ্যে আমাদের কল সেন্টার থেকে আপনাকে কল করবে।
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-6 max-w-7xl rounded-[24px] bg-red-600 px-6 py-4 text-center text-base font-bold text-white shadow-[0_16px_40px_rgba(220,38,38,0.25)] sm:text-lg">
                কল সেন্টার: 01804275519
            </div>
        </section>
    )
}

export default Checkout;