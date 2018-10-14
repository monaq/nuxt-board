<template>
  <div id="Nav">
    <b-navbar toggleable="md" type="dark" variant="info">
      <nuxt-link to="/" class="navLink">Home </nuxt-link>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <nuxt-link to="/kanban" class="navLink">Board <i class="fa fa-th-large"></i></nuxt-link>
          <nuxt-link to="/backlog" class="navLink">Backlog <i class="fa fa-list"></i></nuxt-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
    }
  }
};
</script>

<style scoped>
  .navLink {
    color: whitesmoke;
    margin: 0 0.5em
  }

  .nuxt-link-exact-active {
    text-decoration: underline
  }
</style>
