export type TabType = 'beranda' | 'fitur' | 'kelas' | 'komunitas' | 'lowongan' | 'tentang';

export interface VocabSample {
  en: string;
  id: string;
  example: string;
}

export interface VocabModule {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  iconName: string;
  vocabCount: number;
  cefrLevel: string;
  description: string;
  sampleVocabs: VocabSample[];
}

export interface Reply {
  id: string;
  author: string;
  content: string;
  time: string;
}

export interface DiscussionPost {
  id: string;
  author: string;
  school: string;
  major: string;
  content: string;
  likes: number;
  isLiked?: boolean;
  repliesCount: number;
  replies: Reply[];
}

export interface JobOpening {
  id: string;
  sector: string;
  title: string;
  country: string;
  flag: string;
  minLang: string;
  p3miPartner: string;
  bp2miStatus: string;
}

export interface StrategicPartner {
  category: string;
  name: string;
  desc: string;
  iconName: string;
}

export interface FeatureCardData {
  id: string;
  title: string;
  desc: string;
  iconType: 'blue' | 'yellow' | 'green' | 'purple';
  linkText: string;
  targetTab: TabType;
  checkpoints?: string[];
}
