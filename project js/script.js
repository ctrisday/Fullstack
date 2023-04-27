class NhanVien {
  constructor(hoTen, soDienThoai, tuoi) {
    this.hoTen = hoTen;
    this.soDienThoai = soDienThoai;
    this.tuoi = tuoi;
  }
}

class QuanLyNhanVien {
  constructor() {
    this.danhSachNhanVien = [];
  }

  themNhanVien(nhanVien) {
    this.danhSachNhanVien.push(nhanVien);
  }

  xoaNhanVien(index) {
    this.danhSachNhanVien.splice(index, 1);
  }

  timKiemNhanVien(tuKhoa) {
    return this.danhSachNhanVien.filter((nhanVien) =>
      nhanVien.hoTen.toLowerCase().includes(tuKhoa.toLowerCase())
    );
  }

  layDanhSachNhanVien() {
    return this.danhSachNhanVien;
  }
}

const quanLyNhanVien = new QuanLyNhanVien();

function themNhanVien() {
  const hoTen = document.getElementById("hoten").value;
  const soDienThoai = document.getElementById("sodienthoai").value;
  const tuoi = document.getElementById("tuoi").value;

  if (!hoTen || !soDienThoai || !tuoi) {
    alert("Vui lòng nhập đủ thông tin!");
    return;
  }

  const nhanVien = new NhanVien(hoTen, soDienThoai, tuoi);
  quanLyNhanVien.themNhanVien(nhanVien);
  hienThiDanhSachNhanVien();
  clearForm();
}

function clearForm() {
  document.getElementById("form-nhanvien").reset();
}

function hienThiDanhSachNhanVien() {
  const danhSachNhanVien = quanLyNhanVien.layDanhSachNhanVien();
  const ul = document.getElementById("danh-sach");
  ul.innerHTML = "";
  danhSachNhanVien.forEach((nhanVien, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${nhanVien.hoTen} | Số điện thoại: ${nhanVien.soDienThoai} | Tuổi: ${nhanVien.tuoi} <button onclick="xoaNhanVien(${index})">Xoá</button>`;
    ul.appendChild(li);
  });
}

function xoaNhanVien(index) {
  quanLyNhanVien.xoaNhanVien(index);
  hienThiDanhSachNhanVien();
}

function timKiemNhanVien() {
  const tuKhoa = document.getElementById("tim-kiem").value;
  const ketQua = quanLyNhanVien.timKiemNhanVien(tuKhoa);
  const ul = document.getElementById("danh-sach");
  ul.innerHTML = "";
  ketQua.forEach((nhanVien) => {
    const li = document.createElement("li");
    li.innerText = `${nhanVien.hoTen} - ${nhanVien.soDienThoai} - ${nhanVien.tuoi}`;
    ul.appendChild(li);
  });
}
