
const selectInput = document.querySelector("#selectInput");
const colorInput = document.querySelector("#colorpicker");
const fontSizeInput = document.querySelector("#numberInput");
const content = document.querySelector("#content");

selectInput.addEventListener("input", (event) => {
    content.style.fontFamily = event.target.value;

})
colorInput.addEventListener("input", (event) => {
    const color = event.target.value;
    content.style.color = color.toUpperCase() ;

})

fontSizeInput.addEventListener("input", (event) => {
    content.style.fontSize=event.target.value+"px"
})

content.style.fontSize="30px"

