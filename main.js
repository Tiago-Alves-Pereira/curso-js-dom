const buttons = document.querySelectorAll('.tecla')

function onClickSound(classAudio) {
  const idAudio = `#som_${classAudio}`
  const element = document.querySelector(idAudio)

  if (element && element.tagName === 'AUDIO') {
    element.play()
  } else {
    console.log('elemento não encontrado')
  }
}

for (let count = 0; count < buttons.length; count++) {
  const instrument = buttons[count]
  const classAudio = instrument.classList[1]

  instrument.onclick = () => {
    onClickSound(classAudio)
  }

  instrument.onkeydown = event => {
    if (event.code === 'Space' || event.code === 'Enter') {
      instrument.classList.add('ativa', 'active')
    }
  }

  instrument.onkeyup = function () {
    instrument.classList.remove('ativa', 'active')
  }
}
