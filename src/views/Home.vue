

<template>
  <div class="home">
    <div class="row title_row">
      <h1>Bienvenue</h1>
    </div>
    <div class="row filter_row">
      <div class="filter_wrapper">
        <v-select
          :items="filters"
          label="Filtres"
          solo
          @change="onChangeFilter($event)"
        >
          <template slot="selection" slot-scope="{ item }">
            <span
              v-if="item.name == 'Logistique'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Production'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Qualité'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Maintenance'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
          </template>

          <template slot="item" slot-scope="{ item }">
            <span
              v-if="item.name == 'Logistique'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Production'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Qualité'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
            <span
              v-if="item.name == 'Maintenance'"
              class="filter_item"
              :style="'background: ' + item.color"
              :value="item.name"
              >{{ item.name }}</span
            >
          </template>
        </v-select>
      </div>
    </div>
    <div class="row add_card">
      <router-link to="/createCard" custom>
        <v-btn color="accent" elevation="2" id="add_card_btn" rounded
          ><v-icon>mdi-plus</v-icon>Ajouter une carte</v-btn
        >
      </router-link>
    </div>
    <!-- <div v-if="filteredCards" class="row card_list">
      <div v-for="(userCard, index) in getUserCards" :key="index">
        <Card v-bind:userCard="userCard" />
      </div>
    </div> -->
    <div class="row card_list">
      <div v-for="(filteredCard, index) in filteredCards" :key="index">
        <Card v-bind:filteredCard="filteredCard" />
        <!-- <h1> {{ filteredCard.cardName }} </h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  data: () => ({
    filters: [
      { name: "Logistique", color: "#00B9DE" },
      { name: "Production", color: "#FF878A" },
      { name: "Qualité", color: "#5BE471" },
      { name: "Maintenance", color: "#FFA862" },
    ],
    filteredCards: null,
  }),
  methods: {
    onChangeFilter(event, userCards = this.$store.state.userCards) {
      this.filteredCards = [];

      userCards.forEach((userCard) => {
        userCard.teamNames.forEach((teamName) => {
          if (teamName == event.name) {
            this.filteredCards.push(userCard);
          }
        });
      });
    },
  },
  computed: {
    userCards() {
      return this.$store.userCards;
    },
    getUserCards() {
      return this.$store.state.userCards;
    },
  },
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
  width: 180px;
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

.filter_item {
  padding: 4px 19px;
  border-radius: 32px;
  color: #fff;
  font-size: 0.9rem;
}
</style>