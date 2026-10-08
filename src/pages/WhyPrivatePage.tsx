import React from 'react';
import { PageId } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  UserCheck, 
  Check, 
  X, 
  ArrowRight, 
  FileText, 
  AlertTriangle 
} from 'lucide-react';

interface WhyPrivatePageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyPrivatePage: React.FC<WhyPrivatePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Header */}
      <section className="pt-8 sm:pt-16 pb-6 border-b border-stone-200">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
            Regulatory & Legal Governance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900">
            Why regulated Irish firms must keep AI on-premise.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            The legal and operational reasons why solicitors, insurance brokers, financial advisers, and clinics cannot treat client files like consumer web searches.
          </p>
        </div>
      </section>

      {/* The 4 Core Compliance Pillars */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pillar 1: GDPR Article 9 */}
          <div className="bg-white p-8 border border-stone-200 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
              <Lock className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              GDPR Article 9: Special-Category Data
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Article 9 of the GDPR strictly prohibits the processing of special-category personal data—including health data, biometric records, and vulnerable personal details—unless narrow legal exemptions apply.
            </p>
            <div className="p-4 bg-stone-50 border-l-2 border-stone-400 text-xs text-stone-700 space-y-1">
              <p className="font-medium text-stone-900">The Cloud Problem:</p>
              <p>
                Pasting a client's medical history, life cover disclosure, or litigation medical report into an external cloud LLM transfers data to foreign servers, often creating an unauthorised sub-processing event under Data Protection Commission (DPC) scrutiny.
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>The AgentI Remedy:</strong> Our appliance executes inference entirely in your office on isolated hardware. No data ever crosses a network perimeter; therefore, no cross-border transfer or external sub-processing takes place.
            </p>
          </div>

          {/* Pillar 2: Central Bank of Ireland & ESMA */}
          <div className="bg-white p-8 border border-stone-200 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
              <Scale className="w-4 h-4" />
              <span>Supervisory Oversight</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              Central Bank of Ireland & ESMA Expectations
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              The Central Bank of Ireland’s Cross-Industry Guidance on Outsourcing and ESMA’s guidelines on algorithmic tools mandate rigorous operational resilience, transparency, and data lineage.
            </p>
            <div className="p-4 bg-stone-50 border-l-2 border-stone-400 text-xs text-stone-700 space-y-1">
              <p className="font-medium text-stone-900">Regulatory Scrutiny:</p>
              <p>
                Regulated brokers and financial firms must demonstrate clear governance over algorithmic inputs, auditability, and protection against single-point-of-failure cloud outages (aligned with DORA obligations).
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>The AgentI Remedy:</strong> Your firm maintains complete physical custody of the appliance. You can physically point to where your client files are processed, verified, and stored, satisfying auditor and compliance inspection requirements.
            </p>
          </div>

          {/* Pillar 3: EU AI Act Alignment */}
          <div className="bg-white p-8 border border-stone-200 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
              <ShieldCheck className="w-4 h-4" />
              <span>Statutory Compliance</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              EU AI Act Alignment & Verifiable Provenance
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              The European Union Artificial Intelligence Act establishes strict guardrails around transparency, documentation, and the risk categorisation of automated systems.
            </p>
            <div className="p-4 bg-stone-50 border-l-2 border-stone-400 text-xs text-stone-700 space-y-1">
              <p className="font-medium text-stone-900">Provenance & Citations:</p>
              <p>
                Unlike consumer generative tools that produce plausible-sounding fabrications, AgentI’s local retrieval system forces the model to cite the exact internal document, page number, and clause for every assertion.
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>The AgentI Remedy:</strong> Staff can click directly on citations to inspect the source file on the local server, eliminating hallucinatory outputs and ensuring factual auditability.
            </p>
          </div>

          {/* Pillar 4: Human-in-the-Loop */}
          <div className="bg-white p-8 border border-stone-200 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-900">
              <UserCheck className="w-4 h-4" />
              <span>Professional Discretion</span>
            </div>
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              Strict Human-in-the-Loop Principle
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              AgentI’s AI assists staff; it does not give financial or legal advice.
            </p>
            <div className="p-4 bg-stone-50 border-l-2 border-stone-400 text-xs text-stone-700 space-y-1">
              <p className="font-medium text-stone-900">No Autonomous Decision-Making:</p>
              <p>
                The appliance has zero consumer-facing channels. It does not speak to your clients, cannot execute financial trades, and cannot issue unreviewed correspondence.
              </p>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>The AgentI Remedy:</strong> The system functions solely as an internal paralegal or research assistant. Every draft letter of suitability, summary, or memo requires explicit sign-off by a qualified professional in your practice.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table: Public Cloud AI vs. AgentI On-Premise Box */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Direct Comparison
          </span>
          <h2 className="font-serif text-3xl font-medium text-stone-900">
            Public Cloud AI vs. AgentI On-Premise Appliance
          </h2>
          <p className="text-sm text-stone-600">
            How physical on-premise infrastructure compares to web-based cloud AI subscriptions.
          </p>
        </div>

        <div className="overflow-x-auto border border-stone-200 bg-white rounded-sm">
          <table className="w-full text-left text-xs sm:text-sm text-stone-700">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-900 font-semibold">
              <tr>
                <th className="py-3.5 px-4">Evaluation Dimension</th>
                <th className="py-3.5 px-4 w-1/3">Public Cloud AI (ChatGPT / Copilot / SaaS)</th>
                <th className="py-3.5 px-4 w-1/3 text-emerald-950 font-bold bg-emerald-50/50">AgentI On-Premise Appliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Data Location</td>
                <td className="py-3.5 px-4 text-stone-600">
                  Transmitted across the internet to multi-tenant foreign data centres.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  100% within your physical office on your local network.
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">GDPR Article 9 Compliance</td>
                <td className="py-3.5 px-4 text-stone-600">
                  High legal risk; requires extensive third-party DPIAs and sub-processor oversight.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  Fully compliant; zero external transmission of special-category records.
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Supervisory Auditability</td>
                <td className="py-3.5 px-4 text-stone-600">
                  Black-box provider; cannot accommodate direct on-site inspection by your compliance officer.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  Fully inspectable; physical hardware, logs, and files are in your comms rack.
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Offline Resilience</td>
                <td className="py-3.5 px-4 text-stone-600">
                  Down if internet fails or cloud provider suffers regional service outage.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  Fully operational on internal office LAN even during broadband outages.
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Data Training Risk</td>
                <td className="py-3.5 px-4 text-stone-600">
                  Subject to changing commercial terms of service and enterprise privacy revisions.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  Mathematically impossible; appliance has zero outbound telemetry connections.
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium text-stone-900">Pricing Predictability</td>
                <td className="py-3.5 px-4 text-stone-600">
                  Per-seat recurring licenses, subject to annual price hikes and usage tier caps.
                </td>
                <td className="py-3.5 px-4 text-emerald-950 font-medium bg-emerald-50/30">
                  Fixed hardware ownership from €4,500; flat monthly support from €149.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-stone-900 text-stone-100 p-8 sm:p-12 rounded-sm text-center space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
          Protect your firm's professional reputation
        </h2>
        <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Speak with our Dublin team about conducting an on-premise AI assessment for your office. We will review your regulatory obligations and verify hardware suitability.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-base rounded-sm transition-colors shadow-sm"
          >
            <span>Discuss your practice requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-stone-400">
          Enquiries directed strictly to: <span className="font-mono text-stone-300">hello@agenti.ie</span>
        </p>
      </section>
    </div>
  );
};
