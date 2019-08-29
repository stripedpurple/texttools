<template>
    <div>
        <h1 class="title">Space/Tab Converter</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-10">
                <b-field>
                    <p v-if="toSpaces " class="control"><span class="button is-static">1 tab equals</span></p>
                    <p class="control"><input v-model.number="spaceCount" class="input has-text-centered" type="number" min='1'/></p>
                    <p class="control"><span class="button is-static">{{toSpaces ? "spaces" : "spaces equals 1 tab"}}</span></p>
                </b-field>
            </div>

            <div class="column is-2">
                <b-switch v-model="toSpaces">{{toSpaces ? "Tabs to Spaces" : "Spaces to Tabs"}}</b-switch>
            </div>

            <div class="column is-full">
                <output-area :output="output"></output-area>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputStr: '',
                toSpaces: true,
                spaceCount: 4
            }
        },
        computed: {
            output() {
                let spaces = this.toSpaces ? " ".repeat(this.spaceCount) : new RegExp(" ".repeat(this.spaceCount), 'g');
                return this.toSpaces ? this.inputStr.replace(/\t/g, spaces) : this.inputStr.replace(spaces, '\t')
            }
        }
    }
</script>