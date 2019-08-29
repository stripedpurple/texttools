<template>
  <div>
    <h1 class="title">A1Z26 Cipher</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
        <small>A1Z26 is a simple <a href="https://en.wikipedia.org/wiki/Substitution_cipher">substitution cipher</a> that maps the standard english alphabet (a-z) to the numbers 1-26</small>
      </div>

      <div class="column is-full">
        <b-switch v-model="encode">Encode/Decode</b-switch>
      </div>

      <div class="column is-full">
        <output-area :output="a1z26" :title="encode ? 'Binary' : 'ASCII'"></output-area>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputStr: '',
        encode: true
      }
    },
    computed: {
      a1z26() {
        if (this.encode) {
          return this.encodeStr(this.inputStr)
        } else {
          return this.decodeStr(this.inputStr)
        }
      }
    },
    methods: {
      encodeStr(x) { // https://github.com/wTool/A1z26-Cipher/blob/master/a1z26.js
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let t = x.toLowerCase();
        let outt = "";
        let needseparator = false;
        for (let i = 0, len = t.length; i < len; i++) {
          let l = t[i];
          let idx = letters.indexOf(l);
          if (-1 == idx) {
            outt += l;
            needseparator = false;
          } else {
            if (needseparator) outt += "-";
            outt += (idx + 1).toString();
            needseparator = true;
          }
        }
        return outt;
      },
      decodeStr(x) { // https://github.com/wTool/A1z26-Cipher/blob/master/a1z26.js
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        return x.replace(/([\d]{1,2})([^\d]|$)/g, function (match, p1, p2) {
          return letters[Number(p1) - 1] + (p2 == "-" ? "" : p2);
        });
      }
    }
  }
</script>

