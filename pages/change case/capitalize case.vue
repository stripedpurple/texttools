<template>
    <div>
        <h1 class="title">Capitalize Case</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <b-field>
                    <template slot="label">
                        <h2 class="subtitle">Your Text</h2>
                    </template>
                    <b-input v-model="inputStr" type="textarea"
                             placeholder="Converts the first letter of everyline to uppercase"></b-input>
                </b-field>
            </div>

            <div class="column is-full">
                <output-area :output="output"></output-area>
            </div>

        </div>
    </div>
</template>

<script>
    import capitalize from 'voca/capitalize'

    export default {
        data() {
            return {
                inputStr: ''
            }
        },
        computed: {
            output() {
                return this.inputStr.split('\n').map(x => capitalize(x)).join('\n')
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>