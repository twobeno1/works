window.onload=function(){
	var oList=document.getElementById("list");
	var oInput=document.getElementById("input");
	var oBtn=document.getElementById("btn");
	var aBtn=document.getElementById("btn2");
	//首先获取到input的值
	function num(){
		var num=oInput.value;
		if(num>=10 && num<=100){
			return num;
		}else{
			alert("请重新输入");
			return false;	
		}
	}
	//每次输入一个值得时候就创建一个盒子并给这个盒子赋值和input的值一样的高
	function addHeight(n){
		var adiv=document.createElement("div");
		oList.appendChild(adiv);
		adiv.style.height=n+"px";
		if(adiv.length>60){
			alert("请停止输入");
			return false;
		};
	}
	//创建一个数组用来存放每个盒子的高
	function createArray(){
		var adiv=oList.getElementsByTagName("div");
		var data=[];
		for(var i=0;i<adiv.length;i++){
			data.push(adiv[i].style.height)
		}
		return data;
	}
	//给这个数组排序
	function sort(){
		var arr=createArray();
		var tmp;
		for(var i=0;i<arr.length;i++){
			for(var j=0;j<arr.length;j++){
				if(arr[j]>arr[j+1]){
					tmp=arr[j+1];
					arr[j+1]=arr[j];
					arr[j]=tmp;
				}
			}
		}
		return arr;
	}
	//点击增加队列	
	oBtn.onclick=function(){
		addHeight(num());
		}
	//点击排序
	aBtn.onclick=function(){
		var arr=sort();
		var adiv=oList.getElementsByTagName("div");
		for(var i=0;i<adiv.length;i++){
			adiv[i].style.height=arr[i];
		}
	}

}
