import os
from flask import Flask, render_template

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    @app.route('/')
    def home():
        return render_template("rock.html")
    @app.route('/2')
    def home2():
        return render_template("cat.html")
    return app
