<template>
  <div class="flex flex-col bg-header-gb w-full">
    <div class="flex justify-between p-8 items-center">
      <div>
        <span class="font-sans text-white text-3xl font-thin">
          Xabier Martinez
        </span>
        <blockquote class="font-serif italic text-1xl text-white">
          {{ $t('header.quote') }}
        </blockquote>
      </div>
      <div class="w-24 h-24">
        <img
          class="w-full h-full rounded-full overflow-hidden shadow-inner object-cover object-center w-full h-full visible group-hover:hidden"
          src="~/assets/img/me.jpg"
          alt="Me"
        />
      </div>
    </div>
  </div>
</template>
