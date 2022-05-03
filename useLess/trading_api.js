const base_url = "https://paper-api.alpaca.markets"
const apiKey = "PKLERAVSWKJCY0QLS6QJ"
const sercet_key = "KD7sR4iOYCSWVivElOJgikHyaI5prfcnRmAYYF0w"
const headers = {
    "APCA-API-KEY-ID":apiKey,
    "APCA-API-SECRET-KEY":sercet_key,
};




function check_Price(symbol){
    jQuery.ajax({
        url: `https://data.alpaca.markets/v2/stocks/${symbol}/trades/latest`,
        type: 'GET',
        headers:headers,
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                console.log("Symbol: " + response.responseJSON.symbol);
                console.log("Current Price: " + response.responseJSON.trade.p);
                console.log("Current Time: " + response.responseJSON.trade.t);
            }else{
                console.log(response.status)
            }
        },
    });



}

function create_Order(side,symbol,qty){
    data = {
        symbol:symbol,
        qty:qty,
        side:side,
        type:"market",
        time_in_force:'gtc'
    };
    jQuery.ajax({
            url: `${base_url}/v2/orders`,
            type: 'POST',
            dataType: 'JSON',
            data:JSON.stringify(data),
            headers:headers,
            async:false,
            crossDomain:true,
            complete: function(response) {
                if(response.status === 200 && response.readyState === 4){
                    console.log(response.responseJSON)
                }else{
                    console.log(response.status)
                }
            },
            
    });
}

let buying_power;
let cash;
let equity;
let current_investment;
let total_pl;


function get_account_balance(){
    jQuery.ajax({
        url: `${base_url}/v2/account`,
        type: 'GET',
        headers:headers,
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                // console.log(response.responseJSON);
                buying_power = response.responseJSON.buying_power;
                cash = response.responseJSON.cash;
                equity = response.responseJSON.equity;
                current_investment = response.responseJSON.long_market_value;
                total_pl = equity - 100000;

                console.log(`Total Equity: $${equity}  Cash: $${cash}  Stocks Wroth: $${current_investment}  Profit&Loss: ${total_pl.toFixed(2)}`)
                // console.log("Buying Power: "+buying_power)
                // console.log("Cash: "+cash)
                // console.log("Stocks: "+current_investment)
            }else{
                console.log(response.status)
            }
        },
            
    });
}


function get_all_assets(){
    jQuery.ajax({
        url: `${base_url}/v2/positions`,
        type: 'GET',
        headers:headers,
        async:false,
        crossDomain:true,
        complete: function(response) {
            if(response.status === 200 && response.readyState === 4){
                console.log("You Currently Hold:");
                for(let i =0; i<response.responseJSON.length; i++){
                    let symbol = response.responseJSON[i].symbol;
                    let pl = response.responseJSON[i].unrealized_pl;
                    let qty = response.responseJSON[i].qty;
                    let avg_entry_price = response.responseJSON[i].avg_entry_price;
                    console.log(`Symbol: ${symbol}  Qunality: ${qty}  AveragePrice: ${avg_entry_price}  Unrealized_PL: ${pl}  `)
                }
            }else{
                console.log(response.status)
            }
        },
            
    });
}



// get_account_balance()
// get_all_assets();

// create_Order(
//     'buy',
//     'TWTR',
//     10
// );