
<?php
if(isset($_GET['numid'])){


  $imgURLid = 'https://' . $_GET['numid'] . '.gif';
  $playerURL = 'https://' . $_GET['numid'];
  
  echo '<meta property="og:url" content="'. $imgURLid .'">';
  echo '<meta property="og:image" content="'. $imgURLid .'">';

  echo '<meta name="twitter:image" content="'. $imgURLid .'">';
  echo '<meta name="og:image" content="'. $imgURLid .'">';
  echo '<meta name="image" property="og:image" content="'. $imgURLid .'">';
  
  echo '<meta name="twitter:player" content="'. $playerURL .'">';

  ?>

   <meta name="twitter:card" content="player">
    <meta name="twitter:site" content="@">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:player:width" content="480">
    <meta name="twitter:player:height" content="480">
  
  <?php
}else{
  $imgURLid = 'https://';


  echo '<meta property="og:url" content="'. $imgURLid .'">';
  echo '<meta property="og:image" content="'. $imgURLid .'">';

  echo '<meta name="twitter:image" content="'. $imgURLid .'">';
  echo '<meta name="og:image" content="'. $imgURLid .'">';
  echo '<meta name="image" property="og:image" content="'. $imgURLid .'">';
}

?>

