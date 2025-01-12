from flask import Flask

app = Flask(__name__)

@app.route("/teammates")
def teammates():
    return {"teammates": ["Rajalakshmi", "Neil", "Nandhu", "Rudra"]}

if __name__ == "__main__":
    app.run(debug=True)
