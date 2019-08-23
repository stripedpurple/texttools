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
                <b-switch v-model="casesensitive">Case Sensitive</b-switch>

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
        data() {
            return {
                inputStr: '',
                casesensitive: false
            }
        },
        computed: {
            output() {
                let tmpArr = this.inputStr.toLowerCase().split('\n');
                return this.inputStr.split('\n').filter((elem, pos, arr) => {
                    return this.casesensitive ? arr.indexOf(elem) === pos : tmpArr.indexOf(elem.toLowerCase()) === pos;
                }).join('\n')
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>