export default function InstallingDriversPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        {/* HP Logo */}
        <div className="mr-8">
          <img
            src="https://www.qwebcare.com/help/images/hp.jpg"
            alt="HP Logo"
            className="w-24 w-[225px] h-[225px]"
          />
        </div>
        <p className="text-xl font-semibold ">Installing Drivers..</p>
  
        {/* Printer Image */}
        <div>
          <img
            src="https://www.qwebcare.com/help/images/hel.gif"
            alt="Printer Image"
            className="w-[450px] h-[300px]"
          />
        </div>
        <div>
        <img
                src="https://www.qwebcare.com/help/images/gif.gif" 
                alt="Printer Error"
                width={377}
                height={250}
              />
        </div>
      </div>
    );
  }
  