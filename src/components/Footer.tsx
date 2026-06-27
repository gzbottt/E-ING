import { TabType } from '../types';

interface FooterProps {
  onTabChange: (tab: TabType) => void;
}

export function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Col 1 */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex flex-col cursor-pointer select-none" onClick={() => onTabChange('beranda')}>
            <span className="text-3xl font-black tracking-wider text-blue-500">
              E-ING
            </span>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5 tracking-tight">
              Learn Local, Work Global
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
            Platform Pembelajaran Bahasa Inggris Vokasi khusus bagi siswa dan lulusan SMK Indonesia. Mempersiapkan keahlian kosa kata industri dan kesiapan bursa kerja Eropa.
          </p>
          <div className="text-xs font-semibold text-slate-500 pt-2">
            © {new Date().getFullYear()} E-ING Edutech Vokasi. Hak Cipta Dilindungi.
          </div>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Menu Navigasi</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li><button onClick={() => onTabChange('beranda')} className="hover:text-blue-400 transition-colors cursor-pointer">Beranda</button></li>
            <li><button onClick={() => onTabChange('fitur')} className="hover:text-blue-400 transition-colors cursor-pointer">Fitur Utama</button></li>
            <li><button onClick={() => onTabChange('kelas')} className="hover:text-blue-400 transition-colors cursor-pointer">12 Modul Vokasi</button></li>
            <li><button onClick={() => onTabChange('komunitas')} className="hover:text-blue-400 transition-colors cursor-pointer">Teman Belajar</button></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Karier & Mitra</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li><button onClick={() => onTabChange('lowongan')} className="hover:text-blue-400 transition-colors cursor-pointer">Lowongan P3MI</button></li>
            <li><button onClick={() => onTabChange('lowongan')} className="hover:text-blue-400 transition-colors cursor-pointer">Buat CV Europass</button></li>
            <li><button onClick={() => onTabChange('tentang')} className="hover:text-blue-400 transition-colors cursor-pointer">Mitra Strategis</button></li>
            <li><button onClick={() => onTabChange('tentang')} className="hover:text-blue-400 transition-colors cursor-pointer">Hubungi Kami</button></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
