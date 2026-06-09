import React, { useState } from "react";
import CustomSelect from "../reusables/CustomSelect";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    country: "Nigeria",
    serviceOfInterest: "Subscriber engagement / VAS",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (fieldName, selectedValue) => {
    setFormData({ ...formData, [fieldName]: selectedValue });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });
    console.log(formData);

    const payload = {
      to: "emwiongbonivie@gmail.com",
      subject: "New Parnership Enquiry",
      template: "ivietech_support",
      data: {
        fullName: formData.fullName,
        workEmail: formData.workEmail,
        company: formData.company,
        role: formData.role,
        country: formData.country,
        serviceOfInterest: formData.serviceOfInterest,
        message: formData.message,
      },
    };

    try {
      const response = await fetch(
        "https://vas.broadbased.net/services/mailService/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "Enquiry sent successfully",
        });

        setFormData({
          fullName: "",
          workEmail: "",
          company: "",
          role: "",
          country: "",
          serviceOfInterest: "Subscriber engagement / VAS",
          message: "",
        });

        setTimeout(() => {
          onClose();
          setStatusMessage({ type: "", text: "" });
        }, 2000);
      } else {
        throw new Error("API responded with an error status code");
      }
    } catch (error) {
      console.error("Submission Error: ", error);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const countryOptions = [
    { value: "Nigeria", label: "Nigeria" },
    { value: "Ghana", label: "Ghana" },
    { value: "Other", label: "Other" },
  ];

  const serviceOptions = [
    {
      value: "Subscriber engagement / VAS",
      label: "Subscriber engagement / VAS",
    },
    { value: "CSDP & lending", label: "CSDP & lending" },
    { value: "Agency banking", label: "Agency banking" },
    { value: "Middleware integrations", label: "Middleware integrations" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm font-inter text-left">
      <div className="bg-white w-full max-w-2xl rounded-[24px] shadow-2xl border border-gray-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10 overflow-y-auto space-y-6"
        >
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 font-plus-jakarta block">
              Partner With Us
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrbold tracking-tight text-gray-900 fnt-plus-jakarta">
              Lets's build something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent italic font-medium">
                credible, modern, and at scale
              </span>
            </h2>
            <p>
              Tell us what you're trying to build, telco partner, bank, lender,
              or enterprise. We'll get back to you within one business day.
            </p>
          </div>

          {statusMessage.text && (
            <div
              className={`p-4 rounded-xl text-sm font-medium text-center border ${
                statusMessage.type === "success"
                  ? "bg-green-50 text-green-800 border-green-100"
                  : "bg-red-50 text-red-800 border-red-100"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-gray-400 tracking-wider uppercase">
            <div className="space-y-1.5">
              <label className="text-gray-500">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full text-sm font-normal normal-case text-gray-800 p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-gray-500">Work Email *</label>
              <input
                type="email"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleInputChange}
                placeholder="john.doe@company.com"
                className="w-full text-sm font-normal normal-case text-gray-800 p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-gray-500">Company *</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company name"
                className="w-full text-sm font-normal normal-case text-gray-800 p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-gray-500">Role *</label>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Enter your role"
                className="w-full text-sm font-normal normal-case text-gray-800 p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <CustomSelect
                label="Country"
                filled={true}
                value={formData.country}
                options={countryOptions}
                onChange={(val) => handleDropdownChange("country", val)}
              />
            </div>

            <div className="space-y-1.5">
              <CustomSelect
                label="Service of Interest"
                filled={true}
                value={formData.serviceOfInterest}
                options={serviceOptions}
                onChange={(val) =>
                  handleDropdownChange("serviceOfInterest", val)
                }
              />
            </div>
          </div>

          <div className="space-y-1.5 text-xs font-bold text-gray-400 tracking-wider uppercase">
            <label className="text-gray-500">Message *</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="A short note abut what you're trying to build... "
              className="w-full text-sm font-normal normal-case text-gray-800 p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:opacity-95 text-white font-semibold p-4 rounded-full text-sm flex items-center justify-center gap-2 shadow-md transition-opacity cursor-pointer font-inter"
          >
            {loading ? "Sending enquiry..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
