<template>
  <section class="section">
    <h1 class="title">A1Z26 Cipher</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
      </div>

      <div class="column is-full">
        <b-switch v-model="encode">Encode/Decode</b-switch>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">{{encode ? 'Encoded' : 'Decoded'}}</h2>
        <b-input :value="a1z26" type="textarea" disabled></b-input>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'Home',
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
        let t = x.replace(/([\d]{1,2})([^\d]|$)/g, function (match, p1, p2) {
          return letters[Number(p1) - 1] + (p2 == "-" ? "" : p2);
        });
        return t;
      }
    }
  }
</script>

