import { Clock, DollarSign, ShoppingCart, Star, Truck } from 'lucide-react'
import React from 'react'

function Home() {

    const services = [
        {
            title: "Professional Pickup Service",
            description: "Our friendly team arrives at your doorstep to collect your laundry with care and professionalism.",
            image: "https://images.ctfassets.net/9ycpqnc6ohsr/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg",
            step: 1,
        },
        {
            title: "Expert Cleaning Process",
            description: "State-of-the-art equipment and premium detergents ensure your clothes get the best treatment.",
            image: "https://images.ctfassets.net/9ycpqnc6ohsr/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg",
            step: 2,
        },
        {
            title: "Precision ironing and folding",
            description: "Skilled professionals iron and fold each garment with attention to detail and care.",
            image: "https://images.ctfassets.net/9ycpqnc6ohsr/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg",
            step: 3,
        },
        {
            title: "Timely delivery",
            description: "Your fresh, clean laundry is delivered back to you right on schedule, ready to wear.",
            image: "https://images.ctfassets.net/9ycpqnc6ohsr/6CCVOCZnGmKCfE1HiETinK/f8cb90a383efdbb80eae1893374a4a52/ef9e5dab2cc86043cb7dc3a241c72716_2x.jpg",
            step: 4
        }
    ]

    return (
        <>
            <section className='h-screen'>
                <div className='mx-auto text-center mt-32 p-4'>
                    <h1 className='text-4xl font-extrabold text-blue-800 mb-10'>
                        Oxford blue laundry <br /> do other things
                    </h1>
                    <p className='font-light text-lg'>
                        We pick up your laundry, clean it to perfection, fold and iron with care, then deliver it back to your doorstep.
                        Experience the Oxford Blue Laundry difference.
                    </p>
                </div>
                <div className='flex justify-evenly text-center'>
                    <div >
                        <DollarSign className='mx-auto' />
                        <h1>View pricing</h1>
                        <p>Transparent pricing for all services</p>
                    </div>
                    <div>
                        <ShoppingCart className='mx-auto' />
                        <h1>Place order</h1>
                        <p>Quick and easy order placement</p>
                    </div>
                </div>
            </section>
            <section className='h-fit mx-auto bg-slate-300'>
                <h1 className='text-4xl font-bold text-blue-800 mb-10 text-center'>Why Choose Oxford blue?</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto'>
                    <div className='p-10'>
                        <Truck size={72} strokeWidth={2} absoluteStrokeWidth className='mx-auto text-blue-800 mb-6 bg-blue-200 rounded-full p-3' />
                        <h1 className='font-bold text-2xl mb-4'>Pickup and delivery</h1>
                        <p>
                            Convenient pickup and delivery right to your doorstep. No need to leave your home.
                        </p>
                    </div>
                    <div className='p-10'>
                        <Star size={72} strokeWidth={2} absoluteStrokeWidth className='mx-auto text-blue-800 mb-6 bg-blue-200 rounded-full p-3' />
                        <h1 className='font-bold text-2xl mb-4'>Premium quality</h1>
                        <p>
                            Professional cleaning, careful handling, and expert pressing for all your garments.
                        </p>
                    </div>
                    <div className='p-10'>
                        <Clock size={72} strokeWidth={2} absoluteStrokeWidth className='mx-auto text-blue-800 mb-6 bg-blue-200 rounded-full p-3' />
                        <h1 className='font-bold text-2xl mb-4'>Fast turnaround</h1>
                        <p>
                            Quick and reliable service with flexible scheduling to fit your busy lifestyle.
                        </p>
                    </div>
                </div>
            </section>
            <section className='h-fit p-10'>
                <h1>Our simple process</h1>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div>
                        <h1>1</h1>
                        <h2>Pickup</h2>
                        <p>We collect your laundry at your convenience</p>
                    </div>
                    <div>
                        <h1>2</h1>
                        <h2>Clean</h2>
                        <p>Professional cleaning with premium detergents</p>
                    </div>
                    <div>
                        <h1>3</h1>
                        <h2>Press and fold</h2>
                        <p>Expert pressing and careful folding</p>
                    </div>
                    <div>
                        <h1>4</h1>
                        <h2>Deliver</h2>
                        <p>Fresh, clean clothes delivered to you</p>
                    </div>
                </div>
            </section>
            <section className='h-fit p-10'>
                <h1 className='text-center font-bold text-4xl text-blue-800 mb-6'>Our service process</h1>
                <p className='text- font-light text-center max-w-3xl mx-auto mb-10'>From pickup to delivery, see how we handle your laundry with the utmost care and professionalism.</p>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="py-10">
                        <div
                            className="relative max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-6 md:gap-15">

                            {/* Step Badge */}
                            <div className="absolute -top-5 -left-5 bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl">
                                {service.step}
                            </div>

                            {/* Image */}
                            <img
                                className="lg:w-1/2 w-full h-80 object-cover rounded-4xl shadow-md"
                                src={service.image}
                                alt={service.title}
                            />

                            {/* Content */}
                            <div className="lg:w-1/2 space-y-6">
                                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-base font-light text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-1 bg-blue-800 rounded-full"></div>
                                    <span className="text-blue-800 font-semibold tracking-wide">
                                        Step {service.step}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className='p-10 bg-blue-200 max-w-7xl mx-6 md:mx-auto rounded-4xl mb-10'>
                <h1 className='font-bold text-3xl text-center mb-4'>Quality assurance</h1>
                <p className='text-lg font-light text-slate-700 text-center max-w-4xl mx-auto mb-6'>
                    Every garment goes through our rigorous quality check process before delivery.
                    We guarantee satisfaction with every order or we'll make it right.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
                    {
                        [
                            {
                                title: "100% satisfaction.",
                                description: "Guaranteed quality or we redo it free."
                            },
                            {
                                title: "Eco-friendly.",
                                description: "Environmentally safe cleaning products."

                            },
                            {
                                title: "Insured service",
                                description: "Your garments are fully protected."
                            }
                        ].map((item) => (
                            <div className='bg-white p-6 rounded-3xl text-center'>
                                <h1 className='text-xl font-bold mb-3'>
                                    {item.title}
                                </h1>
                                <p className='text-sm'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default Home
