<template>
  <div class="container">
    <div
      v-if="
        this.$route.query.tags !== '' &&
          this.$route.query.tags !== null &&
          this.$route.query.tags !== undefined
      "
      class="searched"
    >
      <p>
        🔍
        <span
          v-for="(tag, i) in this.$route.query.tags.split(',')"
          :key="i"
          class="searched_label"
          >{{ tag }}</span
        >
        タグの検索結果 !
      </p>
    </div>
    <cards :blogs="blogs" />
    <div class="pager">
      <div
        v-if="this.$route.query.page && this.$route.query.page != '1'"
        class="btn"
        @click="prevPage()"
      >
        前へ
      </div>
      <div
        v-if="parseInt(total) - parseInt(this.$route.query.page) * 6 > 0"
        class="btn"
        @click="nextPage()"
      >
        次へ
      </div>
    </div>
  </div>
</template>

<script>
import Cards from '~/components/Cards'
const pageSize = 6
export default {
  components: {
    Cards
  },
  asyncData(context) {
    let tagsQuery = ''
    if (
      context.query.tags !== '' &&
      context.query.tags !== null &&
      context.query.tags !== undefined
    ) {
      tagsQuery = `&tags=${context.query.tags}`
    }

    let pageQuery = ''
    if (
      context.query.page !== '' &&
      context.query.page !== 0 &&
      context.query.page !== null &&
      context.query.page !== undefined
    ) {
      const from = Number(context.query.page)
      pageQuery = `&from=${(from - 1) * pageSize}`
    }

    return context.app.$axios
      .$get('api/v1/post?size=6' + tagsQuery + pageQuery)
      .then((res) => {
        return {
          blogs: res.data,
          total: res.total
        }
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
      blogs: [],
      total: 0
    }
  },
  methods: {
    syncBlogs(tags, page) {
      let tagsQuery = ''
      if (tags !== '' && tags !== null && tags !== undefined) {
        tagsQuery = `&tags=${tags}`
      }

      let pageQuery = ''
      let sizeQuery = ''
      if (
        page !== '' &&
        page !== 0 &&
        page !== '0' &&
        page !== null &&
        page !== undefined
      ) {
        const f = parseInt(page)
        pageQuery = `&from=${(f - 1) * pageSize}`
        sizeQuery = `&page=${f}`
      }

      this.$router.push('blog?' + tagsQuery + sizeQuery)

      this.$axios
        .$get('api/v1/post?size=6' + tagsQuery + pageQuery)
        .then((res) => {
          this.blogs = res.data
          this.total = res.total
        })
    },
    nextPage() {
      // this.blogs = []

      let page = this.$route.query.page
      if (
        page === '' ||
        page === 0 ||
        page === '0' ||
        page === null ||
        page === undefined ||
        isNaN(page)
      ) {
        page = '2'
      } else {
        let p = parseInt(page)
        p++
        page = p
      }

      this.syncBlogs(this.$route.query.tags, page)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    prevPage() {
      // this.blogs = []

      let page = this.$route.query.page
      if (
        page === '' ||
        page === '0' ||
        page === 0 ||
        page === null ||
        page === undefined ||
        isNaN(page)
      ) {
        page = '1'
      } else {
        let p = parseInt(page)
        p--
        page = p
      }

      this.syncBlogs(this.$route.query.tags, page)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 84px 0px;
  display: flex;
  flex-direction: column;
}
.pager {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.searched {
  margin: auto;
  padding: 12px;
  &_label {
    background-color: $main-color;
    padding: 12px;
    margin: 4px;
  }
}

@media screen and (max-width: 640px) {
  .container {
    padding: 84px 0px 12px;
  }
  .searched {
    padding: 16px;
    &_label {
      background-color: $main-color;
      padding: 12px;
      margin: 4px;
    }
  }
}
</style>
