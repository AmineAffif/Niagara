<template>
    <div class="create_card_content_wrapper">
      <div class="create_card_content">
        <h1>Sélectionnez le format d'entrée</h1>
        <div class="radio_wrapper">
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
        </div>
      </div>
      
      
    </div>
    
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  computed: {
    currentStep() {
      return this.$store.state.step;
    },
  },
};
</script>

<style scoped>
.radio_group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.create_card_content_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
}
.create_card_content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 60%;
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
  margin-right: 25px;
  box-shadow: 0px 5px 0.75rem rgba(0, 0, 0, 0.1);
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
  pointer-events: none;
}


</style>

