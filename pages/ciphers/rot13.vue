<template>
  <section class="section">
    <h1 class="title">ROT {{rotOffset}} | Caesar Cipher</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
        <small>Learn about <a href="https://en.wikipedia.org/wiki/ROT13">ROT13</a> and <a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar Cipher</a></small>
        <b-slider v-model="rotOffset" :min="1" :max="25" rounded ticks></b-slider>
      </div>

      <div class="column is-full">
        <output-area :output="rot"></output-area>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'ROT13',
    data() {
      return {
        inputStr: '',
        rotOffset: 13
      }
    },
    computed: {
      rot() {
        let input = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'];
        let output = [];

        output = input.map(x => {
          return x.slice(this.rotOffset) + x.slice(0, this.rotOffset)
        });

        input = input.join('');
        output = output.join('');

        let index = x => input.indexOf(x);
        let translate = x => index(x) > -1 ? output[index(x)] : x;
        return this.inputStr.split('').map(translate).join('');
      }
    }
  }
</script>

