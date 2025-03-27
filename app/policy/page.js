import Head from "next/head";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | EzTech-Print</title>
        <meta name="description" content="Privacy policy page for EzTech-Print " />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 min-h-screen py-12 px-6 md:px-12 pt-16">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-center text-[#2563EB] mb-10">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-gray-700">
            <p>
              At EzTech-Print, your privacy is a top priority for us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website and use our services. By accessing or using our website, you agree to the terms outlined in this policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Information We Collect
            </h2>
            <p>
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6">
              <li>Personal identification details such as your name, email address, phone number, and shipping address.</li>
              <li>Usage data, which includes information about your device, browser, IP address, and browsing activity on our website.</li>
              <li>Cookies and tracking technologies to enhance your user experience and track usage patterns.</li>
              <li>Payment and transaction details when you make a purchase on our site, including billing information.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              How We Use Your Information
            </h2>
            <p>
              We use the collected information for various purposes, including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>To provide and maintain our services, including processing orders and fulfilling your requests.</li>
              <li>To personalize your experience and improve our website's functionality and performance.</li>
              <li>To communicate with you, including sending order confirmations, updates, promotional offers, and newsletters.</li>
              <li>To monitor and analyze website traffic and usage patterns to improve user experience.</li>
              <li>To ensure compliance with legal obligations and resolve any disputes that may arise.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Data Security
            </h2>
            <p>
              We are committed to protecting your personal data and have implemented a range of security measures to safeguard your information. This includes encryption, firewalls, and secure payment gateways. However, no system is 100% secure, and we cannot guarantee the absolute security of your data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance the functionality of our website. Cookies are small files stored on your device that allow us to remember your preferences and personalize your browsing experience. You can manage your cookie preferences through your browser settings, but disabling cookies may affect certain features of the site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Sharing Your Information
            </h2>
            <p>
              We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with trusted third parties for the following purposes:
            </p>
            <ul className="list-disc pl-6">
              <li>Service providers who help us operate the website and fulfill orders, such as payment processors and shipping companies.</li>
              <li>Business partners who assist us in marketing and promotional activities.</li>
              <li>Authorities or legal entities when required by law, such as complying with a subpoena or protecting our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. These external sites are not operated by us, and we are not responsible for their content or privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Your Data Protection Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to correct any inaccuracies in your personal data.</li>
              <li>The right to delete or restrict the processing of your personal data in certain circumstances.</li>
              <li>The right to withdraw your consent for us to process your personal data, where applicable.</li>
              <li>The right to lodge a complaint with the relevant data protection authority.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              International Data Transfers
            </h2>
            <p>
              If you are located outside of the United States, please note that your data may be transferred to and processed in countries where we operate, including the United States. By using our website, you consent to such transfers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page with an updated revision date.
            </p>

            <p className="mt-8 text-center text-gray-600">
              Last updated: January 24, 2025
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
