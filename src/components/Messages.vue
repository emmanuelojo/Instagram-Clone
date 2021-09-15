<template>
  <div class="main">
    <div class="senders-list">
      <div class="user">
        <p>userone <i class="fa fa-chevron-down"></i></p>
        <i class="fa fa-edit"></i>
      </div>
      <div class="senders">
        <div class="sender" v-for="sender in senders" :key="sender">
          <div @click="activeMsg = 'Msg 2'" >
            <img :src="sender.image" alt="" />
            <div class="details">
              <h5 @click="isClicked">{{ sender.name }}</h5>
              <p>{{ sender.updatedAt }}</p>
            </div>
          </div>
          <div class="msg-holder">
            <!-- <Chatbox :friend="sender" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="chat-box">
      
      <div class="msg-holder">
        <EmptyChatBox v-if="activeMsg === 'Msg 1'" class="extChat" />
        <ChatBox2 :friend="friend" v-if="activeMsg === 'Msg 2'" class="extChat" />
      </div>
      <!-- <div v-once>
         <h3>Your messages</h3>
        <p>Send private photos and messages to a friend or group.</p>
        <button class="btn btn-primary">Send message</button>
        <ChatBox  class="msgs"/>
      </div> -->

      <!-- <div v-if="readMsg"> -->
      <!-- <div class="msg-header">
          <div class="sender">
            <img :src="sender.image" alt="">
            <div class="sender-details">
              <h4> {{ sender.name }} </h4>
              <p> {{ sender.updatedAt }} </p>
            </div>
          </div>
          <i class="fa fa-info"></i>
        </div> -->
      <!-- <div class="msg-holder">
          <ChatBox />
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import EmptyChatBox from "@/components/EmptyChatBox.vue";
import ChatBox2 from "@/components/ChatBox2.vue";

export default {
  components: { EmptyChatBox, ChatBox2 },
  setup() {
    const activeMsg = ref("Msg 1");
    const friend = ref('sendersFriend')
    // const tabsMsg = ref([

    // ])
    const senders = ref([
      {
        name: "usertwo",
        image: require("@/assets/images/user1.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        updatedAt: "Active yesterday",
        readMsg: false,
      },
    ]);

    const isClicked = (sender) => {
      console.log((sender.readMsg = !sender.readMsg));
      return (sender.readMsg = !sender.readMsg);
    };

    return { activeMsg, friend, senders, isClicked };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  height: 80vh;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dbdbdb;
  overflow: hidden;
}
.senders-list {
  width: 30%;
}
.user {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 56px;
  border: 1px solid #dbdbdb;
  margin-top: auto;
  margin-bottom: auto;
}
.user p {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 100px;
  padding: 10px 0;
}
.user p i {
  font-size: 17px;
  font-weight: lighter;
}
.user i {
  font-size: 25px;
  margin-top: auto;
  margin-bottom: auto;
}

.senders {
  display: grid;
  height: 80vh;
  overflow-y: scroll;
}

.senders .sender div {
  display: flex;
  /* justify-content: flex-start;
  flex-wrap: wrap; */
  margin-top: 15px;
  margin-left: 10px;
}

.senders .sender div:hover {
  cursor: pointer;
}
.senders .sender div img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 15px;
}
.senders .sender div .details {
  display: grid;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
}
.senders .sender div .details h5 {
  font-size: 18px;
  margin-top: 0px;
}
.senders .sender div .details p {
  color: #dbdbdb;
  font-size: 12px;
  margin-top: -25px;
}
.chat-box {
  width: 70%;
  text-align: left;
}
.msg-holder {
  text-align: left;
}
.msgs {
  width: 50%;
  height: 50vh;
}
.extChat{
  /* width: 300px; */
  width: 100%;
  border: 1px solid #dbdbdb;
  margin-top: 0px;
}
</style>

