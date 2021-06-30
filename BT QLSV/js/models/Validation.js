function Validation() {
  this.kiemTraRong = function (input, divId, mess) {
    if (input === "") {
      // show thông báo
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
    getEle(divId).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiKyTu = function (input, divId, mess, min, max) {
    if (input.trim().length >= min && input.trim().length <= max) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraSo = function (input, divId, mess) {
    var number = /^[0-9]+$/;
    if (number.test(input)) {
      //Đúng
      getEle(divId).innerHTML = "";
      return true;
    }
    //Sai
    getEle(divId).innerHTML = mess;
    return false;

  };

  this.kiemTraKyTu = function (input, divId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (input.match(letter)) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (input, divId, mess) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(email)) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraMatKhau = function (input, divId, mess) {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (input.match(password)) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraChucVu = function (idSelect, divId, mess) {
    if (getEle(idSelect).selectedIndex !== 0) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraLuongCoBan = function (input, divId, mess) {
    if (input >= 1000000 && input <= 20000000) {
      // show thông báo
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraGioLam = function (input, divId, mess) {
    if (input >= 80 && input <= 200) {
      // show thông báo
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  this.kiemTraTaiKhoanTrung = function (input, divId, mess, list) {
    var status = true;
    for (var i = 0; i < list.length; i++) {
      if (list[i].taiKhoan === input) {
        status = false;
        break;
      }
    }
    if (status) {
      getEle(divId).innerHTML = "";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
}

