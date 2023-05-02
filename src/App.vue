<script setup></script>

<template>
  <div class="flex justify-center items-center w-full h-screen">
    <article class="
      article_item
      w-80 h-[497px] p-4 
      bg-white rounded-[20px]
    ">
      <section class="article__image mb-6">
        <img 
          class="w-full h-full rounded-xl"
          src="/images/image-qr-code.png"
          alt="image-qr-code"
        />
      </section>

      <section class="article__text text-center">
        <h3 class="
          font-sans
          font-bold
          text-navy-dark
          text-[22px]
          leading-7
        ">Improve your front-end skills by building projects</h3>
        <p
          class="
            font-sans
            text-base
            text-grey
            leading-[19px]
            mt-2
          "
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </article>
  </div>
</template>

<style>
body {
  @apply bg-grey-light;
}
</style>
