<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>



<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style>
* {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  overflow-x: hidden;
}

.theme--light.v-application {
  background-color: #FAFAFA !important;
}
a {
  text-decoration: none;
}
a span {
  text-transform: initial;
}

</style>