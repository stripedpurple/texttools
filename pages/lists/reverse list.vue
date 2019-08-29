<template>
    <div>
        <h1 class="title">Reverse List</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <h2 class="subtitle">Your Text</h2>
                <b-input v-model="inputStr" type="textarea"
                         placeholder="Type something here and watch the magic..."></b-input>
            </div>

            <div class="column is-full">
                <b-switch v-model="trim">trim whitespace</b-switch>
            </div>

            <div class="column is-full">
                <output-area :output="reverse"></output-area>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Reverse",
        data () {
            return {
                inputStr: '',
                trim: true
            }
        },
        computed: {
            reverse() {
                return this.trim ? this.inputStr.trim().split(/\n/).reverse().join('\n') : this.inputStr.split(/\n/).reverse().join('\n')
            }
        }
    }
</script>

<style scoped>

</style>