const introSFX = document.getElementById('intro-sfx')
const outroSFX = document.getElementById('outro-sfx')
const dingSFX = document.getElementById('ding-sfx')
const newsSFX = document.getElementById('news-sfx')
const popSFX = document.getElementById('pop-sfx')
let phone = document.getElementById("phone");
let info = document.getElementById("info");
let up = document.getElementById("up");
let upperCover = document.getElementById("upper-cover");
let upperInner = document.getElementById("upper-inner");
let lower = document.getElementById("lower");
let close = document.getElementById("close");
let slideLock = document.getElementById("slide-lock");
let lockImg = document.getElementById("lock-img");
let grid = document.getElementById("grid");
let svgPath = document.getElementById('home-svg')
let message = document.getElementById("message");
let map = document.getElementById('map')
let mapBox = document.getElementById('map-box')
let mapQ = document.getElementById('map-q')
let mapIframe = document.getElementById('map-iframe')
let musicSrc = document.querySelectorAll('audio.music-src')
let musicIndex = 0 
let musicSvg = document.getElementById('music-svg')
let musicPath = document.getElementById('music-path')
let playImg = document.getElementById('play-img')
let pauseImg = document.getElementById('pause-img')
let news = document.getElementById('news')
let newsBox = document.getElementById('news-box')
let newsQ = document.getElementById('news-q')
let newsOutput = document.getElementById('news-output')
let bmi = document.getElementById('bmi')
let bmiBox = document.getElementById('bmi-box')
let bmiSend = document.getElementById('bmi-send')
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let bmiOutput = document.getElementById('bmi-output')
let gif  = document.getElementById('gif')
let gifBox = document.getElementById('gif-box')
let gifQ = document.getElementById('gif-q')
let gifOutput = document.getElementById('gif-output')
let music = document.getElementById('music')
let musicBox = document.getElementById('music-box')
let musicPlayer = new Audio()
let musicPlay = document.getElementById('play')
let musicNext = document.getElementById('next')
let musicPrev = document.getElementById('prev')
let weather = document.getElementById('weather')
let weatherBox = document.getElementById('weather-box')
let camera = document.getElementById('camera')
let cameraBox = document.getElementById('camera-box')
let cameraCapture = document.getElementById('camera-capture')
let cameraPreview = document.getElementById('preview')
let getPic = document.getElementById('get-pic')
let chat = document.getElementById('chat')
let chatBox = document.getElementById('chat-box')
let chatOutput = document.getElementById('chat-output')
let chatQ = document.getElementById('chat-q')
let home = document.getElementById('home')
musicPlayer.loop = true
info.addEventListener("click", function () {
  let info = this;
  info.innerText = "";
  info.style.animation = "none";
  setTimeout(() => {
    info.innerText = new Date().toLocaleString();
    info.style.animation = "fadeout 1s 0.5s linear 1 forwards";
  }, 1);
});
up.addEventListener("click", function () {
  phone.classList.add("open");
  upperCover.classList.add("open");
  upperInner.classList.add("open");
  lower.classList.add("open");
  lockImg.classList.remove("hide");
  slideLock.classList.remove("hide");
  slideLock.value = 0;
  message.innerText = "Unlock.";
  message.classList.add("show");
});
close.addEventListener("click", function () {
  outroSFX.pause()
  outroSFX.currentTime = 0
  outroSFX.play()
  phone.classList.remove("open");
  upperCover.classList.remove("open");
  upperInner.classList.remove("open");
  lower.classList.remove("open");
  grid.classList.remove("show");
  svgPath.classList.remove("show");
  message.classList.remove("show");
  setTimeout(() => {
    svgPath.style.display = "none";
    lockImg.style.display = "inline";
    slideLock.style.display = "inline";
  }, 1000);
});
slideLock.addEventListener("change", function () {
  introSFX.pause()
  introSFX.currentTime = 0
  if (this.value != 1) {
    this.value = 0;
    lockImg.style.animation = "none";
    setTimeout(() => {
      lockImg.style.animation = "shake 1s linear 1 forwards";
    }, 1);
    return;
  }
  lockImg.classList.add("hide");
  this.classList.add("hide");
  grid.classList.add("show");
  message.classList.remove("show");
  setTimeout(() => {
    this.style.display = "none";
    lockImg.style.display = "none";
    svgPath.style.display = "block";
    setTimeout(() => {
      svgPath.classList.add("show");
      message.innerText = "Welcome.";
      message.classList.add("show");
      introSFX.play()
    }, 1);
  }, 1000);
});
map.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
    message.classList.remove("show");
   upperCover.classList.add('mode')
   upperInner.classList.add('mode')
   lower.classList.add('mode')
    svgPath.classList.remove('show')
    grid.classList.remove('show')
    setTimeout(() => {
        grid.style.display = 'none'
        svgPath.style.display = 'none'
        mapBox.style.display = 'flex'
        home.style.display = 'inline'
        setTimeout(() => {
            mapBox.classList.add('show')
            home.classList.add('show')
            message.innerText = "Map.";
            message.classList.add("show");
            message.classList.add('mode')
        }, 1);
    }, 1000);
})
mapQ.addEventListener('change',function(){
    if(this.value)
      popSFX.pause()
  popSFX.currentTime = 0
  popSFX.play()
    mapIframe.src = `https://www.google.com/maps/embed/v1/search?q=${this.value}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
})
news.addEventListener('click',function () {
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
    message.classList.remove("show");
    upperCover.classList.add('mode')
    upperInner.classList.add('mode')
    lower.classList.add('mode')
     svgPath.classList.remove('show')
     grid.classList.remove('show')
     setTimeout(() => {
        grid.style.display = 'none'
        svgPath.style.display = 'none'
        newsBox.style.display = 'flex'
        home.style.display = 'inline'
        setTimeout(() => {
            newsBox.classList.add('show')
            home.classList.add('show')
            message.innerText = "News.";
            message.classList.add("show");
            message.classList.add('mode')
        }, 1);
    }, 1000);
})
newsQ.addEventListener('change',function(){
    while (newsOutput.firstElementChild) {
        newsOutput.removeChild(newsOutput.firstElementChild)
    }
    if(this.value)
      popSFX.pause()
    popSFX.currentTime = 0
    popSFX.play()
    fetch(`https://newsapi.org/v2/everything?q=${this.value}&apiKey=d0fa0d72eda74ccbabe06f9c25c5e6ca`).then(res => res.json()).then(data =>{
      
        data.articles.forEach((a,i) => {
            let link = document.createElement('a')
            link.target = '_blank'
            link.href = a['url']
            link.innerText = (i+1) + '.' + a.title
            link.classList.add('link')
            let breakLine = document.createElement('br')
            let breakLine2 = document.createElement('br')
            let image;
            image = document.createElement('h2')
            image.classList.add('default-text')
            image.innerText = 'SAMSUNG'
            if(a.urlToImage){
                image = document.createElement('img')
                image.classList.add('link-img')
                image.src = a.urlToImage
            }
          
            newsOutput.append(link,breakLine,image,breakLine2)
        });
        newsSFX.pause()
        newsSFX.currentTime = 0
        newsSFX.play()
}).catch(err => console.log(err))
})
bmi.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')
   setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      bmiBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          bmiBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "BMI.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);
})
bmiSend.addEventListener('click',function(){
  popSFX.pause()
  popSFX.currentTime = 0
  popSFX.play()
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
      'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  }
  while (bmiOutput.firstElementChild) {
    bmiOutput.removeChild(bmiOutput.firstElementChild)
}
  if(!weight.value||!height.value){
    return
  }
  fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight.value}&height=${Number(height.value)*0.01}`,options
  ).then(res => res.json()).then(data =>{
    fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${data.bmi}`,options).then(res2 => res2.json() ).then(data2=>{
      let score = document.createElement('p')
      let category = document.createElement('p')
      score.innerText = `BMI:`+data.bmi
      score.classList.add('bmi-result')
      category.innerText = `Status:`+data2.weightCategory
      category.classList.add('bmi-result')
      bmiOutput.append(score,category)
      newsSFX.pause()
      newsSFX.currentTime = 0
      newsSFX.play()
    }).catch(err2 => console.log(err2))
   
}).catch(err => console.log(err))
})
gif.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')
   setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      gifBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          gifBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "GIF.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);
})
gifQ.addEventListener('change',function(){
  while (gifOutput.firstElementChild) {
      gifOutput.removeChild(gifOutput.firstElementChild)
  }
  if(this.value)
    popSFX.pause()
  popSFX.currentTime = 0
  popSFX.play()
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=NoOhw3n2Pu8zcQsroMOnxNYdbvtD1nCI&q=${this.value}`).then(res => res.json()).then(data =>{
     console.log(data);
  
     data.data.forEach((d,i) =>{
      let title = document.createElement('p')
      let link = document.createElement('a')
      let img = document.createElement('img')
      title.innerText = (i+1)+'.' +d.title
      link.href = d.images.original.url
      link.target = '_blank'
      link.classList.add('link')
      img.src = d.images.original.url
      img.classList.add('gif-img')
      link.appendChild(img)
      gifOutput.append(title,link)
      newsSFX.pause()
      newsSFX.currentTime = 0
      newsSFX.play()
     })
}).catch(err => console.log(err))
})
music.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  musicIndex = 0
  musicPlayer.src = musicSrc[0].src
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')
   setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      musicBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          musicBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "Music.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);
})
musicPlay.addEventListener('click',function(){
  if(musicPlayer.paused){
   playImg.style.display = 'none'
   pauseImg.style.display = 'inline'
    musicSvg.style.animation = 'musicRot 10s linear infinite alternate'
     musicPath.style.animation = 'musicPath 20s linear infinite alternate'
    musicPlayer.play()
    return
  }
     playImg.style.display = 'inline'
   pauseImg.style.display = 'none'
     musicSvg.style.animation = 'none'
     musicPath.style.animation = 'none'
  musicPlayer.pause()
})
musicNext.addEventListener('click',function () {
    playImg.style.display = 'inline'
   pauseImg.style.display = 'none'
      musicSvg.style.animation = 'none'
      musicPath.style.animation = 'none'
  musicPlayer.pause()
  if(musicPlayer.src == musicSrc[musicSrc.length-1].src){
    musicIndex = 0
    musicPlayer.src = musicSrc[0].src
    return
  } 
  musicIndex++
  musicPlayer.src = musicSrc[musicIndex].src
})
musicPrev.addEventListener('click',function(){
    playImg.style.display = 'inline'
   pauseImg.style.display = 'none'
      musicSvg.style.animation = 'none'
      musicPath.style.animation = 'none'
  musicPlayer.pause()
  if(musicPlayer.src == musicSrc[0].src){
    musicIndex = musicSrc.length-1
    musicPlayer.src = musicSrc[musicSrc.length-1].src
    return
  } 
  musicIndex--
  musicPlayer.src = musicSrc[musicIndex].src
})
weather.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  while (weatherBox.firstElementChild) {
    weatherBox.removeChild(weatherBox.firstElementChild)
}
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25.0550334&lon=121.6040867&units=metric&lang=zh_tw&appid=06f2d10c18a3520679c2ef565103fc74`).then(res=>res.json()).then(data =>{
    let icon = document.createElement('img')
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    icon.classList.add('weather-icon')
    let description = document.createElement('p')
    description.innerText = data.weather[0].description
    description.classList.add('weather-description')
    let temp = document.createElement('p')
    temp.innerText = `體感溫度：${data.main.feels_like}℃`
    temp.classList.add('weather-description')
    let humidity = document.createElement('p')
    humidity.innerText = `濕度：${data.main.humidity}%`
    humidity.classList.add('weather-description')
    weatherBox.append(icon,description,temp,humidity)

    setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      weatherBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          weatherBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "Weather.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);

  }).catch(err => console.log(err))
 

})
camera.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')
   setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      cameraBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          cameraBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "Camera.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);
})
cameraCapture.addEventListener('change',function (e) {
  const image = cameraCapture.files[0]
  if(image){
    cameraPreview.src = URL.createObjectURL(image)
    getPic.href = URL.createObjectURL(image)
    getPic.download = 'photo'
    getPic.classList.add('show')
  }
})
chat.addEventListener('click',function(){
  dingSFX.pause()
  dingSFX.currentTime = 0
  dingSFX.play()
  message.classList.remove("show");
  upperCover.classList.add('mode')
  upperInner.classList.add('mode')
  lower.classList.add('mode')
   svgPath.classList.remove('show')
   grid.classList.remove('show')
   setTimeout(() => {
      grid.style.display = 'none'
      svgPath.style.display = 'none'
      chatBox.style.display = 'flex'
      home.style.display = 'inline'
      setTimeout(() => {
          chatBox.classList.add('show')
          home.classList.add('show')
          message.innerText = "Chat.";
          message.classList.add("show");
          message.classList.add('mode')
      }, 1);
  }, 1000);
})
chatQ.addEventListener('change',function(){
if(this.value){
  popSFX.pause()
  popSFX.currentTime = 0
  popSFX.play()
  let ask = document.createElement('p')
  ask.innerText = '🧑🏻‍🦱:'+this.value
  ask.classList.add('i-said')
  chatOutput.appendChild(ask)
  const payload = JSON.stringify({
    messages: [
      {
        role: 'user',
        content: this.value
      }
    ],
    web_access: false
  })
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: payload
  };
  fetch('https://chatgpt-42.p.rapidapi.com/chatgpt',options).then(res => res.json()).then(data =>{
    console.log(data);
    let reply = document.createElement('p')
    reply.innerText ='💻:' + data.result
    reply.classList.add('ai-said')
   chatOutput.appendChild(reply)
   newsSFX.pause()
   newsSFX.currentTime = 0
   newsSFX.play()
 }).catch(err => console.log(err))
}

})
home.addEventListener('click',function(){

    let nodes = upperInner.children
    message.classList.remove('mode')
    message.classList.remove("show");
    upperCover.classList.remove('mode')
    upperInner.classList.remove('mode')
    lower.classList.remove('mode')
    for(let i=0;i<nodes.length;i++){
        nodes[i].classList.remove('show')
    }
    this.classList.remove('show')

    setTimeout(() => {
        this.style.display = 'none'
       cameraPreview.src = 'images/photo-camera.png'
      getPic.classList.remove('show')
      playImg.style.display = 'inline'
      pauseImg.style.display = 'none'
        musicSvg.style.animation = 'none'
        musicPath.style.animation = 'none'
     musicPlayer.pause()
        for(let i=0;i<nodes.length;i++){
            nodes[i].style.display = 'none'
        }
          grid.style.display = 'grid'
        svgPath.style.display = 'block'
        setTimeout(() => {
            svgPath.classList.add('show')
            grid.classList.add('show')
            message.innerText = "Welcome.";
            message.classList.add("show");
        }, 1);
    }, 1000);
})