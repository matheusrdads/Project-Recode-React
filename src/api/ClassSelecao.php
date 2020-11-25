<?php
include("ClassConexao.php");

class ClassSelecao extends ClassConexao{

    // Exibição dos produtos em um json
    public function selecao()
    {

        if(isset($_POST['nome']) && isset($_POST['msg'])){
            $nome = $_POST['nome'];
            $msg = $_POST['msg'];
        
            $sql = "insert into comments (nome, msg) values ('$nome','$msg')";
            $result = $Con->query($sql);
        }
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    // echo json_encode($j);
    

}
}