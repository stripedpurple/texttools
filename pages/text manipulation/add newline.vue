<template>
    <section class="section">
        <h1 class="title">Add Newline</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-half">
                <b-select v-model="selected">
                    <option v-for="(opt, key) in select" :value="opt.value" :key="key" :selected>{{opt.name}}</option>
                </b-select>
            </div>

            <div class="column is-full">
                <h2 class="subtitle">Output</h2>
                <b-input :value="numbered" type="textarea" :placeholder="placeholder" custom-class="textarea-tall"
                         disabled></b-input>
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
                padded: false,
                placeholder: '',
                selected: 'text occurrence',
                select: [
                    'text occurrence',
                    'character position',
                    'add # lines'
                ]
            }
        },
        computed: {
            lineCount() {
                return this.inputStr.split('\n').length.toString().length
            },
            numbered() {
                return
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>