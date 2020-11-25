import React, { Component } from 'react';
// import '../../Functions.js';
// import Routes from '../../routes';
// import image from '../../assets/image.jpg';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            db: []
        });
        this.exibirComments = this.exibirComments.bind(this);
    }

    componentDidMount() {
        this.exibirComments();
    }

    exibirComments() {
        let url = 'http://localhost/php/full_stack_music/src/api/index.php?table=comments';

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                });
                console.log(responseJson);
            })
    }

    render() {
        return (
            <div class="container-fluid">

                <h3 className="text-white">Products</h3>

                <div className="row text-white">

                    <div className="col-sm-3">
                        <h3 >Categories</h3>
                        <ul className="categories text-secondary">
                            <li >All(12)</li>
                            <li >Heavy Metal(3)</li>
                            <li >Black Metal(1)</li>
                            <li >Thrash Metal(4)</li>
                            <li >Progressive Rock(1)</li>
                            <li >Folk Metal (1)</li>
                            <li >Hard Rock (2)</li>
                        </ul>

                    </div>
                    <div class="col-sm-9 comments">
                        <div class="products_c">
                            {this.state.db.map(row => <div className="box_products text-dark" key={row.id}>
                                <p>{row.categories}</p>
                                <img src={row.images} width={182} />
                                <p className="descripton text-dark" style={{color: "red"}}>{row.nome}</p>
                                <p className="text-danger">{row.msg} </p>
                                <p className="price text-dark">{row.date}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

// export default function Produtos(){
//     return(
//         <div>
//         {this.props.arrayProducts.map( row=> <div>{row.categories}</div>)}
//     </div>
//     );
// }



{/* <div className="box_products"  id={row.categories}>
<img src={row.images} width={182} onClick={when_zoom(this)}/>
<p className="descripton"> {row.descripton} </p>
<p className="old_price"> {rows.price} </p>
<p className="price"> {row.finalprice}</p>
</div>  */}








// export default function Products() {
//     let dados_json = file_get_contents("http://localhost/php/full_stack_music/src/api2/Get_content.php?tables=products")
//     let dados = json_decode(dados_json)

//     const [products, setProducts] = useState("http://localhost/php/full_stack_music/src/api2/Get_content.php?tables=products");

//     fetch("http://localhost/php/full_stack_music/src/api2/Get_content.php?tables=products")
//     .then((response)=>response.json())
//     .then((responseJson))
//     return (
//     <p>{products}</p>

//     );
// }


{/* <ul>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_allCategories.bind.this()}>All(12)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.this.show_categories.bind.this.bind.this('heavymetal')}>Heavy Metal(3)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_categories.bind.this('blackmetal')} id="blackmetal" >Black Metal(1)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_categories.bind.this('thrashmetal')}>Thrash Metal(4)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_categories.bind.this('progressivemetal')}>Progressive Rock(1)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_categories.bind.this('folkmetal')}>Folk Metal (1)</li>
                    <li onMouseOver={this.spotlight.bind.this} onMouseOut={this.defocus.bind.this} onClick={this.show_categories.bind.this('hardrock')}>Hard Rock (2)</li> */}