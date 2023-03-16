var BanKinh = prompt('Nhap ban kinh');
if (isNaN(BanKinh)) {
  alert('Ban kinh phai la mot so!');
} else {
  BanKinh = parseInt(BanKinh);
  var DuongKinh = BanKinh*2;
  var ChuVi = 2*Math.PI*BanKinh;
  var DienTich = Math.pow(BanKinh,2)*Math.PI;
  document.write(`Duong kinh la ${DuongKinh}\n`);
  document.write(`Chu vi la ${ChuVi.toFixed(2)}\n`);
  document.write(`Dien tich la ${DienTich.toFixed(2)}`);
}
