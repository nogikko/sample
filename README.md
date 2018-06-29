# Sample API
サンプル



# HTTP リクエスト

## 設定ファイル

config.jsonにエンドポイントを設定します  
Private APIを使用する場合はAPIキーとシークレットキーも設定してください  

/config/config.json
```
{
   "endpoint"  : "エンドポイント",
   "apikey"    : "APIキー",
   "secretkey" : "シークレットキー"
}
```

HTTP用のリクエストモジュールを各言語インストールします
### Javascript
```
npm install -g request
```

### Python
```
pip install requests
```


## Public API

必要に応じて、実行したいAPIのパラメータを変更してください
### GET
#### JavaScript

nodejs/request.js
```
var method = 'GET';
var path = '/v1/exchange/getOrderBooks';
var data = {
     symbol: 'BTC_JPY',
}
```

#### Python
python2/request.js
```
method         = 'GET'
path           = '/v1/exchange/getOrderBooks'
data      = {
   'symbol' : 'BTC_JPY'
}
```

## Private API

必要に応じて、実行したいAPIのパラメータを変更してください
### GET

### JavaScript

request.js
```
var method = 'GET';
var path = '/v1/exchange/getPositions';
var data = {
    symbol: 'BTC_JPY',
    rowCount: 1
}
```

### Python
prequest.js
```
Private GET
method         = 'GET'
path           = '/v1/exchange/getPositions'
data      = {
   'symbol' : 'BTC_JPY'
}
```

### POST
request.js
### JavaScript
```
var method    = 'POST';
var path     = '/v1/exchange/order';
var data      = {
     symbol: 'BTC_JPY',
     side: 'Buy',
     executionType: 'Market',
     timeInForce: 'FAK',
     size: '0.02'
}
```

### Python
request.js
```
method         = 'POST'
path           = '/v1/exchange/order'
data      = {
    'symbol': 'BTC_JPY',
    'side': 'Buy',
    'executionType': 'Market',
    'timeInForce': 'FAK',
    'size': '0.02'
}
```

## 実行方法

#### JavaScript
```
node request.js
```

#### Python
```
python request.js
```



