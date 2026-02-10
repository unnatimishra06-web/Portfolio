from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows frontend (HTML/JS) to connect with backend

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # For now, just print the message in terminal
    print(f"New message from {name} ({email}): {message}")

    return jsonify({"message": "Message received successfully!"})


if __name__ == '__main__':
    app.run(debug=True)
