const axios = require("axios")
const urls = [""] //link project kamu
const project = [""] //nama project kamu
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Berhasil Login Ke " + project + ", Time: "+ Date.now())).catch(() => {});
        })
    }, 60 * 1000);
