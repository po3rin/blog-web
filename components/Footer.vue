<template>
  <footer>
    <profile />
    <p class="copyright">© 2020 pon / hiromu nakamura</p>
  </footer>
</template>

<script>
import TwitterIcon from '~/components/sns/Twitter'
import GhIcon from '~/components/sns/GitHub'
import Profile from '~/components/Profile'

export default {
  components: {
    TwitterIcon,
    GhIcon,
    Profile
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 64px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: $main-color;
}

.copyright {
  text-align: center;
  font-size: 0.8rem;
}

@media screen and (max-width: 640px) {
  footer {
    padding: 12px;
  }
  .profile {
    width: 90%;
    &_media {
      width: 64px;
    }
    &_name {
      font-size: 1.4rem;
    }
  }
}
</style>
