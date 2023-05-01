//your code here
let box=document.getElementById("evaluatedText");
let render=document.getElementById("letterCount");
box.addEventListener("input",()=>{
	let str=box.value;
	if(str.length==0){
		render.textContent="";
		return;
	}
	render.textContent=str.length;
})
