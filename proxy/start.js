const app = require("./index");
const config = require("./config");

app.listen(config.get('proxy_port'), () => {
    console.log(`Server running at localhost:${config.get('proxy_port')}`);
});