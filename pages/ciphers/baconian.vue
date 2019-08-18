<template>
    <section class="section">
        <h1 class="title">Baconian Cipher</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <b-switch v-model="encode">Encode/Decode</b-switch>
            </div>

            <div v-if="encode" class="column is-half">
                <h2 class="subtitle">Original Message</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="This is the text you want to encrypt/decrypt"></b-input>
            </div>

            <div v-if="encode" class="column is-half">
                <h2 class="subtitle">False Message</h2>
                <b-input v-model.trim="falseMsg" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
                <small class="is-pulled-right">{{falseMsg.replace(/[^\w]/g, '').length}}/{{inputStr.length*5}} required letters</small>
            </div>

            <div v-if="encode" class="column is-half">
                <h2 class="subtitle">RAW Output</h2>
                <b-input :value="baconian" type="textarea" disabled></b-input>
            </div>

            <div v-if="encode" class="column is-half">
                <h2 class="subtitle">Embeded Output</h2>
                <b-input :value="embeded" type="textarea" disabled></b-input>
            </div>

            <div v-if="!encode" class="column is-full">
                <h2 class="subtitle">Encoded Message</h2>
                <textarea v-model="encodedMsg" class="textarea">This content is readonly</textarea>

            </div>

            <div v-if="!encode" class="column is-full">
                <h2 class="subtitle">Output</h2>
                <b-input :value="decoded" type="textarea" disabled></b-input>
            </div>

            <div class="column is-full">
                <small>
                    Learn about <a href="https://en.wikipedia.org/wiki/Bacon%27s_cipher">Baconian</a> Cipher</a>
                </small>
            </div>


            <div class="column is-full">
                <a aria-controls="legend" @click="legendOpen = !legendOpen">code legend</a>

                <b-collapse :open="legendOpen" aria-id="legend">
                    <b-table :data="dictionary"
                             :columns="columns"
                             striped
                             narrowed
                             hoverable
                    ></b-table>
                </b-collapse>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'ROT13',
        data() {
            return {
                inputStr: '',
                falseMsg: '',
                encodedMsg: '',
                encode: true,
                legendOpen: false,
                columns: [
                    {
                        field: 'letter',
                        label: 'Letter'
                    },
                    {
                        field: 'code',
                        label: 'Code'
                    }
                ],
                dictionary: [
                    {
                        letter: 'A',
                        code: 'aaaaa'
                    },
                    {
                        letter: 'B',
                        code: 'aaaab'
                    },
                    {
                        letter: 'C',
                        code: 'aaaba'
                    },
                    {
                        letter: 'D',
                        code: 'aaabb'
                    },
                    {
                        letter: 'E',
                        code: 'aabaa'
                    },
                    {
                        letter: 'F',
                        code: 'aabab'
                    },
                    {
                        letter: 'G',
                        code: 'aabba'
                    },
                    {
                        letter: 'H',
                        code: 'aabbb'
                    },
                    {
                        letter: 'I',
                        code: 'abaaa'
                    },
                    {
                        letter: 'J',
                        code: 'abaab'
                    },
                    {
                        letter: 'K',
                        code: 'ababa'
                    },
                    {
                        letter: 'L',
                        code: 'ababb'
                    },
                    {
                        letter: 'M',
                        code: 'abbaa'
                    },
                    {
                        letter: 'N',
                        code: 'abbab'
                    },
                    {
                        letter: 'O',
                        code: 'abbba'
                    },
                    {
                        letter: 'P',
                        code: 'abbbb'
                    },
                    {
                        letter: 'Q',
                        code: 'baaaa'
                    },
                    {
                        letter: 'R',
                        code: 'baaab'
                    },
                    {
                        letter: 'S',
                        code: 'baaba'
                    },
                    {
                        letter: 'T',
                        code: 'baabb'
                    },
                    {
                        letter: 'U',
                        code: 'babaa'
                    },
                    {
                        letter: 'V',
                        code: 'babab'
                    },
                    {
                        letter: 'W',
                        code: 'babba'
                    },
                    {
                        letter: 'X',
                        code: 'babbb'
                    },
                    {
                        letter: 'Y',
                        code: 'bbaaa'
                    },
                    {
                        letter: 'Z',
                        code: 'bbaab'
                    }
                ]
            }
        },
        computed: {
            baconian() {
                return this.inputStr.split('').map(x => {
                    let i = this.index(x.toUpperCase(), 'letter');
                    return i !== -1 ? this.dictionary[i].code : ''
                }).join('')
            },
            embeded() {
                let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                let raw = this.baconian.split('');
                return this.falseMsg.toLowerCase().split('').map(x => {
                    if (raw[0] === 'a' && alphabet.includes(x.toUpperCase())) {
                        raw.shift();
                        return x.toUpperCase()
                    } else if (raw[0] === 'b' && alphabet.includes(x.toUpperCase())) {
                        raw.shift();
                        return x
                    } else {
                        return x
                    }
                }).join('')
            },
            decoded() {
                let letter = [];
                let newStr = '';

                this.encodedMsg.replace(/[^\w]/g, '').split('').map(
                    x => x === x.toUpperCase() ? 'a' : 'b'
                ).forEach(x => {
                    letter.push(x);
                    if (letter.length === 5) {
                        let q = this.index(letter.join(''), 'code');
                        if (q !== -1 ) newStr += this.dictionary[q].letter;
                        letter = []
                    }
                });

                return newStr
            }
        },
        methods: {
            index(letter, key) {
                return this.dictionary.map(function (e) {
                    return e[key]
                }).indexOf(letter) || -1
            }
        }
    }
</script>

