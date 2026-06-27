/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, LogOut } from 'lucide-react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ModulesSection } from './components/ModulesSection';
import { CommunitySection } from './components/CommunitySection';
import { JobsSection } from './components/JobsSection';
import { AboutSection } from './components/AboutSection';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<{ name: string; major: string } | null>(null);

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Notification Bar if User Logged In */}
      <AnimatePresence>
        {user && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-inner"
          >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Akun Terhubung: <strong className="text-blue-300">{user.name}</strong> ({user.major})</span>
              </div>
              <button
                onClick={() => setUser(null)}
                className="inline-flex items-center gap-1 hover:text-rose-300 text-slate-300 cursor-pointer transition-colors"
              >
                <span>Keluar</span>
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Area with Smooth Animation */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activeTab === 'beranda' && (
              <>
                <HeroSection
                  onTabChange={handleTabChange}
                  onOpenAuth={handleOpenAuth}
                />
              </>
            )}

            {activeTab === 'fitur' && (
              <FeaturesSection onTabChange={handleTabChange} />
            )}

            {activeTab === 'kelas' && (
              <ModulesSection />
            )}

            {activeTab === 'komunitas' && (
              <CommunitySection />
            )}

            {activeTab === 'lowongan' && (
              <JobsSection />
            )}

            {activeTab === 'tentang' && (
              <AboutSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        mode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(u) => setUser(u)}
      />

      {/* Footer */}
      <Footer onTabChange={handleTabChange} />
    </div>
  );
}
