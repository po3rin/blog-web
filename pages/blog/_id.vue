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
          <div class="sns">
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
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism'
export default {
  async asyncData(context) {
    const res = await context.app.$axios.$get(
      `/post/${context.route.params.id}`
    )
    return { post: res.data }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
.post {
  padding: 64px;
  margin: auto;
  max-width: 740px;

  // for blog
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
    background: linear-gradient(transparent 80%, #00ffc4 0%);
  }

  h3::before {
    color: #00ffc4;
    content: '●';
  }

  p {
    line-height: 2em;
    vertical-align: baseline;
    font-weight: 300;
  }

  strong {
    background: linear-gradient(transparent 70%, #00ffc4 0%);
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

  &_header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70vh;

    &_title {
      display: inline;
      background: linear-gradient(transparent 80%, #00ffc4 0%);
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
  }
}

.isLoading {
  filter: blur(15px);
  background-color: rgba(0, 255, 196, 1);
  opacity: 1;
}

.isLoaded {
  background-color: rgba(0, 255, 196, 0);
  opacity: 1;
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
        background-color: #00ffc4;
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
}
</style>
