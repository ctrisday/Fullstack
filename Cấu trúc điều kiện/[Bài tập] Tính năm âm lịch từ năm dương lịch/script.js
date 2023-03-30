function tinh(){
    // Khai báo
    let input = document.getElementById("nam_Duonglich").value
    let Can = input % 10
    let Chi = input % 12
    let resuilt_Can
    let resuilt_Chi
    
    if (input <= 0 || isNaN(input)) {
        alert('Vui lòng nhập năm')
        return;
    }
    else{
        //Switch case Can
        switch(Can){
            case 0:
                resuilt_Can = "Canh"
                break
            case 1:
                resuilt_Can = "Tân"
                break
            case 2:
                resuilt_Can = "Nhâm"
                break
            case 3:
                resuilt_Can = "Quý"
                break
            case 4:
                resuilt_Can = "Giáp"
                break
            case 5:
                resuilt_Can = "Ất"
                break
            case 6:
                resuilt_Can = "Bính"
                break
            case 7:
                resuilt_Can = "Đinh"
                break
            case 8:
                resuilt_Can = "Mậu"
                break
            case '9':
                resuilt_Can = "Kỷ"
                break
        }

        //Switch case Chi
        switch(Chi){
            case 0:
                resuilt_Chi = "Thân"
                break
            case 1:
                resuilt_Chi = "Dậu"
                break
            case 2:
                resuilt_Chi = "Tuất"
                break
            case 3:
                resuilt_Chi = "Hợi"
                break
            case 4:
                resuilt_Chi = "Tý"
                break
            case 5:
                resuilt_Chi = "Sửu"
                break
            case 6:
                resuilt_Chi = "Dần"
                break
            case 7:
                resuilt_Chi = "Mẹo"
                break
            case 8:
                resuilt_Chi = "Thìn"
                break
            case 9:
                resuilt_Chi = "Tỵ"    
                break
            case 10:
                resuilt_Chi = "Ngọ"
                break
            case 11:
                resuilt_Chi = "Mùi"
                break
        }
    }
    document.getElementById('ketQua').innerHTML = `${resuilt_Can} ${resuilt_Chi}`
}