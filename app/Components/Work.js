export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('/path-to-your-image.jpg')`,
          }}
        >
          <div className="text-center text-white">
            <h2 className="text-xl md:text-2xl font-semibold">Let's Work Together</h2>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Need a successful <span className="text-teal-500">project?</span>
            </h1>
            <button className="mt-6 px-8 py-3 bg-white text-teal-500 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
              GET STARTED
            </button>
          </div>
        </section>
      </div>
    );
  }
  