

function Solutions() {
  const services = [
    {
      title: "Fast Bulk SMS",
      desc: "Send updates, promotions, and announcements to thousands of customers at the click of a button with high delivery rates.",
    },
    {
      title: "Secure OTP & Login Codes",
      desc: "Keep your user accounts safe. Send instant, secure verification codes (OTPs) that land in your customer's inbox in less than 3 seconds.",
    },
    {
      title: "corporate VAS Solution",
      desc: "Boost your customer loyalty. Set up automated rewards, airtime gifts, and digital vouchers that keep people coming back to your business.",
    },

    {
      title: "Easy USSD Codes",
      desc: "Let your customers reach you even without internet or data. We build custom menu lines, so clients can buy from you on any mobile phone.",
    },

    {
      title: "Two-Way Customer Texting",
      desc: "Don't just talk at your customers, let them reply. Use shortcodes for voting, quick feedbacks surveys, or text-in competitions.",
    },
  ];

  return (
    <section
      className="bg-gray-50/70 text-gray-900 py-24 border-b border-gray-100"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              What we offer
            </span>

            <h2 className="text-3xl sm:text-4l font-bold tracking-tight text-gray-900 leading-tight">
              Everything your{" "}
              <span className="text-blue-600 italic font-medium">
              business needs to stay connected.
              </span>
              
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8 text-gray-500 text-sm sm:text-base leading-relaxed">
            Grow your business and keep your customers happy with simple mobile tools that work perfectly every single time.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-xl flex flex-col justify-between cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/20 hover:bg-gray-50/30 group"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <span className="text-xs font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6">
                <span className="text-xs font-semibold text-blue-600 inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all cursor-pointer"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
