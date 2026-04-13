import React, { useState } from 'react';

export default function CampoDigitacao() {
  const [termo, setTermo] = useState('');

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ fontSize: '4rem', minHeight: '75px', color: '#2c3e50', margin: '0 0 20px 0' }}>
        {termo}
      </h1>
      
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Comece a digitar..."
        style={{
          padding: '15px 20px',
          fontSize: '1.5rem',
          width: '80%',
          maxWidth: '500px',
          borderRadius: '10px',
          border: '2px solid #3498db',
          outline: 'none',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      />
      
    </div>
  );
}