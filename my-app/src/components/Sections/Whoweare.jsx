function WhoWeAre({onContactClick}) {
  return (
    <section
      className="bg-white text-gray-900 py-24 border-b border-gray-100"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Who We Are
          </span>

          <h2 className="text-3xl sm:text-4l lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
            Built for
            <span className="text-blue-600 italic font-medium">
              telcos, banks & the businesses
            </span> {" "}
            that depend on them.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              We started this platform to make business communication easy and stress-free. If your company needs to send thousands of text messages or connect directly to mobile networks, we provide the tools to make it happen without any dropping or delays.
            </p>

            <p>
              We work directly with major networks to ensure your messages deliver in seconds. Whether you are running a small business or managing a large company, we keep your customer alerts and notifications running smoothly around the clock.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  onContactClick();
                }}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 gap-1.5 group"
              >
                View our core Services
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-gray-400 mr-1 font-medium uppercase tracking-wider">
                  Integrations:
                </span>
                <span className="px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs font-medium text-gray-500">
                  MTN
                </span>
                <span className="px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs font-medium text-gray-500">
                  Airtel
                </span>
                <span className="px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs font-medium text-gray-500">
                  Glo
                </span>
                <span className="px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded text-xs font-medium text-gray-500">
                  9mobile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
