from flask import Flask, render_template, request, redirect, url_for, jsonify
import json
import os

app = Flask(__name__)

# 📁 JSON File Path
USER_FILE = 'users.json'

# 📌 Helper: Load users from JSON
def load_users():
    if not os.path.exists(USER_FILE):
        with open(USER_FILE, 'w') as f:
            json.dump([], f)
    with open(USER_FILE, 'r') as f:
        return json.load(f)

# 📌 Helper: Save users to JSON
def save_users(users):
    with open(USER_FILE, 'w') as f:
        json.dump(users, f, indent=4)

# 🏠 Home Page
@app.route('/')
def home():
    return render_template('index.html')  # change to your homepage file

# 🔐 Login Page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        uname = request.form['username']
        pwd = request.form['password']
        users = load_users()

        for user in users:
            if user['username'] == uname and user['password'] == pwd:
                return f"<h2>Welcome back, {uname}! 🎉</h2>"
        return "<h2>❌ Invalid credentials. Try again!</h2>"

    return render_template('login.html')

# 🆕 Signup Page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        uname = request.form['username']
        pwd = request.form['password']
        age = request.form.get('age')
        adopted = request.form.get('adopted')

        users = load_users()

        # 🔁 Check if user already exists
        for user in users:
            if user['username'] == uname:
                return "<h2>⚠️ Username already exists. Choose another one!</h2>"

        users.append({
            "username": uname,
            "password": pwd,
            "age": age,
            "adopted": adopted
        })
        save_users(users)
        return f"<h2>🎉 Signup successful! Welcome, {uname}!</h2>"

    return render_template('signup.html')

# 🚀 Run the app
if __name__ == '__main__':
    app.run(debug=True)
