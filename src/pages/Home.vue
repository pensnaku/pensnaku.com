<template>
  <div>
    <div class="view-holder app-text">
      <p>Hello, I am <span class="secondary-color">Eedee Naku</span></p>

      <br />

      I am a Software developer. Most of my time is spent building cool software
      geared towards solving real problems and when my head is not buried in
      codes, I morph into a decent volleyball player.
    </div>
    <div id="home-btn-wrapper">
      <a href="/about" class="app-button">know more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>
<style>
#home-btn-wrapper {
  margin-top: 100px;
}
</style>
