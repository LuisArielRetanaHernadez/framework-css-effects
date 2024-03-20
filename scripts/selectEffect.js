import { stylesEffects } from './codeEffects'
const effect = document.getElementsByClassName('effect');

const isShowMobal = false

effect.onclick = (e) => {
  e.preventDefault();

  const effectName = effect.getAtribute('effect')
  
  const effectInformation = stylesEffects.find(i => i.effect === effectName)

  if (effectInformation) {
    templateMobal(effectInformation)
  }
}

const templateMobal = (...arg) => {
  return `
    <div class='mobal'>
      <div class='mobal__view>
        <span id='copy-code' class='button button--copy'>copy</span>
        <code class='mobal__view-code>
          ${arg.code}
        </code>
      </div>
      <div class='mobal__description'>
        <h1 class='title'>${arg.title}</h1>
        <p class='mobal__text'>
          ${arg.description}
        </p>
        <button class='button'>
          close
        </button>
      </div>
    </div>
  `
}