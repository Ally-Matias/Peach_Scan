import mangas from "../fake_database/mangas.json" assert { type: "json" };

// Renderiza os mangas no scroll
mangas.map(function (element, index) {
    let render_stars = "";
    let stars = element.stars;
    for (var i = 0; i < 5; i++) {
        if (stars-- > 0)
            render_stars +=
                '<span style="margin: 1px" class="fa fa-star checked"></span>';
        else render_stars += '<span style="margin: 1px" class="fa fa-star"></span>';
    }
    let categories = " ";
    element.category.map((a) => {
        categories += `<span class="badge badge-primary">${a}</span>`;
    });
    render_stars += `<label>${element.stars}</label>`;

    $("#manga-box-render").append(`
<li>
<div class="card-box">
<div>
<a href="${element.href}" redirect-to="obra.html" manga-id= "${element.Id}">
    <div class="img-efeito">
        <span alt="Capitulo" class="chapters">${element.chapters}</span>
        <img src="${element.src}"alt="${element.name}">
    </div>
</a>
<h3>${element.name}</h3>
<h3>${render_stars}</h3>
<h3>${categories}</h3>
</div>
</div>
</li>
`);
});

// Função para arrastar o scroll
function dragToScrow() {
    let el = document.querySelector("#manga-box-render");
    let x = 0,
        y = 0,
        top = 0,
        left = 0;

    let draggingFunction = (e) => {
        e.preventDefault();
        document.addEventListener("mouseup", (j) => {
            $("#activityDataTable tbody tr").find("td").css("cursor", "pointer");
            document.removeEventListener("mousemove", draggingFunction);
        });
        el.scrollLeft = left - e.pageX + x;
        el.scrollTop = top - e.pageY + y;
    };

    el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        y = e.pageY;
        x = e.pageX;
        top = el.scrollTop;
        left = el.scrollLeft;
        $("#activityDataTable tbody tr").find("td").css("cursor", "grab");
        document.addEventListener("mousemove", draggingFunction);
    });
}
dragToScrow();

var mangasperpage = 20;

var pagesnum = "";
var pagecount = 0;
for (var i = 0; i < mangas.length / mangasperpage; i++) {
    pagecount++;
    pagesnum += `<li class="page-item number ${i == 0 ? "active" : ""
        }"><a class="page-link" href="#">${i}</a></li>`;
}
$("#grid-paginator").append(`
<ul class="pagination">
<li class="page-item">
<a class="page-link skip-left" href="#" aria-label="Previous">
<span aria-hidden="true">&laquo;</span>
<span class="sr-only">Previous</span>
</a>
</li>
${pagesnum}
<li class="page-item">
<a class="page-link skip-right" href="#" aria-label="Next">
<span aria-hidden="true">&raquo;</span>
<span class="sr-only">Next</span>
</a>
</li>
</ul>`);

$("#grid-paginator .number").on("click", (event) => {
    console.log(
        parseInt(event.currentTarget.innerText) * mangasperpage,
        parseInt(event.currentTarget.innerText) * mangasperpage + mangasperpage
    );
    renderManga(
        mangas,
        parseInt(event.currentTarget.innerText) * mangasperpage,
        parseInt(event.currentTarget.innerText) * mangasperpage + mangasperpage
    );
    $("#grid-paginator .page-item").removeClass("active");
    $(event.currentTarget).addClass("active");
});
$("#grid-paginator .skip-left").on("click", () => {
    var temp = parseInt($("#grid-paginator .active")[0].innerText) - 1;
    if (temp > 0) {
        renderManga(
            mangas,
            temp * mangasperpage,
            temp * mangasperpage + mangasperpage
        );
        $(`#grid-paginator .page-item`).removeClass("active");
        $("#grid-paginator .page-item")
            .filter(function () {
                return $(this).text() == temp;
            })
            .addClass("active");
    }
});
$("#grid-paginator .skip-right").on("click", () => {
    var temp = parseInt($("#grid-paginator .active")[0].innerText) + 1;
    if (temp < pagecount) {
        renderManga(
            mangas,
            temp * mangasperpage,
            temp * mangasperpage + mangasperpage
        );
        $(`#grid-paginator .page-item`).removeClass("active");
        $("#grid-paginator .page-item")
            .filter(function () {
                return $(this).text() == temp;
            })
            .addClass("active");
    }
});

renderManga(mangas, 0, mangasperpage);
function renderManga(mg, x, y) {
    $("#manga-filted-box-render").children().remove();
    mg.slice(x, y).map(function (element) {
        let render_stars = "";
        let stars = element.stars;
        for (var i = 0; i < 5; i++) {
            if (stars-- > 0)
                render_stars +=
                    '<span style="margin: 1px" class="fa fa-star checked"></span>';
            else
                render_stars += '<span style="margin: 1px" class="fa fa-star"></span>';
        }
        let categories = " ";
        element.category.map((a) => {
            categories += `<span class="badge badge-primary">${a}</span>`;
        });
        render_stars += `<label>${element.stars}</label>`;
        $("#manga-filted-box-render").append(`
        <div class="card-box">
        <div>
        <a href="${element.href}" redirect-to="obra.html" manga-id="${element.Id}">
            <div class="img-efeito">
                <span alt="Capitulo" class="chapters">${element.chapters}</span>
                <img src="${element.src}"alt="${element.name}">
            </div>
        </a>
        <h3>${element.name}</h3>
        <h3>${render_stars}</h3>
        <h3>${categories}</h3>
        </div>
        </div>
        `);
    });
}
