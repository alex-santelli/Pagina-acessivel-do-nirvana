document. addEventListener ('DOMContentLoaded', function () {
    const aumentaFonteBotao = document. getElementByld('aumenta-fonte');
    const diminuiFonteBotao = document. getElementByld('diminui-fonte');

    let tamanhoAtualFonte= 1;

    aumentaFonteBotao. addEventListener('click', Function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao. addEventListener('click', Function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
   
})