<template>
    <div>
        <h1 class="title">Prefix | Suffix</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model.trim="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-half">
                <b-field>
                    <p class="control"><span class="button is-static">Prefix</span></p>
                    <b-input v-model="prefix" expanded></b-input>
                </b-field>
            </div>
            <div class="column is-half">
                <b-field>
                    <p class="control"><span class="button is-static">Suffix</span></p>
                    <b-input v-model="suffix" expanded></b-input>
                </b-field>
            </div>

            <div class="column is-full">
                <output-area :output="affixer"></output-area>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Reverse",
        data () {
            return {
                inputStr: '',
                prefix: '',
                suffix: '',
                placeholder: '--- BEFORE ---\n' +
                    'cat\n' +
                    'dog\n' +
                    'pheonix\n' +
                    '--- AFTER ---\n' +
                    '1cat2\n' +
                    '1dog2\n' +
                    '1pheonix2'
            }
        },
        computed: {
            affixer() {
                return this.inputStr.length ? this.inputStr.split(/\n/).map(x => this.prefix + x + this.suffix).join('\n') : ""
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>