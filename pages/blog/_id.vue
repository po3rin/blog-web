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
            <nuxt-link :to="`/blog?tags=${tag}&page=1`">
              {{ tag }}
            </nuxt-link>
          </div>
        </div>
        <div class="sns" @click="postTwitter()">
          <twitter-icon />
        </div>
      </div>
    </div>
    <div class="more">
      <p class="section_title">🔍 more !!</p>
    </div>
    <cards :blogs="relational" />
  </section>
</template>

<script>
import Prism from '~/plugins/prism'
import TwitterIcon from '~/components/sns/Twitter'
import Cards from '~/components/Cards'
export default {
  components: {
    TwitterIcon,
    Cards
  },
  asyncData(context) {
    return context.app.$axios
      .$get(`api/v1/post/${context.route.params.id}`)
      .then((res) => {
        return { post: res.data }
      })
      .catch((e) => {
        if (e.response === undefined) {
          context.error({
            statusCode: 500,
            message: 'Internal Server Error'
          })
          return
        }

        context.error({
          statusCode: e.response.status,
          message: 'Post not found'
        })
      })
  },
  data() {
    return {
      relational: []
    }
  },
  mounted() {
    Prism.highlightAll()
    this.getRelationalArticle() // TODO: lazy request ...
  },
  methods: {
    getRelationalArticle() {
      let tagsQuery = ''
      if (
        this.post.tags !== '' &&
        this.post.tags !== null &&
        this.post.tags !== undefined
      ) {
        tagsQuery = `&tags=${this.post.tags}`
      }

      this.$axios.$get('api/v1/post?size=3' + tagsQuery).then((res) => {
        const self = this
        const filterd = res.data.filter(function(d) {
          return d.id !== self.$route.params.id
        })
        this.relational = filterd
      })
    },
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
      title: `${this.post.title} - 好奇心に殺される。- pon のテックブログ`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://po3rin.com/blog/${this.post.id}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.post.title} - 好奇心に殺される。`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.cover
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'OGP image'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@po3rin'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `${this.post.title} - 好奇心に殺される。`
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'ja_JP'
        },
        {
          hid: 'og:site_name',
          name: 'twotter:image',
          content: this.post.cover
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.post {
  padding: 48px 64px;
  margin: auto;
  max-width: 760px;

  // for blog ---------------
  hr {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 24px 48px;
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

  ul {
    font-weight: 300;
    margin: 24px 48px;
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
    word-break: break-all;
  }

  .table-of-contents {
    ul {
      // border: solid 2px rgba(0, 255, 196, 1);
      padding: 1em 1em 0.5em 2.3em;
      position: relative;
      margin-top: 4em;
      border: solid 1px rgba(0, 255, 196, 1);
    }
    ul li {
      font-size: 0.9rem;
      line-height: 2em;
      padding: 0.5em 0;
      list-style-type: none !important;
    }
    ul li:before {
      /*リストのアイコン*/
      content: '■';
      position: absolute;
      left: 1em; /*左端からのアイコンまでの距離*/
      color: rgba(0, 255, 196, 1); /*アイコン色*/
    }
    ul li:after {
      background: rgba(0, 255, 196, 1);
      position: absolute;
      left: -1px;
      bottom: 100%;
      padding: 4px 10px;
      content: 'Contents'; /*アイコンコード＋文字*/
      letter-spacing: 0.05em; /*字間*/
    }
  }

  // ------------------------

  &_header {
    display: flex;
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
      background-position: bottom;
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
  margin: 64px auto 0px;
  display: flex;
  justify-content: space-between;
  border-top: 1px $sec-color solid;

  &_tags {
    display: flex;
  }

  &_tag {
    background-color: rgba(0, 255, 196, 0.5);
    margin-right: 8px;
    padding: 12px;
    font-size: 0.8rem;
  }
}

.sns {
  width: 36px;
  height: 36px;
}

.more {
  display: flex;
  justify-content: center;
}

.section_title {
  display: inline-block;
  padding: 0 12px;
  background: linear-gradient(transparent 70%, $main-color 0%);
  font-size: 1.2rem;
}

@media screen and (max-width: 640px) {
  .post {
    padding: 36px 0px;
    h1,
    h2,
    h3,
    h4,
    p {
      margin: 32px 16px;
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

    ul {
      margin: 0px;
    }

    pre {
      font-size: 0.74rem;
      border-radius: 0px;
      box-shadow: none;
    }

    blockquote {
      margin: 12px 12px;
    }

    &_header {
      display: inherit;
      flex-direction: none;
      justify-content: none;
      min-height: 70vh;
      width: 100%;
      position: relative;
      &_title {
        font-size: 1.1rem;
      }
      &_desc {
        padding: 8px 0% 8px 0px;
        font-size: 0.9rem;
      }
      &_info {
        padding: 32px 8px 18px;
        position: absolute;
        bottom: 64px;
        left: 0;
        width: 80%;
        z-index: 100;
        background-color: white;
      }
      &_tags {
        font-size: 0.8rem;
        position: absolute;
        padding: 8px;
        top: -40px;
        background-color: $main-color;
        display: block;
      }
      &_media {
        position: relative;
        height: 70vh;
        width: 100%;
        z-index: 10;
      }
      &_date {
        margin: 12px 0px 0px;
        font-size: 0.9rem;
      }
    }
  }

  .footer {
    width: 80%;
    padding: 16px 8px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px $sec-color solid;

    &_tags {
      display: flex;
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
