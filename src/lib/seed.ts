export const categories = [
  {
    "id": "CAT01",
    "name": "Ana Pano Kontrolü",
    "description": "Ana dağıtım panosu kontrolleri",
    "iconName": "ElectricalServices",
    "displayOrder": 1
  },
  {
    "id": "CAT02",
    "name": "Sayaç Panosu Kontrolü",
    "description": "Sayaç panosu ve ölçüm kontrolleri",
    "iconName": "Speed",
    "displayOrder": 2
  },
  {
    "id": "CAT03",
    "name": "Kolon Hattı Kontrolü",
    "description": "Kolon hattı ve besleme kontrolleri",
    "iconName": "Cable",
    "displayOrder": 3
  },
  {
    "id": "CAT04",
    "name": "Daire Panosu Kontrolü",
    "description": "Daire dağıtım panosu kontrolleri",
    "iconName": "Home",
    "displayOrder": 4
  },
  {
    "id": "CAT05",
    "name": "Sigorta ve Koruma Elemanları",
    "description": "Sigorta ve şalter kontrolleri",
    "iconName": "Security",
    "displayOrder": 5
  },
  {
    "id": "CAT06",
    "name": "Kaçak Akım Rölesi Kontrolü",
    "description": "Kaçak akım koruma kontrolleri",
    "iconName": "Shield",
    "displayOrder": 6
  },
  {
    "id": "CAT07",
    "name": "Topraklama ve Eşpotansiyel",
    "description": "Topraklama sistemi kontrolleri",
    "iconName": "Landscape",
    "displayOrder": 7
  },
  {
    "id": "CAT08",
    "name": "Priz ve Aydınlatma Tesisatı",
    "description": "Priz, aydınlatma ve kablo kontrolleri",
    "iconName": "Lightbulb",
    "displayOrder": 8
  },
  {
    "id": "CAT09",
    "name": "Ortak Alan Elektrik Tesisatı",
    "description": "Ortak alan elektrik kontrolleri",
    "iconName": "Apartment",
    "displayOrder": 9
  },
  {
    "id": "CAT10",
    "name": "Acil Aydınlatma ve Yönlendirme",
    "description": "Acil durum aydınlatma kontrolleri",
    "iconName": "FlashlightOn",
    "displayOrder": 10
  },
  {
    "id": "CAT11",
    "name": "Yangın Algılama ve İhbar",
    "description": "Yangın algılama sistemi kontrolleri",
    "iconName": "LocalFireDepartment",
    "displayOrder": 11
  },
  {
    "id": "CAT12",
    "name": "Zayıf Akım Sistemleri",
    "description": "Data, kamera, diafon kontrolleri",
    "iconName": "SettingsInputAntenna",
    "displayOrder": 12
  },
  {
    "id": "CAT13",
    "name": "Asansör Elektrik Beslemesi",
    "description": "Asansör elektrik kontrolleri",
    "iconName": "Elevator",
    "displayOrder": 13
  },
  {
    "id": "CAT14",
    "name": "Hidrofor/Pompa/Fan Beslemeleri",
    "description": "Mekanik tesisat beslemeleri",
    "iconName": "Water",
    "displayOrder": 14
  },
  {
    "id": "CAT15",
    "name": "Jeneratör / UPS Kontrolü",
    "description": "Yedek enerji sistemleri kontrolleri",
    "iconName": "BatteryChargingFull",
    "displayOrder": 15
  },
  {
    "id": "CAT16",
    "name": "Kablo Tavası, Şaft, Yangın Geçişleri",
    "description": "Kablo taşıma ve geçiş kontrolleri",
    "iconName": "ViewColumn",
    "displayOrder": 16
  },
  {
    "id": "CAT17",
    "name": "Ölçüm ve Test Raporları",
    "description": "Test ve ölçüm raporu kontrolleri",
    "iconName": "Assessment",
    "displayOrder": 17
  },
  {
    "id": "CAT18",
    "name": "Genel Uygunsuzluklar",
    "description": "Genel gözlem ve uygunsuzluklar",
    "iconName": "Report",
    "displayOrder": 18
  }
];

