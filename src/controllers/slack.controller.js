import { WebClient } from "@slack/web-api";
import config from "../config.json";

const slack = new WebClient(config.slack.apiTokenBotSlack["bot-boxgates"]);
const channelId = config.slack.channelIdSlack["general"];

const slackSendMessage = async (req, res, next) => {
    let { data, channel } = req.body;

    try {
        let response = await slack.chat.postMessage({
            text: data,
            channel: channelId,
        });
        res.status(200).send(response);

    } catch (err) {
        res.status(404).send(err);
    }
}

export default {
    slackSendMessage
}