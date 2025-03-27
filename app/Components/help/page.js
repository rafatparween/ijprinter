"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showPartnerOnboarding, setShowPartnerOnboarding] = useState(false);

  // useEffect to log the state values on the client-side to debug
  useEffect(() => {
    console.log('showFAQ:', showFAQ);
    console.log('showLegal:', showLegal);
    console.log('showPartnerOnboarding:', showPartnerOnboarding);
  }, [showFAQ, showLegal, showPartnerOnboarding]);

  return (
    <div className="bg-[#37718e] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white text-center mb-8 mt-[60px]">
          Help & Support
        </h1>
        <p className="text-lg text-white text-center mb-16">
          Let's take a step ahead and help you better.
        </p>
        <div className="bg-white p-8 rounded-md shadow-md">
          <Section 
            title="Partner Onboarding" 
            content={<PartnerOnboardingContent />} 
            isVisible={showPartnerOnboarding} 
            toggleVisibility={() => setShowPartnerOnboarding(!showPartnerOnboarding)} 
          />
          <Section 
            title="Legal" 
            content={<LegalContent />} 
            isVisible={showLegal} 
            toggleVisibility={() => setShowLegal(!showLegal)} 
          />
          <Section 
            title="FAQs" 
            content={<FAQContent />} 
            isVisible={showFAQ} 
            toggleVisibility={() => setShowFAQ(!showFAQ)} 
          />
        </div>
      </div>
    </div>
  );
}

const Section = ({ title, content, isVisible, toggleVisibility }) => (
  <>
    <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={toggleVisibility}>
      <h2 className="text-lg font-bold">{title}</h2>
      <svg className={`h-4 w-4 transition-transform duration-200 ${isVisible ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div className={`ml-4 ${isVisible ? 'block' : 'hidden'}`}>
      {content}
    </div>
  </>
);

const PartnerOnboardingContent = () => (
  <>
    <div className="border-b py-2">
      <p className="text-gray-600">How do I change the promo code in the cart?</p>
    </div>
    {/* Other content items */}
  </>
);

const LegalContent = () => (
  <div className="ml-4">
    {/* Legal content here */}
  </div>
);

const FAQContent = () => (
  <div className="ml-4">
    {/* FAQ content here */}
  </div>
);
