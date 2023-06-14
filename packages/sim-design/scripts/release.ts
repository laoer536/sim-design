import minimist from 'minimist'
import { writeFileSync, readFileSync } from 'fs'
import { getFormatCode } from '../utils'
import consola from 'consola'
interface PackageJsonInfo {
  main: string
  module: string
  types?: string
}
type Mode = 'pre' | 'after'

const mode = minimist(process.argv.slice(2)).mode as Mode
setEntrance(mode).catch((err) => {
  consola.error(new Error(`${err}`))
})

async function setEntrance(mode: Mode) {
  consola.info(`setEntranceMode:${mode}`)
  const packageJson = JSON.parse(readFileSync('./package.json', 'utf8')) as PackageJsonInfo
  if (mode == 'pre') {
    packageJson.main = 'dist/vite-lib.umd.js'
    packageJson.module = 'dist/vite-lib.es.js'
    packageJson.types = 'dist/index.d.ts'
  } else if (mode === 'after') {
    packageJson.main = 'index.ts'
    packageJson.module = 'index.ts'
    delete packageJson.types
  } else {
    consola.error(new Error('Can not resolve this mode'))
    return
  }
  writeFileSync('./package.json', await getFormatCode(JSON.stringify(packageJson, null, 2), { parser: 'json' }))
}
