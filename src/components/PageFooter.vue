<template>
    <footer class="container">
      <div class="row">
        <div class="col-md-2">
          <!-- Contenuto del blocco 1 -->
          <h2>{{ block1 }}</h2>
        </div>
        <div class="col-md-6">
          <!-- Contenuto del blocco 2 -->
          <p>{{ block2 }}</p>
        </div>
        <div class="col-md-2">
          <!-- Contenuto del blocco 3 -->
          <p>{{ block3 }}</p>
        </div>
        <div class="col-md-2">
          <!-- Contenuto del blocco 4 -->
          <p>{{ block4 }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'PageFooter',
    props: {
      block1: String,
      block2: String,
      block3: String,
      block4: String,
    },
  };
  </script>
  
<style lang="scss" scoped>
footer {
    background-color: black;
}
</style>