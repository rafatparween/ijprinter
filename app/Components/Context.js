import Image from 'next/image';

export default function Context() {
  return (
    <div className="bg-darkBlue text-white h-[600px] flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold mb-4">
          Comprehensive Enterprise Custom Software Development Process
        </h1>
        <button className="bg-lightBlue text-darkBlue px-6 py-3 rounded-lg font-semibold hover:opacity-90 shadow-lg">
          Discuss With Our Expert
        </button>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 lg:px-16">
        {/* Service Card 1 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/Analysis.png"
              alt="PSD Designing"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
          Analysis Laravel App Development
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/Deployment.png"
              alt="HTML Conversion"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
            HTML Conversion
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/lasticon.png"
              alt="Shopify Development"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
            Hubspot Deployment
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg  hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/psd.png"
              alt="PSD Designing"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
          PSD Designing
          </p>
        </div>

        {/* Service Card 5 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg  hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/html.png"
              alt="Hubspot Deployment"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
          HTML Conversion
          </p>
        </div>

        {/* Service Card 6 */}
        <div className="bg-black rounded-lg p-4 flex flex-col items-center shadow-lg  hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
          <div className="h-16 w-16 relative mb-4">
            <Image
              src="/shopify.png"
              alt="E-Commerce Development"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-darkBlue font-semibold text-lg text-center">
          Shopify Development
          </p>
        </div>
      </div>
    </div>
  );
}
