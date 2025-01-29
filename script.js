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
let svgPath = document.querySelector("svg");
let message = document.getElementById("message");
let map = document.getElementById('map')
let mapBox = document.getElementById('map-box')
let mapQ = document.getElementById('map-q')
let mapIframe = document.getElementById('map-iframe')
let musicSrc = document.querySelectorAll('audio.music-src')
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
let home = document.getElementById('home')
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
    }, 1);
  }, 1000);
});
map.addEventListener('click',function(){
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
        }, 1);
    }, 1000);
})
mapQ.addEventListener('change',function(){
    if(this.value)
    mapIframe.src = `https://www.google.com/maps/embed/v1/search?q=${this.value}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
})
news.addEventListener('click',function () {
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
        }, 1);
    }, 1000);
})
newsQ.addEventListener('change',function(){
    while (newsOutput.firstElementChild) {
        newsOutput.removeChild(newsOutput.firstElementChild)
    }
    if(this.value)
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
}).catch(err => console.log(err))
})
bmi.addEventListener('click',function(){
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
      }, 1);
  }, 1000);
})
bmiSend.addEventListener('click',function(){
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
    }).catch(err2 => console.log(err2))
   
}).catch(err => console.log(err))
})
home.addEventListener('click',function(){
    let nodes = upperInner.children
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