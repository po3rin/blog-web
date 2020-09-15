<template>
  <div class="container">
    <profile />
    <p class="section_title">💻 OSS</p>
    <div>
      <div class="cards">
        <div
          v-for="repo in repos"
          :key="repo.name"
          class="card"
          @click="push(repo.url)"
        >
          <gh-icon :url="repo.url" />
          <p class="bold-txt">{{ repo.name }}</p>
          <p class="thin-txt">{{ repo.description }}</p>
          <div class="card_meta">
            <p class="card_meta_item">
              <span class="star">★</span> {{ repo.star }}
            </p>
            <p class="card_meta_item">
              <span class="label-go" :style="{ color: repo.langColor }">●</span>
              {{ repo.lang }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p class="section_title">📝 writting</p>
    <div class="books">
      <div v-for="book in books" :key="book.name" class="book">
        <img width="160px" :src="book.img" :alt="book.name" />
        <div class="book_contents">
          <p class="bold-txt">{{ book.name }}</p>
          <div class="line"></div>
          <p class="thin-txt">
            {{ book.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from '~/components/Profile'
import GhIcon from '~/components/sns/GitHub'
export default {
  components: {
    Profile,
    GhIcon
  },
  data() {
    return {
      // TODO: use GitHub API
      repos: [
        {
          name: 'GitHub Card Creator',
          url: 'https://github.com/po3rin/github_link_creator',
          description:
            'ブログなどで GitHub リポジトリを共有する為に、OGP風画像を生成するツールです。CLIや、サーバーモード、WEB版もあります。',
          lang: 'Go',
          langColor: '#00add8',
          star: 113
        },
        {
          name: 'gofmtmd',
          url: 'https://github.com/po3rin/gofmtmd',
          description:
            'Markdown内のGoのコードを検知して gofmt をかけます。README.mdを書く際や、ブログをMarkdownで書く際に有用です。Vim プラグインもあります。',
          lang: 'Go',
          langColor: '#00add8',
          star: 85
        },
        {
          name: 'gockerfile',
          url: 'https://github.com/po3rin/gockerfile',
          description:
            'BuildKit Frontendとして数行のYAMLでマルチステージビルド済みのGoバイナリを含んだDocker Imageを生成します。',
          lang: 'Go',
          langColor: '#00add8',
          star: 25
        }
      ],
      books: [
        {
          name: 'Gopherの休日 2019秋',
          img: require('@/assets/book7.png'),
          description:
            '第2章「Goとベイズ理論でシンプルな記事分類を実装してみよう！」を寄稿'
        },
        {
          name: 'Gopherの休日 2020冬',
          img: require('@/assets/book8.png'),
          description:
            '第4章「GoとコンセンサスアルゴリズムRaftによる分散システム構築入門」を寄稿'
        },
        {
          name: 'Gopherの休日 2020夏',
          img: require('@/assets/book9.png'),
          description:
            '第4章「Go+Burrows-Wheeler変換で入門する文字列解析の世界」を寄稿'
        }
      ]
    }
  },
  methods: {
    push(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 36px 0px;
  display: flex;
  flex-direction: column;
}

.bold-txt {
  font-size: 1.1rem;
  font-weight: 600;
}

.thin-txt {
  font-size: 0.9rem;
}

.section_title {
  display: inline-block;
  padding: 0 12px;
  margin: 24px auto;
  background: linear-gradient(transparent 70%, $main-color 0%);
  font-size: 1.6rem;
  text-align: center;
  margin-top: 64px;
}

.cards {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
}

.card {
  cursor: pointer;
  border: 1.5px $sec-color solid;
  border-right: 5px $sec-color solid;
  border-bottom: 5px $sec-color solid;
  padding: 12px 12px 48px;
  margin: 8px;
  position: relative;
  &_meta {
    position: absolute;
    bottom: 5px;
    bottom: 0;
    display: flex;
    display: row;
    &_item {
      margin-right: 24px;
    }
  }
}

.books {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: row;
}

.book {
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  &_contents {
    padding: 24px 48px;
    max-width: 280px;
  }
  &_title {
    font-size: 1.1rem;
    font-weight: 600;
  }
}

.line {
  width: 128px;
  border: 0.5px solid;
  margin: 4px 0px;
}

.star {
  color: $sec-color;
}

.label {
  &-go {
    color: #00add8;
  }
}

@media screen and (max-width: 640px) {
  .container {
    width: 100%;
    padding: 96px 0px;
  }

  .cards {
    flex-direction: column;
    width: 96%;
  }

  .books {
    width: 94%;
    flex-direction: column;
    align-items: center;
  }

  .book {
    width: 100%;
    padding: 12px 12px;
    flex-direction: row;
    &_contents {
      padding: 24px 12px;
    }
  }
}
</style>
