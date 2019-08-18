<template>
  <section class="section">
    <h1 class="title">Basic</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..." autofocus></b-input>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">Uppercase</h2>
        <b-input :value="strUpper" type="textarea" placeholder="ExamplE becomes EXAMPLE" disabled></b-input>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">Lowercase</h2>
        <b-input :value="strLower" type="textarea" placeholder="ExamplE becomes example" disabled></b-input>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">Titlecase</h2>
        <b-input :value="strTitle" type="textarea" placeholder="ExamplE becomes Example" disabled></b-input>
      </div>

      <div class="column is-full">
        <h2 class="subtitle">Reversed</h2>
        <b-input :value="strReverse" type="textarea" placeholder="ExamplE becomes ElpmaxE" disabled></b-input>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'Basic',
    data() {
      return {
        inputStr: ''
      }
    },
    computed: {
      strUpper() {
        return this.inputStr.toUpperCase();
      },
      strLower() {
        return this.inputStr.toLowerCase();
      },
      strTitle() {
        return this.inputStr.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      },
      strReverse() {
        return this.inputStr.split('').reverse().join('');
      }
    }
  }
</script>

