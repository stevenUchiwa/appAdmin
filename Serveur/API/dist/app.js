"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3001;
const mongoURI = process.env.MONGO_URI;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//Conexion mongo
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("MongoDB Connected");
})
    .catch((err) => console.log(err));
//# sourceMappingURL=app.js.map