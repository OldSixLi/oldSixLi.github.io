/* @flow */

import { identity, resolveAsset } from 'core/util/index.js'

/**
 * Runtime helper for resolving filters
 */
export function resolveFilter (id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
