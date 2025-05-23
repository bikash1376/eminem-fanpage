"use client";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms of Use</h1>
        
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="mb-4">
              This is an unofficial fan website dedicated to Eminem. We are not affiliated with, authorized by, 
              licensed by, endorsed by, or in any way officially connected with Eminem, his management, 
              or any of his companies. All content is for informational and entertainment purposes only.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Content Sources</h2>
            <p className="mb-4">
              This website aggregates and displays content from official sources:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eminem's official website</li>
              <li>Official social media accounts</li>
              <li>Official YouTube channel</li>
              <li>Public news sources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content related to Eminem, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Music and lyrics</li>
              <li>Images and videos</li>
              <li>Trademarks and logos</li>
              <li>Album artwork</li>
            </ul>
            <p className="mt-4">
              are the property of their respective owners. This fan site does not claim ownership of any 
              official Eminem content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">External Links</h2>
            <p className="mb-4">
              This website contains links to external websites. We:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not control external website content</li>
              <li>Are not responsible for external website policies</li>
              <li>Do not endorse external website content</li>
              <li>Encourage reviewing external site terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              This fan site is provided "as is" without any warranties. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accuracy of information from external sources</li>
              <li>External website content or policies</li>
              <li>Third-party website availability</li>
              <li>Changes to external content</li>
            </ul>
          </section>

          <div className="text-sm text-gray-400 mt-12">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 