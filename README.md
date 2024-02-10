# GO Dental Clinic Websitesi

4 farklı sayfadan oluşmaktadır.
1. **Anasayfa**(index.html)
2. **Hakkımızda**(about_us_page.html)
3. **Hizmetlerimiz**(services_page.html)
4. **Randevu & İletişim**(contact_page.html)

Bu sayfaların her biri Almanca ve İngilizce dillerine çevrilmiştir. Aynı isimli dosyanın "_de" uzantılı dosyası Almanca çeviri dosyasını, "_en" uzantılı dosyası İngilizce çeviri dosyasını içerir.
Her bir sayfada yapılan değişikliğin diğer dillerde de çalışabilmesi için aynı kodun o sayfaya ait diğer uzantılı dosyalarına da eklenmesi gerekir.

## images
Site içerisinde kullanılan resimleri içeren klasördür. Resimler site hızını artırmak amaçlı .webp formatında kullanılmalıdır. Ayrıca en ve boy olarak maksimimum 1024 pixel olmalıdır. Boyutu küçültmek için online resim boyutlama araçları kullanılabilir. Yerine koyulmak istenen resimle aynı adı vermeniz resmi değiştirmek için yeterli olacaktır.

## sitemap.xml
Site haritasını içeren dosyadır. SEO için gereklidir.

## .css Uzantılı Dosyalar
Bu dosyalar, aynı isimli html dosyasının stillerini içerir. Renk, boyut, font ve katman gibi şekilsel özellikleri barındırır.

## Değişiklik Yapıldığında
Siteye güncel kod github reposunda yer almaktadır. Versiyon takibi açısından yeni ekleme ve geliştirme yapıldığında yine aynı şekilde github reposuna güncellemenin yüklenmesi büyük önem arz eder. Güncellemenin site üzerinde çalışmaya başlaması için **Google Cloud**'a yüklenmesi gerekmektedir. Bunun için sadece değişiklik yapılan resim, kod vb. dosyaların 
**Google Cloud > Console > Cloud Storage > Bucket > godental.clinic** 
yolunu izleyerek buraya yüklenmesi gerekmektedir. Yükleme yapıldığında çıkan ekranda "Overwriting Object" olan opsiyon seçilmelidir. Yükleme tamamlandığında değişiklik kısa bir süre sonra sitede çalışır hale gelecektir.

**!!!NOT:***Google Cloud'a **godentalkusadasi@gmail.com** hesabı ile giriş yapılmış olması gerekmektedir.

