<template>
  <div class="home">
    <div class="main">
      <Fleets />
      <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="header">
            <div class="user-details">
              <img :src="post.profileImage" alt="" />
              <h5>{{ post.name }}</h5>
            </div>
            <i class="fa fa-ellipsis-h"></i>
          </div>
          <img :src="post.postImage" alt="" />
          <div class="footer">
            <div class="btns">
              <div class="interact">
                <button @click="post.isLiked = !post.isLiked">
                  <span v-if="post.isLiked">
                    <span @click="post.likes--">
                      <i class="fa fa-heart" style="color: red; "></i
                    ></span>
                  </span>
                  <span v-else>
                    <span @click="post.likes++"> <i class="fa fa-heart-o" style="color: #2c3e50"></i></span
                  ></span>
                </button>
                <i class="fa fa-comment-o"></i>
                <i class="fa fa-paper-plane-o"></i>
              </div>
              <i class="fa fa-bookmark-o"></i>
            </div>
            <div class="comments">
              <div class="likes">
                <img :src="post.fansImage" alt="" />
                <p>
                  Liked by <span> {{ post.fansName }} </span> and
                  <span> {{ post.likes - 1 }} others</span>
                </p>
              </div>

              <div
                class="user-caption"
                @click="post.viewCaption = !post.viewCaption"
              >
                <div v-if="post.userComment.length < 60">
                  <p class="users-own-comment">
                    <span>{{ post.name }}</span>
                    {{ post.userComment }}
                  </p>
                </div>
                <div v-else>
                  <p v-if="post.viewCaption" class="users-own-comment">
                    <span>{{ post.name }}</span>
                    {{ post.userComment }}
                  </p>
                  <p v-else class="users-own-comment">
                    <span>{{ post.name }}</span>
                    {{ post.userComment.substring(0, 60)  }} <span class="moreUserComment"> ... more</span>
                  </p>
                </div>
              </div>
              <p class="view-all" @click="post.allComments = !post.allComments">
                View all {{ post.comments.length }} comments
              </p>
              <div v-if="post.allComments">
                <div
                  class="commenters"
                  v-for="comment in post.comments"
                  :key="comment"
                >
                  <div class="fans">
                    <p>
                      <span>{{ comment.commentName }}</span> {{ comment.comment }}
                    </p>
                    <button @click="comment.commentLiked = !comment.commentLiked">
                      <span v-if="comment.commentLiked">
                        <i class="fa fa-heart" style="color: red"></i>
                      </span>
                      <span v-else><i class="fa fa-heart-o" style="color: #2c3e50"></i></span>
                    </button>
                    <!-- <i
                    class="fa fa-heart"
                    @click="commentLiked = !commentLiked"
                    :class="commmentLiked ? 'liked' : 'not-liked'"
                  ></i> -->
                  </div>
                </div>
              </div>
              <div
                v-else
                class="commenters"
                v-for="comment in post.comments.slice(0, 3)"
                :key="comment"
              >
                <div class="fans">
                  <p>
                    <span>{{ comment.commentName }}</span> {{ comment.comment }}
                  </p>
                  <button @click="comment.commentLiked = !comment.commentLiked">
                    <span v-if="comment.commentLiked">
                      <i class="fa fa-heart" style="color: red"></i>
                    </span>
                    <span v-else><i class="fa fa-heart-o" style="color: #2c3e50"></i></span>
                  </button>
                  <!-- <i
                    class="fa fa-heart"
                    @click="commentLiked = !commentLiked"
                    :class="commmentLiked ? 'liked' : 'not-liked'"
                  ></i> -->
                </div>
              </div>
            </div>
            <div class="time">
              <p>8 HOURS AGO</p>
            </div>

            <!-- <hr> -->
            <div class="fans-comment-box">
              <div class="text-smiley">
                <i class="fa fa-smile-o"></i>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  v-model="comment"
                />
              </div>
              <p v-if="!comment.length">Post</p>
              <p
                v-else
                @click="pushComment(post)"
                class="postMsg"
                style="color: #0a99f6"
              >
                Post
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub">
      <Suggestions />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Fleets from "../components/Fleets.vue";
import Suggestions from "../components/Suggestions.vue";

