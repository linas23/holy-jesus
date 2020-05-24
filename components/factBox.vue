<template>
  <div class="three">
    <div class="text-center display-1 white--text pt-12">Facts about Christianity</div>
    <v-row class="pa-12">
      <v-col cols="12" md="6">
        <ul>
          <li>Christianity is the world’s largest religion</li>
          <li>There are three main branches of Christianity which are Catholicism, Orthodox, and Protestantism.</li>
          <li>Christianity has 10 commandments</li>
          <li>Easter is one of the main holidays</li>
          <li>There is no original Bible dating back to Jesus</li>
          <li>Approximately 100 million bibles are sold every year</li>
          <li>Jerusalem is the holiest city within Christian faith</li>
          <li>Christianity teaches about heaven and hell</li>
          <li>More than 70 million people have been killed for their Christian faith</li>
          <li>The Church murdered and persecuted godless and non-christian people during the holy inquisition</li>
          <li>There are 6 eternal sins which will not be forgiven by God. These eternal sins are Despair, Presumption, Envying the goodness of another, obstinacy in sin, Final impenitence, impugning the known truth</li>
        </ul>
      </v-col>
      <v-col cols="12" md="6">
        <ul style="text-align:right">
          <li>Most Christians are praying daily but it’s not mandatory</li>
          <li>You get baptized to get rid of your original sin</li>
          <li>God created the world in seven days</li>
          <li>Christians believe in one god, it’s a monotheistic religion</li>
          <li>Mary was the mother of Jesus</li>
          <li>Monks and Nuns are devoted followers of Christianity</li>
          <li>The Pope is the leader of the Catholic Church</li>
          <li>About 71 percent of Americans identify as Christian</li>
          <li>Exorcism is still performed by priests</li>
          <li>The Crusades were a series of wars against the Muslims in the 11th century until the 13th century</li>
          <li>Christianity was spread worldwide during the colonial period, sometimes by force</li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
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