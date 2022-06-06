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
        likes: 5678,
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
        likes: 5987,
        comments: 423,
      },
      {
        id: 8,
        image: require("@/assets/images/london.jpg"),
        likes: 6489,
        comments: 723,
      },
      {
        id: 9,
        image: require("@/assets/images/ironMan.jpg"),
        likes: 8567,
        comments: 823,
      },
      {
        id: 10,
        image: require("@/assets/images/maldives.jpg"),
        likes: 5867,
        comments: 203,
      },
      {
        id: 11,
        image: require("@/assets/images/thor.jpg"),
        likes: 5367,
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
        likes: 7567,
        comments: 2783,
      },
      {
        id: 14,
        image: require("@/assets/images/maimi.jpg"),
        likes: 6567,
        comments: 278,
      },
      {
        id: 15,
        image: require("@/assets/images/superman.jpg"),
        likes: 6887,
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
  margin-inline: auto;
}
.explore {
  margin-bottom: 50px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.items {
  position: relative;
  transition: 0.5s ease-in-out;
  width: 324px;
  height: 324px;
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
  display: flex;
}

.likes {
  display: none;
  width: 155px;
  height: 44px;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -22px;
  margin-left: -77.5px;
  color: #fff;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .main {
    width: 100%;
    margin: auto;
  }

  .explore {
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-content: center;
    gap: 20px;
  }

  .items {
    margin: 10px auto;
  }
}

@media screen and (max-width: 450px) {
  .main {
    width: 100%;
    margin: auto;
  }
  .explore {
    /* display: grid;
    grid-template-columns: repeat(3, auto);
    place-content: center;
    gap: 2px; */
  }
  .items {
    width: 100px;
    height: 100px;
  }
  /* .items:nth-child(3),
  .items:nth-child(5) {
    width: 100px;
    height: 200px;
  } */
  img {
    width: 100px;
    height: 100px;
  }

  .items:hover .likes {
    display: grid;
  }
  .likes {
    display: none;
    width: 100px;
    height: 44px;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -22px;
    margin-left: -35px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
