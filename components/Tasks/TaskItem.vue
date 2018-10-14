<template>
  <b-alert show variant="info">
    <div class="card-block">
       {{item.text}}
    </div>
  </b-alert>
</template>

<script>
  export default {
    props: ['item'],
  };
</script>

<style>

</style>
