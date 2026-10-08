import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowRight, ShieldCheck, Building2, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    firmName: '',
    firmType: 'Life & Pensions Brokerage',
    location: 'Dublin',
    staffCount: '1–5 staff',
    serviceInterest: 'Book an Install (Practice Core €4,500)',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`AgentI On-Premise Enquiry: ${formData.firmName} (${formData.firmType})`);
    const bodyContent = `Dear AgentI Team,

I would like to enquire about an on-premise AI appliance for our practice.

Firm Details:
- Firm Name: ${formData.firmName}
- Contact Name: ${formData.name} (${formData.role})
- Practice Type: ${formData.firmType}
- Location: ${formData.location}
- Staff Size: ${formData.staffCount}
- Primary Interest: ${formData.serviceInterest}

Notes / Practice Requirements:
${formData.message || 'We would like to arrange an initial 20-minute discovery discussion to evaluate installation requirements and confirm our LEO grant quotation.'}

Best regards,
${formData.name}
${formData.firmName}`;

    const mailtoUrl = `mailto:hello@agenti.ie?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
    setSubmittedMessage(true);
  };

  const handleCopy = () => {
    const textToCopy = `To: hello@agenti.ie
Subject: AgentI On-Premise Enquiry: ${formData.firmName || '[Firm Name]'}
Firm Type: ${formData.firmType}
Contact: ${formData.name} (${formData.role})
Location: ${formData.location}
Staff Size: ${formData.staffCount}
Interest: ${formData.serviceInterest}

Message:
${formData.message || 'We would like to arrange an initial discovery discussion to evaluate on-site install and LEO grant eligibility.'}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Header */}
      <section className="pt-8 sm:pt-16 pb-6 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
            Direct Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900">
            Contact AgentI
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Discuss an on-site installation, request a formal itemised quotation for your LEO grant application, or arrange an initial technical consultation.
          </p>
        </div>
      </section>

      {/* Main Grid: About Blurb + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: About AgentI Blurb */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white p-8 border border-stone-200 rounded-sm space-y-6">
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              About AgentI
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>
                AgentI is an Irish specialist systems installer based in Dublin, dedicated exclusively to providing private, physical on-premise AI infrastructure for regulated Irish professional firms.
              </p>
              <p>
                We believe that professional privilege and client confidentiality cannot be outsourced to commercial public clouds. We build, configure, test, and install self-contained AI appliances so that solicitors, brokers, accountants, and clinics can deploy modern language model tools while keeping 100% of client documents and prompts inside their own walls.
              </p>
              <p>
                Our team handles every stage directly: physical hardware calibration, on-site installation anywhere in Ireland, staff training workshops, and ongoing maintenance.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-4 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Operations:</strong> Dublin, Ireland. On-site installations conducted nationwide across Leinster, Munster, Connacht, and Ulster.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Email:</strong>{' '}
                  <a
                    href="mailto:hello@agenti.ie"
                    className="text-stone-900 hover:text-emerald-800 font-mono underline"
                  >
                    hello@agenti.ie
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Response Standard:</strong> We reply to all regulated practice enquiries within one business day.
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-stone-100/70 border border-stone-200 rounded-sm text-xs text-stone-600 space-y-2">
            <span className="font-semibold text-stone-900 block">LEO Grow Digital Voucher Support</span>
            <p>
              Applying for the €5,000 grant? Tick the option in the form to receive the required formal itemised quote and supplier profile for your Local Enterprise Office application.
            </p>
          </div>
        </div>

        {/* Right column: Interactive Mailto Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 sm:p-10 border border-stone-200 rounded-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-medium text-stone-900">
                Book an install or request a proposal
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Complete the details below to generate a pre-formatted message to <span className="font-mono text-stone-800">hello@agenti.ie</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firmName" className="block text-xs font-medium text-stone-700 mb-1">
                    Practice / Firm Name *
                  </label>
                  <input
                    id="firmName"
                    type="text"
                    required
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    placeholder="e.g. O'Connor & Associates Financial"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ciara Kelly"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-xs font-medium text-stone-700 mb-1">
                    Your Role / Title
                  </label>
                  <input
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Managing Partner / Principal Broker"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="firmType" className="block text-xs font-medium text-stone-700 mb-1">
                    Practice Sector
                  </label>
                  <select
                    id="firmType"
                    value={formData.firmType}
                    onChange={(e) => setFormData({ ...formData, firmType: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  >
                    <option value="Life & Pensions Brokerage">Life & Pensions Brokerage</option>
                    <option value="General Insurance Broker">General Insurance Broker</option>
                    <option value="Solicitor / Legal Practice">Solicitor / Legal Practice</option>
                    <option value="Chartered Accountants">Chartered Accountants</option>
                    <option value="Medical / Dental Clinic">Medical / Dental Clinic</option>
                    <option value="Other Regulated Practice">Other Regulated Practice</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-xs font-medium text-stone-700 mb-1">
                    Practice Location
                  </label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  >
                    <option value="Dublin City & County">Dublin City & County</option>
                    <option value="Cork">Cork</option>
                    <option value="Galway">Galway</option>
                    <option value="Limerick">Limerick</option>
                    <option value="Waterford">Waterford</option>
                    <option value="Kildare / Wicklow / Meath">Kildare / Wicklow / Meath</option>
                    <option value="Other Republic of Ireland">Other Republic of Ireland</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="staffCount" className="block text-xs font-medium text-stone-700 mb-1">
                    Number of Staff
                  </label>
                  <select
                    id="staffCount"
                    value={formData.staffCount}
                    onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                  >
                    <option value="1–5 staff">1–5 staff</option>
                    <option value="6–10 staff">6–10 staff</option>
                    <option value="11–25 staff">11–25 staff</option>
                    <option value="26+ staff">26+ staff</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-xs font-medium text-stone-700 mb-1">
                  Primary Request
                </label>
                <select
                  id="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none"
                >
                  <option value="Book an Install (Practice Core €4,500)">Book an Install (Practice Core €4,500)</option>
                  <option value="Book an Install (Multi-Partner €6,800)">Book an Install (Multi-Partner €6,800)</option>
                  <option value="Request Formal Itemised Quote for LEO Grant">Request Formal Itemised Quote for LEO Grant</option>
                  <option value="Arrange 20-Minute Technical Discovery Call">Arrange 20-Minute Technical Discovery Call</option>
                  <option value="General Enquiry / Compliance Audit Question">General Enquiry / Compliance Audit Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-stone-700 mb-1">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us briefly about your current file formats (PDFs, shared drives), network setup, or any specific drafting workflows you would like the appliance to handle."
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xs text-stone-900 focus:bg-white focus:border-emerald-800 focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3 px-6 bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-sm rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send enquiry via email</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto py-3 px-4 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium text-xs rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy message text</span>
                    </>
                  )}
                </button>
              </div>

              {submittedMessage && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 rounded-xs">
                  Your email client has been opened with the pre-formatted enquiry. If your email software did not launch automatically, click &quot;Copy message text&quot; and send directly to <span className="font-mono font-semibold">hello@agenti.ie</span>.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
