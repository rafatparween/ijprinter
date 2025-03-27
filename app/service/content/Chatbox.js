import React, { useState } from 'react';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 left-5">
      <div
        className={`fixed bottom-20 left-5 w-[300px] bg-gray-100 border border-gray-300 rounded-lg p-2 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <h3 className="text-lg font-semibold">Support Chat</h3>
        <textarea
          placeholder="Type your message..."
          className="w-full h-24 mb-2 p-2 border border-gray-300 rounded-md"
        />
        <button className="w-full bg-green-500 text-white py-2 rounded-md">Send</button>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full border-none cursor-pointer transition-colors duration-300 hover:bg-blue-600"
        onClick={toggleChat}
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
    </div>
  );
};

export default ChatSupport;
