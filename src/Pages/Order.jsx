import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { User, Phone, MapPin, CheckCircle } from 'lucide-react'


function Order() {


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        apartment: '',
        building: '',
        serviceType: [],
        pickupDate: '',
        notes: '',
    })
    const [orderNumber, setOrderNumber] = useState('');
    const [showPayment, setShowPayment] = useState(false);

    const handleChange = (e) => {
        const { name, value, multiple, options } = e.target;

        if (multiple) {
            const selectedValues = Array.from(options)
                .filter(option => option.selected)
                .map(option => option.value);

            setFormData(prev => ({
                ...prev,
                [name]: selectedValues
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const newOrderNumber = generateOrderNumber();
        setOrderNumber(newOrderNumber);
        setShowPayment(true)
    }

    function generateOrderNumber() {
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return (`OXB${timestamp}${random}`)

    }
    // ✅ Generate dynamic WhatsApp message
    const generateWhatsAppMessage = () => {
        const message = `
    🧺 *New Laundry Order - Oxford Blue Laundry*

        *Order Number:* ${orderNumber || '(Not generated yet)'}
        *Name:* ${formData.name}
        *Phone:* ${formData.phone}
        *Address:* ${formData.building}, ${formData.apartment}
        *Service Types:* ${formData.serviceType.map(type => {
            if (type === "general") return "General Laundry"
            if (type === "suits") return "Suits & Formal"
            if (type === "homecare") return "Home Care"
            if (type === "drycleaning") return "Dry Cleaning"
        }).join(", ")}

        *Pickup Date:* ${formData.pickupDate}
        *Notes:* ${formData.notes || 'None'}

        Please confirm my order.
    `;

        return `https://wa.me/254797228429?text=${encodeURIComponent(message)}`;
    };

    // display this div if show payment is true change the UI
    if (showPayment) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-2xl mx-auto px-4 mt-20">
                        <div className="bg-white rounded-4xl shadow-xl p-8 text-center">
                            <CheckCircle className="h-16 w-16 text-custom-yellow mx-auto mb-6" />
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your order is ready to be placed!</h1>

                            <div className="bg-custom-yellow rounded-full p-6 mb-8">
                                <h2 className="text-xl font-bold text-white mb-2">Your Order Number</h2>
                                <p className="text-3xl font-bold text-white">{orderNumber}</p>
                            </div>

                            <div className="text-left mb-8 space-y-2">
                                <p>
                                    <strong>Name:</strong> {formData.name}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {formData.phone}
                                </p>
                                <p>
                                    <strong>Address:</strong> {formData.apartment}, {formData.building}
                                </p>
                                <p>
                                    <strong>Services:</strong> {formData.serviceType.map(type => {
                                        if (type === "general") return "General Laundry"
                                        if (type === "suits") return "Suits & Formal"
                                        if (type === "homecare") return "Home Care"
                                        if (type === "drycleaning") return "Dry Cleaning"
                                    }).join(", ")}
                                    {/* {' '}
                                    {formData.serviceType === 'general'
                                        ? 'General Laundry'
                                        : formData.serviceType === 'suits'
                                            ? 'Suits & Formal'
                                            : formData.serviceType === 'homecare'
                                                ? 'Home Care'
                                                : 'Dry Cleaning'} */}
                                </p>
                                <p>
                                    <strong>Pickup Date:</strong> {formData.pickupDate}
                                </p>
                            </div>

                            {/* ✅ Add WhatsApp order confirmation button */}
                            <a
                                href={generateWhatsAppMessage()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-6 bg-custom-green hover:bg-custom-green2 text-white font-bold py-3 px-6 rounded-full w-fit mx-auto transition-colors"
                            >
                                Send Order via WhatsApp
                            </a>

                        </div>
                    </div>
                </div>
            </>

        );
    }

    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center mb-8 mt-18" >
                        <h1 className="text-4xl font-bold mb-4">Place Your Order</h1>
                        <p className="text-xl ">
                            Fill in your details and we'll take care of the rest
                        </p>
                    </div>
                    <div className="bg-custom-blue rounded-4xl shadow-lg p-8 text-white">
                        <form className="space-y-6"
                            onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium  mb-2">Service Type *</label>
                                <select
                                    name="serviceType"
                                    onChange={handleChange}
                                    required
                                    multiple
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                >
                                    <option value="general">General Laundry</option>
                                    <option value="suits">Suits & Formal</option>
                                    <option value="homecare">Home Care</option>
                                    <option value="drycleaning">Dry Cleaning</option>
                                </select>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium  mb-2">
                                        <User className="inline h-4 w-4 mr-1" />
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border placeholder:text-white border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
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
                                        onChange={handleChange}
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
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                        placeholder="e.g., Apt 12B, House 45"
                                    />
                                </div>
                            </div>



                            <div>
                                <label className="block text-sm font-medium  mb-2">
                                    Preferred Pickup Date *
                                </label>
                                <input
                                    type="date"
                                    name="pickupDate"
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium  mb-2">
                                    Preferred Pickup Time *
                                </label>
                                <select
                                    type="date"
                                    name="pickupDate"
                                    onChange={handleChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                >
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium  mb-2">
                                    Special Instructions (Optional)
                                </label>
                                <textarea
                                    name="notes"
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:ring-1 focus:ring-custom-blue focus:border-custom-blue transition-colors"
                                    placeholder="Any special instructions for handling your laundry..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex bg-custom-yellow hover:text-white hover:cursor-pointer text-custom-blue font-bold py-4 px-6 rounded-4xl w-fit mx-auto transition-colors"
                                onClick={generateOrderNumber}
                            >
                                Generate Order Number & Proceed to place it
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
