<template>


  <div class="Login">
    <button class="Registruotis" @click="goTo('register.html')">Register</button>
    <button class="Prisijungt"@click="goTo('login.html')">Login</button>
  </div>
</template>

<script>
export default {
  name: "ButtonColumn",
  methods: {
    goTo(page) {
      window.location.href = page;
    }
  }
};
</script>

<style scoped>

.Login {
  position: fixed;
  top: 0;
  right: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem;
  gap: 5px;
  z-index: 1000;
}

</style>
