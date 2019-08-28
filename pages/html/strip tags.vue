<template>
    <section class="section">
        <h1 class="title">Strip HTML Tags</h1>

        <hr>

        <div class="columns is-multiline">
            <div class="column is-full">
                <b-field>
                    <template slot="label">
                        <h2 class="subtitle">Your Text</h2>
                    </template>
                    <b-input v-model="inputStr" type="textarea"
                             placeholder="Type something here and watch the magic..."></b-input>
                </b-field>
            </div>

            <div class="column is-full">
                <b-field>
                    <template slot="label">
                        <h2 class="subtitle">Tags to Ignore
                            <small class="has-text-primary is-size-7">[Optional]</small>
                        </h2>
                    </template>
                    <b-taginput
                            v-model="tags"
                            autocomplete
                            :data="htmlTagsFiltered"
                            @typing="getFilteredTags"
                            type="is-primary"
                            icon="label"
                            placeholder="HTML tags to ignore separated by ','">
                    </b-taginput>
                </b-field>
            </div>

            <div class="column is-full">
                <b-field>
                    <template slot="label">
                        <h2 class="subtitle">Replace tags with
                            <small class="has-text-primary is-size-7">[Optional]</small>
                        </h2>
                    </template>
                    <b-input v-model="replaceChar"></b-input>
                </b-field>
            </div>

            <div class="column is-full">
                <output-area :output="output"></output-area>
            </div>

        </div>
    </section>
</template>

<script>
    import stripTags from 'voca/strip_tags'

    export default {
        name: "Reverse",
        data() {
            return {
                inputStr: '',
                replaceChar: '',
                htmlTags: ["body", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"],
                htmlTagsFiltered: this.htmlTags,
                tags: []
            }
        },
        computed: {
            output() {
                return stripTags(this.inputStr, this.tags, this.replaceChar)
            }
        },
        methods: {
            getFilteredTags(text) {
                this.htmlTagsFiltered = this.htmlTags.filter((tag) => {
                    return tag.toLowerCase().indexOf(text.toLowerCase()) > -1
                })
            }
        }
    }
</script>

<style>
    .textarea {
        height: 15em;
    }
</style>