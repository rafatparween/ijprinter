export default function HpSetup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="flex justify-center py-8">
        <img
          src="/hp-logo.png" // Replace with the HP logo image path
          alt="HP Logo"
          width={100}
          height={50}
        />
      </header>

      <main className="bg-white shadow-md p-6 md:p-12 rounded-lg text-center max-w-3xl w-full">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Set up your printer at 123.hp.com</h1>
        <p className="text-lg md:text-2xl mb-8">Download and install your printer software</p>

        <p className="mb-4">Enter your HP ENVY, OfficeJet, LaserJet or DeskJet model number.</p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder='Enter exact model number or name. Ex: "ENVY 4520"'
            className="border border-gray-400 rounded-md p-2 w-full md:w-2/3"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md w-full md:w-auto px-6">
            Search
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src="/printers.png" // Replace with the printer images path
            alt="Printers"
            width={300}
            height={200}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-blue-500">
          <a href="#" className="underline mb-2 md:mb-0">Where's the model number?</a>
          <a href="#" className="underline mb-2 md:mb-0">My device is not listed</a>
        </div>
      </main>

      <footer className="mt-8">
        <a href="#" className="text-blue-500 underline">United Kingdom - English</a>
      </footer>
    </div>
  );
}
