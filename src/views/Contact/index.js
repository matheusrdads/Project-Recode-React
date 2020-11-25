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

                <h2>Contacts</h2>
                 <hr />
                 <table class="table_contact text-dark">
                     <tr>
                         <td >
                             <img src=".././assets/mail.png" alt="" />
                             <font>contact@fullstackmusic.com</font>
                         </td>

                         <td >
                             <img src=".././assets/whatsapp.png" alt="" />
                             <font>+1 876-999-9999</font>
                         </td>
                     </tr>
                 </table>

                 <form method="post" action="" />
                  Nome:<br />
                 <input type="text" name="nome"  class="form-control" type="text"/><br />
                  Mensagem:<br />
                 <input type="text" name="msg"  class="form-control" type="text"/><br />

                 <input type="submit" name="submit" value="enviar" /><br />

                 <form />

                <div className="text-white comments">
                    <div class="col-sm-9">
                        
                            {this.state.db.map(row => <div className="text-dark" key={row.id}>
                                <p className="text-dark">{row.nome}</p>
                                <p className="text-danger">{row.msg} </p>
                                <p className="text-dark">{row.date}</p>
                                <hr/>
                            </div>)}
                        
                    </div>
                </div>
            </div>

        );
    }
}


// import React, { Component } from 'react';

// export default class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = ({
//             db: []
//         });
//         this.exibirComments = this.exibirComments.bind(this);
//     }
//     componentDidMout() {
//         this.exibirComments();
//     }

//     exibirComments() {
//         let url = 'http://localhost/php/full_stack_music/src/api/index.php?table=comments';

//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     db: responseJson
//                 });
//                 console.log(responseJson);
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Contacts</h2>
//                 <hr />
//                 <table class="table_contact text-dark">
//                     <tr>
//                         <td >
//                             <img src=".././assets/mail.png" alt="" />
//                             <font>contact@fullstackmusic.com</font>
//                         </td>

//                         <td >
//                             <img src=".././assets/whatsapp.png" alt="" />
//                             <font>+1 876-999-9999</font>
//                         </td>
//                     </tr>
//                 </table>

//                 <form method="post" action="" />
//                  Nome:<br />
//                 <input type="text" name="nome"  /><br />
//                  Mensagem:<br />
//                 <input type="text" name="msg"  /><br />

//                 <input type="submit" name="submit" value="enviar" /><br />

//                 <form />


//                 <div>
//                 {this.state.db.map(row => <div key={row.id}>
//                         <p>{row.nome}</p>
//                         <p>{row.msg}</p>
//                         <p>{row.date}</p>
//                     </div>)}
//                 </div>

//             </div>

//         );
//     }
// }