/* =============== Load video ==================*/
$(".lesson-list").on("click", "a", function () {
  let href = $(this).attr("href");
  let idVideo = href.substring(href.lastIndexOf("=") + 1);
  $.ajax({
    type: "POST",
    url: "controller/ajax/my-course-detail.php",
    data: {
      idVideo,
    },
    success: function (response) {
      let href = response;
      let youtubeId = href.substring(href.lastIndexOf("/") + 1);
      let iframeTag = `<iframe class="video-show" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      $("#video-content").html(iframeTag);
    },
  });
});

// ============== Thêm chương học ==============
$("#themModal").click(function (e) {
  e.preventDefault();
  $("#submitCourse").css("display", "block");
  $("#updateCourse").css("display", "none");
  $("#modal-title").html("Thêm khóa học");
});

$("#submitCourse").click(function (e) {
  e.preventDefault();
  let idKhoaHoc = $("#idKhoaHoc").val();
  let tenChuongHoc = $("#tenChuong").val();
  let themChuong = "themchuong";

  if (tenChuongHoc == "") {
    alert("tên chương học không được để trống");
  } else {
    $.ajax({
      type: "POST",
      url: "controller/ajax/my-course-detail.php",
      data: {idKhoaHoc, tenChuongHoc, themChuong},
      success: function (response) {
        $("#accordion").html(response);
        $("#tenChuong").val("");
      },
    });

    $("#cruCourseModal").modal("hide");
  }
});

// =============Update chương học =================
function suaChuongHoc(idChuong) {
  $("#submitCourse").css("display", "none");
  $("#updateCourse").css("display", "block");
  $("#modal-title").html("Cập nhật khóa học");
  $("#idChuongHoc").val(idChuong);
  let layThongTinChuong = "layThongTinChuong";

  $.ajax({
    type: "POST",
    url: "controller/ajax/my-course-detail.php",
    data: {idChuong, layThongTinChuong},
    success: function (response) {
      $("#tenChuong").val(response);
    },
  });
}

$("#updateCourse").click(function (e) {
  e.preventDefault();
  let idKhoaHoc = $("#idKhoaHoc").val();
  let tenChuongHoc = $("#tenChuong").val();
  let capNhatChuong = "capnhatchuong";
  let idChuong = $("#idChuongHoc").val();

  if (tenChuongHoc == "") {
    alert("tên chương học không được để trống");
  } else {
    $.ajax({
      type: "POST",
      url: "controller/ajax/my-course-detail.php",
      data: {idChuong, idKhoaHoc, tenChuongHoc, capNhatChuong},
      success: function (response) {
        $("#accordion").html(response);
        $("#tenChuong").val("");
        // alert(response);
      },
    });

    $("#cruCourseModal").modal("hide");
  }
});

// ==============Thêm Video =======================
function themVideo(idChuong) {
  $("#idChuong").val(idChuong);
}

$("#submitVideo").click(function (e) {
  e.preventDefault();
  let idKhoaHoc = $("#idKhoaHoc").val();
  let idGiangVien = $("#idGiangVien").val();
  let idChuong = $("#idChuong").val();
  let tenVideo = $("#tenVideo").val();
  let link = $("#link").val();

  if (tenVideo == "" || link == "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    $.ajax({
      type: "POST",
      url: "controller/ajax/my-course-detail.php",
      data: {idKhoaHoc, idGiangVien, idChuong, tenVideo, link},
      success: function (response) {
        $("#" + idChuong).html(response);

        $("#tenVideo").val("");
        $("#link").val("");
      },
    });

    $("#cruVideoModal").modal("hide");
  }
});
