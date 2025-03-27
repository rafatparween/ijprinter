export default function Wedo() {
    return (
      <div className="bg-gray-50 p-10 min-h-screen">
        <div className="text-center">
          <h2 className="text-green-600 font-semibold">Our Services</h2>
          <h1 className="text-4xl font-bold mt-2">What we do</h1>
          <p className="mt-4 text-gray-500">
            Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.
          </p>
        </div>
  
        <div className="flex justify-center mt-10">
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 p-2 rounded-full text-white">
              &larr;
            </button>
  
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <div className="flex items-center">
                <div className="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M9.049 2.927C9.673 1.997 10.327 1.997 10.951 2.927l1.385 2.293c.39.647.675 1.066 1.162 1.106l2.372.193c1.165.095 1.648.688 1.084 1.674l-1.785 2.97c-.41.683-.639 1.053-.486 1.585l.546 2.017c.298 1.101-.377 1.583-1.354 1.07l-2.467-1.279c-.647-.336-1.07-.374-1.585-.087l-2.467 1.28c-.978.512-1.652.031-1.354-1.07l.546-2.017c.153-.532-.076-.902-.486-1.585l-1.785-2.97c-.564-.986-.08-1.579 1.084-1.674l2.372-.193c.487-.04.772-.46 1.162-1.106l1.385-2.293z" />
                  </svg>
                </div>
                <div className="ml-3 text-sm">
                  <p className="font-medium">ALIMA ALISHA</p>
                  <p className="text-gray-400">Big data run it up the flag pole core competencies bench mark...</p>
                </div>
              </div>
            </div>
  
            <button className="bg-green-500 p-2 rounded-full text-white">
              &rarr;
            </button>
          </div>
        </div>
  
        <div className="mt-6 flex justify-center space-x-2">
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
        </div>
      </div>
    );
  }
  