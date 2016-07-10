<?php
/**
 * Created by PhpStorm.
 * User: valentin
 * Date: 04/07/16
 * Time: 16:12
 */

try
{
// create PHP Data Object
    $pdo = new PDO('mysql:host=localhost;dbname=mme1', 'root', 'test');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES "utf8"');
    $handler->debug($pdo);

}
catch (PDOException $e) {
    $error = 'Unable to connect to the database server: '.$e->getMessage();
    include '/mme1/error_inc.php';
    exit();
}