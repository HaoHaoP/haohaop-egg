// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfigDefault from '../../config/config.default';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type NewEggAppConfig = ConfigDefault;
declare module 'egg' {
  interface EggAppConfig extends NewEggAppConfig { }
}
