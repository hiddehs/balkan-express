import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-GEZtOqgzM0vH1XffVPQTFc4n",
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


export default openai
