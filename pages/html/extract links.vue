<template>
    <section class="section">
        <h1 class="title">Extract Links From HTML</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <b-field>
                    <template slot="label">
                        <h2 class="subtitle">Your Text</h2>
                    </template>
                    <b-input v-model="inputStr" type="textarea"
                             placeholder="Type something here and watch the magic..."></b-input>
                </b-field>
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
                inputStr: ''
            }
        },
        computed: {
            output() {
                let matches = this.inputStr.match(/(href|src)=('|").*?('|")/g);

                return !!matches ? matches.map(link => {
                    return link.replace(/^.*?("|')|("|')$/g, '')
                }).join('\n') : ''
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>