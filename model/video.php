<?php
  function loadVideoTheoChuongHoc($idChuong){
    $sql = "SELECT * FROM video WHERE id_chuong = '$idChuong'";
    return findMultiple($sql);
  }

  function loadChiTietVideo($idVideo){
    $sql = "SELECT * FROM video WHERE id = '$idVideo'";
    return find($sql);
  }

  function loadVideoGioiThieu($idKhoaHoc){
    $sql = "SELECT * FROM video WHERE id_khoa_hoc='$idKhoaHoc'";
    // $sql.= " LIMIT 1";
    return find($sql);
  }

  function themVideo($tenVideo,$link,$idKhoaHoc,$idGiangVien,$idChuong){
    $sql = "INSERT INTO video(ten_video,link,id_khoa_hoc,id_tac_gia,id_chuong) VALUES('$tenVideo','$link','$idKhoaHoc','$idGiangVien','$idChuong')";
    execSQL($sql,0);
  }

  function capNhatVideo($idVideo,$tenVideo,$link){
    $sql = "UPDATE video SET ten_video = '$tenVideo', link = '$link' WHERE id='$idVideo'";
    execSQL($sql,1);
  }

  function xoaVideo($idVideo){
    $sql = "DELETE FROM video WHERE id='$idVideo'";
    execSQL($sql,0);
  }
?>