const $container = document.getElementById("container");

setTimeout(() => {
    $container.classList.add("close");
    $container.style.display = "none";
}, 3000);