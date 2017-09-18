<?php

  require('./../../../wp-load.php');
  global $wpdb;

  $posts = $wpdb->get_results("SELECT * FROM $wpdb->posts WHERE post_title LIKE '".$_POST['name']."'");
  echo $posts[0]->ID;
?>