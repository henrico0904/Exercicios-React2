import React, { useState } from 'react';

export default function AcessoBancario() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      
      {estaLogado ? (
        <p style={{ fontSize: '3rem', color: '#27ae60', margin: 0 }}>
        🔑 Bem vindo!!!!
        </p>
      ) : (
        <button 
          onClick={() => setEstaLogado(!estaLogado)}
          style={{ 
            padding: '15px 30px', 
            fontSize: '1.5rem', 
            backgroundColor: '#2980b9', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer' 
          }}
        >
          Fazer Login
        </button>
      )}

    </div>
  );
}