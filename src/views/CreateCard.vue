<template>
  <div class="create_card">
    <Stepper />

    <CreateCardStep1 v-if="step == 1" />
    <CreateCardStep2 v-if="step == 2" />
    <CreateCardStep3 v-if="step == 3" />

    <Footer />
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import Footer from "../components/Footer.vue";
import CreateCardStep1 from "../components/CreateCardStep1.vue";
import CreateCardStep2 from "../components/CreateCardStep2.vue";
import CreateCardStep3 from "../components/CreateCardStep3.vue";

export default {
  data: () => ({
    step: 1,
  }),
  mounted(){
      this.step = this.$store.getters.getStep;
  },
  components: {
    Stepper,
    Footer,
    CreateCardStep1,
    CreateCardStep2,
    CreateCardStep3,
  },
};
</script>

<style>
#aa {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
}
</style>