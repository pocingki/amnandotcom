export interface PlatformStat {
  platform: 'instagram' | 'tiktok' | 'youtube';
  followers: string;
  handle: string;
}

export interface Creator {
  id: string;
  name: string;
  title?: string;
  img?: string;
  verified?: boolean;
  niches?: string[];
  followers?: string; // total followers
  engagementRate?: string;
  location?: string;
  bio?: string;
  platforms?: PlatformStat[];
}

export interface CategorySettings {
  list: string[];
}

export interface ClientBrand {
  name: string;
  logoSvg: React.ReactNode;
}

export type AdminTab = 'dashboard' | 'kreator' | 'pengajuan' | 'kategori';