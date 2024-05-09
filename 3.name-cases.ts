let personName :string = '';

personName = prompt('') || '';

let lowercase :string =personName.toLowerCase() ;
let upperCase :string =personName.toUpperCase() ;
let tittleCase :string =personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here are yor name in:
    lowerCase: ${lowercase}
    UpperCase: ${upperCase}
    TittleCase: ${tittleCase}`)
}
else{
    alert('Please fill Your Name !')
}