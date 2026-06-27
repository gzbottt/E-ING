import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, CheckCircle, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { HERO_TEXT, FEATURES_DATA } from '../data';
import { TabType } from '../types';

interface HeroSectionProps {
  onTabChange: (tab: TabType) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

export function HeroSection({ onTabChange, onOpenAuth }: HeroSectionProps) {
  return (
    <div className="overflow-hidden pb-16 pt-8 sm:pt-12 bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Top Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs sm:text-sm font-bold border border-blue-200 shadow-xs">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Khusus Siswa & Lulusan SMK Indonesia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              {HERO_TEXT.title1}
              <br />
              <span className="text-blue-600 bg-clip-text">
                {HERO_TEXT.title2}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HERO_TEXT.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('register')}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-xl shadow-blue-600/25 transition-all cursor-pointer active:scale-95 group"
              >
                <span>{HERO_TEXT.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onTabChange('kelas')}
                className="inline-flex items-center gap-2.5 px-6 py-4 text-base font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 rounded-2xl transition-all cursor-pointer group"
              >
                <BookOpen className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Lihat Modul Kelas</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Alumni SMK"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium">
                Bergabung bersama <strong className="text-blue-600 font-black">ribuan</strong> pengguna lainnya
              </p>
            </div>
          </motion.div>

          {/* Right Hero Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 mt-6 lg:mt-0 flex justify-center items-center"
          >
            <img
              src="gambar.png"
              alt="Siswa SMK Siap Kerja ke Eropa"
              referrerPolicy="no-referrer"
              className="w-full max-w-md h-80 sm:h-96 object-cover rounded-3xl"
            />
          </motion.div>

        </div>
      </div>

      {/* Section Below Hero: 4 Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Semua yang Anda Butuhkan, <span className="text-blue-600">dalam Satu Platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((card, idx) => {
            const iconBg = {
              blue: 'bg-blue-600 text-white shadow-blue-600/30',
              yellow: 'bg-amber-500 text-white shadow-amber-500/30',
              green: 'bg-emerald-600 text-white shadow-emerald-600/30',
              purple: 'bg-purple-600 text-white shadow-purple-600/30'
            }[card.iconType];

            const iconElement = {
              blue: <BookOpen className="w-6 h-6" />,
              yellow: <GraduationCap className="w-6 h-6" />,
              green: <Briefcase className="w-6 h-6" />,
              purple: <Users className="w-6 h-6" />
            }[card.iconType];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${iconBg}`}>
                    {iconElement}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onTabChange(card.targetTab)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 group-hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>{card.linkText}</span>
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
