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

let PSpanWrapper1 = document.createElement("div");
PSpanWrapper1.classList.add("paraAndSpanWrapper");
appending(tabsContact, PSpanWrapper1);
addSpan(PSpanWrapper1, "Email:");
let contactMail = document.createElement("p");
contactMail.textContent = "Raymond@gmail.com";
appending(PSpanWrapper1, contactMail);
createHr(tabsContact);

let PSpanWrapper2 = document.createElement("div");
PSpanWrapper2.classList.add("paraAndSpanWrapper");
appending(tabsContact, PSpanWrapper2);
addSpan(PSpanWrapper2, "Phone:");
let contactPhone = document.createElement("p");
contactPhone.textContent = "514-665-8989";
appending(PSpanWrapper2, contactPhone);
createHr(tabsContact);

let PSpanWrapper3 = document.createElement("div");
PSpanWrapper3.classList.add("paraAndSpanWrapper");
appending(tabsContact, PSpanWrapper3);
addSpan(PSpanWrapper3, "Address:");
let contactAddress = document.createElement("p");
contactAddress.textContent = "Entre 2 villages creux drette sul bord dla 132";
appending(PSpanWrapper3, contactAddress);
createHr(tabsContact);

let PSpanWrapper4 = document.createElement("div");
PSpanWrapper4.classList.add("paraAndSpanWrapper");
appending(tabsContact, PSpanWrapper4);
addSpan(PSpanWrapper4, "Website:");
let contactWebsite = document.createElement("p");
contactWebsite.textContent = "www.snackbarchezraymond.com";
appending(PSpanWrapper4, contactWebsite);

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
    spanElement.textContent = text;
    pElement.append(spanElement);
    console.log(`function span started with parent: ${pElement} the span created:${spanElement} with this text:${text}`);
}

function createHr(parent){
    let separationLine = document.createElement("hr");
    parent.append(separationLine);
}
export {sayHello};