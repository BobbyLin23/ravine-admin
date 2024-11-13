import type { Linter } from 'eslint'

import { ignores, javascript, node, prettier, typescript } from './configs'

type FlatConfig = Linter.Config

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    javascript(),
    ignores(),
    prettier(),
    typescript(),
    node(),
    ...config,
  ]

  const resolved = await Promise.all(configs)

  return resolved.flat()
}

export { defineConfig }
