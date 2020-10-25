<template>
  <div>
    <!-- This is the image -->
    <img
      src="../assets/images/Eedde 1@2x.png"
      alt="Pens Image"
      id="pens-image"
    />
    <div id="image-shade"></div>
  </div>
</template>

<script>
export default {
  name: 'Pens',
  props: {
    msg: String,
  },
};
</script>

<style>
#pens-image-holder {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#image-shade {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000000a6;
  z-index: 3;
}

#pens-image {
  display: block;
  width: 500px !important;
}
</style>
