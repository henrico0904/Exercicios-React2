import './App.module.css';
import BotaoVerde from './components/BotaoVerde';
import CabecalhoLoja from './components/CabecalhoLoja';
import BotaoUniversal from './components/BotaoUniversal';

function App() {
    return (
        <>
            <BotaoVerde />
            <CabecalhoLoja />
            <BotaoUniversal textoBotao="Confirmar" />
            <BotaoUniversal textoBotao="Cancelar" />
            <BotaoUniversal textoBotao="Saiba Mais" />
            <BotaoUniversal textoBotao="Comprar Agora" />
        </>
    );
}

export default App;
