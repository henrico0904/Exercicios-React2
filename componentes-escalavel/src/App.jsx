import './App.module.css';
import BotaoVerde from './components/BotaoVerde';
import CabecalhoLoja from './components/CabecalhoLoja';
import BotaoUniversal from './components/BotaoUniversal';
import CrachaVisitante from './components/CrachaVisitante';
import AvisoSistema from './components/AvisoSistema';
import ContadorLikes from './components/ContadorLikes';
import Disjuntor from './components/Disjuntor';
import CampoDigitacao from './components/CampoDigitação';
import AcessoBancario from './components/AcessoBancário';
import SenhaSecreta from './components/SenhaSecreta';

function App() {
    return (
        <>
            <BotaoVerde />
            <CabecalhoLoja />
            <BotaoUniversal textoBotao="Confirmar" />
            <BotaoUniversal textoBotao="Cancelar" />
            <BotaoUniversal textoBotao="Saiba Mais" />
            <BotaoUniversal textoBotao="Comprar Agora" />
            <CrachaVisitante nome="Lucas Bombom" acesso="ALL" />
            <AvisoSistema mensagem="ERRO CRÍTICO: Banco de dados desconectado!" corAlerta="red" />
            <ContadorLikes/>
            <Disjuntor/>
            <CampoDigitacao/>
            <AcessoBancario/>
            <SenhaSecreta/>
        </>
    );
}

export default App;
