var flag = true;
let count = 0;

function button(index){
    var button = document.getElementsByTagName('button')[index];
    button.innerText = flag ? 'X' : 'O';
    button.setAttribute('disabled', 'true');
    flag = !flag;
    count++

    if(count === 9){
        alert('End Game')
        location.reload();
    }

}