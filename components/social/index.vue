<template>
  <div class="flex w-full justify-center max-w-md">
    <social-button :link="$t('contact.twitter.url')" :icon="twitter" label="twitter" />
    <social-button :link="$t('contact.linkedin.url')" :icon="linkedin"  label="linkedin" />
    <social-button :link="$t('contact.github.url')" :icon="github"  label="github"/>
    <social-button :link="$t('contact.instagram.url')" :icon="instagram"  label="instagram" />
  </div>
</template>
<script>
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import SocialButton from './button'

export default {
  name: 'Social',
  components: {
    SocialButton,
  },
  computed: {
    twitter() {
      return faTwitter
    },
    linkedin() {
      return faLinkedinIn
    },
    github() {
      return faGithub
    },
    instagram() {
      return faInstagram
    },
  },
}
</script>
