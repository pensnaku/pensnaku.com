<template>
  <div>
    <div class="view-holder app-text">
      <p>Chronic learner, software developer!</p>
      <br />
      I have had a very interesting career spanning over 7 years. Built great
      apps with great teams and also explored a lot of concepts and grown.
    </div>
    <div id="home-btn-wrapper">
      <a
        target="_blank"
        href="https://docs.google.com/document/d/1nEaIWSek3yfKs9zbIPGycI3fc3B_kXms-a-Tn6cxbn4/export?format=pdf"
        class="app-button"
        >download resume</a
      >
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-btn-wrapper {
  margin-top: 100px;
}
</style>
