<template>
  <div class="cards">
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="card"
      @click="push(blog.id)"
    >
      <div class="card_cover" :lazy-background="blog.cover" />
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
  props: {
    blogs: {
      type: Array,
      required: true
    }
  },
  methods: {
    push(id) {
      this.$router.push({ path: `/blog/${id}` })
    },
    toWindow(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1800px;
  margin: auto;
}

.card:hover {
  box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
    0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
}

.card {
  cursor: pointer;
  opacity: 1;
  transition: box-shadow 0.5s;
  transition: opacity 0.5s;

  margin: 64px 64px;
  max-width: 460px;
  position: relative;
  background-color: rgba(0, 255, 196, 0.5);
  &_date {
    position: absolute;
    top: -10px;
    right: -140px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    font-size: 1.1rem;
  }
  &_tags {
    font-size: 0.8rem;
    position: absolute;
    top: -24px;
    vertical-align: baseline;
    background-color: $main-color;
    padding: 12px;
    font-weight: 600;
  }
  &_title {
    font-size: 1rem;
    font-weight: 600;
    margin: 24px 0px;
    vertical-align: baseline;

    display: inline;
    background: linear-gradient(transparent 80%, $main-color 0%);
    background-repeat: no-repeat;
  }
  &_description {
    font-size: 0.9rem;
    margin: 12px 0px;
    line-height: 1.8em;
    font-size: 0.8rem;
  }
  &_cover {
    height: 380px;
    width: 330px;
    background-size: cover;
    background-position: bottom;

    transition: all ease 1s;
    opacity: 0;
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

.isLoading {
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  opacity: 0;
}

.isLoaded {
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  opacity: 1;
}

@media screen and (max-width: 640px) {
  .card {
    margin: 48px 48px;
    &_title {
      font-size: 1rem;
    }
    &_date {
      display: none;
    }
    &_cover {
      height: 340px;
    }
    &_body {
      bottom: -2px;
    }
    &_tags {
      font-size: 0.8rem;
      top: -36px;
    }
  }
}
</style>
