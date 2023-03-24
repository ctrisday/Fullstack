function tinhdiem(){
    var Toan = parseInt(document.getElementById('diemToan').value)
    var Van = parseInt(document.getElementById('diemVan').value)
    var Anh = parseInt(document.getElementById('diemAnh').value)
    var select = document.getElementById('options').value
    var diemCong;
    switch(select){
        case 'KV1':
            diemCong = 0.75
            break
        case 'KV2-NT':
            diemCong = 0.5
            break
        case 'KV2':
            diemCong = 0.25
            break
        case 'KV3':
            diemCong = 0
            break
    }
    var ketqua = Toan + Van + Anh + diemCong;
    document.getElementById("ketqua").innerHTML = "Tổng điểm ĐH khối D của bạn là: " + ketqua;
}