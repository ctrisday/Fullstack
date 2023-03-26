function ChuyenDoiTien(){
    let amount = document.getElementById("soTien").value
    let fromCurrency = document.getElementById("doitien").value
    let toCurrency = document.getElementById("doitien1").value
    let resuilt
    if(amount <= 0){
        alert('Vui lòng nhập số tiền cần đổi')
        return
    }
    else if(fromCurrency == toCurrency){
        alert("Vui lòng chọn đơn vị chuyển đổi tiền tệ khác nhau")
    }
    else if(fromCurrency == 0 && toCurrency == 1){
        resuilt =  amount * 0.000043
    }
    else if(fromCurrency == 0 && toCurrency == 2){
        resuilt =  amount * 0.00029
    }
    else if(fromCurrency == 1 && toCurrency == 0){
        resuilt =  amount * 23.525
    }
    else if(fromCurrency == 1 && toCurrency == 2){
        resuilt =  amount * 6.87
    }
    else if(fromCurrency == 2 && toCurrency == 0){
        resuilt =  amount * 3.425
    }
    else if(fromCurrency == 2 && toCurrency == 1){
        resuilt =  amount * 0.15
    }
    document.getElementById('resuilt').innerHTML = `Resuilt: ${resuilt}`
}