module.exports = function(RED) {
    "use strict";
    function LocationNode(n) {
        RED.nodes.createNode(this,n);
        this.name = n.name;
        this.host = n.host;
        this.port = n.port;
    }
    RED.nodes.registerType("location",LocationNode);
}

