<?php
  function layTenGiangVien($idGiangVien){
    $sql = "select ho_ten from giang_vien where id=".$idGiangVien;
    return find($sql);
  }
  function getLecture(){
    $sql = "select tai_khoan from giang_vien";
    $res = findMultiple($sql);
    return $res;
  }
  function lectureSignUp($uname, $pwd, $email, $fname, $lname){
    $sql = "insert into giang_vien(tai_khoan, mat_khau, email, ho_ten) values('$uname','$pwd','$email','$fname $lname')";
    execSQL($sql,0);
  }
?>