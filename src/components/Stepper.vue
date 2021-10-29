<template>
  <div class="stepper">
    <!-- Step 1 -->
    <div v-if="step == 1" class="stepper_content">
      <div class="step active_step">
        <p class="step_num">1</p>
        <p>Étape 1</p>
      </div>

      <div class="line_separator"></div>

      <div class="step">
        <p class="step_num">2</p>
        <p>Étape 2</p>
      </div>

      <div class="line_separator"></div>

      <div class="step">
        <p class="step_num">3</p>
        <p>Étape 3</p>
      </div>
    </div>

    <!-- Step 2 -->
    <div v-if="step == 2" class="stepper_content">
      <div class="step active_step">
        <p class="step_num">1</p>
        <p>Étape 1</p>
      </div>

      <div class="line_separator active_separator"></div>

      <div class="step active_step">
        <p class="step_num">2</p>
        <p>Étape 2</p>
      </div>

      <div class="line_separator"></div>

      <div class="step">
        <p class="step_num">3</p>
        <p>Étape 3</p>
      </div>
    </div>

    <!-- Step 3 -->
    <div v-if="step == 3" class="stepper_content">
      <div class="step active_step">
        <p class="step_num">1</p>
        <p>Étape 1</p>
      </div>

      <div class="line_separator active_separator"></div>

      <div class="step active_step">
        <p class="step_num">2</p>
        <p>Étape 2</p>
      </div>

      <div class="line_separator active_separator"></div>

      <div class="step active_step">
        <p class="step_num">3</p>
        <p>Étape 3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  data: () => ({
    step: 1,
  }),
  mounted() {
    this.step = this.$store.getters.getStep;
  },
};
</script>

<style>
.stepper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 20px 0;
  box-shadow: 0px 5px 0.75rem rgba(0, 0, 0, 0.08);
}
.stepper_content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.step {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step p {
  margin: 4px 0;
  color: #e0e0e0;
}
.line_separator {
  height: 3px;
  width: 120px;
  background: #e0e0e0;
  transform: translateY(-15px);
  margin: 0 10px;
}
.step_num {
  width: 50px !important;
  height: 50px !important;
  border: #e0e0e0 3px solid;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #e0e0e0;
}

.active_step p:nth-child(1) {
  color: #0083ff;
  border: #0083ff 3px solid;
}
.active_step p:nth-child(2) {
  color: #0083ff;
}
.active_separator {
  background-color: #0083ff;
}
</style>