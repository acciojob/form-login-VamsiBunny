let firstname=document.getElementById("fname");
let lastname=document.getElementById("lname");
let mybtn=document.getElementById("btn");

if(fistname&&lastname){
btn.addEventListener("click",()=>{
	console.log(`${firstname.value}+${lastname.value}`);
	alert(`${firstname.value}+${lastname.value}`)
})
}
else{
console.log("Fields are empty")
}
