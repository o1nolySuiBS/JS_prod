const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    Object.entries(options).forEach(([key, value]) => {
        if (key === 'innerHTML') {
            element.innerHTML = value;
        } else if (key === 'onclick') {
            element.onclick = value;
        } else {
            element[key] = value;
        }
    });
    return element;
};

const banner = createElement('div', {
    innerText: 'BUY NOW, PAY LATER | Back To School Sale Is On',
    className: 'banner',
});

const closeBanner = createElement('a', {
    innerText: 'х',
    className: 'close-banner',
    onclick: (event) => {
        event.preventDefault();
        banner.style.height = '0';
        banner.style.overflow = 'hidden';
        closeBanner.style.display = 'none';
    },
});

banner.appendChild(closeBanner);

const header = createElement('header', { className: 'header' });
header.appendChild(banner);

const firstHeader = createElement('div', { className: 'firstHeader' });
header.appendChild(firstHeader);

const logo = createElement('img', {
    className: 'Logo',
    src: '../svg/ShopLogo.svg',
    alt: 'logo',
});
firstHeader.appendChild(logo);

const info = createElement('div', {
    className: 'Info',
    innerHTML: `
        <a href="https://www.google.com/maps/place/Richmond" target="_blank" class="Richmond">
            <img class="Vector" src="../svg/Vector.svg" alt="Vector">Richmond
            <img class="secondVector" src="../svg/VectorSecond.svg" alt="Second Vector">
        </a>
        <h8 class="time">10:00 AM - 7:00 PM</h8>
    `,
});
firstHeader.appendChild(info);

const searchDiv = createElement('div', {
    className: 'searchDiv',
    innerHTML: `
        <input type="text" class="searchInput" placeholder="Search Products">
        <button class="searchButton">
            <img src="../svg/SearchButton.svg" alt="Search" class="searchIcon">
        </button>
    `,
});
firstHeader.appendChild(searchDiv);

const cart = createElement('img', {
    className: 'cart',
    src: '../svg/Cart.svg',
    alt: 'cart',
});

const cartDiv = createElement('div', { className: 'cartDiv' });
cartDiv.appendChild(cart);
firstHeader.appendChild(cartDiv);

const secondHeader = createElement('div', { className: 'secondHeader' });

const sleepFurniture = createElement('div', {
    className: 'sleepFurniture',
    innerHTML: `
        <div class="blockSleep"><a href="#">MATTRESSES</a></div>
        <div class="blockSleep"><a href="#">ADJUSTABLE BASES</a></div>
        <div class="blockSleep"><a href="#">PILLOWS</a></div>
        <div class="blockSleep"><a href="#">BEDDING</a></div>
        <div class="blockSleep"><a href="#">SLEEP FURNITURE</a></div>
    `,
});

const schoolBlock = createElement('div', {
    className: 'schoolBlock',
    innerHTML: `
        <div class="backToSchool"><a href="#">BACK TO SCHOOL SALE</a></div>
        <div class="clearance"><a href="#">CLEARANCE</a></div>
    `,
});

secondHeader.append(sleepFurniture, schoolBlock);
header.appendChild(secondHeader);

document.body.appendChild(header);
