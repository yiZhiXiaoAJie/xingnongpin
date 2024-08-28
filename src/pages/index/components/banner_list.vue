<script lang="ts" setup>
import { ref, reactive } from "vue";
const list = ref([
  { id: 1, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 2, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 3, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 4, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 5, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 6, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 7, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 8, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 9, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
  { id: 10, title: "信阳专区", url: "../../../static/list_img/10007.jpg" },
]);
</script>

<template>
  <view class="banner_list">
    <view class="banner_list_item" v-for="item in list" :key="item.id">
      <image :src="item.url" class="listImg" />
      <view class="title">{{ item.title }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.banner_list {
  width: 95%;
  height: 420rpx;
  padding: 0 10rpx;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20rpx;
  margin: 15rpx auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .banner_list_item {
    width: 130rpx;
    height: 150rpx;
    text-align: center;
    vertical-align: middle;
    .listImg {
      width: 100rpx;
      height: 100rpx;
    }
    .title {
      font-size: 24rpx;
      color: #000;
      margin-top: 10rpx;
    }
  }
}
</style>
