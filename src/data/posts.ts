import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Sosyal Anksiyete Vakası: Ergen Danışan',
    content: 'Sosyal ortamlarda aşırı kaygı yaşayan 16 yaşındaki danışanın vaka analizi ve uygulanan terapi yaklaşımları...',
    excerpt: 'Ergen danışanda sosyal anksiyete tedavi süreci',
    category: 'bireysel',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80'
  },
  {
    id: 2,
    title: 'Okul Öncesi Uyum Sorunları',
    content: 'Anaokuluna yeni başlayan 4 yaşındaki öğrencinin uyum sürecinde yaşanan zorluklar ve çözüm stratejileri...',
    excerpt: 'Okul öncesi uyum süreci yönetimi',
    category: 'okul',
    schoolLevel: 'anaokul',
    date: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80'
  },
  {
    id: 3,
    title: 'İlkokul 1. Sınıf Okuma Güçlüğü',
    content: 'İlkokul 1. sınıf öğrencisinde gözlemlenen okuma güçlüğü ve uygulanan destek stratejileri...',
    excerpt: 'İlkokul okuma güçlüğü vakası',
    category: 'okul',
    schoolLevel: 'ilkokul',
    date: '2024-03-13',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80'
  },
  {
    id: 4,
    title: 'Ortaokul Akran Zorbalığı',
    content: 'Ortaokul 7. sınıf öğrencisinde yaşanan akran zorbalığı vakası ve okul müdahale programı...',
    excerpt: 'Ortaokul zorbalık vakası çözümü',
    category: 'okul',
    schoolLevel: 'ortaokul',
    date: '2024-03-12',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&q=80'
  },
  {
    id: 5,
    title: 'Lise Sınav Kaygısı',
    content: 'Lise son sınıf öğrencisinin üniversite sınavı kaygısı ve uygulanan müdahale teknikleri...',
    excerpt: 'Lise sınav kaygısı yönetimi',
    category: 'okul',
    schoolLevel: 'lise',
    date: '2024-03-11',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80'
  }
];