<?php
abstract class ClassConexao{

    protected function conectaDB()
    {
        try{
           $Con=new PDO("mysql:host=localhost;dbname=recodepro","root","");
           return $Con;
        }catch (PDOException $Erro){
            return $Erro->getMessage();

        }
    }   
}