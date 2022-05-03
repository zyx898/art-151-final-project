
let audio = new Audio('../sounds/testing.mp3');
let decive;
let playing = false;

const sp500 =["MMM",'AOS', 'ABT', 'ABBV', 'ABMD', 'ACN', 'ATVI', 'ADM', 'ADBE', 'ADP', 'AAP', 'AES', 'AFL', 'A', 'AIG', 'APD', 'AKAM', 'ALK', 'ALB', 'ARE', 'ALGN', 'ALLE', 'LNT', 'ALL', 'GOOGL', 'GOOG', 'MO', 'AMZN', 'AMCR', 'AMD', 'AEE', 'AAL', 'AEP', 'AXP', 'AMT', 'AWK', 'AMP', 'ABC', 'AME', 'AMGN', 'APH', 'ADI', 'ANSS', 'ANTM', 'AON', 'APA', 'AAPL', 'AMAT', 'APTV', 'ANET', 'AIZ', 'T', 'ATO', 'ADSK', 'AZO', 'AVB', 'AVY', 'BKR', 'BLL', 'BAC', 'BBWI', 'BAX', 'BDX', 'WRB','BRK.B', 'BBY', 'BIO', 'TECH', 'BIIB', 'BLK', 'BK', 'BA', 'BKNG', 'BWA', 'BXP', 'BSX', 'BMY', 'AVGO', 'BR', 'BRO', 'BF.B', 'CHRW', 'CDNS', 'CZR', 'CPT', 'CPB', 'COF', 'CAH', 'KMX', 'CCL', 'CARR', 'CTLT', 'CAT', 'CBOE', 'CBRE', 'CDW', 'CE', 'CNC', 'CNP', 'CDAY', 'CERN', 'CF', 'CRL', 'SCHW', 'CHTR', 'CVX', 'CMG', 'CB', 'CHD', 'CI', 'CINF', 'CTAS', 'CSCO', 'C', 'CFG', 'CTXS', 'CLX', 'CME', 'CMS', 'KO', 'CTSH', 'CL', 'CMCSA', 'CMA', 'CAG', 'COP', 'ED', 'STZ', 'CEG', 'COO', 'CPRT', 'GLW', 'CTVA', 'COST', 'CTRA', 'CCI', 'CSX', 'CMI', 'CVS', 'DHI', 'DHR', 'DRI', 'DVA', 'DE', 'DAL', 'XRAY', 'DVN', 'DXCM', 'FANG', 'DLR', 'DFS', 'DISH', 'DIS', 'DG', 'DLTR', 'D', 'DPZ', 'DOV', 'DOW', 'DTE', 'DUK', 'DRE', 'DD', 'DXC', 'EMN', 'ETN', 'EBAY', 'ECL', 'EIX', 'EW', 'EA', 'EMR', 'ENPH', 'ETR', 'EOG', 'EPAM', 'EFX', 'EQIX', 'EQR', 'ESS', 'EL', 'ETSY', 'RE', 'EVRG', 'ES', 'EXC', 'EXPE', 'EXPD', 'EXR', 'XOM', 'FFIV', 'FDS', 'FAST', 'FRT', 'FDX', 'FITB', 'FRC', 'FE', 'FIS', 'FISV', 'FLT', 'FMC', 'F', 'FTNT', 'FTV', 'FBHS', 'FOXA', 'FOX', 'BEN', 'FCX', 'AJG', 'GRMN', 'IT', 'GE', 'GNRC', 'GD', 'GIS', 'GPC', 'GILD', 'GL', 'GPN', 'GM', 'GS', 'GWW', 'HAL', 'HIG', 'HAS', 'HCA', 'PEAK', 'HSIC', 'HSY', 'HES', 'HPE', 'HLT', 'HOLX', 'HD', 'HON', 'HRL', 'HST', 'HWM', 'HPQ', 'HUM', 'HII', 'IPGP', 'IQV', 'IRM', 'JBHT', 'JKHY', 'J', 'JNJ', 'JCI', 'JPM', 'JNPR', 'K', 'KEY', 'KEYS', 'KMB', 'KIM', 'KMI', 'KLAC', 'KHC', 'KR', 'LHX', 'LH', 'LRCX', 'LW', 'LVS', 'LDOS', 'LEN', 'LLY', 'LNC', 'LIN', 'LYV', 'LKQ', 'LMT', 'L', 'LOW', 'LUMN', 'LYB', 'MTB', 'MRO', 'MPC', 'MKTX', 'MAR', 'MMC', 'MLM', 'MAS', 'MA', 'MTCH', 'MKC', 'MCD', 'MCK', 'MDT', 'MRK', 'FB', 'MET', 'MTD', 'MGM', 'MCHP', 'MU', 'MSFT', 'MAA', 'MRNA', 'MHK', 'MOH', 'TAP', 'MDLZ', 'MPWR', 'MNST', 'MCO', 'MS', 'MOS', 'MSI', 'MSCI', 'NDAQ', 'NTAP', 'NFLX', 'NWL', 'NEM', 'NWSA', 'NWS', 'NEE', 'NLSN', 'NKE', 'NI', 'NDSN', 'NSC', 'NTRS', 'NOC', 'NLOK', 'NCLH', 'NRG', 'NUE', 'NVDA', 'NVR', 'NXPI', 'ORLY', 'OXY', 'ODFL', 'OMC', 'OKE', 'ORCL', 'OGN', 'OTIS', 'PCAR', 'PKG', 'PARA', 'PH', 'PAYX', 'PAYC', 'PYPL', 'PENN', 'PNR', 'PEP', 'PKI', 'PFE', 'PM', 'PSX', 'PNW', 'PXD', 'PNC', 'POOL', 'PPG', 'PPL', 'PFG', 'PG', 'PGR', 'PLD', 'PRU', 'PEG', 'PTC', 'PSA', 'PHM', 'PVH', 'QRVO', 'PWR', 'QCOM', 'DGX', 'RL', 'RJF', 'RTX', 'O', 'REG', 'REGN', 'RF', 'RSG', 'RMD', 'RHI', 'ROK', 'ROL', 'ROP', 'ROST', 'RCL', 'SPGI', 'CRM', 'SBAC', 'SLB', 'STX', 'SEE', 'SRE', 'NOW', 'SHW', 'SBNY', 'SPG', 'SWKS', 'SJM', 'SNA', 'SEDG', 'SO', 'LUV', 'SWK', 'SBUX', 'STT', 'STE', 'SYK', 'SIVB', 'SYF', 'SNPS', 'SYY', 'TMUS', 'TROW', 'TTWO', 'TPR', 'TGT', 'TEL', 'TDY', 'TFX', 'TER', 'TSLA', 'TXN', 'TXT', 'TMO', 'TJX', 'TSCO', 'TT', 'TDG', 'TRV', 'TRMB', 'TFC', 'TWTR', 'TYL', 'TSN', 'USB', 'UDR', 'ULTA', 'UAA', 'UA', 'UNP', 'UAL', 'UNH', 'UPS', 'URI', 'UHS', 'VLO', 'VTR', 'VRSN', 'VRSK', 'VZ', 'VRTX', 'VFC', 'VTRS', 'V', 'VNO', 'VMC', 'WAB', 'WMT', 'WBA', 'WBD', 'WM', 'WAT', 'WEC', 'WFC', 'WELL', 'WST', 'WDC', 'WRK', 'WY', 'WHR', 'WMB', 'WTW', 'WYNN', 'XEL', 'XYL', 'YUM', 'ZBRA', 'ZBH', 'ZION', 'ZTS'];

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(500);
    return Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  }



