let contentSelector = document.querySelector(".content");
let tabsWrapper = document.createElement("div");
tabsWrapper.classList.add("tabs-wrapper");
for(let i = 0;i<3;i++){//generate 3 buttons
    let nameArray = ["Home","Menu","Contact"]
    let tabsButton = document.createElement("button");
    tabsButton.textContent = nameArray[i];
    tabsButton.classList.add("tabs-button");
    appending(tabsWrapper, tabsButton);
}
appending(contentSelector, tabsWrapper);
let tabsHome = document.createElement("div")
tabsHome.classList.add("tabs-display-home")
appending(contentSelector, tabsHome);
let tabsMenu = document.createElement("div");
tabsMenu.classList.add("tabs-display-menu");
appending(contentSelector, tabsMenu);

//Creation of the contact page
let tabsContact = document.createElement("div");
tabsContact.classList.add("tabs-display-contact");
let contactTitle = document.createElement("h1");
appending(tabsContact, contactTitle);
contactTitle.textContent = "Contact informations";
createHr(tabsContact);

let contactMail = document.createElement("p");
//addSpan(contactMail, "Email:");        <-------------------              
contactMail.textContent = "Raymond@gmail.com";
appending(tabsContact, contactMail);
createHr(tabsContact);

let contactPhone = document.createElement("p");
//addSpan(contactPhone, "Phone:");        <-------------------
contactPhone.textContent = "514-665-8989";
appending(tabsContact, contactPhone);
createHr(tabsContact);

let contactAddress = document.createElement("p");
//addSpan(contactAddress, "Address:");        <-------------------
contactAddress.textContent = "Entre 2 villages creux drette sul bord dla 132";
appending(tabsContact, contactAddress);
createHr(tabsContact);

let contactWebsite = document.createElement("p");
//addSpan(contactWebsite, "Website:");        <-------------------
contactWebsite.textContent = "www.snackbarchezraymond.com";
appending(tabsContact, contactWebsite);
//appending the whole contact tab to the content wrapper
appending(contentSelector, tabsContact);


function sayHello(){
    console.log("Hello world");
}

function appending(parent, child){//automated append function
    parent.append(child);
}

function addSpan(pElement, text){//a corriger
    let spanElement = document.createElement("span");
    spanElement.textContent = "ALLO";
    pElement.prepend(spanElement);
    console.log(`function span started with parent: ${pElement} the span created:${spanElement} with this text:${text}`);
}

function createHr(parent){
    let separationLine = document.createElement("hr");
    parent.append(separationLine);
}
export {sayHello};