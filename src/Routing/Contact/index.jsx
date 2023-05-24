import React, { useState } from 'react';
import "../Navigation/index.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      setError('Mohon lengkapi semua field!');
      return;
    }

    // Build WhatsApp API link
    const whatsappLink = `https://api.whatsapp.com/send?phone=+6289653716473&text=Nama:%20${name}%0AEmail:%20${email}%0APesan:%20${message}`;

    // Open WhatsApp chat window
    window.open(whatsappLink, '_blank');

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Pesan:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Kirim Pesan</button>
      </form>
    </div>
  );
};

export default Contact;
