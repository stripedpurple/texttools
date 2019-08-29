<template>
    <section class="section">
        <h1 class="title">Polybius Square</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-half">
                <b-field>
                    <p class="control"><span class="button is-static">Key</span></p>
                    <b-input v-model="key" placeholder="e.g. ABCDEFGHIJKLMNOPQRSTUVWXYZ" expanded></b-input>
                    <p class="control">
                        <button @click="generateKey" class="button is-primary">Generate</button>
                    </p>
                </b-field>
            </div>

            <div class="column is-half">
                <b-field>
                    <p class="control"><span class="button is-static">Cipher Alphabet</span></p>
                    <b-input v-model="cipherTextChar" placeholder="e.g. 12345 or ABDCE" expanded></b-input>
                </b-field>
            </div>

            <div class="column is-full">
                <b-switch v-model="encode">Encode/Decode</b-switch>
            </div>

            <div class="column is-full">
                <output-area :output="polybius"></output-area>
            </div>
            <div class="column is-full"><small>Learn about <a href="https://en.wikipedia.org/wiki/Polybius_square">Polybius
                Square</a></small></div>
        </div>


    </section>
</template>

<script>
    let shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a
    };

    export default {
        name: 'PolybiusSquare',
        data() {
            return {
                inputStr: '',
                cipherTextChar: '',
                encode: true,
                key: ''
            }
        },
        computed: {
            polybius() {
                return this.inputStr
            }
        },
        methods: {
            generateKey() {
                let alphabet = 'abcdefghijklmnopqrstuvwxyz';

                let shuffled = shuffle(alphabet.split(''));
                shuffled.pop();
                this.key = shuffled.join('');
                if (this.cipherTextChar === '') this.cipherTextChar = 'ABCDE'
            }
        },
        mounted(){
            this.$buefy.snackbar.open({
                message: 'The section is still being developed and contains bugs.',
                type: 'is-warning',
                position: 'is-top',
                actionText: 'Close',
                duration: 5000,
                queue: false
            })
        }
    }
</script>

