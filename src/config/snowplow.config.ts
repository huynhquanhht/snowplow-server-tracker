import { newTracker, NodeEmitterConfiguration, Tracker, } from "@snowplow/node-tracker";
import { SNOWPLOW } from "../constants/common";
import logger from "../utils/logger";
import MESSAGES from "../constants/message";

const trackerConfiguration = {
  namespace: SNOWPLOW.namespace,
  appId: SNOWPLOW.appId,
  encodeBase64: SNOWPLOW.encodeBase64,
};

const emitterConfiguration: NodeEmitterConfiguration = {
  endpoint: SNOWPLOW.endpoint,
  eventMethod: "post",
  bufferSize: SNOWPLOW.bufferSize,
  retryFailedRequests: true,
  onRequestFailure(data, response) {
    logger.error(MESSAGES.eventEmissionFailed, data, response);
  },
  onRequestSuccess(data, response) {
    logger.info(MESSAGES.eventEmissionSucceeded, data, response);
  },
  
};

const tracker = newTracker(
  trackerConfiguration,
  emitterConfiguration,
);

export default tracker;
