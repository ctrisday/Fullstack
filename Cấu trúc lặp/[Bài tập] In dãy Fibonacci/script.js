const number = parseInt(prompt('Nhap so: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}