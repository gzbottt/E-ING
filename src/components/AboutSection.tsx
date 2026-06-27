import React from 'react';
import { motion } from 'motion/react';
import { Landmark, ShieldCheck, GraduationCap, School, Briefcase, Users, Building } from 'lucide-react';
import { STRATEGIC_PARTNERS } from '../data';

const PARTNER_ICON_MAP: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  School: <School className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />
};

export function AboutSection() {
  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Top Hero matching Image 6 */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Solusi Terpadu <span className="text-blue-600">Bahasa</span> <br className="hidden sm:block" />
            <span className="text-blue-600">Inggris Vokasi</span> SMK
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Meningkatkan penyerapan kerja lulusan SMK, memperkuat daya saing tenaga kerja Indonesia di tingkat global, serta membuka peluang mobilitas sosial dan ekonomi melalui akses terhadap pekerjaan internasional di Eropa.
          </p>
        </div>

        {/* Section Heading & Grid matching Image 6 */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Kolaborasi & Mitra Strategis
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Dalam menjalankan bisnisnya, E-ING bekerja sama secara erat dengan berbagai lembaga kredibel demi menjamin mutu dan keamanan penempatan kerja luar negeri.
            </p>
          </div>

          {/* 6 Cards Grid matching Image 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_PARTNERS.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon + Category Pill */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {PARTNER_ICON_MAP[partner.iconName] || <Building className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {partner.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {partner.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* E-ING Mission & Motto */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Komitmen Pendidikan & Vokasi</span>
          <h3 className="text-2xl sm:text-3xl font-black">"Slogan gan gun gunung"</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Menembus puncak prestasi global berbekal kompetensi kosa kata spesifik dan keberanian bertutur kata berstandar Eropa.
          </p>
        </div>

      </div>
    </div>
  );
}
