
# MoodCast 🌦️📚

**MoodCast** adalah aplikasi web berbasis React yang memberikan rekomendasi aktivitas cerdas berdasarkan kondisi cuaca real-time. Proyek ini menggabungkan data cuaca dari OpenWeather API dengan kurasi buku dari Open Library API untuk menciptakan pengalaman pengguna yang personal.

> **[PLACEHOLDER: Masukkan Gambar Banner atau Logo Aplikasi di Sini]**
> `![MoodCast Banner](https://link-ke-gambar-kamu.png)`

---

## ✨ Fitur Utama

* **Real-time Weather:** Cek kondisi cuaca di kota mana pun (Default: South Tangerang).
* **Dynamic Suggestion:** Memberikan saran aktivitas unik sesuai deskripsi cuaca.
* **BookFinder (Rainy Mode):** Fitur otomatis yang muncul hanya saat hujan untuk memberikan rekomendasi buku acak agar waktu luangmu tetap produktif.
* **External Library Access:** Tombol pintas menuju Z-Library untuk mencari referensi bacaan lebih lanjut.
* **Glassmorphism UI:** Antarmuka modern dan transparan yang nyaman di mata.

---

## 📸 Screenshots

### Tampilan Utama (Cerah/Berawan)

> **[PLACEHOLDER: Screenshot saat cuaca cerah/berawan]**
> `![Main Display](https://link-ke-screenshot-1.png)`

### Fitur BookFinder (Saat Hujan)

> **[PLACEHOLDER: Screenshot saat cuaca hujan dan BookFinder muncul]**
> `![BookFinder Feature](https://link-ke-screenshot-2.png)`

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** CSS3 (Glassmorphism)
* **APIs:** * [OpenWeatherMap](https://openweathermap.org/) (Weather Data)
* [Open Library](https://openlibrary.org/developers/api) (Book Data)


* **Environment:** Arch Linux

---

## 🚀 Instalasi & Persiapan

Ikuti langkah-langkah ini untuk menjalankan proyek di mesin lokalmu:

1. **Clone Repositori**
```bash
git clone https://github.com/username-kamu/moodcast.git
cd moodcast

```


2. **Instal Dependensi**
Pastikan kamu sudah menginstal Node.js dan npm.
```bash
npm install

```


3. **Konfigurasi API Key**
Buat file `.env` di root folder dan masukkan API Key OpenWeather kamu:
```env
VITE_WEATHER_API_KEY=(API-KEY)

```


4. **Jalankan Aplikasi**
```bash
npm run dev

```

