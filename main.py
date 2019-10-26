import os
from flask import send_from_directory
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def admin():
    return render_template("dash.html")

@app.route("/stats")
def graphs():
    return render_template("graphs.html")

@app.route("/criminal")
def stream():
    return render_template("stream.html")

@app.route("/feedback")
def feedback():
    return render_template("report.html")



if __name__ == "__main__":
    app.run(debug=True)
