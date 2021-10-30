<template>
  <div class="create_card_content_wrapper">
    <div class="create_card_content">
      <h1>Sélectionnez le déclencheur</h1>
      <label for="" class="label_input"
        >Choisissez le type de déclencheur pour mettre à jour les données</label
      >

      <div class="row filter_row">
        <div class="filter_wrapper">
          <v-select
            label="Type de déclencheur"
            v-model="name"
            :items="triggers"
            item-value="id"
            item-text="name"
            return-object
            solo
          >
            <template slot="selection" slot-scope="{ item }">
              <div v-if="item == 'Manuel'" class="trigger_single">
                <v-icon>mdi-plus</v-icon>
                {{ item }}
              </div>
              <div v-if="item == 'Action prédéfinie'" class="trigger_single">
                <v-icon>mdi-circle-multiple-outline</v-icon>
                {{ item }}
              </div>
              <div v-if="item == 'Calendaire'" class="trigger_single">
                <v-icon>mdi-calendar-blank-outline</v-icon>
                {{ item }}
              </div>
            </template>

            <template slot="item" slot-scope="{ item }">
              <div v-if="item == 'Manuel'" class="trigger_single">
                <v-icon>mdi-plus</v-icon>
                {{ item }}
              </div>
              <div v-if="item == 'Action prédéfinie'" class="trigger_single">
                <v-icon>mdi-circle-multiple-outline</v-icon>
                {{ item }}
              </div>
              <div v-if="item == 'Calendaire'" class="trigger_single">
                <v-icon>mdi-calendar-blank-outline</v-icon>
                {{ item }}
              </div>
            </template>
          </v-select>

          <label for="" class="label_input"
            >Choisissez la date de mise à jour attendue (pour envoyer une alerte
            en cas de non réalisation)</label
          >
          <v-row style="margin-top: 10px !important">
            <v-date-picker
              v-model="currentDate"
              :show-current="true"
              class="datePicker"
            ></v-date-picker>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    triggers: ["Manuel", "Action prédéfinie", "Calendaire"],
    names: [
      { id: 1, name: "Paul", age: 23 },
      { id: 2, name: "Marcelo", age: 15 },
      { id: 3, name: "Any", age: 30 },
    ],
    currentDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
};
</script>

<style>
.create_card_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
}
.create_card_content .label_input {
  margin-bottom: 5px;
}
.create_card_content h1 {
  margin: 20px 0;
}

.create_card_content .datePicker {
  border-radius: 20px !important;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
}

.trigger_single {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.trigger_single i {
  margin-right: 10px;
}
.row {
  margin: 0 !important;
}

.create_card_content .v-input {
  margin-top: 5px;
}
</style>