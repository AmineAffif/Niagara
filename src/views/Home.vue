

<template>
  <div class="home">
    <div class="row title_row">
      <h1>Bienvenue</h1>
    </div>
    <div class="row filter_row">
      <div class="filter_wrapper">
        <v-select :items="filters" label="Filtres" solo />
      </div>
    </div>
    <div class="row add_card">
      <router-link to="/createCard" custom>
        <v-btn color="accent" elevation="2" id="add_card_btn" rounded
          ><v-icon>mdi-plus</v-icon>Ajouter une carte</v-btn
        >
      </router-link>
    </div>
    <div class="row card_list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>


<script>
import Card from "../components/Card.vue";
export default {
  data: () => ({
    filters: ["Logistique", "Production", "Qualité", "Maintenance"],
  }),
  components: { Card },
};
</script>



<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
}

.row {
  width: 85%;
  margin: 0;
}

.title_row h1 {
  font-size: 2.5rem;
  line-height: 2.5rem !important;
}

.filter_row {
  margin-bottom: -30px !important;
}

.card_list {
  margin-top: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

.filter_wrapper {
  width: 150px;
  margin-top: 26px;
}

#add_card_btn {
  text-transform: initial;
  background: linear-gradient(
    180deg,
    rgba(72, 216, 251, 1) 0%,
    rgba(0, 131, 255, 1) 100%
  ) !important;
}

.add_card {
  display: flex;
  justify-content: flex-end;
}
</style>