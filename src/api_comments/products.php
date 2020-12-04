<?php

    header("Access-Control-Allow-Origin:*");

    require_once 'connect.php';

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        if(isset($_GET['busca'])){

            $busca = $_GET['busca'];
            
            $sql = "SELECT * FROM comments WHERE titulo LIKE '%$busca%';";
            $resultado = query($sql);
            $comments = [];

            while($linha = mysqli_fetch_assoc($resultado)){
                $comments[] = $linha;
            }

            echo json_encode($comments);

        }
        else {
            $sql = "SELECT * FROM recodepro.comments left join recodepro.orders on comments.nome=orders.fullname;";
            // $sql = "SELECT * FROM comments ";
            $resultado = query($sql);
            $comentarios = [];

            while($linha = mysqli_fetch_assoc($resultado)){
                $comentarios[] = $linha;
            }

            echo json_encode($comentarios);
        }


    } else if($_SERVER['REQUEST_METHOD'] === 'POST') {

        $nome    = $_POST['nome'];
        $msg     = $_POST['msg'];
        $date    = $_POST['date'];

        $sql = "INSERT INTO comments VALUES(null, '$nome', '$msg', '$date');";
        
        nonquery($sql);

        echo json_encode(array("msg" => "Método POST Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'PUT'){

        echo json_encode(array("msg" => "Método PUT Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){

        echo json_encode(array("msg" => "Método DELETE Efetuado"));

    } else {

        echo "Falha no processamento dos dados. Método inválido.";

    }