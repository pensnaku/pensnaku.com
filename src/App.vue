<template>
  <div id="app">
    <Header :current-route="currentRoute" />
    <pens-image id="pens-image-component" class="mobile" />
    <div id="app-sub-wrapper" class="mobile">
      <div id="image-component-holder" class="desktop">
        <pens-image id="pens-image-component" />
      </div>
      <div id="view-holder">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Pens from './components/Pens.vue';

export default {
  name: 'App',
  components: {
    Header,
    PensImage: Pens,
    Footer,
  },
  computed: {
    currentRoute: function() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style>
#app-sub-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 75px;
}

#pens-image-component {
  position: absolute;
  padding: 0 0 0 50px;
}

#app-sub-wrapper > div {
  flex: 1 0 50%;
}
</style>
