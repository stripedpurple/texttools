<template>
    <div>
        <h1 class="title">Clean Spaces</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-full">
                <b-field>
                    <b-select v-model="selected">
                        <option v-for="opt in selectOpts" :value="opt.value">{{opt.name}}</option>
                    </b-select>
                    <p class="control button is-static is-expanded has-text-left is-content-justified-none">
                        {{description}}</p>
                </b-field>
            </div>

            <div class="column is-full">
                <output-area :output="output"></output-area>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Reverse",
        data() {
            return {
                inputStr: '',
                selected: 'trim',
                selectOpts: [
                    {
                        value: 'trim',
                        name: "Trim",
                        description: "Trim - Removes empty lines at the beginning and at the end of the text"
                    },
                    {
                        value: 'leading',
                        name: "Trim leading",
                        description: "Trim leading - Removes single or multiple white spaces that are not preceded by any character."
                    },
                    {
                        value: 'trailing',
                        name: "Trim trailing",
                        description: "Trim trailing - Removes single or multple white spaces that are not followed by any character."
                    },
                    {
                        value: 'remove',
                        name: "Remove extra",
                        description: "Remove Extra - Converts multiple spaces into a single space."
                    },
                    {
                        value: 'clean',
                        name: "Clean all",
                        description: "Clean all - A combination of all the options mentioned above. This is the default setting."
                    },
                ]
            }
        },
        computed: {
            description() {
                let index = this.indexOf(this.selectOpts, 'value', this.selected);
                return this.selectOpts[index].description
            },
            output() {
                switch (this.selected) {
                    case "trim":
                        return this.inputStr.trim();
                    case "leading":
                        return this.inputStr.split('\n').map(x => x.replace(/^\s*/gm, '')).join('\n');
                    case "trailing":
                        return this.inputStr.split('\n').map(x => x.replace(/\s*?$/gm, '')).join('\n');
                    case "remove":
                        return this.inputStr.split('\n').map(x => x.replace(/\s\s+/g, ' ')).join('\n');
                    case "clean":
                        return this.inputStr.split('\n').map(x => x.replace(/\s\s+/g, ' ').replace(/^\s*?|\s*?$/gm, '')).join('\n').replace(/^\s*\n/g, '').trim()
                }
            }
        },
        methods: {
            indexOf: (obj, key, value) => {
                return obj.findIndex(x => x[key] === value)
            }
        }
    }
</script>

<style>
    .is-content-justified-none {
        justify-content: normal !important;
    }
</style>