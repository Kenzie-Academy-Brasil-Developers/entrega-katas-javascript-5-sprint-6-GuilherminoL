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

function testCalculateRemainder1(){
    result = calculateRemainder(3,2)
    expected = 1
    console.assert(result===expected, `esperado ${expected}, obtido ${result}`)
}
function testCalculateRemainder2(){
    result = calculateRemainder(4,5)
    expected = 4
    console.assert(result===expected, `esperado ${expected}, obtido ${result}`)
}

const calculateRemainder = (num,divisor) =>{
    let remainder = num % divisor
    return remainder
}
testCalculateRemainder1()
testCalculateRemainder2()

function testDistinctValues1() {
    let result = distinctValues('0 0 0 1 2 3 3 4 5 6 5 5')
    let expected = '0 1 2 3 4 5 6'
    let control = true
    for (index of expected){
        if (expected[index] !== result[index]){
            control = false
        }
    }
    console.assert(expected===result, `esperado: ${expected} recebido: ${result}`)
}
function testDistinctValues2() {
    let result = distinctValues('9 9 4 5 5 3 6 9 8')
    let expected = '3 4 5 6 8 9'
    let control = true
    for (index of expected){
        if (expected[index] !== result[index]){
            control = false
        }
    }
    console.assert(expected===result, `esperado: ${expected} recebido: ${result}`)
}
const distinctValues = (str) =>{
    let obj = {}
    str = str.split(' ')
    str.map(element =>{
        
        if(!obj[element]){
            obj[element] = 0
        }
    })
    
    let output = Object.keys(obj)
    return output.join(' ')
}
testDistinctValues1()
testDistinctValues2()

function testCountValues1(){
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = '1(3) 3(3) 5(2) 7(1)'
    console.assert(result === expected, `esperado:${expected} recebido: ${result}`)
}

function testCountValues2(){
    let result = countValues("0 5 5 6 4 2 9 7 7 4 6")
    let expected = '0(1) 2(1) 4(2) 5(2) 6(2) 7(2) 9(1)'
    console.assert(result === expected, `esperado:${expected} recebido: ${result}`)
}

const countValues = (str) => {
    let numbers  = str.split(' ')
    let obj = {}
    let output = []
    numbers.map(element =>{
        
        if(!obj[element]){
            obj[element] = 1
        }
        else{
            obj[element]++
        }
    })
    for(key in obj){
        output.push(`${key}(${obj[key]})`)
    }
    return output.join(' ')
}
testCountValues1()
testCountValues2()