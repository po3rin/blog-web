<template>
  <div class="container">
    <header class="header">
      <h1 class="title">好奇心に殺される</h1>
      <p class="sub">ソフトウェアエンジニア pon のブログサイト</p>
      <div class="header_sns">
        <svg width="35" height="35" viewBox="0 0 25 25">
          <path
            d="M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23"
            style="fill:#1d3152;fill-rule:evenodd"
          ></path>
        </svg>

        <svg width="35" height="35" viewBox="0 0 32.58 31.77">
          <path
            d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z"
            style="fill:#1d3152;fill-rule:evenodd"
          />
        </svg>
      </div>
    </header>
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="card"
      @click="push(blog.id)"
    >
      <img class="card_cover" src="~/assets/sim.jpeg" />
      <div class="card_body">
        <p class="card_title">{{ blog.title }}</p>
        <p class="card_description">{{ blog.description }}</p>
      </div>
      <p class="card_date">
        {{
          blog.created_at
            .split('T')[0]
            .split('-')
            .join(' / ')
        }}
      </p>
      <p class="card_tags">
        {{ blog.tags.join(' / ') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const res = await context.app.$axios.$get('/post')
    return { blogs: res.data }
  },
  methods: {
    push(id) {
      this.$router.push({ path: `/blog/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;
  &_sns {
    padding: 24px;
    width: 120px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  margin: 24px 0px;
}

.sub {
  margin: 0px;
}

.card {
  margin: 64px auto;
  max-width: 400px;
  // padding: 36px;
  position: relative;
  &_date {
    margin: 0;
    position: absolute;
    top: 0;
    right: -138px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    font-size: 1.1rem;
  }
  &_tags {
    font-size: 1.1rem;
    position: absolute;
    margin: 0;
    top: -36px;
    vertical-align: baseline;
  }
  &_title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 24px 0px;
    line-height: 1.7;
    vertical-align: baseline;
  }
  &_description {
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.8em;
  }
  &_cover {
    width: 100%;
  }
  &_body {
    position: absolute;
    padding: 24px 24px 12px 24px;
    background: white;
    bottom: 0;
    left: 0;
    width: 74%;
  }
}
</style>
