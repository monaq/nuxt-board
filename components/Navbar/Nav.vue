<template>
  <div id="Nav">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <nuxt-link to="/kanban" class="navLink">Board <i class="fa fa-th-large"></i></nuxt-link>
          <nuxt-link to="/backlog" class="navLink">Backlog <i class="fa fa-list"></i></nuxt-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
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
</style>
