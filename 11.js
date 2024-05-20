let bahasa = "jawa";

switch (bahasa){
    case "english":
        translate = "happy birthday!";
        break;
    case "korea":
        translate = "saeng-il chughahaeyo!";
        break;
    case "arab":
        translate = "eid milad!";
        break;
    case "jawa":
        translate = "sugeng tanggap warsa!";
        break;
     default:
        translate = "selamat ulang tahun!";  
}
console.log(translate);