let language = "korea";
let greeting = null;

switch (language){
    case "english":
        greeting = "happy birthday!";
        break;
    case "indonesia":
        greeting = "selamat ulang tahun!";
        break;
    case "jepang":
        greeting = "otanjobiomedeto!";
        break;
    case "korea":
        greeting = "saeng-il chughahaeyo!";
        break;
    case "italia":
        greeting = "buon compleanno!";
        break;
    case "arab":
        greeting = "eid milad!";
        break;
    case "jawa":
        greeting = "sugeng tanggap warsa!";
        break;
     default:
        greeting = "selamat ulangtahun!";  
}
console.log(greeting);