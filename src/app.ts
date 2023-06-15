import express from "express";
import { ChattyServer } from "./setupServer";
import dbConnection from "./setupDatabase";
import { config } from "./config";

class App {
  public async initialize() {
    this.loadConfig();
    await dbConnection();
    const app = express();
    const server = new ChattyServer(app);
    server.start();
  }

  private loadConfig() {
    config.validateConfig();
  }
}

const app = new App();
app.initialize();
