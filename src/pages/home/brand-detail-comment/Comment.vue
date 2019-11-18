<template>
  <div class="page-wrap">
    <div class="page subpage" id="brand-detail-comment">
      <app-header hasBack :title="title">
        <van-icon name="share" slot="right-btn" class="right-btn" />
      </app-header>

      <app-scroll class="content">
        <div class="cont">
          <app-comment-item :item="detail"></app-comment-item>
        </div>

        <div class="reply-cont">
          <h4>全部回复（{{ commentList.length +myReplyList.length}}）</h4>
          <div class="list">
              <brand-detail-comment-reply
              v-for="(item, index) in myReplyList" :key="index"
              :item="item"
              :userInfo="userInfo"
            ></brand-detail-comment-reply>

            <brand-detail-comment-reply
              v-for="(item, index) in commentList" :key="index"
              :item="item"
              :userInfo="userInfo"
              @sendReplyOther='replyOther'
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
import { userInfo } from 'os';
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
      myReplyList:[],
      poption:{}
    };
  },
  methods: {
    async initData() {
      const {
        detail,
        commentItem
      } = await homeService.requestBrandDetailComment(this.id);
      this.detail = detail;
      this.detail.commentNum = commentItem.length+this.myReplyList.length;
      this.commentList = commentItem;
    },
    postReplyAction() {
    //   console.log(this.replyVal);
      let newReply={
          userAvar:this.userInfo.userAvar,
          userName:this.userInfo.userName,
          commentCon:this.replyVal,
          commentTime:0,
          supportNum:0,
      }
      if(JSON.stringify(this.poption) !== "{}"){
          newReply.PuserName=this.poption.PuserName;
          newReply.PcommentCon=this.poption.PcommentCon;
          newReply.isChild=true;
      }
      this.myReplyList.push(newReply);
      this.poption={};
    },
    replyOther(option){
        this.poption=option;
        this.$refs.inp.focus();
        this.userN=option.PuserName;
    }
  },
  computed: {
    title() {
      return this.detail.userName + "的评价";
    },
    userN(){
        return this.detail.userName;
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.initData();
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = userInfo;
  }
};
</script>

<style lang="scss" scoped>
#brand-detail-comment {
  .content {
    padding: 40px;
    box-sizing: border-box;
  }
  .reply-cont{

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
