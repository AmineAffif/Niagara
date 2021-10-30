<template>
  <div class="card">
    <h1>{{ filteredCard.cardName }}</h1>
    <div class="team_wrapper">
      <div v-for="(teamName, index) in filteredCard.teamNames" :key="index">
        <p v-if="teamName == 'Logistique'" style="background: #00B9DE" class="card_category team">{{ teamName }}</p>
        <p v-if="teamName == 'Production'" style="background: #FF878A" class="card_category team">{{ teamName }}</p>
        <p v-if="teamName == 'Qualité'" style="background: #5BE471" class="card_category team">{{ teamName }}</p>
        <p v-if="teamName == 'Maintenance'" style="background: #FFA862" class="card_category team">{{ teamName }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["filteredCard"],
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
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.03));
  width: 84vw;
}
.card h1 {
  font-size: 1.5rem;
}
.team {
  background-color: #ff4381;
  color: #fff;
  border-radius: 30px;
  padding: 6px 20px;
  font-size: 0.9rem;
  margin: 0 6px !important;
  text-shadow: 0px 1px 4px rgba(0,0,0,0.65);
}
.team_wrapper{
  display: flex;
  justify-content: flex-end;
}
</style>