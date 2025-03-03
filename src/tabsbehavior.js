function applySelector(wrapper){
    let buttonSelector = document.querySelectorAll("button");
    buttonSelector.forEach((button)=>{
    button.addEventListener("click", switchTab);
    });

    function switchTab(){//handle le switch de tabs
        let homeTab = document.querySelector(".tabs-display-home");
        let menuTab = document.querySelector(".tabs-display-menu");
        let contactTab = document.querySelector(".tabs-display-contact");
        if(event.target.textContent === "Home"){
            homeTab.style.removeProperty("display")
            menuTab.style.display = "none";
            contactTab.style.display = "none";
        }
        if(event.target.textContent === "Menu"){
            menuTab.style.removeProperty("display");
            homeTab.style.display = "none";
            contactTab.style.display = "none";
        }
        if(event.target.textContent === "Contact"){
            contactTab.style.removeProperty("display");
            homeTab.style.display = "none";
            menuTab.style.display = "none";
        }
    }
};

export {applySelector};

