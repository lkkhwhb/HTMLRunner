from flask import Blueprint, jsonify
from datetime import datetime, UTC
from config import Configuration
health_bp = Blueprint("health", __name__)

@health_bp.get("/health")
def health():
    return jsonify({
        "status": "healthy",
        "version": Configuration.VERSION,
        "timestamp": datetime.now(UTC).isoformat()
    }), 200