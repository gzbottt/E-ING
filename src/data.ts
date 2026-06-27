import { VocabModule, DiscussionPost, JobOpening, StrategicPartner, FeatureCardData } from './types';

export const HERO_TEXT = {
  title1: "Belajar Bahasa Inggris.",
  title2: "Siap Kerja ke Eropa.",
  desc: "E-ING adalah platform pembelajaran bahasa Inggris vokasi khusus siswa dan lulusan SMK yang dirancang agar langsung siap bersaing untuk posisi pekerjaan entry-level di luar negeri, khususnya Eropa.",
  ctaPrimary: "Mulai Belajar",
  ctaSecondary: "Pelajari Lebih Lanjut",
  userSocialProof: "Bergabung bersama ribuan pengguna lainnya",
  sectionHeading: "Semua yang Anda Butuhkan, dalam Satu Platform"
};

export const FEATURES_DATA: FeatureCardData[] = [
  {
    id: "vokasi",
    title: "Kelas Vokasi",
    desc: "Pelajari Bahasa Inggris sesuai dengan jurusanmu melalui 12 modul yang dirancang untuk kebutuhan kerja di Eropa.",
    iconType: "blue",
    linkText: "Lihat Modul",
    targetTab: "kelas",
    checkpoints: [
      "12 Modul Vokasi Spesifik",
      "Perhotelan, Tata Boga, IT, Teknik, Caregiver"
    ]
  },
  {
    id: "interaktif",
    title: "Kelas Interaktif",
    desc: "Belajar bareng dengan tutor terpercaya setiap minggu nya dan bebas tanya kapan saja serta dapat umpan balik langsung.",
    iconType: "yellow",
    linkText: "Ikuti Kelas",
    targetTab: "kelas",
    checkpoints: [
      "Sesi Live Teaching Mingguan",
      "Tutor Profesional & Umpan Balik Instan"
    ]
  },
  {
    id: "kerja",
    title: "Siap Kerja",
    desc: "Persiapkan langkahmu untuk bekerja di Eropa dengan pelatihan dan pendampingan CV berstandar internasional & lowongan mitra P3MI.",
    iconType: "green",
    linkText: "P3MI",
    targetTab: "lowongan",
    checkpoints: [
      "Penyusunan CV Europass",
      "Lowongan Mitra P3MI Eropa"
    ]
  },
  {
    id: "teman",
    title: "Teman Belajar",
    desc: "Temukan teman belajar kamu untuk berdiskusi dan berlatih percakapan Bahasa Inggris bersama secara aktif di komunitas pendorong motivasi.",
    iconType: "purple",
    linkText: "Gabung Komunitas",
    targetTab: "komunitas",
    checkpoints: [
      "Komunitas Percakapan Aktif",
      "Pencarian Partner Speaking"
    ]
  }
];

