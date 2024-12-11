import React from 'react';
import { MainLayout } from '../components/Layout/MainLayout';
import { Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <MainLayout currentCategory={null} onNavigate={() => {}}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KVKK ve Gizlilik Politikası</h1>
          <p className="text-xl text-gray-600">
            Kişisel verilerinizin korunması bizim için önemlidir
          </p>
        </div>

        <div className="prose max-w-none">
          <h2>1. Veri Sorumlusu</h2>
          <p>
            PDR Portal olarak kişisel verilerinizin güvenliği konusunda azami hassasiyet
            göstermekteyiz. Bu bilinçle, platformumuzun kullanıcıları dahil, platformumuz
            ile ilişkili tüm şahıslara ait kişisel verilerin 6698 sayılı Kişisel Verilerin
            Korunması Kanunu'na ("KVKK") uygun olarak işlenmesine ve korunmasına büyük
            önem vermekteyiz.
          </p>

          <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
          <p>
            Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul>
            <li>Üyelik işlemlerinin gerçekleştirilmesi</li>
            <li>Platform hizmetlerinin sunulması ve geliştirilmesi</li>
            <li>Kullanıcı deneyiminin iyileştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2>3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz, yasal düzenlemelerin öngördüğü sınırlar dahilinde ve
            yukarıda belirtilen amaçlarla sınırlı olarak, iş ortaklarımıza, tedarikçilerimize,
            kanunen yetkili kamu kurumlarına ve yetkili özel kişilere aktarılabilmektedir.
          </p>

          <h2>4. Kişisel Verilerin Korunması İçin Alınan Önlemler</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki teknik ve idari
            önlemleri almaktayız:
          </p>
          <ul>
            <li>Güvenli sunucu altyapısı</li>
            <li>Şifreleme teknolojileri</li>
            <li>Erişim kontrolleri</li>
            <li>Düzenli güvenlik değerlendirmeleri</li>
          </ul>

          <h2>5. Kişisel Veri Sahibinin Hakları</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara
            sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
          </ul>

          <h2>6. İletişim</h2>
          <p>
            Bu politika kapsamındaki haklarınızı kullanmak veya sorularınız için
            aşağıdaki iletişim bilgilerini kullanabilirsiniz:
          </p>
          <p>
            E-posta: privacy@pdrportal.com<br />
            Telefon: +90 (212) 555 0123
          </p>
        </div>
      </div>
    </MainLayout>
  );
};