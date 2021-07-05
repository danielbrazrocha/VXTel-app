import React, { useEffect, useState } from 'react'
import logo from '../assets/images/5402956.jpg'
import * as api from '../services/apiService'
import '../styles/auth.scss'

export function Home() {

    // States
    const [dddOrigem, setDDDOrigem] = useState();
    const [dddDestino, setDDDDestino] = useState();
    const [listaDDDDestino, setListaDDDDestino] = useState([]);
    const [listaDDDOrigem, setListaDDDOrigem] = useState([]);
    const [tempoLigacao, setTempoLigacao] = useState();
    const [listaPlanos, setListaPlanos] = useState({});
    const [plano, setPlano] = useState(30);
    const [tarifaComPlano, setTarifaComPlano] = useState();
    const [tarifaSemPlano, setTarifaSemPlano] = useState();


    useEffect(() => {
        const loadDDDs = async () => {
            try {
                const res = await api.getDDDs();
                setListaDDDDestino(res.data.destino);
                setListaDDDOrigem(res.data.origem);
                setDDDOrigem(res.data.origem[0])
                setDDDDestino(res.data.destino[1])
            } catch (error) {
                return error.response.status;
            }
        };

        const loadPlans = async () => {
        try {
            const res = await api.getPlans();
            setListaPlanos(res.data);
        } catch (error) {
            return error.response.status;
        }
        };

        loadDDDs();
        loadPlans();
    }, [])

    const handleCalculate = async (event) =>{
        event.preventDefault();
        try {
            const response = await api.postCalculate({
                "data":{
                    "dddOrigem": parseInt(dddOrigem),
                    "dddDestino": parseInt(dddDestino),
                    "plano": parseInt(plano),
                    "tempoLigacao": parseInt(tempoLigacao)
                }
                })
            
                setTarifaComPlano(response.data.comPlano.toFixed(2))
            setTarifaSemPlano(response.data.semPlano.toFixed(2))
        } catch (error) {
            return error.response.status;
        }    
    }



    return (
        <div id="page-auth">
            <aside>
                <img src={logo} alt="Ilustração de perguntas e respostas"/>
                <strong>Planos Fale Mais</strong>
                <p>Faça sua simulação</p>
            </aside>
            <main>
                <div className="main-content">
                    <form onSubmit={handleCalculate}>
                    
                        <input 
                            id="fname"
                            type="text"
                            value={tempoLigacao}
                            onChange={(e) => { setTempoLigacao(e.target.value)}}
                            placeholder="Informe o tempo de ligação"
                        />

                            

                        <p>DDD Origem</p>
                        <select className="select-plan"
                            value={dddOrigem}
                            onChange={(e) => { setDDDOrigem(e.target.value);}
                        }>
                            { listaDDDOrigem.map( (ddd) => 
                                <option className="select-plan" key={"orig"+ddd} value={ddd}>{ddd}</option>
                            )}
                        </select>
                        
                        <p>DDD Destino</p>
                        <select className="select-plan"
                            value={dddDestino}
                            onChange={(e) => { setDDDDestino(e.target.value);}
                        }>
                            { listaDDDDestino.map( (ddd) => 
                                <option className="select-plan" key={"dest"+ddd} value={ddd}>{ddd}</option>
                            )}
                        </select>
                        



                        <p>Plano Escolhido</p>
                        <select className="select-plan"
                            value={plano}
                            onChange={(e) => { setPlano(e.target.value);}
                        }>
                            {Object.keys(listaPlanos).map( (key, index) =>
                                <option className="select-plan" key={key} value={listaPlanos[key]}>{key}</option>
                            )}
                            
                        </select>



                        
                        
                        <div className="separator">○○○○○○○○○○</div>

                        <button type="submit" className="create-room">
                            Calcular
                        </button>

                        {tarifaComPlano &&
                            <div>
                                Tarifa Com plano: {tarifaComPlano}
                            </div>                        
                        }

                        {tarifaSemPlano &&
                            <div>
                                Tarifa Sem plano: {tarifaSemPlano}
                            </div>
                        }


                    </form>
                </div>
            </main>
        </div>
    )
}
