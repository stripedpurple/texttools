<template>
    <section class="section">
        <h1 class="title">Reverse List</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-full">
                <output-area :output="reverse"></output-area>
            </div>
        </div>


    </section>
</template>

<script>
    export default {
        name: "Reverse",
        data () {
            return {
                inputStr: ''
            }
        },
        computed: {
            reverse() {
                return this.inputStr.split(/\n/).reverse().join('\n')
            }
        }
    }
</script>

<style scoped>

</style>