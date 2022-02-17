import React, { Component } from "react";

class Content extends Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
        return conteudos.map((cont) => {
            return <div key = {cont.conteudo} className="materias">
                <p>O conteudo é : {cont.conteudo}</p>
                <p>Status : {cont.status}</p>
                <p>Bloco : {cont.bloco}</p>
                <br/>
            </div>
        });
    }
}

export default Content