import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Plus, CheckCircle, FileText, UploadCloud, Search, ShieldCheck, X } from 'lucide-react';
import { JOB_OPENINGS } from '../data';
import { JobOpening } from '../types';

export function JobsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Semua');
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);
  const [isCVExpertModalOpen, setIsCVExpertModalOpen] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const countries = ['Semua', 'Jerman', 'Polandia', 'Belanda', 'Ceko'];

  const filteredJobs = JOB_OPENINGS.filter(job => {
    const matchCountry = selectedCountry === 'Semua' || job.country === selectedCountry;
    const matchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.sector.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCountry && matchQuery;
  });

  const handleLamarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setApplyingJob(null);
    }, 2500);
  };

  return (
    <div className="py-12 sm:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Banner matching Image 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-blue-700 via-teal-600 to-emerald-500 text-white shadow-2xl shadow-teal-900/15"
        >
          <div className="relative z-10 max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Lowongan Pekerjaan Eropa <br className="hidden sm:block" />
              Mitra P3MI Terverifikasi
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-teal-50 font-normal leading-relaxed">
              Menghadirkan pendampingan lengkap mulai dari penyusunan CV berstandar internasional (Europass), simulasi wawancara kerja, pemahaman budaya kerja di luar negeri, hingga informasi lowongan resmi mitra P3MI & BP2MI
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsCVExpertModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-extrabold text-teal-800 bg-white hover:bg-teal-50 rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <Plus className="w-5 h-5 stroke-[3]" />
                <span>Buat CV Oleh Ahli</span>
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none" />
        </motion.div>

        {/* Section Heading & Search matching Image 5 */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Lowongan Entry Level
            </h2>

            {/* Search & Filter Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari posisi kerja..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {countries.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCountry === c
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs Cards Grid matching Image 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <motion.div
                layout
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600">
                      {job.sector}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{job.country} {job.flag}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {job.title}
                  </h3>
                </div>

                {/* Requirement & Partner Boxes matching Image 5 exactly */}
                <div className="space-y-3 pt-2">
                  {/* Green Box */}
                  <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-100 text-center sm:text-left">
                    <span className="block text-xs font-extrabold text-emerald-800 uppercase tracking-wide">
                      Syarat Bahasa Inggris :
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-900 mt-0.5 block">
                      {job.minLang}
                    </span>
                  </div>

                  {/* Blue Box */}
                  <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-100 text-center sm:text-left">
                    <span className="block text-xs font-extrabold text-blue-800 uppercase tracking-wide">
                      Mitra Penyalur P3MI:
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-blue-900 mt-0.5 block">
                      {job.p3miPartner}
                    </span>
                  </div>
                </div>

                {/* Lamar Button matching Image 5 */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setApplyingJob(job)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-200 hover:bg-emerald-300 text-emerald-950 font-black text-sm rounded-2xl transition-all cursor-pointer shadow-xs active:scale-95 text-center"
                  >
                    Lamar Via P3MI
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lamar Pekerjaan */}
      <AnimatePresence>
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              {!applySuccess ? (
                <>
                  <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Aplikasi Kerja Resmi P3MI</span>
                      <h3 className="text-xl font-black text-slate-900 mt-1">{applyingJob.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Penempatan: {applyingJob.country} {applyingJob.flag}</p>
                    </div>
                    <button onClick={() => setApplyingJob(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer p-1">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleLamarSubmit} className="space-y-4 mt-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap Siswa/Alumni</label>
                      <input required type="text" placeholder="Masukkan nama lengkap..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor WhatsApp Aktif</label>
                      <input required type="tel" placeholder="Contoh: 081234567890" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Upload CV Format Europass (PDF/DOCX)</label>
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                        <p className="text-xs font-bold text-slate-700">Klik untuk pilih file CV Europass kamu</p>
                        <p className="text-[10px] text-slate-400 mt-1">Maksimum ukuran 5MB</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-900 leading-tight">Data Anda dilindungi oleh protokol keamanan penempatan P3MI & BP2MI resmi.</p>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button type="button" onClick={() => setApplyingJob(null)} className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer">
                        Batal
                      </button>
                      <button type="submit" className="px-6 py-2.5 rounded-xl font-bold text-sm bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20 cursor-pointer active:scale-95">
                        Kirim Lamaran Sekarang
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Lamaran Berhasil Terkirim!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Tim HRD P3MI mitra akan me-review CV Europass Anda dan menghubungi melalui WhatsApp dalam 2x24 jam.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Buat CV Ahli */}
      <AnimatePresence>
        {isCVExpertModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900">Konsultasi Pembuatan CV Europass</h3>
                <button onClick={() => setIsCVExpertModalOpen(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mt-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Standar perusahaan di Eropa mewajibkan pelamar menggunakan format <strong>Europass CV</strong> yang menonjolkan keahlian praktis dan kosa kata industri.
                </p>

                <div className="bg-teal-50 p-4 rounded-2xl border border-teal-100 space-y-2">
                  <h4 className="text-sm font-black text-teal-900">Fasilitas Pendampingan E-ING:</h4>
                  <ul className="text-xs text-teal-800 space-y-1 list-disc pl-4">
                    <li>Penerjemahan kosa kata SMK ke standar kompetensi Eropa</li>
                    <li>Review tata letak & ATS friendliness</li>
                    <li>Sertifikat kompetensi bahasa E-ING terlampir otomatis</li>
                  </ul>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor WhatsApp Kamu</label>
                  <input type="tel" placeholder="0812xxxxxx" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 focus:bg-white" />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button onClick={() => setIsCVExpertModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer">
                    Nanti Saja
                  </button>
                  <button onClick={() => { alert("Permintaan pembuatan CV Europass diterima! Ahli CV E-ING akan mengontakmu via WhatsApp."); setIsCVExpertModalOpen(false); }} className="px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                    Jadwalkan Konsultasi Gratis
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