export const VOCAB_MODULES: VocabModule[] = [
  {
    id: "hosp-1",
    category: "Hospitality",
    title: "Hospitality & Front Office Reception",
    subtitle: "Hospitality",
    iconName: "Building2",
    vocabCount: 140,
    cefrLevel: "CEFR A2-B1",
    description: "Kosakata profesional untuk check-in tamu Eropa, menangani keluhan dengan sopan, dan etiket telepon bintang 5.",
    sampleVocabs: [
      { en: "Complimentary breakfast", id: "Sarapan gratis fasilitas hotel", example: "Breakfast is complimentary for all registered guests from 6 AM to 10 AM." },
      { en: "Room upgrade", id: "Peningkatan tipe kamar", example: "We would be delighted to offer you a complimentary room upgrade to our deluxe suite." },
      { en: "Concierge service", id: "Layanan bantuan tamu", example: "Our concierge can arrange your airport transfer and museum tickets." },
      { en: "Check-out procedure", id: "Prosedur keluar kamar", example: "Please leave your keycards at the reception during standard check-out." }
    ]
  },
  {
    id: "boga-1",
    category: "Tata Boga",
    title: "Culinary Arts & Kitchen Operations",
    subtitle: "Tata Boga",
    iconName: "Utensils",
    vocabCount: 165,
    cefrLevel: "CEFR A2-B1",
    description: "Instruksi dapur standar HACCP Eropa, teknik pengolahan masakan kontinental, serta komunikasi pesanan restoran.",
    sampleVocabs: [
      { en: "Mise en place", id: "Persiapan seluruh bahan masak", example: "Ensure your mise en place is completed before the evening dinner rush." },
      { en: "Sous-vide cooking", id: "Memasak vakum suhu rendah", example: "The salmon is prepared using precision sous-vide techniques." },
      { en: "Allergen notice", id: "Pemberitahuan alergen makanan", example: "Always verify if the customer has severe nut or dairy allergies." },
      { en: "Sanitation protocol", id: "Protokol kebersihan dapur", example: "Follow strict sanitation protocols when handling poultry products." }
    ]
  },
  {
    id: "kons-1",
    category: "Konstruksi",
    title: "European Building & Civil Construction",
    subtitle: "Konstruksi",
    iconName: "HardHat",
    vocabCount: 150,
    cefrLevel: "CEFR B1",
    description: "Komunikasi membaca blueprint proyek, aturan keselamatan kerja (K3/OSHA Eropa), dan koordinasi alat berat.",
    sampleVocabs: [
      { en: "Scaffolding safety", id: "Keselamatan perancah bangunan", example: "Inspect the scaffolding structure daily before allowing workers to ascend." },
      { en: "Load-bearing wall", id: "Dinding penahan beban", example: "Do not drill into the load-bearing wall without structural engineering approval." },
      { en: "Personal Protective Equipment", id: "Alat Pelindung Diri (APD)", example: "Hard hats, steel-toe boots, and high-visibility vests are mandatory PPE." },
      { en: "Concrete curing", id: "Proses pematangan beton", example: "Allow 72 hours for proper concrete curing before removing the wooden formwork." }
    ]
  },
  {
    id: "manuf-1",
    category: "Teknologi Manufaktur",
    title: "Precision CNC & Smart Manufacturing",
    subtitle: "Teknologi Manufaktur",
    iconName: "Cog",
    vocabCount: 180,
    cefrLevel: "CEFR B1-B2",
    description: "Istilah pengoperasian mesin CNC otomatis, perawatan preventif pabrik otomasi, dan laporan kontrol kualitas ISO.",
    sampleVocabs: [
      { en: "Calibrate machinery", id: "Kalibrasi ulang mesin pabrik", example: "Calibrate the 5-axis CNC milling machine prior to the morning production run." },
      { en: "Quality tolerance", id: "Batas toleransi kepresisian", example: "All manufactured components must meet strict micron-level quality tolerances." },
      { en: "Preventive maintenance", id: "Perawatan pencegahan kerusakan", example: "Scheduled preventive maintenance reduces unexpected factory downtime." },
      { en: "Emergency stop", id: "Tombol pemberhentian darurat", example: "Hit the emergency stop button immediately if abnormal vibrations occur." }
    ]
  },
  {
    id: "care-1",
    category: "Caregiver",
    title: "Geriatric & Elderly Care Assistance",
    subtitle: "Caregiver",
    iconName: "HeartPulse",
    vocabCount: 190,
    cefrLevel: "CEFR B1-B2",
    description: "Bahasa empati merawat lansia di panti jompo Eropa, mendampingi terapi harian, dan pencatatan tanda vital medis.",
    sampleVocabs: [
      { en: "Blood pressure check", id: "Pemeriksaan tekanan darah", example: "We will check the patient's blood pressure and oxygen saturation every morning." },
      { en: "Mobility assistance", id: "Bantuan gerak berjalan", example: "Provide gentle mobility assistance when helping the resident move to the wheelchair." },
      { en: "Medication dosage", id: "Dosis obat harian", example: "Double check the exact medication dosage prescribed by the attending physician." },
      { en: "Emotional reassurance", id: "Ketenangan batin/psikologis", example: "Speak softly to offer emotional reassurance when the resident feels anxious." }
    ]
  },
  {
    id: "oto-1",
    category: "Teknik Otomotif",
    title: "European Automotive & EV Mechatronics",
    subtitle: "Teknik Otomotif",
    iconName: "Wrench",
    vocabCount: 155,
    cefrLevel: "CEFR B1",
    description: "Diagnosis kelistrikan mobil listrik (EV), membaca scanner OBD-II Jerman, dan standar servis bengkel resmi Eropa.",
    sampleVocabs: [
      { en: "Diagnostic trouble code", id: "Kode kerusakan scanner mobil", example: "Connect the diagnostic tool to read the engine control trouble codes." },
      { en: "Battery thermal management", id: "Pengaturan suhu baterai EV", example: "Check the coolant level for the high-voltage battery thermal management system." },
      { en: "Brake pad replacement", id: "Penggantian kampas rem", example: "The front brake pads show excessive wear and require immediate replacement." }
    ]
  },
  {
    id: "it-1",
    category: "IT",
    title: "Software Engineering & Cloud Support",
    subtitle: "IT",
    iconName: "Laptop",
    vocabCount: 200,
    cefrLevel: "CEFR B2",
    description: "Standar Agile Scrum rapat harian Eropa, penanganan tiket helpdesk jaringan, dan dokumentasi API RESTful.",
    sampleVocabs: [
      { en: "Daily standup meeting", id: "Rapat koordinasi tim harian", example: "During the daily standup, I reported fixing the authentication endpoint bug." },
      { en: "Deployment pipeline", id: "Alur rilis aplikasi otomatis", example: "Our automated CI/CD deployment pipeline runs unit tests before staging." },
      { en: "Network latency", id: "Keterlambatan respon jaringan", example: "We optimized the database queries to drastically reduce server latency." }
    ]
  },
  {
    id: "hosp-2",
    category: "Hospitality",
    title: "Housekeeping & Room Amenities Standard",
    subtitle: "Hospitality",
    iconName: "Bed",
    vocabCount: 130,
    cefrLevel: "CEFR A2-B1",
    description: "Kosakata penataan kamar hotel bintang 5, penanganan bahan pembersih ramah lingkungan, dan laporan kamar rusak.",
    sampleVocabs: [
      { en: "Turn-down service", id: "Layanan penataan tempat tidur malam", example: "Housekeeping performs turn-down service each evening at 7 PM." },
      { en: "Eco-friendly detergent", id: "Detergen ramah lingkungan", example: "Our hotel exclusively uses European certified eco-friendly cleaning agents." }
    ]
  },
  {
    id: "boga-2",
    category: "Tata Boga",
    title: "Bakery, Pastry & Cafe Patisserie",
    subtitle: "Tata Boga",
    iconName: "Coffee",
    vocabCount: 145,
    cefrLevel: "CEFR A2-B1",
    description: "Teknik pembuatan roti sourdough khas Eropa, pembuatan croissant prancis, dan manajemen barista espresso bar.",
    sampleVocabs: [
      { en: "Fermentation proofing", id: "Pengembangan adonan ragi roti", example: "Let the sourdough dough rest in the proofing chamber at 26 degrees Celsius." }
    ]
  },
  {
    id: "listrik-1",
    category: "Konstruksi",
    title: "Industrial Electrical & Solar Installation",
    subtitle: "Konstruksi",
    iconName: "Zap",
    vocabCount: 160,
    cefrLevel: "CEFR B1-B2",
    description: "Instalasi panel surya rooftop Eropa, wiring diagram tegangan tinggi standar IEC, dan pengujian insulasi.",
    sampleVocabs: [
      { en: "Circuit breaker", id: "Pemutus arus listrik otomatis", example: "Shut off the main circuit breaker before conducting any wiring maintenance." }
    ]
  },
  {
    id: "logistik-1",
    category: "Teknologi Manufaktur",
    title: "Warehouse Automation & Supply Chain",
    subtitle: "Teknologi Manufaktur",
    iconName: "Boxes",
    vocabCount: 135,
    cefrLevel: "CEFR B1",
    description: "Kosakata sistem manajemen gudang SAP, pengoperasian forklift listrik, dan prosedur paking ekspor internasional.",
    sampleVocabs: [
      { en: "Pallet jack operation", id: "Pengoperasian dongkrak palet", example: "Use the electric pallet jack to transfer the cargo to the loading dock." }
    ]
  },
  {
    id: "welding-1",
    category: "Teknologi Manufaktur",
    title: "Certified TIG/MIG Industrial Welding",
    subtitle: "Teknologi Manufaktur",
    iconName: "Flame",
    vocabCount: 140,
    cefrLevel: "CEFR B1",
    description: "Kosakata pengelasan pipa tekanan tinggi berstandar EN ISO 9606 Eropa, pemilihan gas pelindung, dan inspeksi sinar-X.",
    sampleVocabs: [
      { en: "Argon shielding gas", id: "Gas pelindung las Argon", example: "Maintain proper argon shielding gas flow to prevent weld contamination." }
    ]
  }
];

