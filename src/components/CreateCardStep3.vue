<template>
  <div class="create_card_content_wrapper">
    <div class="create_card_content">
      <h1>Sélectionnez le format d'entrée</h1>
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
              <v-icon v-if="item == 'Manuel'">mdi-plus</v-icon>
              <div class="trigger_single">
                {{ item == "Manuel" ? item : "" }}
              </div>
              <v-icon v-if="item == 'Action prédéfinie'"
                >mdi-circle-multiple-outline</v-icon
              >
              <div class="trigger_single">
                {{ item == "Action prédéfinie" ? item : "" }}
              </div>
              <v-icon v-if="item == 'Calendaire'"
                >mdi-calendar-blank-outline</v-icon
              >
              <div class="trigger_single">
                {{ item == "Calendaire" ? item : "" }}
              </div>
            </template>

            <template slot="item" slot-scope="{ item }">
              <v-icon v-if="item == 'Manuel'">mdi-plus</v-icon>
              <div class="trigger_single">
                {{ item == "Manuel" ? item : "" }}
              </div>
              <v-icon v-if="item == 'Action prédéfinie'"
                >mdi-circle-multiple-outline</v-icon
              >
              <div class="trigger_single">
                {{ item == "Action prédéfinie" ? item : "" }}
              </div>
              <v-icon v-if="item == 'Calendaire'"
                >mdi-calendar-blank-outline</v-icon
              >
              <div class="trigger_single">
                {{ item == "Calendaire" ? item : "" }}
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
  margin-left: 5px;
  margin-top: 1px;
  display: flex;
  justify-content: flex-start;
}
.row {
  margin: 0 !important;
}

.create_card_content .v-input {
  margin-top: 5px;
}
</style>