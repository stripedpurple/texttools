<template>
    <div>
        <h2 class="subtitle">{{title || 'Output'}}</h2>
        <div class="copy-container">
            <b-input :value="output" type="textarea" :placeholder="placeholder" disabled></b-input>
            <button @click="doCopy" class="button is-primary is-outlined"><i class="mdi mdi-content-copy"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "output-area",
        props: {
            title: String,
            placeholder: String,
            output: String
        }
    }
</script>

<style scoped>

</style>