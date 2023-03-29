const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

function ScrollTop(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    const Topo = document.querySelector(href);

    Topo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

linkInterno.addEventListener('click', ScrollTop);
