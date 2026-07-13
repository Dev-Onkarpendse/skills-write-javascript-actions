import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers:{
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action Github Skills exercise.",
    },
    json: true,
};

async function getJoke(){
Const res = await request(options);
return res.joke;
}

export default getJoke;