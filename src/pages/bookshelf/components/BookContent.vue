<!--  -->
<template>
  <div class="book-content">
    <router-link 
        tag="div"
        :to="'/bookdetail/' + item.id "
        class="book-item"
        v-for="item of booklist"
        :key="item.id"
    >
            <img class="book-cover" :src="item.imgUrl">
            <p class="book-text">{{item.txt}}</p>
    </router-link>
    <p class="item-bottom">{{this.public}}本公开阅读 · {{this.Private}}本私密阅读</p>
  </div>
</template>

<script>
export default {
    name: "BookSearch",
    props:{
        booklist: Array
    },
    data() {
        return {
            public:'142',
            Private:'2',
        }
    },
}

</script>
<style lang="stylus" scoped>
    .book-content
        padding .4rem .2rem 2rem .2rem
        .book-item
            position relative
            display inline-block
            margin .2rem
            width 1.9rem
            height 3.5rem
            .book-cover
                position absolute
                top 0
                width 100%
                border .02rem solid #ccc
            .book-text
                position absolute
                bottom -.4rem
                height 1rem
                line-height .5rem
                font-size .16rem
        .item-bottom
            margin-top 1rem
            font-size .24rem
            color #ccc
            text-align center




</style>