import React, { useState, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
  loading?: boolean;
  error?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, loading = false, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: '#fff',
        padding: 24,
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
      }}
    >
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 12, top: 12, color: '#888' }}>
          <FaUser />
        </span>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{
            padding: '10px 10px 10px 38px',
            width: '100%',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 12, top: 12, color: '#888' }}>
          <FaEnvelope />
        </span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: '10px 10px 10px 38px',
            width: '100%',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 12, top: 12, color: '#888' }}>
          <FaCommentDots />
        </span>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={4}
          style={{
            padding: '10px 10px 10px 38px',
            width: '100%',
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: 16,
            resize: 'vertical'
          }}
        />
      </div>
      {error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: 12,
          fontSize: 16,
          borderRadius: 8,
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 600,
          marginTop: 8
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm; 