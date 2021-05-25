document.getElementById("about").addEventListener("click", scrollPage)

function scrollPage() {
    setTimeout(function () {
        window.scrollTo(0, 1000)
    }, 2)
}