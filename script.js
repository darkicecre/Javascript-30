const dataTitle = [
    'Javascript Drum Kit'
]
const dataContent = [
    'Drum Kit is  is a collection of drums, cymbals, and other percussion instruments'
]
function itemHover(i){
    if(dataTitle.length<i){
        document.getElementById("title").innerHTML="Unfinished project"
        document.getElementById("content").innerHTML=""
    }
    else{
        document.getElementById("title").innerHTML=dataTitle[i-1]
        document.getElementById("content").innerHTML=dataContent[i-1]
    }
    document.getElementById("message").style.bottom=0
}

function itemOut(i){
    document.getElementById("message").style.bottom='-150px'
}

function itemClick(i){
    if(dataTitle.length>=i){
        window.location.assign('day'+i+'/index.html')
    }
}