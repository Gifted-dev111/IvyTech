import React from "react";
const UpdateBadge = ({ tag = "2026", text }) => {
    return(
        <div className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-1.5 pr-4 rounded-full max-w-max shadow-lg shadow-blue-500/5 group cursor-pointer hover:border-slate-700 transition-all duration-300">

            <span className="relative flex px-2.5 py-1 rounded-full bg-blue-600 text-[10px] font-bold uppercase tracking-wider text-white">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30 animate-ping top-0 left-0"></span>
              
              {tag}

            </span>

            <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
               
                {text}

                <span className="text-blue-500 font-bold ml-1 group-hover:translate-x-1 inline-block transition-transform duration-200">
                  →
                </span>

            </span>
            
        </div>
    );
};

export default UpdateBadge;