import React, { useState, useEffect } from 'react'
import logo from '../assets/images/5402956.jpg'

import '../styles/auth.scss'
import Button from '../components/Button'
import * as api from '../services/apiService'
import { number } from 'yargs'

var objDDD: any = {
    origem: 
        ['11', '16', '17', '18'],
    destino:
        ['11', '16', '17', '18']
};
console.log(objDDD["origem"][0])

type DDDsType = {
    origem: string;
    destino: Array<number>;
};
  

export  function Home() {

      // To get the value from the TextInput
  const [textInputValue, setTextInputValue] = useState('');
  // To set the value on Text
  const [getValue, setGetValue] = useState('');

  // States
  const [DDDs, setDDDs] = useState<DDDsType[]>([]);
  const [dddOrigem, setDDDOrigem] = useState<number>();
  const [dddDestino, setDDDDestino] = useState<number>();
  const [tempoLigacao, setTempoLigacao] = useState<number>();
  const [plano, setPlano] = useState(30);
  const [result, setResult] = useState();
  const [tarifaComPlano, setTarifaComPlano] = useState(0);
  const [tarifaSemPlano, setTarifaSemPlano] = useState(0);

  useEffect(() => {
      api.getDDDs()
      .then(resp => {
          setDDDs(resp.data)
          setDDDOrigem(resp.data["destino"][0])
          setDDDDestino(resp.data["origem"][0])
      })
      .catch(err => console.log(err));
  }, []);




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
                        onChange={(data) => setTempoLigacao(parseInt(data.target.value))}
                    />

                        

                    <p>DDD Destino</p>
                    <input 
                        type="text"
                        value={dddOrigem}
                        placeholder="DDD Origem"
                        onChange={(data) => setDDDOrigem(parseInt(data.target.value))}
                    />
                    <p>DDD Destino</p>
                    <input 
                        type="text"
                        value={dddDestino}
                        placeholder="DDD Destino"
                        onChange={(data) => setDDDDestino(parseInt(data.target.value))}
                    />
                    
                        {/* {DDDs.map( (ddd) => {
                            <option key={ddd} value={ddd}>{ddd}</option>
                        })} */}
                        

                    <label htmlFor="uf">Estado (UF)</label>

                    <select>
                    {/* <select onChange={() => console.log(data.target.value)} name="uf" id="uf"> */}
                    <option value="0">Selecione uma UF</option>
{/* 
                    {Object.entries(objDDD).forEach(([key: string, value: [] ]) => {
                    if (key == "origem") {
                        value.forEach( (item) => {
                            console.log(item);
                        } )
                    }    
                    })} */}



                    {Object.keys(DDDs).map( (ddd) => (
                        <option value={ddd}>
                        {ddd}
                        </option>
                    ))}
                    {/* {DDDs["origem"]?.map(ddd => (
                        <option value={ddd.}>
                        {ddd}
                        </option>
                    ))} */}
                    </select>

                    <p>Plano:</p>
                    <input 
                        type="text"
                        value={plano}
                        placeholder="Plano Escolhido"
                        onChange={(data) => setPlano(parseInt(data.target.value))}
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
