let fname = document.querySelector("input[name='fname']");
let laname = document.querySelector("input[name='lname']");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log(`${fname.value} ${laname.value}`);
    alert(`${fname.value} ${laname.value}`);
});
