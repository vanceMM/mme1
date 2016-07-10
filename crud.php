<?php
// CRUD Requests Controller for table 'user'
//error_reporting(E_ALL);
//error_reporting(E_ALL ^E_NOTICE);
// get rid of notices like 'undefined index'
ini_set('display_errors', 1);
// prepare console-master for debug output
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . '/mme1/php-console-master/src/PhpConsole/__autoload.php');
$connector = PhpConsole\Connector::getInstance();
$handler = PhpConsole\Handler::getInstance();
//test for PhpConsole:
//(activate chrome plugin php console and open developer tools)
// use it like this
// establish database connection and create PDO-Object:
include $_SERVER['DOCUMENT_ROOT'] . '/connect_inc.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    try {
        $sql = 'INSERT INTO places SET 
          restaurant = :restaurant,
          bar = :bar,
          location = :location,
          title = :title,
          description =:description,
          adresse = :adresse,
          price =:price';
        $s = $pdo->prepare($sql);
        $s->bindValue(':restaurant', $_POST['restaurant']);
        $s->bindValue(':bar', $_POST['bar']);
        $s->bindValue(':location', $_POST['location']);
        $s->bindValue(':title', $_POST['title']);
        $s->bindValue(':description', $_POST['description']);
        $s->bindValue(':adresse', $_POST['adresse']);
        $s->bindValue(':price', $_POST['price']);
        $s->execute();
        $response = array('message' => 'insert done');
    } catch (PDOException $e) {
        $error = 'Error adding user: ' . $e->getMessage();
        $response = array('databaseError' => $error);
        $json = json_encode($response); // return json
        echo $json;
    }

    $json = json_encode($response);
    echo $json;
}

else if ($_SERVER['REQUEST_METHOD'] === 'GET') {

            try {
                $result = $pdo->query("SELECT * FROM `places`");
            } catch (PDOException $e) {
                $error = 'QUERY ERROR: SELECT * FROM places: ' . $e->getMessage();
                $response = array('databaseError' => $error);
                $json = json_encode($response);
                echo $json;
                exit();
            }
            if (empty($result)) {
                $error = 'no records found';
                $response = array('databaseError' => $error);
            }

            $places = array();
    foreach ($result as $row) {
        $places[] = array('id' => $row['id'],
            'restaurant' => $row['restaurant'],
            'bar' => $row['bar'],
            'location' => $row['location'],
            'title' => $row['title'],
            'description' => $row['description'],
            'adresse' => $row['adresse'],
            'price' => $row['price']);
    }

            $json = json_encode($places);
            echo $json;


}