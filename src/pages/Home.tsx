import React, { useState } from 'react'
import logo from '../assets/images/5402956.jpg'

import '../styles/auth.scss'
import Button from '../components/Button'

export  function Home() {

      // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');

  const tarifas = {
    11: {
      16: 1.9,
      17: 1.7,
      18: 0.9,
    },
    16: {
      11: 2.9,
    },
    17: {
      11: 2.7,
    },
    18: {
      11: 1.9,
    },
  };

  // API express em node retornando objetos abaixo:
  const ddd = {
    origem: [11, 16, 17, 18],
    destino: [11, 16, 17, 18],
  };

  const dddArray = [11, 16, 17, 18];

  // States
  const [dddOrigem, setDDDOrigem] = useState(dddArray[0]);
  const [dddDestino, setDDDDestino] = useState(dddArray[1]);
  const [tempoLigacao, setTempoLigacao] = useState();
  const [plano, setPlano] = useState(30);
  const [result, setResult] = useState();
  const [tarifaComPlano, setTarifaComPlano] = useState(0);
  const [tarifaSemPlano, setTarifaSemPlano] = useState(0);



    return (
        <div id="page-auth">
            <aside>
                <img src={logo} alt="Ilustração de perguntas e respostas"/>
                <strong>Planos Fale Mais</strong>
                <p>Faça sua simulação</p>
            </aside>
            <main>
                <div className="main-content">
                    
                    <input 
                    id="fname"
                        type="text"
                        value={tempoLigacao}
                        placeholder="Informe o tempo de ligação"
                    />

                        

                    <p>DDD Destino</p>
                    <input 
                        type="text"
                        value={dddOrigem}
                        placeholder="DDD Origem"
                    />
                    <p>DDD Destino</p>
                    <input 
                        type="text"
                        value={dddDestino}
                        placeholder="DDD Destino"
                    />

                    <p>Plano:</p>
                    <input 
                        type="text"
                        value={plano}
                        placeholder="Plano Escolhido"
                    />
                    
                    
                    <div className="separator">○○○○○○○○○○</div>

                    <button className="create-room">
                        Calcular
                    </button>

                        
                        {/* <Button type="submit">
                            Calcular
                        </Button> */}
                    <div>
                        Tarifa Com plano: {tarifaComPlano}
                    </div>

                    <div>
                        Tarifa Sem plano: {tarifaSemPlano}
                    </div>
                </div>
            </main>
        </div>
    )
}
