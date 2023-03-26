function tinhtoan() {
    let chieucao = document.getElementById("chieucao").value;
    let cannang = document.getElementById("cannang").value;
    if (isNaN(chieucao) || isNaN(cannang) || chieucao <= 0 || cannang <= 0) {
        alert('Vui lòng nhập giá trị hợp lệ!');
        return;
    }

    let bmi = cannang / (chieucao * 2);

    document.getElementById("bmi").innerHTML = `BMI của bạn là: ${bmi.toFixed(2)}`;
    if (bmi < 16) {
        document.getElementById('output').innerHTML = "Gầy độ III";
    }
    else if (bmi < 17) {
        document.getElementById('output').innerHTML = "Gầy độ II";
    } 
    else if (bmi < 18.5) {
        document.getElementById('output').innerHTML = "Gầy độ I";
    } 
    else if (bmi < 25) {
        document.getElementById('output').innerHTML = "Bình thường";
    } 
    else if (bmi < 30) {
        document.getElementById('output').innerHTML = "Thừa cân";
    } 
    else if (bmi < 35) {
        document.getElementById('output').innerHTML = "Béo phì độ I";
    } 
    else if (bmi < 40) {
        document.getElementById('output').innerHTML = "Béo phì độ II";
    } 
    else {
        document.getElementById('output').innerHTML = "Béo phì độ III";
    }
}
