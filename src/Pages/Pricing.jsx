import { Box, BriefcaseBusiness, Shirt, Sparkles } from 'lucide-react'
import React from 'react'

function Pricing() {


    return (
        <>
            <section className='h-fit p-10'>
                <h1 className='text-4xl font-bold text-center mb-6'>Our pricing</h1>
                <p className='text-lg font-light text-center mb-6 max-w-2xl mx-auto'>Transparent, competitive pricing for all your laundry needs. All prices include pickup, cleaning, pressing, and delivery.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 max-w-7xl mx-auto px-4">
                    {/* General Laundry */}
                    <div className="bg-orange-100 border border-slate-300 p-8 rounded-3xl shadow hover:shadow-xl transition w-full">
                        <div className="mb-4 text-blue-800 mx-auto text-center">
                            <div className='bg-white p-6 w-fit rounded-full mx-auto shadow-xl mb-4'>
                                <Shirt strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />
                            </div>
                            <h1 className="text-2xl font-bold">General Laundry</h1>
                        </div>

                        <table className="w-full text-slate-700">
                            <tbody>
                                {[
                                    { name: "T-Shirts", price: "KES 50" },
                                    { name: "Jeans/Trousers", price: "KES 80" },
                                    { name: "Dresses", price: "KES 100" },
                                    { name: "Bedsheets (Single)", price: "KES 120" },
                                    { name: "Bedsheets (Double)", price: "KES 150" },
                                    { name: "Towels", price: "KES 60" },
                                ].map((item, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-slate-300 last:border-0"
                                    >
                                        <td className="py-4">{item.name}</td>
                                        <td className="py-4 text-right font-bold">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Suits & Formal */}
                    <div className="bg-green-100 border border-slate-200 p-8 rounded-3xl shadow hover:shadow-xl transition w-full">
                        <div className="mb-4 text-blue-800 mx-auto text-center">
                            <div className='bg-white p-6 w-fit rounded-full mx-auto shadow-xl mb-4'>
                                <BriefcaseBusiness strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />
                            </div>
                            <h1 className="text-2xl font-bold">Suits & Formal</h1>
                        </div>
                        <table className="w-full text-slate-700">
                            <tbody>
                                {[
                                    { name: "Business Suit (2-piece)", price: "KES 400" },
                                    { name: "Business Suit (3-piece)", price: "KES 500" },
                                    { name: "Blazer/Jacket", price: "KES 250" },
                                    { name: "Formal Dress", price: "KES 300" },
                                    { name: "Ties", price: "KES 50" },
                                    { name: "Dress Shirts", price: "KES 80" },
                                ].map((item, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-slate-300 last:border-0"
                                    >
                                        <td className="py-4">{item.name}</td>
                                        <td className="py-4 text-right font-bold">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Dry Cleaning */}
                    <div className="bg-pink-100 border border-slate-200 p-8 rounded-3xl shadow hover:shadow-xl transition">
                        <div className="mb-4 text-blue-800 mx-auto text-center">
                                                        <div className='bg-white p-6 w-fit rounded-full mx-auto shadow-xl mb-4'>

                            <Sparkles strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />
                            </div>
                            <h1 className="text-2xl font-bold">Dry Cleaning</h1>
                        </div>

                        <table className="w-full text-slate-700">
                            <tbody>
                                {[
                                    { name: "Leather Jackets", price: "KES 800" },
                                    { name: "Coats & Overcoats", price: "KES 600" },
                                    { name: "Silk Garments", price: "KES 300" },
                                    { name: "Wedding Dresses", price: "KES 1,500" },
                                    { name: "Curtains (per panel)", price: "KES 400" },
                                    { name: "Delicate Fabrics", price: "KES 250" },
                                ].map((item, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-slate-300 last:border-0"
                                    >
                                        <td className="py-4">{item.name}</td>
                                        <td className="py-4 text-right font-bold">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <Box className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold ">Additional Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold  mb-4">Express Service</h3>
                            <p className=" mb-2">Same-day delivery available</p>
                            <p className="font-bold text-blue-800">+50% surcharge</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold  mb-4">Stain Removal</h3>
                            <p className=" mb-2">Specialized treatment for tough stains</p>
                            <p className="font-bold text-blue-800">+KES 100 per item</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 bg-blue-800 text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Service Areas</h2>
                    <p className="text-center text-blue-100 mb-4">
                        Free pickup and delivery within 10km of our facility
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-blue-700 rounded-lg p-4">
                            <p className="font-semibold">Kingéero Mwisho</p>
                        </div>
                        <div className="bg-blue-700 rounded-lg p-4">
                            <p className="font-semibold">Nearby Areas</p>
                        </div>
                        <div className="bg-blue-700 rounded-lg p-4">
                            <p className="font-semibold">Extended Coverage</p>
                        </div>
                    </div>
                    <p className="text-center text-blue-200 text-sm mt-4">
                        Additional areas available with delivery fee
                    </p>
                </div>
            </section>
        </>
    )
}

export default Pricing
