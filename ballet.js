// var b1=document.getElementById("but1");
// b1.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/1.png"
// 	document.getElementById("area1").style.backgroundColor="#fcfcfc"
// 	document.getElementById("img1").style.display="none"
// 	document.getElementById("but1").style.display="none"
// });
// var b2=document.getElementById("but2");
// b2.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/2.png"
// });
// var b3=document.getElementById("but3");
// b3.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/3.png"
// });
// var b4=document.getElementById("but4");
// b4.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/4.png"
// });
// var b5=document.getElementById("but5");
// b5.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/5.jpg"
// });
// var b6=document.getElementById("but6");
// b6.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/6.jpg"
// });
// var b7=document.getElementById("but7");
// b7.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/7.jpg"
// });
// var b8=document.getElementById("but8");
// b8.addEventListener("click",function(){
// 	document.getElementById("selectImg").src="party/8.png"
// });
var cong=0;
var bjp=0;
var tdp=0;
var ysr=0;
var lok=0;
var cpm=0;
var trs=0;
var prp=0;
var prev=0;
function voteOn(i){
	document.getElementById("selectImg").src="party/"+i+".png"
	document.getElementById("area"+i).style.backgroundColor="#fcfcfc"
	document.getElementById("img"+i).style.display="none";
	document.getElementById("but"+i).disabled="true"
	document.getElementById("but"+i).style.display="none";
	
	// for(let j=1;j<9;j++){
	// 	alert(i)
	// 	if(j!=i){
	// 		document.getElementById("img"+i).style.display="block";
	// 		document.getElementById("but"+i).style.display="block";
	// 		var k=document.getElementById("area"+i).style;
	// 		k.removeProperty("backgroundColor")
	// 	}
	// }
	disableFree(prev);
	prev=i;
}
function disableFree(k){
	if(k!=0){
		document.getElementById("img"+k).style.display="block";
		document.getElementById("but"+k).style.display="block";
		document.getElementById("but"+k).disabled="false"
		document.getElementById("area"+k).style.backgroundColor="";
	}
}
function voteConfirmfun(){
	if(prev!=0){
		if(prev==1){
			cong++;
		}
		if(prev==2){
			bjp++;
		}
		if(prev==3){
			tdp++;
		}
		if(prev==4){
			ysr++;
		}
		if(prev==5){
			lok++;
		}
		if(prev==6){
			cpm++;
		}
		if(prev==7){
			trs++;
		}
		if(prev==8){
			prp++;
		}

		alert("Voted");
		document.getElementById("selectImg").src="party/default.png";
		disableFree(prev);
		prev=0;
	}
	else{
		alert("Select your party");
	}
}
function voteCancelfun(){
	disableFree(prev);
	document.getElementById("selectImg").src="party/default.png";
}
function resetVotes(){
	cong=0;
	bjp=0;
	tdp=0;
	ysr=0;
	lok=0;
	cpm=0;
	trs=0;
	prp=0;
	prev=0;
	var k=document.getElementById("votescountVar");
	k.innerText="Resetting.....";
	k.setAttribute("class","resetting");
	setTimeout(function(){
		k.innerText="";
		k.removeAttribute("class");
	},1200);
}
var flagon=0;
function shutdown(){
	if(flagon==0){
		
		document.getElementById("container1").style.visibility="hidden";
		document.getElementById("power").style.backgroundColor="red";
		document.getElementById("votescountVar").style.visibility="hidden"
		flagon=1;
		disableFree(prev);
	}
	else if(flagon==1) {
		document.getElementById("container1").style.visibility="visible";
		document.getElementById("power").style.backgroundColor="green";
		flagon=0;
	}
}
var p=0;
function enableCounting(){
	for(let i=1;i<5;i++){
		document.getElementById("mark"+i).disabled=false;
	}
	showPartyVotes(100);
	p=0;
}
function nextParty(){
	p++;
	if(p==9){
		p=1;
	}
	showPartyVotes(p)

}
function prevParty(){
	p--;
	if(p==-1){
		p=8;
	}
	showPartyVotes(p);
}
function showPartyVotes(iter){
	if(iter==100){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="Total Votes :"+(cong+bjp+tdp+ysr+lok+cpm+trs+prp);
	}
	else if(iter==1){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="Congress :"+(cong);
	}
	else if(iter==2){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="BJP :"+(bjp);
	}
	else if(iter==3){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="TDP :"+(tdp);
	}
	else if(iter==4){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="YSR-CP :"+(ysr);
	}
	else if(iter==5){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="LOKSATHA :"+(lok);
	}
	else if(iter==6){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="CPM :"+(cpm);
	}
	else if(iter==7){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="TRS :"+(trs);
	}
	else if(iter==8){
		var temp=document.getElementById("votescountVar");
		temp.style.visibility="visible";
		temp.innerText="PRP :"+(prp);
	}
}
let results;
function shownewWIN(){
	results=window.open("","","height=500,width=600");
	results.document.write("<h1>Congress : "+cong+"</h1>");
	results.document.write("<h1>BJP : "+bjp+"</h1>");
	results.document.write("<h1>TDP : "+tdp+"</h1>");
	results.document.write("<h1>YSR-CP : "+ysr+"</h1>");
	results.document.write("<h1>LOKSATHA : "+lok+"</h1>");
	results.document.write("<h1>CPM : "+cpm+"</h1>");
	results.document.write("<h1>TRS : "+trs+"</h1>");
	results.document.write("<h1>PRP : "+prp+"</h1>");
}
function closenewWIN() {
	results.close();
}

