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
    <div>
      <div>
        <span>copy</span>
        <code>
          ${arg.code}
        </code>
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