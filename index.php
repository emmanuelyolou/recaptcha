<?php

if(!empty($_POST['recap-token'])){
    echo "<pre>";
        print_r($_POST['recap-token']);
    echo "</pre>";
    
}
require('login.php');
?>