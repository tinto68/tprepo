
/* console.log(document) */

var data_car = [
    {
        nom: 'Peugeot 208 rouge',
        prix: 15000,
        description: '',
        img: '/peugeot208_rouge.jpeg'
    },
    {
        nom: 'Peugeot 208 jaune',
        prix: 336,
        description: 'android14',
        img: '/peugeot208_jaune.jpeg'
    },
    //
    //    nom: 'DOOGEE S97 PRO',
    //    prix: 226,
    //    description: 'android15',
    //    img: './tel3.webp'
    //},
    // {
    //     nom: 'DOOGEE S97 PRO',
    //    prix: 186,
    //    description: 'android13',
    //     img: './tel1.webp'
    // },
    //{
     //   nom: 'Sony',
      //  prix: 336,
     //   description: 'android14',
     //   img: './tel2.webp'
    //},
    // {
    //     nom: 'DOOGEE S97 PRO',
    //     prix: 226,
    //     description: 'android15',
    //     img: './tel3.webp'
    // },
    // {
    //     nom: 'DOOGEE S97 PRO',
    //     prix: 186,
    //     description: 'android13',
    //     img: './tel1.webp'
    // },
    // {
    //     nom: '',
    //     prix: 336,
    //     description: 'android14',
    //     img: './tel2.webp'
    // },
    // {
    //     nom: 'DOOGEE S97 PRO',
    //     prix: 226,
    //     description: 'android15',
    //     img: './tel3.webp'
    // },
    // {
    //     nom: 'DOOGEE S97 PRO',
    //     prix: 186,
    //     description: 'android13',
    //     img: './tel1.webp'
    // },
   
]
// creation de la liste qui va englober le tout en liste
 var ulcar= document.createElement('ul')
 ulcar.classList.add("uk-grid-small","uk-child-width-1-2","uk-child-width-1-4@s" )
 ulcar.setAttribute("uk-sortable","handle: .uk-card")
 ulcar.setAttribute("uk-grid","")

 // Attribution de chaque élément qui compose la DIV pour chaque donnée de telephone
 data_car.forEach(tel => {

    // creation 'li class uk first column'
    var liCar=document.createElement('li')
    //liMobile.style='display:inline-block;'
   
    // creation de la div class...
    var divCar = document.createElement('div')
    divCar.classList.add("uk-card")
    divCar.classList.add("uk-card-default")
    divCar.classList.add("uk-card-body")
    divCar.classList.add("uk-text-center")
    divCar.classList.add("uk-sortable-handle")
   
   //  divMobile.classList.add("uk-card","uk-card-default","uk-card-body","uk-text-center","uk-sortable-handle")
   
   // creation de l'emplacement de l'image du telephone
   var imgCar=document.createElement('img')
   imgCar.src=tel.img
  
   // creation de l'emplacement du nom du telephone
   var brandCar=document.createElement('h4')
   brandCar.innerText=tel.nom
  
   // creation de l'emplacement du prix du telephone
   var priceCar = document.createElement('p')
   priceCar.innerText=tel.prix
  
   // creation de l'emplacement du descriptif du telephone
   var descriptionCar=document.createElement('p')
   descriptionCar.innerText=tel.description
  
   // Affichage de tous les éléments détaillé du mobile obtenus dans la DIV et data_telephone
  divCar.appendChild(imgCar)
  divCar.appendChild(brandCar)
  divCar.appendChild(descriptionCar)
  divCar.appendChild(priceCar)
  
  // Recap de l'arborescence du DOM 'li' 'lu' 'div' crée plus haut pour un affichage final
  liCar.appendChild(divCar)
  
  ulcar.appendChild(liCar)
  document.body.appendChild(ulcar)
  

  function createDomElement(type, classes, id, attributes) {

    var domElement = document.createElement(type)

 

    if (classes) {

        console.log('classes')

        classes.forEach(domElementClass => {

            domElement.classList.add(domElementClass)

        })

    }
    domElement.id = id

 

    if (attributes) {

        console.log('attributes')

        for (const [key, value] of Object.entries(attributes)) {

            domElement.setAttribute(key, value)

        }

    }

    return domElement

}

function createImgElement(src, url) {

    let img = document.createElement('img')

    if (src) {

        img.src = src

    } else if (url) {

        img.url = url

    }

    return img

}


  })
  

