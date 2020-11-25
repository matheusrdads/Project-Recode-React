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

    //     $j=[];
    //     $i=0;

    //     while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
    //         $j[$i]=[
    //             "id"=>$Fetch['idproducts'],
    //             "categories"=>$Fetch['categories'],
    //             "descripton"=>$Fetch['descripton'],
    //             "price"=>$Fetch['price'],
    //             "finalprice"=>$Fetch['finalprice'],
    //             "images"=>$Fetch['images']
    //         ];
    //         $i++;    
    // }
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    // echo json_encode($j);
    

}
}