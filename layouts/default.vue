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
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li v-for="(navItem, key) of navItems" :key="key">
                <nuxt-link class="is-capitalized" :to="navItem.name" exact-active-class="is-active">
                  {{ navItem.name }}
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
  let windowWidth;
  if (process.client) windowWidth = window.innerWidth > 1024;
  export default {
    computed: {
      navItems() {
        return this.$router.options.routes
      }
    },
    data() {
      return {
        isOpen: windowWidth
      }
    }
  }
</script>
