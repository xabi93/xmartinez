<template>
  <div class="flex flex-col bg-header-gb w-full h-screen">
    <div class="flex justify-between p-5 sm:p-8 items-center mb-8">
      <span class="font-sans text-white p-2 text-2xl font-thin sm:text-3xl">
        Xabier Martinez
      </span>
    </div>
    <div
      class="flex items-center flex-col h-full text-center text-white justify-center"
    >
      <div class="w-48 h-48">
        <img
          class="w-full h-full rounded-full overflow-hidden shadow-inner object-cover object-center w-full h-full visible group-hover:hidden"
          src="~/assets/img/me.jpg"
          alt="Me"
        />
      </div>
      <div>
        <blockquote class="m-10 font-serif italic text-2xl">
          {{ $t('header.quote') }}
        </blockquote>
      </div>
    </div>
  </div>
</template>
