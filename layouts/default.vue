<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <b-icon icon="console-line"></b-icon>&nbsp;&nbsp;Text Tools
        </a>

        <div class="navbar-burger" @click="isOpen = !isOpen" aria-controls="aside">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </nav>

    <section class="main-content is-fullheight">
      <div class="columns is-desktop">
        <b-collapse class="column is-2-desktop has-background-white-bis" aria-id="aside" :open="isOpen">
          <aside class="section">
            <ul v-for="(navItem, key) of navItems" :key="key" class="menu-list">
              <p v-if="key !== ''" class="menu-label" style="margin-top: 1em; margin-bottom: 0.25em !important;">{{ key }}</p>
              <li v-for="(item, index) in navItems[key]">
                <nuxt-link class="is-capitalized" :to="item.info.path" exact-active-class="is-active">
                  <!--                  {{ navItem.name === 'index' ? 'Home' : item.path.split('/').reverse()[0] }}-->
                  {{item.info.path.split('/').reverse()[0] || 'Home' }}
                </nuxt-link>
              </li>
            </ul>
          </aside>
        </b-collapse>

        <div class="container column is-10-desktop">
          <nuxt/>
        </div>
      </div>
    </section>
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
      }
    },
    data() {
      return {
        isOpen: windowWidth
      }
    },
    mounted() {
      console.log(this.$router);
      console.log(this.navItems);
    }
  }
</script>
