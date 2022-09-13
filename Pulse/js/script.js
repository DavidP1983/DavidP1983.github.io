$(document).ready(function(){
    $('.carousel__inner').slick({ 
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right_arrow.svg"></button>',
        // centerMode: true,
        // focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,            
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true,            
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true, 
                    arrows: false
                }
            }

        ]
    });

    //   <!-- Пример Подключение второго слайдера tiny-slider-->
    // const slider = tns({
    //     container: '.carousel__inner',
    //     items: 1,
    //     slideBy: 'page',
    //     autoplay: false,
    //     controls: false,
    //     nav: false

    //   });

    // document.querySelector('.slick-prev').addEventListener('click', function () {
    //     slider.goTo('prev');
    // }); 

    // document.querySelector('.slick-next').addEventListener('click', function () {
    //     slider.goTo('next');
    // }); 
  

    // Изначально мы получили ul со всеми табами, дальше мы говорим, что мы кликаем на один из елементов, который находится внутри, а именно li:not(.catalog__tab_active) у которого нет определенного класса not(.catalog__tab_active)
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        // $(this) ссылается на catalog__tab_active. Т.е. на тот елемент на который мы нажали
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });


    //   Мы получили ссылки, дальше для каждой ссылки мы будем выполнять дейтсвия, мы будем на нее кликать. Дальше мы говорим, а что именно будет происходить когда мы будем кликать. 
    //   $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });

    //   });

    //   $('.catalog-item__back').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });

    //   });

      function toogleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
    
          });
      };

      toogleSlide('.catalog-item__link');
      toogleSlide('.catalog-item__back');


    //   Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
        $('input[name=name]').focus();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
    });


    $(document).on('click', function(e){
        // e.preventDefault(); убрал из-зи того, чтоб в кнопках не срабатывает атрибут required
        if(!(($(e.target).closest('#consultation').length > 0) || ($(e.target).closest('#order').length > 0) ||  ($(e.target).closest('[data-modal=consultation]').length > 0) || ($(e.target).closest('.button_catalog').length > 0))) {
            $('.overlay, #consultation, #thanks, #order').fadeOut();
        }
     
    });

    $('.button_catalog').each(function(i){
        $(this).on('click', function(){
        // Внурти модального окна #order есть заголовок .modal__descr, мы говорим, что во внутрь мы хотим поместить какокй-то текст text(). Данная команда text() работает в двух направлениях либо "получить" текст внутри елемента '#order .modal__descr' если мы пропишем просто text(). Либо "записать" некий текст во внутрь данного елемента '#order .modal__descr', если мы что-то поместим в text('я новый зоголовок').
        // text($('.catalog-item__subtitle').eq(i).text()) - данная команда говорит, мы получили текст с некого елемента.
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
            $('input[name=name]').focus();

        });
    });



    //validation

    
    function validateForms(form) {
        $(form).validate({
            rules: {
                name:{
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                  },
                phone: "Please specify your phone",
                email: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                }
              }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');



    // Mask validation
    
    $('input[name=phone]').mask("+1 (999) 999-99-99");


    
    
    
    // Smooth scroll

    // Появлении Стрелки на определенном уровне
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    // Плавный скролл стрелки
    // Ссылка 'a' у которой есть определенный атрибут [href^='#'].  Атрибут 'href' будет начинаться -'^'  с '#'. После чего мы говорим, что на данную ссылку пользователь будет кликать.
    $("a[href^='#up']").click(function() {
        // Берем ссылку 'a' с атрибутом href, в нашем случае у нас будет '#up'
        const _href = $(this).attr("href");
        // Анимация
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });



    // Animation

    new WOW().init();

  });


