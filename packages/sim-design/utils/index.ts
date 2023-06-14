import { format, resolveConfig } from 'prettier'
import type { Options } from 'prettier'
export async function getFormatCode(code: string, prettierConfig?: Options) {
  if (prettierConfig) {
    return format(code, prettierConfig)
  } else {
    const options = (await resolveConfig('')) || {}
    return format(code, options)
  }
}
