<template>
  <div class="my-10">
    <div class="text-center">
      <p class="text-md text-gray-500 mb-2">
        2,028 people have said good stuff about scissors
      </p>
      <h1 class="text-3xl font-bold mb-8">What users say about us</h1>
    </div>

    <div class="relative">
      <div
        class="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3/4 h-48 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 z-0 opacity-30 rounded-md filter blur-xl"
      ></div>

      <div class="max-w-full md:mx-40 md:flex justify-content-center gap-2">
        <div
          class="class= review-tab bg-white opacity-50 z-2 p-1 shadow-lg transition-all duration-300 transform hover:bg-gray-800 hover:text-white-500 hover:shadow-xl hover:scale-105"
        >
          <div class="flex items-center mb-3">
            <div class="star-rating flex gap-1 mr-2">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <span class="text-gray-700"></span>
          </div>
          <div
            class="review hover:text-green-500 hover:font-bold text-gray-800 italic text-sm mb-4"
          >
            "Great experience using the URL shortener. The link works perfectly
            every time and I appreciate the analytics features to track links."
          </div>
          <div class="profile flex items-center">
            <div
              class="image rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <img class="rounded-full" src="../assets/passport1.jfif" alt="" />
            </div>
            <div class="text">
              <h4 class="text-sm font-bold">LESLIE ALEXANDER</h4>
              <p class="text-sm text-gray-600">Freelance React Developer</p>
            </div>
          </div>
        </div>
        <div
          class="class= review-tab bg-white opacity-50 z-2 p-1 shadow-lg transition-all duration-300 transform hover:bg-gray-800 hover:text-white-500 hover:shadow-xl hover:scale-105"
        >
          <div class="flex items-center mb-3">
            <div class="star-rating flex gap-1 mr-2">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <span class="text-gray-700"></span>
          </div>
          <div
            class="review hover:text-green-500 hover:font-bold text-gray-800 italic text-sm mb-4"
          >
            "Great experience using the URL shortener. The link works perfectly
            every time and I appreciate the analytics features to track links."
          </div>
          <div class="profile flex items-center">
            <div
              class="image rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <img class="rounded-full" src="../assets/passport1.jfif" alt="" />
            </div>
            <div class="text">
              <h4 class="text-sm font-bold">LESLIE ALEXANDER</h4>
              <p class="text-sm text-gray-600">Freelance React Developer</p>
            </div>
          </div>
        </div>
        <div
          class="class= review-tab bg-white opacity-50 z-2 p-1 shadow-lg transition-all duration-300 transform hover:bg-gray-800 hover:text-white-500 hover:shadow-xl hover:scale-105"
        >
          <div class="flex items-center mb-3">
            <div class="star-rating flex gap-1 mr-2">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <span class="text-gray-700"></span>
          </div>
          <div
            class="review hover:text-green-500 hover:font-bold text-gray-800 italic text-sm mb-4"
          >
            "Great experience using the URL shortener. The link works perfectly
            every time and I appreciate the analytics features to track links."
          </div>
          <div class="profile flex items-center">
            <div
              class="image rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <img class="rounded-full" src="../assets/passport1.jfif" alt="" />
            </div>
            <div class="text">
              <h4 class="text-sm font-bold">LESLIE ALEXANDER</h4>
              <p class="text-sm text-gray-600">Freelance React Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.review-tab {
  max-width: 600px; /* Adjust max width as needed */
}
.bg-gradient-to-r {
  position: absolute;
}
.star-rating i {
  font-size: 1.2rem;
  color: #ffc107; /* Adjust star color */
}

.profile .image img {
  max-width: 100%;
  max-height: 100%;
}
.review-tab {
  margin-top: 20px;
  max-height: 250px;
}
</style>
