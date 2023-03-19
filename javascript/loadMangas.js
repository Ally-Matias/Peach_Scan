import mangas from "../fake_database/mangas.json" assert {type: 'json'};

mangas.map(function (element, index) {
let render_stars = "";
let stars = element.stars
for(var i = 0; i < 5; i++){
    if(stars-- > 0)
        render_stars += '<span style="margin: 1px" class="fa fa-star checked"></span>'
    else
        render_stars += '<span style="margin: 1px" class="fa fa-star"></span>'
}
let categorys = " ";
element.category.map((a) => {
    categorys += `<span class="badge badge-primary">${a}</span>`
}) 
render_stars += `<label>${element.stars}</label>`
$("#manga-box-render").append(`
<li>
<div class="card-box">
<div>
<a href="${element.href}">
    <div class="img-efeito">
        <span alt="Capitulo" class="chapters">${element.chapters}</span>
        <img src="${element.src}"alt="${element.name}">
    </div>
</a>
<h3>${element.name}</h3>
<h3>${render_stars}</h3>
<h3>${categorys}</h3>
</div>
</div>
</li>
`)
})

mangas.map(function (element, index) {
    let render_stars = "";
    let stars = element.stars
    for(var i = 0; i < 5; i++){
        if(stars-- > 0)
            render_stars += '<span style="margin: 1px" class="fa fa-star checked"></span>'
        else
            render_stars += '<span style="margin: 1px" class="fa fa-star"></span>'
    }
    let categorys = " ";
    element.category.map((a) => {
        categorys += `<span class="badge badge-primary">${a}</span>`
    }) 
    render_stars += `<label>${element.stars}</label>`
    $("#manga-filted-box-render").append(`
    <li>
    <div class="card-box">
    <div>
    <a href="${element.href}">
        <div class="img-efeito">
            <span alt="Capitulo" class="chapters">${element.chapters}</span>
            <img src="${element.src}"alt="${element.name}">
        </div>
    </a>
    <h3>${element.name}</h3>
    <h3>${render_stars}</h3>
    <h3>${categorys}</h3>
    </div>
    </div>
    </li>
    `)
    })