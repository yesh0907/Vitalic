export default { install }

function install (Vue, options) {
  const LoadConstructor = Vue.extend(require('./Load.vue'))

  // vars
  let done = true
  let skewAngle = 20
  let scale = 1.65
  let delay = 600

  // init el
  let LoadElement = new LoadConstructor()
  LoadElement.vm = LoadElement.$mount()
  document.body.appendChild(LoadElement.vm.$el)
  LoadElement.vm.visible = true
  LoadElement.dom = LoadElement.vm.$el
  LoadElement.dom.querySelector('.panels').style.transform = 'skewY(' + skewAngle + 'deg) scale(' + scale + ')'

  // panels
  let u = LoadElement.dom.querySelector('.panel#up').classList
  let d = LoadElement.dom.querySelector('.panel#down').classList

  // globals
  Vue.load = { start, finish }

  function start (op, callback) {
    if (!done) return

    LoadElement.dom.style.zIndex = '10000'
    if (!u.contains('openUp') && !u.contains('closeUp')) {
      u.add('closeUp')
      d.add('closeDown')
    } else {
      _toggle()
    }
    _giveCallback(callback)
  }

  function finish (op, callback) {
    if (!done) return

    if (!(u.contains('closeUp') && d.contains('closeDown')) ||
        !u.contains('openUp') && !u.contains('closeUp')) return

    _toggle()
    _giveCallback(function () {
      LoadElement.dom.style.zIndex = '-1'
      if (typeof cb === 'function') {
        callback()
      }
    })
  }

  function _toggle () {
    u.toggle('openUp')
    u.toggle('closeUp')
    d.toggle('openDown')
    d.toggle('closeDown')
  }

  function _giveCallback (cb) {
    done = false
    setTimeout(function () {
      done = true
      if (typeof cb === 'function') {
        cb()
      }
    }, delay)
  }
}
