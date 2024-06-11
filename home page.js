const button = document.getElementById("button");

button.addEventListener(`click`, () => {

    let checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            window.location.href = "pagina.html"; 
        }
    });

})
console.log(checkbox);