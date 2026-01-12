
# MoodCast 🌦️📚

**MoodCast** adalah aplikasi web berbasis React yang memberikan rekomendasi aktivitas cerdas berdasarkan kondisi cuaca real-time. Proyek ini menggabungkan data cuaca dari OpenWeather API dengan kurasi buku dari Open Library API untuk menciptakan pengalaman pengguna yang personal.

<img width="1350" height="638" alt="image" src="https://github.com/user-attachments/assets/bfedeffe-d713-47ad-962d-89529890480f" />

---

## ✨ Fitur Utama

* **Real-time Weather:** Cek kondisi cuaca di kota mana pun.
* **Dynamic Suggestion:** Memberikan saran aktivitas unik sesuai deskripsi cuaca.
* **BookFinder (Rainy Mode):** Fitur otomatis yang muncul hanya saat hujan untuk memberikan rekomendasi buku acak agar waktu luangmu tetap produktif.
* **External Library Access:** Tombol pintas menuju Z-Library untuk mencari referensi bacaan lebih lanjut.
* **Glassmorphism UI:** Antarmuka modern dan transparan yang nyaman di mata.

---

## 📸 Screenshots

### Tampilan Utama (Cerah/Berawan)

<img width="1350" height="638" alt="image" src="https://github.com/user-attachments/assets/76c4c907-8a40-46fd-84d2-e2986ae22bf4" />


### Fitur BookFinder (Saat Hujan)

<img width="1350" height="1007" alt="Screenshot 2026-01-12 at 14-13-13 moodcast-app" src="https://github.com/user-attachments/assets/5c1537cd-635c-44cf-90b4-adb5d9ff4ddb" />

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** CSS3 (Glassmorphism)
* **APIs:** * [OpenWeatherMap](https://openweathermap.org/) (Weather Data)
* [Open Library](https://openlibrary.org/developers/api) (Book Data)


---

## 🚀 Instalasi & Persiapan

Ikuti langkah-langkah ini untuk menjalankan proyek di mesin lokalmu:

1. **Clone Repositori**
```bash
git clone https://github.com/arul-intcygen/moodcast.git
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

