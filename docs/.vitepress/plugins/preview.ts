import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'

export function containerPreview(md: MarkdownIt) {
  const defaultRender = md.renderer.rules.fence!

  md.renderer.rules.fence = (
    tokens: Token[],
    idx: number,
    options: any,
    env: any,
    self: Renderer,
  ) => {
    const token = tokens[idx]
    const prevToken = tokens[idx - 1]
    const isInDemoContainer = prevToken && prevToken.type === 'container_demo_open'

    if (isInDemoContainer) {
      const source = encodeURIComponent(token.content)
      return `<vp-demo source="${source}"></vp-demo>`
    }

    return defaultRender(tokens, idx, options, env, self)
  }

  md.use(require('markdown-it-container'), 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      if (tokens[idx].nesting === 1) {
        return '<div class="demo">\n'
      } else {
        return '</div>\n'
      }
    },
  })
}
