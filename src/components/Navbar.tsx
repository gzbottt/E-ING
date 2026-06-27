import { motion } from 'motion/react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
}

const TABS: { id: TabType; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'kelas', label: 'Kelas' },
  { id: 'komunitas', label: 'Komunitas' },
  { id: 'lowongan', label: 'Lowongan' },
  { id: 'tentang', label: 'Tentang Kami' },
];

export function Navbar({ activeTab, onTabChange, onOpenAuth }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('beranda')}
          className="flex flex-col cursor-pointer select-none group"
        >
          <span className="text-3xl font-black tracking-wider text-blue-600 leading-none">
            E-ING
          </span>
          <span className="text-[10px] font-medium text-slate-400 mt-1 tracking-tight">
            Learn Local, Work Global
          </span>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-3 py-2 text-sm sm:text-base font-semibold transition-colors ${
                  isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => onOpenAuth('login')}
            className="px-5 py-2 text-sm sm:text-base font-semibold text-blue-600 border-2 border-blue-400/80 hover:border-blue-600 hover:bg-blue-50/50 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            Masuk
          </button>
          <button
            onClick={() => onOpenAuth('register')}
            className="px-5 py-2 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer active:scale-95"
          >
            Daftar Gratis
          </button>
        </div>
      </div>

      {/* Mobile Navigation Bar Below */}
      <div className="md:hidden flex overflow-x-auto px-4 py-2 space-x-4 border-t border-slate-100 bg-slate-50/80 scrollbar-none">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-500 hover:bg-slate-200/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
}
