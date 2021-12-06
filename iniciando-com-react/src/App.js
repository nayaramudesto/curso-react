import React from 'react';

function App( props ) {

  const modificarNome = event =>{
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ["Fulano", "Cliclano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

    console.log('Executou o render')
    const MeuComboBox = () => criaComboBox()
    return (
      <>
        <input className="text-centralizado" type="text" value={props.nome} onChange={modificarNome} />
        <h1> Oiee {props.nome} e sua idade é {props.idade} </h1>
        <MeuComboBox />

      </>
    )

}
export default App;