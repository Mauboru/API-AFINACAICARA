
module.exports = {
    apps: [
        {
            name: "API-AFINACAICARA",
            script: "ts-node src/server.ts",
            instances: 1,
            exec_mode: "fork",
            env: {
                NODE_ENV: "production",
                PORT: 3002
            }
        }
    ]
};
