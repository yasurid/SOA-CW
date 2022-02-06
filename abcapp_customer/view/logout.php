<?php
session_start();
session_unset($_SESSION["ShopName"]);
session_unset($_SESSION["userName"]);
session_unset($_SESSION['shopId']);
session_destroy();
header("Location: index.php");

?>
