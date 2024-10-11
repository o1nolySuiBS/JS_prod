const sectionOne = document.createElement('section');
sectionOne.className = 'sectionOne';


const title = document.createElement('div');
title.className = 'title';
title.innerHTML = `
    <h1 class="comfort-test-description">Free In-Store Comfort Test</h1>
    <p class="comfort-test-info">Visit one of our stores for a free, personalized, expert-guided comfort test.</p>
`;


const infoDiv = document.createElement('div');
infoDiv.className = 'infoDiv';


const photoSection = document.createElement('img');
photoSection.className = 'photo';
photoSection.src = '../svg/photoSection.png';
photoSection.alt = 'photo';
infoDiv.appendChild(photoSection);


const infoPhoto = document.createElement('div');
infoPhoto.className = 'infoPhoto';
infoPhoto.innerHTML = `
    <h2 class="try-before-you-buy">Try before you buy</h2>
    <p class="info">
        When it comes to purchasing a new mattress, it's tempting to browse<br/>
         online and make a selection based on reviews and descriptions. While<br/>
          online shopping offers convenience and a wide range of options, there's a<br/>
           compelling reason why it's crucial to try a mattress in-store before making <br/>
           that important decision. 
           <br/><br/>
           At Sleep Shop, we have a designated Comfort Test area in our stores, <br/>
           where we educate you on how to find the right mattress based on some <br/>
           key principles. It is an educational, relaxing, and simple process.<br/>
    </p>
    <button class="findStoreBtn">FIND A STORE NEAR YOU</button>
`;

infoDiv.appendChild(infoPhoto);
sectionOne.appendChild(title);
sectionOne.appendChild(infoDiv);
document.body.appendChild(sectionOne);


const sectionTwo = document.createElement('section')
sectionTwo.className = 'sectionTwo'

const secondTitle = document.createElement('div')
secondTitle.className = 'secondTitle'
secondTitle.innerHTML = '<h1 class="why-in-store-comfort">Why in-store comfort testing is essential</h1>'


const durability = document.createElement('div')
durability.className = 'durability'

const comfortDiv = document.createElement('div')
const supportDiv = document.createElement('div')
const qualityDiv = document.createElement('div')
durability.append(comfortDiv, supportDiv, qualityDiv)


const video = document.createElement('div')

const sectionTwoBtn = document.createElement('div')
const btn = document.createElement('button')


sectionTwo.append(secondTitle, durability, video,)
document.body.appendChild(sectionTwo)

