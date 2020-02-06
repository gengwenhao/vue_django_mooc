<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
  @import "static/scss/constant";

  html, body, h1, h2, h3, h4, h5, h6, div, dl, dt, dd, ul, ol, li, p, blockquote, pre, hr, figure, table, caption, th, td, form, fieldset, legend, input, button, textarea, menu {
    margin: 0;
    padding: 0;
    font: 12px/1.14 "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
  }

  body {
    background: $homeBackgroundColor;
    width: 100%;
  }

</style>