<!--  -->
<template>
  <div class="like">
      <like-search></like-search>
      <like-guess></like-guess>
  </div>
</template>

<script>
import LikeSearch from './components/LikeSearch'
import LikeGuess from './components/guess'
export default {
  components: {
      LikeSearch,
      LikeGuess
  }

}

</script>
<style scoped>
</style>