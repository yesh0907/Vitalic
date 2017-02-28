<template>
  <div id="navbar">
    <div class="fixed-action-btn toolbar">
      <a class="btn-floating btn-large red">
        <i class="material-icons">reorder</i>
      </a>
    <ul>
      <li class="waves-effect waves-light"><router-link to="/"><i class="material-icons">home</i></router-link></li>
      <li class="waves-effect waves-light"><router-link to="/About"><i class="material-icons">info</i></router-link></li>
      <li class="waves-effect waves-light"><router-link to="/Detail"><i class="material-icons">show_chart</i></router-link></li>
      <li class="waves-effect waves-light"><router-link to="/Desktop"><i class="material-icons">dashboard</i></router-link></li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        document.getElementById(key).className += 'active-class'
        document.getElementById(key).className = document.getElementById(key).className.replace(/(?:^|\s)MyClass(?!\S)/g, '')
      }
    }
  }
</script>

<style>
.menu {
  float: right;
  text-align: center;
}

.route {
  text-decoration: none;
}
.fixed-action-btn {
  position: fixed;
  right: 23px;
  bottom: 23px;
  padding-top: 15px;
  margin-bottom: 0;
  z-index: 998;
}

.fixed-action-btn.active ul {
  visibility: visible;
}

.fixed-action-btn.horizontal {
  padding: 0 0 0 15px;
}

.fixed-action-btn.horizontal ul {
  text-align: right;
  right: 64px;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  height: 100%;
  left: auto;
  width: 500px;
  /*width 100% only goes to width of button container */
}

.fixed-action-btn.horizontal ul li {
  display: inline-block;
  margin: 15px 15px 0 0;
}

.fixed-action-btn.toolbar {
  padding: 0;
  height: 56px;
}

.fixed-action-btn.toolbar.active > a i {
  opacity: 0;
}

.fixed-action-btn.toolbar ul {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  top: 0;
  bottom: 0;
}

.fixed-action-btn.toolbar ul li {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: inline-block;
  margin: 0;
  height: 100%;
  transition: none;
}

.fixed-action-btn.toolbar ul li a {
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: none;
  color: #fff;
  line-height: 56px;
  z-index: 1;
}

.fixed-action-btn.toolbar ul li a i {
  line-height: inherit;
}

.fixed-action-btn ul {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  bottom: 64px;
  margin: 0;
  visibility: hidden;
}

.fixed-action-btn ul li {
  margin-bottom: 15px;
}

.fixed-action-btn ul a.btn-floating {
  opacity: 0;
}

.fixed-action-btn .fab-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 40px;
  height: 40px;
  background-color: #26a69a;
  border-radius: 50%;
  -webkit-transform: scale(0);
          transform: scale(0);
}

.btn.disabled, .disabled.btn-large,
.btn-floating.disabled,
.btn-large.disabled,
.btn-flat.disabled,
.btn:disabled,
.btn-large:disabled,
.btn-floating:disabled,
.btn-large:disabled,
.btn-flat:disabled,
.btn[disabled],
[disabled].btn-large,
.btn-floating[disabled],
.btn-large[disabled],
.btn-flat[disabled] {
  pointer-events: none;
  background-color: #DFDFDF !important;
  box-shadow: none;
  color: #9F9F9F !important;
  cursor: default;
}

.btn.disabled:hover, .disabled.btn-large:hover,
.btn-floating.disabled:hover,
.btn-large.disabled:hover,
.btn-flat.disabled:hover,
.btn:disabled:hover,
.btn-large:disabled:hover,
.btn-floating:disabled:hover,
.btn-large:disabled:hover,
.btn-flat:disabled:hover,
.btn[disabled]:hover,
[disabled].btn-large:hover,
.btn-floating[disabled]:hover,
.btn-large[disabled]:hover,
.btn-flat[disabled]:hover {
  background-color: #DFDFDF !important;
  color: #9F9F9F !important;
}

.btn, .btn-large,
.btn-floating,
.btn-large,
.btn-flat {
  outline: 0;
}

.btn i, .btn-large i,
.btn-floating i,
.btn-large i,
.btn-flat i {
  font-size: 1.3rem;
  line-height: inherit;
}

.btn:focus, .btn-large:focus,
.btn-floating:focus {
  background-color: #1d7d74;
}

.btn, .btn-large {
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: .5px;
  transition: .2s ease-out;
  cursor: pointer;
}

.btn:hover, .btn-large:hover {
  background-color: #2bbbad;
}

.btn-floating {
  display: inline-block;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  background-color: #26a69a;
  border-radius: 50%;
  transition: .3s;
  cursor: pointer;
  vertical-align: middle;
}

.btn-floating:hover {
  background-color: #26a69a;
}

.btn-floating:before {
  border-radius: 0;
}

.btn-floating.btn-large {
  width: 56px;
  height: 56px;
}

.btn-floating.btn-large i {
  line-height: 56px;
}

.btn-floating.halfway-fab {
  position: absolute;
  right: 24px;
  bottom: 0;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.btn-floating.halfway-fab.left {
  right: auto;
  left: 24px;
}

.btn-floating i {
  width: inherit;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 1.6rem;
  line-height: 40px;
}

button.btn-floating {
  border: none;
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  transition: .3s ease-out;
}

.waves-effect .waves-ripple {
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  opacity: 0;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.7s ease-out;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  -webkit-transform: scale(0);
          transform: scale(0);
  pointer-events: none;
}

.waves-effect.waves-light .waves-ripple {
  background-color: rgba(255, 255, 255, 0.45);
}

.waves-effect.waves-red .waves-ripple {
  background-color: rgba(244, 67, 54, 0.7);
}

.waves-effect.waves-yellow .waves-ripple {
  background-color: rgba(255, 235, 59, 0.7);
}

.waves-effect.waves-orange .waves-ripple {
  background-color: rgba(255, 152, 0, 0.7);
}

.waves-effect.waves-purple .waves-ripple {
  background-color: rgba(156, 39, 176, 0.7);
}

.waves-effect.waves-green .waves-ripple {
  background-color: rgba(76, 175, 80, 0.7);
}

.waves-effect.waves-teal .waves-ripple {
  background-color: rgba(0, 150, 136, 0.7);
}

.waves-effect input[type="button"], .waves-effect input[type="reset"], .waves-effect input[type="submit"] {
  border: 0;
  font-style: normal;
  font-size: inherit;
  text-transform: inherit;
  background: none;
}

.waves-effect img {
  position: relative;
  z-index: -1;
}


</style>