export const INITIAL_DISCUSSIONS: DiscussionPost[] = [
  {
    id: "post-1",
    author: "Rizky Ramadhan",
    school: "Alumni SMKN 14 Banjarmasin",
    major: "Teknik Otomotif",
    content: "Benar kata modul E-ING, interviewer di Jerman gak nanya rumus grammar sama sekali. Mereka langsung ngasih studi kasus \"Kalo mesin mogok saat deadline ketat, gimana kamu komunikasi ke manajer?\". Untung udah sering latihan di sesi Teman Belajar!",
    likes: 184,
    repliesCount: 42,
    replies: [
      { id: "r1", author: "Bagas Pratama (SMKN 2 Surabaya)", content: "Wah mantap kak! Aku besok jadwal interview sama P3MI mitra Jerman, doakan lolos ya!", time: "2 jam yang lalu" },
      { id: "r2", author: "Tutor Sarah (E-ING Coach)", content: "Congratulations Rizky! Yes, European employers focus heavily on problem-solving communication. Keep shining!", time: "1 jam yang lalu" }
    ]
  },
  {
    id: "post-2",
    author: "Royyan",
    school: "Alumni SMKN 7 Banjarmasin",
    major: "Teknik Otomotif",
    content: "Alhamdulillah setelah 3 bulan rutin ikut Live Teaching & perbaiki CV pakai format Europass di E-ING, kemarin dapet Offering Letter kerja di bengkel EV Amsterdam Belanda! Kuncinya pede speak up pas wawancara teknis.",
    likes: 215,
    repliesCount: 38,
    replies: [
      { id: "r3", author: "Dewi Lestari (SMKN 1 Bandung)", content: "Keren banget kak Royyan! Mau tanya tips belajar kosakatanya gimana kak supaya cepat hafal?", time: "4 jam yang lalu" }
    ]
  },
  {
    id: "post-3",
    author: "Siti Nurhaliza",
    school: "Siswa Kelas XII SMKN 3 Yogyakarta",
    major: "Perhotelan (Hospitality)",
    content: "Latihan roleplay check-in tamu VIP bareng partner speaking dari SMK Malang seru banget sore ini! Awalnya agak belibet ngomong 'We would be delighted to upgrade your room', sekarang udah makin natural. Yuk siapa mau speaking bareng besok malam?",
    likes: 142,
    repliesCount: 29,
    replies: [
      { id: "r4", author: "Fajar (SMKN 1 Denpasar)", content: "Aku mau kak! Kebetulan aku jurusan Front Office juga bersiap untuk magang di Polandia.", time: "30 menit yang lalu" }
    ]
  },
  {
    id: "post-4",
    author: "Dimas Anggara",
    school: "Alumni SMKN 1 Cikarang",
    major: "Teknologi Manufaktur",
    content: "Bagi teman-teman jurusan Pemesinan/CNC, jangan lupa kuasai istilah preventive maintenance sama quality tolerance. Kemarin tes user di perusahaan Ceko beneran keluar semua kosa kata dari modul E-ING!",
    likes: 198,
    repliesCount: 31,
    replies: []
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-1",
    sector: "Perhotelan (Hospitality)",
    title: "Hotel Front Office & Guest Relations",
    country: "Jerman",
    flag: "🇩🇪",
    minLang: "Min. CEFR B1 (Sertifikat E-ING diakui mitra)",
    p3miPartner: "PT Europa Kerja Sejahtera (Mitra Resmi BP2MI)",
    bp2miStatus: "Mitra Resmi BP2MI"
  },
  {
    id: "job-2",
    sector: "Perhotelan (Hospitality)",
    title: "Luxury Resort Concierge & Receptionist",
    country: "Jerman",
    flag: "🇩🇪",
    minLang: "Min. CEFR B1 (Sertifikat E-ING diakui mitra)",
    p3miPartner: "PT Europa Kerja Sejahtera (Mitra Resmi BP2MI)",
    bp2miStatus: "Mitra Resmi BP2MI"
  },
  {
    id: "job-3",
    sector: "Tata Boga",
    title: "Continental Pastry Chef Assistant",
    country: "Polandia",
    flag: "🇵🇱",
    minLang: "Min. CEFR A2-B1 (Lulus Modul Tata Boga E-ING)",
    p3miPartner: "PT Bina Nusantara Global P3MI",
    bp2miStatus: "Mitra Resmi BP2MI"
  },
  {
    id: "job-4",
    sector: "Caregiver",
    title: "Elderly Care Assistant (Nursing Home)",
    country: "Belanda",
    flag: "🇳🇱",
    minLang: "Min. CEFR B1 + Modul Caregiver E-ING",
    p3miPartner: "PT Bintang Abadi Penempat",
    bp2miStatus: "Terverifikasi KBRI & BP2MI"
  },
  {
    id: "job-5",
    sector: "Teknologi Manufaktur",
    title: "CNC Operator & Precision Milling Specialist",
    country: "Ceko",
    flag: "🇨🇿",
    minLang: "Min. CEFR B1 Teknik Bahasa Inggris",
    p3miPartner: "PT Indo Global Vokasi P3MI",
    bp2miStatus: "Mitra Resmi BP2MI"
  },
  {
    id: "job-6",
    sector: "Konstruksi",
    title: "Industrial Solar Panel Welder & Electrician",
    country: "Jerman",
    flag: "🇩🇪",
    minLang: "Min. CEFR B1 + sertifikasi EN ISO",
    p3miPartner: "PT Europa Kerja Sejahtera",
    bp2miStatus: "Mitra Resmi BP2MI"
  }
];

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    category: "PEMERINTAH",
    name: "BP2MI",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "Landmark"
  },
  {
    category: "PEMERINTAH",
    name: "Kementerian Ketenagakerjaan",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "ShieldCheck"
  },
  {
    category: "PEMERINTAH",
    name: "Kementerian Pendidikan",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "GraduationCap"
  },
  {
    category: "PENDIDIKAN",
    name: "Asosiasi Kepala Sekolah SMK",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "School"
  },
  {
    category: "PENYALUR RESMI",
    name: "Gabungan P3MI Eropa",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "Briefcase"
  },
  {
    category: "KOMUNITAS",
    name: "Komunitas Diaspora Eropa",
    desc: "Mendukung kurikulum & penyaluran lowongan bagi lulusan SMK tersertifikasi E-ING.",
    iconName: "Users"
  }
];
