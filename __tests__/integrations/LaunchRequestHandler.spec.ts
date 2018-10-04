import {VirtualAlexa} from "virtual-alexa";
import {handler} from "../../index";

const alexa = VirtualAlexa.Builder()
  .applicationID(process.env.SKILL_ID)
  .handler(handler)
  .interactionModelFile("./interaction_models/model_ja-JP.json")
  .create();

describe("launchResponse", async () => {
  it("response launch message", async () => {
    const launchResponse = await alexa.launch();
    const responseSSML = launchResponse.response.outputSpeech.ssml;
    expect(responseSSML).toBe("<speak>今日の気分はいかがですか？</speak>");
  });
});
