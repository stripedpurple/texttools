<template>
    <div>
        <h2 class="subtitle">{{title || 'Output'}}</h2>
        <div class="copy-container">
            <b-input :value="output" type="textarea" :placeholder="placeholder" disabled></b-input>
            <b-tooltip label="Copy!" type="is-dark"><button @click="doCopy" class="button is-primary is-outlined"><i class="mdi mdi-content-copy"></i></button></b-tooltip>
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

<style>
    .copy-container{
        position: relative;
    }

    .copy-container span {
        position: absolute;
        z-index: 1000;
        top: 1em;
        right: 1em;
    }
</style>