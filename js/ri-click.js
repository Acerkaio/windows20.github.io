document.oncontextmenu = function (e) {
    return false;
}
document.getElementById('root').onmouseup = function (e) {
    if (e.button == 2) {
        //console.log('右键点击了');
        FocusClick(3);
        document.getElementById('rg-menu').style.top = e.clientY + 'px';
        document.getElementById('rg-menu').style.left = e.clientX + 'px';
        document.getElementById('rg-menu').style.display = 'block';
    } else {
        flag_click = 0;
    }
}

document.onmouseup = function (e) {
    if (e.button == 0) {
        flag_click = 0;
    }
}

var ldx, ldy;
var nx, ny;
var flag_click = 0;
function min(x, y) {
    if (x < y)
        return x;
    return y;
}
function max(x, y) {
    if (x > y)
        return x;
    return y;
}
document.getElementById('root').onmousedown = function (e) {
    if (e.button == 0) {
        ldx = e.clientX;
        ldy = e.clientY;
        flag_click = 1;
    }
}
document.onmousemove = function (e) {
    ny = e.clientY;
    nx = e.clientX;
    document.getElementById('choice').style.top = min(ldy, ny) + 'px';
    document.getElementById('choice').style.left = min(ldx, nx) + 'px';
    document.getElementById('choice').style.width = max(ldx, nx) - min(ldx, nx) + 'px';
    document.getElementById('choice').style.height = max(ldy, ny) - min(ldy, ny) + 'px';
    if (flag_click == 1) {
        document.getElementById('choice').style.display = 'block';
    } else {
        document.getElementById('choice').style.display = 'none';
    }
}