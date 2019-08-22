<template>
    <section class="section">
        <h1 class="title">Remove Newline</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-half">
                <b-field>
                    <b-select v-model="selected">
                        <option v-for="(opt, key) in select" :value="opt" :key="key" :selected="selected">{{opt}}
                        </option>
                    </b-select>
                    <p v-if="selected === 'Remove All'" class="control"><span class="button is-static">newlines</span>
                    </p>
                    <b-input v-if="selected === 'Replace with'" v-model="replaceWith"></b-input>
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
        data() {
            return {
                inputStr: '',
                replaceWith: '-',
                selected: 'Remove All',
                select: [
                    'Remove All',
                    'Replace with'
                ]
            }
        },
        computed: {
            output() {
                return this.selected === 'Remove All' ? this.inputStr.replace(/\n/g, '') : this.inputStr.replace(/\n/g, this.replaceWith)
            }
        }
    }
</script>