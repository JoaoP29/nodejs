let data = new Date();

let horas = data.getHours();
let min = data.getMinutes();

let saudacao;

if(horas < 11){
    saudacao = 'Bom dia!';
} else if (horas <= 17) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Boa noite!';
}

console.log(saudacao + " São exatamente: " + horas + ":" + min)