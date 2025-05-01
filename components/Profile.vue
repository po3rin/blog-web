<template>
  <div>
    <div class="profile">
      <div>
        <img
          class="profile_media"
          src="~/assets/gopher.png"
          alt="ponのプロフィール画像"
          width="96px"
          loading="lazy"
        />
      </div>
      <div>
        <p class="profile_name">pon</p>
        <div class="line"></div>
        <p class="profile_body">
          エンジニア8年目です。GoとPythonをよく書きます。情報検索が好き。
        </p>
        <p class="profile_skills">
          Go / Python / Kubernetes / AWS / Google Cloud / Elasticsearch / NLP
        </p>
      </div>
    </div>
    <div class="sns">
      <a href="https://twitter.com/po3rin">
        <twitter-icon />
      </a>
      <a href="https://github.com/po3rin">
        <gh-icon />
      </a>
    </div>
  </div>
</template>

<script>
import TwitterIcon from '~/components/sns/Twitter'
import GhIcon from '~/components/sns/GitHub'

export default {
  components: {
    TwitterIcon,
    GhIcon
  },
  methods: {
    open(url) {
      window.open()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  width: 380px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  &_name {
    font-size: 1.4rem;
    font-weight: 600;
  }
  &_body {
    padding: 12px 0px;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 1.8em;
  }
  &_skills {
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.8em;
  }
  &_media {
    border-radius: 50% 50% 50% 50%;
    margin-right: 32px;
  }
}

.line {
  width: 128px;
  border: 0.5px solid;
  margin: 4px 0px;
}

.sns {
  margin: auto;
  padding: 12px;
  width: 140px;
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media screen and (max-width: 640px) {
  .profile {
    width: 90%;
    &_body {
      font-size: 0.8rem;
    }
    &_media {
      width: 90px;
      border-radius: 50% 50% 50% 50%;
      margin-right: 16px;
    }
  }
}
</style>
