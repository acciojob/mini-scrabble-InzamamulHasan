//your code here
let box=document.getElementById("evaluatedText");
let render=document.getElementById("letterCount");
box.addEventListener("input",()=>{
	let str=box.value;
	
	render.textContent=`${str.length}`;
})
