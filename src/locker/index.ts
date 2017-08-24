import * as fs from 'fs-extra'

import config from '../config'
import { ILocker } from '../types/locker'

/**
 * Create lock file
 *
 * @export
 * @param {ILocker} log Log object to save.
 * @returns {Promise<boolean>}
 */
export async function createLock (log: ILocker): Promise<boolean> {
  try {
    const isFileExists = await fs.pathExists(config.lockPath)

    /**
     * Check wether lock file exists or not
     * If doesn't exists, let's create one
     */
    if (!isFileExists) {
      await fs.writeJson(config.lockPath, {})
    }

    const lockJson = await fs.readJSON(config.lockPath)
    const newLockJson = Object.assign( {}, lockJson, log )

    await fs.writeJSON(config.lockPath, newLockJson)

    return true
  } catch (e) {
    return false
  }
}

/**
 * Read lock file from given key
 *
 * @export
 * @param {keyof ILocker} key lock key
 * @returns
 */
export async function readLock (key: keyof ILocker) {
  const lockJson = await fs.readJson(config.lockPath)
  return lockJson[key]
}