function rand(){ 
    return Math.floor(Math.random() * 100)
};

console.log(navigator);
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success,failure);
}

function failure(){
    console.log('Could not connect MIDI');
}


function updateDevices(event){
    console.log(event);
}


function success(midiAccess){
    midiAccess.addEventListener('statechange',updateDevices);
    const inputs = midiAccess.inputs;

    for (var output of midiAccess.outputs.values()){
        device = output;
        console.log('output device selected',device);
    }


    inputs.forEach(inputs => {
        console.log(inputs);
        inputs.addEventListener('midimessage',handleInput);
    });


}

function colorKeys(key,clr){
    device && device.send([0x90, key, clr]);
}


function handleInput(input){
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    switch(command){
        case 144:
            if(velocity >0){
                noteOn(note);
            }else{
                noteOff(note);
            }
            break;
    }
}


function clearAll(){
    for(let i = 0; i <100; i++){
        colorKeys(i,0);
    }

}

function colorAll(){
    for(let i = 0; i <100; i++){
        colorKeys(rand(),rand());
    }
}

function refresh(note){
    // let i = 0;
    // while(i < 100){
    //     setTimeout(function () {
    //         i++;
    //         colorKeys(i,i);
    //         console.log(i);
    //     }, 100);        
        
    // }
    colorKeys(note,note);

    
}


 function noteOn(note){

    console.log(`note:${note} //on`);
    // document.getElementById('imgShow').src = 'https://picsum.photos/'+(200+note)+'/' + (300 + note) +'?random=1';
    colorKeys(note,note);

    if(playing == false){
        playing = true;
        audioPlay();
        colorAll();
        var div = document.getElementById("centerTxt");
        if(div != null){
            div.parentNode.removeChild(div);
        }

        var backgroundimg = document.getElementById("bgImage");
        backgroundimg.setAttribute("src","https://media0.giphy.com/media/L0KYAjUe6QX0PDMQWR/giphy.gif?cid=ecf05e47xgu70olbtm2z2ehqd3ixiefrhdu7v04e9yykblm8&rid=giphy.gif&ct=g");
    }else{
        playing = false;
        audioPause();
        clearAll();
        var backgroundimg = document.getElementById("bgImage");
        backgroundimg.setAttribute("src","https://media.istockphoto.com/vectors/seamless-pattern-with-cartoon-musical-play-and-pause-vector-id1218523390?b=1&k=20&m=1218523390&s=170667a&w=0&h=XF38k_ycrYZ_TvaZsaYxmrfq6YD1rs6yu1ZplhTbWMY=");

    }

    // if(note == 99){

    // }
    
    // if(note == 98){

    // }

    // if(note == 64){
    //     let randomInt = getRandomIntInclusive();
    //     console.log(randomInt);
    //     check_Price(sp500[randomInt]);
    //     // clearAll();
    // }

    // if(note == 36){
    //     let i = 36;
    //     const myInterval = setInterval(function () {
    //         i++;
    //         if(i < 40){
    //             colorKeys(i,60);
    //             let j = 67;
    //             const myInterval2 = setInterval(function () {
    //                 j++;
    //                 if(j < 72){
    //                     colorKeys(j,60);
    //                 }
    //                 console.log(j);
    //             }, 0);
        
    //             if(j > 72){
    //                 clearInterval(myInterval2);
    //             }
    //         }
    //         console.log(i);
    //     }, 0);
    //     if(i > 39){
    //         clearInterval(myInterval);
    //     }

        
    // }

    // colorKeys(note,note)
    // if(note == 64){ //bottom right to check balance
    //     // get_account_balance()
    //     colorKeys(65,40);
    // }

 

    // if(note == 99){
    //     audioPlay();
    //     // document.getElementById("testelm").innerText = "Note 99 On";
    //     // b =255;
    //     // let p5_ = new p5();
    //     // console.log(p5_.map(0.5,0,1,0,100));
    //     // document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    // }
    
    // if(note == 98){
    //     audioPause();
    //     // document.getElementById("testelm").innerText = "Note 99 On";
    //     // b =200;
    //     // document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;

    // }
    // if(note == 97){
    //     document.getElementById("testelm").innerText = "Note 99 On";
    //     b =150;
    //     document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;

    // }
    // if(note == 96){
    //     document.getElementById("testelm").innerText = "Note 99 On";
    //     b =100;
    //     document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;

    // }


}

function audioPlay(){
    audio.play();
}


function audioPause(){
    audio.pause();
}

function noteOff(note){
    console.log(`note:${note} //off`);
    // if(note == 71){
    //     document.getElementById("testelm").innerText = "Note 99 off";
    //     document.getElementById('testelm').style.backgroundColor = `rgba(255,255,255,1)`;
    // }
}
