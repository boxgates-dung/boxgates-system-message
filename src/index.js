import express from "express";
import cors from "cors";
import routes from "./routes";
import config from "./config.json"

const app = express();

// Congfig core allow for other web
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

routes(app, express.Router());

const PORT = config.PORT || 4432;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
