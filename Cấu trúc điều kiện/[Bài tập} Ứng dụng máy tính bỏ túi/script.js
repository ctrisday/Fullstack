let x1 = ''
let x2 = ''
let pheptinh

function button(btn) {
    const giatriNhan = btn.innerText
    const ketqua_Input = document.getElementById("ketqua_Input")
    if(isNaN(giatriNhan)){
        if(giatriNhan == 'C'){
            x1 = ""
            x2 = ""
            pheptinh = undefined
            ketqua_Input.value = " "
            return
        }
        if(giatriNhan == "="){
            const ketqua = perform(x1, x2, pheptinh)
            ketqua_Input.value = ketqua
            x1 = ''
            x2= ''
            pheptinh = undefined
        }
        else{
            pheptinh = giatriNhan
        }
    }
    else{
        if(pheptinh){
            x2 += giatriNhan
            ketqua_Input.value = x2
        }
        else{
            x1 += giatriNhan
            ketqua_Input.value = x1
        }
    }
}

function perform(x_1, x_2, calc){
    x_1 = Number(x_1)
    x_2 = Number(x_2)

    switch(calc){
        case '+':
            return x_1 + x_2
            break
        case '-':
            return x_1 - x_2
            break
        case 'x':
            return x_1 * x_2
            break
        case '/':
            return x_1 / x_2
            break
    
        }
}