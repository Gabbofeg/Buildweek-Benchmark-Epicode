const button = document.getElementById("button");

button.addEventListener(`click`, () => {

    let checkbox = document.getElementById("checkbox");

    if (checkbox.checked) {
        window.location.href = "benchmark.html"; 
    }

});
console.log(checkbox);