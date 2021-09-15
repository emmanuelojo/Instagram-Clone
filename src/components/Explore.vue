<template>
  <div class="main">
    <div class="explore">
      <div class="items" v-for="pic in pictures" :key="pic">
        <img ref="pic" :src="pic.image" alt="" />
        <div class="likes">
          <p><i class="fa fa-heart"></i> {{ pic.likes }}</p>
          <p><i class="fa fa-comment"></i> {{ pic.comments }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const pictures = ref([
      {
        id: 1,
        image: require("@/assets/images/blackPanther.jpg"),
        likes: 567,
        comments: 23,
      },
      {
        id: 2,
        image: require("@/assets/images/brazil.jpg"),
        likes: 1237,
        comments: 323,
      },
      {
        id: 3,
        image: require("@/assets/images/blackWidow.jpg"),
        likes: 56778,
        comments: 843,
      },
      {
        id: 4,
        image: require("@/assets/images/cyprus.jpg"),
        likes: 57,
        comments: 3,
      },
      {
        id: 5,
        image: require("@/assets/images/captainAmerica.jpg"),
        likes: 1567,
        comments: 83,
      },
      {
        id: 6,
        image: require("@/assets/images/dubai.jpg"),
        likes: 45567,
        comments: 723,
      },
      {
        id: 7,
        image: require("@/assets/images/captainMarvel.jpg"),
        likes: 59877,
        comments: 423,
      },
      {
        id: 8,
        image: require("@/assets/images/london.jpg"),
        likes: 64589,
        comments: 723,
      },
      {
        id: 9,
        image: require("@/assets/images/ironMan.jpg"),
        likes: 897567,
        comments: 823,
      },
      {
        id: 10,
        image: require("@/assets/images/maldives.jpg"),
        likes: 509867,
        comments: 203,
      },
      {
        id: 11,
        image: require("@/assets/images/thor.jpg"),
        likes: 512367,
        comments: 2983,
      },
      {
        id: 12,
        image: require("@/assets/images/singapore.jpg"),
        likes: 58967,
        comments: 523,
      },
      {
        id: 13,
        image: require("@/assets/images/wonderWoman.jpg"),
        likes: 67887567,
        comments: 2783,
      },
      {
        id: 14,
        image: require("@/assets/images/maimi.jpg"),
        likes: 6787567,
        comments: 278,
      },
      {
        id: 15,
        image: require("@/assets/images/superman.jpg"),
        likes: 67887,
        comments: 783,
      },
    ]);

    return { pictures };
  },
};
</script>

<style scoped>
.main {
  width: 80%;
  margin: auto;
}
.explore {
  margin-bottom: 50px;
}
.items {
  position: relative;
  display: inline-flex;
  justify-items: left;
  align-items: left;
  transition: 0.5s ease-in-out;
}
img {
  width: 300px;
  height: 300px;
  margin: 10px;
}
img:hover {
  cursor: pointer;
}
.items:hover {
  opacity: 0.8;
}
.items:hover .likes {
  position: absolute;
  display: flex;
  margin-top: 150px;
  margin-left: 80px;
  color: #fff;
  cursor: pointer;
  z-index: 11111;
  opacity: 1;
  /* transition: 1s ease-in-out; */
}

.likes {
  /* display: flex;
  visibility: hidden; */
  display: none;
}
.likes p {
  margin-left: 20px;
}
@media screen and (max-width: 450px) {
  .main {
    width: 100%;
    margin: auto;
  }
  .explore {
    columns: 3;
    column-gap: 2px;
    /* 
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto; */
  }
  .items {
    margin: -5px;
    position: inherit;
    display: inline-flex;
    justify-items: left;
    align-items: left;
    transition: 0.5s ease-in-out;
  }
  img {
    width: 150px;
    height: 150px;
    margin: 0;
  }
  .items:hover .likes {
    display: grid;
    margin-top: 50px;
    margin-left: 10px;
  }
}
</style>