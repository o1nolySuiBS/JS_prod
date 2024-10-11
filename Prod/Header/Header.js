const banner = document.createElement('div');
banner.innerText = 'BUY NOW, PAY LATER | Back To School Sale Is On';
banner.className = 'banner';

const closeBanner = document.createElement("a");
closeBanner.innerText = 'х';
closeBanner.className = 'close-banner';
banner.appendChild(closeBanner);


closeBanner.onclick = function (event) {
    event.preventDefault();
    banner.style.height = '0';
    banner.style.overflow = 'hidden';
    closeBanner.style.display = 'none';
}

const header = document.createElement('header');
header.className = 'header';
header.appendChild(banner)


const firstHeader = document.createElement('div');
firstHeader.className = 'firstHeader';
header.appendChild(firstHeader);


const logo = document.createElement('img');
logo.className = 'Logo';
logo.src = '../svg/ShopLogo.svg';
logo.alt = 'logo';
firstHeader.appendChild(logo);


const info = document.createElement('div');
info.className = 'Info';
info.innerHTML = `
    <a href="https://www.google.com/maps/place/Richmond" target="_blank" class="Richmond">
        <img class="Vector" src="../../svg/Vector.svg" alt="Vector">Richmond
        <img class="secondVector" src="../../svg/VectorSecond.svg" alt="Second Vector">
    </a>
    <h8 class="time">10:00 AM - 7:00 PM</h8>
`;
firstHeader.appendChild(info);


const searchDiv = document.createElement('div');
searchDiv.className = 'searchDiv';
searchDiv.innerHTML = `
    <input type="text" class="searchInput" placeholder="Search Products">
    <button class="searchButton">
        <img src="../../svg/SearchButton.svg" alt="Search" class="searchIcon">
    </button>
`;
firstHeader.appendChild(searchDiv);


const cart = document.createElement('img');
cart.className = 'Cart';
cart.src = '../svg/Cart.svg';
cart.alt = 'cart';


const cartDiv = document.createElement('div');
cartDiv.className = 'cartDiv';
cartDiv.appendChild(cart);
firstHeader.appendChild(cartDiv);


const secondHeader = document.createElement('div');
secondHeader.className = 'secondHeader';


const sleepFurniture = document.createElement('div');
sleepFurniture.className = 'sleepFurniture';
sleepFurniture.innerHTML = `
    <div class="furnitureBlock"><a href="#">MATTRESSES</a></div>
    <div class="blockSleep"><a href="#">ADJUSTABLE BASES</a></div>
    <div class="blockSleep"><a href="#">PILLOWS</a></div>
    <div class="blockSleep"><a href="#">BEDDING</a></div>
    <div class="blockSleep"><a href="#">SLEEP FURNITURE</a></div>
`;


const schoolBlock = document.createElement('div');
schoolBlock.className = 'schoolBlock';
schoolBlock.innerHTML = `
    <div class="backToSchool"><a href="#">BACK TO SCHOOL SALE</a></div>
    <div class="clearance"><a href="#">CLEARANCE</a></div>
`;


secondHeader.append(sleepFurniture, schoolBlock);
header.appendChild(secondHeader);


document.body.appendChild(header);



