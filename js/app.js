let dropdownLinks = document.getElementsByClassName("dropdownLink");
let sidebar = document.getElementById("sidebar")
let hamburgerIcon = document.getElementById("menuIcon");
let closeIcon = document.getElementById("closeIcon")

window.addEventListener("load", function() {
    sidebar.classList.remove("showSidebar");
    for (let i = 0; i < dropdownLinks.length; i++) {
        let link = dropdownLinks[i];
        link.classList.remove("activeLink");
        link.addEventListener("click", function() {
            for (let j = 0; j < dropdownLinks.length; j++) {
                if (i == j) {
                    continue;
                }
                dropdownLinks[j].classList.remove("activeLink");
            }
            link.classList.toggle("activeLink");
        })

    }
})

hamburgerIcon.addEventListener("click", function() {
    sidebar.classList.add("showSidebar")
})

closeIcon.addEventListener("click", function() {
    sidebar.classList.remove("showSidebar");
})
