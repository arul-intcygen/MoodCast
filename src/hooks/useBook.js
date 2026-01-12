import { useState } from 'react';

export const useBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomBook = async () => {
    setLoading(true);
    try {
      // Kita cari buku dengan subjek 'fiction' secara acak
      const subjects = ['fiction', 'mystery', 'drama', 'fantasy', 'science'];
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      
      const response = await fetch(`https://openlibrary.org/subjects/${randomSubject}.json?limit=50`);
      const data = await response.json();
      
      // Ambil satu buku secara acak dari daftar (works)
      const randomIndex = Math.floor(Math.random() * data.works.length);
      const randomBook = data.works[randomIndex];

      setBook({
        title: randomBook.title,
        author: randomBook.authors[0]?.name || "Unknown Author",
        cover: randomBook.cover_id 
          ? `https://covers.openlibrary.org/b/id/${randomBook.cover_id}-M.jpg` 
          : "https://via.placeholder.com/150?text=No+Cover"
      });
    } catch (error) {
      console.error("Gagal mengambil buku:", error);
    } finally {
      setLoading(false);
    }
  };

  return { book, fetchRandomBook, loading };
};