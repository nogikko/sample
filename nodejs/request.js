// Node.js のサンプル
var request = require('request');
var crypto = require('crypto');
var config = require('../config/config.json');

var endpoint = config['endpoint']
var apikey = config['apikey'];
var secretkey = config['secretkey'];


var timestamp = Date.now().toString();

// private get
/*var method = 'GET';
var path = '/v1/exchange/getPositions';
var data = {
    symbol: 'BTC_JPY',
    rowCount: 1
}*/

// private post
var method    = 'POST';
var path     = '/v1/exchange/order';
var data      = {
     symbol: 'BTC_JPY',
     side: 'Buy',
     executionType: 'Market',
     timeInForce: 'FAK',
     size: '0.02'
}

// public get
/*var method = 'GET';
var path = '/v1//exchange/getOrderBooks';
var data = {
     symbol: 'BTC_JPY',
}*/

//var path      = '/v1/exchange/getOrders';
//var path      = '/v1/exchange/getPositions';
//var path      = '/v1/exchange/getExecutions'
//var path      = '/v1/trade/getMarginInfo';

//var param     = '?symbol=BTC_JPY' 
//var param     = '?symbol=BTC&status=8' 
//var param     = '?symbol=BTC_JPY&status=Ordered&orderDateFrom=20180625&orderDateTo=20180628&page=1&rowCount=100' 
//var param     = '?symbol=BTC_JPY&status=Executed&page=1&rowCount=100' 




/*var body      = JSON.stringify({
     symbol: 'BTC_JPY'
});*/

if (method == 'GET') {
    var text = timestamp + method + path;
    var sign = crypto.createHmac('sha256', secretkey).update(text).digest('hex');

    var options = {
        url: endpoint + path,
        method: method,
        qs: data,
        headers: {
            'API-KEY': apikey,
            'API-TIMESTAMP': timestamp,
            'API-SIGN': sign,
        }
    };
    request(options, function (err, response, body) {
        console.log(body);
    });

}

if (method == 'POST') {
    var text = timestamp + method + path + JSON.stringify(data);
    var sign = crypto.createHmac('sha256', secretkey).update(text).digest('hex');

    var options = {
        url: endpoint + path,
        method: method,
        body: JSON.stringify(data),
        headers: {
            'API-KEY': apikey,
            'API-TIMESTAMP': timestamp,
            'API-SIGN': sign,
        }
    };
    request(options, function (err, response, body) {
        console.log(body);
    });

}

