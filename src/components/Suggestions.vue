<template>
  <div class="main">
    <div class="user">
      <span>
        <div v-if="switchUser" class="user-details">
          <img src="@/assets/images/user1.png" alt="" />
          <div class="username">
            <h5>_userone</h5>
            <p>User One</p>
          </div>
        </div>
        <div v-else class="user-details">
          <img src="@/assets/images/user2.png" alt="" />
          <div class="username">
            <h5>_usertwo</h5>
            <p>User Two</p>
          </div>
        </div>
      </span>

      <p class="switcher" @click="switchUser = !switchUser">Switch</p>
    </div>
    <div class="suggestions">
      <div class="header">
        <h4>Suggestions for you</h4>
        <p>See All</p>
      </div>
      <div class="sug-users">
        <div class="sug-user">
          <div class="user-info">
            <img src="@/assets/images/user1.png" alt="" />
            <div class="username">
              <h5>_userthree</h5>
              <p>Follows you</p>
            </div>
          </div>
          <p @click="user = !user">Follow</p>
        </div>
        <div class="sug-user">
          <div class="user-info">
            <img src="@/assets/images/user1.png" alt="" />
            <div class="username">
              <h5>_userthree</h5>
              <p>New to Instagram</p>
            </div>
          </div>
          <p @click="user = !user">Follow</p>
        </div>
        <div class="sug-user">
          <div class="user-info">
            <img src="@/assets/images/user1.png" alt="" />
            <div class="username">
              <h5>_userthree</h5>
              <p>Followed by usertwenty</p>
            </div>
          </div>
          <p @click="user = !user">Follow</p>
        </div>
        <div class="sug-user">
          <div class="user-info">
            <img src="@/assets/images/user1.png" alt="" />
            <div class="username">
              <h5>_userthree</h5>
              <p>Follows you</p>
            </div>
          </div>
          <p @click="user = !user">Follow</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const switchUser = ref(false);

    return { switchUser };
  },
};
</script>

<style scoped>
.main {
  display: grid;
}
.user {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.user .user-details {
  display: flex;
}
.user .user-details img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}
.username {
  display: grid;
}
.user .user-details .username h5 {
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
}
.user .user-details .username p {
  color: #dbdbdb;
  font-size: 12px;
  margin-top: -14px;
}
.user p {
  color: #4bb3f7;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
  font-size: 12px;
}
.switcher:hover {
  cursor: pointer;
}
.suggestions {
  margin-top: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.header h4 {
  color: #8e8e8e;
  font-size: 13px;
  font-weight: bold;
}
.header p {
  font-size: 12px;
  font-weight: bold;
}
.sug-users {
  display: grid;
}
.sug-users .sug-user {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 5px 0;
}
.sug-users .sug-user .user-info {
  display: flex;
}
.sug-users .sug-user .user-info img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
}
.sug-users .sug-user .user-info .username {
  display: grid;
}
.sug-users .sug-user .user-info .username h5 {
  font-size: 13px;
  text-align: left;
}
.sug-users .sug-user .user-info .username p {
  color: #a2a2a2;
  font-size: 12px;
  font-weight: lighter;
  margin-top: -5px;
  margin-left: 0;
  text-align: left;
}
.sug-users .sug-user p {
  color: #4bb3f7;
  font-size: 12px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
</style>
