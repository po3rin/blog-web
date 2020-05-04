import MarkdownIt from 'markdown-it'

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

  inject('md', md)
}
