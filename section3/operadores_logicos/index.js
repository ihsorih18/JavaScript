/*
Operadores Lógicos
&& -> AND 
|| -> OR
! -> NOT
*/
const expressaoAnd = true && true && true && true && true && false;
console.log(expressaoAnd);

const expressaoOr = false || false || true || false || false || false;
console.log(expressaoOr);

const usuario = 'Diego';
const senha = '12345';
const vaiLogar = usuario === 'Diego' && senha === '12345';
if (vaiLogar === true) {
    console.log('Vai entrar');
} else {
    console.log('Não vai entrar');
}

console.log(!false);

/*
FALSY
*false
0
'' "" ``
null / undefined
NaN
*/