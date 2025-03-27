import Head from "next/head";
import Footer from "../Components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Head>
        <title>Disclaimer | EzTech-Print</title>
        <meta name="description" content="Disclaimer page for EzTech-Print" />
      </Head>

      <div className="bg-gradient-to-r from-blue-500 via-teal-600 to-indigo-700 min-h-screen py-12 px-6 md:px-12 pt-16">
        {/* Increase the width by changing max-w-3xl to max-w-5xl */}
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-center text-[#2563EB] mb-8">
            Disclaimer
          </h1>
          <div className="space-y-6 text-gray-700">
            <p>
              The information provided by EzTech-Print (“we,” “us,” or “our”) on
              this website (the “Site”) is for general informational purposes
              only. All information on the Site is provided in good faith, and
              we make no representations or warranties of any kind, express or
              implied, regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the Site.
            </p>

            <p>
              Under no circumstance shall we have any liability to you for any
              loss or damage of any kind incurred as a result of the use of the
              Site or reliance on any information provided on the Site. Your use
              of the Site and your reliance on any information on the Site is
              solely at your own risk.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              External Links Disclaimer
            </h2>
            <p>
              The Site may contain (or you may be sent through the Site) links
              to other websites or content belonging to or originating from
              third parties. Such external links are not investigated, monitored,
              or checked for accuracy, adequacy, validity, reliability, or
              completeness by us. We do not warrant, endorse, guarantee, or
              assume responsibility for the accuracy or reliability of any
              information offered by third-party websites linked through the
              Site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Professional Disclaimer
            </h2>
            <p>
              The Site cannot and does not contain professional advice. The
              legal, financial, or other types of professional advice that may
              be referenced on the Site is provided for general informational
              purposes only and is not intended to be a substitute for advice
              from a qualified professional.
            </p>

            <p>
              We recommend consulting a qualified professional before acting
              upon any information presented on this Site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Changes to the Disclaimer
            </h2>
            <p>
              We reserve the right to amend or update this Disclaimer at any
              time. Any changes will be posted on this page with an updated
              revision date. We encourage you to review this Disclaimer
              periodically to stay informed about any modifications.
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

export default Disclaimer;
