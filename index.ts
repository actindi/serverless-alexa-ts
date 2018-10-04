import { HandlerInput, SkillBuilders } from "ask-sdk";
import { Handler } from "aws-lambda";

import CancelAndStopIntentHandler from "./src/handlers/CancelAndStopIntentHandler";
import ErrorHandler from "./src/handlers/ErrorHandler";
import FeelingIntentHandler from "./src/handlers/FeelingIntentHandler";
import HelpIntentHandler from "./src/handlers/HelpIntentHandler";
import LaunchRequestHandler from "./src/handlers/LaunchRequestHandler";

// uncomment to use dynamodb local
// import * as AWS from "aws-sdk";
// if (process.env.IS_LOCAL) {
//   AWS.config.update({
//     accessKeyId: "dummy",
//     dynamodb: {
//       endpoint: "http://localhost:8100",
//       region: "us-east-1",
//     },
//     secretAccessKey: "dummy",
//   });
// }

export const handler: Handler = SkillBuilders.standard()
  .withSkillId(process.env.SKILL_ID)
  .addRequestHandlers(
    LaunchRequestHandler,
    FeelingIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
  )
  .addErrorHandlers(ErrorHandler)
  // .withTableName(process.env.DYNAMODB_TABLE) // uncomment to use dynamodb
  // .withAutoCreateTable(true)
  .lambda();
