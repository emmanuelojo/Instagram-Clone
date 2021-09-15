<template>
  <div class="main">
    <div class="icon-holder">
      <i class="fa fa-paper-plane"></i>
    </div>
    <h3>Your messages</h3>
    <p>Send private photos and messages to a friend or group.</p>
    <button class="btn btn-primary">Send message</button>
  </div>
</template>

<script>
export default {
  // props: ['friend']
};
</script>

<style scoped>
.main {
  display: grid;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.icon-holder{
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}
.icon-holder i {
  font-size: 70px;
}
h3 {
  display: flex;
}
</style>