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
        const miElemento1 = document.querySelector('.text-pop-up-top');

        if (miElemento.style.animationPlayState === 'paused') {
            miElemento1.style.animationPlayState = 'running';
        }
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

// document.querySelector('#aboutUsNav').addEventListener('click', () => {
// 	event.stopPropagation();
//     document.querySelector('.menu').classList.toggle('active');
//     document.querySelector('#xham').classList.toggle('activeXHam');
//     document.querySelector('#ham').classList.toggle('activeHam');
// });

// document.querySelector('#projectsNav').addEventListener('click', () => {
// 	event.stopPropagation();
//     document.querySelector('.menu').classList.toggle('active');
//     document.querySelector('#xham').classList.toggle('activeXHam');
//     document.querySelector('#ham').classList.toggle('activeHam');
// });
window.onclick = function (e) {
	document.querySelector('.menu').classList.remove('active');
	document.querySelector('#xham').classList.remove('activeXHam');
    document.querySelector('#ham').classList.remove('activeHam');
}

/*-------------------------------- Onda --------------------------------*/
gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		allEll = toArray('.ell'),
		colorArr = ['#42D200', '#061601','#42D200','#061601'],
		colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, {
	visibility: 'visible'
})

function animate (el, count) {
	let tl = gsap.timeline({
	defaults: {
		ease: 'sine.inOut'
	},
		repeat: -1
});
	gsap.set(el, {
		opacity:1- count/(allEll.length),
		stroke: colorInterp(count/(allEll.length))
	})

	tl.to(el, {
	attr: {
		ry: `-=${count*9.2}`,
		rx: `+=${count*5.2}`
	},
	ease: 'sine.in'
})
.to(el, {
	attr: {
		ry: `+=${count*4.6}`,
		rx: `-=${count*2.8}`
	},
	ease: 'sine'
})
.to(el, {
	duration: 2,
	rotation: -360,
	transformOrigin: '50% 50%'
}, 0).timeScale(0.5)
}


allEll.forEach((c, i) => {
	gsap.delayedCall(i/(allEll.length-1), animate, [c, i+1])
})

// gsap.to('#aiGrad', {
// 	duration: 4,
// 	delay: 0.75,
// 	attr: {
// 		x1: '-=300',
// 		x2: '-=300'
// 	},
// 	scale: 1.2,
// 	transformOrigin: '50% 50%',
// 	repeat: -1,
// 	ease: 'none'
// })
// gsap.to('#ai', {
// 	duration: 1,
// 	scale: 1.1,
// 	transformOrigin: '50% 50%',
// 	repeat: -1,
// 	yoyo: true,
// 	ease: 'sine.inOut'
// })

/*-------------------------------- Magneticoh --------------------------------*/
var swiper = new Swiper(".swiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 3,
		slideShadows: true
	},
	keyboard: {
		enabled: true
	},
	mousewheel: {
		thresholdDelta: 70
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
		slidesPerView: 1
		},
		768: {
		slidesPerView: 1
		},
		1024: {
		slidesPerView: 1.2
		},
		1560: {
		slidesPerView: 1.2
		}
	}
});

/*----------------------------------- Cambio de tamaño nav -----------------------------------*/ 
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".header");
    const icoLogo = document.querySelector("#logoHeader");
    const hamNav = document.querySelector("#ham");
    
    const container = document.querySelector(".home");
    
    const navBottom = nav.getBoundingClientRect().bottom;
    const containerBottom = container.getBoundingClientRect().bottom;
    
    if (navBottom > containerBottom - 60) {
        nav.classList.add("smaller");
        icoLogo.classList.add("smallerIco");
        hamNav.classList.add("smallerHam");
    } else {
        nav.classList.remove("smaller");
        icoLogo.classList.remove("smallerIco");
        hamNav.classList.remove("smallerHam");
    }
});


/*----------------------------------- contacto -----------------------------------*/
$(function(){

    $.fn.validate = function( options ) {
        // parametros       
        var id_msg_error = options.css.id_msg_error; 
        var class_error = options.css.class_error; 
        var msg_error = '';
        
        // Defino el ID del formulario
        var frmId = "#"+$(this).attr("id");  
        
        // Oculto el div de error        
        $(id_msg_error).css("display","none");

        // ejecuto las reglas
        $(frmId).submit(function(event){

            // Elimino las clases de error
            $(frmId+' *').removeClass(class_error);

            // Obtengo las reglas
            reglas = options.reglas;

            // Ejecuto las reglas
            for (var key in reglas) 
            {   
                var arr = reglas[key];          // regla y parametros            
                var regla = arr.split('|');     // Array de parametros
                var obj = $("#"+key);           // Campo actual

                // Campos de texto  
                if (regla[0]=='text')
                {                      
                    if ($.trim(obj.val())=='')
                    {
                        msg_error = "El campo de "+key+" no puede estar vacio. <br>";
                        obj.focus();
                        obj.addClass(class_error);
                        $(id_msg_error).css("display","block");
                        $(id_msg_error).html(msg_error);
                        return false;
                    }

                    // Valido largo minimo
                    if (regla[1])
                    {                   
                        if (obj.val().length < regla[1])
                        {
                            msg_error = "El campo "+key+" debe tener minimo "+regla[1]+ " caracteres. <br>";
                            obj.focus();
                            obj.addClass(class_error);
                            $(id_msg_error).css("display","block");
                            $(id_msg_error).html(msg_error);
                            return false;
                        }
                    }

                    // Valido largo maximo
                    if (regla[2])
                    {                   
                        if (obj.val().length > regla[2])
                        {
                            msg_error = "El campo "+key+" debe tener máximo "+regla[2]+ " caracteres. <br>";
                            obj.focus();
                            obj.addClass(class_error);
                            $(id_msg_error).css("display","block");
                            $(id_msg_error).html(msg_error);
                            return false;
                        }
                    }
                }

                // Campos de email  
                if (regla[0]=='email')
                {                 
                    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                    if (!pattern.test(obj.val()))
                    {
                        msg_error = "El campo "+key+" debe ser un correo válido. <br>";
                        obj.focus();
                        obj.addClass(class_error);
                        $(id_msg_error).css("display","block");
                        $(id_msg_error).html(msg_error);
                        return false;
                    }
                }
            }     
        return true;
        });
    }
});

/*----------------------------------- Ir pagina de magneticoh -----------------------------------*/
function irPaginaMagFunction(){
    window.open("http://magneticoh.com", "_blank");
}

/*----------------------------------- Ir a Podcast Eec-----------------------------------*/
function irPodcastEec(){
    window.open("https://www.youtube.com/@EmprendeElCohete", "_blank");
}


/*----------------------------------- Ir pagina cv empresarial -----------------------------------*/
function irPaginaCVIndFunction(){
    window.open("./cv-empresarial.html", "_self");
}

/*----------------------------------- AOS -----------------------------------*/
$(document).on('ready', function () {
    // initialization of aos
    AOS.init({
        duration: 850,
        once: false
    });
});