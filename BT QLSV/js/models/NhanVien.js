function NhanVien(
  _taiKhoan,
  _hoVaTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = this.luongCoBan * 3;
        break;
      case "Trưởng phòng":
        this.tongLuong = this.luongCoBan * 2;
        break;
      case "Nhân viên":
        this.tongLuong = this.luongCoBan * 1;
        break;
      default:
        this.tongLuong = 0;
        break;
    }
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      this.xepLoai = "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai = "Nhân viên khá";
    } else {
      this.xepLoai = "Nhân viên trung bình";
    }
  };
}
