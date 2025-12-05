import { Clock, DollarSign, ShoppingCart, Star, Truck } from 'lucide-react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router'
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
            image: "https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-home-service-house-cleaning-and-laundry-wash-png-image_12190003.png",
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
            <Navbar />
            <section className="relative min-h-screen flex items-center justify-center">
                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://www.realsimple.com/thmb/lEk5Qokq8nuhwvjcqHNaWFJhpx0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ultimate-guide-to-laundry-GettyImages-1318399310-a636429e8e9948aca141c3cc5ef679d2.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-xs"></div>
                </div>
                {/* Content */}
                <div className="relative max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-custom-blue mb-6 leading-tight mt-32 md:mt-0">
                        Oxford Blue Laundry <br />
                        <span className="text-custom-yellow italic text-6xl">- do other things</span>
                    </h1>

                    <p className="text-lg font-light sm:text-xl max-w-3xl mx-auto mb-12">
                        We pick up your laundry, clean it to perfection, fold and iron with care, then deliver it back to your doorstep.
                        Experience the Oxford Blue Laundry difference.
                    </p>

                    {/* CTA Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-2xl mx-auto">
                        <Link to="/pricing">
                            <div className="bg-custom-yellow/90 hover:bg-custom-yellow hover:cursor-pointer backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-custom-blue transition">
                                <DollarSign className="mx-auto mb-3 text-white" size={42} />
                                <h2 className="text-xl font-semibold text-white">View Pricing</h2>
                                <p className="text-base font-light text-white mt-1">
                                    Transparent pricing for all services
                                </p>
                            </div>
                        </Link>

                        <Link to="/order">
                            <div className="bg-custom-yellow/90 hover:bg-custom-yellow hover:cursor-pointer backdrop-blur-lg border border-white/20 p-6 rounded-2xl text-custom-blue transition">
                                <ShoppingCart className="mx-auto mb-3 text-white" size={42} />
                                <h2 className="text-xl text-white font-semibold">Place Order</h2>
                                <p className="text-base font-light text-white mt-1">
                                    Quick and easy order placement
                                </p>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            <section className='h-fit mx-auto p-10'>
                <h1 className='text-4xl font-bold text-custom-blue mb-10 text-center'>Why Choose Oxford blue?</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-7xl mx-auto'>
                    <div className='p-10'>
                        <div className='bg-custom-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4  transition-colors'>
                            <Truck strokeWidth={1} absoluteStrokeWidth className='h-12 w-12 text-white' />
                        </div>
                        <h1 className='font-bold text-2xl mb-4'>Pickup and delivery</h1>
                        <p className='text-base font-light text-slate-700 text-center max-w-4xl mx-auto mb-6'>
                            Convenient pickup and delivery right to your doorstep. No need to leave your home.
                        </p>
                    </div>
                    <div className='p-10'>
                        <div className='bg-custom-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4  transition-colors'>
                            <Star strokeWidth={1} absoluteStrokeWidth className='h-12 w-12 text-white' />
                        </div>
                        <h1 className='font-bold text-2xl mb-4'>Premium quality</h1>
                        <p className='text-base font-light text-slate-700 text-center max-w-4xl mx-auto mb-6'>
                            Professional cleaning, careful handling, and expert pressing for all your garments.
                        </p>
                    </div>
                    <div className='p-10'>
                        <div className='bg-custom-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4  transition-colors'>
                            <Clock strokeWidth={1} absoluteStrokeWidth className='h-12 w-12 text-white' />
                        </div>
                        <h1 className='font-bold text-2xl mb-4'>Fast turnaround</h1>
                        <p className='text-base font-light text-slate-700 text-center max-w-4xl mx-auto mb-6'>
                            Quick and reliable service with flexible scheduling to fit your busy lifestyle.
                        </p>
                    </div>
                </div>
            </section>
            <section className='h-fit p-10 bg-slate-100'>
                <h1 className='text-center font-bold text-4xl text-custom-blue mb-6'>Our simple process</h1>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    {
                        [
                            {
                                step: 1,
                                title: "pickup",
                                description: "We collect your laundry at your convenience",
                            },
                            {
                                step: 2,
                                title: 'Clean',
                                description: 'Professional cleaning with premium detergents'
                            },
                            {
                                step: 3,
                                title: 'Press & Fold',
                                description: 'Expert pressing and careful folding'
                            },
                            {
                                step: 4,
                                title: 'Deliver',
                                description: 'Fresh, clean clothes delivered to you'
                            },
                        ].map((process) => (
                            <div className='text-center'>
                                <h1 className='font-bold text-white text-3xl rounded-full bg-custom-yellow p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6'>{process.step}</h1>
                                <h2 className='text-xl font-bold text-gray-900 mb-2'>{process.title}</h2>
                                <p className='text-lg font-light text-slate-700 text-center max-w-4xl mx-auto mb-6'>{process.description}</p>
                            </div>

                        ))
                    }


                </div>
            </section>
            <section className='h-fit p-10'>
                <h1 className='text-center font-bold text-4xl text-custom-blue mb-6'>Our service process</h1>
                <p className='text- font-light text-center max-w-3xl mx-auto mb-10'>From pickup to delivery, see how we handle your laundry with the utmost care and professionalism.</p>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="py-10">
                        <div
                            className={`relative max-w-4xl mx-auto  ${service.step % 2 === 1 ? "flex flex-col lg:flex-row" : "flex flex-col lg:flex-row-reverse"} items-center gap-6 md:gap-15 `}>

                            {/* Step Badge */}
                            <div className={` ${service.step % 2 === 1 ? "absolute -top-5 -left-5" : " absolute -top-5 -right-5"} bg-custom-yellow text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl`}>
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
                                <h1 className="text-3xl font-bold text-custom-yellow leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-base font-light text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-1 bg-custom-yellow rounded-full"></div>
                                    <span className="text-custom-blue font-semibold tracking-wide">
                                        Step {service.step}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <section className='py-6 px-10 bg-custom-yellow max-w-6xl mx-6 md:mx-auto rounded-4xl mb-10'>
                <h1 className='font-bold text-4xl text-center mb-6'>Quality assurance</h1>
                <p className='text-lg font-light text-custom-blue text-center max-w-4xl mx-auto mb-6'>
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
                                <p className='text-sm font-light'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
