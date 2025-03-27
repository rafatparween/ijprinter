import React from 'react';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen pt-16 ">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16  ">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to EzTech-Print</h1>
          <p className="text-lg">
            Revolutionizing the way you think about printing and design services.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2563EB]">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            At EzTech-Print, we pride ourselves on delivering innovative, high-quality printing solutions to individuals and businesses alike. 
            Founded with the vision of combining technology with creativity, we have become a trusted name in the printing industry. Our journey began with a 
            small team of designers and developers who believed in the power of technology to transform the printing experience. Today, we serve thousands of 
            clients globally, offering customized printing solutions for every need.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-200 py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2563EB]">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Our mission is to make printing simple, accessible, and affordable for everyone. 
            Whether you're a small business owner, a student, or a corporate organization, EzTech-Print is here to meet your printing needs with precision and care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer-Centric</h3>
              <p>We prioritize our customers' needs and ensure the highest level of satisfaction in every project we handle.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Solutions</h3>
              <p>We are committed to using sustainable materials and eco-friendly practices to minimize our environmental impact.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation-Driven</h3>
              <p>By leveraging the latest technology, we deliver cutting-edge printing services to our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2563EB]">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Printing</h3>
              <p>
                From business cards to banners, we offer a wide range of customizable printing solutions tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Graphic Design</h3>
              <p>
                Our talented team of designers can help you create stunning visuals for your brand or personal projects.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p>
                We ensure timely delivery without compromising on quality, so your projects are always on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers who trust EzTech-Print for all their printing and design needs.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
