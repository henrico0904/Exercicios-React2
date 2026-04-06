export default function AvisoSistema({ mensagem, corAlerta }) {
    return (
        <div
            style={{
                backgroundColor: corAlerta,
                color: '#fff', // Texto branco para dar contraste
                padding: '15px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '10px',
            }}>
            {mensagem}
        </div>
    );
}
