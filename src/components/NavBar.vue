<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-sm">
      <a @click="hardRefresh" class="navbar-brand"><h2>ShortenIt</h2></a>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              aria-current="page"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" aria-current="page">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    hardRefresh() {
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
.navbar-nav {
  margin-left: auto;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

h2 {
  padding: 0;
  margin: 0;
  font-weight: 100;
}

.navbar-brand {
  cursor: pointer;
}
</style>
