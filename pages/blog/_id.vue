<template>
  <section>
    <div class="post_header">
      <div class="post_header_info">
        <div class="post_header_info_body">
          <p class="post_header_tags">
            {{ post.tags.join(' / ') }}
          </p>
          <h1 class="post_header_title">{{ post.title }}</h1>
          <p class="post_header_desc">{{ post.description }}</p>
          <div class="sns" @click="postTwitter()">
            <twitter-icon />
          </div>
          <p class="post_header_date">
            {{
              post.created_at
                .split('T')[0]
                .split('-')
                .join(' / ')
            }}
          </p>
        </div>
      </div>
      <div class="post_header_media" :lazy-background="post.cover" />
    </div>

    <div class="post">
      <div v-html="$md.render(post.body.split('---')[2])"></div>
      <div class="footer">
        <div class="footer_tags">
          <div v-for="(tag, i) in post.tags" :key="i" class="footer_tag">
            {{ tag }}
          </div>
        </div>
        <div class="sns">
          <twitter-icon />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism'
import TwitterIcon from '~/components/sns/Twitter'
export default {
  components: {
    TwitterIcon
  },
  async asyncData(context) {
    const res = await context.app.$axios.$get(
      `api/v1/post/${context.route.params.id}`
    )
    return { post: res.data }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    postTwitter() {
      window.open(
        `https://twitter.com/share?url=https://po3rin.com/blog/${this.post.id}`,
        'SNS_window',
        'width=600, height=500, menubar=no, toolbar=no, scrollbars=no'
      )
    }
  },
  head() {
    return {
      title: `${this.post.title} - 好奇心に殺される。`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          property: 'og:url',
          content: `https://po3rin.com/blog/${this.post.id}`
        },
        {
          property: 'og:title',
          content: `${this.post.title} - 好奇心に殺される。`
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: this.post.description },
        {
          property: 'og:image',
          content: this.post.cover
        },
        {
          property: 'og:image:alt',
          content: 'OGP image'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@po3rin' },
        {
          property: 'og:site_name',
          content: `${this.post.title} - 好奇心に殺される。`
        },
        { property: 'og:locale', content: 'ja_JP' }
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  padding: 64px;
  margin: auto;
  max-width: 740px;

  // for blog ---------------
  hr {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 36px 48px;
  }

  h2 {
    display: inline;
    background: linear-gradient(transparent 80%, $main-color 0%);
  }

  h3::before {
    color: $main-color;
    content: '●';
  }

  p {
    line-height: 2em;
    vertical-align: baseline;
    font-weight: 300;
  }

  strong {
    background: linear-gradient(transparent 70%, $main-color 0%);
  }

  pre {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
    margin-bottom: 36px;
  }

  p > code {
    background-color: #e1fff8;
    padding: 4px;
  }

  img {
    margin: auto;
    width: 80%;
  }

  blockquote {
    padding: 12px 6px;
    border-left: 4px rgba(0, 255, 196, 1) solid;
    background-color: #e1fff8;
  }

  a {
    color: $sec-color;
  }

  // ------------------------

  &_header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70vh;

    &_title {
      display: inline;
      background: linear-gradient(transparent 80%, $main-color 0%);
    }

    &_desc {
      padding: 12px 30% 12px 0px;
      line-height: 1.5em;
    }

    &_info {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 480px;
      width: 50%;
      padding: 0px 64px;
    }

    &_media {
      max-width: 480px;
      width: 50%;
      background-size: cover;
      z-index: 10;

      background-color: rgba(0, 255, 196, 1);
      transition: all ease 1s;
      opacity: 0;
    }

    &_date {
      font-size: 0.8rem;
    }
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

.footer {
  padding: 36px 36px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px $sec-color solid;

  &_tags {
    display: flex;
    flex-direction: row;
  }

  &_tag {
    background-color: rgba(0, 255, 196, 0.5);
    margin-right: 8px;
    padding: 12px;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 640px) {
  .post {
    padding: 36px 0px;
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 32px 8px;
    }

    h2 {
      font-size: 1.1rem;
    }

    img {
      width: 100%;
    }

    p {
      font-size: 0.9rem;
    }

    pre {
      font-size: 0.8rem;
      border-radius: 0px;
      box-shadow: none;
    }
    &_header {
      display: inherit;
      flex-direction: none;
      justify-content: none;
      min-height: 70vh;
      width: 100%;
      &_title {
        font-size: 1.2rem;
      }
      &_desc {
        padding: 12px 0% 12px 0px;
        font-size: 0.9rem;
      }
      &_info {
        padding: 32px 8px;
        position: absolute;
        bottom: 30%;
        left: 0;
        width: 80%;
        z-index: 100;
        background-color: white;
      }
      &_tags {
        position: absolute;
        padding: 8px;
        top: -40px;
        background-color: $main-color;
        display: block;
      }
      &_media {
        position: relative;
        height: 80vh;
        width: 100%;
        z-index: 10;
      }
      &_date {
        margin: 16px 0px 0px;
        font-size: 0.9rem;
      }
    }
  }

  .footer {
    width: 80%;
    padding: 16px 8px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px $sec-color solid;

    &_tags {
      display: flex;
      flex-direction: row;
    }

    &_tag {
      background-color: rgba(0, 255, 196, 0.5);
      margin-right: 8px;
      padding: 12px;
      font-size: 0.8rem;
    }
  }
}
</style>
