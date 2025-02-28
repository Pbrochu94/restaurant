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
appending(contentSelector, tabsHome)



function sayHello(){
    console.log("Hello world");
}

function appending(parent, child){//automated append function
    parent.append(child);
}


export {sayHello};