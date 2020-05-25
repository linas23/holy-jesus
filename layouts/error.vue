<template>
  <v-app>
    <v-card height="100vh" flat class="d-flex flex-column justify-center align-center">
      <v-icon size="222" color="red" class="jesus">mdi-christianity</v-icon>
      <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <NuxtLink to="/">Get to home</NuxtLink>
    </v-card>
  </v-app>
</template>

<script>
export default {
  layout: "error-layout",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "Dear child, 404 Not Found",
      otherError: "Dear child,An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.jesus {
  animation: bounce 2s infinite ease-in-out alternate;
  text-shadow: 0px 2px 10px black;
}

@keyframes bounce {
  from {
    transform: translateY(23px) rotateY(90deg);
  }
  to {
    transform: translateY(0px) rotateY(-90deg);
  }
}
</style>
