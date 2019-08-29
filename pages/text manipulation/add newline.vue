<template>
    <div>
        <h1 class="title">Add Newline</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-full">
                <b-field>
                    <p class="control"><span class="button is-static">Line on</span></p>
                    <b-select v-model="selected">
                        <option v-for="(opt, key) in select" :value="opt" :key="key" :selected="selected">{{opt}}
                        </option>
                    </b-select>
                    <p v-if="selectedPrompt" class="control"><span class="button is-static">{{selectedPrompt}}</span>
                    </p>
                    <b-select v-model="textOccurrenceOpt" v-if="selected === 'text occurrence'"
                              :selected="textOccurrenceOpt">
                        <option>after</option>
                        <option>before</option>
                        <option>instead of</option>
                    </b-select>
                    <p class="control" v-if="selected === 'text occurrence'">
                        <span class="button is-static">text</span>
                    </p>

                    <b-input v-if="selected === 'text occurrence'" v-model="textOccurrenceQuery"></b-input>
                    <b-numberinput min='1' type="is-cust" controls-position="compact"
                                   v-if="selected === 'character position'" v-model="charPosQuery"></b-numberinput>
                    <b-numberinput min='1' type="is-cust" controls-position="compact"
                                   v-if="selected === 'add # of lines'" v-model="lineCountQuery"></b-numberinput>

                    <p class="control" v-if="selected === 'character position'"><span class="button is-static">characters</span>
                    </p>
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
                padded: false,
                placeholder: '',
                textOccurrenceOpt: 'after',
                textOccurrenceQuery: '.',
                charPosQuery: 1,
                lineCountQuery: 1,
                selected: 'text occurrence',
                select: [
                    'text occurrence',
                    'character position',
                    'add # of lines'
                ]
            }
        },
        computed: {
            selectedPrompt() {
                if (this.selected === 'text occurrence') return "Add newline ";
                if (this.selected === 'character position') return "newline every";
                if (this.selected === 'add # line') return "";
                return ''

            },
            output() {
                if (this.selected === 'text occurrence' && !!this.textOccurrenceQuery.length) {
                    let re = new RegExp(this.textOccurrenceQuery.replace(/\*|\^|\||\[|\]|\(|\)|\+|\.|\?|\{|\}|\\|\$}/g, '\\$&'), 'g');
                    if (this.textOccurrenceOpt === 'after')
                        return this.inputStr.replace(re, this.textOccurrenceQuery + '\n');
                    if (this.textOccurrenceOpt === 'before')
                        return this.inputStr.replace(re, '\n' + this.textOccurrenceQuery);
                    if (this.textOccurrenceOpt === 'instead of')
                        return this.inputStr.replace(re, '\n')
                }

                if (this.selected === 'character position') {
                    let re = new RegExp("(.{" + this.charPosQuery + "})", 'g');
                    return this.inputStr.replace(re, "$1\n")
                }


                if (this.selected === 'add # of lines') {
                    let count = '\n';
                    for (let i = 0; i < this.lineCountQuery; i++)
                        count += '\n';
                    return this.inputStr.replace(/\n/g, count)
                }

                return this.inputStr
            }
        }
    }
</script>
