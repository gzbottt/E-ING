import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { FEATURES_DATA } from '../data';
import { TabType } from '../types';

interface FeaturesSectionProps {
  onTabChange: (tab: TabType) => void;
}

export function FeaturesSection({ onTabChange }: FeaturesSectionProps) {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Fitur-fitur <br className="sm:hidden" />
            <span className="text-blue-600">Andalan Kami.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Berbeda dengan platform pembelajaran Bahasa Inggris umum, E-ING didesain khusus agar lulusan SMK langsung siap bersaing untuk posisi pekerjaan entry-level di luar negeri, khususnya Eropa.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((card, idx) => {
            const iconColorMap = {
              blue: { bg: 'bg-blue-600', text: 'text-blue-600', iconBg: 'bg-blue-50 text-blue-600 border-blue-100', linkText: 'text-blue-600' },
              yellow: { bg: 'bg-amber-500', text: 'text-amber-600', iconBg: 'bg-amber-50 text-amber-500 border-amber-100', linkText: 'text-amber-600' },
              green: { bg: 'bg-emerald-600', text: 'text-emerald-600', iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100', linkText: 'text-emerald-600' },
              purple: { bg: 'bg-purple-600', text: 'text-purple-600', iconBg: 'bg-purple-50 text-purple-600 border-purple-100', linkText: 'text-purple-600' }
            }[card.iconType];

            const customLinkText = {
              vokasi: 'Lihat Modul',
              interaktif: 'Ikuti Kelas',
              kerja: 'P3MI',
              teman: 'Gabung Komunitas'
            }[card.id] || card.linkText;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${iconColorMap.iconBg} shadow-xs`}>
                    <BookOpen className="w-7 h-7" />
                  </div>

                  <h3 className={`text-2xl font-extrabold ${iconColorMap.text}`}>
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Checkpoints */}
                  <div className="space-y-3 pt-2">
                    {card.checkpoints?.map((chk, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700 leading-tight">
                          {chk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onTabChange(card.targetTab)}
                    className={`inline-flex items-center gap-2 font-black text-sm uppercase tracking-wide hover:gap-3 transition-all cursor-pointer ${iconColorMap.linkText}`}
                  >
                    <span>{customLinkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
