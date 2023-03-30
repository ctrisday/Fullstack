function tinhNgay(){
    var input = parseInt(document.getElementById("nhapThang").value)
    if(input > 12){
        alert("Không hợp lệ !")
        return
    }
    else{
        switch(input){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("ketqua").innerHTML = `Tháng ${input} có 31 ngày`
                break
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("ketqua").innerHTML = `Tháng ${input} có 30 ngày`
                break
            default:
                document.getElementById("ketqua").innerHTML =  'Tháng 2 có 28 hoặc 29 ngày'
        }
    }
}