import { Box, BriefcaseBusiness, Shirt, Sparkles } from 'lucide-react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Pricing() {

    const laundry_services = [
        {
            category: "General laundry",
            icon: <Shirt strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />,
            laundry_items:
                [
                    { name: "T-Shirts", price: "KES 50" },
                    { name: "Jeans/Trousers", price: "KES 80" },
                    { name: "Dresses", price: "KES 100" },
                    { name: "Bedsheets (Single)", price: "KES 120" },
                    { name: "Bedsheets (Double)", price: "KES 150" },
                    { name: "Towels", price: "KES 60" },
                    { name: "Ties", price: "KES 50" },
                    { name: "Dress Shirts", price: "KES 80" },
                ],
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
        },
        {
            category: "Suits and formal",
            icon: <BriefcaseBusiness strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />,
            laundry_items: [
                { name: "Business Suit (2-piece)", price: "KES 500" },
                { name: "Business Suit (3-piece)", price: "KES 600" },
                { name: "Blazer/Jacket", price: "KES 250" },
                { name: "Formal Dress", price: "KES 300" },

            ],
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
        },
        {
            category: "Dry cleaning",
            icon: <Sparkles strokeWidth={1} absoluteStrokeWidth className="w-10 h-10 mx-auto" />,
            laundry_items: [
                { name: "Leather Jackets", price: "KES 800" },
                { name: "Coats & Overcoats", price: "KES 600" },
                { name: "Silk Garments", price: "KES 300" },
                { name: "Wedding Dresses", price: "KES 1,500" },
                { name: "Curtains (per panel)", price: "KES 400" },
                { name: "Delicate Fabrics", price: "KES 250" },
                { name: "Duvet", price: "KES 800" }
            ],
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
        },
    ]


    return (
        <>
            <Navbar />
            <section className='h-fit p-10 mt-32'>
                <h1 className='text-5xl font-bold text-center mb-6'>Our pricing</h1>
                <p className='text-lg font-light text-center mb-6 max-w-2xl mx-auto'>Transparent, competitive pricing for all your laundry needs. All prices include pickup, cleaning, pressing, and delivery.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 max-w-7xl mx-auto px-4">
                    {/* General Laundry */}
                    {
                        laundry_services.map((laundry_service, index) => (
                            <div
                                key={index}
                                className={`${laundry_service.bgColor} border ${laundry_service.borderColor} p-8 rounded-3xl shadow hover:shadow-xl transition w-full`}>
                                <div className="mb-4 text-custom-blue mx-auto text-center">
                                    <div className='bg-white p-6 w-fit rounded-full mx-auto shadow-xl mb-4'>
                                        {laundry_service.icon}
                                    </div>
                                    <h1 className="text-2xl font-bold">{laundry_service.category}</h1>
                                </div>

                                <table className="w-full">
                                    <tbody>
                                        {laundry_service.laundry_items.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-slate-300 last:border-0"
                                            >
                                                <td className="py-4">{item.name}</td>
                                                <td className="py-4 text-right font-bold">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        ))
                    }
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <Box className="h-12 w-12 text-custom-blue mx-auto mb-4" />
                        <h2 className="text-2xl font-bold ">Additional Services</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold  mb-4">Express Service</h3>
                            <p className=" mb-2">Same-day delivery available</p>
                            <p className="font-bold text-custom-blue">+50% surcharge</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold  mb-4">Stain Removal</h3>
                            <p className=" mb-2">Specialized treatment for tough stains</p>
                            <p className="font-bold text-custom-blue">+KES 100 per item</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 bg-custom-blue text-white rounded-2xl p-8">
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
            <Footer />
        </>
    )
}

export default Pricing
