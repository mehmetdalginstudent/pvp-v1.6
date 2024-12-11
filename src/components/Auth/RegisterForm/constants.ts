export const CITIES = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın',
  'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı',
  'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
  'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul',
  'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya',
  'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir',
  'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ',
  'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray',
  'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova',
  'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
];

export const INSTITUTION_TYPES = [
  { value: 'anaokul', label: 'Anaokul' },
  { value: 'ilkokul', label: 'İlkokul' },
  { value: 'ortaokul', label: 'Ortaokul' },
  { value: 'lise', label: 'Lise' }
];

export const BRANCHES = [
  { value: 'pdr', label: 'Psikolojik Danışman' },
  { value: 'sinif', label: 'Sınıf Öğretmeni' },
  { value: 'brans', label: 'Branş Öğretmeni' },
  { value: 'idareci', label: 'İdareci' }
];

export const PASSWORD_REQUIREMENTS = [
  { id: 'length', label: 'En az 8 karakter', regex: /.{8,}/ },
  { id: 'number', label: 'En az 1 rakam', regex: /\d/ },
  { id: 'uppercase', label: 'En az 1 büyük harf', regex: /[A-Z]/ },
  { id: 'lowercase', label: 'En az 1 küçük harf', regex: /[a-z]/ },
  { id: 'special', label: 'En az 1 özel karakter', regex: /[!@#$%^&*(),.?":{}|<>]/ }
];