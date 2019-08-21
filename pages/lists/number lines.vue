<template>
    <section class="section">
        <h1 class="title">Prefix | Suffix</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-half">
                <b-switch v-model="padded">Padded line numbers with spaces</b-switch>
            </div>

            <div class="column is-full">
                <output-area :output="output"></output-area>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Reverse",
        data () {
            return {
                inputStr: '',
                padded: false,
                placeholder: '1. example\n' +
                    '2. example\n' +
                    '3. example\n' +
                    '4. example\n' +
                    '5. example'
            }
        },
        computed: {
            lineCount() {
              return this.inputStr.split('\n').length.toString().length
            },
            output() {
                if (!!this.inputStr.length) return this.inputStr.split(/\n/).map((x,i) => (this.padded ? ('                    ' + (i + 1)).slice(-this.lineCount) : (i + 1)) + '. ' + x).join('\n')
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>