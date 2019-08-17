<template>
  <section class="section">
    <h1 class="title">Base64</h1>

    <hr>

    <div class="columns is-multiline">


      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-field message="This method uses the 'A-Z', 'a-z', '0-9', '+', '/' and '=' characters to encode the string.">
          <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
        </b-field>
      </div>

      <div class="column is-full">
        <b-switch v-model="encode">Encode/Decode</b-switch>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">{{encode ? 'Encoded' : 'Decoded'}}</h2>
        <b-input :value="base64" type="textarea" disabled></b-input>
      </div>
      
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Base64',
    data() {
      return {
        inputStr: '',
        encode: true
      }
    },
    computed: {
      base64() {
        try {
          if (this.encode) {
            return window.btoa(this.inputStr);
          } else {
            return window.atob(this.inputStr);
          }
        } catch {
          return ''
        }
      }
    }
  }
</script>

