var arr = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
var idx = Math.floor(Math.random() * arr.length);

$("img.random-image").attr("src", "/i/processing/" + arr[idx] + ".png");

