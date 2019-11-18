<template>
  <div class="comment-reply">
    <div class="list">
      <div class="reply-item" >
        <div class="reply-item-top">
          <img :src="item.userAvar" :alt="item.userName" />
          <h4>{{ item.userName }}</h4>
          <van-icon name="delete" class="delete" v-if="item.userName==userInfo.userName" />
        </div>
        <div class="reply-item-cont">
          {{ item.commentCon }}
        </div>
        <div class="reply-item-parent" v-if="item.isChild">
          <p class="PuserName">回复@{{item.PuserName}}</p>
          <p class="PcommentCon">{{item.PcommentCon}}</p>
        </div>
        <div class="reply-item-handle">
          <span class="time">
            {{ item.commentTime }}
          </span>
          <div class="item-icon">
            <p @click="replyOtherAction({PcommentCon:item.commentCon,PuserName:item.userName})"><span>回复 </span> <van-icon name="comment-o" /></p>
            <p @click.stop="supportAction">
              <span>{{ item.supportNum == 0 ? "赞" : item.supportNum }}</span
              ><van-icon name="good-job-o" />
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "brand-detail-comment-reply",
  data() {
    return {
      option:{}
    };
  },
  props: {
    item: {
      type: Object,
      
    },
    userInfo:{
      type:Object
    }
  },
  methods: {
    supportAction(ev) {
      let target = ev.target.parentNode;
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
    },
    replyOtherAction(option){
      this.$emit('sendReplyOther',option);
      // console.log(option);
    }
  },
  created() {
    
  },
  updated() {
    
  }
};
</script>

<style lang="scss" scoped>
.comment-reply {
    .reply-item {
      width: 100%;
      position: relative;
      padding: 30px 0;
      &-top {
        display: flex;
        color: #000;
        line-height: 155px;
        img {
          width: 100%;
          height: 100%;
          width: 155px;
          height: 155px;
          border-radius: 50%;
          overflow: hidden;
        }
        h4 {
          font-size: 50px;
          flex: 1;
          padding-left: 40px;
        }
        .delete {
          font-size: 60px;
        }
      }
      &-cont {
        color: #666;
        font-size: 40px;
        line-height: 60px;
        padding-top: 30px;
      }
      &-parent{
        width:100%;
        background:#f4f4f4;
        p{
          padding:30px 30px;
          box-sizing: border-box;
          width:100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &.PuserName{
            font-size:45px;
            color:#000;
          }
          &.PcommentCon{
            font-size: 35px;
            color: #333;
          }

        }
      }
      &-handle {
        display: flex;
        .time {
          font-size: 40px;
          padding-top: 50px;
        }
        .item-icon {
          text-align: right;
          // display: flex;
          vertical-align: middle;
          padding-top: 50px;
          position: relative;
          z-index: 9;
          flex: 1;
          p {
            display: inline-block;
            font-size: 40px;
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
    }
}
</style>
