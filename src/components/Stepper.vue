<template>
  <div class="stepper">
    <div class="step active_step">
      <p class="step_num">1</p>
      <p>Étape 1</p>
    </div>

    <div class="line_separator"></div>

    
    <div class="step ">
      <p class="step_num">2</p>
      <p>Étape 2</p>
    </div>

    <div class="line_separator"></div>

    
    <div class="step">
      <p class="step_num">3</p>
      <p>Étape 3</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Stepper",
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
        box-shadow: 0px 5px 0.75rem rgba(0,0,0,.08);
    }
    .step {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .step p {
        margin: 4px 0;
        color: #E0E0E0;
    }
    .line_separator {
        height: 3px;
        width: 120px;
        background: #E0E0E0;
        transform: translateY(-15px);
        margin: 0 10px;
    }
    .step_num {
        width: 50px !important;
        height: 50px !important;
        border: #E0E0E0 3px solid;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.2rem;
        color: #E0E0E0;
    }

    .active_step p:nth-child(1) {
        color: #0083FF;
        border: #0083FF 3px solid;
    }
    .active_step p:nth-child(2) {
        color: #0083FF;
    }

</style>