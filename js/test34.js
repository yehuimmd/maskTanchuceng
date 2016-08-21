 //封装函数
function show(){
	var gist = document.getElementById('register');
    gist.onclick = function(){
    //获取页面高度
    var sheight = document.documentElement.scrollHeight;
    var swidth = document.documentElement.scrollWidth;
    //获取可视区域高度
    var hheight = document.documentElement.clientHeight;
  
    //创建结点
    var Mask = document.createElement("div");
        //结点的css属性
        Mask.id = "mask";
        Mask.style.height = sheight + "px";
        Mask.style.width = swidth + "px";
        //插入结点
        document.body.appendChild(Mask);

    var Gister = document.createElement("div");
        Gister.id = "gister";
        //插入登陆框内容
        Gister.innerHTML = "<div class='gister_close'><div id='close'></div></div>";
        document.body.appendChild(Gister);
        //一定要写在插入之后
        var dheight = Gister.offsetHeight;
        var dwidth = Gister.offsetWidth;
        Gister.style.left = (swidth - dwidth)/2 + "px";
        Gister.style.top = (hheight - dheight)/2 + "px";

        var Close = document.getElementById('close');
            Mask.onclick = Close.onclick = function(){
            //移除结点
        	document.body.removeChild(Mask);
        	document.body.removeChild(Gister);
        }
}
}

window.onload = function(){
  show();
}
 