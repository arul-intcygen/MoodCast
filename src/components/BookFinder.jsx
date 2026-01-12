import React from 'react';

// Terima props yang dikirim dari App.jsx
function BookFinder({ book, onFetch, loading }) {
  return (
    <div className="book-finder">
      <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
        Hujan nih, enaknya baca buku:
      </p>

      {book && (
        <div className="book-card">
          <img src={book.cover} alt={book.title} className="book-cover" />
          <div className="book-info">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        </div>
      )}

      <button 
        className="btn-book" 
        onClick={onFetch} 
        disabled={loading}
      >
        {loading ? "Mencari..." : "Cari Buku Random"}
      </button>
      <a 
        href="https://1lib.sk/" 
        target="_blank"           // buka di tab baru
        rel="noopener noreferrer" 
        className="btn-book"     
        style={{ 
            textDecoration: 'none', 
            display: 'inline-block', 
            marginTop: '10px',
            backgroundColor: '#2596be',
            textAlign: 'center'
        }}
        >
        Cari di Z-Library
        </a>
        
    </div>
  );
}

export default BookFinder;