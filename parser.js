JSON.stringify($$('body > div > table > thead > tr > th > img').map(function (e) {
    return {
        title: e.title,
		as: e.nextSibling.data.trim(),
        alt: e.alt,
        src: e.src,
    }
}), null, 4);

var country = [
    {
        "title": "Australia",
        "as": "AUS",
        "alt": "🇦🇺",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
        "ch": "澳大利亞"
    },
    {
        "title": "Austria",
        "as": "AUT",
        "alt": "🇦🇹",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg",
        "ch": "奧地利"
    },
    {
        "title": "Belgium",
        "as": "BEL",
        "alt": "🇧🇪",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg",
        "ch": "比利時"
    },
    {
        "title": "Bulgaria",
        "as": "BGR",
        "alt": "🇧🇬",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg",
        "ch": "保加利亞"
    },
    {
        "title": "Canada",
        "as": "CAN",
        "alt": "🇨🇦",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
        "ch": "加拿大"
    },
    {
        "title": "Croatia",
        "as": "HRV",
        "alt": "🇭🇷",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg",
        "ch": "克羅地亞"
    },
    {
        "title": "Cyprus",
        "as": "CYP",
        "alt": "🇨🇾",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg",
        "ch": "塞浦路斯"
    },
    {
        "title": "Czech Republic",
        "as": "CZE",
        "alt": "🇨🇿",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg",
        "ch": "捷克共和國"
    },
    {
        "title": "Denmark",
        "as": "DNK",
        "alt": "🇩🇰",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg",
        "ch": "丹麥"
    },
    {
        "title": "Estonia",
        "as": "EST",
        "alt": "🇪🇪",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg",
        "ch": "愛沙尼亞"
    },
    {
        "title": "Finland",
        "as": "FIN",
        "alt": "🇫🇮",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg",
        "ch": "芬蘭"
    },
    {
        "title": "France",
        "as": "FRA",
        "alt": "🇫🇷",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg",
        "ch": "法國"
    },
    {
        "title": "Germany",
        "as": "DEU",
        "alt": "🇩🇪",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg",
        "ch": "德國"
    },
    {
        "title": "Greece",
        "as": "GRC",
        "alt": "🇬🇷",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg",
        "ch": "希臘"
    },
    {
        "title": "Hungary",
        "as": "HUN",
        "alt": "🇭🇺",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg",
        "ch": "匈牙利"
    },
    {
        "title": "Ireland",
        "as": "IRL",
        "alt": "🇮🇪",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg",
        "ch": "愛爾蘭"
    },
    {
        "title": "Italy",
        "as": "ITA",
        "alt": "🇮🇹",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg",
        "ch": "意大利"
    },
    {
        "title": "Japan",
        "as": "JPN",
        "alt": "🇯🇵",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg",
        "ch": "日本"
    },
    {
        "title": "Latvia",
        "as": "LVA",
        "alt": "🇱🇻",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg",
        "ch": "拉脫維亞"
    },
    {
        "title": "Lithuania",
        "as": "LTU",
        "alt": "🇱🇹",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg",
        "ch": "立陶宛"
    },
    {
        "title": "Luxembourg",
        "as": "LUX",
        "alt": "🇱🇺",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg",
        "ch": "盧森堡"
    },
    {
        "title": "Malta",
        "as": "MLT",
        "alt": "🇲🇹",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg",
        "ch": "馬耳他"
    },
    {
        "title": "Mexico",
        "as": "MEX",
        "alt": "🇲🇽",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fd.svg",
        "ch": "墨西哥"
    },
    {
        "title": "Netherlands",
        "as": "NLD",
        "alt": "🇳🇱",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg",
        "ch": "荷蘭"
    },
    {
        "title": "New Zealand",
        "as": "NZL",
        "alt": "🇳🇿",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg",
        "ch": "新西蘭"
    },
    {
        "title": "Norway",
        "as": "NOR",
        "alt": "🇳🇴",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg",
        "ch": "挪威"
    },
    {
        "title": "Poland",
        "as": "POL",
        "alt": "🇵🇱",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg",
        "ch": "波蘭"
    },
    {
        "title": "Portugal",
        "as": "PRT",
        "alt": "🇵🇹",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg",
        "ch": "葡萄牙"
    },
    {
        "title": "Romania",
        "as": "ROU",
        "alt": "🇷🇴",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg",
        "ch": "羅馬尼亞"
    },
    {
        "title": "Russia",
        "as": "RUS",
        "alt": "🇷🇺",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg",
        "ch": "俄國"
    },
    {
        "title": "Slovakia",
        "as": "SVK",
        "alt": "🇸🇰",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg",
        "ch": "斯洛伐克"
    },
    {
        "title": "Slovenia",
        "as": "SVN",
        "alt": "🇸🇮",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg",
        "ch": "斯洛文尼亞"
    },
    {
        "title": "South Africa",
        "as": "ZAF",
        "alt": "🇿🇦",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
        "ch": "南非"
    },
    {
        "title": "Spain",
        "as": "ESP",
        "alt": "🇪🇸",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg",
        "ch": "西班牙"
    },
    {
        "title": "Sweden",
        "as": "SWE",
        "alt": "🇸🇪",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg",
        "ch": "瑞典"
    },
    {
        "title": "Switzerland",
        "as": "CHE",
        "alt": "🇨🇭",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg",
        "ch": "瑞士"
    },
    {
        "title": "United Kingdom",
        "as": "GBR",
        "alt": "🇬🇧",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
        "ch": "英國"
    },
    {
        "title": "United States",
        "as": "USA",
        "alt": "🇺🇸",
        "src": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
        "ch": "美國"
    }
];

