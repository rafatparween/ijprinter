import React from 'react';
import Context from './Context';

const services = [
  {
    title: 'Digital Marketing',
    description:
      'We excel in crafting effective digital marketing strategies, leveraging the power of SEO, SEM, social media, and content marketing to boost your online presence and drive growth.',
    icon: '/digital.png',
  },
  {
    title: 'App Development',
    description:
      'Our team of skilled app developers can transform your ideas into user-friendly and innovative mobile and web applications, tailored to your business needs.',
    icon: '/app.png',
  },
  {
    title: 'Web Designing & Development',
    description:
      'We create visually stunning and responsive websites that not only captivate your audience but also deliver exceptional user experiences.',
    icon: '/web.png',
  },
  {
    title: 'Salesforce Development',
    description:
      'Unlock the full potential of Salesforce with our expert development services, customizing the platform to meet your unique business requirements.',
    icon: '/salesforce.svg',
  },
  {
    title: 'AI Development',
    description:
      'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and enhance customer engagement through our AI development solutions.',
    icon: '/ai.svg',
  },
  {
    title: 'Software Development',
    description:
      'Our software development expertise covers a wide range of solutions, from desktop applications to enterprise-level software, ensuring efficiency and scalability.',
    icon: '/software.svg',
    highlight: true,
  },
  
];

const ServicesSection = () => {
  return (
    <>
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white  py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="text-purple-300 text-xl font-medium font-dancing">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">What we do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-0 justify-items-center 2xl:ml-[212px] 2xl:mr-[227px]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg overflow-hidden transition-colors duration-300 h-[366px] w-[400px] ${
              service.highlight
                ? 'bg-gradient-to bg-gray-800 '
                : 'bg-gray-800'
            } hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500`}
          >
            <div className="absolute top-2 right-2">
              {/* <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg> */}
            </div>
            <div className="mb-4">
              <img src={service.icon} alt={service.title} className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Context/>
    </>
  );
};

export default ServicesSection;


// import React from 'react';

// const services = [
//   {
//     title: 'Digital Marketing',
//     description:
//       'We excel in crafting effective digital marketing strategies, leveraging the power of SEO, SEM, social media, and content marketing to boost your online presence and drive growth.',
//     icon: '/digital.png',
//   },
//   {
//     title: 'App Development',
//     description:
//       'Our team of skilled app developers can transform your ideas into user-friendly and innovative mobile and web applications, tailored to your business needs.',
//     icon: '/app.png',
//   },
//   {
//     title: 'Web Designing & Development',
//     description:
//       'We create visually stunning and responsive websites that not only captivate your audience but also deliver exceptional user experiences.',
//     icon: '/web.png',
//   },
//   {
//     title: 'Salesforce Development',
//     description:
//       'Unlock the full potential of Salesforce with our expert development services, customizing the platform to meet your unique business requirements.',
//     icon: '/salesforce.svg',
//   },
//   {
//     title: 'AI Development',
//     description:
//       'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and enhance customer engagement through our AI development solutions.',
//     icon: '/ai.svg',
//   },
//   {
//     title: 'Software Development',
//     description:
//       'Our software development expertise covers a wide range of solutions, from desktop applications to enterprise-level software, ensuring efficiency and scalability.',
//     icon: '/software.svg',
//     highlight: true,
//   },
//   {
//     title: 'IoT Development',
//     description:
//       'Dive into the world of IoT with our development services, connecting devices and systems to collect and analyze data, paving the way for innovative applications.',
//     icon: '/iot.svg',
//     highlight: true,
//   },
//   {
//     title: 'Hire Developers',
//     description:
//       'Access top-tier developers skilled in various technologies and domains, allowing you to scale your team according to project requirements.',
//     icon: '/hire.svg',
//     highlight: true,
//   },
//   {
//     title: 'AEM Development',
//     description:
//       'We specialize in Adobe Experience Manager (AEM) development, creating powerful, dynamic, and content-rich digital experiences to engage your audience effectively.',
//     icon: '/aem.svg',
//     highlight: true,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white py-20 px-6 md:px-8">
//       <div className="text-center mb-12">
//         <p className="text-purple-300 text-xl font-medium font-dancing">Our Services</p>
//         <h2 className="text-4xl md:text-5xl font-bold mt-2">What We Do</h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 justify-items-center">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`relative p-6 rounded-lg overflow-hidden transition-colors duration-300 h-[366px] w-[400px] ${
//               service.highlight
//                 ? 'bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800'
//                 : 'bg-gray-800'
//             } hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500`}
//           >
//             <div className="absolute top-2 right-2">
//               {/* Optional icon or decoration */}
//             </div>
//             <div className="mb-4">
//               <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
//               <h3 className="text-2xl font-semibold">{service.title}</h3>
//             </div>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;





