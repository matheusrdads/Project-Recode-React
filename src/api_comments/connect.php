<?php
    /* Aqui tem retorno */
    function query($sql) {
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $banco = "recodepro";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect, $sql);
        mysqli_close($connect);
        return $resultado;
    }
    
    /* Aqui não tem retorno */
    function nonquery($sql) {
        $servidor = "localhost";
        $usuario = "root";
        $senha = "";
        $banco = "recodepro";

        $connect = mysqli_connect($servidor, $usuario, $senha, $banco);
        $resultado = mysqli_query($connect, $sql);
        mysqli_close($connect);
    }