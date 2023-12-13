from flask import Flask, render_template, url_for, flash

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/login')
def loginpage():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
