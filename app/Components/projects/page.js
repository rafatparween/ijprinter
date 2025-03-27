// pages/index.js
export default function Home() {
    return (
      <div className="min-h-screen bg-white flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-50 p-8 border-r">
          <h2 className="text-lg font-semibold mb-6">Account</h2>
          <ul className="space-y-4">
            <li className="text-gray-800">Dashboard</li>
          </ul>
  
          <h2 className="text-lg font-semibold mt-8 mb-6">Workspace</h2>
          <ul className="space-y-4">
            <li className="text-gray-800">My Projects</li>
            <li className="text-gray-800">My Design Services</li>
            <li className="text-gray-800">Websites & Digital</li>
            <li className="text-gray-800">Brand Kit</li>
            <li className="text-gray-800">My Uploads</li>
            <li className="text-gray-800">Favourite Templates</li>
          </ul>
  
          <h2 className="text-lg font-semibold mt-8 mb-6">Orders</h2>
          <ul className="space-y-4">
            <li className="text-gray-800">Order History & Reorder</li>
            <li className="text-gray-800">Subscriptions</li>
          </ul>
  
          <h2 className="text-lg font-semibold mt-8 mb-6">Settings</h2>
          <ul className="space-y-4">
            <li className="text-gray-800">Account Settings</li>
            <li className="text-gray-800">Payment & Delivery</li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-12 mt-[262px]">
          <h1 className="text-3xl font-bold mb-4">My Projects</h1>
          <p className="mb-8">
            Sign in to save your work. You’re shopping as a guest – we recommend you{" "}
            <a href="#" className="text-blue-500 underline">
              sign in to your VistaPrint account (or create one now)
            </a>.
          </p>
  
          <p className="mb-6 text-lg">Ready to create? So are we. Here are some popular starting points:</p>
  
          <ul className="space-x-4">
            <li className="inline-block">
              <a href="#" className="text-blue-500 underline">
                Business cards
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-blue-500 underline">
                Marketing Materials
              </a>
            </li>
            <li className="inline-block">
              <a href="#" className="text-blue-500 underline">
                Invitations & Stationery
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  