import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Brand blurb */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-emerald-950 text-emerald-100 flex items-center justify-center font-serif text-lg font-semibold border border-emerald-800">
                AI
              </div>
              <span className="font-serif text-xl font-medium tracking-tight text-stone-100">
                AgentI
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Supplying and installing private, on-premise AI appliances for regulated Irish professional services. Client documents, data, and prompts remain strictly inside your office.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-stone-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Based in Dublin · On-site installations nationwide across Ireland</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-stone-100 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-stone-100 transition-colors"
                >
                  Services & Appliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-stone-100 transition-colors"
                >
                  Pricing & LEO Grants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-private')}
                  className="hover:text-stone-100 transition-colors"
                >
                  Why Private (Compliance)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-stone-100 transition-colors"
                >
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Regulated Governance
            </h4>
            <p className="text-stone-400 text-xs leading-relaxed">
              Engineered for Irish solicitors, life and pensions brokerages, accountants, and medical clinics handling GDPR Article 9 special-category data and complying with Central Bank of Ireland and ESMA guidelines.
            </p>
            <div className="pt-2">
              <span className="text-xs text-stone-400 block mb-1">Direct enquiry</span>
              <a
                href="mailto:hello@agenti.ie"
                className="inline-flex items-center gap-2 text-stone-200 hover:text-emerald-400 font-mono text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>hello@agenti.ie</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} AgentI Systems Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>LEO Grow Digital Voucher Eligible</span>
            <span aria-hidden="true">·</span>
            <span>Zero Cloud Egress</span>
            <span aria-hidden="true">·</span>
            <span>Human-in-the-Loop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
