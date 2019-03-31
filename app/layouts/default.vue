<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <nuxt class="container" />
    </div>
  </div>
</template>

<style>

</style>
<script>
  import TheHeader from "../components/TheHeader";
  export default {
    components: {
      TheHeader
    }
  }
</script>
