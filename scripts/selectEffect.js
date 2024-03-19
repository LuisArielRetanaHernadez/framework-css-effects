const effect = document.getElementsByClassName('effect');

const isShowMobal = false

const templateMobal = (...arg) => {
  return `
    <div>
      <div>
        <span>copy</span>
        <img src="${arg.img}" alt="">
      </div>
      <div>
        <h1>${arg.title}</h1>
        <p>
          ${arg.description}
        </p>
        <button>
          close
        </button>
      </div>
    </div>
  `
}