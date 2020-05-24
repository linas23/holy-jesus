<template>
  <div>
    <div class="one d-flex align-end justify-center">
      <p class="headline white--text text-center mb-12">
        My kingdom is not of this world.
        <br />If it were, my servants would fight to prevent my arrest by the Jews.
        <br />But now my kingdom is from another place.
      </p>
    </div>
    <v-card height="60vh">
      <v-row>
        <v-col cols="12" md="6" class="pa-12 secondary">
          <div class="display-1">Read the holy bible</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, recusandae necessitatibus? Sit reiciendis nam iste deserunt incidunt odio maxime veritatis dolorem optio omnis?</p>
        </v-col>
        <v-col cols="12" md="6" class="two"></v-col>
      </v-row>
    </v-card>
    <facts></facts>
    <div class="four d-flex justify-center align-center">
      <div
        class="title white--text"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta ad unde asperiores est officia, corporis eum maiores consequatur sint, eaque, nobis nihil?</div>
    </div>
  </div>
</template>

<script>
import facts from "~/components/factBox";
export default {
  components: {
    facts
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