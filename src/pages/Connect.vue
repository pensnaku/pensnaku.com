<template>
  <div>
    <div class="view-holder app-text">
      <p>
        I’m super excited to hear from you, please drop me a message and I will
        respond as soon as possible.
      </p>
      <form>
        <div class="input-group">
          <input type="text" placeholder="name" name="name" id="connect-" />
        </div>
        <div class="input-group">
          <input type="email" placeholder="email" name="email" />
        </div>
        <div class="input-group">
          <textarea placeholder="message"></textarea>
        </div>
      </form>
    </div>
    <div>
      <a href="" class="app-button">send message</a>
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
<style>
form * {
  width: 99%;
}

.input-group {
  margin-top: 10px;
}

.input-group > input,
textarea {
  border-radius: 5px;
  padding: 5px;
  height: 25px;
  line-height: 31px;
  color: black;
}

textarea {
  height: 120px !important;
  margin-bottom: 64px;
  resize: none;
}
</style>
