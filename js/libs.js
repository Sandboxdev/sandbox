
 //loader and animated first section
 $(window).load(function() {
  $('#before-load').find('i').fadeOut().end().delay(1000).fadeOut('slow', function(){
    $('#title_1s').addClass('animated fadeInUp');
    $('#buttons_1s').addClass('animated fadeInUp');
    $('#callback_block').addClass('animated fadeInUp');

});
});

 $('#callback_btn_2,#call, .buttonZakazat').click(function(){
    $('#callback_popup').addClass('animated slideInDown');
});

 $('.coast_popup_open').click(function(){
    $('#coast_popup').addClass('animated slideInDown');
});

 $(document).ready(function(){

    $('#mainSection').fullpage({
        menu:'#responsive-menu',
        responsiveWidth: 768,
        responsiveHeight: 600,
        loopHorizontal:false,
        scrollingSpeed: 700,
        slidesNavigation: true,
        anchors:['firstSection','secondSection'/*,'3rdSection'*/,'4rdSection','5rdSection','6rdSection'],
        afterLoad:function(link, index) { 

            if(link == "secondSection"){

             $('#firstSlideHeader').addClass('animated fadeInUp');
             $('#serviseDiv').addClass('animated fadeInUp');
             $('#slide1 a[href="#"]').addClass('animated fadeInUp');



         }

         if(link == "3rdSection"){





         }

         if(link == "4rdSection"){

            $('.title_3s').addClass('animated fadeInUp');
            $('.right_text').addClass('animated fadeInUp');
            $('.ten_square').addClass('animated fadeInUp');
            $('#callbackName').addClass('animated fadeInUp');
            $('#callbackPhone').addClass('animated fadeInUp');
            $('#callbackBody').addClass('animated fadeInUp');
            $('.callbackButton').addClass('animated fadeInUp');

        }

        if(link == "5rdSection"){

            $('#section5Header').addClass('animated fadeInUp');
            $('#section5Text').addClass('animated fadeInUp');
            $('#callback_btn_2').addClass('animated fadeInUp');



        }

        if(link == "6rdSection"){

            $('#callbackName_main').addClass('animated fadeInUp');
            $('#callbackPhone_main').addClass('animated fadeInUp');
            $('#callbackBody_main').addClass('animated fadeInUp');
            $('.SubmitFormButton').addClass('animated fadeInUp');
            $('.footer').addClass('animated fadeInUp');

        }



    },
    afterRender: function(){
                //playing the video
                $('video').get(0).play();
            },
            afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){


                if(slideAnchor == 'slide2'){
                    $('#slider2Header').addClass('animated fadeInUp');
                    $('.bg_steps').addClass('animated fadeIn');
                    $('.icon_1').addClass('animated fadeInUp');
                    $('.icon_2').addClass('animated fadeInUp');
                    $('.icon_3').addClass('animated fadeInUp');
                    $('.icon_4').addClass('animated fadeInUp');
                    $('.icon_5').addClass('animated fadeInUp');
                    $('.icon_6').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
                        function(){
                                // при изменении
                                $(window).resize(function() {
                                 if ( ($(window).width() >=320)&&($(window).width() <=480) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/icons480px/lines480px40pr.png) no-repeat scroll"});
                                 }

                                 else if ( ($(window).width() >=480)&&($(window).width() <=768) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/icons768px/lines.png) no-repeat scroll"});
                                 }

                                 else if ( ($(window).width() >=768)&&($(window).width() <=1200) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/lines992px80pr.png) no-repeat scroll"});
                                 }
                                 else if (($(window).width() >=1200)) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/lines.png) no-repeat scroll"});
                                 }




                             });
                                //при загрузке дока
                                $(document).ready(function() {
                                    if ( ($(window).width() >=320)&&($(window).width() <=480) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/icons480px/lines480px40pr.png) no-repeat scroll"});
                                 }

                                 else if ( ($(window).width() >=480)&&($(window).width() <=768) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/icons768px/lines.png) no-repeat scroll"});
                                 }

                                 else if ( ($(window).width() >=768)&&($(window).width() <=1200) ) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/lines992px80pr.png) no-repeat scroll"});
                                 }
                                 else if (($(window).width() >=1200)) {
                                     $('.steps_block').css({"background":" url(images/Section_2/Slide2/lines.png) no-repeat scroll"});
                                 }
                             });      




                            });

                }

                if(slideAnchor == 'slide3'){
                 $('#slide3Header').addClass('animated fadeInUp');
                 $('#first').addClass('animated fadeInUp');
                 $('#second').addClass('animated fadeInUp');
                 $('#third').addClass('animated fadeInUp');
                 $('#fourth').addClass('animated fadeInUp');
                 $('#slide3Buttons').addClass('animated fadeInUp');
             }
         }

     });

