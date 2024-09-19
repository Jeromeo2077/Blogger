import { logger } from "./utils/Logger.js"

async function registerSocketHandlers() {
  // @ts-ignore
  let handlers = import.meta.glob('./handlers/**/*.js')
  for (const fileName in handlers) {
    const handlerName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')

    const handler = await import(`./handlers/${handlerName}.js`)
    handlers[handlerName] = handler
  }

  return handlers
}

class SocketProviderPlugin {
  handlers = {}
  get(name) {
    return this.handlers[name]
  }
  constructor() {
    this.init()
  }

  async init() {
    try {
      this.handlers = await registerSocketHandlers()
      logger.log('📡handlers', this.handlers)
    } catch (e) {
      logger.error('SOCKET_HANDLER_ERROR', e)
      return
    }
  }
}
new SocketProviderPlugin()