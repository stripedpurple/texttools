<template>
  <div>
    <h1 class="title">Search and Replace</h1>

    <hr>

    <div class="columns is-multiline">


      <div class="column is-full">
        <h2 class="subtitle">Your Text</h2>
          <b-input v-model="inputStr" type="textarea" placeholder="Type something here and watch the magic..."></b-input>
      </div>

      <div class="column is-half">
        <b-field>
          <p class="control">
            <span class="button is-static">Search</span>
          </p>
          <b-input v-model="search" placeholder="Search text" expanded></b-input>
        </b-field>
      </div>

      <div class="column is-half">
        <b-field>
          <p class="control">
            <span class="button is-static">Replace</span>
          </p>
          <b-input v-model="replace" placeholder="Replacement text" expanded></b-input>
        </b-field>
      </div>

      <div class="column is-full">
        <b-switch v-model="useRegEx"><span class="has-text-weight-bold">RegEx</span>&nbsp;&nbsp;<small v-show="useRegEx">
          This uses the standard js
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">RegEx Pattern</a></small></b-switch>
      </div>

      <div class="column is-full">
        <output-area :output="outputStr"></output-area>
      </div>
      
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputStr: '',
        search: '',
        replace: '',
        useRegEx: false
      }
    },
    computed: {
      outputStr() {
        let search = this.useRegEx ? (() => {
          let query = this.search.split('/');

          return new RegExp(query[1], query[2])
        })() : this.search;

        return this.inputStr.replace( search, this.replace)
      }
    }
  }
</script>

