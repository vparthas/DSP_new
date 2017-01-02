/**
 * Created by Varun on 1/2/2017.
 */

var xanman:number[] = [120, 97, 110, 109, 97, 110];
var index:number = 0;

document.onkeypress = function (e)
{
    e = e || window.event;
    var key:number = e.keyCode

    //alert(key);

    if(key == xanman[index])
        index++;
    else
        index = 0;

    if(index == 6)
        window.location.href = "img/wyd_rn-min.jpg";
};