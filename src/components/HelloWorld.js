import React, { Component } from 'react'
//Componente sin estado statements
export const HelloWorld = (props) => {
  return (
    <div>
      <h1>Hola,</h1>
      <h2>Mi nombre es: {props.name}</h2>
      <h2>Mi apelido es: {props.lastname}</h2>
      <h2>Tengo: {props.age} años</h2>
      <h2>Trabajo: {props.work}</h2>
      {console.log('hi')}
    </div>
  )
}
//Componente funcional con estado statefull
// class HelloWorld extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hola,</h1>
//         <h2>Mi nombre es: {this.props.name}</h2>
//         <h2>Mi apelido es: {this.props.lastname}</h2>
//         <h2>Tengo: {this.props.age} años</h2>
//         <h2>Trabajo: {this.props.work}</h2>
//       </div>
//     )
//   }
// }

// export default HelloWorld