$('#togler-button').click(function(){
    $('#togler-button-bg').toggleClass('off');
    $('#rus').toggleClass('rus_off');
    $('#eng').toggleClass('eng_on');
    changeLang();
});

    //parallax
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    //callback_form_main
    document.getElementById('callback_form_main').addEventListener('submit', function(evt){
        var http = new XMLHttpRequest(), f = this;
        evt.preventDefault();
        http.open("POST", "contacts.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send("name=" + f.name.value + "&phone=" + f.phone.value + "&body=" + f.body.value + "&type=MAIN");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

                //button MAIN
                $('.SubmitFormButton').addClass('btn_success');
                $('.SubmitFormButton').removeClass('SubmitFormButtonHover');

                f.name.value = '';
                f.phone.value = '';
                f.body.value='';
            }
        }
        http.onerror = function() {
            alert('Извините, данные не были переданы');
        }
    }, false);

        //callback_form_sale
        document.getElementById('callback_form').addEventListener('submit', function(evt){
            var http = new XMLHttpRequest(), f = this;
            evt.preventDefault();
            http.open("POST", "contacts.php", true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            http.send("name=" + f.name.value + "&phone=" + f.phone.value + "&body=" + f.body.value + "&type=SALE");
            http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {

                    //button SALE
                    $('.SubmitFormButton3').addClass('btn_success3');
                    $('.SubmitFormButton3').removeClass('SubmitFormButtonHover3');

                    f.name.value = '';
                    f.phone.value = '';
                    f.body.value='';
                }
            }
            http.onerror = function() {
                alert('Извините, данные не были переданы');
            }
        }, false);

        //popup_callback_form
        document.getElementById('callback_form_popup').addEventListener('submit', function(evt){
            var http = new XMLHttpRequest(), f = this;
            evt.preventDefault();
            http.open("POST", "contacts.php", true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            http.send("name=" + f.name.value + "&phone=" + f.phone.value + "&e-mail=" + f.mail.value + "&skype=" + f.skype.value + "&type=POPUP");
            http.onreadystatechange = function() {
                if (http.readyState == 4 && http.status == 200) {

                    //button CALLBACK
                    $('.SubmitFormButton2').addClass('btn_success2');
                    $('.SubmitFormButton2').removeClass('SubmitFormButtonHover2');

                    f.name.value = '';
                    f.phone.value = '';
                    f.skype.value='';
                    f.mail.value='';
                }
            }
            http.onerror = function() {
                alert('Извините, данные не были переданы');
            }
        }, false);

    // Initialize the plugin POPUP
    $('#callback_popup').popup(
    {
        onclose: function() {
            resetCallbackPopup();
        }

    });

    $('#coast_popup').popup({

        onclose: function() {
            resetCoastPopup();
        }
    });

    /*COAST_POPUP*/
    var prices = new Object();
    prices.design = 50;
    prices.brending = 50;
    prices.mlang = 50;
    prices.seo = 100;
    prices.socapi = 50;
    prices.logo = 50;

    var typeCoast = new Object();
    typeCoast.portals_and_service = 700;
    typeCoast.shop = 500;
    typeCoast.cutaway = 250;
    typeCoast.landing = 300;

    var coast = 0;


    $('#btnCalculate').click(function(){

        var elements = document.forms["coast_form"].elements;

        if(elements.design.checked)
            coast += prices.design;
        if(elements.brending.checked)
            coast += prices.brending;
        if(elements.seo.checked)
            coast += prices.seo;
        if(elements.logo.checked)
            coast += prices.logo;
        if(elements.mlang.checked)
            coast += prices.mlang;
        if(elements.socapi.checked)
            coast += prices.socapi;

        switch(elements.type.value)
        {
            case 'portals_and_service':
            coast += typeCoast.portals_and_service;
            break;
            case 'shop':
            coast += typeCoast.shop;
            break;
            case 'cutaway':
            coast += typeCoast.cutaway;
            break; 
            case 'landing':
            coast += typeCoast.landing;
            break;
        }

        $('#btnCalculate').css("margin-top", "0");
        $('#result').text("=" + coast + "$");
        coast = 0;
    });

    function resetCoastPopup() {
        $('#btnCalculate').css("margin-top", "70px");
        $('#result').text("");
        var elements = document.forms["coast_form"].elements;
        elements.design.checked = false;
        elements.brending.checked = false;
        elements.seo.checked = false;
        elements.logo.checked = false;
        elements.mlang.checked = false;
        elements.socapi.checked = false;
        elements.type.value = 'type_app';
    }

    function resetCallbackPopup() {
        var elements = $('#callback_form_popup').children('input');
        for(var i = 0; i < elements.length; i++) {
            elements[i].value = "";
        }
    }

    //multilang

    var curLang = 0;

    var phrasesArray = 
    [
    ["Главная", "Home"],
    ["Услуги", "Services"],
    ["Портфолио", "Portfolio"],
    ["О нас", "About us"],
    ["Контакты", "Contacts"],
    ["разработка современных", "development of modern"],
    ["веб-приложений", "web applications"],
    ["Мы любим то, что делаем, получаем удовольствие от каждого проекта.", 
    "We love, what we do, and enjoy every project."],
    ["Мы создаем современные, оригинальные и смелые проекты.", 
    "We create up-to-date, original and ambitious projects."],
    ["Далее", "Next"],
    ["Связаться с нами", "Contact us"],
    ["Отправить", "Send"],
    ["Наши услуги", "Our services"],
    ["В основу наших решений всегда заложено выполнение задач. Мы никогда не делаем «красиво» просто так — мы делаем «красиво», которое зарабатывает вам деньги.",
    "Meeting the objectives is the basis of our solutions. We never do \"beautifully\" for no particular reason, we do \"beautifully\", which brings you money."],
    ["Веб разработка", "Web-development"],
    ["Сайт-визитка", "Website card"],
    ["Интернет-магазины", "Online shops"],
    ["Порталы", "Informational Websites"],
    ["Сервисы", "Web-services"],
    ["Дизайн", "Design"],
    ["Прототипы", "Prototypes"],
    ["Брендинг", "Branding"],
    ["Полиграфия", "Polygraphy"],
    ["Информационный", "Information"],
    ["дизайн", "design"],
    ["Продвижение", "Promotion"],
    ["Контекстная", "Contextual"],
    ["реклама", "advertising"],
    ["Заказать", "To order"],
    ["Этапы разработки проекта", "Stages of project development"],
    ["Наши дизайнеры и разработчики  действуют как единый, слаженный механизм на протяжении всего процесса работы, что позволяет нам эффективно создавать решения и реализовывать самые сложные задачи для любой индустрии бизнеса.",
    "Our designers and developers act as a single well co-ordinated mechanism during the whole process of work, which enables us to find effective solutions and realize the goals for any business industry."],
    ["Сколько стоит?", "How much?"],
    ["Порталы и Сервисы", "Portals and Services"],
    ["Основные отличия веб-портала от обычного сайта это -хранение неограниченных объемов любого контента.",
    "The main difference between a web portal and an ordinary site is keeping unlimited amount of any content."],
    ["Стоимость от", "Price is from "],
    ["Это, как правило, простой сайт, содержащий общую информацию о компании и роде оказываемых услуг.",
    "As a rule, this is a simple site, containing general information about a company and a type of service."],
    ["Это возможность познакомить клиентов с вашими товарами и услугами, но самое главное — дает возможность совершить покупку, не отходя от компьютера.",
    "This is an opportunity to acquaint clients with your goods and services. But most importantly, it gives a chance to make a purchase without moving away from your computer."],
    ["Landing page - сайт, который продает. Разработаем сайт, который привлечет новых клиентов к Вашей услуге, товару, событию.",
    "Landing page is a site that sales. We'll develop a site, that will draw customers' attention to your services, goods and events."],
    ["Расчитать", "Сalculate"],
    ["Тип Веб-приложения", "Type of application"],
    ["Логотип", "Logo"],
    ["Мультиязычность", "Multilanguage"],
    ["API социальных сетей", "API social networks"],
    ["Заказывай дешевле", "Order cheaper"],
    ["При заказе", "Get a 10% discount when ordering"],
    ["полного пакета", "full package"],
    ["услуг", "of"],
    ["скидка в 10%", " services"],
    ["Совершить заказ", "To order"],
    ["Молодая компания, которая предоставляет полный спектр услуг по профессиональной разработке web приложений, а также сайтов любого уровня сожности и комплексному продвежению в интернете, с использованием самых передовых технологий. В своей работе мы ориентируемся прежде всего на удовлетворение  потребностей наших клиентов, высокое качество разработки и дизайна, а также эффективное ведение рекламынх компаний.",
    "A young company, which provides a full range of services in professional development of web applications and sites of any level of complexity, integrated promotion on the Internet using the most advanced technologies. In our work we focus on meeting the needs of our customers, high quality of development and design, conduct of advertising campaigns."],
    ["почта", "mail"],
    ["телефон", "phone"],
    ["Заказать звонок", "Order a call"],
    ["Имя", "Name"],
    ["Телефон", "Phone"],
    ["Сообщение", "Message"],
    ["Заказ", "Order"],
    ["Обсуждение", "Discussion"],
    ["Прототип", "Prototype"],
    ["Разработка", "Development"],
    ["Оптимизация", "Optimization"],

    ["Home", "Главная"],
    ["Services", "Услуги"],
    ["Portfolio", "Портфолио"],
    ["About us", "О нас"],
    ["Contacts", "Контакты"],
    ["development of modern", "разработка современных"],
    ["web applications", "веб-приложений"],
    ["We love, what we do, and enjoy every project.", 
    "Мы любим то, что делаем, получаем удовольствие от каждого проекта."],
    ["We create up-to-date, original and ambitious projects.",
    "Мы создаем современные, оригинальные и смелые проекты."],
    ["Next", "Далее"],
    ["Contact us", "Связаться с нами"],
    ["Send", "Отправить"],
    ["Our services", "Наши услуги"],
    ["Meeting the objectives is the basis of our solutions. We never do \"beautifully\" for no particular reason, we do \"beautifully\", which brings you money.",
    "В основу наших решений всегда заложено выполнение задач. Мы никогда не делаем «красиво» просто так — мы делаем «красиво», которое зарабатывает вам деньги."],
    ["Web-development", "Веб разработка"],
    ["Website card", "Сайт-визитка"],
    ["Online shops", "Интернет-магазины"],
    ["Informational Websites", "Порталы"],
    ["Web-services", "Сервисы"],
    ["Design", "Дизайн"],
    ["Prototypes", "Прототипы"],
    ["Branding", "Брендинг"],
    ["Polygraphy", "Полиграфия"],
    ["Information", "Информационный"],
    ["design", "дизайн"],
    ["Promotion", "Продвижение"],
    ["Contextual", "Контекстная"],
    ["advertising", "реклама"],
    ["To order", "Заказать"],
    ["Stages of project development", "Этапы разработки проекта"],
    ["Our designers and developers act as a single well co-ordinated mechanism during the whole process of work, which enables us to find effective solutions and realize the goals for any business industry.",
    "Наши дизайнеры и разработчики  действуют как единый, слаженный механизм на протяжении всего процесса работы, что позволяет нам эффективно создавать решения и реализовывать самые сложные задачи для любой индустрии бизнеса."],
    ["How much?", "Сколько стоит?"],
    ["Portals and Services", "Порталы и Сервисы"],
    ["The main difference between a web portal and an ordinary site is keeping unlimited amount of any content.", 
    "Основные отличия веб-портала от обычного сайта это -хранение неограниченных объемов любого контента."],
    ["Price is from", "Стоимость от "],
    ["As a rule, this is a simple site, containing general information about a company and a type of service.",
    "Это, как правило, простой сайт, содержащий общую информацию о компании и роде оказываемых услуг."],
    ["This is an opportunity to acquaint clients with your goods and services. But most importantly, it gives a chance to make a purchase without moving away from your computer.",
    "Это возможность познакомить клиентов с вашими товарами и услугами, но самое главное — дает возможность совершить покупку, не отходя от компьютера."],
    ["Landing page is a site that sales. We'll develop a site, that will draw customers' attention to your services, goods and events.",
    "Landing page - сайт, который продает. Разработаем сайт, который привлечет новых клиентов к Вашей услуге, товару, событию."],
    ["Сalculate", "Расчитать"],
    ["Type of application", "Тип Веб-приложения"],
    ["Logo", "Логотип"],
    ["Multilanguage", "Мультиязычность"],
    ["API social networks", "API социальных сетей"],
    ["Order cheaper", "Заказывай дешевле"],
    ["Get a 10% discount when ordering", "При заказе"],
    ["full package", "полного пакета"],
    ["of", "услуг"],
    ["services", " скидка в 10%"],
    ["To order", "Совершить заказ"],
    ["A young company, which provides a full range of services in professional development of web applications and sites of any level of complexity, integrated promotion on the Internet using the most advanced technologies. In our work we focus on meeting the needs of our customers, high quality of development and design, conduct of advertising campaigns.",
    "Молодая компания, которая предоставляет полный спектр услуг по профессиональной разработке web приложений, а также сайтов любого уровня сожности и комплексному продвежению в интернете, с использованием самых передовых технологий. В своей работе мы ориентируемся прежде всего на удовлетворение  потребностей наших клиентов, высокое качество разработки и дизайна, а также эффективное ведение рекламынх компаний."],
    ["mail", "почта"],
    ["phone", "телефон"],
    ["Order a call", "Заказать звонок"],
    ["Name", "Имя"],
    ["Phone", "Телефон"],
    ["Message", "Сообщение"],
    ["Order", "Заказ"],
    ["Discussion", "Обсуждение"],
    ["Prototype", "Прототип"],
    ["Development", "Разработка"],
    ["Optimization", "Оптимизация"],
    ];

    var phrases = new Map(phrasesArray);

    function getPhrase(id_phrase) {
        var phrase = phrases.get(id_phrase) ? phrases.get(id_phrase) : id_phrase;
        return phrase;
    }

    function changeLang() {
        if (document.createNodeIterator && document.createTreeWalker){ //Traversal API
 nodes = document.createNodeIterator( //создание NodeItertor
  document,//обход всего документа
  NodeFilter.SHOW_TEXT,//узлы текст
  null,//нету функции фильтра
  false//в HTML не используется
  );


//nodes
var node;
while(node = nodes.nextNode())
    if(node.wholeText.match(/[\wа-яё]+/gi) != null)
        node.data = getPhrase(node.data.trim());

//forms
var forms = document.forms;

for(var i = 0; i < forms.length; i++ )
    for(var j = 0; j < forms[i].elements.length; j ++)
        if(forms[i].elements[j].placeholder != "") 
            forms[i].elements[j].placeholder = getPhrase(forms[i].elements[j].placeholder);
        alert("|" + forms[i].elements[j].placeholder + "|");

    }
}

 //button CALLBACK
 $('.SubmitFormButton2').mouseout(function(){
    $(this).removeClass('SubmitFormButtonHover2');
    $(this).removeClass('btn_success2');
});
 $('.SubmitFormButton2').mouseover(function(){
    $(this).addClass('SubmitFormButtonHover2');
});

 //button MAIN
 $('.SubmitFormButton').mouseout(function(){
    $(this).removeClass('SubmitFormButtonHover');
    $(this).removeClass('btn_success');
});
 $('.SubmitFormButton').mouseover(function(){
    $(this).addClass('SubmitFormButtonHover');
});

//button SALE
$('.SubmitFormButton3').mouseout(function(){
    $(this).removeClass('SubmitFormButtonHover3');
    $(this).removeClass('btn_success3');
});
$('.SubmitFormButton3').mouseover(function(){
    $(this).addClass('SubmitFormButtonHover3');
});

$('#tooltip').tooltip();

});
