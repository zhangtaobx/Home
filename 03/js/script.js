var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var music=document.querySelector("#music");
var musicBtn=document.querySelector("#musicBtn");
musicBtn.addEventListener('click',function () {
    if(music.paused){
        music.play();
        musicBtn.style.animationPlayState="running";
    }else {
        music.pause();
        musicBtn.style.animationPlayState="paused";
    }
})


