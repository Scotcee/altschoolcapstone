<template>
  <div>
    <div
      class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-lg w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        <div>
          <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form class="space-y-6" @submit.prevent="signUp">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <!-- <div>
            <label for="first-name" class="sr-only">First Name</label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              v-model="firstName"
              autocomplete="given-name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
            />
          </div> -->
          <!-- <div>
            <label for="last-name" class="sr-only">Last Name</label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              v-model="lastName"
              autocomplete="family-name"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Last Name"
            />
          </div> -->
          <!-- <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              v-model="username"
              autocomplete="username"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div> -->
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label for="confirm-password" class="sr-only"
              >Confirm Password</label
            >
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              v-model="confirmPassword"
              autocomplete="new-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <div>
          <p class="text-center text-sm">
            Already have an account?
            <span class="font-medium text-indigo-600 hover:text-indigo-500">
              <router-link to="/login">Log in</router-link>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import storeInstance from "../store/index.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    // const firstName = ref("");
    // const lastName = ref("");
    // const username = ref("");
    const confirmPassword = ref("");
    const store = storeInstance;
    const router = useRouter();
    const error = ref(null);

    const signUp = async () => {
      try {
        if (password.value !== confirmPassword.value) {
          throw new Error("Passwords do not match");
        }

        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
          // firstName: firstName.value,
          // lastName: lastName.value,
          // username: username.value,
        });
        router.push("/");
      } catch (error) {
        console.error("Error signing up:", error.message);
        error.value = error.message;
      }
    };

    return {
      email,
      // firstName,
      // lastName,
      // username,
      password,
      confirmPassword,
      signUp,
      error,
    };
  },
};
</script>
