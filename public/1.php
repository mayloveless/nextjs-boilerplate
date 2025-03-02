<?php
  foreach (glob("/flag-*.txt") as $filename) {
   echo $filename . "\n";
  }
?>