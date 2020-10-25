<template>
  <header id="footer">
    <div class="desktop">
      <div id="footer-wrapper">
        <div class="stroke left"></div>
        <div id="external-links">
          <ul>
            <li class="menu-item">
              <a
                href="https://twitter.com/pensnaku"
                target="_blank"
                class="menu-link"
                ><font-awesome-icon :icon="['fab', 'twitter-square']"
              /></a>
            </li>

            <li class="menu-item">
              <a
                href="https://stackoverflow.com/users/5304198/pens-naku"
                target="_blank"
                class="menu-link"
                ><font-awesome-icon :icon="['fab', 'stack-overflow']"
              /></a>
            </li>

            <li class="menu-item">
              <a
                href="https://github.com/pensnaku"
                class="menu-link"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'github-square']"
              /></a>
            </li>

            <li class="menu-item">
              <a
                href="https://www.instagram.com/pensnaku/"
                target="_blank"
                class="menu-link"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </li>

            <li class="menu-item">
              <a
                href="https://www.linkedin.com/in/pensnaku/"
                target="_blank"
                class="menu-link"
                ><font-awesome-icon :icon="['fab', 'linkedin']"
              /></a>
            </li>
          </ul>
        </div>
        <div class="stroke right"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    currentRoute: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#footer-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer-wrapper > div {
  margin: 15px;
}

.stroke {
  width: 25%;
  height: 1px;
}

.stroke.left {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 15%,
    rgba(239, 69, 99, 0.738532913165266) 73%
  );
}

.stroke.right {
  background: linear-gradient(
    90deg,
    rgba(239, 69, 99, 0.7973564425770308) 30%,
    rgba(255, 255, 255, 0.027048319327731107) 88%
  );
}

.menu-item {
  margin: 0 7px;
}
</style>
