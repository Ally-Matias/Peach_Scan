import mangas from "../fake_database/mangas.json" assert { type: "json" };

var manga_reference = JSON.parse(localStorage.getItem("manga-reference"));

var reading_content = document.getElementById('box-reading-content');
console.log(manga_reference)
if (manga_reference) {
    var buttonNext = document.getElementById('button-next');
    var buttonPrevious = document.getElementById('button-previous');
    var manga = mangas.filter(x => x.Id == manga_reference.manga)
    document.getElementById('heading-page-manga-title').innerHTML = manga[0].name
    if ((manga_reference.chapter).toString() && manga[0].chapters_src[manga_reference.chapter]) {
        var temp = '';
        manga[0].chapters_src[manga_reference.chapter].map((a, b) => {
            temp += `<div class="page-break no-gaps">
<img id="image-${b}"
src="${a}" class="wp-manga-chapter-img">
</div>`
        })
        reading_content.innerHTML = temp;
        var selectBox = document.getElementById('select-box')
        selectBox.addEventListener("change", (event) => {
            var temp = {
                manga: manga_reference.manga,
                chapter: event.target.value,
            }
            localStorage.setItem("manga-reference", JSON.stringify(temp));
            window.location.reload();
        })
        var select_options = ""
        manga[0].chapters_src.map((a, b) => {
            select_options += `<option value="${b}" ${b == manga_reference.chapter ? "selected" : ""}>Capítulo ${((b + 1) < 9 ? "0" + (b + 1) : (b + 1))} </option>`
        })
        selectBox.innerHTML = select_options;
        if (parseInt(manga_reference.chapter) + 1 < manga[0].chapters_src.length) {
            buttonNext.addEventListener("click", () => {
                var temp = {
                    manga: manga_reference.manga,
                    chapter: parseInt(manga_reference.chapter) + 1,
                }
                localStorage.setItem("manga-reference", JSON.stringify(temp));
                window.location.reload();
            })
        } else {
            buttonNext.style.display = "none"
        }
        if (parseInt(manga_reference.chapter) - 1 >= 0) {
            buttonPrevious.addEventListener("click", () => {
                var temp = {
                    manga: manga_reference.manga,
                    chapter: parseInt(manga_reference.chapter) - 1,
                }
                localStorage.setItem("manga-reference", JSON.stringify(temp));
                window.location.reload();
            })
        } else {
            buttonPrevious.style.display = "none"
        }

    }
}