<template>
  <div>
    <div class="one d-flex align-end justify-center">
      <p
        class="headline white--text text-center mb-12"
        data-aos="fade-up"
        data-aos-offset="111"
        data-aos-delay="50"
      >
        My kingdom is not of this world.
        <br />If it were, my servants would fight to prevent my arrest by the Jews.
        <br />But now my kingdom is from another place.
      </p>
    </div>
    <v-card height="60vh">
      <v-row>
        <v-col cols="12" md="6" class="pa-12 secondary">
          <div data-aos="slide-right" data-aos-offset="200" data-aos-delay="50">
            <div class="display-1">Read the holy bible</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, recusandae necessitatibus? Sit reiciendis nam iste deserunt incidunt odio maxime veritatis dolorem optio omnis?</p>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="two"></v-col>
      </v-row>
    </v-card>
    <facts></facts>
    <div class="four d-flex justify-center align-center">
      <div
        class="title white--text"
        data-aos="zoom-in"
        data-aos-delay="111"
        data-aos-easing="ease-out-sine"
      >
        <v-btn to="/bible" x-large class="warning">Go to Bible</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import facts from "~/components/factBox";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
export default {
  components: {
    facts
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style lang="scss">
.one {
  height: 80vh;
  background-image: url("../static/images/135958.jpg");
  background-position: top center;
  background-size: cover;
}
.two {
  height: 60vh;
  background-image: url("../static/images/1112052.jpg");
  background-size: cover;
  background-position: top right;
}

.four {
  height: 80vh;
  background-image: url("../static/images/wp4444650.jpg");
  background-position: bottom center;
  background-size: cover;
}
</style>