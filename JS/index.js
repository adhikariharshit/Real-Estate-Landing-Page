function toggleOptions(type) {
    const optionsRent = document.getElementById('optionsRent');
    const optionsSale = document.getElementById('optionsSale');
    const rentButton = document.getElementById('rentButton');
    const saleButton = document.getElementById('saleButton');

    optionsRent.style.display = (type === 'rent') ? 'flex' : 'none';
    optionsSale.style.display = (type === 'sale') ? 'flex' : 'none';

    rentButton.classList.toggle('button-color', type === 'rent');
    rentButton.classList.toggle('button-color-rent', type === 'sale');
    saleButton.classList.toggle('button-color', type === 'sale');
    saleButton.classList.toggle('button-color-rent', type === 'rent');
}
function moreFunction() {

    const additionalProperties = [
        {
            image: `/Images/h-2.png`,
            location: "92 ALLIUM PLACE, ORLANDO FL 32827",
            amount: "$ 590,693",
            car: 2,
            bathtub: 2,
            area: "2,096.00 ft",
            userIcon: "/Images/e-1.png",
            userName: "Jenny"
        },
    ];

    const listingsContainer = document.querySelector('.property-list-details');
    
    additionalProperties.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.className = 'property';

        propertyElement.innerHTML = `
            <div class="property-image">
                <img src="/Images/h-2.png" alt="house-1-for rent">
            </div>
            <div class="property-location">
                <p>${property.location}</p>
            </div>
            <div class="property-amount">
                <p>${property.amount}</p>
            </div>
            <div class="property-details">
                <div class="details-d1">
                    <img src="/Images/Car.png">
                    <p>${property.car}</p>
                </div>
                <div class="details-d1">
                    <img src="/Images/Bathtub.png">
                    <p>${property.bathtub}</p>
                </div>
                <div class="details-d1">
                    <img src="/Images/ArrowsOut.png">
                    <p>${property.area}</p>
                </div>
            </div>
            <div class="property-user-1">
                <div class="user-icon">
                    <img src="${property.userIcon}">
                </div>
                <div class="user-name">
                    <h5>${property.userName}</h5>
                </div>
                <div class="user-heart-saving">
                    <img src="/Images/f-1.png">
                </div>
                <div class="user-heart-saving">
                    <img src="/Images/f-3.png">
                </div>
                <div class="user-heart-saving">
                    <img src="/Images/f-4.png">
                </div>
            </div>
        `;

        listingsContainer.appendChild(propertyElement);
    });
}


let scrollContainer=document.querySelector('.gallery');
let backBtn=document.getElementById('backBtn');
let nextBtn=document.getElementById('nextBtn');

nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft+=900;
});
backBtn.addEventListener('click',() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

let countClick = 0;
const menu = document.querySelector(".ham-menu-cont");
const responsiveNavContent = document.querySelector(".responsive-nav-content");

menu.addEventListener("click", () => {
    countClick += 1;
    if (countClick % 2 !== 0) {
        responsiveNavContent.style.display = "block";
    } else {
        responsiveNavContent.style.display = "none";
    }
});
