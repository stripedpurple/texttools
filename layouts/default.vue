<template>
    <div>
        <nav class="navbar has-shadow is-primary"
             role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <b-icon icon="console-line"></b-icon>&nbsp;&nbsp;Text Tools</a>

                <div class="navbar-burger" @click="isOpen = !isOpen" aria-controls="aside">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </nav>

        <div class="main-content">
            <div class="columns is-multiline">
                <div class="column is-2-desktop has-background-white-bis">
                    <b-collapse aria-id="aside" :open="isOpen">
                        <aside class="section">
                            <ul v-for="(navItem, key) of navItems" :key="key" class="menu-list">
                                <p v-if="key !== ''" class="menu-label"
                                   style="margin-top: 1em; margin-bottom: 0.25em !important;">{{ key }}</p>
                                <li v-for="(item, index) in navItems[key]">
                                    <nuxt-link class="is-capitalized" :to="item.info.path"
                                               exact-active-class="is-active">
                                        {{item.info.path.split('/').reverse()[0] || 'Home' }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </aside>
                    </b-collapse>
                </div>


                <div class="column">
                    <section class="section">
                        <b-field>
                            <b-autocomplete
                                    v-model="toolQuery"
                                    :data="filteredDataArray"
                                    placeholder="e.g. Replace"
                                    icon="magnify"
                                    rounded
                                    @select="opt => navToSelected(opt)"
                                    field="convertedName">

                                <template slot-scope="props">
                                    <no-ssr>
                                        <nuxt-link class="is-flex" :to="props.option.path">
                                            {{props.option.convertedName}}
                                        </nuxt-link>
                                    </no-ssr>
                                </template>
                                <template slot="empty">No results found</template>
                            </b-autocomplete>
                        </b-field>
                        <nuxt/>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    let windowWidth;
    if (process.client) windowWidth = window.innerWidth > 1024;

    export default {
        computed: {
            navItems() {
                return _.groupBy(this.$router.options.routes.sort(
                    (x, y) => x.path > y.path ? 1 : -1
                ).map(x => {
                    let y = {};
                    y.parent = x.path.split('/')[1];
                    y.info = x;
                    return y
                }), 'parent');
            },
            filteredDataArray() {
                return this.$router.options.routes.filter((option) => {
                    return option
                        .path
                        .split('/')
                        .reverse()[0]
                        .toString()
                        .toLowerCase()
                        .indexOf(this.toolQuery.toLowerCase()) > -1
                }).map(x => {
                    x.convertedName = x.path
                        .split('/')
                        .reverse()[0]
                        .toString();

                    return x
                });
            }
        },
        data() {
            return {
                isOpen: windowWidth,
                toolQuery: ''
            }
        },
        methods: {
            navToSelected(path) {
                console.log(path);
                this.$router.push(path.path)
            }
        }
    }
</script>

<style>
    .main-content{
        padding: 0 0.75rem;
    }

    .textarea {
        height: 15em;
    }

    .is-cust {
        background-color: whitesmoke;
        border-color: #dbdbdb;
        color: #7a7a7a;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

</style>
