from dotenv import load_dotenv
import os

env_file = ".env"
load_dotenv(env_file)

class Configuration:
    VERSION = os.getenv("VERSION", "1.0.0")
    PORT = int(os.getenv("PORT", 5000))
    FLASK_ENV = os.getenv("FLASK_ENV", "development")