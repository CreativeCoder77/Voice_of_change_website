from flask import Flask, render_template

app = Flask(__name__)

# Global variable for the website name
website_name = "Voices of Change"

# Use a context processor to make the website_name available in all templates
@app.context_processor
def inject_website_name():
    return dict(website_name=website_name)

# Routes
@app.route('/')
def index():
    return render_template("index.html")

@app.route("/women")
def women():
    return render_template("women.html")

@app.route("/children")
def children():
    return render_template("children.html")

@app.route("/equality")
def equality():
    return render_template("equality.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def join():
    return render_template("contact_us.html")

# Start the Flask app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
