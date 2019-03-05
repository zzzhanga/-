<!--  -->
<template>
  <div>
      <header-detail></header-detail>
      <detail-wonderful></detail-wonderful>
      <detail-bar></detail-bar>
  </div>
</template>

<script>
import HeaderDetail from './components/header'
import DetailWonderful from './components/wonderful'
import DetailBar from './components/detailbar'
export default {
    name:'Detail',
    data () {
        return {
        };
    },
    components: {
        HeaderDetail,
        DetailWonderful,
        DetailBar

    }
}
</script>
<style scoped>
</style>