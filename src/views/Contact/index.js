import React, { useState, useEffect } from 'react';
import mail from '../Products/assets/mail.png';
import whatsapp from '../Products/assets/whatsapp.png';

export default function Contact() {

    const [comentarios, setComentarios] = useState([]);

    const controleEnvio = (evento) => {
        evento.preventDefault();
        fetch("http://localhost/php/full_stack_music/src/api_comments/products.php", { method: "POST", body: new FormData(evento.target) });
        getComentario();
        window.alert("Comentário enviado com secesso !")
    }

    function getComentario() {
        async function showComentarios() {
            const url = "http://localhost/php/full_stack_music/src/api_comments/products.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setComentarios(resultado);
        }
        showComentarios();
    }

    useEffect(() => { getComentario() }, []);

    useEffect(() => { }, [comentarios]);

 
    return (
        <div className="container-fluid">

            <h3 className="text-white">Products</h3>

            <h2>Contacts</h2>
            <hr />
            <div class="container">

                <div class="row container-fluid">

                    <div class="col-6 ">
                        <img alt="" src={mail} />
                        <font>contact@fullstackmusic.com</font>

                    </div>
                    <div class="col-6">
                        <img alt="" src={whatsapp} />
                        <font>+1 876-999-9999</font>
                    </div>

                </div>
            </div>


            <div >
                <form method="post" onSubmit={controleEnvio} >
                    <label>Nome</label>
                    <input type="text" id="nome" name="nome" className="form-control" /> <br />

                    <label>Mensagem</label>
                    <input type="text" id="msg" name="msg" className="form-control" /> <br />

                    <button type="submit" >Enviar </button>
                </form>
            </div> <br />


            <div className="text-white comments">
                <div className="col-sm-9">

                    {comentarios && comentarios.map(row => {
                        console.log(comentarios)
                        if (row.productname === null) { 
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <br />
                                                                    Data: {row.date} <hr />

                        </div>
                        )

                        } else{
                            return (
                                <div className="text-dark" key={row.id}>  Usuário: {row.nome} <br />
                                                                    Mensagem: {row.msg}  <br />
                                                                    Produto: {row.productname} <br />
                                                                    Data: {row.date} <hr />

                        </div>
                            )
                        }
                        })
                    }
                </div>
            </div>
        </div>

    );
}