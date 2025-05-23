"use client";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="mb-4">
              This is an unofficial fan website dedicated to Eminem. We are not affiliated with, authorized by, 
              licensed by, endorsed by, or in any way officially connected with Eminem, his management, 
              or any of his companies.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect minimal information necessary to provide you with the best fan experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Basic browsing data (IP address, browser type)</li>
              <li>Information you voluntarily provide (comments, feedback)</li>
              <li>Analytics data to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              Your information is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website functionality</li>
              <li>Respond to your inquiries</li>
              <li>Analyze website performance</li>
              <li>Maintain website security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We use trusted third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website analytics</li>
              <li>Content delivery</li>
              <li>Social media integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of analytics</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact us through our contact form. 
              We aim to respond to all privacy-related requests within 30 days.
            </p>
          </section>

          <div className="text-sm text-gray-400 mt-12">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 