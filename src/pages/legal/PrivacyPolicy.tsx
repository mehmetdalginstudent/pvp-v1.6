import React from 'react';
import { MainLayout } from '../../components/Layout/MainLayout';
import { Shield, Lock, Database, UserCheck, Mail } from 'lucide-react';

const sections = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Veri Sorumlusu",
    content: `PDR Portal olarak kişisel verilerinizin güvenliği konusunda azami hassasiyet göstermekteyiz. 
    Bu bilinçle, platformumuzun kullanıcıları dahil, platformumuz ile ilişkili tüm şahıslara ait kişisel 
    verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ("KVKK") uygun olarak işlenmesine ve 
    korunmasına büyük önem vermekteyiz.`
  },
  {
    icon: <Database className="w-6 h-6 text-green-600" />,
    title: "Veri İşleme Amacı",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
    • Üyelik işlemlerinin gerçekleştirilmesi
    • Platform hizmetlerinin sunulması ve geliştirilmesi
    • Kullanıcı deneyiminin iyileştirilmesi
    • Yasal yükümlülüklerin yerine getirilmesi`
  },
  {
    icon: <Lock className="w-6 h-6 text-purple-600" />,
    title: "Güvenlik Önlemleri",
    content: `Verilerinizin güvenliği için aldığımız önlemler:
    • SSL şifreleme
    • Güvenlik duvarı koruması
    • Düzenli güvenlik denetimleri
    • Erişim kontrolü ve yetkilendirme
    • Veri yedekleme ve kurtarma prosedürleri`
  },
  {
    icon: <UserCheck className="w-6 h-6 text-orange-600" />,
    title: "Haklarınız",
    content: `KVKK kapsamında sahip olduğunuz haklar:
    • Kişisel verilerinizin işlenip işlenmediğini öğrenme
    • Kişisel verilerinize erişim ve düzeltme talep etme
    • İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme
    • Yurt içi/yurt dışı aktarım bilgisi talep etme
    • Silme veya yok edilmesini talep etme`
  }
];

export const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Gizlilik Politikası</h1>
            <p className="text-xl text-gray-600">
              Kişisel verilerinizin korunması bizim için önemlidir
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

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">İletişim</h2>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Gizlilik politikamız hakkında sorularınız için:
                </p>
                <ul className="text-gray-600">
                  <li>E-posta: privacy@pdrportal.com</li>
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