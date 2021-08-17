const reverseString = (string) =>{
    let output = string.split('').reverse().join('')
    return output
 }

 
const reverseSentence = (str) =>{
    let output = str.split(' ').reverse().join(' ')
    return output
}

const minimumValue = (arr) =>{
    let min = Math.min(...arr)
    return min
}

const maximumValue = (arr) =>{
    let max = Math.max(...arr)
    return max
}


const calculateRemainder = (num,divisor) =>{
    let remainder = num % divisor
    return remainder
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

 const evaluateExpression = (str,obj) => {
     let result = 0 
     for (key in obj){
         str = str.replaceAll(String(key),obj[key]);
     }
    str = str.split(' ')

    while (str.includes('*')){
        let index = str.indexOf('*')
        let mult = Number(str[index-1])*Number(str[index+1])
        str.splice(index-1,3,mult)
    }

    while (str.includes('/')){
        let index = str.indexOf('/')
        let div = Number(str[index-1]) / Number(str[index+1])
        str.splice(index-1,3,div)
    }

    while (str.includes('-')){
        let index = str.indexOf('-')
        let minus = Number(str[index-1]) - Number(str[index+1])
        str.splice(index-1,3,minus)
    }  
    
    while (str.includes('+')){
        let index = str.indexOf('+')
        let sum = Number(str[index-1]) + Number(str[index+1])
        str.splice(index-1,3,sum)
    }
    return str[0]
 }
