from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import requests

load_dotenv(".env")

class ServerManager:
    def __init__(self):
        self.server_prefix = "SERVER"

    def startServer(self):
        app = Flask(__name__)
        CORS(app)
        app.run(debug=True)

server = ServerManager()
server.startServer()