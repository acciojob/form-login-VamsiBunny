let fname=document.getElementById("fname");
let laname=document.getElementById("lname");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	alert(`${fname.value}+${laname.value}`)
})
