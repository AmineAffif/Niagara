<template>
  <div class="footer">
    
    <!-- Step 1 -->
    <router-link v-if="currentStep == 1" to="/" exact custom>
      <v-btn id="prev_btn_home" elevation="2" rounded>
        <v-icon id="left_arrow_icon">mdi-arrow-left</v-icon>Accueil</v-btn
      >
    </router-link>
    <!-- Step 2 or more -->
    <router-link v-if="currentStep > 1" to="" exact custom>
      <v-btn
        @click="$store.commit('prevStep')"
        id="prev_btn"
        elevation="2"
        rounded
      >
        <v-icon id="left_arrow_icon">mdi-arrow-left</v-icon>Précedent</v-btn
      >
    </router-link>

    <router-link to="" id="next_btn_a" class="enabled_next_btn" custom>
      <v-btn
        @click="$store.commit('nextStep')"
        id="next_btn"
        elevation="2"
        rounded
        >Suivant</v-btn
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    step: 1,
  }),
  mounted() {
    this.step = this.$store.getters.getStep;
  },
  computed: {
    currentStep() {
      return this.$store.state.step;
    },
  },
};
</script>


<style>
.footer {
  background-color: #fff;
  padding: 47px 0;
  width: 100vw;
  box-shadow: 0px -5px 0.75rem rgba(0, 0, 0, 0.08);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

.footer a span {
  font-weight: 600;
  font-size: 0.9rem;
}
#prev_btn {
  background: #fff;
  border: #0083ff 1px solid;
  transition: all 200ms ease-in-out;
}
#prev_btn:hover {
  background: #0083ff;
  color: #fff;
}
#prev_btn #left_arrow_icon {
  margin-right: 5px;
}

#prev_btn_home {
  background: #fff;
  border: #0083ff 1px solid;
  transition: all 200ms ease-in-out;
}
#prev_btn_home:hover {
  background: #0083ff;
  color: #fff;
}
#prev_btn_home #left_arrow_icon {
  margin-right: 5px;
}

#next_btn {
  color: #fff;
  background: #bdbdbd;
}
#next_btn_a {
  cursor: not-allowed;
  pointer-events: none;
}
.footer a.enabled_next_btn {
  cursor: pointer !important;
  pointer-events: auto !important;
}

.footer a.enabled_next_btn #next_btn {
  background: #0083ff;
}
</style>