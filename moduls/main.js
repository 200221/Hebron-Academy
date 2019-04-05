
document.getElementById('arwL').onclick = sliderLeft;
var left = 0;
function sliderLeft() {
	var team-box = document.getElementById('team-box');
	left = left - 337;
	if(left<-1229){
		left=0;
	}
team-box.style.left=left+'px';
} 


document.getElementById('arwR').onclick = sliderRight;
var right = 0;
function sliderRight() {
	var team-box = document.getElementById('team-box');
	right = right - 337;
	if(right<-1229){
		right=0;
	}
team-box.style.right=right+'px';
} 




// var poloska5 = document.getElementById('Polosa5');
// let custom_width4 = 0;

// document.getElementById('arwLL').onclick = sliderLeft4;
// function sliderLeft4() {
	
// 	let width_img4 = document.querySelectorAll('#blockSerPar1')[0].clientWidth;
// 	let poloskaWidth4 = poloska5.clientWidth;
//     if(custom_width4 <= 0){
//     	custom_width4 = poloskaWidth4 - width_img4*4;
//     }else{
//     	custom_width4 += -width_img4;
//     }
//     poloska5.style.left = - custom_width4 +  'px';
// }


// document.getElementById('arwRR').onclick = sliderRigth4;
// 	function sliderRigth4() {
// 		let width_img4 = document.querySelectorAll('#blockSerPar1')[0].clientWidth;
//         let poloskaWidth4 = poloska5.clientWidth;
//     if(custom_width4 >= poloskaWidth4 - width_img4*4){
//     	custom_width4 = 0;
//     }else{
//     	custom_width4 += width_img4;
//     }
//     poloska5.style.left = - custom_width4 +  'px';
// }



// var leftButton = document.getElementById("arwR");

// var left = 0;
// leftButton.onclick = function leftSwipe() {
// 	var all-team = document.getElementById("all-team");
// 	all-team.style.transition = "0.5s ease"
// 	left = left - size;
// 	if (left <= -((n + 1) * size)) {
// 		all-team.style.transition = "0s"
// 		left = 0;
// 		all-team.style.left = left + "px";
// 		setTimeout(function (){
// 			all-team.style.transition = "0.5s ease"; 
// 			left = -size
// 			all-team.style.left = left + "px";}, 10)
// 		return 1
// 	}
// 	all-team.style.left = left + "px";

// }

// var rightButton = document.getElementById("arwL");

// rightButton.onclick = function rightSwipe() {
// 	var all-team = document.getElementById("all-team");
// 	all-team.style.transition = "0.5s ease"
// 	left = left + size;
// 	if (left > 0) {
// 		all-team.style.transition = "0s"
// 		left = -(n * size);
// 		all-team.style.left = left + "px";
// 		setTimeout(function (){
// 			all-team.style.transition = "0.5s ease"; 
// 			left = -((n - 1) * size)
// 			all-team.style.left = left + "px";}, 10)
// 		return 1
// 	}
// 	all-team.style.left = left + "px";
// }