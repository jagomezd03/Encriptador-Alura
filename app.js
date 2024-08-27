encriptButton = document.querySelector('#enc')
desencriptButton = document.querySelector('#desenc')
textoResultado = document.querySelector('#res')
textoEntrada = document.querySelector('#text1')
copy = document.querySelector('#copy')

function showText(texto){
    textoResultado.innerHTML = `
    ${texto}
    `;
}

function vowel(vowel){
    const arrange=["a", "e", "i", "o", "u"]
    return arrange.includes(vowel.toLowerCase());
}

function encriptVowel(a){
    switch (a) {
        case 'a':
            a="ai"
            return a
        case 'A':
            a="Ai"
            return a
        case 'e':
            a="enter"
            return a
        case 'E':
            a="Enter"
            return a
        case 'o':
            a="ober"
            return a
        case 'O':
            a="Ober"
            return a
        case 'i':
            a="imes"
            return a
        case 'I':
            a="Imes"
            return a
        case 'u':
            a="ufat"
            return a
        case 'U':
            a="Ufat"
            return a
        default:
            break;
    }
}

function desencriptVowel(a){
    switch (a) {
        case 'a':
            sp=2
            return sp
        case 'A':
            sp=2
            return sp
        case 'e':
            sp=5
            return sp
        case 'E':
            sp=5
            return sp
        case 'o':
            sp=4
            return sp
        case 'O':
            sp=4
            return sp
        case 'i':
            sp=4
            return sp
        case 'I':
            sp=4
            return sp
        case 'u':
            sp=4
            return sp
        case 'U':
            sp=4
            return sp
        default:
            break;
    }
}

function encriptar(texto){
    let textoEncr=[]
    for(i=0;i<texto.length;i++){
        if(vowel(texto[i])){
            let q = encriptVowel(texto[i])
            textoEncr.push(q)
        }else{
            textoEncr.push(texto[i])
        }
    }
    textoEncr=textoEncr.join('')
    return showText(textoEncr)
}

function desencriptar(texto){
    let textoDesenc =[]
    for(i=0;i<texto.length;i++){
        if(vowel(texto[i])){
            let q = desencriptVowel(texto[i])
            textoDesenc.push(texto[i])
            i=i+q
        }else{
            textoDesenc.push(texto[i])
        }
    }
    textoDesenc=textoDesenc.join('')
    return showText(textoDesenc)
}

encriptButton.addEventListener("click", async (target) => {
    try {
        let ident = textoEntrada.value
        await encriptar(ident)
    } catch (error) {
        console.log(error)
    }
})

desencriptButton.addEventListener("click", async (target) => {
    try {
        let ident = textoEntrada.value
        await desencriptar(ident)
    } catch (error) {
        console.log(error)
    }
})

copy.addEventListener("click", function() {
    navigator.clipboard.writeText(textoResultado.value)
})