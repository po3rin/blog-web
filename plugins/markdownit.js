import MarkdownIt from 'markdown-it'
import markdownItKatex from 'markdown-it-katex' // 追加
import '~/node_modules/katex/dist/katex.min.css' // 追加

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    // Your Basic Settings
  })

  const defaultRender =
    md.renderer.rules.image ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  md.renderer.rules.image = function(tokens, idx, options, env, self) {
    tokens[idx].attrPush(['loading', 'lazy'])
    return defaultRender(tokens, idx, options, env, self)
  }
  md.use(markdownItKatex) // 追加
  inject('md', md)
}
