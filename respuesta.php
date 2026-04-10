<?php 
include 'EmailService.php' ;
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./style/style.css">

  <link rel="icon" type="image/png" href="./favicon/favicon-48x48.png" sizes="48x48" />
  <link rel="icon" type="image/svg+xml" href="./favicon/favicon.svg" />
  <link rel="shortcut icon" href="./favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Ángel Corral" />
  <link rel="manifest" href="./favicon/site.webmanifest" />

	<title>Ángel Corral | Contacto</title>
</head>

<body class="containerRespuesta">
    <div>
		<div class="well well-sm"><?php echo $respuesta; ?></div>
		<a href="./index.php" class="aRegresar"> <button class="btn btn-lg btn-primary btn-block btnRegresar">REGRESAR A LA PAGINA PRINCIPAL</button></a>
    </div>
</body>

<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</html>