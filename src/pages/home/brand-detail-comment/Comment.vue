<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand-detail-comment">
      <app-header hasBack :title="title">
        <van-icon name="share" slot="right-btn" class="right-btn" />
      </app-header>

      <app-scroll class="content">
        <div class="cont">
          <app-comment-item
            :item="detail"
            @commentSelf="commentSelf"
          ></app-comment-item>
        </div>

        <div class="reply-cont">
          <h4>全部回复（{{ commentList.length + myReplyList.length }}）</h4>
          <div class="list">
            <brand-detail-comment-reply
              v-for="(item, index) in commentList"
              :key="index"
              :item="item"
              :userInfo="userInfo"
              @sendReplyOther="replyOther"
            ></brand-detail-comment-reply>
          </div>
        </div>
      </app-scroll>

      <div class="postReply">
        <div class="cont">
          <img :src="userInfo.userAvar" :alt="userInfo.userName" />
          <input
            type="text"
            v-model="replyVal"
            :placeholder="'回复' + userN"
            @keyup.enter="postReplyAction"
            ref="inp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeService from "../../../services/homeService";
import appCommentItem from "../../../components/app-comment-item";
import commentReply from "./children/comment-reply";
import { userInfo } from "os";
export default {
  name: "brand-detail-comment",
  components: {
    [appCommentItem.name]: appCommentItem,
    [commentReply.name]: commentReply
  },
  data() {
    return {
      id: "",
      detail: {},
      commentList: [],
      userInfo: {},
      replyVal: "",
      myReplyList: [],
      poption: {},
      keepuserN: "",
      createdTime: "",
      commitTime: ""
    };
  },
  methods: {
    async initData() {
      const {
        detail,
        commentItem
      } = await homeService.requestBrandDetailComment(this.id);
      this.detail = detail;
      this.detail.commentNum = commentItem.length + this.myReplyList.length;
      this.commentList = commentItem;
      //保存回复用户初始名
      this.keepuserN = this.detail.userName;
    },
    postReplyAction() {
      this.commitTime = Date.now();
      // 创建新的新的评论信息对象
      let newReply = {
        userAvar: this.userInfo.userAvar,
        userName: this.userInfo.userName,
        commentCon: this.replyVal,
        commentTime: this.theData,
        supportNum: 0
      };
      if (JSON.stringify(this.poption) !== "{}") {
        //判断poption是否为空，不为空就是回复别人的评论，需要添加相应的属性
        newReply.PuserName = this.poption.PuserName;
        newReply.PcommentCon = this.poption.PcommentCon;
        newReply.isChild = true;
      }
      this.commentList.unshift(newReply); //push到新评论列表
      // 清空缓存数据
      this.poption = {};
      this.replyVal = "";
    },
    replyOther(option) {
      Object.assign(this.poption, option); //新增属性添加setter getter
      this.$refs.inp.focus();
      this.userN = option.PuserName;
      // console.log(this.poption);
    },
    commentSelf(selfName) {
      this.userN = selfName;
      this.poption = {};
    }
  },
  computed: {
    title() {
      return this.detail.userName + "的评价"; // 标题
    },
    userN: {
      //  评论对象的用户名需要get和set 进行获取和修改
      get: function() {
        return this.keepuserN;
      },
      set: function(newValue) {
        this.keepuserN = newValue;
      }
    },
    theData() {
      // 判断评论发布时间

      let time = this.commitTime - this.createdTime;
      // let time=1000*60*60*24*11;   //测试表达式
      //1分=1000毫秒*60
      //1时=1000毫秒*60*60
      //1天=1000毫秒*60*60*24
      // console.log(time);
      if (time < 1000 * 60) {
        return "刚刚";
      } else if (time > 1000 * 60 && time < 1000 * 60 * 60) {
        return Math.floor(time / (1000 * 60)) + "分钟前";
      } else if (time > 1000 * 60 * 60 && time < 1000 * 60 * 60 * 24) {
        return Math.floor(time / (1000 * 60 * 60)) + "小时前";
      } else if (
        time > 1000 * 60 * 60 * 24 &&
        time < 1000 * 60 * 60 * 24 * 10
      ) {
        return Math.floor(time / (1000 * 60 * 60 * 24)) + "天前";
      } else if (time > 1000 * 60 * 60 * 24 * 10) {
        let d = new Date();
        return d.getMonth(this.commitTime) + "." + d.getDate(this.commitTime);
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.initData();
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
    //设置默认头像
    console.log(userInfo.userAvar);
    if (!userInfo.userAvar) {
      userInfo.userAvar =
        "https://perico.damai.cn/userheadphotos/450483/90096787_150_150.jpg?x-oss-process=image/resize,w_100,h_100,/quality,q_50/format,webp";
    }

    this.createdTime = Date.now();
  }
};
</script>

<style lang="scss" scoped>
#brand-detail-comment {
  .content {
    padding: 40px;
    box-sizing: border-box;
  }
  .reply-cont {
    border-top: 1px solid #ccc;
    padding-top: 90px;
    margin-top: 90px;
    padding-bottom: 190px;
    h4 {
      font-size: 65px;
    }
    .list {
      margin-top: 65px;
    }
  }
  .postReply {
    width: 100%;
    height: 150px;
    background: #f5f5f5;
    position: absolute;
    bottom: 0;
    left: 0;
    .cont {
      height: 90px;
      padding: 30px;
      display: flex;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      input {
        flex: 1;
        border: none;
        background: transparent;
        text-indent: 30px;
      }
    }
  }
}
</style>
