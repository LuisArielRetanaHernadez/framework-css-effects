const stylesEffects = [
  {
    effect: 'flip-y',
    code: `
    <div class="flip-y">
      <div class="flip-y__front flex-center">
        (has hover)
        contenido frontal
      </div>
      <div class="flip-y__back flex-center">
        contenido atrasero
      </div>
    </div>
    `
  },
  {
    effect: 'flip-x',
    code: `
    <div class="flip-y">
      <div class="flip-y__front">
        (has hover)
        contenido frontal
      </div>
      <div class="flip-y__back">
        contenido atrasero
      </div>
    </div>
    `
  },
  {
    effect: 'card-spontiando',
    code: `
    <div class="card-spontiando flex-center">
      Has hover
      <div class="spontiando flex-center">
        Contenido
      </div>
    </div>
    `
  },
  {
    effect: 'card__border--primary',
    code: `
    <adiv class="card__border--primary">
      <div class="content flex-center">
        contenido frontal
      </div>
    </adiv>
    `
  },
  {
    effect: 'card-img-more',
    code: `
    <div class="card-img-more">
      <div class="card__img">
        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1703037125/cards_hover/xdiuallf032p5al8q0ge.jpg" alt="" srcset="">
      </div>

      <div class="content flex-center">
        Contenido
      </div>
    </div>
    `
  },
  {
    effect: 'icon-spontiando',
    code: `
    <a href="" class="icon-spontiando">
      <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1710820563/borrador/ihvdmuw07lggl21zhycq.png" alt="" class="">
    </a>
    `
  },
  {
    effect: 'icon-beat',
    code: `
    <a href="" class="icon-beat">
      <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1710820563/borrador/ihvdmuw07lggl21zhycq.png" alt="" class="">
    </a>
    `
  },
  {
    effect: 'card__border-primary',
    code: `
    <a href="" class="card__border-primary">
      <div class="content">
        <img src="https://res.cloudinary.com/dqmkovsdy/image/upload/v1710820563/borrador/ihvdmuw07lggl21zhycq.png" alt="" class="">

      </div>
    </a> 
    `
  },
]