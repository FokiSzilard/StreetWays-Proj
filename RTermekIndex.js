document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-section .product-grid");
    if (!productGrid || typeof termekAdatok === "undefined") return;

    // Ürítjük a rácsot (biztonság kedvéért)
    productGrid.innerHTML = "";

    const osszesSzamId = Object.keys(termekAdatok).map(Number);
    const randomTermekIds = [];
    
    function getRandomTermekId() {
        return osszesSzamId[Math.floor(Math.random() * osszesSzamId.length)];
    }
    
    // 4 egyedi véletlenszerű ID kiválasztása
    for (let i = 0; i < 4; i++) {
        let randomId = getRandomTermekId();
        while (randomTermekIds.includes(randomId)) {
            randomId = getRandomTermekId();
        }
        randomTermekIds.push(randomId);
    }

    // Kártyák generálása
    randomTermekIds.forEach((id) => {
        const termek = termekAdatok[id];
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <a href="termeklap.html?id=${id}">
                <img src="${termek.kep1}" alt="${termek.nev}" class="product-image">
            </a>
            <h3 class="product-name">${termek.nev}</h3>
            <p class="product-description">${termek.leiras}</p>
            <p class="product-price"><strong>${termek.ar}</strong></p>
            <p class="product-original-price">${termek.eredetiar || ""}</p>
            <button class="details-btn" onclick="location.href='termeklap.html?id=${id}'">Részletek</button>
        `;
        productGrid.appendChild(productCard);
    });
});