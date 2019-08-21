<template>
    <section class="section">
        <h1 class="title">Affine</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
                <small>Learn about <a href="https://en.wikipedia.org/wiki/Atbash">Atbash</a></small>
            </div>

            <div class="column is-half">
                <b-field>
                    <b-slider v-model.number="alpha" :min="1" :max="dictionary.length - 1" rounded></b-slider>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{alpha}}</span>
                </b-field>
            </div>

            <div class="column is-half">
                <b-field>
                    <b-slider v-model.number="beta" :min="1" :max="dictionary.length - 1" rounded></b-slider>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{beta}}</span>
                </b-field>
            </div>

            <div class="column is-full">
                <output-area :output="affine"></output-area>
            </div>
        </div>


    </section>
</template>

<script>
    export default {
        name: 'Affine',
        data() {
            return {
                inputStr: '',
                alpha: 1,
                beta: 1,
                // dictionary: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=+_!@#$%^&*():;"\'/.,<>?|\\'
                dictionary: 'abcdefghijklmnopqrstuvwxyz0123456789'
            }
        },
        computed: {
            affine() {
                return this.inputStr.split('').map(x => {
                    let dl = this.dictionary.length;
                    let q = this.alpha * this.dictionary.indexOf(x) + this.beta;
                    return q > dl - 1 ? this.dictionary[q % dl] : this.dictionary[q]
                }).join('')
            }
        },
        mounted() {
            this.$buefy.snackbar.open({
                message: 'The section is still being developed and contains bugs.',
                type: 'is-warning',
                position: 'is-top',
                actionText: 'Close',
                indefinite: true,
                queue: false
            })
        }
    }
</script>

