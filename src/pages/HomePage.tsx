import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, HardDrive, Clock, CheckCircle2, ArrowRight, ShieldAlert, FileText, Lock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-14 border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-50/80 px-3 py-1 border border-emerald-200/60 rounded-xs">
            <span>On-premise AI appliance for Irish firms</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-[1.12]">
            Your own AI. <br className="hidden sm:inline" />
            <span className="text-emerald-950 italic">In your own office.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Private AI installed on your premises. Your data never leaves.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-base rounded-sm transition-all shadow-sm hover:shadow"
            >
              <span>Book an install</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-800 font-medium text-base border border-stone-300 rounded-sm transition-all"
            >
              <span>See appliance & software</span>
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-stone-500">
            <span>Fixed €4,500 install</span>
            <span aria-hidden="true">·</span>
            <span>LEO grant eligible</span>
            <span aria-hidden="true">·</span>
            <span>1-day setup in Ireland</span>
          </div>
        </div>
      </section>

      {/* The Problem in 3 Short Lines */}
      <section className="max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 bg-white border border-stone-200 rounded-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
            <ShieldAlert className="w-4 h-4 text-stone-700" />
            <span>The Regulatory Reality</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium leading-snug">
            Why public cloud AI is a non-starter for Irish regulated practices:
          </h2>

          <div className="space-y-4 pt-2 border-t border-stone-100 text-stone-700 text-base sm:text-lg leading-relaxed">
            <div className="flex items-start gap-4">
              <span className="font-mono text-emerald-900 font-semibold text-sm mt-1">01</span>
              <p>Client medical and financial data cannot safely go into public cloud AI tools.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-emerald-900 font-semibold text-sm mt-1">02</span>
              <p>GDPR Article 9 prohibits unlawful processing of special-category health and biometric data on third-party servers.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-emerald-900 font-semibold text-sm mt-1">03</span>
              <p>Central Bank of Ireland and ESMA expectations demand strict operational control, clear data lineage, and zero unvetted cloud outsourcing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Benefit Cards */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl font-medium text-stone-900">
            The on-premise advantage
          </h2>
          <p className="text-sm text-stone-600">
            Complete confidentiality through physical local hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Benefit 1 */}
          <div className="p-7 bg-white border border-stone-200 rounded-sm space-y-4 flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Your data stays put
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                The models run directly on your own dedicated box inside your office. Prompts, documents, and client histories never touch the public internet or external cloud infrastructure.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 text-xs font-medium text-emerald-900 flex items-center gap-1">
              <span>Zero external telemetry</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="p-7 bg-white border border-stone-200 rounded-sm space-y-4 flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Fixed price, one-day install
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                No open-ended consulting or surprise cloud API token fees. We arrive with your pre-configured appliance, connect it to your local network, index your files, and train your team in a single day.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 text-xs font-medium text-emerald-900 flex items-center gap-1">
              <span>From €4,500 · LEO grant eligible</span>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="p-7 bg-white border border-stone-200 rounded-sm space-y-4 flex flex-col justify-between hover:border-stone-300 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Built for regulated firms
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Designed specifically for Irish solicitors, life & pensions brokerages, accountants, and medical clinics. Purely human-in-the-loop: assists your professional staff without automated decision-making.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 text-xs font-medium text-emerald-900 flex items-center gap-1">
              <span>Auditable Irish compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works: 4 Numbered Steps */}
      <section className="max-w-5xl mx-auto space-y-10">
        <div className="border-t border-stone-200 pt-16">
          <div className="max-w-xl mx-auto text-center space-y-2 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
              Clear Deployment Process
            </span>
            <h2 className="font-serif text-3xl font-medium text-stone-900">
              How it works
            </h2>
            <p className="text-sm text-stone-600">
              From initial assessment to an operational private AI in your office within days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 bg-white border border-stone-200 rounded-sm relative">
              <span className="text-3xl font-serif font-bold text-stone-200 block mb-3">
                01
              </span>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                Discovery call
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A 20-minute discussion to map your firm’s file formats, security structure, and primary drafting or search bottlenecks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-white border border-stone-200 rounded-sm relative">
              <span className="text-3xl font-serif font-bold text-stone-200 block mb-3">
                02
              </span>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                We configure your box
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We pre-load open-source models, install retrieval modules, and benchmark inference on your dedicated physical hardware.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-white border border-stone-200 rounded-sm relative">
              <span className="text-3xl font-serif font-bold text-stone-200 block mb-3">
                03
              </span>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                On-site install in one day
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We physically install the appliance in your office network, isolate access to your intranet, and index your firm’s files.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-white border border-stone-200 rounded-sm relative">
              <span className="text-3xl font-serif font-bold text-stone-200 block mb-3">
                04
              </span>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">
                Handover and support
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We train your partners and staff on practical drafting workflows, provide documentation, and begin ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="max-w-4xl mx-auto pb-12">
        <div className="p-8 sm:p-12 bg-stone-900 text-stone-100 rounded-sm text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
            Ready to bring private AI into your practice?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule a brief discovery review. We will evaluate your firm’s workflow, confirm hardware specifications, and outline your LEO grant eligibility.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-base rounded-sm transition-colors shadow-sm"
            >
              <span>Book an install discussion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-stone-400">
            Direct enquiries: <span className="font-mono text-stone-300">hello@agenti.ie</span> · No external data transfer
          </p>
        </div>
      </section>
    </div>
  );
};
