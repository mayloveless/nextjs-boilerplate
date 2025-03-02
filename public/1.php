<?php
  $files = glob('/flag-*.txt');
  if (!$files) {
      echo "no-flag\n";
      exit;
  }
  echo file_get_contents($files[0]);
?>