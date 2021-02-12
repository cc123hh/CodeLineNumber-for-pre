var PreNum = document.getElementsByClassName("pre-num");
for(var i=0;i<PreNum.length;i++)
{
	var arr = PreNum[i].innerHTML.split("\n");
	var str = "";
	for(var j=0;j<arr.length-1;j++)
	{
		str += "<div num="+(j+1)+" class='Pre-Num-Div'>"+arr[j]+"</div>";
	}
	PreNum[i].innerHTML = str;
}
