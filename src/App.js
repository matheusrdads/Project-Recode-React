import React from 'react';
import Routes from './routes';
// import Products from './views/Products';
import './Functions.js';
import Footer from './components/Footer'

export default class App extends React.Component{
//   constructor() {
//       super();
//           this.state=({
//               db: []
//           });
//           this.exibirProducts();
//   }
  
//   exibirProducts(){
//       fetch("http://localhost/php/full_stack_music/src/api/")
//       .then((response)=>response.json())
//       .then((responseJson)=>
//           {
//               this.setState({
//                       db: responseJson
//           });
//           console.log(this.state.db);
//       })
//   }
      render(){
          return(
              <div>
                <Routes />
                {/* <Produtos Disco={this.state.db} /> */}
                <Footer />
              </div>
          );
      }
  }