export default {
  name: "Home",
  components: {
    Fleets,
    Suggestions,
    // HelloWorld
  },
  setup() {
    const posts = ref([
      {
        id: 1,
        name: "userone",
        profileImage: require("@/assets/images/user1.png"),
        postImage: require("@/assets/images/brazil.jpg"),
        likes: 534,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment: "User's own comment ",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 2,
        name: "usertwo",
        profileImage: require("@/assets/images/user2.png"),
        postImage: require("@/assets/images/cyprus.jpg"),
        likes: 200,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 3,
        name: "userthree",
        profileImage: require("@/assets/images/user3.png"),
        postImage: require("@/assets/images/dubai.jpg"),
        likes: 305,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 4,
        name: "userfour",
        profileImage: require("@/assets/images/user4.jpeg"),
        postImage: require("@/assets/images/wonderWoman2.jpg"),
        likes: 404,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 5,
        name: "userfive",
        profileImage: require("@/assets/images/user1.png"),
        postImage: require("@/assets/images/maldives.jpg"),
        likes: 500,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 6,
        name: "userone",
        profileImage: require("@/assets/images/user4.jpeg"),
        postImage: require("@/assets/images/maimi.jpg"),
        likes: 101,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 7,
        name: "userseven",
        profileImage: require("@/assets/images/user3.png"),
        postImage: require("@/assets/images/singapore.jpg"),
        likes: 204,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 8,
        name: "usereight",
        profileImage: require("@/assets/images/user4.jpeg"),
        postImage: require("@/assets/images/thor.jpg"),
        likes: 307,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 9,
        name: "usernine",
        profileImage: require("@/assets/images/user1.png"),
        postImage: require("@/assets/images/dubai.jpg"),
        likes: 403,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
      {
        id: 10,
        name: "userten",
        profileImage: require("@/assets/images/user2.png"),
        postImage: require("@/assets/images/london.jpg"),
        likes: 505,
        isLiked: false,
        fansImage: require("@/assets/images/user3.png"),
        fansName: "userthirty",
        userComment:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis inventore architecto unde, doloremque iusto officia nulla commodi distinctio, accusamus vel dolorem recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.",
        viewCaption: false,
        allComments: false,
        comments: [
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "usertwelve",
            commentLiked: false,
            comment: "Great work from twelve",
          },
          {
            commentName: "userfourteen",
            commentLiked: false,
            comment: "Fourteen says keep it up",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
          {
            commentName: "userten",
            commentLiked: false,
            comment: "Great work",
          },
        ],
      },
    ]);

    const isLiked = ref(false);

    const comment = ref("");

    const pushComment = (post) => {
      var newComment = {
        comment: comment.value,
        commentLiked: false,
        commentName: "randomFan",
      };
      post.comments.push(newComment);
      // post.comments.push(comment.value);
      comment.value = " ";
    };

    // const commentLiked = ref(false);

    const likedPost = (post) => {
      if (isLiked) {
        post.likes++;
      } else {
        post.likes--;
      }
    };

    return {
      posts,
      isLiked,
      comment,
      pushComment,
      likedPost,
    };
  },
};
</script>

<style scoped>

#heart{
  color: blue;
  background: red;
}
.home{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.main{
  width: 60%;
}
.sub{
  width: 35%;
  margin-top: 25px;
  margin-left: -50px;
}
.posts {
  display: grid;
  width: 80%;
  margin: auto;
}
.post {
  display: grid;
  border: 1px solid #dbdbdb;
  margin-top: 10px;
}
.post .header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px 0;
}
.post .header .user-details {
  display: flex;
}
.post .header .user-details img {
  width: 45x;
  height: 45px;
  border-radius: 50%;
  margin: 0 15px 0 10px;
}
.post .header .user-details h5 {
  margin: auto;
}
.post .header i {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 15px;
}
.post img {
  height: 350px;
  width: 100%;
  object-fit: cover;
}
.footer {
  display: grid;
  padding: 5px 15px;
}
.footer .btns {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 98%;
  /* margin: auto; */
  /* padding-left: ; */
}
.interact {
  margin: 5px 0;
}
.interact button {
  border: none;
  outline: none;
  background: transparent;
}
.interact i {
  margin: 0 6px;
  font-size: 23px;
}
.liked {
  color: red;
}
.not-liked {
  color: #2c3e50;
}
.footer .btns i {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 23px;
}
.likes {
  display: flex;
}
.likes img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.likes p {
  font-size: 15px;
  margin-top: auto;
  margin-bottom: auto;
}
.likes p span {
  font-weight: bold;
}
.users-own-comment {
  display: block;
  text-align: left;
  font-size: 15px;
  /* display: flex; */
}
.users-own-comment:hover {
  cursor: pointer;
}
.users-own-comment span {
  font-weight: bold;
}
.users-own-comment span:nth-child(2) {
  color: #dbdbdb;
  font-weight: lighter;
}
.view-all {
  color: #dbdbdb;
  text-align: left;
  margin-top: -15px;
  font-size: 15px;
}
.view-all:hover {
  cursor: pointer;
}
.fans {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.fans p {
  font-size: 15px;
  margin-top: -12px;
}
.fans span {
  font-weight: bold;
}
.fans button {
  border: none;
  outline: none;
  background: transparent;
}
.time p {
  text-transform: capitalize;
  color: #dbdbdb;
  font-size: 10px;
  text-align: left;
  margin-top: -10px;
}

.fans-comment-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #dbdbdb;
}
.text-smiley {
  margin: 20px 0;
}
.text-smiley i {
  margin-right: 10px;
  font-size: 25px;
  /* font-size: 30px; */
  margin-top: auto;
  margin-bottom: auto;

  /* padding-top: 5px; */
}
.text-smiley input {
  border: none;
  outline: none;
  background: transparent;
  margin-top: -50px;
  margin-top: auto;
  margin-bottom: auto;
}
.fans-comment-box p {
  color: #c2e6fd;
  margin-top: auto;
  margin-bottom: auto;
}
.fans-comment-box p:hover {
  cursor: pointer;
}
.postMsg {
  /* color: blue; */
  color: red;
}
@media screen and (max-width: 450px) {
  .sub{
    display: none;
  }
  .posts {
    width: 100%;
  }
  .post {
    border: none;
  }
  .post .header {
    background: #fafafa;
  }
  .post .header .user-details h5 {
    margin-left: -10px;
  }

  .post .header .user-details img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(to right, #ff105f, #ffad06);
    /* margin: 0 12px; */
    padding: 2px;
  }
}
@media screen and (max-width: 850px) {
  .home{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .main{
    width: 100%;
  }
  .sub{
    display: none;
  }
}
</style>


<!--
<div class="post">
        <div class="header">
          <div class="user-details">
            <img src="@/assets/images/user1.png" alt="" />
            <h5>userone</h5>
          </div>
          <i class="fa fa-list"></i>
        </div>
        <img src="@/assets/images/dubai.jpg" alt="" />
        <div class="footer">
          <div class="btns">
            <div class="interact">
              <i class="fa fa-heart" :class="liked" @click="post.likes ++ "></i>
              <i class="fa fa-comment"></i>
              <i class="fa fa-paper-plane"></i>
            </div>
            <i class="fa fa-bookmark"></i>
          </div>
          <div class="comments">
            <div class="likes">
              <img src="@/assets/images/user3.png" alt="" />
              <p>Liked by <span> user5 </span> and <span> 123 others</span></p>
            </div>

            <p class="users-own-comment">
              <span>userone</span> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Corporis inventore architecto unde, doloremque
              iusto officia nulla commodi distinctio, accusamus vel dolorem
              recusandae fuga vero, minus odio? Rem, officiis rerum! Placeat.
            </p>
            <p class="view-all">View all 217 comments</p>
            <div class="commenters">
              <div class="fans">
                <p><span>user10</span> Great work</p>
                <i class="fa fa-heart"></i>
              </div>
              <div class="fans">
                <p><span>usertwenty</span> Keep it up</p>
                <i class="fa fa-heart"></i>
              </div>
            </div>
          </div>
          <div class="time">
            <p>8 HOURS AGO</p>
          </div>

          <hr>
          <div class="fans-comment-box">
            <div class="text-smiley">
              <i class="fa fa-user"></i>
              <input type="text" v-model="comment" placeholder="Add a comment..." >
            </div>
            <p @click="pushComment()">Post</p>
          </div>
        </div>

        -->