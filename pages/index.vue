<template>
    <section class="section">
        <h1 class="title">Welcome to TextTools</h1>
        <h2 class="subtitle">This is just a imple tool I wrote to learn <a href="https://nuxtjs.org">Nuxt JS</a></h2>

        <hr>

        <h2 class="subtitle">Tool List</h2>
        <div class="columns is-multiline">
            <div v-if="key !== ''" v-for="(navItem, key) of navItems" :key="key" class="column is-one-quarter">
                <p class="menu-label" style="margin-top: 1em; margin-bottom: 0.25em !important;">{{
                    key }}</p>
                <ul class="menu-list">
                    <li v-for="(item, index) in navItems[key]">
                        <nuxt-link class="is-capitalized" :to="item.info.path" exact-active-class="is-active">
                            <!--                  {{ navItem.name === 'index' ? 'Home' : item.path.split('/').reverse()[0] }}-->
                            {{item.info.path.split('/').reverse()[0] || 'Home' }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: 'Home',
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
            }
        }
    }
</script>

