import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Lock, Mail, User, School, BookOpen, ArrowRight, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
  onSuccess: (userData: { name: string; major: string }) => void;
}

export function AuthModal({ isOpen, mode, onClose, onSuccess }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    if (isOpen) {
      setCurrentMode(mode);
    }
  }, [mode, isOpen]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('Perhotelan (Hospitality)');
  const [school, setSchool] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess({
      name: name || (email ? email.split('@')[0] : 'Siswa SMK'),
      major
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2 mb-8">
          <span className="text-2xl font-black tracking-wider text-blue-600">E-ING</span>
          <h3 className="text-2xl font-black text-slate-900">
            {currentMode === 'login' ? 'Selamat Datang Kembali' : 'Daftar Akun Gratis'}
          </h3>
          <p className="text-xs text-slate-500">
            {currentMode === 'login'
              ? 'Lanjutkan latihan kosa kata dan sesi speaking Eropa.'
              : 'Akses 12 modul kosa kata vokasi dan lowongan P3MI.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {currentMode === 'register' && (
            <>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap kamu..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Asal SMK</label>
                <div className="relative">
                  <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="Contoh: SMKN 1 Surabaya"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Jurusan SMK Kamu</label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    <option value="Perhotelan (Hospitality)">Perhotelan (Hospitality)</option>
                    <option value="Tata Boga">Tata Boga</option>
                    <option value="Konstruksi">Konstruksi</option>
                    <option value="Teknologi Manufaktur">Teknologi Manufaktur / CNC</option>
                    <option value="Caregiver">Caregiver / Keperawatan</option>
                    <option value="Teknik Otomotif">Teknik Otomotif</option>
                    <option value="IT & Software">IT & Software</option>
                  </select>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Siswa/Alumni</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@smk.sch.id"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{currentMode === 'login' ? 'Masuk Sekarang' : 'Daftar Sekarang'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
          {currentMode === 'login' ? (
            <span>
              Belum punya akun E-ING?{' '}
              <button onClick={() => setCurrentMode('register')} className="text-blue-600 font-bold hover:underline cursor-pointer">
                Daftar Gratis
              </button>
            </span>
          ) : (
            <span>
              Sudah punya akun?{' '}
              <button onClick={() => setCurrentMode('login')} className="text-blue-600 font-bold hover:underline cursor-pointer">
                Masuk
              </button>
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
