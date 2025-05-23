"use client";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Cookie Policy</h1>
        
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
            <h2 className="text-2xl font-semibold mb-4">No Cookies Used</h2>
            <p className="mb-4">
              This website does not use any cookies. We are a simple informational fan site that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Does not track user behavior</li>
              <li>Does not store user preferences</li>
              <li>Does not use analytics</li>
              <li>Does not require any user data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">External Content</h2>
            <p className="mb-4">
              While we don't use cookies, some external content we link to or embed may use cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>YouTube videos (when embedded)</li>
              <li>Social media links</li>
              <li>News website links</li>
            </ul>
            <p className="mt-4">
              These external sites have their own cookie policies. We encourage you to review their policies 
              when visiting these sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Content Sources</h2>
            <p className="mb-4">
              All content on this website is sourced from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Eminem's official website</li>
              <li>Official social media accounts</li>
              <li>Official YouTube channel</li>
              <li>Public news sources</li>
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