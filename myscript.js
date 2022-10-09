var xmlResponse;
var xhttp;
// var url = ["https://www.cnnindonesia.com/ekonomi/rss",
//         "https://www.vice.com/id/rss?locale=id_id",
//         "https://www.cnnindonesia.com/nasional/rss"];
var g;
var url = "https://www.cnnindonesia.com/nasional/rss";

function muatHalaman(x){
    switch (x) {
        case 1:
            url = "https://www.cnnindonesia.com/ekonomi/rss";
            break;
        case 2:
            url ="https://www.vice.com/id/rss?locale=id_id";
            break;
        case 3:
            url = "https://www.cnnindonesia.com/nasional/rss";
            break;
        default:
            break;
    }
    loadXML(x);
}

function loadXML(x){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if ((xhttp.readyState == 4)&&(xhttp.status==200)){
            if(x==2){
                showFeedVice();
            }
            else{
                showFeed();
            }
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send(null);
}

function showFeed(){
    var xmlResponse = xhttp.responseXML;
    var maxitems = xmlResponse.getElementsByTagName("item").length;
    var cardBody = "";
    var titleBerita,linkBerita;

    j=1;
    for (i = 0; i < maxitems; i++){
        linkBerita = xmlResponse.getElementsByTagName("link")[i+2].childNodes[0].nodeValue;
        titleBerita = xmlResponse.getElementsByTagName("title")[i+2].childNodes[0].nodeValue;
        desc = xmlResponse.getElementsByTagName("description")[i+1].childNodes[0].nodeValue;
        pubDate = xmlResponse.getElementsByTagName("pubDate")[i].childNodes[0].nodeValue;
        switch (j) {
            case 1:
                cardBody +="<div class='container-fluid d-flex justify-content-around'>";
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                break;
            case 2:
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                break;
            case 3:
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                cardBody +="</div><br/>";
                break;
            default:
                break;
        }

        if (j==3) {
            j=1;
        } else {
            j+=1;
        }
    }

    document.getElementById("output").innerHTML = cardBody;
}

function showFeedVice(){
    var xmlResponse = xhttp.responseXML;
    var maxitems = xmlResponse.getElementsByTagName("item").length;
    var cardBody = "";
    var titleBerita,linkBerita;
    
    j=1;
    for (i = 0; i < maxitems; i++){
        linkBerita = xmlResponse.getElementsByTagName("link")[i+1].childNodes[0].nodeValue;
        titleBerita = xmlResponse.getElementsByTagName("title")[i+1].childNodes[0].nodeValue;
        desc = xmlResponse.getElementsByTagName("description")[i+1].childNodes[0].nodeValue;
        img = xmlResponse.getElementsByTagName("enclosure")[i].getAttribute("url");
        pubDate = xmlResponse.getElementsByTagName("pubDate")[i].childNodes[0].nodeValue;
        
        switch (j) {
            case 1:
                cardBody +="<div class='container-fluid d-flex justify-content-around'>";
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p><img src='"+img+"'></img>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                break;
            case 2:
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p><img src='"+img+"'></img>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                break;
            case 3:
                cardBody +="<div class='card' style='width: 23rem;'><h6 class='text-center'>"+titleBerita+"</h6><p class='mb-0 text-center'>"+pubDate+"</p><img src='"+img+"'></img>"+desc+"<a href='"+linkBerita+"' target='_blank' class='text-center'>Baca Berita...</a></div>";
                cardBody +="</div><br/>";
                break;
            default:
                break;
        }
        if (j==3) {
            j=1;
        } else {
            j+=1;
        }
    }
    document.getElementById("output").innerHTML = cardBody;
}

var viceIndo = document.getElementById("vice-indo");
var cnnEko = document.getElementById("cnn-ekonomi");
var cnnNas = document.getElementById("cnn-nasional");
function gantiTab(x){
    switch (x) {
        case 1:
            viceIndo.classList.remove("btn-white");
            viceIndo.classList.add("btn-danger");
            cnnEko.classList.add("btn-white");
            cnnEko.classList.remove("btn-danger");
            cnnNas.classList.remove("btn-white");
            cnnNas.classList.add("btn-danger");
            muatHalaman(1);
            break;
        case 2:
            viceIndo.classList.add("btn-white");
            viceIndo.classList.remove("btn-danger");
            cnnEko.classList.remove("btn-white");
            cnnEko.classList.add("btn-danger");
            cnnNas.classList.remove("btn-white");
            cnnNas.classList.add("btn-danger");
            muatHalaman(2);
            break;
        case 3:
            viceIndo.classList.remove("btn-white");
            viceIndo.classList.add("btn-danger");
            cnnEko.classList.remove("btn-white");
            cnnEko.classList.add("btn-danger");
            cnnNas.classList.add("btn-white");
            cnnNas.classList.remove("btn-danger");
            muatHalaman(3);
            break;
        default:
            break;
    }
}

