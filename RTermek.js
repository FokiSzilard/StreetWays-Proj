function toltottFellDobozBoxokat() {
    const termekId = getParameterByName("id");
    const osszesSzamId = Object.keys(termekAdatok).map(Number);
    
    const szurheto = osszesSzamId.filter(id => id !== parseInt(termekId));
    
    function getRandomTermekId() {
        return szurheto[Math.floor(Math.random() * szurheto.length)];
    }
    
    const randomTermekIds = [];
    for (let i = 0; i < 4; i++) {
        let randomId = getRandomTermekId();
        while (randomTermekIds.includes(randomId)) {
            randomId = getRandomTermekId();
        }
        randomTermekIds.push(randomId);
    }
    
    const dobozok = document.querySelectorAll(".DobozBox");
    randomTermekIds.forEach((id, index) => {
        if (dobozok[index]) {
            const termek = termekAdatok[id];
            dobozok[index].querySelector("a").href = `termeklap.html?id=${id}`;
            dobozok[index].querySelector("img").src = termek.kep1;
            dobozok[index].querySelector(".neve").textContent = termek.leiras;
            dobozok[index].querySelector(".ara").textContent = termek.ar;
            dobozok[index].querySelector(".eredetiar").textContent = termek.eredetiar;
        }
    });
}
document.addEventListener("DOMContentLoaded", toltottFellDobozBoxokat);