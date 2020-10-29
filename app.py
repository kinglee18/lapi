from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

@app.route('/', methods=['GET'])
def home():
    return "<h1>App en funcionamiento</p>"



@app.route('/contact-form', methods=['POST'])
def get_form():
    print(request.json)
    return jsonify({'task': 'task'}), 200
app.run()