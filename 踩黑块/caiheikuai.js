var speed=10
var onshow = true
var clock//计时器,要一开始申明好,才可以保证函数内部都可以用
var grade
var t=1
function move(){
    var con = document.getElementsByClassName('row')
    for (var i=0;i<con.length;i++){
        var top=parseInt(window.getComputedStyle(con[i])["top"])//拿到当前的top值
        top += speed
        con[i].style.top = top + "px"
        if(top>=400){//超过ui的范围的时候,把最后一个li移动到最上方
            con[i].style.top = "-100px"
            var row = document.getElementsByClassName('row')[i]
            var temp=generate()
            for (var j=0;j<4;j++) {
                if(row.children[j].className == 'cell black'){//如果li中含有black的名称,则代表失败,弹出提示并重置一下
                    alert('失败了呢!你最后的得分为'+document.getElementsByClassName('score')[0].innerHTML)
                    reset()
                }else{
                    row.children[j].className = temp[j]//没有失败则重新分配黑块的位置
                }
            }
            con.onclick = function (e){//给div添加点击事件
                e= e || event
                judge(e)
            }
        }
    }
}//让li移动起来

function generate(){
    var temp=['cell','cell','cell','cell']
    var i = parseInt(Math.random()*4)
    temp[i]=['cell black']
    return temp
}//产生随机数,并添加好名称

function give(){
    var row = document.getElementsByClassName('row')
    for(var i=0;i<row.length;i++){
        var temp=generate()//每一行遍历完成都重新执行一下,为了黑块的位置每一行都有所改变
        for (var j=0;j<4;j++){
            row[i].children[j].className=temp[j]//修改各个div的class名称
        }
    }

    clock =setInterval("move()",100)//开始移动
    document.getElementById('main').onclick = function (e){//给div添加点击事件
        e= e || event
        judge(e)
    }


}//初始化白色方块和黑色方块,并为方块添加点击事件

function judge(e){
    if(e.target.className == 'cell black'){//判断点击的div是否有black名称,如果有就是正确的,修改名称即可.没有就是错误
        e.target.className = 'cell'
        score()
    }else{
        alert('失败了呢!你最后的得分为'+document.getElementsByClassName('score')[0].innerHTML)
        clearInterval(clock)
    }
}//判断点击的方块是否为黑色

function score(){
    grade = parseInt(document.getElementsByClassName('score')[0].innerHTML)+1
    document.getElementsByClassName('score')[0].innerHTML=grade
}//计分器

function start(){
    if(t == 1){
        t++
        give()//如果不用变量t,每次点击开始都会重置全部li的黑块位置.所以用t来限制,保证give函数仅运行一次即可
        onshow = false
        document.getElementsByClassName('start')[0].innerHTML='暂停游戏'
    }else if(t>1){
        if(onshow){
            onshow = false
            document.getElementsByClassName('start')[0].innerHTML='暂停游戏'
            clock =setInterval("move()",100)
        }else{
            onshow = true
            document.getElementsByClassName('start')[0].innerHTML='开始游戏'
            clearInterval(clock)
        }
    }
}//开始按钮

function reset(){
    grade=0
    speed=0
    onshow=false
    var con = document.getElementsByClassName('row')
    for(var i=0;i<con.length;i++){
        con[i].style.top=((i+1)*100-600)+'px'//让每个li回到初始的位置
    }
    document.getElementsByClassName('start')[0].innerHTML='开始游戏'
    clearInterval(clock)
}//结束按钮