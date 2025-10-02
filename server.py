from flask import Flask, request, render_template
app= Flask(__name__)

@app.route("/")
def home():
    return render_template('serveur.html')

@app.route("/signin", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    data = request.form
    print(data)
    
    if data["username"] == "tom_parois" and data["password"] == "142024":
        return render_template('admin.html', status="Epique")
    else:
        return render_template('serveur.html')
    
if __name__ == '__main__':
    app.run(debug=True)



