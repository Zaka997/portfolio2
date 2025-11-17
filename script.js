document.addEventListener("DOMContentLoaded", function () {
    const text = "Pendant mon année j'ai eu l'occasion de participer sur des projets, les voici :";
    const element = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeWriter, 50); // vitesse d'écriture
        }
    }

    typeWriter();
});
