<template>
  <div class="button-container">
    <button class="btn btn-one">My List</button>
    <button class="btn btn-two">Add a Book</button>
    <button class="btn btn-three">Delete a Book</button>
    <button class="btn btn-four">Edit a Book</button>
  </div>
</template>

<script>
export default {
  name: "ButtonColumn",
};
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  gap: 1rem;
}

.btn {
  font-family: "Times New Roman";
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
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
}

</style>
