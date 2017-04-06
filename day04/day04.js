window.onload=function(){
	var oInput=document.getElementById("input");
	var oText=document.getElementById("text");
	//获取到输入的值
	function num(){
		var num=oInput.value;
		if(num==''){
			alert("请输入一个数字");
			return null;
		}else if(num==NaN){
			alert("请输入一个数字");
			return null;
		}else{
			return num;
		}	
	}
	
	//点击左侧入
	function leftInway(){
			var aLi=document.createElement("li");
			aLi.innerHTML=num();
			oText.insertBefore(aLi,oText.childNodes[0]);
			oInput.value='';
	}
	//点击右侧入
	function rightInway(){
			var aLi=document.createElement("li");
			aLi.innerHTML=num();
			oText.appendChild(aLi);
			oInput.value='';
		}	
	//点击左侧出
	function leftOutway(){
	    	var listLi=oText.getElementsByTagName("li");
	    	alert(listLi[0].innerHTML);
	    	listLi[0].remove();
	    	
	   }   
	//点击右侧出
	function rightOutway(){
	    	var listLi=oText.getElementsByTagName("li");
	    	alert(listLi[listLi.length-1].innerHTML);
	    	listLi[listLi.length-1].remove();	
	    }
	function init(){
		
		var leftIn = document.getElementById("left-in");
		var rightIn=document.getElementById("right-in");
		var leftOut=document.getElementById("left-out");
		var rightOut=document.getElementById("right-out");
		leftIn.onclick=function(){
			leftInway();
		}
		rightIn.onclick=function(){
			rightInway();
		}
		leftOut.onclick=function(){
			leftOutway();
		}
		rightOut.onclick=function(){
			rightOutway();
		}
	}  
	
	init();
	 
}
