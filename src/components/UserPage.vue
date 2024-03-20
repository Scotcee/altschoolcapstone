<template>
  <div>
    <h1 class="text-4xl text-center">
      Create Links! <span class="text-blue-500 relative">Shorter</span>
    </h1>
  </div>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="relative max-h-full w-full">
      <div class="flex items-center">
        <input
          v-model="longUrl"
          type="text"
          placeholder="Input your long URL here"
          class="w-full px-12 py-2 rounded-full relative border border-gray-300 shadow focus:outline-none focus:border-blue-500"
        />
        <i
          class="bi bi-send text-gray-400 absolute top-1/4 transform -translate-y-1/2 right-5"
        ></i>
      </div>
      <div class="flex justify-center mt-4">
        <button
          @click="shortenUrl"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Shorten URL
        </button>
        <button
          @click="copyUrl"
          class="bg-blue-500 text-white ml-4 px-4 py-2 rounded-md"
        >
          Copy URL
        </button>
      </div>
      <p v-if="shortUrl" class="mt-4">
        Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      longUrl: "",
      shortUrl: "",
    };
  },
  methods: {
    shortenUrl() {
      axios
        .post(
          "https://api-ssl.bitly.com/v4/shorten",
          {
            long_url: "https://dev.bitly.com",
            group_guid: "Ba1bc23dE4F",
          },
          {
            headers: {
              Authorization:
                "Bearer {a8c3d693df14d6196f8e8425e65b3f74b9a2d4db}",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Shortened URL:", response.data.link);
          this.shortUrl = response.data.link; // Update shortUrl in the component's data
        })
        .catch((error) => {
          console.error("Error shortening URL:", error);
        });
    },
    copyUrl() {
      // Implement logic to copy URL to clipboard
      console.log("Copying URL...");
    },
  },
};
</script>

<style scoped>
/* Scoped styles for your component */
input[type="text"] {
  padding-right: 40px;
}
</style>
