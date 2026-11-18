# guldaneberk.com

Güldane Berk · Hikâyelerle Koçluk web sitesi. Statik HTML, GitHub Pages ile yayınlanır.

© 2026 Güldane Berk. Tüm hakları saklıdır. Metinler, görseller ve logo izinsiz kullanılamaz.
Yazı tipleri (Poppins, Caveat, Nunito) SIL Open Font License ile kullanılır; lisanslar `assets/fonts/` içinde.

## Yapı

| Yol | İçerik |
| --- | --- |
| `index.html` | Ana sayfa: Giriş, Hakkımda, Hizmetler, Kitap, İletişim |
| `atolyeler/index.html` | Atölyeler ve Etkinlikler listesi (kartlar) |
| `atolyeler/<etkinlik-adi>/index.html` | Her etkinliğin kendi sayfası |
| `assets/css/site.css` | Renkler (Sıcak Düzen), yazı tipleri, düzen |
| `assets/fonts/` | Siteye gömülü yazı tipleri (Google'a istek gitmez) |
| `assets/img/` | Logo ve fil ikonu |

Bütün bağlantılar göreli; site hem `guldaneberk.github.io/guldaneberkwebsite/` altında hem de `guldaneberk.com` üzerinde çalışır.

## Yeni etkinlik eklemek

1. `atolyeler/zavalli-mi-o-sindirella/` klasörünü kopyalayın, yeni adla (küçük harf, Türkçe karakter yok, tire ile) adlandırın.
2. Sayfadaki başlık, kimler için, kazanımlar, tarih/saat/süre, biçim, kontenjan, tekrar izleme ve kayıt bağlantısını değiştirin. Tarih ve saat sade metin olarak yazılır.
3. Etkinlik kesinleşince `<meta name="robots" content="noindex">` satırını ve üstteki "Örnek etkinlik sayfası" şeridini silin.
4. `atolyeler/index.html` içinde bir kart (`<article class="kart">`) ekleyin; bağlantısı yeni klasörü göstersin.

Kural: hiçbir değişiklik Güldane önizlemeyi görüp onaylamadan `main` dalına gitmez. Repoya koçluk alan kişilerle ilgili bilgi, ücret taslağı veya kişisel veri konmaz.

## Yayından önce yapılacaklar

- [ ] `assets/img/logo-yatay.png` ve `fil.png` şu an düşük çözünürlüklü önizleme kopyaları: `GB_Logolar.zip` içindeki SVG'lerle değiştirin (`logo-yatay.svg`, `fil.svg`) ve HTML'deki uzantıları güncelleyin.
- [ ] Kitap satış bağlantısı (`index.html`, Kitap bölümündeki yorum satırı)
- [ ] Gerçek atölye listesi
- [ ] KVKK aydınlatma metni (hukukçu kontrolüyle). Site çerez veya takip aracı kullanmadığı sürece çerez bandı gerekmez.
- [ ] Settings → Pages: kaynak `main` / root. Alan adı en son: Custom domain `guldaneberk.com`, Enforce HTTPS.
