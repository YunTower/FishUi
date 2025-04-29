import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

interface Options {
  componentsDir: string
}

export function demoPlugin({ componentsDir }: Options): Plugin {
  return {
    name: 'vitepress-demo',
    transform(code, id) {
      if (!id.endsWith('.md')) return

      const demoRE = /<demo\s+src="(.+?)"\s*>/g
      const matches = Array.from(code.matchAll(demoRE))

      if (!matches.length) return

      let result = code
      for (const match of matches) {
        const [fullMatch, relativePath] = match
        const absolutePath = path.resolve(path.dirname(id), relativePath)
        const source = fs.readFileSync(absolutePath, 'utf-8')

        const scriptMatch = source.match(/<script\b[^>]*>([\s\S]*?)<\/script>/)
        const templateMatch = source.match(/<template>([\s\S]*?)<\/template>/)
        const styleMatch = source.match(/<style\b[^>]*>([\s\S]*?)<\/style>/)

        const demoComponent = {
          script: scriptMatch ? scriptMatch[1].trim() : '',
          template: templateMatch ? templateMatch[1].trim() : '',
          style: styleMatch ? styleMatch[1].trim() : '',
        }

        const replacement = `<DemoContainer :source='${JSON.stringify(demoComponent)}'>\n${source}\n</DemoContainer>`
        result = result.replace(fullMatch, replacement)
      }

      return result
    },
  }
}
