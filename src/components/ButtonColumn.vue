<template>

<!-- 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 

  <div class="button-container">
    <button class="btn btn-one" @click="goTo('my-list.html')">My List</button>
    <button class="btn btn-two" @click="goTo('add-book.html')">Add a Book</button>
    <button class="btn btn-three" @click="goTo('delete-book.html')">Delete a Book</button>
    <button class="btn btn-four" @click="goTo('edit-book.html')">Edit a Book</button>
  </div>
  -->

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


/* 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 
Add Later into the already LOGGED IN pages. ↓ ↓ ↓ 

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 1rem;
}

.btn {
  font-family: 'Knewave';
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-one {
  background-color: #0786b0;
  color: rgb(0, 0, 0);
}

.btn-two {
  background-color: #07a804;
  color: rgb(0, 0, 0);
}

.btn-three {
  background-color: #bb1e16;
  color: rgb(0, 0, 0);
}

.btn-four {
  background-color: #ffea00;
  color: rgb(0, 0, 0);
}*/
</style>
