let time=0
let s=false
let d=new Array(10)
d[1] = 1;
d[2] = 2;
d[3] = 3;
d[4] = 4;
d[5] = 5;
d[6] = 6;
d[7] = 7;
d[8] = 8;
d[9] = 0;
let direct=new Array(//方块可以移动的位置
    [0],
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9],
    [4,8],
    [5,7,9],
    [6,8]
)
let posXY=new Array(//每个方块所在的位置
    [0],
    [0,0],
    [150,0],
    [300,0],
    [0,150],
    [150,150],
    [300,150],
    [0,300],
    [150,300],
    [300,300]
)

function move(id){
    var i=1
    for (i=1;i<10;i++){
        if(d[i]==id) break//找到点击的div,现在对应的位置编号,也就是对应i的位置
    }
    var d_s=M_position(i)//用于保存点击的div可以移动的位置,0表示不可以移动
    if (d_s){
        d[i]=0//交换编号
        d[d_s]=id
        document.getElementById('d'+id).style.left=posXY[d_s][0]+"px"//移动
        document.getElementById('d'+id).style.top=posXY[d_s][1]+"px"
    }

    var on=true
    for(var k=1;k<9;k++){
        if(d[k] != k){//如果编号和数字都可以对应上,代表已经完成,有一个没有对应上,就是没有完成,直接结束即可
            on=false
            break
        }
    }
    if(on){
        setTimeout(function (){alert("恭喜")},1000)
    }

}//点击移动

function M_position(i){
    var j=0;
    for (j;j<direct[i].length;j++) {
        if (d[direct[i][j]] == 0) {//遍历direct的i数组,然后在d内一一对应,找到0所在的位置,他所对应的编号就是要移动的编号
            return direct[i][j]//把要移动到的目标编号返回
        }
    }
}//找到移动目标编号

function initialize(){
    for (var i=1;i<10;i++){
        var to=parseInt(Math.random()*i+1)
        if(d[i]){//如果是空或者0的时候,无法操作style,会报错.所以需要先判断是否存在
            document.getElementById('d'+d[i]).style.left=posXY[to][0]+"px"//当前位置换到随机出来的位置
            document.getElementById('d'+d[i]).style.top=posXY[to][1]+"px"
        }
        if(d[to]){
            document.getElementById('d'+d[to]).style.left=posXY[i][0]+"px"//随机出来的编号换到当前的编号位置
            document.getElementById('d'+d[to]).style.top=posXY[i][1]+"px"
        }
        var t=d[i]//当前的与随机的编号更换
        d[i]=d[to]
        d[to]=t
    }
}//初始化

function timeText(){
    time+=1
    var sec=parseInt(time/60)
    var min=time%60
    document.getElementsByClassName('timer')[0].innerHTML=sec+'分钟'+min+'秒'
}//计算时间

function start(){
    if(s){
        s=false
        document.getElementById('start').innerText='开始'
        document.getElementsByClassName('text')[0].style.display='inline-block'
        clearInterval(set_timer)
    }else{
        s=true
        document.getElementById('start').innerText='暂停'
        document.getElementsByClassName('text')[0].style.display='none'
        set_timer=setInterval(timeText,1000)
    }
}//开始按钮

function reset(){
    time=0
    start()
    initialize()
    document.getElementsByClassName('timer')[0].innerHTML=''
}//重来按钮

function start_s(){
    alert('请点击开始')
}//幕布提示

window.onload=function (){
    initialize()
}//页面重新加载的时候调用初始化函数,打乱方块位置