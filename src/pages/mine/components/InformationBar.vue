<!--  -->
<template>
  <div class="information-bar">
    <section class="bar-item" v-for="item of bars" :key="item.id">
      <div class="bar-left">
        <span class="iconfont" v-html="item.icon"></span>
        <span class="bar-name">{{item.name}}</span>
      </div>
      <div class="bar-right">
        <p class="bar-first">{{item.first}}</p>
        <p class="bar-second">{{item.second}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InformationBar',
  data () {
    return {
      bars: [
        {
          id: '001',
          icon: '&#xe60e;',
          name: '账户',
          first: '113.06',
          second: '已购80本书'
        },
        {
          id: '002',
          icon: '&#xe619;',
          name: '无限卡',
          first: '还剩23天',
          second: '已累计为你节省451.08元'
        },
        {
          id: '003',
          icon: '&#xe605;',
          name: '好友排名',
          first: '第5名',
          second: ''
        },
        {
          id: '004',
          icon: '&#xe61e;',
          name: '关注',
          first: '27人关注我',
          second: '已关注41人'
        },
        {
          id: '005',
          icon: '&#xe63f;',
          name: '笔记',
          first: '47本',
          second: '9个赞3个评论'
        },
        {
          id: '006',
          icon: '&#xe65f;',
          name: '书单',
          first: '1个',
          second: ''
        }
      ]
    }
  }
}
</script>
<style lang="stylus"  scoped>
.information-bar {
  margin-top: 0.4rem;
  padding-bottom: 1rem;
}

.information-bar section:nth-child(2n+1) {
  border-top: 0.15rem solid #dcdcdc;
}

.information-bar section:last-child {
  border-bottom: 0.15rem solid #dcdcdc;
}

.bar-item {
  padding: 0.4rem 0.2rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  .bar-left {
    margin-left: 0.2rem;
    overflow: hidden;
    line-height: 0.8rem;

    .bar-icon {
      width: 0.4rem;
      height: 0.4rem;
    }

    .bar-name {
      margin-left: 0.4rem;
    }
  }

  .bar-right {
    text-align: right;
    line-height: 0.8rem;

    .bar-second {
      font-size: 0.2rem;
      color: #999;
    }
  }
}
</style>
