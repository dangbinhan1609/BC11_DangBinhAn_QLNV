function DanhSachNhanVien() {
  this.list = [];

  this.themNhanVien = function (nv) {
    this.list.push(nv);
  };

  this.timViTri = function (taiKhoan) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.xoaNhanVien = function (taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.suaNhanVien = function (taiKhoan) {
    var index = this.timViTri(taiKhoan);
    if (index !== -1) {
      return this.list[index];
    }
    return null;
  };
  this.capNhatNhanVien = function (nhanVien) {
    var index = this.timViTri(nhanVien.taiKhoan);
    if (index !== -1) {
      this.list[index] = nhanVien;
    }
  };
  // this.timNhanVien = function (keyword) {

  // };
}

/**
 * 
 * Bấm đầy đủ : Trung bình hoặc Khá hoặc Giỏi hoặc Xuất Sắc sẽ hiện KQ
 */
DanhSachNhanVien.prototype.timKiemNhanVien = function (keyword) {
  var mangTimKiem = [];
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].xepLoai.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
      mangTimKiem.push(this.list[i]);
    }
  }
  return mangTimKiem;
};
