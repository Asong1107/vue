<template>
  <div id="commonts" class="commonts">
    <!-- 左侧导航栏 -->
    <div class="navbar">
      <div class="nav_1">
        <!-- 导航头部图片 -->
        <div class="img">
          <img
            src="http://www.pmdaniu.com/storage/97148/a6051345419001bae7af7d003a835144-57026/images/首页/u201.png"
          />
        </div>
        <ul>
          <li @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-home" />
            </svg>
            <span>首页</span>
          </li>
          <li @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-wenzhang" />
            </svg>
            <span>文章</span>
          </li>
          <li @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-dingdan" />
            </svg>
            <span>订单</span>
          </li>
          <li @mouseover="mouseOver(4)" @mouseleave="mouseLeave(4)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-Id" />
            </svg>
            <span>用户</span>
          </li>
          <li @mouseover="mouseOver(5)" @mouseleave="mouseLeave(5)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-caiwu" />
            </svg>
            <span>财务</span>
          </li>
          <li @mouseover="mouseOver(6)" @mouseleave="mouseLeave(6)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-xiaoxi" />
            </svg>
            <span>客服</span>
          </li>
          <li @mouseover="mouseOver(7)" @mouseleave="mouseLeave(7)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconai-shezhi" />
            </svg>
            <span>设置</span>
          </li>
        </ul>
      </div>
      <!-- 二级菜单 -->
      <div class="nav_2" v-if="nav2_if" @mouseleave="mouseLeave(0)">
        <ul v-for="(items,index) in lists" :key="index">
          <template v-for="(item,i) in items">
            <li class="first_li_1" :key="i" v-if=" i<= 0 ">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconai-xiajiantou" />
              </svg>
              {{item.title}}
            </li>
          </template>
          <template v-for="(item,i) in items">
            <li :key="i" v-if="i>0 " @click="getUrl(item.url)">{{item.title}}</li>
          </template>
        </ul>
      </div>
      <!--  顶部栏  -->
      <div class="top1">

        <p class="username">{{username}}</p>
        <div class="touxiang">
          <svg class="icon" :style="size" aria-hidden="true">
            <use xlink:href="#iconai-touxiang" />
          </svg>
        </div>
        <div class="lingdang">
          <svg class="icon" :style="size" aria-hidden="true">
            <use xlink:href="#iconai-lingdang" />
          </svg>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
import { truncate } from "fs";

import { Icon } from "ant-design-vue";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1267910_fygaq6s2lhl.js"
});

// 引入iconfont 图标库
export default {
  name: "commones",
  data() {
    return {
      nav2_if: false,
      lists: [],
      size: {
        fontSize: "2em"
      },
      username:"杨超越"
    };
  },
  components: {
    IconFont
  },
  mounted() {
    //初始化加载---如果本地没有导航列表则 请求后台加载
    if (sessionStorage.getItem(2) === null) {
      this.first();
    }
  },
  methods: {
    handleClick(e) {
      console.log("click ", e);
    },
    // 移入
    mouseOver(id) {
      var items = sessionStorage.getItem(id);

      if (items !== null) {
        this.lists = JSON.parse(items);
        this.nav2_if = true;
      } else {
        this.nav2_if = false;
      }
    },
    // 移出
    mouseLeave(id) {
      if (id === 0) {
        this.nav2_if = false;
      }
    },
    getUrl(s) {
      console.log("进入--url" + s);
    },
    first() {
      var list = [2, 3, 4, 7];
      for (var i = 0; i < list.length; i++) {
        this.init(list[i]);
      }
    },
    // 自动加载此方法
    init(id) {
      this.$axios
        .get("http://localhost:8089/interface/" + id)
        .then(function(res) {
          console.log(JSON.stringify(res.data.data));
          sessionStorage.setItem(id, JSON.stringify(res.data.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style >
#app {
  background-color: rgb(242, 242, 242);
}
.commonts {
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.navbar {
  width: 100%;
  height: 100%;
}

.nav_1 {
  width: 90px;
  height: 90%;
  margin: 0;
  background-color: black;
  float: left;
}
.img {
  text-align: center;
  padding: 1vh 1vw;
}
.nav_1 ul,
.nav_2 ul {
  padding: 0;
  margin-bottom: 0.1vh;
}
.nav_1 li {
  padding: 1vh 1vw;
  list-style-type: none;
  color: white;
}
.nav_1 li:hover {
  padding: 1vh 1vw;
  list-style-type: none;
  background: white;
  color: black;
}

.nav_1 span {
  margin-left: 5px;
  font-size: 12px;
}

.nav_2 {
  width: 130px;
  background-color: rgb(255, 255, 255);
  float: left;
  height: 90%;
  z-index: auto;
}
.nav_2 li {
  padding: 0.6vh 0;
  list-style-type: none;
  color: black;
  text-align: center;
  font-size: 0.8em;
  font-family: "Noto Sans S Chinese";
  font-weight: 400;
}
.nav_2 .first_li {
  padding-left: 16px;
  text-align: left;
  font-size: 1em;
}
.nav_2 .first_li_1 {
  font-size: 1em;
  padding-left: 10px;
  text-align: left;
}

.nav_2 li:hover {
  background-color: rgb(185, 185, 184);
}

.top1 {
  width: 80vw;
  height: 55px;
  background-color: #ffffff;
  margin-left: 90px;
}
.lingdang {
  width: 35px;
  height: 35px;
  float: right;
  margin:12px 0 auto;
  text-align: center
}
.touxiang {
  width: 35px;
  height: 35px;
  float:right;
  margin:12px 0 auto 5vw;
  text-align: center
}
.username{
  font-size: 1em;
  height: 30px;
  float: right;
  margin: 18px 10vw 0 10px;
  color: #AB81E7;
}
</style>