export const items = [
  {
    "id": "CAT01_ITEM01",
    "categoryId": "CAT01",
    "text": "Ana pano projedeki yerde mi?",
    "description": "Ana pano konumu proje planlarında belirtilen yerde olmalıdır. Pano yerinin değiştirilmesi projenin onaylanmış planlarına aykırıdır ve revizyon gerektirir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Pano konumunu proje planlarıyla karşılaştırın. Farklılık varsa proje müellifinden revize plan isteyin.",
    "displayOrder": 1
  },
  {
    "id": "CAT01_ITEM02",
    "categoryId": "CAT01",
    "text": "Pano kapağı sağlam ve kapanabilir durumda mı?",
    "description": "Pano kapağı hasarlı veya eksik olursa iç kısımdaki bara ve bağlantılar açıkta kalır; bu durum elektrik çarpma riski oluşturur.",
    "riskLevel": "HIGH",
    "solutionHint": "Hasarlı kapağı değiştirin veya onartın. Kapak kilidi çalışır durumda olmalıdır.",
    "displayOrder": 2
  },
  {
    "id": "CAT01_ITEM03",
    "categoryId": "CAT01",
    "text": "Pano üzerinde elektrik tehlike etiketi var mı?",
    "description": "Yönetmeliklere göre her pano üzerinde 'Dikkat Elektrik' uyarı etiketi bulunmalıdır. Etiket dayanıklı malzemeden olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Standartlara uygun elektrik tehlike etiketi yapıştırın.",
    "displayOrder": 3
  },
  {
    "id": "CAT01_ITEM04",
    "categoryId": "CAT01",
    "text": "Pano içinde hat etiketleri yazılmış mı?",
    "description": "Sigorta ve şalterlerin hangi hatta ait olduğu etiketlenmelidir. Arıza durumunda doğru hattın kapatılabilmesi için etiketleme zorunludur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Tüm hat ve sigortaları uygun şekilde etiketleyin. Etiketler silinmeyecek şekilde yazılmalıdır.",
    "displayOrder": 4
  },
  {
    "id": "CAT01_ITEM05",
    "categoryId": "CAT01",
    "text": "Ana şalter değeri projeye uygun mu?",
    "description": "Ana şalter değeri, projenin toplam güç hesabına göre belirlenmiştir. Yanlış değer seçimi aşırı yüklenme veya gereksiz kesintilere neden olur.",
    "riskLevel": "HIGH",
    "solutionHint": "Ana şalter değerini projedeki elektrik hesaplarıyla karşılaştırın. Uyumsuzluk varsa uygun değerde şalter takın.",
    "displayOrder": 5
  },
  {
    "id": "CAT01_ITEM06",
    "categoryId": "CAT01",
    "text": "Sigorta ve şalter değerleri projeye uygun mu?",
    "description": "Her hattın sigorta değeri, kablo kesiti ve bağlı yük ile uyumlu olmalıdır. Yanlış sigorta değeri yangın veya kısa devre riskini artırır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Tüm sigorta değerlerini proje ile karşılaştırın. Uyumsuz olanları doğru değerlerle değiştirin.",
    "displayOrder": 6
  },
  {
    "id": "CAT01_ITEM07",
    "categoryId": "CAT01",
    "text": "Nötr ve toprak baraları ayrı mı?",
    "description": "TN-S sistemde nötr ve toprak baraları ayrı olmalıdır. Karıştırılması topraklama koruma sistemini etkisiz hale getirir.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Nötr ve toprak baralarını ayrı baralar üzerinden bağlayın. Karışık bağlantıları düzeltin.",
    "displayOrder": 7
  },
  {
    "id": "CAT01_ITEM08",
    "categoryId": "CAT01",
    "text": "Sarı-yeşil kablo sadece topraklama için mi kullanılmış?",
    "description": "Sarı-yeşil renk kodlu kablo yalnızca koruma topraklama iletkeni olarak kullanılabilir. Faz veya nötr olarak kullanımı tehlikelidir.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Sarı-yeşil kabloyu sadece topraklama amacıyla kullanın. Yanlış kullanım varsa derhal düzeltin.",
    "displayOrder": 8
  },
  {
    "id": "CAT01_ITEM09",
    "categoryId": "CAT01",
    "text": "Pano içinde açıkta iletken var mı?",
    "description": "İzolasyonu soyulmuş veya açıkta kalan iletkenler kısa devre ve elektrik çarpma riski oluşturur. Tüm bağlantılar güvenli olmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Açıkta kalan iletkenleri izole edin veya uygun bağlantı elemanlarıyla kapatın.",
    "displayOrder": 9
  },
  {
    "id": "CAT01_ITEM10",
    "categoryId": "CAT01",
    "text": "Pano önünde çalışma boşluğu bırakılmış mı?",
    "description": "Bakım ve müdahale için pano önünde en az 70 cm boşluk bırakılmalıdır. Engeller acil müdahaleyi zorlaştırır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Pano önündeki engelleri kaldırın. En az 70 cm çalışma mesafesi sağlayın.",
    "displayOrder": 10
  },
  {
    "id": "CAT02_ITEM01",
    "categoryId": "CAT02",
    "text": "Sayaç panosu projedeki yerde mi?",
    "description": "Sayaç panosu genellikle bina girişinde veya bodrum katta, dağıtım şirketinin erişebileceği konumda olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Sayaç panosunu projedeki konuma taşıyın veya proje revizyonu yapın.",
    "displayOrder": 1
  },
  {
    "id": "CAT02_ITEM02",
    "categoryId": "CAT02",
    "text": "Sayaç panosu kapağı kilitli ve sağlam mı?",
    "description": "Sayaç panosuna yetkisiz erişimin engellenmesi için kapak kilitli olmalıdır. Kapak hasarı güvenlik riski oluşturur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Sayaç panosu kapağını onarın veya değiştirin. Kilit mekanizmasını çalışır hale getirin.",
    "displayOrder": 2
  },
  {
    "id": "CAT02_ITEM03",
    "categoryId": "CAT02",
    "text": "Her daire için ayrı sayaç mevcut mu?",
    "description": "Her bağımsız bölümün kendi elektrik sayacı olmalıdır. Ortak kullanım yasal ve teknik sorunlara yol açar.",
    "riskLevel": "HIGH",
    "solutionHint": "Eksik sayaçlar için dağıtım şirketine başvurun. Her daire için ayrı sayaç taktırın.",
    "displayOrder": 3
  },
  {
    "id": "CAT02_ITEM04",
    "categoryId": "CAT02",
    "text": "Sayaç bağlantıları düzgün ve sıkı mı?",
    "description": "Gevşek bağlantılar ısınma ve ark oluşumuna neden olabilir. Tüm bağlantılar torkla sıkılmış olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Gevşek bağlantıları sıkın. Yanık izi olan bağlantı elemanlarını değiştirin.",
    "displayOrder": 4
  },
  {
    "id": "CAT02_ITEM05",
    "categoryId": "CAT02",
    "text": "Ortak alan sayacı ayrı mı?",
    "description": "Ortak alan (merdiven, garaj, asansör vb.) tüketimi ayrı bir sayaçtan ölçülmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Ortak alan tüketimi için ayrı sayaç taktırın.",
    "displayOrder": 5
  },
  {
    "id": "CAT02_ITEM06",
    "categoryId": "CAT02",
    "text": "Sayaç panosu topraklaması yapılmış mı?",
    "description": "Sayaç panosu gövdesi topraklama hattına bağlanmış olmalıdır. Topraklanmamış pano dokunma tehlikesi oluşturur.",
    "riskLevel": "HIGH",
    "solutionHint": "Sayaç panosunu uygun kesitte topraklama iletkeni ile toprak barasına bağlayın.",
    "displayOrder": 6
  },
  {
    "id": "CAT03_ITEM01",
    "categoryId": "CAT03",
    "text": "Kolon hattı kablo kesiti projeye uygun mu?",
    "description": "Kolon hattı ana panodan daire panolarına kadar olan besleme hattıdır. Kablo kesiti yük hesabına göre belirlenmiş olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Kablo kesitini proje ile karşılaştırın. Yetersiz ise uygun kesitte kablo çekin.",
    "displayOrder": 1
  },
  {
    "id": "CAT03_ITEM02",
    "categoryId": "CAT03",
    "text": "Kolon hattı boru içinde mi?",
    "description": "Kolon hatları mekanik hasara karşı koruma amaçlı boru veya kanal içinde döşenmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Açıkta kalan kolon hatlarını uygun boru veya kanal içine alın.",
    "displayOrder": 2
  },
  {
    "id": "CAT03_ITEM03",
    "categoryId": "CAT03",
    "text": "Kolon hattında ek/derzleme var mı?",
    "description": "Kolon hattında ek yapılması bağlantı direncini artırır ve ısınma riski oluşturur. Mümkünse tek parça kablo kullanılmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Ek noktalarını kaldırın veya uygun bağlantı kutusu ile profesyonel ek yapın.",
    "displayOrder": 3
  },
  {
    "id": "CAT03_ITEM04",
    "categoryId": "CAT03",
    "text": "Kolon kablolarının renk kodlaması doğru mu?",
    "description": "Faz hatları kahverengi, siyah veya gri; nötr mavi; toprak sarı-yeşil olmalıdır. Yanlış renk kodlaması tehlikeli karışıklıklara yol açar.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Renk kodlamasını düzeltin. Uçlarda uygun renkli markalama kullanın.",
    "displayOrder": 4
  },
  {
    "id": "CAT03_ITEM05",
    "categoryId": "CAT03",
    "text": "Her kat için kolon bağlantı kutusu var mı?",
    "description": "Katlara ayrılan kolon hatları uygun bağlantı kutuları üzerinden dağıtılmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Eksik bağlantı kutularını ekleyin. Bağlantı kutuları erişilebilir olmalıdır.",
    "displayOrder": 5
  },
  {
    "id": "CAT03_ITEM06",
    "categoryId": "CAT03",
    "text": "Kolon şaftı yangın yalıtımı yapılmış mı?",
    "description": "Kolon şaftından geçen kablolar katlar arası yangın yayılmasını önlemek için yangın bariyeri ile yalıtılmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Şaft geçişlerinde yangın dayanımlı sızdırmazlık malzemesi kullanın.",
    "displayOrder": 6
  },
  {
    "id": "CAT04_ITEM01",
    "categoryId": "CAT04",
    "text": "Daire panosu erişilebilir yerde mi?",
    "description": "Daire panosu genellikle giriş holünde, kolay erişilebilir bir konumda olmalıdır. Dolap içi gibi erişimi kısıtlı yerler uygun değildir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Panoyu erişilebilir bir konuma taşıyın. Önünde engel bulunmamalıdır.",
    "displayOrder": 1
  },
  {
    "id": "CAT04_ITEM02",
    "categoryId": "CAT04",
    "text": "Kaçak akım rölesi var mı?",
    "description": "Her daire panosunda en az bir adet 30 mA kaçak akım rölesi bulunmalıdır. Bu cihaz elektrik çarpmasına karşı can güvenliği sağlar.",
    "riskLevel": "CRITICAL",
    "solutionHint": "30 mA hassasiyetinde kaçak akım rölesi takın. Tüm priz ve aydınlatma hatlarını bu rölenin altına alın.",
    "displayOrder": 2
  },
  {
    "id": "CAT04_ITEM03",
    "categoryId": "CAT04",
    "text": "Kaçak akım rölesi test butonuyla açıyor mu?",
    "description": "Kaçak akım rölesinin test butonu aylık olarak kontrol edilmelidir. Test butonuna basıldığında röle açmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Arızalı röleyi değiştirin. Yeni rölenin test butonunu kontrol edin.",
    "displayOrder": 3
  },
  {
    "id": "CAT04_ITEM04",
    "categoryId": "CAT04",
    "text": "Aydınlatma ve priz hatları ayrı sigortalanmış mı?",
    "description": "Aydınlatma ve priz devreleri ayrı sigortalarla korunmalıdır. Ortak sigorta kullanımı, bir hattaki arızanın diğerini de etkilemesine neden olur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Aydınlatma ve priz hatlarını ayrı sigortalara bağlayın.",
    "displayOrder": 4
  },
  {
    "id": "CAT04_ITEM05",
    "categoryId": "CAT04",
    "text": "Mutfak, klima, fırın gibi güçlü yükler ayrı hatta mı?",
    "description": "Yüksek güçlü cihazlar (fırın, klima, çamaşır makinesi vb.) ayrı hat ve sigorta ile beslenmelidir. Ortak hat kullanımı aşırı ısınmaya neden olur.",
    "riskLevel": "HIGH",
    "solutionHint": "Her güçlü yük için ayrı hat çekin ve uygun kesitte kablo ile uygun değerde sigorta kullanın.",
    "displayOrder": 5
  },
  {
    "id": "CAT04_ITEM06",
    "categoryId": "CAT04",
    "text": "Sigorta değerleri kablo kesitiyle uyumlu mu?",
    "description": "Sigorta değeri kablo kesitinin taşıyabileceği akımdan büyük olmamalıdır. Örneğin 2,5 mm² kablo için maksimum 16A sigorta kullanılmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Sigorta değerlerini kablo kesitleriyle uyumlu hale getirin. Gerekirse kablo kesitini artırın.",
    "displayOrder": 6
  },
  {
    "id": "CAT04_ITEM07",
    "categoryId": "CAT04",
    "text": "Nötr ve toprak baraları ayrılmış mı?",
    "description": "Daire panosunda da nötr ve toprak baraları ayrı olmalıdır. Karışık bağlantı kaçak akım rölesinin çalışmasını engeller.",
    "riskLevel": "HIGH",
    "solutionHint": "Nötr ve toprak bağlantılarını ayrı baralara yapın.",
    "displayOrder": 7
  },
  {
    "id": "CAT04_ITEM08",
    "categoryId": "CAT04",
    "text": "Hat etiketleri yazılmış mı?",
    "description": "Her sigorta ve şalterin hangi odaya/cihaza ait olduğu etiketlenmelidir. Acil durumlarda doğru hattın bulunabilmesi için gereklidir.",
    "riskLevel": "LOW",
    "solutionHint": "Tüm sigorta ve şalterleri kalıcı etiketlerle işaretleyin.",
    "displayOrder": 8
  },
  {
    "id": "CAT05_ITEM01",
    "categoryId": "CAT05",
    "text": "Sigortalar projedeki tiplerde mi?",
    "description": "B tipi sigortalar konut tesisatlarında, C tipi sigortalar motor yüklerinde kullanılır. Yanlış tip seçimi koruma fonksiyonunu etkisiz kılar.",
    "riskLevel": "HIGH",
    "solutionHint": "Sigorta tiplerini projeye göre kontrol edin. Uyumsuz olanları değiştirin.",
    "displayOrder": 1
  },
  {
    "id": "CAT05_ITEM02",
    "categoryId": "CAT05",
    "text": "Şalterlerin açma-kapama mekanizması çalışıyor mu?",
    "description": "Şalterlerin mekanik olarak sağlam ve düzgün çalışması gerekir. Gevşek veya kilitlenmiş şalterler acil durumda devre kesemeyebilir.",
    "riskLevel": "HIGH",
    "solutionHint": "Arızalı şalterleri değiştirin. Mekanizma kontrolünü yapın.",
    "displayOrder": 2
  },
  {
    "id": "CAT05_ITEM03",
    "categoryId": "CAT05",
    "text": "Sigorta kutusunda yedek sigorta yeri var mı?",
    "description": "İleride eklenebilecek devreler için panoda yedek sigorta yeri bırakılmalıdır. Genellikle %20 yedek alan önerilir.",
    "riskLevel": "LOW",
    "solutionHint": "Panoda yedek sigorta yeri bırakın veya daha büyük pano kullanın.",
    "displayOrder": 3
  },
  {
    "id": "CAT05_ITEM04",
    "categoryId": "CAT05",
    "text": "Parafudr (aşırı gerilim koruma) mevcut mu?",
    "description": "Yıldırım ve şebeke kaynaklı aşırı gerilimlere karşı parafudr kullanılması hassas cihazları korur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Tip 2 parafudr takın. Ana panoya veya sayaç panosuna montaj yapılabilir.",
    "displayOrder": 4
  },
  {
    "id": "CAT05_ITEM05",
    "categoryId": "CAT05",
    "text": "Motor koruma şalterleri uygun mu?",
    "description": "Asansör, hidrofor gibi motorlu yükler için motor koruma şalteri kullanılmalıdır. Termik ve manyetik koruma birlikte sağlanmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Motor yükleri için uygun motor koruma şalteri takın. Ayar değerlerini kontrol edin.",
    "displayOrder": 5
  },
  {
    "id": "CAT05_ITEM06",
    "categoryId": "CAT05",
    "text": "Faz koruma rölesi gerekli yerlerde mevcut mu?",
    "description": "Üç fazlı motorlu sistemlerde faz sırası, faz kaybı ve düşük/yüksek gerilim koruma rölesi kullanılmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Üç fazlı motor beslemelerine faz koruma rölesi ekleyin.",
    "displayOrder": 6
  },
  {
    "id": "CAT06_ITEM01",
    "categoryId": "CAT06",
    "text": "Daire panosunda 30 mA kaçak akım rölesi var mı?",
    "description": "30 mA hassasiyetindeki kaçak akım rölesi can güvenliği için zorunludur. Daha düşük hassasiyetteki röleler yeterli koruma sağlamaz.",
    "riskLevel": "CRITICAL",
    "solutionHint": "30 mA kaçak akım rölesi takın ve tüm devreleri altına alın.",
    "displayOrder": 1
  },
  {
    "id": "CAT06_ITEM02",
    "categoryId": "CAT06",
    "text": "Ortak alan prizleri kaçak akım korumalı mı?",
    "description": "Merdiven boşluğu, garaj, sığınak gibi ortak alanlardaki prizler de kaçak akım koruması altında olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Ortak alan priz devrelerine kaçak akım rölesi ekleyin.",
    "displayOrder": 2
  },
  {
    "id": "CAT06_ITEM03",
    "categoryId": "CAT06",
    "text": "Islak hacim prizleri kaçak akım koruması altında mı?",
    "description": "Banyo, mutfak, çamaşırhane gibi ıslak hacimlerdeki prizler mutlaka kaçak akım korumalı olmalıdır. Bu alanlarda elektrik çarpma riski çok yüksektir.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Islak hacim prizlerini kaçak akım rölesi koruması altına alın.",
    "displayOrder": 3
  },
  {
    "id": "CAT06_ITEM04",
    "categoryId": "CAT06",
    "text": "Röle test butonuyla açıyor mu?",
    "description": "Kaçak akım rölesinin test butonu çalışmalıdır. Çalışmayan röle arızalıdır ve koruma sağlamaz.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Test butonu çalışmayan röleyi hemen değiştirin.",
    "displayOrder": 4
  },
  {
    "id": "CAT06_ITEM05",
    "categoryId": "CAT06",
    "text": "Faz ve nötr aynı röle üzerinden geçirilmiş mi?",
    "description": "Kaçak akım rölesinin düzgün çalışması için aynı devrenin faz ve nötr iletkenleri aynı röle üzerinden geçmelidir.",
    "riskLevel": "HIGH",
    "solutionHint": "Faz ve nötr bağlantılarını kontrol edin. Farklı röleler üzerinden geçen devreleri düzeltin.",
    "displayOrder": 5
  },
  {
    "id": "CAT06_ITEM06",
    "categoryId": "CAT06",
    "text": "Farklı rölelerin nötrleri karıştırılmış mı?",
    "description": "Birden fazla kaçak akım rölesi kullanıldığında nötr iletkenlerinin karıştırılması rölenin sürekli açmasına neden olur.",
    "riskLevel": "HIGH",
    "solutionHint": "Nötr bağlantılarını kontrol edin. Her rölenin nötrü kendi devresine ait olmalıdır.",
    "displayOrder": 6
  },
  {
    "id": "CAT07_ITEM01",
    "categoryId": "CAT07",
    "text": "Ana topraklama barası var mı?",
    "description": "Binanın ana topraklama barası tüm topraklama iletkenlerinin birleştirildiği merkezi noktadır. Bu bara olmadan topraklama sistemi tamamlanmış sayılmaz.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Ana topraklama barasını uygun konuma monte edin ve tüm topraklama iletkenlerini bağlayın.",
    "displayOrder": 1
  },
  {
    "id": "CAT07_ITEM02",
    "categoryId": "CAT07",
    "text": "Topraklama iletkenleri sarı-yeşil renkte mi?",
    "description": "Topraklama iletkenleri uluslararası standartlara göre sarı-yeşil renk kodlu olmalıdır. Farklı renk kullanımı karışıklığa yol açar.",
    "riskLevel": "HIGH",
    "solutionHint": "Sarı-yeşil olmayan topraklama iletkenlerini değiştirin veya uygun renkte markalayın.",
    "displayOrder": 2
  },
  {
    "id": "CAT07_ITEM03",
    "categoryId": "CAT07",
    "text": "Daire panolarında toprak hattı sürekliliği var mı?",
    "description": "Ana topraklama barasından daire panolarına kadar toprak hattının kesintisiz olması gerekir.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Toprak hattı sürekliliğini ölçüm cihazıyla kontrol edin. Kopuk noktaları bulup bağlayın.",
    "displayOrder": 3
  },
  {
    "id": "CAT07_ITEM04",
    "categoryId": "CAT07",
    "text": "Prizlerde toprak bağlantısı var mı?",
    "description": "Tüm prizlerde toprak pini bağlı olmalıdır. Toprak bağlantısı olmayan priz elektrik çarpmasına karşı koruma sağlamaz.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Toprak bağlantısı olmayan prizlere toprak hattı çekin ve bağlayın.",
    "displayOrder": 4
  },
  {
    "id": "CAT07_ITEM05",
    "categoryId": "CAT07",
    "text": "Metal tesisatlar eşpotansiyel sisteme bağlanmış mı?",
    "description": "Su boruları, gaz boruları, radyatör tesisatı gibi metal aksamlar eşpotansiyel baraya bağlanmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Metal tesisatları uygun kesitte iletkenle eşpotansiyel baraya bağlayın.",
    "displayOrder": 5
  },
  {
    "id": "CAT07_ITEM06",
    "categoryId": "CAT07",
    "text": "Kablo tavaları topraklanmış mı?",
    "description": "Metal kablo tavaları toprak hattına bağlanmalıdır. Topraklanmamış metal aksam arıza durumunda tehlike oluşturur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Kablo tavalarını toprak barasına bağlayın. Bağlantı noktalarında iletkenliği kontrol edin.",
    "displayOrder": 6
  },
  {
    "id": "CAT07_ITEM07",
    "categoryId": "CAT07",
    "text": "Topraklama ölçüm raporu var mı?",
    "description": "Topraklama direnci yetkili laboratuvar tarafından ölçülmüş ve rapor düzenlenmiş olmalıdır. Topraklama direnci genellikle 10 ohm'un altında olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Yetkili elektrik laboratuvarından topraklama ölçüm raporu alın.",
    "displayOrder": 7
  },
  {
    "id": "CAT08_ITEM01",
    "categoryId": "CAT08",
    "text": "Aydınlatma hatlarında 3x1,5 mm² kablo kullanılmış mı?",
    "description": "Aydınlatma devreleri için standart olarak 3x1,5 mm² NYM veya eşdeğeri kablo kullanılır. Daha ince kesit ısınma riski oluşturur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Kablo kesitini kontrol edin. Yetersiz ise uygun kesitte kablo çekin.",
    "displayOrder": 1
  },
  {
    "id": "CAT08_ITEM02",
    "categoryId": "CAT08",
    "text": "Priz hatlarında 3x2,5 mm² kablo kullanılmış mı?",
    "description": "Priz devreleri için standart olarak 3x2,5 mm² kablo kullanılır. 16A sigorta ile korunan devrelerde bu kesit zorunludur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Priz hattı kablo kesitlerini kontrol edin. 2,5 mm²'den düşük olanları değiştirin.",
    "displayOrder": 2
  },
  {
    "id": "CAT08_ITEM03",
    "categoryId": "CAT08",
    "text": "Güçlü yüklerde ayrı ve uygun kesitli hat var mı?",
    "description": "Fırın, ocak, klima gibi yüksek güçlü cihazlar için 3x4 mm² veya 3x6 mm² gibi uygun kesitte ayrı hat çekilmelidir.",
    "riskLevel": "HIGH",
    "solutionHint": "Güçlü yükler için proje hesabına göre uygun kesitte ayrı hat çekin.",
    "displayOrder": 3
  },
  {
    "id": "CAT08_ITEM04",
    "categoryId": "CAT08",
    "text": "Yangın sistemi kabloları projeye uygun tipte mi?",
    "description": "Yangın algılama ve ihbar sistemi kabloları genellikle JE-H(St)H veya eşdeğeri halojensiz kablo olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Yangın sistemi kablolarını projedeki tiple değiştirin.",
    "displayOrder": 4
  },
  {
    "id": "CAT08_ITEM05",
    "categoryId": "CAT08",
    "text": "Kritik yangın sistemlerinde yangına dayanıklı kablo kullanılmış mı?",
    "description": "Yangın pompası, duman tahliye, asansör kurtarma gibi kritik devrelerde FE180/E30 veya FE180/E90 yangına dayanıklı kablo kullanılmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Kritik yangın devrelerinde yangına dayanıklı kablo kullanın.",
    "displayOrder": 5
  },
  {
    "id": "CAT08_ITEM06",
    "categoryId": "CAT08",
    "text": "Data/kamera/diafon kabloları kuvvetli akımdan ayrılmış mı?",
    "description": "Zayıf akım kabloları (Cat6, koaksiyel vb.) kuvvetli akım kablolarından en az 30 cm mesafede veya ayrı boruda çekilmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Zayıf akım kablolarını kuvvetli akımdan ayırın. Gerekirse ayrı kanal kullanın.",
    "displayOrder": 6
  },
  {
    "id": "CAT08_ITEM07",
    "categoryId": "CAT08",
    "text": "Kablo tavaları topraklanmış mı?",
    "description": "Metal kablo tavaları koruma topraklama hattına bağlanmalıdır. Her bölümde süreklilik sağlanmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Kablo tavalarını topraklama barasına bağlayın ve süreklilik testi yapın.",
    "displayOrder": 7
  },
  {
    "id": "CAT09_ITEM01",
    "categoryId": "CAT09",
    "text": "Merdiven aydınlatması çalışıyor mu?",
    "description": "Merdiven aydınlatması güvenlik açısından kritiktir. Zamanlayıcılı veya hareket sensörlü olabilir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Arızalı aydınlatma armatürlerini ve zamanlayıcıları onarın veya değiştirin.",
    "displayOrder": 1
  },
  {
    "id": "CAT09_ITEM02",
    "categoryId": "CAT09",
    "text": "Garaj aydınlatması yeterli mi?",
    "description": "Kapalı otopark aydınlatması yönetmeliklere uygun lüks seviyesinde olmalıdır. Aydınlatma armatürleri uygun IP korumalı olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Garaj aydınlatmasını artırın. IP65 korumalı armatür kullanın.",
    "displayOrder": 2
  },
  {
    "id": "CAT09_ITEM03",
    "categoryId": "CAT09",
    "text": "Ortak alan priz ve anahtarlar sağlam mı?",
    "description": "Ortak alanlardaki priz ve anahtarlar darbelere dayanıklı tipte olmalıdır. Kırık veya hasarlı olanlar tehlike oluşturur.",
    "riskLevel": "LOW",
    "solutionHint": "Hasarlı priz ve anahtarları değiştirin. Darbelere dayanıklı modeller tercih edin.",
    "displayOrder": 3
  },
  {
    "id": "CAT09_ITEM04",
    "categoryId": "CAT09",
    "text": "Ortak alan elektrik panosu kilitli mi?",
    "description": "Ortak alan panoları yetkisiz kişilerin erişimini engellemek için kilitli olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Ortak alan panolarına kilit takın.",
    "displayOrder": 4
  },
  {
    "id": "CAT09_ITEM05",
    "categoryId": "CAT09",
    "text": "Sığınak elektrik tesisatı kontrol edilmiş mi?",
    "description": "Sığınak aydınlatma ve priz tesisatı çalışır durumda olmalıdır. Sığınak aydınlatması acil durum beslemeli olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Sığınak elektrik tesisatını kontrol edin ve çalışır hale getirin.",
    "displayOrder": 5
  },
  {
    "id": "CAT10_ITEM01",
    "categoryId": "CAT10",
    "text": "Acil aydınlatma armatürleri projedeki yerde mi?",
    "description": "Acil aydınlatma armatürleri kaçış yolları, merdiven boşlukları ve ortak alanlarda projedeki konumlara monte edilmelidir.",
    "riskLevel": "HIGH",
    "solutionHint": "Eksik acil aydınlatma armatürlerini projedeki konumlara ekleyin.",
    "displayOrder": 1
  },
  {
    "id": "CAT10_ITEM02",
    "categoryId": "CAT10",
    "text": "Acil aydınlatmalar şebeke kesilince yanıyor mu?",
    "description": "Acil aydınlatma armatürleri şebeke kesildiğinde otomatik olarak devreye girmelidir. Pil ömrü en az 60 dakika olmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Çalışmayan acil aydınlatmaları onarın veya değiştirin. Pil durumlarını kontrol edin.",
    "displayOrder": 2
  },
  {
    "id": "CAT10_ITEM03",
    "categoryId": "CAT10",
    "text": "Kaçış yönlendirme işaretleri aydınlatmalı mı?",
    "description": "Kaçış yönlendirme tabelaları yeşil zemin üzerine beyaz ok/kapı işaretli ve arkadan aydınlatmalı olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Eksik veya arızalı kaçış yönlendirme işaretlerini tamamlayın.",
    "displayOrder": 3
  },
  {
    "id": "CAT10_ITEM04",
    "categoryId": "CAT10",
    "text": "Acil aydınlatma test butonu çalışıyor mu?",
    "description": "Acil aydınlatma armatürlerinin çoğunda test butonu bulunur. Bu butonla armatürün pil durumu ve çalışması test edilir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Test butonu çalışmayan armatürleri kontrol edin. Gerekirse pil değiştirin.",
    "displayOrder": 4
  },
  {
    "id": "CAT10_ITEM05",
    "categoryId": "CAT10",
    "text": "Acil aydınlatma devresi ayrı sigortadan mı besleniyor?",
    "description": "Acil aydınlatma devresi diğer aydınlatma devrelerinden bağımsız sigortadan beslenmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Acil aydınlatma devresini ayrı sigorta altına alın.",
    "displayOrder": 5
  },
  {
    "id": "CAT11_ITEM01",
    "categoryId": "CAT11",
    "text": "Yangın alarm santrali çalışıyor mu?",
    "description": "Yangın alarm santrali sürekli çalışır durumda olmalıdır. Santralin enerji beslemesi kesintisiz olmalı, yedek akü desteği bulunmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Santrali çalışır hale getirin. Arıza varsa yetkili servise bildirin.",
    "displayOrder": 1
  },
  {
    "id": "CAT11_ITEM02",
    "categoryId": "CAT11",
    "text": "Santralde arıza bilgisi var mı?",
    "description": "Yangın alarm santralinin arıza LED'i veya ekranında hata mesajı olmamalıdır. Arıza durumları derhal giderilmelidir.",
    "riskLevel": "HIGH",
    "solutionHint": "Santraldeki arıza bilgisini inceleyip arızayı giderin.",
    "displayOrder": 2
  },
  {
    "id": "CAT11_ITEM03",
    "categoryId": "CAT11",
    "text": "Duman dedektörleri projedeki yerde mi?",
    "description": "Duman dedektörleri tavan ortasına veya projede belirtilen konumlara monte edilmelidir. Havalandırma çıkışına yakın montaj kaçınılmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Eksik dedektörleri takın. Konum uyumsuzluğunu düzeltin.",
    "displayOrder": 3
  },
  {
    "id": "CAT11_ITEM04",
    "categoryId": "CAT11",
    "text": "Isı dedektörleri doğru mahallerde mi?",
    "description": "Isı dedektörleri genellikle mutfak, kazan dairesi gibi duman dedektörünün yanlış alarm verebileceği mahallerde kullanılır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Isı dedektörlerinin konumlarını projeyle karşılaştırın ve gerekli düzeltmeleri yapın.",
    "displayOrder": 4
  },
  {
    "id": "CAT11_ITEM05",
    "categoryId": "CAT11",
    "text": "Yangın butonları erişilebilir yerde mi?",
    "description": "Manuel yangın ihbar butonları kaçış yolları üzerinde, erişilebilir yükseklikte (110-130 cm) ve görünür konumda olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Yangın butonlarını uygun yükseklik ve konuma taşıyın.",
    "displayOrder": 5
  },
  {
    "id": "CAT11_ITEM06",
    "categoryId": "CAT11",
    "text": "Sirenler çalışıyor mu?",
    "description": "Yangın alarm sirenleri tüm katlarda ve ortak alanlarda duyulabilir seviyede ses üretmelidir.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Çalışmayan sirenleri onarın veya değiştirin. Ses seviyesini kontrol edin.",
    "displayOrder": 6
  },
  {
    "id": "CAT11_ITEM07",
    "categoryId": "CAT11",
    "text": "Alarm verildiğinde ilgili yangın senaryosu çalışıyor mu?",
    "description": "Yangın algılandığında asansör zemine inmeli, havalandırma kapanmalı, duman tahliye devreye girmeli ve kapılar açılmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Yangın senaryosunu test edin. Çalışmayan bağlantıları düzeltin.",
    "displayOrder": 7
  },
  {
    "id": "CAT12_ITEM01",
    "categoryId": "CAT12",
    "text": "Data (internet) tesisatı projeye uygun mu?",
    "description": "Data kablolaması Cat6 veya üzeri standartta ve projede belirtilen konumlara çekilmiş olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Data kablolarını projeye uygun standartta ve konumda çekin.",
    "displayOrder": 1
  },
  {
    "id": "CAT12_ITEM02",
    "categoryId": "CAT12",
    "text": "TV/uydu tesisatı tamamlanmış mı?",
    "description": "Merkezi uydu sistemi ve daire içi TV prizleri projeye uygun şekilde döşenmiş olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Eksik TV/uydu tesisatını tamamlayın.",
    "displayOrder": 2
  },
  {
    "id": "CAT12_ITEM03",
    "categoryId": "CAT12",
    "text": "Diafon/interkom sistemi çalışıyor mu?",
    "description": "Bina giriş kapısından dairelere sesli/görüntülü iletişim sistemi çalışır durumda olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Çalışmayan diafon ünitelerini onarın veya değiştirin.",
    "displayOrder": 3
  },
  {
    "id": "CAT12_ITEM04",
    "categoryId": "CAT12",
    "text": "Güvenlik kamera sistemi kurulmuş mu?",
    "description": "Projede öngörülen güvenlik kameraları uygun konumlara monte edilmiş ve kayıt sistemiyle entegre olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Eksik kameraları takın ve kayıt sistemiyle entegre edin.",
    "displayOrder": 4
  },
  {
    "id": "CAT12_ITEM05",
    "categoryId": "CAT12",
    "text": "Zayıf akım panosu düzenli mi?",
    "description": "Zayıf akım panosu (patch panel, switch, vb.) düzenli olmalı, kablolar etiketlenmiş olmalıdır.",
    "riskLevel": "LOW",
    "solutionHint": "Pano içini düzenleyin, kabloları etiketleyin.",
    "displayOrder": 5
  },
  {
    "id": "CAT13_ITEM01",
    "categoryId": "CAT13",
    "text": "Asansör beslemesi ayrı devreden mi?",
    "description": "Asansör elektrik beslemesi ana panodan ayrı bir şalter ve sigorta üzerinden sağlanmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Asansör beslemesini ayrı devre olarak düzenleyin.",
    "displayOrder": 1
  },
  {
    "id": "CAT13_ITEM02",
    "categoryId": "CAT13",
    "text": "Asansör kablo kesiti yeterli mi?",
    "description": "Asansör motor gücüne göre uygun kesitte kablo kullanılmalıdır. Kablo mesafesi de dikkate alınmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Kablo kesitini motor gücü ve mesafe hesabına göre kontrol edin.",
    "displayOrder": 2
  },
  {
    "id": "CAT13_ITEM03",
    "categoryId": "CAT13",
    "text": "Asansör makine dairesi aydınlatması var mı?",
    "description": "Asansör makine dairesi yeterli aydınlatmaya sahip olmalıdır. Acil aydınlatma da bulunmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Makine dairesi aydınlatmasını tamamlayın.",
    "displayOrder": 3
  },
  {
    "id": "CAT13_ITEM04",
    "categoryId": "CAT13",
    "text": "Asansör topraklaması yapılmış mı?",
    "description": "Asansör kabini, ray sistemi ve makine dairesi ekipmanları topraklanmış olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Asansör topraklama bağlantılarını kontrol edin ve eksikleri tamamlayın.",
    "displayOrder": 4
  },
  {
    "id": "CAT14_ITEM01",
    "categoryId": "CAT14",
    "text": "Hidrofor beslemesi ayrı devreden mi?",
    "description": "Hidrofor sistemi ayrı şalter ve sigorta ile beslenmelidir. Motor koruma şalteri kullanılmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Hidrofor beslemesini ayrı devreye alın ve motor koruma şalteri takın.",
    "displayOrder": 1
  },
  {
    "id": "CAT14_ITEM02",
    "categoryId": "CAT14",
    "text": "Pompa motorları koruma altında mı?",
    "description": "Yangın pompası, temiz su pompası gibi motorlar termik röle veya motor koruma şalteri ile korunmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Motor koruma elemanlarını takın veya ayarlarını kontrol edin.",
    "displayOrder": 2
  },
  {
    "id": "CAT14_ITEM03",
    "categoryId": "CAT14",
    "text": "Fan beslemeleri kontrol edilmiş mi?",
    "description": "Havalandırma ve duman tahliye fanları için ayrı devre ve uygun koruma elemanları kullanılmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Fan devrelerini kontrol edin. Eksik koruma elemanlarını ekleyin.",
    "displayOrder": 3
  },
  {
    "id": "CAT14_ITEM04",
    "categoryId": "CAT14",
    "text": "Mekanik tesisat motorları topraklanmış mı?",
    "description": "Tüm mekanik tesisat motorları (pompa, fan, kompresör) topraklama hattına bağlanmış olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Motor gövdelerini topraklama barasına bağlayın.",
    "displayOrder": 4
  },
  {
    "id": "CAT15_ITEM01",
    "categoryId": "CAT15",
    "text": "Jeneratör çalışma testi yapılmış mı?",
    "description": "Jeneratör düzenli aralıklarla çalıştırılarak test edilmelidir. Otomatik devreye girme (ATS) sistemi kontrol edilmelidir.",
    "riskLevel": "HIGH",
    "solutionHint": "Jeneratör çalışma testini yapın. ATS sistemini kontrol edin.",
    "displayOrder": 1
  },
  {
    "id": "CAT15_ITEM02",
    "categoryId": "CAT15",
    "text": "Jeneratör yakıt seviyesi yeterli mi?",
    "description": "Jeneratör yakıt deposu en az yarı dolu olmalıdır. Acil durumda yeterli çalışma süresi sağlanmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Yakıt deposunu kontrol edin ve gerekirse doldurun.",
    "displayOrder": 2
  },
  {
    "id": "CAT15_ITEM03",
    "categoryId": "CAT15",
    "text": "UPS sistemi çalışıyor mu?",
    "description": "Kesintisiz güç kaynağı (UPS) ortak alan aydınlatma, yangın sistemi gibi kritik yükler için kullanılmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "UPS sistemini test edin. Akü durumunu kontrol edin.",
    "displayOrder": 3
  },
  {
    "id": "CAT15_ITEM04",
    "categoryId": "CAT15",
    "text": "Jeneratör panosu düzgün mü?",
    "description": "Jeneratör panosu etiketlenmiş, bağlantıları sıkı ve koruma elemanları uygun olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Jeneratör panosunu kontrol edin, eksikleri giderin.",
    "displayOrder": 4
  },
  {
    "id": "CAT15_ITEM05",
    "categoryId": "CAT15",
    "text": "Şebeke-jeneratör geçişi otomatik mi?",
    "description": "Otomatik transfer şalteri (ATS) şebeke kesilince jeneratörü otomatik devreye almalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "ATS sistemini test edin ve çalışır hale getirin.",
    "displayOrder": 5
  },
  {
    "id": "CAT16_ITEM01",
    "categoryId": "CAT16",
    "text": "Kablo tavaları projede belirtilen güzergahta mı?",
    "description": "Kablo tavaları mekanik projede belirtilen güzergah ve boyutlarda monte edilmiş olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Kablo tavası güzergahını projeyle karşılaştırın ve uyumsuzlukları giderin.",
    "displayOrder": 1
  },
  {
    "id": "CAT16_ITEM02",
    "categoryId": "CAT16",
    "text": "Kablo tavaları destekleri sağlam mı?",
    "description": "Kablo tavası askı ve destekleri yeterli aralıklarda ve sağlam şekilde monte edilmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Gevşek veya eksik destekleri tamamlayın.",
    "displayOrder": 2
  },
  {
    "id": "CAT16_ITEM03",
    "categoryId": "CAT16",
    "text": "Elektrik şaftı yangın yalıtımı yapılmış mı?",
    "description": "Elektrik şaftının kat geçişlerinde yangın yayılmasını önlemek için yangın bariyeri uygulanmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Şaft geçişlerini yangın dayanımlı malzeme ile kapatın.",
    "displayOrder": 3
  },
  {
    "id": "CAT16_ITEM04",
    "categoryId": "CAT16",
    "text": "Kablo geçişleri yangın sızdırmazlığı yapılmış mı?",
    "description": "Duvar ve döşeme geçişlerinde kablo etrafı yangına dayanıklı mastik veya yastık ile sızdırmazlığı sağlanmalıdır.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Tüm kablo geçişlerinde yangın sızdırmazlık uygulaması yapın.",
    "displayOrder": 4
  },
  {
    "id": "CAT16_ITEM05",
    "categoryId": "CAT16",
    "text": "Kablo tavalarında doluluk oranı uygun mu?",
    "description": "Kablo tavalarının doluluk oranı %50'yi geçmemelidir. Aşırı dolu tavalar ısınma ve bakım zorluğu oluşturur.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Aşırı dolu tavaları boşaltın veya ek tava ekleyin.",
    "displayOrder": 5
  },
  {
    "id": "CAT17_ITEM01",
    "categoryId": "CAT17",
    "text": "Topraklama ölçüm raporu mevcut mu?",
    "description": "Yetkili elektrik laboratuvarı tarafından düzenlenmiş topraklama direnci ölçüm raporu olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Yetkili laboratuvardan topraklama ölçüm raporu alın.",
    "displayOrder": 1
  },
  {
    "id": "CAT17_ITEM02",
    "categoryId": "CAT17",
    "text": "İzolasyon direnci testi yapılmış mı?",
    "description": "Tüm devrelerin izolasyon direnci ölçülmüş ve rapor edilmiş olmalıdır. Minimum 0,5 MΩ olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "İzolasyon direnci testini yaptırın ve rapor alın.",
    "displayOrder": 2
  },
  {
    "id": "CAT17_ITEM03",
    "categoryId": "CAT17",
    "text": "Kaçak akım rölesi test raporu var mı?",
    "description": "Kaçak akım rölelerinin açma süreleri ve eşik değerleri ölçülmüş ve raporlanmış olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Kaçak akım rölesi test raporunu hazırlayın.",
    "displayOrder": 3
  },
  {
    "id": "CAT17_ITEM04",
    "categoryId": "CAT17",
    "text": "Süreklilik testi yapılmış mı?",
    "description": "Koruma iletkeni ve eşpotansiyel bağlantı sürekliliği ölçülmüş olmalıdır.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Süreklilik testini yaptırın ve rapor alın.",
    "displayOrder": 4
  },
  {
    "id": "CAT17_ITEM05",
    "categoryId": "CAT17",
    "text": "Yangın algılama sistemi test raporu var mı?",
    "description": "Yangın algılama sisteminin tüm dedektör ve butonları test edilmiş ve rapor düzenlenmiş olmalıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Yangın sistemi test raporunu yetkili firmadan alın.",
    "displayOrder": 5
  },
  {
    "id": "CAT18_ITEM01",
    "categoryId": "CAT18",
    "text": "Projesiz veya revizyonsuz uygulama var mı?",
    "description": "Tüm elektrik uygulamaları onaylanmış projeye uygun olmalıdır. Proje dışı uygulama yapı denetim mevzuatına aykırıdır.",
    "riskLevel": "HIGH",
    "solutionHint": "Projesiz uygulamalar için proje revizyonu yaptırın.",
    "displayOrder": 1
  },
  {
    "id": "CAT18_ITEM02",
    "categoryId": "CAT18",
    "text": "Tehlikeli geçici tesisat var mı?",
    "description": "Şantiye döneminden kalma geçici bağlantılar, uzatma kabloları veya bant ile yapılmış ekler tehlike oluşturur.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Tüm geçici tesisatı kaldırın. Kalıcı ve standartlara uygun tesisat yapın.",
    "displayOrder": 2
  },
  {
    "id": "CAT18_ITEM03",
    "categoryId": "CAT18",
    "text": "Yapı içinde hasar görmüş kablo var mı?",
    "description": "Sıva, inşaat veya montaj sırasında hasar görmüş kablolar kısa devre ve yangın riski oluşturur.",
    "riskLevel": "CRITICAL",
    "solutionHint": "Hasarlı kabloları tespit edip değiştirin.",
    "displayOrder": 3
  },
  {
    "id": "CAT18_ITEM04",
    "categoryId": "CAT18",
    "text": "Elektrik tesisatında genel düzensizlik var mı?",
    "description": "Dağınık kablo demetleri, etiketlenmemiş devreler, kapağı açık buatlar gibi genel düzensizlikler tespit edilmelidir.",
    "riskLevel": "MEDIUM",
    "solutionHint": "Tespit edilen düzensizlikleri giderin. Kabloları düzenleyin, buatları kapatın.",
    "displayOrder": 4
  }
];