<template>
  <div>
    <h1 class="title">Atbash</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
        <small>Learn about <a href="https://en.wikipedia.org/wiki/Atbash">Atbash</a></small>
      </div>

      <div class="column is-full">
        <output-area :output="atbash"></output-area>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
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

