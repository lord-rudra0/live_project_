from flask import Flask, request, jsonify, flask_cors, Werkzeug
import json, requests
import sqlite3
import sqlalchemy as db
from flask_bcrypt import Bcrypt

app=Flask(__name__)
bycript=Bcrypt(app)

app.config['sqlalchemy_database_url'] = 'sqlite:///db.sqlite3'

engine = db.create_engine(app.config['sqlalchemy_database_url'])
connection = engine.connect()
metadata = db.MetaData()

# Create table

table = db.Table('users', metadata,
    db.Column('name', db.String(255)),
    db.Column('email', db.String(255), primary_key=True),
    db.Column('password', db.String(255))
)

@app.route('/insert', methods=['POST'])
def insert():
    data = request.get_json()
    query = db.insert(table).values(
        name=data['name'],
        email=data['email'],
        password=bycript.generate_password_hash(data['password']).decode('utf-8'),
        is_Valid=bycript.check_password_hash(data['check_password'], data['password'])     
    )
    ResultProxy = connection.execute(query)

    return jsonify({'message': 'success'})



@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    query = db.select([table]).where(table.columns.email == data['email'])
    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()
    if ResultSet[0][2] == data['password']:
        return jsonify({'message': 'success'})
    else:
        return jsonify({'message': 'failed'})
    
    
@app.route('/update', methods=['PUT'])
def update():
    data = request.get_json()
    query = db.update(table).where(table.columns.email == data['email']).values(
        name=data['name'],
        password=data['password']
    )
    ResultProxy = connection.execute(query)
    return jsonify({'message': 'success'})

@app.route('/delete', methods=['DELETE'])
def delete():
    data = request.get_json()
    query = db.delete(table).where(table.columns.email == data['email'])
    ResultProxy = connection.execute(query)
    return jsonify({'message': 'success'})

@app.route('/forget_password', methods=['POST'])
def forget_password():
    data = request.get_json()
    query = db.select([table]).where(table.columns.email == data['email'])
    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()
    if ResultSet[0][2] == data['password']:
        return jsonify({'message': 'success'})
    else:
        return jsonify({'message': 'failed'})
    

    
    

