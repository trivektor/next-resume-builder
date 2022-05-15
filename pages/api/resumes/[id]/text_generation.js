const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: req.body.prompt,
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  res.status(200).json(completion.data);
}
