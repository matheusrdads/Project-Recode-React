<?php
include("ClassConexao.php");

class ClassProducts extends ClassConexao{
    
    // Exibição dos produtos em um json
    public function exibeProducts()
    {
        $tabela = $_GET['table'];
        
        $BFetch=$this->conectaDB()->prepare("select * from $tabela");
        $BFetch->execute();

        print_r(json_encode($BFetch->fetchAll(PDO::FETCH_ASSOC)));

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
}
}