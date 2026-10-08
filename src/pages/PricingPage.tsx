import React, { useState } from 'react';
import { PageId } from '../types';
import { Check, ArrowRight, HelpCircle, ShieldCheck, Calculator, FileCheck, Building2 } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [selectedPackage, setSelectedPackage] = useState<'standard' | 'multi'>('standard');
  const [applyLeoGrant, setApplyLeoGrant] = useState<boolean>(true);

  const standardInstallPrice = 4500;
  const multiInstallPrice = 6800;

  const currentPrice = selectedPackage === 'standard' ? standardInstallPrice : multiInstallPrice;
  const grantAmount = applyLeoGrant ? Math.min(5000, currentPrice * 0.5) : 0;
  const netInvestment = currentPrice - grantAmount;

  return (
    <div className="space-y-20 md:space-y-28">
      {/* Header */}
      <section className="pt-8 sm:pt-16 pb-6 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
            Transparent Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900">
            Fixed prices. You own the appliance.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            No unpredictable cloud token billing, per-query metered invoices, or vendor lock-in. Published rates with zero hidden fees.
          </p>
        </div>
      </section>

      {/* LEO Grow Digital Voucher Grant Highlight Box */}
      <section className="bg-emerald-950 text-emerald-50 p-7 sm:p-9 rounded-sm border border-emerald-900 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-5 border-b border-emerald-900/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <FileCheck className="w-4 h-4" />
              <span>Government Grant Aid · Republic of Ireland</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              Eligible for LEO Grow Digital Voucher (up to €5,000)
            </h2>
            <p className="text-emerald-200 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Irish small businesses (up to 50 employees) can apply to their Local Enterprise Office for a 50% co-funded grant of up to €5,000 to adopt AI automation and digital systems. We provide the formal itemised quotation required for your application.
            </p>
          </div>
          <div className="shrink-0 bg-emerald-900/60 p-4 rounded-sm border border-emerald-800 text-center">
            <span className="block text-2xl font-serif font-bold text-white">Up to 50%</span>
            <span className="text-xs text-emerald-300">Co-funded grant aid</span>
          </div>
        </div>

        {/* Interactive Grant Net Cost Visualiser */}
        <div className="bg-emerald-900/30 p-5 rounded-sm border border-emerald-800/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Interactive Net Cost Preview
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedPackage('standard')}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  selectedPackage === 'standard'
                    ? 'bg-white text-stone-900'
                    : 'bg-emerald-900/80 text-emerald-200 hover:bg-emerald-800'
                }`}
              >
                Practice Core (€4,500)
              </button>
              <button
                onClick={() => setSelectedPackage('multi')}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors ${
                  selectedPackage === 'multi'
                    ? 'bg-white text-stone-900'
                    : 'bg-emerald-900/80 text-emerald-200 hover:bg-emerald-800'
                }`}
              >
                Multi-Partner (€6,800)
              </button>
              <label className="flex items-center gap-2 text-xs text-emerald-200 cursor-pointer ml-2">
                <input
                  type="checkbox"
                  checked={applyLeoGrant}
                  onChange={(e) => setApplyLeoGrant(e.target.checked)}
                  className="rounded-xs border-emerald-700 text-emerald-600 focus:ring-0"
                />
                <span>Include 50% LEO Grant Offset</span>
              </label>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <div>
              <span className="text-xs text-emerald-300 block">Net cost to your practice:</span>
              <span className="text-3xl font-serif font-bold text-white">
                €{netInvestment.toLocaleString('en-IE')}
              </span>
            </div>
            {applyLeoGrant && (
              <div className="text-xs text-emerald-300 border-l border-emerald-800 pl-4">
                <span>Gross: €{currentPrice.toLocaleString('en-IE')}</span>
                <br />
                <span className="text-emerald-300 font-semibold">LEO Grant: -€{grantAmount.toLocaleString('en-IE')}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Installation Packages */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Hardware & Implementation
          </span>
          <h2 className="font-serif text-3xl font-medium text-stone-900 mt-1">
            One-day on-site installation packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plan 1: Practice Core */}
          <div className="bg-white border-2 border-stone-200 rounded-sm p-8 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Practice Core Appliance
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Most Popular
                </span>
              </div>
              <p className="text-sm text-stone-600">
                Ideal for independent brokerages, solicitors, accountants, and clinical practices with up to 10 staff.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif font-bold text-stone-900">€4,500</span>
                  <span className="text-stone-500 text-sm">one-off install</span>
                </div>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  Net €2,250 with eligible 50% LEO Grow Digital Grant
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  What is included:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Pre-configured AI Box:</strong> Compact, whisper-quiet appliance with local neural inference accelerator.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Full Software Suite:</strong> Document Q&A, semantic file retrieval, and regulated drafting assistant.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>One-Day On-Site Install:</strong> Complete physical deployment at your office anywhere in Ireland.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Initial Indexing:</strong> Ingestion and indexing of up to 100,000 pages of firm documents and precedents.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Staff Training Workshop:</strong> 2-hour practical session for up to 10 staff on drafting workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Network Verification:</strong> Formal audit confirm zero outgoing data packets or cloud telemetry.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-sm rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Practice Core Install</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 2: Multi-Partner Practice */}
          <div className="bg-white border border-stone-200 rounded-sm p-8 flex flex-col justify-between space-y-6 hover:border-stone-300 transition-colors">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Multi-Partner Practice
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  High Concurrency
                </span>
              </div>
              <p className="text-sm text-stone-600">
                Engineered for firms with 10–35 staff requiring high simultaneous query speeds and partitioned team vaults.
              </p>

              <div className="pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif font-bold text-stone-900">€6,800</span>
                  <span className="text-stone-500 text-sm">one-off install</span>
                </div>
                <p className="text-xs text-emerald-800 font-medium mt-1">
                  Net €3,400 with eligible 50% LEO Grow Digital Grant
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  What is included:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>High-Capacity AI Appliance:</strong> Dual-accelerator neural module for concurrent staff usage.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Department Partitioning:</strong> Separate isolated vaults (e.g. conveyancing, litigation, tax, payroll).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Extended On-Site Install:</strong> 1.5-day comprehensive network integration and file ingestion.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Expanded Archive Indexing:</strong> Ingestion of up to 350,000 pages / historical client archives.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Dual Training Sessions:</strong> Separate dedicated workshops for fee earners and administrative staff.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span><strong>Priority Hardware Warranty:</strong> 3-year advance-replacement appliance hardware warranty.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Multi-Partner Install</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support & Maintenance Tiers */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Maintenance & Upgrades
          </span>
          <h2 className="font-serif text-3xl font-medium text-stone-900 mt-1">
            Ongoing support from €149/month
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Keep your private models up-to-date and your appliance maintained by local engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support Tier 1: €149/mo */}
          <div className="bg-white border border-stone-200 rounded-sm p-7 space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Standard Practice Support
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-serif font-bold text-stone-900">€149</span>
                <span className="text-xs text-stone-500">/month</span>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Reliable, ongoing maintenance to ensure optimal performance and security.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-3 border-t border-stone-100">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Quarterly open-source model weight upgrades as new models are released.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Operating system security patches & firmware updates.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Local index health checks and automated encrypted configuration backups.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Direct email support from Dublin technical team (1 business-day response).</span>
              </li>
            </ul>
          </div>

          {/* Support Tier 2: €249/mo */}
          <div className="bg-white border border-stone-200 rounded-sm p-7 space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Priority Practice Support
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-serif font-bold text-stone-900">€249</span>
                <span className="text-xs text-stone-500">/month</span>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              For practices with heavier document volumes and rapid staff onboarding needs.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-3 border-t border-stone-100">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>All Standard Support inclusions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Bi-monthly model upgrades and custom prompt template recalibration.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Annual on-site re-indexing visit and refresher staff training.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Same-day priority response & 48-hour hardware advance replacement guarantee.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Grant Application FAQ & Assistance */}
      <section className="bg-stone-50 border border-stone-200 p-8 rounded-sm space-y-6">
        <h3 className="font-serif text-xl font-medium text-stone-900">
          How to apply for the LEO Grow Digital Voucher:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
          <div className="space-y-2">
            <span className="font-mono text-emerald-900 font-semibold">Step A</span>
            <h4 className="font-semibold text-stone-900">Initial Quote from AgentI</h4>
            <p>
              We issue a detailed, formal pro-forma quotation specifying the hardware appliance and software implementation breakdown required by LEO.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-emerald-900 font-semibold">Step B</span>
            <h4 className="font-semibold text-stone-900">Submit to Your Local LEO</h4>
            <p>
              Submit the straightforward online application to your county or city Local Enterprise Office. Decisions are typically returned in 2 to 4 weeks.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-emerald-900 font-semibold">Step C</span>
            <h4 className="font-semibold text-stone-900">Installation & Drawdown</h4>
            <p>
              We carry out your on-site installation in one day. You submit the paid invoice to LEO and receive the 50% grant reimbursement directly into your bank account.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-medium text-stone-900">
            Need a formal quotation for your partners or LEO grant?
          </h3>
          <p className="text-sm text-stone-600">
            We provide an itemised PDF quotation tailored to your office within 24 hours.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-sm rounded-sm transition-colors"
        >
          Request itemised quote
        </button>
      </section>
    </div>
  );
};
