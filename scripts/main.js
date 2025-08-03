document.querySelector("h1").textContent="hello world";
let headImage = document.getElementById("headImage");
headImage.onclick = function(){
    let miSrc =  headImage.getAttribute("src");
    if(miSrc === "src/images/V estandar.png"){
        headImage.setAttribute("src", "src/images/v3-8.png");
    }else{
        headImage.setAttribute("src", "src/images/V estandar.png");
    }
};