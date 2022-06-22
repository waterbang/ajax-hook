/*
 * author: wendux
 * email: 824783146@qq.com
 * source code: https://github.com/wendux/Ajax-hook
 */

import { hook, unHook } from "./hook";
import { proxy, unProxy } from "./proxy";
// ah(ajax hook)
export const ah = {
  proxy,
  unProxy,
  hook,
  unHook,
};
