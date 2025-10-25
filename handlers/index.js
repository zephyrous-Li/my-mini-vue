import getHandlers from "./behavior/getHandlers.js";
import setHandlers from "./behavior/setHandlers.js";
import deleteHandlers from "./behavior/deleteHandlers.js";
import hasHandlers from "./behavior/hasHandlers.js";
import ownKeysHandlers from "./behavior/ownKeysHandlers.js";

export default {
  get: getHandlers,
  set: setHandlers,
  deleteProperty: deleteHandlers,
  has: hasHandlers,
  ownKeys: ownKeysHandlers,
};
