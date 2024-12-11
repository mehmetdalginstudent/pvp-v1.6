import React from 'react';
import { AlertCircle } from 'lucide-react';

interface EthicalAgreementProps {
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
}

export const EthicalAgreement: React.FC<EthicalAgreementProps> = ({ isOpen, onAccept, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold">Etik Bilgilendirme ve Onay</h2>
          </div>

          <div className="space-y-4 text-gray-700">
            <section>
              <h3 className="font-semibold mb-2">Kişisel Verilerin Korunması</h3>
              <p>Bu formda paylaşılan tüm bilgiler 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında korunmaktadır. Bilgiler, yalnızca danışanın açık rızası veya kanunlarla öngörülen istisnalar dahilinde işlenecektir.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Anonimlik İlkesi</h3>
              <p>Paylaşılan vakalarda danışan kimliğini ifşa edebilecek herhangi bir kişisel bilgi (isim, adres, fotoğraf, vs.) kullanılmamalıdır. Tüm bildirimlerde anonimlik sağlanmalıdır.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Veri İşleme Sınırları</h3>
              <p>Bildirilen veriler yalnızca bilimsel, mesleki ve eğitsel amaçlarla kullanılacak olup üçüncü şahıslarla paylaşılmayacaktır.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Açık Rıza Alınması</h3>
              <p>Vaka bildiriminde, danışandan açık rıza alınmış olmalıdır. Açık rıza alınmadan yapılan bildirimler etik ve hukuki açıdan sorun teşkil edebilir.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Duygusal Hassasiyet</h3>
              <p>Paylaşılan vakalarda danışanın duygusal ve psikolojik hassasiyetine dikkat edilmelidir. Aşağılayıcı, yargılayıcı veya zarar verici ifadelerden kaçınılmalıdır.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Profesyonel Sınırlar</h3>
              <p>Bildirilen vakaların yalnızca profesyonel meslek etiği çerçevesinde gözlemlenen durumları içermesi gereklidir. Kişisel görüş veya tahminler yer almamalıdır.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Veri Saklama Süresi</h3>
              <p>Vaka bildiriminde kullanılan bilgiler yalnızca belirtilen amaç için ve gerekli olan süre kadar saklanmalıdır. Süre sonunda veriler güvenli bir şekilde imha edilmelidir.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Danışan Hakları</h3>
              <p>Danışan, bildirilen vakada kullanılan verilerinin hangi amaçla işlendiği hakkında bilgilendirilme ve gerektiğinde bu bilgilerin silinmesini talep etme hakkına sahiptir.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Mesleki Gizlilik</h3>
              <p>Psikolojik danışmanlık sürecinde edinilen tüm bilgiler meslek etiği çerçevesinde gizli tutulmalıdır. Bu gizlilik, vaka bildirim sürecinde de korunmalıdır.</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Hukuki Sorumluluk</h3>
              <p>KVKK ve ilgili diğer yasal düzenlemelere aykırı bilgi paylaşımı yapılması durumunda, sorumluluk tamamen veri paylaşan kişiye aittir. Bu nedenle, yasal gerekliliklere titizlikle uyulması önemlidir.</p>
            </section>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Vazgeç
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Kabul Ediyorum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};