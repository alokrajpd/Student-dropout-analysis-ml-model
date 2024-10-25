from flask import Flask, render_template, request
import pickle
import pandas as pd
app = Flask(__name__)


model=pickle.load(open('model1.pkl','rb'))

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/predict',methods=['POST','GET'])
def predict():
    age = int(request.form.get('age'))
    income = int(request.form.get('income'))
    marks = int(request.form.get('result'))
    nos = int(request.form.get('siblings'))
    cs = int(request.form.get('Standard'))
    t = int(request.form.get('school'))
    gen = int(request.form.get('gender'))

    result = model.predict([[age, income, marks,nos,cs , t ,gen]])[0]
    if result ==1:
        return render_template('index.html' , label=1)
    else:
        return render_template('index.html', label=-1)

if __name__ == '__main__':
    app.run(debug=True)