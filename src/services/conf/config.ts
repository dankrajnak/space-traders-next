import { Configuration } from "@/../packages/spacetraders-sdk";

const Config = new Configuration({
  accessToken: process.env.API_TOKEN,
});

export default Config;
