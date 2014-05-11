<?php
require 'chatterbotapi.php';

define('DEBUG', false);

if (false === DEBUG) {
    error_reporting(false);
}

if (empty($_GET['q'])) {
    exit(0);
}

$factory = new ChatterBotFactory();

/* Cleverbot support seems broken
$bot1 = $factory->create(ChatterBotType::CLEVERBOT);
$bot1session = $bot1->createSession();
*/

$bot2 = $factory->create(ChatterBotType::PANDORABOTS, 'b0dafd24ee35a477');
$bot2session = $bot2->createSession();

/* Original bot-to-bot conversation code
$s = 'Hi';
while (1) 
{
    echo "bot1> $s\n";
    
    $s = $bot2session->think($s);
    echo "bot2> $s\n";
    
    $s = $bot1session->think($s);
}
*/
$s = $_GET['q'];
$s = $bot2session->think($s);
echo $s;
