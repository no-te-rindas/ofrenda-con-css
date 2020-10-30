<template>
  <v-container>
    <v-row :align="align" no-gutters style="height: 100px">
      <v-col v-for="x in 11" :key="x"><br><br>
        <div class="img-contain-two">
          <div class="overlay-two"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up2.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <v-col v-for="n in 11" :key="n"><br>
        <div class="img-contain">
          <div class="overlay"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <div></div>
      <v-col v-for="x in 11" :key="x"><br>
        <div class="img-contain-two">
          <div class="overlay-two"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up2.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <v-col v-for="x in 6" :key="x"><br><br>
        <div class="img-contain">
          <div class="overlay"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <v-col class="trucazo">
        <div>
          <span>Trucazos</span>
        <br>
        <p class="mas-alla">del más allá</p><br><br>
        </div>
      </v-col>
      <v-col v-for="x in 9" :key="x"><br><br>
        <div class="img-contain-two">
          <div class="overlay-two"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up2.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <v-col v-for="x in 1" :key="x"><br><br>
        <div class="img-contain">
          <div class="overlay"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/skull-1.svg" width="98" />
          </transition>
        </div>
      </v-col>
      <v-col v-for="x in 2" :key="x"><br><br>
        <div class="img-contain-two">
          <div class="overlay-two"></div>
          <transition name="flip">
            <slot v-if="isShowing"></slot>
            <v-img v-else src="../assets/up2.svg" width="98" />
          </transition>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.back {
  background-color: #361154;
}
.img-contain:hover .overlay {
  background-image: url("../assets/down2.svg");
  opacity: 1;
  transition: 0.3s opacity ease-out;
}
.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  width: 250px;
  height: 200px;
  margin: 3px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}

.img-contain-two:hover .overlay-two {
  background-image: url("../assets/down.svg");
  opacity: 1;
  transition: 0.3s opacity ease-out;
}
.img-contain-two .overlay-two {
  position: absolute;
  z-index: 1000;
  width: 250px;
  height: 200px;
  margin: 3px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}
.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
.trucazo {
  /* Trucazos */

background: #361154;
position: static;
width: 364px;
height: 97px;
left: 0px;
top: 0px;

font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 80px;
line-height: 97px;
/* identical to box height */


color: #FFB000;


/* Inside Auto Layout */

flex: none;
order: 0;
align-self: flex-start;
flex-grow: 0;
margin: 0px 0px;
}

.mas-alla {
  /* del más allá */


position: static;
width: 459px;
height: 97px;
left: 0px;
top: 97px;

font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 80px;
line-height: 97px;
/* identical to box height */


color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin: 0px 0px;
}
</style>
<script>
export default {
  name: "OfrendaCSS",
  props: ["isShowing"],
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
  data: () => ({
    //
    isShowing: false,
  }),
};
</script>
