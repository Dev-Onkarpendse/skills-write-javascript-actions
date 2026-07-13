import getJoke from ".joke.js";
import * as core from "@actions/core"

async function run() {
    console joke = await getJoke();
    console.setOutput("jock",joke)
}