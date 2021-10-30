<template>
  <div class="create_card_content_wrapper">
    <div class="create_card_content">
      <h1>Renseignez la carte</h1>
      <UploadFileInput />
      <div class="inputs_fields">
        <label for="" class="label_input">Donnez un nom à votre carte</label>
        <v-text-field
          label="Nom"
          name="aa"
          class="text-field"
          solo
        ></v-text-field>

        <label for="" class="label_input"
          >Ajoutez des étiquettes d'équipe</label
        >
        <div class="row filter_row">
          <div class="filter_wrapper">
            <v-select
              :items="filters"
              chips
              multiple
              label="Filtres"
              prepend-icon="mdi-account"
              solo
            >
              <template slot="selection" slot-scope="{ item }">
                <span
                  v-if="item.name == 'Logistique'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Production'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Qualité'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Maintenance'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
              </template>

              <template slot="item" slot-scope="{ item }">
                <span
                  v-if="item.name == 'Logistique'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Production'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Qualité'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
                <span
                  v-if="item.name == 'Maintenance'"
                  class="filter_item"
                  :style="'background: ' + item.color"
                  >{{ item.name }}</span
                >
              </template>
            </v-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import UploadFileInput from "./UploadFileInput.vue";
export default {
  data: () => ({
    filters: [
      { name: "Logistique", color: "#00B9DE" },
      { name: "Production", color: "#FF878A" },
      { name: "Qualité", color: "#5BE471" },
      { name: "Maintenance", color: "#FFA862" },
    ],
  }),
  components: { UploadFileInput },
};
</script>

<style>
.create_card_content_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}
.create_card_content {
  width: 80%;
}

/* Inputs */
.upload_file .v-input {
  margin-top: 5px;
}
.text-field * {
  box-shadow: none !important;
}
.v-input__slot {
  background-color: #eeeeee !important;
}

.v-list-item__content {
  background-color: rgb(233, 29, 124);
  color: #fff;
  border-radius: 30px;
  padding-left: 20px;
}

.v-list-item--link:before {
  border-radius: 30px;
  background-color: #fff;
}

.inputs_fields {
  width: 100%;
}

.inputs_fields .filter_row {
  min-width: auto;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  display: none;
}

.filter_item {
  padding: 4px 19px;
  border-radius: 32px;
  color: #fff;
  font-size: .9rem;
}

.v-sheet.v-list:not(.v-sheet--outlined) {
  margin-top: 50px !important;
}


</style>