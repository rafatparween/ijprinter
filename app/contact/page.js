'use client';

import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
        <div className="bg-white p-10">
            {/* Popular Questions Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Popular Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        'Is there any support for Bulk Orders?',
                        "Where's my order?",
                        'Where are my designs saved?',
                        "What if I'm not happy with my purchase?",
                        'Can you help me edit or fix the design of my product?',
                        'Can I change my order?',
                        'My EzTech Printer Solutions Account',
                        "My order hasn't arrived, what can I do?",
                        'Can I cancel my order?',
                        'What are your shipping speeds?'
                    ].map((question, index) => (
                        <button 
                            key={index} 
                            className="border border-gray-300 rounded-md p-4 flex justify-between items-center text-left hover:bg-gray-100"
                        >
                            <span>{question}</span>
                            <span>&gt;</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col lg:flex-row gap-20">
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact us</h3>
                    <div className="mb-8">
                        <p className="text-lg font-bold">Phone</p>
                        <p>02522-669393</p>
                        <p className="text-sm text-gray-500">Mon. – Sat. 10:00 AM – 7:00 PM</p>
                    </div>
                    <hr className="border-t border-gray-300 mb-8"/>
                    <div>
                        <p className="text-lg font-bold">Email</p>
                        <p className="text-sm text-gray-500 mb-4">Customer service specialists respond to emails from Monday – Saturday.</p>
                        <p className="mb-4">Our email is <a href="mailto:customerservice@eztechprintersolutions.com" className="text-blue-600">customerservice@eztechprintersolutions.com</a> or you can email us directly here.</p>
                        <button className="bg-black text-white py-2 px-4 rounded-md">Email us</button>
                    </div>
                </div>

                {/* Browse Help Centre Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">Designing with EzTech Printer Solutions</h4>
                        {['Designing my calendar', 'Getting started with design studio'].map((item, index) => (
                            <p key={index} className="mb-4 border-b border-gray-300 pb-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Print product details & information</h4>
                        {['Paper Stock Descriptions', 'Signage'].map((item, index) => (
                            <p key={index} className="mb-4 border-b border-gray-300 pb-2">{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Home;