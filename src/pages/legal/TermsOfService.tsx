import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { FileText, Users, Shield, Book, AlertTriangle } from 'lucide-react';

const sections = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Üyelik Koşulları",
    content: `PDR Portal'a üye olabilmek için:
    • 18 yaşını doldurmuş olmanız
    • Geçerli bir e-posta adresine sahip olmanız
    • Meslek etiği kurallarına uyacağınızı taahhüt etmeniz
    • Platformun kullanım kurallarını kabul etmeniz gerekmektedir`
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Gizlilik ve Güvenlik",
    content: `Vaka paylaşımlarında uyulması gereken kurallar:
    • Danışan gizliliğinin korunması
    • Kişisel bilgilerin gizlenmesi
    • Profesyonel etik kurallara uygunluk
    • Yapıcı ve saygılı iletişim dili kullanımı`
  },
  {
    icon: <Book className="w-6 h-6 text-purple-600" />,
    title: "Fikri Mülkiyet",
    content: `Platform üzerindeki tüm içerik, tasarım, logo ve diğer materyaller PDR Portal'ın 
    fikri mülkiyetindedir. Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.`
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
    title: "Yasaklı İçerikler",
    content: `Aşağıdaki içeriklerin paylaşılması kesinlikle yasaktır:
    • Nefret söylemi içeren paylaşımlar
    • Telif hakkı ihlali oluşturan içerikler
    • Yanıltıcı veya spam içerikler
    • Zararlı yazılım barındıran linkler`
  }
];

export const TermsOfService: React.FC = () => {
  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kullanım Şartları</h1>
            <p className="text-xl text-gray-600">
              PDR Portal'ı kullanırken uymanız gereken kurallar ve koşullar
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="prose max-w-none">
                <h3 className="text-blue-800 font-semibold">Değişiklikler</h3>
                <p className="text-blue-700">
                  PDR Portal, bu kullanım şartlarını önceden haber vermeksizin değiştirme
                  hakkını saklı tutar. Değişiklikler, platformda yayınlandığı tarihte
                  yürürlüğe girer.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim</h3>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Kullanım şartlarıyla ilgili sorularınız için:
                </p>
                <ul className="text-gray-600">
                  <li>E-posta: terms@pdrportal.com</li>
                  <li>Telefon: +90 (212) 555 0123</li>
                  <li>Adres: Levent, İstanbul</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};