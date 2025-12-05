import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { User, Phone, MapPin } from 'lucide-react'
function Order() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center mb-8 mt-28" >
                        <h1 className="text-4xl font-bold mb-4">Place Your Order</h1>
                        <p className="text-xl ">
                            Fill in your details and we'll take care of the rest
                        </p>
                    </div>

                    <div className="bg-white rounded-4xl shadow-lg p-8">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium  mb-2">
                                        <User className="inline h-4 w-4 mr-1" />
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"

                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium  mb-2">
                                        <Phone className="inline h-4 w-4 mr-1" />
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"

                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                        placeholder="0700000000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium  mb-2">Building Name *</label>
                                    <input
                                        type="text"
                                        name="building"

                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                        placeholder="e.g., Kabete Valley"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium  mb-2">
                                        <MapPin className="inline h-4 w-4 mr-1" />
                                        House Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="apartment"

                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                        placeholder="e.g., Apt 12B, House 45"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium  mb-2">Service Type *</label>
                                <select
                                    name="serviceType"

                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                >
                                    <option value="general">General Laundry</option>
                                    <option value="suits">Suits & Formal</option>
                                    <option value="homecare">Home Care</option>
                                    <option value="drycleaning">Dry Cleaning</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium  mb-2">
                                    Preferred Pickup Date *
                                </label>
                                <input
                                    type="date"
                                    name="pickupDate"

                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium  mb-2">
                                    Special Instructions (Optional)
                                </label>
                                <textarea
                                    name="notes"

                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                    placeholder="Any special instructions for handling your laundry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-custom-blue hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-colors"
                            >
                                Generate Order Number & Proceed to Payment
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Order
