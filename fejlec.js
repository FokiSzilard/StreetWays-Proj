document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open');
        });
    }
});




function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}




function betoltTermekAdatokat() {
    const termekId = getParameterByName("id");
    if (!termekId || !termekAdatok[termekId]) {
        console.error("Érvénytelen termék ID!");
        return;
    }

    const termek = termekAdatok[termekId];

    document.querySelector(".termek-nev").textContent = termek.nev;
    document.querySelector(".termek-leiras").textContent = termek.leiras;
    document.querySelector(".termek-ar").textContent = termek.ar;
    document.querySelector(".termek-eredetiar").textContent = termek.eredetiar;
    document.querySelector(".termek-szin").textContent = termek.szin;
    document.getElementById("kep1").src = termek.kep1;
    document.getElementById("kep2").src = termek.kep2;
    document.getElementById("kep3").src = termek.kep3;
}

document.addEventListener("DOMContentLoaded", betoltTermekAdatokat);