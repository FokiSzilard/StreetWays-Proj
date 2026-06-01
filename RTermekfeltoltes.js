document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    const maxSor = 10; 
    const TermekekSorban = 4; 
    const maxtermekek = maxSor * TermekekSorban; 

    const productIds = Object.keys(termekAdatok).slice(0, maxtermekek);

    productIds.forEach((id, index) => {
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