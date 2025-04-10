import dotenv from 'dotenv';
dotenv.config();

export const SNOWPLOW = {
  namespace: process.env.SNOWPLOW_NAMESPACE || 'namepspace-default',
  appId: process.env.SNOWPLOW_APP_ID || "app-id-default",
  encodeBase64: process.env.SNOWPLOW_ENCODE_BASE64 === "true" || false,
  endpoint: process.env.SNOWPLOW_ENDPOINT || "",
  bufferSize: parseInt(process.env.SNOWPLOW_BUFFER_SIZE || "1"),
};