window.addEventListener('load',function(){
    let phone = document.getElementById('phone')
    let info = document.getElementById('info')
    let up = document.getElementById('up')
    let upperCover = document.getElementById('upper-cover')
    let upperInner = document.getElementById('upper-inner')
    let lower = document.getElementById('lower')
    let close = document.getElementById('close')
    info.addEventListener('click',function(){
        let info = this
        info.innerText = ''
        info.style.animation = 'none'
        setTimeout(() => { 
        info.innerText = new Date().toLocaleString()
        info.style.animation = 'fadeout 1s 0.5s linear 1 forwards'
        },1);
    })
    up.addEventListener('click',function(){
        phone.classList.add('open')
        upperCover.classList.add('open')
        upperInner.classList.add('open')
        lower.classList.add('open')
     
    })
    close.addEventListener('click',function(){
        phone.classList.remove('open')
        upperCover.classList.remove('open')
        upperInner.classList.remove('open')
        lower.classList.remove('open')
    
    })
})