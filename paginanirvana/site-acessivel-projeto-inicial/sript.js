document. addEventListener ('DOMContentLoaded', function() {
    const aumentaFonteBotao = this. getElementByld('aumenta-fonte');
    const diminuiFonteBotao = this. getElementById('diminuirfonte');

    let tamanhoAtualdaFonte = 1;

    aumentaFonteBotao.addEventListener('click',function () {
        tamanhoAtualdaFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click',function () {
        tamanhoAtualdaFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`

    

})

})