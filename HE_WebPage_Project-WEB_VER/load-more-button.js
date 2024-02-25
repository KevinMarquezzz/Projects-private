var proj = document.querySelectorAll('.proj');
var btn = document.querySelector('.btn-container');
var currenting = 9;

btn.addEventListener("click", function () {
    for (var i = currenting; i < currenting + 3; i++) {
        if (proj[i]) {
            proj[i].style.display = 'block';
        }
    }
    currenting += 3;

    // Oculta el botón si no hay más elementos por mostrar
    if (currenting >= proj.length) {
        btn.style.display = 'none';
    }
});