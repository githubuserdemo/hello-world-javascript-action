import core from "@actions/core";
import github from "@actions/github";
import { add, sub } from "./custommodule";

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);

  //   custom stuff
  console.log(add(1, 2));
  console.log(sub(3, 2));
} catch (error) {
  core.setFailed(error.message);
}
