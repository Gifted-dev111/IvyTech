function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020817] text-white pt-16 pb-12 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2 font-plus-jakarta">
              <div className="text-white text-2xl font-black tracking-tight uppercase">
                IVYTECH{" "}
                <span className="text-blue-500 font-light">CORPORATION</span>
              </div>
              <div className="text-[10px] text-gray-500 font-medium tracking-widest uppercase font-inter">
                CORPORATION &bull; RC 895353
              </div>
            </div>

            <p className="text-xs text0gray-400 leading-relaxed max-w-sm font-normal">
              A Nigerian technology services company specialising in
              telecom-integrated digital platform.
            </p>

            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"></span>
              <span className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"></span>
              <span className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"></span>
              <span className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"></span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wide text-white font-plus-jakarta">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-normal">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Bulk SMS Vending
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Secure OTP Delivery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom USSD Codes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Corporate Mobile Rewards
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Customer Shortcodes
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wide text-white">Reach us</h4>
            <ul className="space-y-3 text-xs text-gray-400 font-normal">
               <li className="break-all">
                <a href="mailto:emwiongbonivie@gmail.com" className="hover:text-white transition-colors">
                    emwiongbonivie@gmail.com
                    </a>
               </li>

               <li className="flex items-start gap-1">
                 <span>&bull;</span>
                 <span>+234 7062 1872 61</span>
                 </li>

               <li className="text-gray-500 leading-relaxed text-[11px]">
                   12th Floor, Necom Building,
                    No. 15 Marina, Lagos Island
                    Nigeria.
               </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
