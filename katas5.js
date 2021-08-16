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

function testMinimumValue1(){
    result = minimumValue([-55,0,1,2,5,88,45])
    expected = -55
    console.assert(result===expected, `esperado ${expected}, obtido ${result}}`)
}

function testMinimumValue2(){
    result = minimumValue([45,89,75,12,94,35])
    expected = 12
    console.assert(result===expected, `esperado ${expected}, obtido ${result}}`)
}

const minimumValue = (arr) =>{
    let min = Math.min(...arr)
    return min
}
testMinimumValue1()
testMinimumValue2()

function testMaximumValue1(){
    result = maximumValue([-55,0,1,2,5,88,45])
    expected = 88
    console.assert(result===expected, `esperado ${expected}, obtido ${result}}`)
}

function testMaximumValue2(){
    result = maximumValue([-45,-89,-75,-12,-94,-35])
    expected = -12
    console.assert(result===expected, `esperado ${expected}, obtido ${result}}`)
}

const maximumValue = (arr) =>{
    let max = Math.max(...arr)
    return max
}
testMaximumValue1()
testMaximumValue2()