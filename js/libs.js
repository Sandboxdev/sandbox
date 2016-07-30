$(document).ready(function(){

	$('#mainSection').fullpage({
		menu:'#responsive-menu',
		slidesNavigation: true,
		anchors:['firstSection','secondSection','3rdSection','4rdSection','5rdSection','6rdSection'],
		afterLoad:function(link, index) { 

			if(link == "secondSection"){
					//вторая секция, левый блок теста.
					$('#section2 p,.textSection2 h3').show(function(){
						$(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0})
					});
					$('#section2 p,.textSection2 h3').addClass('fadeInLeft');

					//
					$('.weCanSection2 h3,.weCanSection2 ul').show(function(){
						$(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0})
					});
					$('.weCanSection2 h3,.weCanSection2 ul').addClass('fadeInRight');
					
					
				} 

				if(link == "3rdSection") {

				} 
			},
			afterRender: function(){


					//playing the video
					$('video').get(0).play();
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
    			alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
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
        			alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');  
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
        			alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
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

    function calculate() {

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

    	$('#btnCalculate').css("margin-top", "12px");
    	$('#result').text("=" + coast + "$");
    	coast = 0;
    }

    function resetCoastPopup() {
    	$('#btnCalculate').css("margin-top", "70px");
    	$('#result').text("");
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
    ["Сервисы", "Services"],
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
    "no phrase"],
    ["Расчитать", "Сalculate"],
    ["Тип Веб-приложения", "Type of application"],
    ["Логотип", "Logo"],
    ["Мультиязычность", "Multilanguage"],
    ["API социальных сетей", "API social networks"],
    ["Заказывай дешевле", "Order cheaper"],
    ["При заказе", "Get a 10%"],
    ["полного пакета", "discount"],
    ["услуг", "when"],
    ["скидка в 10%", "ordering"],
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
    ["Services", "Сервисы"],
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
    ["no phrase",
    "Landing page - сайт, который продает. Разработаем сайт, который привлечет новых клиентов к Вашей услуге, товару, событию."],
    ["Сalculate", "Расчитать"],
    ["Type of application", "Тип Веб-приложения"],
    ["Logo", "Логотип"],
    ["Multilanguage", "Мультиязычность"],
    ["API social networks", "API социальных сетей"],
    ["Order cheaper", "Заказывай дешевле"],
    ["Get a 10%", "При заказе"],
    ["discount", "полного пакета"],
    ["when", "услуг"],
    ["ordering", "скидка в 10%"],
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



});