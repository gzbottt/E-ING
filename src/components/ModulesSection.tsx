import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Utensils, HardHat, Cog, HeartPulse, Wrench, Laptop, Bed, Coffee, Zap, Boxes, Flame, ArrowRight } from 'lucide-react';
import { VOCAB_MODULES } from '../data';

const CATEGORIES = [
  'Semua',
  'Hospitality',
  'Tata Boga',
  'Konstruksi',
  'Teknologi Manufaktur',
  'Caregiver',
  'Teknik Otomotif',
  'IT'
];

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  HardHat: <HardHat className="w-6 h-6" />,
  Cog: <Cog className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Laptop: <Laptop className="w-6 h-6" />,
  Bed: <Bed className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Boxes: <Boxes className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />
};

export function ModulesSection() {
  const [selectedCat, setSelectedCat] = useState('Semua');

  const filteredModules = selectedCat === 'Semua' 
    ? VOCAB_MODULES 
    : VOCAB_MODULES.filter(m => m.category === selectedCat);

  return (
    <div className="py-16 sm:py-24 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image 3 */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            12 Modul <span className="text-blue-600">Kelas Vokasi</span> & <br className="hidden sm:block" />
            Sesi Interaktif
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Disusun spesifik berdasarkan 5 bidang keahlian SMK dan standar komunikasi pekerjaan entry-level di Eropa. Belajar kosakata spesifik agar siap saat wawancara kerja internasional.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2.5 mb-12 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Modules Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredModules.map((mod) => {
              const isHospitality = mod.category === 'Hospitality';
              const isBoga = mod.category === 'Tata Boga';
              
              const colorTheme = isHospitality
                ? { iconBg: 'bg-blue-600 text-white', label: 'text-blue-600' }
                : isBoga
                ? { iconBg: 'bg-emerald-600 text-white', label: 'text-emerald-600' }
                : { iconBg: 'bg-indigo-600 text-white', label: 'text-indigo-600' };

              return (
                <motion.div
                  layout
                  key={mod.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Icon + Category Pill */}
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md ${colorTheme.iconBg}`}>
                        {ICON_MAP[mod.iconName] || <Building2 className="w-5 h-5" />}
                      </div>
                      <span className={`text-sm font-extrabold ${colorTheme.label}`}>
                        {mod.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {mod.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {mod.cefrLevel}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:gap-2.5 transition-all">
                      <span>Lihat Modul</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
