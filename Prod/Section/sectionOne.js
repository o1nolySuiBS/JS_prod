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
        When it comes to purchasing a new mattress, it's tempting to browse online and make a selection based on reviews and descriptions.
        While online shopping offers convenience and a wide range of options, there's a compelling reason why it's crucial to try a mattress
        in-store before making that important decision. 
        <br/><br/>
        At Sleep Shop, we have a designated Comfort Test area in our stores, where we educate you on how to find the right mattress based on
        key principles. It is an educational, relaxing, and simple process.
    </p>
    <button class="findStoreBtn">FIND A STORE NEAR YOU</button>
`;

infoDiv.appendChild(infoPhoto);
sectionOne.appendChild(title);
sectionOne.appendChild(infoDiv);
document.body.appendChild(sectionOne);

const sectionTwo = document.createElement('section');
sectionTwo.className = 'sectionTwo';

const secondTitle = document.createElement('div');
secondTitle.className = 'secondTitle';
secondTitle.innerHTML = '<h1 class="why-in-store-comfort">Why in-store comfort testing is essential</h1>';

const durability = document.createElement('div');
durability.className = 'durability';

const comfortDiv = document.createElement('div');
comfortDiv.className = 'comfortDiv';
comfortDiv.innerHTML = `
    <img class="like" src="../svg/Like.svg" alt="like">
    <h5 class="comfortTitle">PERSONAL COMFORT<br/>AND PREFERENCE</h5>
    <p class="by-testing-a-matters">
        By testing a mattress in-store, you can experience firsthand how it feels under your body\'s weight and pressure points,
        and assess whether it aligns with your specific comfort needs.
    </p>
`;

const supportDiv = document.createElement('div');
supportDiv.className = 'supportDiv';
supportDiv.innerHTML = `
    <img class="bed" src="../svg/bed.svg" alt="bed">
    <h5 class="supportTitle">BODY SUPPORT<br/>AND ALIGNMENT</h5>
    <p class="in-store-testing-allow">
        In-store testing allows you to gauge whether the mattress provides proper body support and spinal alignment,
        which is especially important in case of medical conditions or sleep posture concerns.
    </p>
`;

const qualityDiv = document.createElement('div');
qualityDiv.className = 'qualityDiv';
qualityDiv.innerHTML = `
    <img class="medal" src="../svg/quality.svg" alt="quality">
    <h5 class="qualityTitle">QUALITY AND<br/>DURABILITY</h5>
    <p class="it-allows-you-to-assess">
        It allows you to assess the mattress’ firmness and durability, helping you make an informed decision
        on whether it will maintain its quality over time and if it is a good long-term investment.
    </p>
`;

durability.append(comfortDiv, supportDiv, qualityDiv);

const video = document.createElement('div');

sectionTwo.append(secondTitle, durability, video);
document.body.appendChild(sectionTwo);


