var text = $("#f-left");
text.focus();
function action() 
{
	if(text.val()==null||text.val()=="")
	{
		text.focus();
		return;
	}
	$(".b-body").append("<div class='mWord'><span></span><p>" + text.val() + "</p></div>");
	$(".b-body").scrollTop(10000000);
	var args= {
			type : "get",
			url:"https://api.ownthink.com/bot",
			data : {"appid" : "3ccd41d7910fa8d93bf6a43462f1b045", "spoken" : text.val()},
			success : function(redata)
			{
				var my_data = $.parseJSON(redata)
				var array= [my_data.data.info.text];
				if(my_data.data.info.hasOwnProperty("heuristic"))
				{
					for (var i=0; i < my_data.data.info.heuristic.length; i++)
					{
						array.push(my_data.data.info.heuristic[i]);
					}
				} 
				for (var i=0; i < array.length; i++)
				{
					var result = array[i];
					$(".b-body").append("<div class='rotWord'><span></span> <p id='member'>" + result + "</p></div>");
					$(".b-body").scrollTop(10000000);
				}
				var result = array[0]
				result = result.replace(/\s+/g, ","); 
				var url = 'https://dds.dui.ai/runtime/v1/synthesize?voiceId=qianranfa&speed=0.8&volume=100&audioType=wav&text='+result;
				var obj = $("<audio src="+url+" autoplay></audio>");
				$("body").remove("audio");
				$("body").append(obj);
			}
		}
	ajax(args);
	text.val("");
	text.focus();
};
$("#btn").click(function()
{
	action();
});
$(document).keydown(function(event)
{
	if(event.keyCode==13)
	{
		action();
	}
});
function ajax(mJson)
{
	var type=mJson.type||'get';
	var url=mJson.url;
	var data=mJson.data;
	var success=mJson.success;
	var error=mJson.error;
	var dataStr='';
	if(data)
	{
		var arr = Object.keys(data);
		var len = arr.length;
		var i = 0;
		for (var key in data)
		{
			dataStr+=key+'='+data[key];
			if (++i<len)
			{
				dataStr+='&';
			}
		}
		if(type.toLowerCase()=='get')
		{
			url+='?'+dataStr;
		}
	}
	var xhr=new XMLHttpRequest();
	xhr.open(type,url,true);
	xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');
	xhr.send(null);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4)
		{
			if(xhr.status>=200&&xhr.status<300)
			{
				success&&success(xhr.responseText);
			}
			else
			{
				error&&error(xhr.status);
			}
		}
	}
}		