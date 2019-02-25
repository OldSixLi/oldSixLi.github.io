<template>
  <div>
    <p class="card">
      {{text}}
      <h3>{{text}}</h3>
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  /* position: fixed; */
  left: 0;
  top: 0;
}
</style>
