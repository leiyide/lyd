/**
 * Created by Kay on 2016/4/15.
 */
// 自定义背景音乐的 播放/暂停 功能

function repeat(){
    var music = document.getElementById("music");
	music.currentTime = 0;//重新播放
	aTitle.title = "暂停音乐";
}

function playPause(){
	var music = document.getElementById("music");
    var aTitle = document.getElementById("aTitle");
    if (music.paused){
        music.play();
        aTitle.title = "暂停音乐";
    } else if (music.currentTime != 0){
    	repeat();
    } else{
        music.pause();
        music.currentTime = 0
        aTitle.title = "播放音乐";
    }
}
