// https://eshop-prices.com/prices?currency=USD

var format_price = (price_text) => {
    var regex = /^\$([\d\.]+)/;

    if (price_text.match(regex)) {
        return +price_text.match(regex)[1];
    }

    return -1;
};

Math.fixed = (number) => {
    return Math.floor(number * 100) / 100;
};

var array_average = (elmt) => {
    var sum = 0;
    for (var i = 0; i < elmt.length; i++) {
        sum += parseInt(elmt[i], 10);
    }

    return Math.fixed(sum / elmt.length);
};

var node_to_array = (node_list) => {
    return Array.prototype.slice.call(node_list);
};

var get_exchange_rate = () => {
    return 30;
};

var get_tw_name = async (en_name) => {
    return fetch(`https://www.google.com.tw/search?q=${encodeURIComponent(en_name)}`).then(res => res.text()).then(data => {
        var name = $(data).find('#rhs_block div[class~=kno-ecr-pt] span')[0].innerText.trim();

        return name;
    });
};

var main = () => {
    var game_list_tr = $$('body > div > table > tbody > tr');
    var raw_data = game_list_tr.map(tr => {
        var game_name_th = tr.querySelector('th');
        var game_price_list_td = node_to_array(tr.querySelectorAll('td'));
        var game_price_td = tr.querySelector('td.l');
        var game_name = game_name_th.innerText.trim();
        var game_price = game_price_td ? format_price(game_price_td.innerText.trim()) : 'UNKNOWN';

        var game_price_list = game_price_list_td.map(td => format_price(td.innerText.trim())).sort((a, b) => {
            return b - a;
        }).filter(a => a !== -1);

        var game_price_average = array_average(game_price_list.slice(0, game_price_list.length - 5));


        return {
            game_en_name: game_name,
            game_price: `$NT ${game_price * get_exchange_rate()}`,
            game_price_average: `$NT ${Math.fixed(game_price_average * get_exchange_rate())}`,
        };
    });

    console.log(raw_data);
    window.result = raw_data;
};

main();