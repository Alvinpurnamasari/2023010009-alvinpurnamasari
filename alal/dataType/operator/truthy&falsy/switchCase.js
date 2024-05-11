let language = "french";
let greeting = null;

switch (language){
    case "english":
        greeting = "good morning!";
        break;
    case "french":
        greeting = "bonjour!";
        break;
    case "japanes":
        greeting = "gozamaisu!";
        break;
     default:
        greeting = "selamat pagi!";  
}
console.log(greeting);