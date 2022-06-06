import axios from "axios";
import config from "../config.json";


const telegramSendMessage = (req, res, next) => {
    let { data, channel } = req.body;
    let url = `https://api.telegram.org/bot${config.telegram.apiTokenBotTelegram["bot-boxgates"]}/sendMessage?chat_id=${config.telegram.channelTelegram.general}&text=`;


    if (data) {
        axios.get(`${url}${data}`)
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(404).send(error))
    }

    else {
        axios.get(`${url}no data`)
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(404).send(error))
    }
}

export default {
    telegramSendMessage
};

