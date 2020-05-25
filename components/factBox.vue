<template>
  <div class="three">
    <div class="text-center display-1 white--text pt-12">Facts about Christianity</div>
    <v-row class="pa-12">
      <v-col cols="12" md="6">
        <ul data-aos="slide-right">
          <li
            v-for="(text,index) in leftFacts"
            :key="index"
            v-html="text"
            data-aos="slide-right"
            data-aos-delay="1111"
          ></li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <ul style="text-align:right" data-aos="slide-left">
          <li
            v-for="(text,index) in rightFacts"
            :key="index"
            v-html="text"
            data-aos="slide-left"
            data-aos-delay="1111"
          ></li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      leftFacts: [
        "Christianity is the world’s largest religion",
        "There are three main branches of Christianity which are Catholicism, Orthodox, and Protestantism.",
        "Christianity has 10 commandments",
        "Easter is one of the main holidays</Christianity>",
        "There is no original Bible dating back to Jesus",
        "Approximately 100 million bibles are sold every year",
        "Jerusalem is the holiest city within Christian faith",
        "Christianity teaches about heaven and hell",
        "More than 70 million people have been killed for their Christian faith",
        "The Church murdered and persecuted godless and non-christian people during the holy inquisition",
        "There are 6 eternal sins which will not be forgiven by God. These eternal sins are Despair, Presumption, Envying the goodness of another, obstinacy in sin, Final impenitence, impugning the known truth"
      ],
      rightFacts: [
        "Most Christians are praying daily but it’s not mandatory",
        " You get baptized to get rid of your original sin",
        " God created the world in seven days",
        " Christians believe in one god, it’s a monotheistic religion",
        " Mary was the mother of Jesus",
        " Monks and Nuns are devoted followers of Christianity",
        " The Pope is the leader of the Catholic Church",
        " About 71 percent of Americans identify as Christian",
        " Exorcism is still performed by priests",
        " The Crusades were a series of wars against the Muslims in the 11th century until the 13th century",
        " Christianity was spread worldwide during the colonial period, sometimes by force"
      ]
    };
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style lang="scss">
.three {
  min-height: 100vh;
  background-image: url("../static/images/christ-crucified-cross_1048-1889.jpg");
  background-size: cover;
  filter: brightness(80%);
  z-index: -1;
}
ul {
  li {
    font-size: 18px;
    margin-bottom: 10px;
    color: white;
    list-style: none;
  }
}
</style>