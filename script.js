let fname=document.getElementById("fname");
let laname=document.getElementById("lname");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	console.log(`${fname.value}+${laname.value}`);
	alert(`${fname.value}+${laname.value}`)
})