JSON.stringify($$('body > div.wrapper > div > table > tbody > tr').map(function (e) {
    var country = $('td:nth-child(2)', e).innerText.trim();
    var expire = $('td:nth-child(3)', e).innerText.trim();
    var price = $('td:nth-child(4)', e).innerText.trim();

    return {
        country,
        expire,
        price,
    };
}), null, 4);

var prices = [
    {
        "country": "Canada",
        "expire": "On sale until Jun. 21, 2018",
        "price": "$26.55"
    },
    {
        "country": "Mexico",
        "expire": "On sale until Jun. 21, 2018",
        "price": "$26.62"
    },
    {
        "country": "United States",
        "expire": "On sale until Jun. 21, 2018",
        "price": "$29.99"
    },
    {
        "country": "Russia",
        "expire": "",
        "price": "$56.89"
    },
    {
        "country": "Sweden",
        "expire": "",
        "price": "$62.37"
    },
    {
        "country": "South Africa",
        "expire": "",
        "price": "$63.09"
    },
    {
        "country": "Poland",
        "expire": "",
        "price": "$64.98"
    },
    {
        "country": "United Kingdom",
        "expire": "",
        "price": "$66.23"
    },
    {
        "country": "Australia",
        "expire": "",
        "price": "$66.92"
    },
    {
        "country": "Norway",
        "expire": "",
        "price": "$67.58"
    },
    {
        "country": "New Zealand",
        "expire": "",
        "price": "$69.45"
    },
    {
        "country": "Luxembourg",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Latvia",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Malta",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Netherlands",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Romania",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Slovenia",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Slovakia",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Austria",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Hungary",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Portugal",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Cyprus",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Belgium",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Germany",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Bulgaria",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Estonia",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Spain",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Finland",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "France",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Greece",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Croatia",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Ireland",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Italy",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Lithuania",
        "expire": "",
        "price": "$69.67"
    },
    {
        "country": "Denmark",
        "expire": "",
        "price": "$69.99"
    },
    {
        "country": "Switzerland",
        "expire": "",
        "price": "$70.26"
    },
    {
        "country": "Czech Republic",
        "expire": "",
        "price": "$74.40"
    }
];

