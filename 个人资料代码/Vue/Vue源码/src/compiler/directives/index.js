/* @flow */

import on from './on'
import bind from './bind'
import { noop } from 'shared/util.js'

export default {
  on,
  bind,
  cloak: noop
}
