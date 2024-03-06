//               Sheikh Jibran Ahmed               \\
  
// Array   Sytax []

/*Array is a data structure in which we store multiple values at a time
and their elemet is accessing by pass their index number*/
// e.g. 
let AsiaCountries:string[]= ['Pakistan', 'India', 'China', 'Afganistan', 'Bangladesh']
console.log(AsiaCountries)

// get value individually from array by giving their index value
console.log(AsiaCountries[2] + ' is a well developed country of Asia')
console.log(AsiaCountries[0] + 'is a Islamic country')

// update elemet of an array 
console.log(AsiaCountries)
AsiaCountries[3] = 'Saudi Arabia'
AsiaCountries[4] = 'Russia'
console.log(AsiaCountries)

//we store any types of datatype in an array such as:
let multipleDataTypes:any[]= [ 786, true, {}, [], 'Abdul Moiz Lakhani', undefined, null]
console.log(multipleDataTypes[4] + ' is so work hard man')

//we also push array in array known as 'nested array' [[]]
let nestedArray:[string, string[]] = ['Sir Kamran Khan Tessori', ['Work hard', 'Honourable']]
console.log(nestedArray[0] + ' is so '+ nestedArray[1][0] + ' man ')
