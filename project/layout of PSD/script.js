let stepbl1 = document.getElementById("stepblock1");
let stepbrdr1 = document.getElementById("stepbrdr1");

let stepbl2 = document.getElementById("stepblock2");
let stepbrdr2 = document.getElementById("stepbrdr2");

let stepbl3 = document.getElementById("stepblock3");
let stepbrdr3 = document.getElementById("stepbrdr3");

stepbl1.onmouseover = function(){
	stepbrdr1.style.borderBottom = "3px solid #FFFFFF";
}
stepbl1.onmouseout = function(){
	stepbrdr1.style.borderBottom = "3px solid #000000";
}

stepbl2.onmouseover = function(){
	stepbrdr2.style.borderBottom = "3px solid #FFFFFF";
}
stepbl2.onmouseout = function(){
	stepbrdr2.style.borderBottom = "3px solid #000000";
}
stepbl3.onmouseover = function(){
	stepbrdr3.style.borderBottom = "3px solid #FFFFFF";
}
stepbl3.onmouseout = function(){
	stepbrdr3.style.borderBottom = "3px solid #000000";
}
