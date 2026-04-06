export default function CrachaVisitante({ nome, acesso }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '20px',
                maxWidth: '300px',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                fontFamily: 'sans-serif',
            }}>
            {/* O nome "grandão" usando a tag h1 e zerando a margem superior */}
            <h1 style={{ marginTop: 0, fontSize: '2rem', color: '#333' }}>{nome}</h1>

            {/* O nível de acesso logo abaixo */}
            <p style={{ marginBottom: 0, fontSize: '1.2rem', color: '#666' }}>
                Nível de Acesso: <strong>{acesso}</strong>
            </p>
        </div>
    );
}
