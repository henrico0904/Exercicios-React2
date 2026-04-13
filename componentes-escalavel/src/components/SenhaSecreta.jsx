import React, { useState } from 'react';

export default function SenhaSecreta() {
  // Regra: Hook governando a string da senha
  const [senha, setSenha] = useState('');

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h2>Área Restrita</h2>
      
      {/* Input controlado: O valor e o evento estão perfeitamente amarrados */}
      <input
        type="text"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite a senha..."
        style={{
          padding: '15px',
          fontSize: '1.5rem',
          width: '300px',
          borderRadius: '8px',
          border: '2px solid #555',
          outline: 'none',
          marginBottom: '20px'
        }}
      />

      {/* Lógica Condicional (Ternário) avaliando a string exata em tempo real */}
      {senha === "REACT123" ? (
        // Condição Verdadeira: Verde Limão Escandalosa (Neon)
        <p style={{ 
          fontSize: '2.5rem', 
          color: '#39ff14', // Verde Limão Neon
          fontWeight: '900',
          textShadow: '0px 0px 10px rgba(57, 255, 20, 0.7)',
          backgroundColor: '#111', // Fundo escuro para destacar o verde neon
          padding: '10px',
          borderRadius: '10px',
          display: 'inline-block'
        }}>
          Acesso Concedido
        </p>
      ) : (
        // Condição Falsa: Vermelho de Alerta
        <p style={{ 
          fontSize: '2.5rem', 
          color: '#ff0000', 
          fontWeight: 'bold' 
        }}>
          Acesso Negado!
        </p>
      )}
    </div>
  );
}