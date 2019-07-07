<template>
  <div class="icons-list">
    <icon-font type="iconai-home" />
    <icon-font type="iconai-wenzhang" />
    <icon-font type="iconai-dingdan" />
        <ul>
      <li class="first_li">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconai-xiajiantou"></use>
        </svg>
        课程管理
        </li>
      <li>课程列表</li>
      <li>新增课程</li>
      <li>回收站</li>
    </ul>
    <ul>
      <li class="first_li">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconai-xiajiantou"></use>
        </svg>
        教育头条
        </li>
      <li>文章列表</li>
      <li>新增文章</li>
      <li>回收站</li>
    </ul>
    <ul>
      <li class="first_li">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconai-xiajiantou"></use>
        </svg>
        小松活动
        </li>
      <li>活动列表</li>
      <li>新增活动</li>
      <li>报名信息</li>
      <li>回收站</li>
    </ul>
    <ul>
      <li class="first_li">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconai-xiajiantou"></use>
        </svg>
        明星教师
        </li>
      <li>教师列表</li>
      <li>新增教师</li>
      <li>回收站</li>
    </ul>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1267910_c3r4b0asngs.js',
})
export default {
    name:'test',
  components: {
    IconFont,
  }
}
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>