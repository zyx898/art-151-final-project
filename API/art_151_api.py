# encoding: utf-8
from ast import keyword
import json
from httplib2 import Response
import random
import requests
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

auth = "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoienl4MTExOTAxIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL2RlZmF1bHQtdXNlcj1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9wYWludC1wcm9kIiwiYXVkIjoicGFpbnQtcHJvZCIsImF1dGhfdGltZSI6MTY1MTUzMjQ0MCwidXNlcl9pZCI6Ik94RE5kMzFxemFUQVZ1eTZHNGZ3U0VuelJBVjIiLCJzdWIiOiJPeEROZDMxcXphVEFWdXk2RzRmd1NFbnpSQVYyIiwiaWF0IjoxNjUxNjAyMzA0LCJleHAiOjE2NTE2MDU5MDQsImVtYWlsIjoienl4MTExOTAxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA3ODA3MjA4NjY0NDkwMzI5ODM1Il0sImVtYWlsIjpbInp5eDExMTkwMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.uffDcjWmqtmSWFKAIHH0aQhawAZa_v3e3Yw8UWs9_uZWxlZhcrad58q1Ka9XayA62BmjU8HnHsIR-wyq8FcfbTjb4qF8dd7tlQRy-6ZCighxAlhCZw2DEDSckCM3Y9C7NrjdT4GLwwjjc92ZeJoTwQ4ecEtISkSfHyOpskFQ0g7Gx7xi_j0AAF73qrpROm3HVLKjyF_2jegTl44XbDwJ9iQCJbUxO6EsZ6bhEqXvqRKnEUgtsm4PLoPXBbSJ8hvTQz6O5DN7zZW9BA1WO6nDkzIwTDye2xrbxbx1Z2s79squLaFaL_Tm8eDJFKq6zZaZEvC0s3NOSWwSNYKVfhJIrw"


@app.route('/updateAuth', methods=['GET'])
def updateAuth():
    auth = request.args.get("auth", default="", type=str)
    return jsonify({"msg":"success"})



@app.route('/createTask', methods=['GET'])
def createT():
    headers = {
        'authority': 'app.wombo.art',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'app_version': '1.5',
        'authorization': auth,
        'content-type': 'text/plain;charset=UTF-8',
        'dnt': '1',
        'origin': 'https://app.wombo.art',
        'referer': 'https://app.wombo.art/',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    }
    data = '{"premium":false}'
    response = requests.post('https://app.wombo.art/api/tasks',headers=headers, data=data)
    print(response.status_code)
    print(response.text)
    if(response.status_code == 200):
        responseJson = json.loads(response.text)
        print(response.text)
        return jsonify(responseJson)
    else:
        return jsonify({'error': 'Error Createting Tasks'})


#/createArt?taskId=sjfsldfj-klsdfjsd&keyword=hello world
@app.route('/createArt', methods=['GET'])
def createArt():
    taskId = request.args.get("taskId", default="", type=str)
    keyword = request.args.get("keyword", default="", type=str)
    style = request.args.get("style", default="", type=str)
    styleId = 3
    styleList = [21,1,22,4,5,11,3]
    if(style.lower() == "fantasyart"):
        styleId = 5
    elif(style.lower() == "mystical"):
        styleId = 11
    else:
        styleId = (random.choice(styleList))
        # psychedelic = 21
        # synthwave = 1
        # ghibli = 22
        # steampunk = 4
        # fantasy art = 5
        # mystical = 11
        # no style = 3



    headers = {
        'authority': 'app.wombo.art',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'app_version': '1.5',
        'authorization': auth,
        'content-type': 'text/plain;charset=UTF-8',
        'dnt': '1',
        'origin': 'https://app.wombo.art',
        'referer': 'https://app.wombo.art/',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    }

    data = {"input_spec":{"prompt":f"{keyword}","style":styleId,"display_freq":10}}

    response = requests.put(f'https://app.wombo.art/api/tasks/{taskId}', headers=headers, data=json.dumps(data))
    if(response.status_code == 200):
        responseJson = json.loads(response.text)
        print(response.text)
        return jsonify(responseJson)
    else:
        return jsonify({'error': 'Error Createting Tasks'})


@app.route('/getArt', methods=['GET'])
def createTask():
    taskId = request.args.get("taskId", default="", type=str)

    headers = {
        'authority': 'app.wombo.art',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'app_version': '1.5',
        'authorization': auth,
        'content-type': 'text/plain;charset=UTF-8',
        'dnt': '1',
        'origin': 'https://app.wombo.art',
        'referer': 'https://app.wombo.art/',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    }
    while True:
        response = requests.get(f'https://app.wombo.art/api/tasks/{taskId}',headers=headers)
        if(response.status_code == 200):
            responseJson = json.loads(response.text)
            if(responseJson["state"] != "generating"):
                return jsonify(responseJson)
        elif response.status_code == 304:
            print("Generatting Please Wait")
        else:
            return jsonify({'error': 'Error Createting Tasks'})

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8298)