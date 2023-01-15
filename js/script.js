//반응형 웹 script

//화면 너비에 따라
if (matchMedia('screen and (max-width: 1119px)').matches) {
    //화면 크기가 1200px이하일때
    //header_bottom (mo ta)
    //햄버거 클릭하면 메뉴 열고 닫기
    $('.ham').click(function () {
        $('.header_bottom').animate({
            left: 0
        }, 500);
        $('.gnb_bg').fadeIn(200);
        return false;
    });

    //사이드닫기
    let hamClose = (function(){
        $('.header_bottom').animate({
            left: '-100%'
        }, 500);
        $('.gnb_bg').fadeOut(200);
        return false;      
     });

    $('.close.mo').click(hamClose);
    $('.gnb_bg').click(hamClose);

    //.d1 아코디언 메뉴
    $('.gnb .d1 .m').click(function () {
        // .sub의 display속성값을 저장
        let d = $(this).siblings('.sub').css('display');
        // console.log(d);
        //조건문 사용하기
        
        if (d == 'block') {
            $('.gnb .d1 .m').removeClass('on');
            $('.gnb .d1 .sub').slideUp();
        } else {
            $('.gnb .d1 .m').removeClass('on');
            $('.gnb .d1 .sub').slideUp();
            $(this).addClass('on');
            $(this).siblings('.sub').slideDown();
        };
        return false;
    });
} else if (matchMedia('screen and (min-width: 1200px)').matches) {
    //화면 크기가 1200px 이상일때
    //header .gnb (pc)
    $('.gnb').mouseover(function () {
        $(this).stop().animate({
            height: 360
        });
        $('.gnb_bg').stop().slideDown();
    }).mouseout(function () {
        $(this).stop().animate({
            height: 40
        });
        $('.gnb_bg').stop().slideUp();
    });
};

//탑
$('.top_close').click(function(){
    $('.top').hide();
    return false;
});

//헤더
$('.d2').mouseover(function () {
    //이벤트가 짧은 시간 안에 여러번 일어날 때 계속 깜빡이지 않도록
    $('.highlights').stop().fadeOut(0);
    $('.highlights').fadeIn(300);
    let go = $(this).offset();
    $('.highlights').offset(go);
}).mouseout(function () {
    $('.highlights').fadeOut(0);
});

//스크롤 관련 함수1
$('.quickMenu li').click(function () {
    //스크롤 이동 offset
    // 퀵 버튼의 순서값을 저장
    let i = $(this).index();
    //순서값과 같은 section을 선택 = target
    let target = $('.section2-7>section').eq(i);

    // target의 top의 위치값 = location
    // 이동하고자 하는 위치를 offset을 사용하여 location변수로 설정
    // 이동하고자 하는 위치 == location
    let location = target.offset().top;


    //스크롤을 location 위치로 0.6초 동안 이동
    $('body, html').animate({
        scrollTop: location
    }, 600);
    return false;
})

