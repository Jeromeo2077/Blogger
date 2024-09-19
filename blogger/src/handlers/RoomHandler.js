import { logger } from "@/utils/Logger.js";
import { SocketHandler } from "../utils/SocketHandler.js";

class TestHandler extends SocketHandler {

  constructor() {
    super(true)
    this
      .on('JOINED_ROOM', this.onJoinedRoom)
      .on('LEFT_ROOM', this.onLeftRoom)
      .on('USER_JOINED', this.onUserJoinedRoom)
      .on('USER_LEFT', this.onUserLeftRoom)

  }

  onJoinedRoom(roomName) {
    logger.log('You joined room', roomName)
  }
  onLeftRoom(roomName) {
    logger.log('You left room', roomName)
  }
  onUserJoinedRoom(user) {
    logger.log('A user joined your room', user)
  }
  onUserLeftRoom(user) {
    logger.log('A user left your room', user)
  }

}

export const testHandler = new TestHandler()
