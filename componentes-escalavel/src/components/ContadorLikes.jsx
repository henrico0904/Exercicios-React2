import { useState } from 'react';

export default function ContadorLikes() {
    // Iniciando o estado com 0
    const [likes, setLikes] = useState(0);

    // Função para somar 1 ao estado atual
    const adicionarLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div>
            <p>Likes: {likes}</p>
            <button onClick={adicionarLike}>Curtir</button>
        </div>
    );
}
