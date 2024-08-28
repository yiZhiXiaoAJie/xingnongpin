<script lang="ts" setup>
import { ref, reactive } from "vue";
import banner_list from './components/banner_list.vue'
const banner = ref([
  {
    id: 1,
    url: "/static/banner/banner1.jpg",
  },
  {
    id: 2,
    url: "/static/banner/banner2.png",
  },
]);
</script>

<template>
  <view class="home_head">
    <view class="home_head_search">
      <view class="search">
        <view class="icon-saoyisao iconfont sear"></view>
        <view class="sgt">|</view>
        <view>中国供销服务三农</view>
      </view>
      <view class="payment_box">
        <view class="iconfont icon-code3 Payment"></view>
        <text class="payment_font">付款</text>
      </view>
      <image
        src="/static/image/logo.png"
        class="home_head_logo"
        mode="widthFix"
      />
    </view>
    <swiper indicator-dots autoplay circular>
      <swiper-item v-for="item in banner" :key="item.id">
        <image :src="item.url" ></image>
      </swiper-item>
    </swiper>
  </view>
  <banner_list></banner_list>
</template>

<style lang="scss" scoped>
swiper {
  width: 100%;
  height: 350rpx;
  margin-top: 20rpx;
  border-radius: 20rpx;
  swiper-item {
    width: 100%;
    image {
    width: 100%;
    height: 100%;
    border-radius: 20rpx;
  }
  }
 
}
.home_head {
  width: 100%;
  height: 500rpx;
  background: linear-gradient(135deg, #e1ffe8, #96fce4);
  padding: 0 20rpx;
  box-sizing: border-box;
  overflow: hidden;
  .Payment {
    font-size: 40rpx;
  }
}
.home_head_logo {
  width: 80rpx;
  height: 80rpx;
}
.home_head_search {
  margin-top: 20rpx;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
}
.payment_box {
  width: 90rpx;
  height: 60rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rpx;
}
.payment_font {
  font-size: 16rpx;
  text-align: center;
}
.search {
  width: 400rpx;
  height: 80rpx;
  background-color: #a9c9b6;
  border-radius: 40rpx;
  padding: 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .sear {
    vertical-align: middle;
    font-size: 40rpx;
    color: #000;
  }
  .sgt {
    margin: 0 10rpx;
  }
}
</style>
