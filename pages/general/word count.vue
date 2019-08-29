<template>
  <div>
    <h1 class="title">Word Count</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model.lazy="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
      </div>

      <div class="column is-full">
        <ul>
          <li><div class="columns is-mobile">
            <div class="column is-3-tablet is-half-mobile has-text-weight-bold">Word Count:</div>
            <div class="column">{{wordCount}}</div>
          </div></li>
          <li><div class="columns is-mobile">
            <div class="column is-3-tablet is-half-mobile has-text-weight-bold">Line Count:</div>
            <div class="column">{{lineCount}}</div>
          </div></li>
          <li><div class="columns is-mobile">
            <div class="column is-3-tablet is-half-mobile has-text-weight-bold">Character Count:</div>
            <div class="column">{{characterCount}}</div>
          </div></li>
        </ul>
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
      wordCount() {
        let count = this.inputStr.replace(/\s/, ' ').trim().split(' ').length;
        return count === 1 && this.inputStr == '' ? 0 : count;
      },
      lineCount() {
        let count = this.inputStr.split('\n').length;
        return count === 1 && this.inputStr == '' ? 0 : count;
      },
      characterCount() {
        return this.inputStr.length;
      }
    }
  }
</script>

