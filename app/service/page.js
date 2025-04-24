import React from 'react';
import { FaRocket, FaChartLine, FaMobile, FaCode, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: "Digital Transformation",
      description: "Accelerate your business growth with our cutting-edge digital transformation solutions that streamline operations and enhance customer experiences.",
      features: ["Cloud migration", "Process automation", "AI integration", "Data analytics"]
    },
    {
      icon: <FaChartLine className="text-4xl text-green-500" />,
      title: "Growth Marketing",
      description: "Data-driven marketing strategies that deliver measurable results and help you acquire and retain more customers.",
      features: ["SEO optimization", "Social media campaigns", "Conversion rate optimization", "Marketing automation"]
    },
    {
      icon: <FaMobile className="text-4xl text-purple-500" />,
      title: "Mobile Development",
      description: "Beautiful, high-performance mobile applications for iOS and Android that engage users and drive business results.",
      features: ["Native iOS/Android apps", "Cross-platform solutions", "UI/UX design", "App store optimization"]
    },
    {
      icon: <FaCode className="text-4xl text-orange-500" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance.",
      features: ["React/Next.js development", "Node.js backends", "Progressive Web Apps", "API integration"]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your business from threats and ensure compliance with industry standards.",
      features: ["Vulnerability assessments", "Penetration testing", "Security training", "Incident response"]
    },
    {
      icon: <FaHeadset className="text-4xl text-teal-500" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your systems running smoothly and address issues immediately.",
      features: ["Help desk services", "Remote monitoring", "Priority response", "Dedicated account managers"]
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support Availability" },
    { value: "500+", label: "Happy Clients" },
    { value: "10x", label: "ROI Average" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="text-blue-600">Premium</span> Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We deliver exceptional digital solutions tailored to your business needs, helping you stay ahead in today's competitive landscape.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-8 pb-8 text-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto mt-24 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-8 py-12 sm:p-16 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
            <p className="text-blue-100 max-w-2xl">
              Let's discuss how we can help you achieve your goals with our premium services tailored to your specific needs.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;