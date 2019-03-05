<!--  -->
<template>
  <div class="like">
      <like-search @change="handleLetterChange"></like-search>
      <like-guess></like-guess>
      <like-history :value="value" ></like-history>
  </div>
</template>

<script>
import LikeSearch from './components/LikeSearch'
import LikeGuess from './components/guess'
import LikeHistory from './components/history'
export default {
  components: {
      LikeSearch,
      LikeGuess,
      LikeHistory
  },
  data () {
    return {
      value:''
    }
  },
  methods: {
    handleLetterChange(value){
        this.value=value;
    }
  },

}

</script>
<style scoped>
</style>