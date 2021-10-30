<template>
  <div class="card">
    <h1>Carte de production du lot pomme</h1>
    <p class="card_category production">Production</p>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 15px;
    filter: drop-shadow(0 0 0.75rem rgba(0,0,0,.03));
    width: 100%;
  }
  .card h1 {
    font-size: 1.5rem;
  }
  .production {
    background-color: #FF4381;
    color: #fff;
    border-radius: 30px;
    padding: 6px 20px;
    font-size: .9rem;
    margin: 0 !important;
  }

</style>