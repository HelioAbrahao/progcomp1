// função que será chamada no html
function calcular(){
    // recupera o valor da ação social digitada
    let soma = 0;
    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    let caracterizacaoeanimacao = Number(document.getElementById("caracterizacaoeanimacao").value);
    caracterizacaoeanimacao
    let audiovisual = Number(document.getElementById("registroaudiovisual").value);
    let atividadesrecreativas = Number(document.getElementById("atividadesrecreativas").value);
    let arroz5kg = Number(document.getElementById("arroz5kg").value);
    let arroz1kg = Number(document.getElementById("arroz1kg").value);
    let feijao2kg = Number(document.getElementById("feijao2kg").value);
    let feijao1kg = Number(document.getElementById("feijao1kg").value);
    let macarrao500gramas = Number(document.getElementById("macarrao500gramas").value);
    let oleo900ml = Number(document.getElementById("oleo900ml").value);
    let homenagem = Number(document.getElementById("homenagem").value);
    let mascote = Number(document.getElementById("mascote").value);
    let leite = Number(document.getElementById("leite").value);
    let doacoesdesangue = Number(document.getElementById("doacaodesangue").value);
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
    let equipe = document.getElementById("equipe").value;
    
    let pontosKitSupl = 0; // Guarda pontuação de kit
    if(equipe == "Laranja"){
        // equipe é laranja
        if(kit >= 97 && suplemento >= 49){
            pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if(kit >= 78 && suplemento >= 39){
            pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if(kit >= 49 && suplemento >= 25){
            pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if(kit >= 19 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15); 
        }
    } else if(equipe == "Preto"){
        if(kit >= 103 && suplemento >= 52){
            pontosKitSupl = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if(kit >= 82 && suplemento >= 42){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if(kit >= 52 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if(kit >= 21 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15); 
        } 
    } else if(equipe == "Roxo"){
        if(kit >= 102 && suplemento >= 51){
            pontosKitSupl = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if(kit >= 82 && suplemento >= 41){
            pontosKitSupl = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if(kit >= 51 && suplemento >= 26){
            pontosKitSupl = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if(kit >= 20 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15); 
        } 
    } else if(equipe == "Verde"){
        if(kit >= 88 && suplemento >= 44){
            pontosKitSupl = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if(kit >= 70 && suplemento >= 35){
            pontosKitSupl = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if(kit >= 44 && suplemento >= 22){
            pontosKitSupl = 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if(kit >= 18 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15); 
        } 
    } else if(equipe == "Vermelha"){
        if(kit >= 93 && suplemento >= 47){
            pontosKitSupl = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if(kit >= 74 && suplemento >= 38){
            pontosKitSupl = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if(kit >= 47 && suplemento >= 24){
            pontosKitSupl = 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if(kit >= 19 && suplemento >= 9){
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15); 
        } 
    }
    
    let pontosDoacaodeSangue = 0;
    if(equipe == "Laranja"){
        if(doacoesdesangue >= 49){
            pontosDoacaodeSangue = 2500 + ((doacoesdesangue - 49) * 20);
        } else if(doacoesdesangue < 49){
            pontosDoacaodeSangue += (doacoesdesangue * 20);
        }
    } else if(equipe == "Preto"){
        if(doacoesdesangue >= 52){
            pontosDoacaodeSangue = 2500 + ((doacoesdesangue - 52) * 20);
        } else if(doacoesdesangue < 52){
            pontosDoacaodeSangue += (doacoesdesangue * 20);
        } // pontosDoacaodeSangue = pontosDoacaodeSangue + (doacoesdesangue * 20)
    } else if(equipe == "Roxo"){
        if(doacoesdesangue >= 51){
            pontosDoacaodeSangue = 2500 + ((doacoesdesangue - 51) * 20);
        } else if(doacoesdesangue < 51){
            pontosDoacaodeSangue += (doacoesdesangue * 20);
        }
    } else if(equipe == "Verde"){
        if(doacoesdesangue >= 44){
            pontosDoacaodeSangue = 2500 + ((doacoesdesangue - 44) * 20);
        } else if(doacoesdesangue < 44){
            pontosDoacaodeSangue += (doacoesdesangue * 20);
        }
    } else if(equipe == "Vermelha"){
        if(doacoesdesangue >= 47){
            pontosDoacaodeSangue = 2500 + ((doacoesdesangue - 47) * 20);
        } else if(doacoesdesangue < 47){
            pontosDoacaodeSangue += (doacoesdesangue * 20);
        }
    }

    soma = soma + acaoSocial + homenagem + (leite * 2) + pontosKitSupl + pontosDoacaodeSangue + mascote + caracterizacaoeanimacao + atividadesrecreativas + arroz5kg * 5 + arroz1kg + feijao2kg * 2 + feijao1kg + macarrao500gramas * 0.5 + oleo900ml + audiovisual;

    document.getElementById("soma").innerHTML = soma.toFixed(2);
}

