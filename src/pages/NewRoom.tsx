import React from 'react'

import '../styles/auth.scss'
import Button from '../components/Button'

export  function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <h2>Criar uma sala</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        />
                         <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <a href="">clique aqui</a>
                    </p>

                </div>
            </main>
        </div>
    )
}
