var box = document.getElementsByClassName('box');
console.log(box);
var int;
function start(){
    clearInterval(int);
    int= setInterval(select,1000)
}
function select(){
    orange();
    //var d = Math.floor(Math.random()*8);
    //var b = Math.floor(Math.random()*8);
    //var c = Math.floor(Math.random()*8);
    //

    var x = 3;
    var first = [];
    for(var a = 0 ;a < box.length ; a++){
        first[a] = a;
    }
    var second = [] ;
    for(var b , j = 0 ; j<x ; j++){
        do{
            b = Math.floor(Math.random()*box.length);
        }while(first[b]==null);
        first[b]=null;
        second[j]=box[b];
        console.log(second[j])
    }
    //随机提取三个不重复的数
    second[0].style.background=color();
    second[1].style.background=color();
    second[2].style.background=color();
}
function color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")";
    //"rgb("+r+','+g+','+b+")" 这个颜色的引号为什么这么处理？
}
function stop(){
    orange();
    clearInterval(int);

}
function orange() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "orange";
    }
}