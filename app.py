from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def index():
    return form()

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/insert/', methods = ['POST', 'GET'])
def data():
    if request.method == 'GET':
        return "The URL /data is accessed directly. Try going to '/form' to submit form"
    if request.method == 'POST':
        form_data = request.form
        return render_template('data.html',form_data = form_data)