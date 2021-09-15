<template>
  <div class="navbar">
    <div class="nav-content">
      <!-- <h3>Instagram</h3> -->
      <img src="@/assets/images/ig2.png" alt="" />
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="search" placeholder="Search" />
      </div>
      <div class="icons">
        <router-link to="/">
          <i class="fa fa-home"></i>
        </router-link>
        <router-link to="/direct/inbox"
          ><i class="fa fa-paper-plane-o"> </i>
        </router-link>
        <router-link to="/explore">
          <i class="fa fa-compass"></i>
        </router-link>
        <i id="heart" class="fa fa-heart-o"></i>
        <img src="@/assets/images/user1.png" alt="" />
      </div>
    </div>
    <!-- template for the modal component -->
    <!-- <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition> -->

    <!-- app -->
    <!-- <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      // use the modal component, pass in the prop
      <modal v-if="showModal" @close="showModal = false">
        
      //  you can use custom content here to overwrite
      default content
   
        <template v-slot:header>
          <h3>custom header</h3>
        </template>
      </modal>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showModal = ref(false);

    return { showModal };
  },
};
</script>

<style scoped>
.navbar {
  /* position: fixed; */
  border: 1px solid #dbdbdb;
  background: #ffff;
  height: 55px;
  display: flex;
  justify-content: center;
}
/* .nav-content {
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  background: #ffff;
  hash height: 50px;
  margin-left: auto;
  margin-right: auto;
} */
.nav-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 71%;
  height: 50px;
  margin-top: -5px;
  /* margin-top: 35px; */
  /* margin-left: auto;
  margin-right: auto; */
}
.nav-content img {
  margin-top: 10px;
  /* width: 70px; */
  height: 35px;
  object-fit: cover;
}
.search {
  position: relative;
}
.search i {
  position: absolute;
  margin-left: 63px;
  margin-top: 15px;
  color: #dbdbdb;
  font-size: 14px;
}
.search input[type="text"] {
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-style: solid;
  /* border-radius: 20px; */
  height: 25px;
  width: 200px;
  /* width: 95%; */
  text-align: start;
  margin-top: 10px;
  padding-left: 35px;
}

.search input[type="text"]::placeholder {
  padding-left: 45px;
  color: #b7b7b7;
  font-size: 14px;
}
.search input:focus {
  outline: none;
  padding-left: 15px;
  /* border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-top: 30px; */
}
.icons {
  margin-right: 98px;
  /* margin-top: 10px; */
  margin-top: auto;
  margin-bottom: auto;
}
.icons a i {
  margin: 0 12px;
  font-size: 22px;
}
.icons a i:hover {
  cursor: pointer;
}
#heart {
  font-size: 22px;
  margin-left: 5px;
}
.icons img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: 10px;
}
@media screen and (max-width: 450px) {
  .navbar {
    /* position: fixed; */
    border: 1px solid #dbdbdb;
    background: #ffff;
    height: 55px;
    display: flex;
    justify-content: left;
  }
  .nav-content {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    background: #fff;
    width: 100%;
    padding-top: 0px;
  }
  .nav-content img {
    /* display: none; */
    margin-top: 5px;
    margin-left: -20px;
    height: 35px;
    object-fit: cover;
  }
  .search {
    display: none;
  }
  .icons {
    display: flex;
    margin-right: -10px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .icons a i {
    font-size: 25px;
  }

  .icons img {
    width: 30px;
    height: 30px;
    display: block;
    margin-top: -5px;
    margin-left: 5px;
  }
}
@media screen and (max-width: 850px) {
  .navbar {
    /* position: fixed; */
    border: 1px solid #dbdbdb;
    background: #ffff;
    height: 55px;
    display: flex;
    justify-content: left;
  }
  .nav-content {
    display: flex;
    /* justify-content: left; */
    justify-content: space-between;
    flex-wrap: wrap;
    background: #fff;
    width: 100%;
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
  /* .nav-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: #fff;
    width: 100%;
    padding-top: 5px;
  } */
  
  .search input[type="text"] {
    height: 25px;
  }
  .search i {
    /* margin-top: 4px; */
  }

  .nav-content img {
    /* display: none; */
    margin-top: 7px;
    /* margin-left: -20px; */
    margin-left: 5px;
    height: 35px;
    object-fit: cover;
  }
  
  .icons {
    display: flex;
    margin-right: -10px;
    margin-top: 10px;
    margin-bottom: auto;
  }

  .icons img {
    margin-top: -5px;
    margin-left: 10px;
  }
}
</style>