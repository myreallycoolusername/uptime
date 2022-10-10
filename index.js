const axios = require("axios")
const urls = ["https://s.plst.repl.co"]

const project = ["h"] //nama project kamu
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Berhasil Login Ke " + project + ", Time: "+ Date.now())).catch(() => {});
        })
    }, 60 * 1000);
