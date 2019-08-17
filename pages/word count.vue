<template>
  <section class="section">
    <h1 class="title">Word Count</h1>

    <hr>

    <div class="columns is-multiline">
      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
        <b-input v-model.lazy="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
      </div>

      <div class="column is-full">
        <ul>
          <li><span class="has-text-weight-bold has-text-right">Word Count: </span><span>{{wordCount}}</span></li>
          <li><span class="has-text-weight-bold has-text-right">Line Count: </span><span>{{lineCount}}</span></li>
          <li><span class="has-text-weight-bold has-text-right">Character Count: </span><span>{{characterCount}}</span></li>
        </ul>
      </div>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'Home',
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

