<template>
  <div class="mt-20">
    <div class="md:w-1/2 md:m-auto text-center">
      <div class="accordion-title">
        <span class="text-blue-500 text-xl">FAQ</span>
        <h1 class="font-bold text-4xl">HAVE A QUESTION</h1>
      </div>
      <div>
        <Accordion title="What is a URL Shortener ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit
          perferendis iste, asperiores quod vitae in! Omnis, reprehenderit,
          suscipit nisi est nemo unde eius tenetur asperiores, vero fugiat
          obcaecati illum?
        </Accordion>
        <Accordion title="Benefits of a short URL ?">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          dignissimos eaque aperiam suscipit nulla debitis inventore officia
          quisquam, totam placeat. Molestiae, quo cum! In, mollitia. Excepturi
          placeat et sapiente officiis.
        </Accordion>
        <Accordion title="Why choose Scissors">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem architecto velit facere, possimus nisi repellendus quas
          nemo! Tempore tempora consequuntur alias recusandae, nisi rem ducimus
          quam molestiae numquam quasi sunt!
        </Accordion>
        <Accordion title="What is a QR Code ?"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          reprehenderit quod consequatur fuga harum sequi officia iste accusamus
          perspiciatis, minima, quasi repellendus perferendis! Excepturi laborum
          fugiat eveniet molestias veritatis ratione.</Accordion
        >
      </div>
      <p class="mt-10">
        Didn't find the answer you are looking for?
        <span class="pointer text-blue-500"
          ><a href="">contact our support </a></span
        >
      </p>
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  components: {
    Accordion,
  },
};
</script>

<style scoped></style>
