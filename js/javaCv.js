/*----------------------------------- URL Refresh -----------------------------------*/
window.onload = function() {
    if (window.location.hostname) {
        history.replaceState(null, null, ' ');
    }
}


/*----------------------------------- Page Top -----------------------------------*/
function scrollToTop() {
    // Haz que la página se desplace hacia arriba de manera instantánea
    window.scrollTo(0, 0);
}

// Llama a la función para que se ejecute inmediatamente al cargar la página
scrollToTop();


/*----------------------------------- Loader -----------------------------------*/
window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var loaderP = document.getElementById('loaderP');
    var hidden = document.getElementById('hiddenBody');
    setTimeout(function() {
        loader.style.display = 'none';
        loaderP.style.display='none';
        hidden.style.overflow = 'visible';
        hidden.style.overflowX = 'hidden';
        loaderP.style.animationPlayState = 'paused';

        const miElemento = document.getElementById('loaderP');
        // const miElemento1 = document.querySelector('.text-pop-up-top');

        // if (miElemento.style.animationPlayState === 'paused') {
        //     miElemento1.style.animationPlayState = 'running';
        // }
    },0);
});

/*----------------------------------- NavScroll -----------------------------------*/ 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".hrefNav");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });
});

/*-----------------------------------  Menu hamburguesa -----------------------------------*/ 
document.querySelector('.menu-btn').addEventListener('click', () => {
	event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#xham').classList.toggle('activeXHam');
    document.querySelector('#ham').classList.toggle('activeHam');
});

document.querySelector('.navEle').addEventListener('click', () => {
	event.stopPropagation();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('#xham').classList.toggle('activeXHam');
    document.querySelector('#ham').classList.toggle('activeHam');
});

window.onclick = function (e) {
	document.querySelector('.menu').classList.remove('active');
	document.querySelector('#xham').classList.remove('activeXHam');
    document.querySelector('#ham').classList.remove('activeHam');
}


/*-------------------------------- CV --------------------------------*/
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});


/*----------------------------------- Cambio de tamaño nav -----------------------------------*/ 
window.addEventListener("load", function() {
    const nav = document.querySelector(".header");
    const icoLogo = document.querySelector("#logoHeader");
    const hamNav = document.querySelector("#ham");
    
    // const container = document.querySelector("#loaderP");
    
    // const navBottom = nav.getBoundingClientRect().bottom;
    // const containerBottom = container.getBoundingClientRect().bottom;

    nav.classList.add("smaller");
    icoLogo.classList.add("smallerIco");
    hamNav.classList.add("smallerHam");
    // if (navBottom < containerBottom - 60) {

    // } else {
    //     nav.classList.remove("smaller");
    //     icoLogo.classList.remove("smallerIco");
    //     hamNav.classList.remove("smallerHam");
    // }
});


/*----------------------------------- AOS -----------------------------------*/
$(document).on('ready', function () {
    // initialization of aos
    AOS.init({
        duration: 850,
        once: false
    });
});

/*----------------------------------- Ir pagina inicio -----------------------------------*/
function irPaginaInicioFunction(){
    window.open("./index.html", "_self");
}