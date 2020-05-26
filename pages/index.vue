<template>
  <div>
    <div class="one d-flex align-end justify-center">
      <div class="text-center pb-5">
        <p
          class="headline white--text mb-12"
          data-aos="fade-up"
          data-aos-offset="111"
          data-aos-delay="50"
        >
          My kingdom is not of this world.
          <br />If it were, my servants would fight to prevent my arrest by the Jews.
          <br />But now my kingdom is from another place.
          <br />
        </p>
        <v-btn
          class="secondary"
          data-aos="slide-right"
          data-aos-offset="111"
          data-aos-delay="2222"
          to="/bible"
        >Let's get started</v-btn>
      </div>
    </div>
    <v-card height="60vh">
      <v-row align="center">
        <v-col cols="12" md="6" class="pa-12">
          <div
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="50"
            class="display-1 primary--text"
          >Read the holy bible</div>
          <p
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="1111"
            class="headline error--text"
          >“Brothers, right up to now I have always conducted myself before God with a clear conscience.”</p>
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