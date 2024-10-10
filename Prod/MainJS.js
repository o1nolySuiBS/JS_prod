const mainPage = document.createElement('div');
mainPage.className = 'mainPage';

const pageOne = document.createElement('div');
pageOne.className = 'pageOne';

// Банер
const banner = document.createElement('div');
banner.innerText = 'BUY NOW, PAY LATER | Back To School Sale Is On';
banner.className = 'banner';

const CloseBanner = document.createElement("a");
CloseBanner.innerText = 'х';
CloseBanner.className = 'close-banner';

banner.appendChild(CloseBanner);
pageOne.appendChild(banner);
mainPage.appendChild(pageOne);

CloseBanner.onclick = function (event) {
    event.preventDefault();
    banner.style.height = '0';
    banner.style.overflow = 'hidden';
    CloseBanner.style.display = 'none';
}

// Заголовок
const header = document.createElement('div');
header.className = 'header';

const firstHeader = document.createElement('div');
firstHeader.className = 'firstHeader';
header.appendChild(firstHeader);

const Logo = document.createElement('img');
const pathToLogo = '../svg/ShopLogo.svg';
Logo.className = 'Logo';
Logo.src = pathToLogo;
Logo.alt = 'logo';

const Info = document.createElement('div');
Info.className = 'Info';
Info.innerHTML =
    '<a href="https://www.google.com/maps/place/Richmond" target="_blank" class="Richmond">' +
    '<img class="Vector" src="../svg/Vector.svg" alt="Vector">Richmond<img class="secondVector" src="../svg/VectorSecond.svg"></a> ' +
    '<h8 class="time">10:00 AM - 7:00 PM</h8>';

firstHeader.append(Logo, Info);

// Поле пошуку
const searchDiv = document.createElement('div');
searchDiv.className = 'searchDiv';
searchDiv.innerHTML =
    '<input type="text" class="searchInput" placeholder="Search Products">' +
    '<button class="searchButton">' +
    '<img src="../svg/SearchButton.svg" alt="Search" class="searchIcon">' +
    '</button>';

const Cart = document.createElement('img');
const pathToCart = '../svg/Cart.svg';
Cart.className = 'Cart';
Cart.src = pathToCart;
Cart.alt = 'cart';

const cartDiv = document.createElement('div');
cartDiv.className = 'cartDiv';
cartDiv.appendChild(Cart);

Cart.onclick = function () {
    productPanel.style.transform = 'translateY(0)';
};

firstHeader.append(searchDiv, cartDiv);

const secondHeader = document.createElement('div');
secondHeader.className = 'secondHeader';
header.appendChild(secondHeader);

pageOne.appendChild(header);
document.body.appendChild(mainPage);

// Панель продуктів
const productPanel = document.createElement('div');
productPanel.className = 'productPanel';
productPanel.style.transform = 'translateY(100%)'; // Спочатку прихована

productPanel.innerHTML = `
    <div class="productHeader">
        <h2>Продукти</h2>
        <button id="closeButton">X</button>
    </div>
    <div class="productList">
        <div class="product">Product 1<button class="deleteButton">X</button></div>
        <div class="product">Product 2<button class="deleteButton">X</button></div>
        <div class="product">Product 3<button class="deleteButton">X</button></div>
    </div>
`;

document.body.appendChild(productPanel);

// Обробник для закриття панелі
document.getElementById('closeButton').onclick = function () {
    productPanel.style.transform = 'translateY(100%)';
};

// Обробник для кнопок видалення продуктів
const productList = document.querySelector('.productList');
productList.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteButton')) {
        const product = event.target.parentElement; // Отримуємо батьківський елемент (продукт)
        productList.removeChild(product); // Видаляємо продукт зі списку
    }
});
