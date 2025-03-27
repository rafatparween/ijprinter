import React, { useRef } from "react"; 
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Customer = () => {
  const testimonialsRef = useRef(null);

  const scroll = (direction) => {
    if (testimonialsRef.current) {
      const { scrollLeft, clientWidth } = testimonialsRef.current;
      const cardWidth = 436; // Width of each testimonial card
      const gap = 16; // Space between cards
      const cardsToScroll = 3; // Number of visible cards
      const scrollAmount = direction === "left"
        ? scrollLeft - (cardWidth + gap) * cardsToScroll
        : scrollLeft + (cardWidth + gap) * cardsToScroll;
      testimonialsRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Meera Patel",
      location: "Delhi, India",
      date: "10/01/2024",
      review: "Meera Patel did an outstanding job with my marketing materials. She took the time to explain every step of the design process, ensuring that everything reflected my brand perfectly. Her attention to detail made this experience exceptional.",
      rating: 5,
      verified: true,
    },
    {
      name: "Karan Singh",
      location: "Mumbai, India",
      date: "09/20/2024",
      review: "Karan Singh was fantastic in helping me choose the right promotional items. He guided me through the options and ensured everything was delivered on time. His tips on visibility were particularly useful.",
      rating: 5,
      verified: true,
    },
    {
      name: "Anjali R.",
      location: "Chennai, India",
      date: "09/28/2024",
      review: "Anjali R. went above and beyond with my brochure design. She customized it to fit my needs and offered suggestions that enhanced my overall vision. Her creativity has significantly improved my marketing approach.",
      rating: 5,
      verified: true,
    },
    {
      name: "Rajesh M.",
      location: "Bangalore, India",
      date: "09/22/2024",
      review: "Rajesh M. was incredibly helpful with my flyer distribution strategy. He not only created eye-catching designs but also provided valuable insights on effective targeting. His expertise made a huge difference.",
      rating: 5,
      verified: true,
    },
    {
      name: "Priya K.",
      location: "Hyderabad, India",
      date: "09/30/2024",
      review: "Priya K. delivered exceptional service with my business card design. She explained the various options and helped me choose materials that matched my brand's image perfectly. Her guidance was invaluable.",
      rating: 5,
      verified: true,
    },
    {
      name: "Suresh N.",
      location: "Ahmedabad, India",
      date: "09/26/2024",
      review: "Suresh N. provided excellent service with my promotional posters. He carefully explained each step and ensured I was satisfied with the final designs. I appreciated his detailed guidance and expertise.",
      rating: 5,
      verified: true,
    },
  ];

  return (
    <div className="bg-white py-10 relative 2xl:w-[1431px] 2xl:ml-[231px] xl:w-[1414px] xl:ml-[52px]">
      <h2 className="text-center text-3xl font-bold mb-6 mt-[30px]">What our customers say</h2>
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform text-black p-2 rounded-full shadow-md focus:outline-none ml-[-55px] transition-colors duration-300 z-10"
          onClick={() => scroll("left")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowBackIosIcon style={{ fontSize: '20px' }} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform  text-black p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 z-10"
          onClick={() => scroll("right")}
          style={{ width: '32px', height: '32px' }}
        >
          <ArrowForwardIosIcon style={{ fontSize: '20px' }} />
        </button>
        <div
          ref={testimonialsRef}
          className="flex overflow-x-hidden"
          style={{ width: 'calc(100% - 64px)', padding: '0 16px' }}
        >
          <div className="flex" style={{ gap: '16px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex-shrink-0"
                style={{ width: '436px' }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
                <p className="mt-4">{testimonial.review}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  {testimonial.verified && (
                    <p className="text-blue-500 text-sm">Verified ✓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
