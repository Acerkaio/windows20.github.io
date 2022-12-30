var Bu2flag = 0;
function ExBu3() {
    document.getElementById("explorer").style.animation = "explorer-end .5s ease";
    setTimeout(function () { document.getElementById("explorer").style.display = "none"; }, 444);
}
function ExBu2() {
    if (Bu2flag == 0) {
        Bu2flag = 1;
        document.getElementById("explorer").style.top = "0";
        document.getElementById("explorer").style.left = "0";
        document.getElementById("explorer").style.width = "calc(100% - 40px)";
        document.getElementById("explorer").style.height = "99.5%";
        document.getElementById("ex-bu2").innerHTML = "<img src='img/bu/2.png' alt='Error' width='12'>";
    } else {
        Bu2flag = 0;
        document.getElementById("ex-bu2").innerHTML = "<img src='img/bu/5.png' alt='Error' width='12'>";
        document.getElementById("explorer").style.width = "800px";
        document.getElementById("explorer").style.height = "";
    }
}
// 使 DIV 元素可拖动:
dragElement(document.getElementById("explorer"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // 如果存在，标题是您从中移动 DIV 的位置:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // 否则，从 DIV 内的任何位置移动 DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // 在启动时获取鼠标光标位置:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // 每当光标移动时调用一个函数:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // 计算新的光标位置:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // 设置元素的新位置:
        if (Bu2flag == 0) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        // 释放鼠标按钮时停止移动:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}