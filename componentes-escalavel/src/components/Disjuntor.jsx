import React, { useState } from 'react';

export default function Disjuntor() {
  const [ligado, setLigado] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>{ligado ? "Sistema ON" : "Sistema OFF"}</h2>
      
      <button 
        onClick={() => setLigado(!ligado)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Alternar Disjuntor
      </button>
    </div>
  );
}