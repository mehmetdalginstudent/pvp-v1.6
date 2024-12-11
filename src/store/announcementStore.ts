import { create } from 'zustand';
import { TickerItem } from '../components/NewsTicker/types';
import { announcements as initialAnnouncements } from '../data/announcements';

interface AnnouncementStore {
  announcements: TickerItem[];
  publishedAnnouncements: TickerItem[];
  addAnnouncement: (announcement: Omit<TickerItem, 'id' | 'published'>) => void;
  updateAnnouncement: (id: number, announcement: Partial<TickerItem>) => void;
  deleteAnnouncement: (id: number) => void;
  togglePublish: (id: number) => void;
}

export const useAnnouncementStore = create<AnnouncementStore>((set) => ({
  announcements: initialAnnouncements.map(a => ({ ...a, published: true })),
  publishedAnnouncements: initialAnnouncements,
  
  addAnnouncement: (announcement) => set((state) => {
    const newAnnouncement = {
      ...announcement,
      id: Date.now(),
      published: false,
    };
    return {
      announcements: [newAnnouncement, ...state.announcements],
      publishedAnnouncements: state.publishedAnnouncements,
    };
  }),

  updateAnnouncement: (id, announcement) => set((state) => {
    const updatedAnnouncements = state.announcements.map(a =>
      a.id === id ? { ...a, ...announcement } : a
    );
    const updatedPublished = updatedAnnouncements.filter(a => a.published);
    return {
      announcements: updatedAnnouncements,
      publishedAnnouncements: updatedPublished,
    };
  }),

  deleteAnnouncement: (id) => set((state) => {
    const filteredAnnouncements = state.announcements.filter(a => a.id !== id);
    const filteredPublished = filteredAnnouncements.filter(a => a.published);
    return {
      announcements: filteredAnnouncements,
      publishedAnnouncements: filteredPublished,
    };
  }),

  togglePublish: (id) => set((state) => {
    const updatedAnnouncements = state.announcements.map(a =>
      a.id === id ? { ...a, published: !a.published } : a
    );
    const updatedPublished = updatedAnnouncements.filter(a => a.published);
    return {
      announcements: updatedAnnouncements,
      publishedAnnouncements: updatedPublished,
    };
  }),
}));