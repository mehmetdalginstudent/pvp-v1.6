import React from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import { FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kullanım Şartları</h1>
          <p className="text-xl text-gray-600">
            PDR Portal'ı kullanırken uymanız gereken kurallar ve koşullar
          </p>
        </div>

        <div className="prose max-w-none">
          <h2>1. Genel Hükümler</h2>
          <p>
            Bu kullanım şartları, PDR Portal platformunun kullanımına ilişkin kuralları
            ve koşulları belirler. Platformu kullanarak bu şartları kabul etmiş
            sayılırsınız.
          </p>

          <h2>2. Üyelik</h2>
          <p>
            PDR Portal'a üye olabilmek için:
          </p>
          <ul>
            <li>18 yaşını doldurmuş olmanız</li>
            <li>Geçerli bir e-posta adresine sahip olmanız</li>
            <li>Meslek etiği kurallarına uyacağınızı taahhüt etmeniz</li>
            <li>Platformun kullanım kurallarını kabul etmeniz gerekmektedir</li>
          </ul>

          <h2>3. Vaka Paylaşımı Kuralları</h2>
          <p>
            Vaka paylaşımlarında uyulması gereken kurallar:
          </p>
          <ul>
            <li>Danışan gizliliğinin korunması</li>
            <li>Kişisel bilgilerin gizlenmesi</li>
            <li>Profesyonel etik kurallara uygunluk</li>
            <li>Yapıcı ve saygılı iletişim dili kullanımı</li>
          </ul>

          <h2>4. Fikri Mülkiyet Hakları</h2>
          <p>
            Platform üzerindeki tüm içerik, tasarım, logo ve diğer materyaller PDR
            Portal'ın fikri mülkiyetindedir. Bu içeriklerin izinsiz kullanımı, kopyalanması
            veya dağıtılması yasaktır.
          </p>

          <h2>5. Sorumluluk Reddi</h2>
          <p>
            PDR Portal:
          </p>
          <ul>
            <li>Kullanıcılar tarafından paylaşılan içeriklerin doğruluğunu garanti etmez</li>
            <li>Platform üzerinden verilen tavsiyelerin uygulanmasından doğacak sonuçlardan sorumlu değildir</li>
            <li>Teknik aksaklıklardan kaynaklanan kesintilerden sorumlu tutulamaz</li>
          </ul>

          <h2>6. Hesap Güvenliği</h2>
          <p>
            Kullanıcılar:
          </p>
          <ul>
            <li>Hesap bilgilerinin güvenliğinden sorumludur</li>
            <li>Şüpheli aktivite durumunda platform yönetimini bilgilendirmelidir</li>
            <li>Hesap bilgilerini üçüncü kişilerle paylaşmamalıdır</li>
          </ul>

          <h2>7. İçerik Politikası</h2>
          <p>
            Aşağıdaki içeriklerin paylaşılması kesinlikle yasaktır:
          </p>
          <ul>
            <li>Nefret söylemi içeren paylaşımlar</li>
            <li>Telif hakkı ihlali oluşturan içerikler</li>
            <li>Yanıltıcı veya spam içerikler</li>
            <li>Zararlı yazılım barındıran linkler</li>
          </ul>

          <h2>8. Değişiklikler</h2>
          <p>
            PDR Portal, bu kullanım şartlarını önceden haber vermeksizin değiştirme
            hakkını saklı tutar. Değişiklikler, platformda yayınlandığı tarihte
            yürürlüğe girer.
          </p>

          <h2>9. İletişim</h2>
          <p>
            Kullanım şartlarıyla ilgili sorularınız için:
          </p>
          <p>
            E-posta: terms@pdrportal.com<br />
            Telefon: +90 (212) 555 0123
          </p>
        </div>
      </div>
    </MainLayout>
  );
};