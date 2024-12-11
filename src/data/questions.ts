import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    title: 'Panik Atak Vakası - Yetişkin Danışan',
    question: 'Panik atak yaşayan yetişkin danışanla ilgili vaka paylaşımı ve süpervizyon talebi',
    answers: [
      {
        id: 1,
        content: 'Öncelikle medikal değerlendirme yapıldığından emin olunmalı. BDT teknikleri ve nefes egzersizleri faydalı olabilir.',
        date: '2024-03-15T10:30:00.000Z',
        questionId: 1,
        author: {
          name: 'Dr. Ayşe Yılmaz',
          city: 'İstanbul'
        },
        likes: 0,
        dislikes: 0
      }
    ],
    category: 'bireysel',
    date: '2024-03-14T15:45:00.000Z',
    author: {
      name: 'Mehmet Demir',
      city: 'Ankara'
    },
    popularity: 1
  },
  {
    id: 2,
    title: 'Parçalanmış Aile Çocuğu - Vaka Tartışması',
    question: 'Parçalanmış aile çocuğuyla ilgili vaka tartışması',
    answers: [
      {
        id: 2,
        content: 'Çocukla güvenli bir terapötik ilişki kurulduktan sonra oyun terapisi teknikleri kullanılabilir.',
        date: '2024-03-15T11:20:00.000Z',
        questionId: 2,
        author: {
          name: 'Zeynep Kaya',
          city: 'İzmir'
        },
        likes: 0,
        dislikes: 0
      }
    ],
    category: 'aile',
    date: '2024-03-14T16:30:00.000Z',
    author: {
      name: 'Ali Yıldız',
      city: 'Bursa'
    },
    popularity: 1
  },
  {
    id: 3,
    title: 'Akran Zorbalığı Vakası - Ortaokul Öğrencisi',
    question: 'Akran zorbalığına maruz kalan öğrenci vakası',
    answers: [
      {
        id: 3,
        content: 'Okul yönetimi ve öğretmenlerle işbirliği yapılmalı, grup terapisi düşünülebilir.',
        date: '2024-03-15T09:15:00.000Z',
        questionId: 3,
        author: {
          name: 'Prof. Dr. Ahmet Öz',
          city: 'Eskişehir'
        },
        likes: 0,
        dislikes: 0
      }
    ],
    category: 'okul',
    date: '2024-03-14T14:20:00.000Z',
    author: {
      name: 'Fatma Şahin',
      city: 'Antalya'
    },
    popularity: 1
  },
  {
    id: 4,
    title: 'Kariyer Değişimi - Karar Verme Süreci',
    question: 'İş değişikliği kararında kararsız kalan danışan',
    answers: [
      {
        id: 4,
        content: 'Kariyer değerlendirme envanterleri uygulanabilir, SWOT analizi yapılması önerilir.',
        date: '2024-03-15T13:45:00.000Z',
        questionId: 4,
        author: {
          name: 'Dr. Can Özkan',
          city: 'İzmir'
        },
        likes: 0,
        dislikes: 0
      }
    ],
    category: 'kariyer',
    date: '2024-03-14T17:10:00.000Z',
    author: {
      name: 'Selin Arslan',
      city: 'Ankara'
    },
    popularity: 1
  }
];