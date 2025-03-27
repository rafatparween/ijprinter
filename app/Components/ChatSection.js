// components/ChatSection.js

export default function ChatSection() {
  return (
    <div className="bg-[#007ACC] h-screen flex justify-between items-center">
      {/* Left Side Chat Bar */}
      <div className="flex flex-col justify-center items-center bg-[#007ACC] p-4 rounded-tr-lg rounded-br-lg h-[300px] w-10">
        <p className="text-white text-lg font-semibold rotate-[-90deg] whitespace-nowrap">
          Chat With Us
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-1 text-left px-10">
        <h1 className="text-white text-3xl font-semibold mb-4">
          Let's Breathe New Life Into Your Printer! No Need To Stress, You're In The Right Spot.
        </h1>
        <p className="text-white text-xl font-medium mb-5">
          <span role="img" aria-label="chat icon">💬</span>
          Feel The Positivity Throughout The Process With Our Technicians. Call Us Now.
        </p>
        <p className="text-white mb-8">
          Every Problem Has A Solution, But Sometimes It's Hard To See, Especially In The Tech World
          Where Issues Can Hinder Success. But Our CompTIA A+ Certified Technicians Are Trained To
          Identify And Address Any Issue. We Recognize The Importance Of Your Time, So We Swiftly
          Resolve Your Tech Problems In Just Minutes.
        </p>

        {/* Chat Support Box */}
        <div className="flex items-center bg-white p-6 rounded-lg shadow-lg max-w-md">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-[#007ACC]"
            >
              <path
                fillRule="evenodd"
                d="M18 13a5 5 0 11-8.001-3.997A5 5 0 0118 13zm-4 7c-3.86 0-7 1.343-7 3v1h14v-1c0-1.657-3.14-3-7-3zm-7-2a8.96 8.96 0 00-2.564.436A9.002 9.002 0 0112 2a9.002 9.002 0 019.564 15.436A8.96 8.96 0 0012 18zm0-14a7 7 0 100 14 7 7 0 000-14z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-[#007ACC] font-semibold">
              Live chat support provides you with the opportunity to engage in real-time, interactive
              conversations with dedicated support agents.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#00A3C4] text-white font-bold rounded-lg shadow-md hover:bg-[#007b94] transition-all duration-200">
              Live Chat Support
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-shrink-0 pr-10">
        <img
          src="/assets/per.png"
          alt="Support Agent"
          className="h-[400px] w-auto object-contain"
        />
      </div>
    </div>
  );
}
