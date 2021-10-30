<template>
  <div class="create_card">
    <Stepper />
    <transition name="fade">
      <CreateCardStep1 v-if="currentStep == 1" />
    </transition>
    <transition name="fade">
      <CreateCardStep2 v-if="currentStep == 2" />
    </transition>
    <transition name="fade">
      <CreateCardStep3 v-if="currentStep == 3" />
    </transition>

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
  mounted() {
    this.step = this.$store.getters.getStep;
  },
  computed: {
    currentStep() {
      return this.$store.state.step;
    },
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


.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>