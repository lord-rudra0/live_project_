from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for the app
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/teammates")
def teammates():
    return {"teammates": ["Raju", "Neil", "Nandhu", "Rudra"]}

if __name__ == "__main__":
    app.run(debug=True)
