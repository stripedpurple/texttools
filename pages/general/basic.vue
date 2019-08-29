<template>
  <div>
    <h1 class="title">Basic</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..." autofocus></b-input>
      </div>

      <div class="column is-full">
        <output-area :output="strUpper"  placeholder="ExamplE becomes EXAMPLE" title="Uppercase"></output-area>
      </div>

      <div class="column is-full">
        <output-area :output="strLower"  placeholder="ExamplE becomes example" title="Lowercase"></output-area>
      </div>

      <div class="column is-full">
        <output-area :output="strTitle"  placeholder="ExamplE becomes Example" title="Titlecase"></output-area>
      </div>

      <div class="column is-full">
        <output-area :output="strReverse"  placeholder="ExamplE becomes ElpmaxE" title="Reversed"></output-area>
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

