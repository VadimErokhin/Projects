const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
  },


});

const gallerySwiper = new Swiper('.gallery-swiper', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.gallery__button-right',
    prevEl: '.gallery__button-left',
  },

  pagination: {
    el: '.swiper-pagination-fraction',
    type: 'fraction',
  },





});



const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});

const items = document.querySelectorAll('.js-events-hidden');
const btn = document.querySelector('.events__btn');
btn.addEventListener('click',()=>{
  items.forEach(i=>{
    i.classList.remove("js-events-hidden")
  })
})




$(function () {
  $( "#accordion" ).accordion();
  $( "#accordion" ).accordion({
    collapsible: true
  });
});

const publicationSwiper = new Swiper('.swiper-publication', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.publication__button-right',
    prevEl: '.publication__button-left',
  },

  pagination: {
    el: '.swiper-publication-fraction',
    type: 'fraction',
  },





});

const projectsnSwiper = new Swiper('.swiper-projects', {
  // Optional parameters
  loop: false,
  breakpointsBase: 'container',
  navigation: {
    nextEl: '.projects__button-right',
    prevEl: '.projects__button-left',
  },

});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12
    
  },{
    autoFitToViewport: 'always'

  });
 

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/Placemark.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
    });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

document.querySelectorAll(".catalog__item").forEach(item => {
	item.addEventListener("click", function() {
  		let btn = this;
      btn.classList.add("item-active");
      document.querySelectorAll(".catalog__item").forEach(el => (el != btn) ? el.classList.remove("item-active") : false);
  })
})


var selector = document.getElementById("input-tel");

  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength:2,
      maxLength:10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.lenght === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel:  'Недопустимый формат',
  },

  });



  document.querySelectorAll(".hero__item-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".btn-list");
      
      document.querySelectorAll(".hero__item-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("button-active");
        }
      });
      
      document.querySelectorAll(".btn-list").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("btn-list-active");
        }
      })
      dropdown.classList.toggle("btn-list-active");
      btn.classList.toggle("button-active")
    })
  })


  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".hero__list")) {
      document.querySelectorAll(".btn-list").forEach(el => {
          el.classList.remove("btn-list-active");
      })
       document.querySelectorAll(".hero__item-btn").forEach(el => {
          el.classList.remove("button-active");
      });
    }
  })
  

  $(document).ready (function(){
    const flags = Array.from(document.querySelectorAll('.catalog__button'));
    const flagsContentsAll = Array.from(document.querySelectorAll(`.catalog__wrapper *`));
    const Contents = Array.from(document.querySelectorAll(`.catalog__wrapper [data-flag="it"]`));
    Contents.forEach(i=>{
      i.classList.add("catalog-active")
    })
   flags.forEach(item=>{
     
     item.addEventListener("click", function(e) {
      $("#accordion").accordion('option', 'active', false);
       console.log(e)
       const type = e.target.dataset.flag
       const flagsContents = Array.from(document.querySelectorAll(`.catalog__wrapper [data-flag="${type}"]`));
       console.log(type)
      //  const currentContent = flagsContents.find(i=>i.dataset.flag === type)
       flagsContentsAll.forEach(i=>{
         i.classList.remove("catalog-active")
       })
       flagsContents.forEach(i=>{
        i.classList.add("catalog-active")
      })
     })
   })

  })

  tippy('.tooltip__one', {
    content: 'Пример современных тенденций - современная методология разработки',
  });

  tippy('.tooltip__two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });

  tippy('.tooltip__three', {
    content: 'В стремлении повысить качество',
  });


 




  


