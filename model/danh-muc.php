<?php
  function loadDanhMuc(){
    $sql = "SELECT * FROM danh_muc";
    return findMultiple($sql);
  }
?>