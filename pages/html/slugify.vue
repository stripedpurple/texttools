<template>
    <section class="section">
        <h1 class="title">Slugify</h1>

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
    import slugify from 'voca/slugify'

    export default {
        name: "Reverse",
        data() {
            return {
                inputStr: ''
            }
        },
        computed: {
            output() {
                return this.inputStr.split('\n').map(slug => slugify(slug)).join('\n')
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>