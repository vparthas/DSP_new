/**
 * Created by Varun on 1/2/2017.
 */
var xanman = [120, 97, 110, 109, 97, 110];
var index = 0;
document.onkeypress = function (e) {
    e = e || window.event;
    var key = e.keyCode;
    //alert(key);
    if (key == xanman[index])
        index++;
    else
        index = 0;
    if (index == 6)
        window.location.href = "img/wyd_rn-min.jpg";
};
//# sourceMappingURL=xandy.js.map