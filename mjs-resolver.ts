import type { JestResolverOptions } from 'jest-pnp-resolver'

const mjsResolver = (path: string, options: JestResolverOptions) => {
    const mjsExtRegex = /\.mjs$/i
    const resolver = options.defaultResolver
    if (mjsExtRegex.test(path)) {
        try {
            return resolver(path.replace(mjsExtRegex, '.mts'), options)
        } catch {
            // use default resolver
        }
    }

    return resolver(path, options)
}

module.exports = mjsResolver
