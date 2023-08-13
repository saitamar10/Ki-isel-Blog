import { createRequire } from 'node:module'

export default function getVersions() {
  const require = createRequire(import.meta.url)
  const {
    version,
    dependencies: { next: nextVersion }
  } = require('package.json')

  return {
    blog: version,
    next: nextVersion
  }
}
