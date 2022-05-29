<template>
  <div class="hero">
    <div class="fleets">
      <div class="fleet" v-for="slide in slides" :key="slide.id">
        <img :src="slide.image" alt="" />
        <p>{{ slide.name }}</p>
      </div>
      <i class="fa fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Fleets",
  setup() {
    const slides = ref([
      {
        name: "userone",
        image: require("@/assets/images/user1.png"),
        id: 1,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 2,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 3,
      },
      {
        name: "userfour",
        image: require("@/assets/images/user1.png"),
        id: 4,
      },
      {
        name: "userfive",
        image: require("@/assets/images/user1.png"),
        id: 5,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 6,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 7,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 8,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 9,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 10,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 11,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 12,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 13,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 14,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 15,
      },
      {
        name: "usertwo",
        image: require("@/assets/images/user2.png"),
        id: 16,
      },
      {
        name: "userthree",
        image: require("@/assets/images/user3.png"),
        id: 17,
      },
    ]);

    return { slides };
  },
};
</script>

<style scoped>
.hero {
  overflow-x: hidden;
}
.fleets {
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background: #ffff;
  height: 100px;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
  transition: all 0.5s ease;
}
.fleets::-webkit-scrollbar {
  display: none;
}
.fleets i {
  position: absolute;
  right: 43%;
  top: 100px;
  color: #dbdbdb;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  padding: 5px 5px 5px 8px;
}
.fleets i:hover {
  cursor: pointer;
}
.fleet {
  display: grid;
  margin-top: 10px;
  margin-bottom: 0px;
}
.fleet:hover {
  cursor: pointer;
}
img {
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  margin: 0 10px;
  padding: 2px;
}
.fleet p {
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
}

@media screen and (max-width: 450px) {
  .fleets {
    width: 100%;
    margin-top: 2px;
    overflow-x: scroll;
  }
  .fleets i {
    display: none;
  }
  img {
    width: 55px;
    height: 55px;
    margin: 0 7px;
  }
  .fleet p {
    font-size: 13px;
  }
}
@media screen and (max-width: 850px) {
  .fleets i {
    right: 80px;
  }
}
</style>
