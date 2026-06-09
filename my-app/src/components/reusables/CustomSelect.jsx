import React, { useState, useRef, useEffect } from "react";

function CustomSelect({ label, options, value, onChange, filled }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  return (
    <div className="space-y-1.5 text-left w-full" ref={dropdownRef}>
      {label && (
        <label className="text-gray-500 block text-xs font-bold tracking-wider uppercase">
          {label}
        </label>
      )}

      <div className="relative">
        
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-sm font-normal normal-case text-gray-800 p-3 rounded-xl border transition-colors flex items-center justify-between cursor-pointer bg-white ${
            isOpen ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-200"
          }`}
        >
          <span>
            {selectedOption ? selectedOption.label : "Select an option"}
          </span>

          
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto font-normal normal-case text-sm text-gray-700 left-0">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors block cursor-pointer ${
                  option.value === value
                    ? "bg-blue-50/60 font-semibold text-blue-600"
                    : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomSelect;
