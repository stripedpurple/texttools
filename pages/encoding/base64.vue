<template>
    <section class="section">
        <h1 class="title">Base64</h1>

        <hr>

        <div class="columns is-multiline">


            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
                <small>Learn about <a href="https://en.wikipedia.org/wiki/Base64">BASE64</a>.
                </small>
            </div>

            <div class="column is-full">
                <b-switch v-model="encode">Encode/Decode</b-switch>
            </div>


            <div class="column is-full">
                <output-area :output="base64" :title="encode ? 'Encoded' : 'Decoded'"></output-area>
            </div>

        </div>

    </section>
</template>

<script>
    export default {
        name: 'Base64',
        data() {
            return {
                inputStr: '',
                encode: true
            }
        },
        computed: {
            base64() {
                try {
                    if (this.encode) {
                        return window.btoa(this.inputStr);
                    } else {
                        return window.atob(this.inputStr);
                    }
                } catch {
                    return ''
                }
            }
        }
    }
</script>

