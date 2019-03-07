<!--  -->
<template>
  <div class="book-content">
    <router-link 
        tag="div"
        to="/bookdetail"
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
    data() {
        return {
            public:'142',
            Private:'2',
            booklist:[{
                id:"0001",
                imgUrl:"/api/item1.png",
                txt:"人类群星闪耀时"
            },
            {
                id:"0002",
                imgUrl:"/api/item2.png",
                txt:"今日简史"
            },
            {
                id:"0003",
                imgUrl:"/api/item3.png",
                txt:"围城"
            },
            {
                id:"0004",
                imgUrl:"/api/item4.png",
                txt:"小岛经济学"
            },
            {
                id:"0005",
                imgUrl:"/api/item5.png",
                txt:"1984"
            },
            {
                id:"0006",
                imgUrl:"/api/item6.png",
                txt:"滚雪球"
            },
            {
                id:"0007",
                imgUrl:"/api/item7.png",
                txt:"身体从未忘记"
            },
            {
                id:"0008",
                imgUrl:"/api/item8.png",
                txt:"穷查理宝典"
            },
            {
                id:"0009",
                imgUrl:"/api/item9.png",
                txt:"2017已读"
            },
            {
                id:"0010",
                imgUrl:"/api/item10.png",
                txt:"高情商沟通书"
            },
            {
                id:"0011",
                imgUrl:"/api/item11.png",
                txt:"好好说话"
            },
            {
                id:"0012",
                imgUrl:"/api/item12.png",
                txt:"杀死一只知更鸟"
            },
            {
                id:"0013",
                imgUrl:"/api/item13.png",
                txt:"在荒原上寻觅的灵魂"
            },
            {
                id:"0014",
                imgUrl:"/api/item14.png",
                txt:"2018已读"
            },
            {
                id:"0015",
                imgUrl:"/api/item15.png",
                txt:"设计心理学"
            },
            {
                id:"0016",
                imgUrl:"/api/item16.png",
                txt:"情商"
            },
            {
                id:"0017",
                imgUrl:"/api/item17.png",
                txt:"沟通的艺术"
            },
            {
                id:"0018",
                imgUrl:"/api/item18.png",
                txt:"硅谷热"
            },
            {
                id:"0019",
                imgUrl:"/api/item19.png",
                txt:"我是未来"
            },
            {
                id:"0020",
                imgUrl:"/api/item20.png",
                txt:"邓普顿教你逆向投资"
            },
            {
                id:"0021",
                imgUrl:"/api/item21.png",
                txt:"未来进化"
            },
            {
                id:"0022",
                imgUrl:"/api/item22.png",
                txt:"自控力"
            },
            {
                id:"0023",
                imgUrl:"/api/item23.png",
                txt:"关键对话"
            },
            {
                id:"0024",
                imgUrl:"/api/item24.png",
                txt:"学会提问:麦肯锡工作法"
            },
            {
                id:"0025",
                imgUrl:"/api/item25.png",
                txt:"追随你的心"
            },
            {
                id:"0026",
                imgUrl:"/api/item26.png",
                txt:"生活是很好玩的"
            },
            {
                id:"0027",
                imgUrl:"/api/item27.png",
                txt:"半小时漫画:中国史+世界史"
            },
            {
                id:"0028",
                imgUrl:"/api/item28.png",
                txt:"干法"
            },
            {
                id:"0029",
                imgUrl:"/api/item29.png",
                txt:"乌合之众:大众心理学研究"
            },
            {
                id:"0030",
                imgUrl:"/api/item30.png",
                txt:"硅谷之火:人与计算机的未来"
            },
            {
                id:"0031",
                imgUrl:"/api/item31.png",
                txt:"巴菲特之道"
            },
            {
                id:"0032",
                imgUrl:"/api/item32.png",
                txt:"30岁之前要学会的33堂理财课"
            },
            {
                id:"0033",
                imgUrl:"/api/item33.png",
                txt:"富兰克林自传"
            },
            {
                id:"0034",
                imgUrl:"/api/item34.png",
                txt:"格鲁夫给经理人的第一课"
            },
            {
                id:"0035",
                imgUrl:"/api/item35.png",
                txt:"明朝那些事儿"
            },
            {
                id:"0036",
                imgUrl:"/api/item36.png",
                txt:"未来简史"
            },
            {
                id:"0037",
                imgUrl:"/api/item37.png",
                txt:"第一次买保险就买对"
            },
            {
                id:"0038",
                imgUrl:"/api/item38.png",
                txt:"码农翻身"
            },
            {
                id:"0039",
                imgUrl:"/api/item39.png",
                txt:"简爱"
            },
            {
                id:"0040",
                imgUrl:"/api/item40.png",
                txt:"自卑与超越"
            },
            {
                id:"0041",
                imgUrl:"/api/item41.png",
                txt:"简明美国史"
            },
            {
                id:"0042",
                imgUrl:"/api/item42.png",
                txt:"清单人生"
            },
            {
                id:"0043",
                imgUrl:"/api/item43.png",
                txt:"自控力"
            },
            {
                id:"0044",
                imgUrl:"/api/item44.png",
                txt:"AI-未来"
            },
            {
                id:"0045",
                imgUrl:"/api/item45.png",
                txt:"方与圆"
            },
            {
                id:"0046",
                imgUrl:"/api/item46.png",
                txt:"MacTalk-人生元编程"
            },
            {
                id:"0047",
                imgUrl:"/api/item47.png",
                txt:"学习之道"
            },
            {
                id:"0048",
                imgUrl:"/api/item48.png",
                txt:"为什么中国人勤劳而不富有"
            },
            {
                id:"0049",
                imgUrl:"/api/item49.png",
                txt:"2019"
            },
            {
                id:"0050",
                imgUrl:"/api/item50.png",
                txt:""
            }]
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