<template>
  <div class="create_card">
    <Stepper />
    <div class="create_card_content_wrapper">
      <div class="create_card_content">
        <h1>Sélectionnez le format d'entrée</h1>
        <div class="radio_wrapper">
          <v-radio-group
            v-model="ex7"
            class="radio_group"
            id="radio_group_wrapper"
            column
          >
            <label class="radio_img">
              <img
                src="../assets/folder_icon.webp"
                class="radio_img_folder"
                alt="folder icon"
              />
              <input name="radio-group1" type="radio" value="file" />
              <p>Fichier</p>
            </label>
            <label class="radio_img">
              <img
                src="../assets/app_icon.webp"
                class="radio_img_folder"
                alt="app icon"
              />
              <input name="radio-group1" type="radio" value="app" />
              <p>Application</p>
            </label>
            <label class="radio_img">
              <img
                src="../assets/gear_icon.webp"
                class="radio_img_folder"
                alt="gear icon"
              />
              <input name="radio-group1" type="radio" value="api" />
              <p>API</p>
            </label>
          </v-radio-group>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Stepper, Footer },
};
</script>

<style>
.radio_group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.create_card_content_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.create_card_content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;
}
.create_card_content img {
  width: 120px;
}

.radio_wrapper {
  display: flex;
  width: 100%;
}
.radio_img {
  display: block;
  width: 200px;
  height: 200px;
  background-size: contain;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  position: relative;
  margin-right: 20px;
}
.radio_img p {
  font-size: 1.3rem;
  text-align: center;
  margin: 0;
}
img.radio_img_folder,
img.radio_img_app,
img.radio_img_gear {
  width: 150px;
  position: absolute;
  left: 23px;
}

#radio_group_wrapper {
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}


</style>