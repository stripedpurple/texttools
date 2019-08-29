<template>
    <div>
        <h1 class="title">{{encode ? 'ASCII to Binary' : 'Binary to ASCII' }}</h1>

        <hr>

        <div class="columns is-multiline">


            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                    <b-input v-model.trim="inputStr" type="textarea"
                             placeholder="Type something here and watch the magic..."></b-input>
                    <small>Converts <a href="https://en.wikipedia.org/wiki/ASCII">ASCII</a> to <a href="https://en.wikipedia.org/wiki/Binary_code">Binary</a> and vice versa</small>
            </div>

            <div class="column is-full">
                <b-switch v-model="encode">Binary/ASCII</b-switch>
            </div>

                <div class="column is-full">
                    <output-area :output="binary" :title="encode ? 'Binary' : 'ASCII'"></output-area>
                </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputStr: '',
                encode: true
            }
        },
        computed: {
            binary() {
                // Coversion functions based on the following:
                // ======================================================
                // ABC - a generic, native JS (A)scii(B)inary(C)onverter.
                // (c) 2013 Stephan Schmitz <eyecatchup@gmail.com>
                // License: MIT, http://eyecatchup.mit-license.org
                // URL: https://gist.github.com/eyecatchup/6742657
                // ======================================================

                let toAscii = (bin) => {
                    console.log('toASCII');
                    return bin.replace(/\s*[01]{8}\s*/g, function (bin) {
                        return String.fromCharCode(parseInt(bin, 2))
                    })
                };
                let toBinary = (str, spaceSeparatedOctets) => {
                    console.log("toBinary");
                    return str.replace(/[\s\S]/g, function (str) {
                        str = zeroPad(str.charCodeAt().toString(2));
                        return !1 == spaceSeparatedOctets ? str : str + " "
                    })
                };
                let zeroPad = (num) => {
                    return "00000000".slice(String(num).length) + num
                };

                let re = /(\b[01]{8}\b\s?)/;

                if (this.encode && !re.test(this.inputStr))
                    return toBinary(this.inputStr);
                else if (!this.encode && re.test(this.inputStr))
                    return toAscii(this.inputStr);
                else return 'Please provide a valid ' + (this.encode ? 'ASCII' : 'Binary') + ' string'
            }
        }
    }
</script>

