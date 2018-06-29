import requests
import json
import hmac
import hashlib
from datetime import datetime

jsonFile        = open('../config/config.json' , 'r') 
config         = json.load(jsonFile)

endPoint       = config['endpoint']
apiKey         = config['apikey']
secretKey      = config['secretkey']

timestamp = datetime.now().strftime('%s000')

# Public GET
#method         = 'GET'     
#path           = '/v1/exchange/getOrderBooks'
#data      = {
#   'symbol' : 'BTC_JPY'
#}

# Private GET
#method         = 'GET'     
#path           = '/v1/exchange/getPositions'
#data      = {
#   'symbol' : 'BTC_JPY'
#}

# Private POST
method         = 'POST'     
path           = '/v1/exchange/order'
data      = {
    'symbol': 'BTC_JPY',
    'side': 'Buy',
    'executionType': 'Market',
    'timeInForce': 'FAK',
    'size': '0.02'
}

if method == 'GET':
  text   =  timestamp + method + path
  sign   = hmac.new(str(secretKey), text, hashlib.sha256).hexdigest()

  headers = {
     "API-KEY": apiKey,
     "API-TIMESTAMP": timestamp,
     "API-SIGN": sign,
  }
  res = requests.get(endPoint + path ,headers=headers ,params=data)
  print (res.json())

if method == 'POST':
  text   =  timestamp + method + path + json.dumps(data)
  sign   = hmac.new(str(secretKey), text, hashlib.sha256).hexdigest()

  headers = {
     "API-KEY": apiKey,
     "API-TIMESTAMP": timestamp,
     "API-SIGN": sign,
  }
  res = requests.post(endPoint + path ,headers=headers ,data=json.dumps(data))
  print (res.text)
