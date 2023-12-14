from flask import Flask, render_template, url_for, flash

app = Flask(__name__)

components = ['Ana Clara', 'Pedro Vinícius', 'Enzo Lucattony',
            'Angela', 'Ana Luiza', 'Sarah Beatriz', 'Diego', 'Jamilly']

@app.route('/')
def homepage():
    return render_template('index.html', integrants=components)

@app.route('/login')
def loginpage():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
