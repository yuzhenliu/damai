<template>
  <lazy-component>
    <div class="item" @click="toCommentDetailAction(item.comment_id)">
      <div class="item-info">
        <img :src="item.userImg" :alt="item.userName" />
        <div class="txt">
          <h3>{{ item.userName }}</h3>
          <p>
            <span> {{ item.commentDate }}发布评价</span>
            <van-rate v-model="item.scoreNum" readonly color="#eb5e7e" />
          </p>
          <van-icon name="ellipsis" class="more" />
        </div>
      </div>
      <div class="item-cont">
        {{ item.commentCon }}
      </div>
      <div class="item-imgArr">
        <img
          v-for="(imgUrl, index) in item.commentImg"
          :src="imgUrl"
          :alt="imgUrl"
          :key="index"
        />
      </div>

      <div class="item-icon">
        <p>转载 <van-icon name="share" class="share" /></p>
        <p>
          <span>{{ item.commentNum }} </span> <van-icon name="comment-o" />
        </p>
        <p @click.stop="supportAction" id="support">
          <span>{{ item.supportNum == 0 ? "赞" : item.supportNum }}</span
          ><van-icon name="good-job-o" />
        </p>
      </div>
    </div>
  </lazy-component>
</template>

<script>
import { Rate } from "vant";
export default {
  name: "app-comment-item",
  components: {
    [Rate.name]: Rate
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    supportAction(ev) {
      let target = ev.target.parentNode;
      if (target.id == "support") {
        let numN = target.childNodes[0];
        let addNum = parseInt(numN.innerText);
        if (!target.classList.contains("clicked")) {
          addNum += 1;
          if (isNaN(addNum)) {
            addNum = 1;
          }
          target.classList.add("clicked");
        } else {
          target.classList.remove("clicked");
          addNum -= 1;
        }

        numN.innerText = addNum;
      }
    },
    toCommentDetailAction(id) {
      this.$router.push({
        name: "commentDetail",
        params: { id: id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding-top: 65px;
  position: relative;
  &-info {
    display: flex;
    img {
      width: 155px;
      height: 155px;
      border-radius: 50%;
    }
    .txt {
      padding-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 78px;
      position: relative;
      width: 100%;
      h3 {
        font-size: 55px;
        flex: 1;
      }
      p {
        font-size: 40px;
        flex: 1;
        .van-rate {
          padding-left: 40px;
          font-size: 30px;
        }
      }
    }
    .more {
      font-size: 50px;
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-cont {
    font-size: 40px;
    line-height: 75px;
    padding-top: 50px;
  }
  &-imgArr {
    display: flex;
    flex-wrap: wrap;
    img {
      // width:310px;
      // height:310px;
      border-radius: 50px;
      width: 31%;
      margin: 1.1%;
    }
  }
  &-icon {
    text-align: right;
    // display: flex;
    vertical-align: middle;
    padding-top: 50px;
    position: relative;
    z-index: 9;
    p {
      display: inline-block;
      font-size: 50px;
      line-height: 50px;
      padding-left: 20px;
      vertical-align: middle;
      i {
        padding: 15px;
        vertical-align: middle;
      }
    }
    .clicked {
      color: #eb5e7e;
    }
  }
}
</style>
