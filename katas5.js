// implemente aqui as funções de teste
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 function testeReverseString2() {
    let result = reverseString("1 2 3");
    let expected = "3 2 1";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const reverseString = (string) =>{
    let output = string.split('').reverse().join('')
    return output
 }

 testeReverseString1()
 testeReverseString2()

 function testReverseSentence1(){
     let result = reverseSentence('Eu sou Guilhermino')
     let expected = ('Guilhermino sou Eu')
     console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
 }

 function testReverseSentence2(){
    let result = reverseSentence('I <3 Kenzie')
    let expected = ('Kenzie <3 I')
    console.assert(result === expected, `esperado ${expected}, obtido: ${result}`)
}

const reverseSentence = (str) =>{
    let output = str.split(' ').reverse().join(' ')
    return output
}
testReverseSentence1()
testReverseSentence2()