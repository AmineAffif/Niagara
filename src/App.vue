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

.theme--light.v-application {
  background-color: #FAFAFA !important;
}
a {
  text-decoration: none;
}

</style>