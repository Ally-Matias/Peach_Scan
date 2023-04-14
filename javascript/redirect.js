
var iframe = document.getElementById("iframe")
const links = document.querySelectorAll("[redirect-to]")

//este evento dá um reload no iframe para que ele possa atualizar a altura dele e ocultar a barra de scroll, pois quando se altera a largura da página o elemento que está dentro do iframe alterar a sua altura devido a responsividade
window.addEventListener("resize", function () {
    if (iframe) {
        iframe.contentWindow.location.reload();
    }
});

if (iframe) {
//toda vez que o iframe carrega este evento atualiza a altura do iframe e adiciona um evento de click de redirecionamento para todos os link da página dentro do iframe
    iframe.addEventListener('load', e => {
        let altura = iframe.contentWindow.document.documentElement.getBoundingClientRect().height + 50
        iframe.style.height = altura + "px"

        let linksIframe = iframe.contentWindow.document.querySelectorAll("[redirect-to]")
        applyRedirect(linksIframe)

    })
}

//a variável links contém todos os links que estão fora do iframe
applyRedirect(links)

//esta função adiciona um evento de click para mudar valor de src do iframe para em todos os link que tem o atributo redirect-to, ao clicar no link valor do atributo redirect-to para o atributo src do iframe  
function applyRedirect(links) {
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault()
    
            const url = this.getAttribute("redirect-to")
            const srcIframe = iframe.contentWindow.location.pathname.split('/').pop();
            
            if (url !== srcIframe) {
                iframe.classList.remove("carregado")
                iframe.classList.add("saindo")
                setTimeout(function () {
                    iframe.src = url
                    iframe.classList.add("carregado")
                    iframe.classList.remove("saindo")
                }, 500)
            }
    
        })
    })
}
