<template>
    <div>
        <h1 class="title">URL Encode</h1>

        <hr>

        <div class="columns is-multiline">


            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
                <small>Learn about <a href="https://en.wikipedia.org/wiki/Percent-encoding">URL Encoding</a>.
                </small>
            </div>

            <div class="column is-full">
                <b-switch v-model="encode">Encode/Decode</b-switch>
            </div>


            <div class="column is-full">
                <output-area :output="base64" :title="encode ? 'Encoded' : 'Decoded'"></output-area>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputStr: '',
                encode: true
            }
        },
        computed: {
            base64() {
                if (!this.inputStr) return ''

                if (this.encode) {
                    return this.inputStr.split('\n').map(x =>  encodeURI(x)).join('\n')
                } else {
                    return this.inputStr.split('\n').map(x =>  decodeURI(x)).join('\n')
                }
            }
        }
    }
</script>

