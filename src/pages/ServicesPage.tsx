import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Cpu, 
  FileSearch, 
  PenTool, 
  Wrench, 
  GraduationCap, 
  LifeBuoy, 
  Check, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight,
  Server,
  Layers,
  FileText,
  Lock
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'broker' | 'solicitor' | 'accountant' | 'clinic'>('broker');

  return (
    <div className="space-y-20 md:space-y-28">
      {/* Header */}
      <section className="pt-8 sm:pt-16 pb-6 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
            End-to-End Delivery
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900">
            A complete private AI system, installed in your office.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            We provide the physical hardware appliance, the complete local software stack, the on-site physical installation, staff training, and continuous support.
          </p>
        </div>
      </section>

      {/* The 5 Core Pillars */}
      <section className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Item 1: Hardware Appliance */}
          <div className="md:col-span-6 bg-white p-8 border border-stone-200 rounded-sm space-y-5">
            <div className="w-10 h-10 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider font-semibold">Pillar A</span>
              <h2 className="font-serif text-2xl font-medium text-stone-900 mt-1">
                Pre-configured hardware appliance
              </h2>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              A compact, whisper-quiet appliance engineered specifically for local neural model inference. It sits securely in your server rack or on an office shelf.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 pt-2 border-t border-stone-100">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Runs state-of-the-art open-source LLMs locally on dedicated high-bandwidth memory.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Full-disk hardware encryption (AES-256) with tamper-resistant local key storage.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>Zero telemetry, zero external cloud calling, and fully operational without public internet.</span>
              </li>
            </ul>
          </div>

          {/* Item 2: Software Stack */}
          <div className="md:col-span-6 bg-white p-8 border border-stone-200 rounded-sm space-y-5">
            <div className="w-10 h-10 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider font-semibold">Pillar B</span>
              <h2 className="font-serif text-2xl font-medium text-stone-900 mt-1">
                Local software stack & tools
              </h2>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              A web-based interface accessible through any browser on your office network. No special software needs to be installed on individual staff laptops.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 pt-2 border-t border-stone-100">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span><strong>Document Q&A & Retrieval:</strong> Query decades of internal files, PDFs, trust deeds, case notes, and policy schedules with verbatim citations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span><strong>Drafting Assistant:</strong> Generate suitability letter drafts, executive summaries, attendance notes, and formal disclosure memos.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span><strong>Strict Local Access:</strong> Role-based permissions mirror your existing office file structures.</span>
              </li>
            </ul>
          </div>

          {/* Item 3: One-day on-site install */}
          <div className="md:col-span-4 bg-white p-7 border border-stone-200 rounded-sm space-y-4">
            <div className="w-9 h-9 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider font-semibold">Pillar C</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-1">
                One-day on-site install
              </h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Our engineer travels to your premises anywhere in Ireland. We mount and configure the box, connect it to your local network, isolate it from unauthorized egress, and index your initial document repository.
            </p>
          </div>

          {/* Item 4: Staff Training */}
          <div className="md:col-span-4 bg-white p-7 border border-stone-200 rounded-sm space-y-4">
            <div className="w-9 h-9 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider font-semibold">Pillar D</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-1">
                Practical staff training
              </h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We conduct a hands-on training workshop for your fee-earners and administrative team. We focus on real professional workflows: prompt formulation, citation checking, and verifying draft suitability.
            </p>
          </div>

          {/* Item 5: Ongoing Support */}
          <div className="md:col-span-4 bg-white p-7 border border-stone-200 rounded-sm space-y-4">
            <div className="w-9 h-9 rounded-sm bg-stone-100 text-emerald-900 flex items-center justify-center">
              <LifeBuoy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider font-semibold">Pillar E</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-1">
                Ongoing maintenance
              </h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We provide periodic open-source model weight updates, system patches, hardware health audits, and direct Dublin-based technical support whenever your team has questions.
            </p>
          </div>
        </div>
      </section>

      {/* Beachhead Customer Focus: Life & Pensions Brokerage */}
      <section className="bg-stone-100/70 border border-stone-200 p-8 sm:p-12 rounded-sm space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
            <Briefcase className="w-4 h-4" />
            <span>Beachhead Application</span>
          </div>
          <h2 className="font-serif text-3xl font-medium text-stone-900">
            Built for the Life & Pensions Brokerage
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Financial and insurance brokers face a unique tension: client files contain sensitive health declarations, pension histories, salary slips, and medical records. Sending this data into commercial cloud chatbots violates GDPR and Central Bank Consumer Protection Code principles.
          </p>
        </div>

        {/* Tabbed workflow exploration */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-2">
            <button
              onClick={() => setActiveWorkflowTab('broker')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xs transition-colors ${
                activeWorkflowTab === 'broker'
                  ? 'bg-emerald-950 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              Life & Pensions Brokerage
            </button>
            <button
              onClick={() => setActiveWorkflowTab('solicitor')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xs transition-colors ${
                activeWorkflowTab === 'solicitor'
                  ? 'bg-emerald-950 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              Solicitors & Legal Practice
            </button>
            <button
              onClick={() => setActiveWorkflowTab('accountant')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xs transition-colors ${
                activeWorkflowTab === 'accountant'
                  ? 'bg-emerald-950 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              Chartered Accountants
            </button>
            <button
              onClick={() => setActiveWorkflowTab('clinic')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xs transition-colors ${
                activeWorkflowTab === 'clinic'
                  ? 'bg-emerald-950 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-200'
              }`}
            >
              Medical & Dental Clinics
            </button>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-stone-200 rounded-sm">
            {activeWorkflowTab === 'broker' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  How a Life & Pensions Broker uses the AgentI appliance daily:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">1. Instant Policy Clause Retrieval</h4>
                    <p>
                      Query across 500+ insurer policy wordings (Zurich, Irish Life, Aviva, Standard Life, New Ireland) to compare surrender penalties, guaranteed insurability clauses, and exclusion wording in seconds.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">2. Drafting Suitability Letters</h4>
                    <p>
                      Feed in raw consultation notes and the client fact-find. The appliance drafts a comprehensive Letter of Suitability compliant with the Central Bank Consumer Protection Code without exposing client net worth or medical disclosures to third parties.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">3. Historical Scheme Searches</h4>
                    <p>
                      Locate defined-benefit scheme rules and executive pension deeds dating back 20 years within seconds, quoting exact schedule references for trustee meetings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowTab === 'solicitor' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Private AI for Irish Solicitors & Legal Counsel:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Privileged Files Protected</h4>
                    <p>
                      Legal professional privilege remains intact. No client correspondence or court pleadings leave the firm's physical perimeter.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Conveyancing & Title Deeds</h4>
                    <p>
                      Summarise 60-page title deeds, identify covenants, and cross-reference planning conditions across multiple scanned folios.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Attendance Notes & Briefs</h4>
                    <p>
                      Transform raw handwritten or dictation notes into clean, structured attendance notes and counsel brief summaries.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowTab === 'accountant' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Private AI for Irish Accountancy Practices:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Confidential Financials</h4>
                    <p>
                      Client P&L statements, payroll reconciliations, and tax disclosures are never processed through third-party training pipelines.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Revenue Precedents & Circulars</h4>
                    <p>
                      Rapidly search and verify Revenue Commissioners tax briefing notes, capital acquisitions tax rules, and retirement relief provisions.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Audit Documentation</h4>
                    <p>
                      Draft management letter explanations, risk evaluation summaries, and audit trail verifications with consistent quality.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflowTab === 'clinic' && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Private AI for Medical Practices & Private Clinics:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-600">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Strict GDPR Article 9 Adherence</h4>
                    <p>
                      Medical histories, patient consultation notes, and laboratory reports never enter third-party cloud data centers.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Referral Letter Generation</h4>
                    <p>
                      Synthesise patient case notes into concise, structured consultant referral letters for clinical review in under a minute.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-stone-900">Practice Protocol Search</h4>
                    <p>
                      Instant lookup across clinic guidelines, clinical pharmacology dosing schedules, and administrative practice policies.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Appliance Hardware Technical Specifications */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
            Hardware & Architecture Specifications
          </h2>
          <p className="text-sm text-stone-600">
            Industrial-grade, quiet components pre-calibrated for low latency and high local throughput.
          </p>
        </div>

        <div className="overflow-x-auto border border-stone-200 bg-white rounded-sm">
          <table className="w-full text-left text-xs sm:text-sm text-stone-700">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
              <tr>
                <th className="py-3 px-4">Component</th>
                <th className="py-3 px-4">Standard Office Appliance</th>
                <th className="py-3 px-4">Operational Benefit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Form Factor</td>
                <td className="py-3.5 px-4">Compact Desktop or 1U/2U Rackmount</td>
                <td className="py-3.5 px-4 text-stone-600">Whisper-quiet acoustic profile; fits directly into standard comms cabinets or office credenzas.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Neural Acceleration</td>
                <td className="py-3.5 px-4">Dedicated High-VRAM Inference Module</td>
                <td className="py-3.5 px-4 text-stone-600">Enables fast response times (30–60 tokens/sec) for concurrent staff users without remote servers.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Storage Encryption</td>
                <td className="py-3.5 px-4">2TB–8TB Enterprise NVMe (AES-256)</td>
                <td className="py-3.5 px-4 text-stone-600">Fast local vector indexing; physical drive theft leaves data cryptographically unreadable.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Network Interface</td>
                <td className="py-3.5 px-4">Dual Gigabit LAN (Isolated Subnet)</td>
                <td className="py-3.5 px-4 text-stone-600">Separates staff query traffic from public internet; zero open external ports or dynamic DNS.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Models Supported</td>
                <td className="py-3.5 px-4">Llama 3.3, Mistral, Qwen, DeepSeek (Local weights)</td>
                <td className="py-3.5 px-4 text-stone-600">Strictly open weights. You own your system; no vendor lock-in or recurring API token subscriptions.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Banner */}
      <section className="bg-emerald-950 text-emerald-50 p-8 sm:p-12 rounded-sm text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-medium">
          Ready to review the appliance for your office?
        </h2>
        <p className="text-emerald-200 text-sm max-w-xl mx-auto leading-relaxed">
          We provide a clear feasibility evaluation of your office layout, file volumes, and regulatory profile before scheduling your one-day installation.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-white hover:bg-stone-100 text-stone-900 font-medium text-sm rounded-sm transition-colors"
          >
            <span>Book an install</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('pricing')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-700 hover:bg-emerald-900 text-emerald-100 font-medium text-sm rounded-sm transition-colors"
          >
            <span>View fixed pricing</span>
          </button>
        </div>
      </section>
    </div>
  );
};
