function buttonPlay(){
    //Vòng lặp duyệt số
    while (true) {
        var input = parseInt(prompt("Nhập khoảng muốn đoán:"));
        var doan = parseInt(prompt("Nhập số bạn đoán:"));
        var random = Math.floor(Math.random() * (input + 1));
        var i = 3;
        if (isNaN(input) || isNaN(doan)) {
            alert("Bạn đã nhập chữ, hãy nhập lại!");
            continue;
        } 
        else {
            break;
        }
    }
    
    do{
        if(doan == random){
            alert('Chúc mừng bạn đã đoán đúng');
            break;
        }
        else{
            alert(`Bạn đoán sai rồi. Bạn còn ${i} lần thử lại`);
            doan = parseInt(prompt("Nhập số bạn đoán:"));
            i--;
        }
    }while(i > 0)
}
