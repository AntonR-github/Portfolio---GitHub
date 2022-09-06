if(!process.env.NODE_ENV) process.env.NODE_ENV = "development";

class Config {
    public isDevelopment = process.env.NODE_ENV === "development";
    public isProduction = process.env.NODE_ENV === "production";
    public port = 0;
    public sqlHost = "";
    public sqlUser = "";
    public sqlPassword = "";
    public sqlDatabase = "";
}

class DevelopmentConfig extends Config {
    public port = 3001;
    public sqlHost = "localhost";
    public sqlUser = "root";
    public sqlPassword = "";
    public sqlDatabase = "portfolio"; // Database Name
}

class ProductionConfig extends Config {
    public port = +process.env.PORT;
    public sqlHost = "us-cdbr-east-06.cleardb.net";
    public sqlUser = "b38a9b15b2ade6";
    public sqlPassword = "72ba344b";
    public sqlDatabase = "heroku_1f262872bf9e6a4";
}

// mysql://b38a9b15b2ade6:72ba344b@us-cdbr-east-06.cleardb.net/heroku_1f262872bf9e6a4?reconnect=true

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
