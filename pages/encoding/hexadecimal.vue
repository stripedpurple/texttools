<template>
    <section class="section">
        <h1 class="title">Hexadecimal</h1>

        <hr>

        <div class="columns is-multiline">


            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
                <small>Learn about <a href="https://en.wikipedia.org/wiki/Hexadecimal">Hexadecimal</a>.
                </small>
            </div>

            <div class="column is-full">
                <b-switch v-model="encode">Encode/Decode</b-switch>
            </div>

            <div class="column is-full">
                <h2 class="subtitle">{{encode ? 'Encoded' : 'Decoded'}}</h2>
                <b-input :value="base64" type="textarea" disabled></b-input>
            </div>

        </div>

    </section>
</template>

<script>
    // Code from https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex
    String.prototype.hexDecode = function(){
        let j;
        let hexes = this.match(/.{1,4}/g) || [];
        let back = "";
        for(j = 0; j<hexes.length; j++) {
            back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return back;
    };

    String.prototype.hexEncode = function(){
        let hex, i;

        let result = "";
        for (i=0; i<this.length; i++) {
            hex = this.charCodeAt(i).toString(16);
            result += ("000"+hex).slice(-4);
        }

        return result
    };

    export default {
        name: 'Base64',
        data() {
            return {
                inputStr: '',
                encode: true
            }
        },
        computed: {
            base64() {
                try {
                    if (this.encode) {
                        return this.inputStr.hexEncode()
                    } else {
                        return this.inputStr.hexDecode()
                    }
                } catch {
                    return ''
                }
            }
        }
    }
</script>

