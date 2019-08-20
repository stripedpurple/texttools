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
                <b-field>
                    <p class="control"><span class="button is-static">Line on</span></p>
                <b-select v-model="selected">
                    <option v-for="(opt, key) in select" :value="opt" :key="key" :selected="selected">{{opt}}</option>
                </b-select>
                    <p class="control"><span class="button is-static">{{selectedPrompt}}</span></p>
                    <b-select v-model="textOccurrenceOpt" v-if="selected === 'text occurrence'" :selected="textOccurrenceOpt">
                        <option>after</option>
                        <option>before</option>
                        <option>instead of</option>
                    </b-select>
                    <p class="control" v-if="selected === 'text occurrence'">
                        <span class="button is-static">text</span>
                    </p>
                    <b-input v-model="textOccurrenceQuery"></b-input>
                </b-field>


            </div>

            <div class="column is-full">
                <h2 class="subtitle">Output</h2>
                <b-input :value="numbered" type="textarea" :placeholder="text" custom-class="textarea-tall"
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
                textOccurrenceOpt: 'after',
                textOccurrenceQuery: '',
                selected: 'text occurrence',
                select: [
                    'text occurrence',
                    'character position',
                    'add # lines'
                ]
            }
        },
        computed: {
            selectedPrompt() {
                if (this.selected === 'text occurrence') return "Add newline ";
                if (this.selected === 'character position') return "newline every";
                if (this.selected === 'add # line') return ""
                return ''

            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>