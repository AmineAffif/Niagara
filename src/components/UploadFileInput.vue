<template>
  <div class="upload_file">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    ></vue-dropzone>
    
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "UploadFileInput",
  data: () => ({
    dropzoneOptions: {
      url: "https://httpbin.org/post",
      dictDefaultMessage:
        "<div class='inside_dropzone' style='display: flex;'> <img src='https://i.ibb.co/Tw1Ys3G/folder-icon.webp' id='folder_image_input' alt='folder icon' style='width: 50px !important; object-fit: scale-down;'/> <div class='right_text_input_file_inside' style='margin-left: 15px;'> <p style='margin: 0; font-size: 1.3rem; text-align: left'>Glissez et déposez vos fichiers ici</p><p style='margin: 0; font-size: 1rem; text-align: left'>Ou <u> chercher un fichier </u></p></div></div>",
      thumbnailWidth: 150, // MB
      maxFilesize: 0.5,
      uploadMultiple: true,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      paramName: "file", // The name that will be used to transfer the file
    },
  }),

  components: {
    vueDropzone: vue2Dropzone,
  },
};
</script>

<style>

#dropzone {
  border: 3px dashed rgba(0, 0, 0, 0.1);
  margin-bottom: 40px !important;
}


</style>

