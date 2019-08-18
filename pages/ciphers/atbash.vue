<template>
  <section class="section">
    <h1 class="title">Atbash</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
        <small>Learn about <a href="https://en.wikipedia.org/wiki/Atbash">Atbash</a></small>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">Output</h2>
        <b-input :value="atbash" type="textarea" disabled></b-input>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'Atbash',
    data() {
      return {
        inputStr: ''
      }
    },
    computed: {
      atbash() {
        let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let output = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba';
        let index = x => input.indexOf(x);
        let translate = x => index(x) > -1 ? output[index(x)] : x;
        return this.inputStr.split('').map(translate).join('');
      }
    }
  }
</script>

