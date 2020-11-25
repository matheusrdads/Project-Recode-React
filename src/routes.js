import React from 'react';
// import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import Stores from './views/Stores';

export default class Routes extends React.Component{
    // constructor() {
    //     super();
    //         this.state=({
    //             db: []
    //         });
    //         this.exibirProducts();
    // }
    
    // exibirProducts(){
    //     fetch("http://localhost/php/full_stack_music/src/api/api_2/api_teste?table=products")
    //     .then((response)=>response.json())
    //     .then((responseJson)=>
    //         {
    //             this.setState({
    //                     db: responseJson
    //         });
    //         console.log(this.state.db);
    //     })
    // }
    render(){
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" exact component={Home}/>
            <Route exact path="/products" component={Products}/>
            {/* <Route path="/products"  render={(props) => <Products {...props} Disco={this.state.db}/>} /> */}
            <Route path="/contact" component={Contact}/>
            <Route path="/stores" component={Stores}/>
        </Switch>
        </BrowserRouter>
    );
}
}