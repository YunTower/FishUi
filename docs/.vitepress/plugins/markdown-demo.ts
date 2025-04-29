import MarkdownIt from 'markdown-it'
import fs from 'fs'
import path from 'path'

interface Options {
  componentsDir: string
}

export function markdownDemoPlugin(md: MarkdownIt, options: Options) {
  const { componentsDir } = options

  md.core.ruler.push('demo_component', (state) => {
    const tokens = state.tokens
    let i = 0

    while (i < tokens.length) {
      const token = tokens[i]
      if (token.type === 'html_block') {
        const demoMatch = token.content.match(/<demo\s+src="(.+?)"\s*>/)
        if (demoMatch) {
          const [fullMatch, relativePath] = demoMatch
          const absolutePath = path.resolve(componentsDir, relativePath)

          if (!fs.existsSync(absolutePath)) {
            console.warn(`Demo file not found: ${absolutePath}`)
            i++
            continue
          }

          const source = fs.readFileSync(absolutePath, 'utf-8')

          const scriptMatch = source.match(/<script\b[^>]*>([\s\S]*?)<\/script>/)
          const templateMatch = source.match(/<template>([\s\S]*?)<\/template>/)
          const styleMatch = source.match(/<style\b[^>]*>([\s\S]*?)<\/style>/)

          const demoComponent = {
            script: scriptMatch ? scriptMatch[1].trim() : '',
            template: templateMatch ? templateMatch[1].trim() : '',
            style: styleMatch ? styleMatch[1].trim() : '',
          }

          token.content = `<DemoContainer :source='${JSON.stringify(demoComponent)}'>\n${source}\n</DemoContainer>`
        }
      }
      i++
    }

    return true
  })
}
