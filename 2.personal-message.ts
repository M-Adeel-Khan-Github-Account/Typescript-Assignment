let personName :string = '';

 personName = prompt('What is your Name?') || '';

 if(personName !== null && personName ! == '' ){
    alert(`Hello Eric ${personName}, would you like to learn some Python today?`)
}
else{
    alert('You have to fill your name !')
}