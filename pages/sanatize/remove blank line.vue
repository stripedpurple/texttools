<template>
    <section class="section">
        <h1 class="title">Remove Blank Lines</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-full">
                <b-switch v-model="trim">Trim Whitespace</b-switch>
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
                trim: true
            }
        },
        computed: {
            output() {
                let str = this.inputStr.replace(/^\s*\n/gm,'');
                return !this.trim ? str : str.split('\n').map(x => x.trim()).join('\n')
            }
        },
    }
</script>