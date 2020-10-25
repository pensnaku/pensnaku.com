<template>
  <header id="header">
    <div id="logo-wrapper">
      <img id="logo" src="../assets/images/logo.svg" alt="Pens Logo" />
    </div>
    <div id="menu" class="desktop">
      <ul>
        <li class="menu-item">
          <a
            href="/"
            class="menu-link"
            :class="{ active: currentRoute === 'home' }"
            >home</a
          >
        </li>
        <li class="menu-item">
          <a
            href="/about"
            class="menu-link"
            :class="{ active: currentRoute === 'about' }"
            >about</a
          >
        </li>
        <li class="menu-item">
          <a
            href="/connect"
            class="menu-link"
            :class="{ active: currentRoute === 'connect' }"
            >connect</a
          >
        </li>
        <!-- <li class="menu-item">
          <a
            href="/work"
            :class="{ active: currentRoute === 'work' }"
            class="menu-link"
            >work</a
          >
        </li> -->
      </ul>
    </div>
    <div id="menu-mobile" class="mobile">
      <font-awesome-icon :icon="['fa', 'bars']" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    currentRoute: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#menu-mobile.mobile {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: #ef4563;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 11;
}

#header img#logo {
  width: 67px;
}

#menu {
  width: 50%;
  font-size: 32px;
}

#menu > ul > li.menu-item {
  margin-right: auto;
}
</style>
