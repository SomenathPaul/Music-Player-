const dark = document.getElementById("dark-mode")


dark.addEventListener('click',()=>{
    let element = document.querySelector("link");
    if(element.getAttribute("href") === "DarkStyle.css"){
        element.setAttribute("href", "lightStyle.css")
        // light.classList.replace('fa-moon','fa-sun')
    }else{
        element.setAttribute("href", "DarkStyle.css")
        // light.classList.replace('fa-sun','fa-moon')
    }
})