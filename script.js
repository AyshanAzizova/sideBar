const burger = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");

burger.addEventListener("click", () => {
    sidebar.style.right = "0"
})

let closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click",()=>{
    sidebar.style.right = "-250px"
})