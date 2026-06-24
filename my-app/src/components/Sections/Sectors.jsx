import { Hd20Filled } from "@fluentui/react-icons";

function Sectors() {
  const sectors = [
    {
      title: "Telcos",
      desc: "Helping mobile operators manage their text traffic and run value-added services smoothly without crashing.",
    },
    {
      title: "Financial Services",
      desc: "Helping mobile operators manage their text traffic and run value-added services smoothly without crashing.",
    },
    {
      title: "Lending",
      desc: "Automating loan reminders, sending payout alerts, and delivering instant text notifications to borrowers.",
    },
    {
      title: "Enterprise",
      desc: "Giving everyday corporate companies the power to market their products and update their teams instantly via SMS.",
    },
  ];
  return (
    <section
      className="py-24 bg-[#020617] text-white relative overflow-hidden"
      id="industries"
    >
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">
              Who We Help
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Trusted across the sectors that {""}
              <span className="text-blue-500 italic font-medium">
                Power Africa's economy
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8 text-gray-400 text-sm sm:text-base leading-relaxed">
            We provide the solid communication backbone needed by industries
            that handle large volumes of daily customers.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b1329]/60 border border-white/5 p-8 rounded-xl flex flex-col justify-between cursor-pointer min-h-[280px] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-[#0b1329] group shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors duration-300"></div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.03] mt-4">
                <span className="text-xs font-semibold text-blue-400 inline-flex items-center gap-1 group-hover:text-blue-300 transition-colors">
                  {item.actionText}{" "}
                  <span className="transform group-hover:translate-x-0.5 transition-transform"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;