//스크롤 관련 함수2
//scroll top : 전체 중 스크롤의 좌표
// offset top : 절대적인 좌표
// 위 섹션 기준으로 fade
//높이값 유지를 위해 opacity 사용하여 움직임 주었음
$(window).scroll(function () {
    let s = $(window).scrollTop();
    let main1Top = $('.main1').offset().top;
    let main2Top = $('.main2').offset().top;
    let main3Top = $('.main3').offset().top;
    let main4Top = $('.main4').offset().top;
    let main5Top = $('.main5').offset().top;
    let main6Top = $('.main6').offset().top;
    if (s >= main1Top - 1) {
        $('.quickMenu li').removeClass('on');
      
        $('.quickMenu ul').stop().animate({
            //스크롤이 메인슬라이드 위로 가면 quickMenu ul 이 위로 올라가는 animate
            paddingTop: 0
        }, 300);
    } else {}
    //main3
    if (s >= main2Top - 1) {
        $('.quickMenu li').removeClass('on');
        $('.quick1').addClass('on');
        $('.mobile_tip_list').stop().animate({
            opacity: 1
        }, 700);
        $('.quickMenu ul').stop().animate({
            //스크롤이 메인슬라이드를 넘어가면 .quickMenu ul에 아래로 내려가는 animate
            paddingTop: 100
        }, 300);
    } else {
        $('.mobile_tip_list').stop().animate({
            opacity: 0
        }, 700);
    }
    //main4
    if (s >= main3Top - 1) {
        $('.quickMenu li').removeClass('on');
        $('.quick2').addClass('on');
        $('.t_bottom').stop().animate({
            opacity: 1
        }, 700);
    } else {
        $('.t_bottom').stop().animate({
            opacity: 0
        }, 700);
    }
    //main5
    if (s >= main4Top - 1) {
        $('.quickMenu li').removeClass('on');
        $('.quick3').addClass('on');
        $('.event_list').stop().animate({
            opacity: 1
        }, 700);
    } else {
        $('.event_list').stop().animate({
            opacity: 0
        }, 700);
    }
    //main6 fade
    if (s >= main5Top - 1) {
        $('.quickMenu li').removeClass('on');
        $('.quick4').addClass('on');
        $('.inside').stop().animate({
            opacity: 1
        }, 700);
    } else {
        $('.inside').stop().animate({
            opacity: 0
        }, 700);
    }
    //main7, main6-quick6 색깔
    if (s >= main6Top - 1) {
        $('.quickMenu li').removeClass('on');
        $('.quick5').addClass('on');
    } else {}
    //main7-quick7 색깔
    if (s >= main6Top + 400) {
        $('.quickMenu li').removeClass('on');
        $('.quick6').addClass('on');
    } else {

    }
    //main7 fade
    if (s >= main6Top + 200) {
        $('.movie_list').stop().animate({
            opacity: 1
        }, 700);
    } else {
        $('.movie_list').stop().animate({
            opacity: 0
        }, 700);
    }
});

// main4 today 현재 날짜 구하기
let now = new Date();
let month = now.getMonth() + 1;
let date = now.getDate();
let week = now.getDay();

$(window).ready(
    function () {
        $('.mm').text(month);
        $('.dd').text(date);
        //0~6 요일
        if (week == 0) {
            $('.ww').text('일요일');
        } else if (week == 1) {
            $('.ww').text('월요일');
        } else if (week == 2) {
            $('.ww').text('화요일');
        } else if (week == 3) {
            $('.ww').text('수요일');
        } else if (week == 4) {
            $('.ww').text('목요일');
        } else if (week == 5) {
            $('.ww').text('금요일');
        } else {
            $('.ww').text('토요일');
        };
    }
);


//swiper 플러그인
let main1 = new Swiper('.main1', {
    loop: true,
    pagination: {
        el: '.main1 .pager',
        clickable: true
    },
    autoplay: {
        //3초에 한 번 움직이기
        delay: 3000,
    },
    speed: 1000
});
$('.main1 .ms_stop').click(
    function () {
        main1.autoplay.stop();
        $(this).hide();
        $('.main1 .ms_play').show();
    }
);
$('.main1 .ms_play').click(
    function () {
        main1.autoplay.start();
        $(this).hide();
        $('.main1 .ms_stop').show();
    }
);

//smart_bn slide
let smart_bn = new Swiper('.smart_bn', {
    loop: true,
    autoplay: {
        //3초에 한 번 움직이기
        delay: 3000
    },
    speed: 1000,
    pagination: {
        el: '.smart_bn .s_pager',
        //페이저 숫자로
        type: 'fraction'
    },
});
$('.smart_bn .s_stop').click(
    function () {
        smart_bn.autoplay.stop();
        $(this).hide();
        $('.smart_bn .s_play').show();
        return false;
    }
);
$('.smart_bn .s_play').click(
    function () {
        smart_bn.autoplay.start();
        $(this).hide();
        $('.smart_bn .s_stop').show();
        return false;
    }
);