import MarkdownIt from 'markdown-it'
import markdownItKatex from 'markdown-it-katex'
import markdownItTableOfContents from 'markdown-it-table-of-contents'
import '~/node_modules/katex/dist/katex.min.css'
import markdownItAnchor from 'markdown-it-anchor'

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
  md.use(markdownItKatex)
  md.use(markdownItAnchor)
  md.use(markdownItTableOfContents)
  inject('md', md)
}
