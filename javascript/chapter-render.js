import mangas from "../fake_database/mangas.json" assert { type: "json" };

var chapterBoxToRender = document.getElementById("chapter-box-to-render");

var manga_reference = JSON.parse(localStorage.getItem("manga-reference"));

if (manga_reference != null) {
    var manga = mangas.filter((x) => x.Id == manga_reference.manga);
    if (manga) {
        var elements = "";

        manga[0].chapters_src.map((a, b) => {
            elements += '<tr manga-id="' + manga_reference.manga + '" chapter-id="' + b + '" redirect-to="reading-page.html"><td>Capítulo ' + ((b + 1) < 9 ? "0" + (b + 1) : (b + 1)) + '</td><td class="verificado"><img src="assets/img/marca-de-verificacao.png" alt="Concluído" ></td><td>223</td><td>1238</td></tr>'
        });
        chapterBoxToRender.innerHTML = elements;
    }
}