window.onload = function () {
    /*
     **
     **/
    //    创建audio对象
    var myAudio = new Audio();
    // 给对象src
    myAudio.src = "music/mus/AcousticGuitar1.mp3";
    //    播放暂停按钮
    var playNode = document.querySelector(".playNode");
    // 控制播放暂停的布尔值
    var platBln = false;
    // 静音按钮
    var volumeNode = document.querySelector(".volumeNode");
    // 控制静音的布尔值
    var volumeBln = false;
    playNode.onclick = function () {
        if (platBln == false)
            myAudio.play();
        else
            myAudio.pause();
        platBln = !platBln;
    }


    // 静音按钮
    volumeNode.onclick = function () {
        if (volumeBln == false) {
            myAudio.volume = 0;
            volumeNode.style.background = "url(musicimage/no_volume.png)";
        } else {
            myAudio.volume = 1;
            volumeNode.style.background = "url(musicimage/volume.png)";
        }
        volumeBln = !volumeBln;
    }


    // 播放时，进度条的长度计算
    var trueLine = document.querySelector(".trueLine");
    myAudio.addEventListener("timeupdate", function () {
        trueLine.style.width = myAudio.currentTime / myAudio.duration * 100 + "%";
    });



    // 进度条空条元素
    progressNode = document.querySelector(".progressNode");
    // 外层元素
    outerNode = document.querySelector(".outerNode");
    // 点击progressNode元素，让进度条直接到达这个位置
    progressNode.onclick = function (e) {
        var ev = e || event;
        //    算法就是算出点击的位置在外层进度条的多少像素
        // 需要一个鼠标坐标点 减去 外层元素的offsetLeft 和最外层元素的offsetLeft

        trueLine.style.width = (ev.clientX - this.offsetLeft - outerNode.offsetLeft) / progressNode.offsetWidth * 100 + "%";
        myAudio.currentTime = myAudio.duration * (ev.clientX - this.offsetLeft - outerNode.offsetLeft) / progressNode.offsetWidth;
    }


    // 所有数据存在数组里面
    let allMusic = [{
            'MusicSrc': "music/mus/AcousticGuitar1.mp3",
            "MusicPic": "music/pic/fmt01.jpg",
            "MusicName":"AcousticGuitar1"
        }, {
            'MusicSrc': "music/mus/AmazingGrace.mp3",
            "MusicPic": "music/pic/fmt02.png",
            "MusicName":"AmazingGrace"
        }, {
            'MusicSrc': "music/mus/FeelsGood2B.mp3",
            "MusicPic": "music/pic/fmt03.jpg",
            "MusicName":"FeelsGood2B"
        }, {
            'MusicSrc': "music/mus/FunBusyIntro.mp3",
            "MusicPic": "music/pic/fmt04.jpg",
            "MusicName":"FunBusyIntro"
        }, {
            'MusicSrc': "music/mus/GreenDaze.mp3",
            "MusicPic": "music/pic/fmt05.jpg",
            "MusicName":"GreenDaze"
        }, {
            'MusicSrc': "music/mus/Limosine.mp3",
            "MusicPic": "music/pic/fmt06.jpg",
            "MusicName":"Limosine"
        }],
        Index = 0;
    myAudio.src = allMusic[Index].MusicSrc;
    // 选择封面背景
    var topNode = document.querySelector(".topNode");
    topNode.style.backgroundImage = 'url(' + allMusic[Index].MusicPic + ')';

    // 下一首按钮
    nextNode = document.querySelector(".nextNode");
    nextNode.onclick = function () {
        Index++;
        Index=Index>=allMusic.length?0:Index;
        MusicPlayFn();
    }
    // 上一首按钮
    preNode = document.querySelector(".preNode");
    preNode.onclick=function(){
        Index--;
        Index=Index<0?allMusic.length-1:Index;
        MusicPlayFn();
    }
    // 封装
    function MusicPlayFn(){
        myAudio.src = allMusic[Index].MusicSrc;
        myAudio.play();
        // 封面
        topNode.style.backgroundImage = 'url(' + allMusic[Index].MusicPic + ')';
        musicName.innerHTML=allMusic[Index].MusicName;
    }

    // 音乐名称
    musicName=document.querySelector(".musicName");
    musicName.innerHTML=allMusic[Index].MusicName;
}