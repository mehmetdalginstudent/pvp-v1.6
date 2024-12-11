import React from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import { School, Users, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Profesyonel Ağ',
      description: 'Türkiye\'nin dört bir yanından PDR uzmanlarıyla bağlantı kurun.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: 'Vaka Paylaşımı',
      description: 'Deneyimlerinizi paylaşın, meslektaşlarınızdan geri bildirim alın.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Süpervizyon',
      description: 'Uzman süpervizörlerden profesyonel destek alın.'
    }
  ];

  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600">
            PDR Portal, psikolojik danışmanların profesyonel gelişimini destekleyen
            bir öğrenme ve paylaşım platformudur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="prose max-w-none">
          <h2>Misyonumuz</h2>
          <p>
            PDR uzmanlarının mesleki gelişimlerini destekleyerek, danışanlarına daha iyi
            hizmet sunmalarını sağlamak ve Türkiye'de psikolojik danışmanlık mesleğinin
            gelişimine katkıda bulunmak.
          </p>

          <h2>Vizyonumuz</h2>
          <p>
            Türkiye'nin en kapsamlı ve güvenilir PDR platformu olarak, meslek
            profesyonellerinin birinci tercihi olmak ve uluslararası standartlarda
            hizmet sunmak.
          </p>

          <h2>Değerlerimiz</h2>
          <ul>
            <li>Profesyonellik ve Etik Değerler</li>
            <li>Sürekli Öğrenme ve Gelişim</li>
            <li>İşbirliği ve Dayanışma</li>
            <li>Yenilikçilik ve Yaratıcılık</li>
            <li>Gizlilik ve Güven</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};