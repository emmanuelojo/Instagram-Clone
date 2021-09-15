<template>
  <div class="main">
    <!-- <h2>Chat box 2</h2>
    <h3>Friend: {{ friend }}</h3>
    <div class="msg-header">
      <div class="sender">
        <img src="" alt="" />
        <div class="sender-details">
          <h4> sender.name </h4>
          <p> sender.updatedAt </p>
        </div>
      </div>
      <i class="fa fa-info"></i>
    </div> -->
    <div class="msg-header">
      <div class="sender">
        <img src="@/assets/images/user1.png" alt="" />
        <div class="sender-details">
          <h4>userone</h4>
          <p>Active yesterday</p>
        </div>
      </div>
      <i class="fa fa-info">io</i>
    </div>
    <div class="msg-holder">
      <div v-for="msg in msgs.slice(0, 1)" :key="msg.id">
        <p class="reply">{{ msg.reply }}</p>
      </div>
      <div class="msg-list" v-for="msg in messages.slice(0, 1)" :key="msg.id">
        <p class="msg">{{ msg.id }} {{ msg.text }}</p>
      </div>
      <div v-for="msg in msgs.slice(1, 2)" :key="msg.id">
        <p class="reply">{{ msg.reply }}</p>
      </div>
      <div class="msg-list" v-for="msg in messages.slice(1, 2)" :key="msg.id">
        <p class="msg">{{ msg.id }} {{ msg.text }}</p>
      </div>
      <div v-for="msg in msgs.slice(2)" :key="msg.id">
        <p class="reply">{{ msg.reply }}</p>
      </div>
      <div class="msg-list" v-for="msg in messages.slice(2)" :key="msg.id">
        <p class="msg">{{ msg.id }} {{ msg.text }}</p>
      </div>
      <div v-for="msg in newReply" :key="msg.id">
        <p class="reply">{{ msg.reply }}</p>
      </div>
      <!-- <div v-for="msg in msgs" :key="msg.id">
        <p class="text">{{ msg.text }}</p>
        <p class="reply">{{ msg.reply }}</p>
      </div> -->
    </div>

    <div class="input-box">
      <i class="fa fa-user">io</i>
      <input
        v-model="newMsg"
        @keydown.enter="addMsg"
        type="text"
        placeholder="Message..."
      />
      <i class="fa fa-picture">io</i>
      <i class="fa fa-heart">io</i>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from "vue";
export default {
  props: ["friend"],
  setup() {
    const messages = ref([
      {
        id: 1,
        text: "Lorem's first text",
        reply:
          "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 2,
        text: "Lorem's second text",
        reply:
          "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 3,
        text: "Lorem's third text",
        reply:
          "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 4,
        reply: "Lorem's third text",
        text: "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
    ]);
    const msgs = ref([
      {
        id: 1,
        text: "Lorem's first text",
        reply:
          "1 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 2,
        text: "Lorem's first text",
        reply:
          "2 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 3,
        text: "Lorem's first text",
        reply:
          "3 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 4,
        text: "Lorem's first text",
        reply:
          "4 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 5,
        text: "Lorem's first text",
        reply:
          "5 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 6,
        text: "Lorem's first text",
        reply:
          "6 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
    ]);

    const reply = ref([
      {
        id: 1,
        text: "New reply",
        reply:
          "New reply Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 2,
        text: "New reply",
        reply:
          "New reply 2 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
      {
        id: 2,
        text: "New reply",
        reply:
          "New reply 3 Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      },
    ]);

    const newReply = ref([]);
    const newMsg = ref("");

    const addMsg = () => {
      var form = {
        id: messages.value.length + 1,
        text: newMsg.value,
        reply:
          "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
        like: false,
      };

      messages.value.push(form);
      newMsg.value = "";

      // setTimeout(() => {
      //   var randReply = Math.floor(Math.random() * reply.value.length);
      //   var randomReply = reply.value[randReply];
      //   newReply.value.push(randomReply);
      //   // newReply.value.push(reply);
      // }, 5000);
    };

    const bottom = ref(null);
    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );

    // setInterval(() => {
    //   let form = ref({
    //     id: 1,
    //     text: "New reply",
    //     reply:
    //       "Lorem ipsum dolor sit delectus provident laudantium iure maiores!",
    //     like: false,
    //   });
    //   newReply.push(form.value);
    //   console.log(form);
    // }, 5000);

    return { messages, msgs, reply, newReply, newMsg, addMsg };
  },
};
</script>

<style scoped>
.main {
  display: grid;
  position: relative;
}
.msg-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 55px;
  border: 1px solid #dbdbdb;
}
.sender {
  display: flex;
  /* justify-content: space-between;
  flex-wrap: wrap; */
  margin-left: 20px;
}
.sender img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 7px;
  /* margin-top: auto;
  margin-bottom: auto; */
}
.sender-details {
  display: grid;
}
.sender-details h4 {
  margin-top: 12px;
  /* margin-top: 5px; */
}
.sender-details p {
  font-size: 11px;
  color: gray;
  /* margin-top: 0; */
  margin-top: -20px;
}
.msg-header i {
  margin-right: 20px;
  color: red;
}

.msg-holder {
  margin-top: -80px;
  height: 60vh;
  overflow-y: scroll;
  border: 1px solid red;
  /* flex-flow: row-reverse;
  flex-direction: row-reverse; */
}
.msg-list {
  /* overflow-y: scroll; */
}
.msg {
  text-align: left;
  background-color: #dbdbdb;
  padding: 10px 15px;
  border-radius: 20px;
  /* width: 50%; */
  margin-left: 41vw;
  margin-right: 10px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
}
.msg-list p:last-child() {
  /* margin-bottom: 100px; */
  margin-top: -50px;
}
.text {
  position: absolute;
  right: 0;
  text-align: right;
  background-color: #dbdbdb;
  padding: 10px 15px;
  border-radius: 20px;
  /* width: 50%; */
  margin-right: 5px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
}
/* .reply{
  margin-top: 50px;
  width: 40%;
} */
.reply {
  background-color: #dbdbdb;
  padding: 10px 15px;
  border-radius: 20px;
  margin-left: 5px;
  width: 40%;
}
.replys {
  /* position: absolute; */
  /* left: 0; */
  text-align: left;
  /* background-color: #dbdbdb; */
  padding: 10px 15px;
  border-radius: 20px;
  margin-left: 5px;
  margin-top: 50px;
}

.input-box {
  position: absolute;
  bottom: 15px;
  left: 15px;
  /* right: 5px; */
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  display: flex;
  width: 96%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  /* margin-left: 20px;
  margin-right: 20px;
  margin-bottom: -500px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  display: flex;
  width: 100%;
  height: 40px; */
}
.input-box i {
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 5px;
}
.input-box i:first-child {
  margin-left: 10px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
}
.input-box i:last-child {
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
}
input[type="text"] {
  border: none;
  outline: none;
  width: 85%;
  height: 30px;
  background: transparent;
  margin-top: auto;
  margin-bottom: auto;
}
</style>