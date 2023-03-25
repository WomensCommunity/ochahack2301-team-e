var api_url = 'https://script.google.com/macros/s/AKfycbz9ZnXx8mRj6HS2NqPef7ZXX_TlnNqIUAPSsLyz9KERoGtDXusjaEwYahQKV32_aP_-ng/exec'; //生成したAPIのURLを指定

fetch(api_url)
.then(function (fetch_data) {
    return fetch_data.json();  
})
.then(function (json) {
for (var i in json) {
    console.log(json[i].name);
}
});

var api_url = 'https://script.google.com/macros/s/AKfycbz9ZnXx8mRj6HS2NqPef7ZXX_TlnNqIUAPSsLyz9KERoGtDXusjaEwYahQKV32_aP_-ng/exec'; //生成したAPIのURLを指定


fetch(api_url)
.then(function (fetch_data) {
return fetch_data.json();
})
.then(function (json) {
for (var i in json) {
    // jsonの要素数だけ回す

    var base_element = document.getElementsByClassName('product-item js-based'); //元となるHTMLの要素を指定
    var clone_element = base_element[0].cloneNode(true); //元となるHTMLの要素を複製
    
    clone_element.classList.remove('js-based'); //複製した要素からクラス削除
    clone_element.querySelector('.work-date').textContent = json[i].date; 
    clone_element.querySelector('.team').textContent = json[i].team; 
    clone_element.querySelector('.name').textContent = json[i].name; 

    var url = json[i].url;
    var git = json[i].git;

    // clone_element.querySelector('.url').textContent = json[i].url; 
    // clone_element.querySelector('.git').innerText = json[i].git; 

    clone_element.querySelector('#name-url').setAttribute( 'href', url ); //href属性を設定
    clone_element.querySelector('#git-url').setAttribute( 'href', git ); //href属性を設定
    
    json[i].colors.forEach(color => {
    if( color ) {

        var base_color_element = clone_element.querySelector('.colors .js-based'); //元となるHTMLの要素を指定
        var color_clone_element = base_color_element.cloneNode(true); //元となるHTMLの要素を複製
        
        color_clone_element.classList.remove('js-based'); //複製した要素からクラス削除
        // const samp = document.querySelector('#aiu');
        // console.log(samp);
        // color_clone_element.querySelector('img').setAttribute( 'src', color ); //src属性を設定
        
        base_color_element.parentNode.appendChild(color_clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
    }
    });
    
    base_element[0].parentNode.appendChild(clone_element); //元となるHTMLの要素の後ろに複製した要素を追加
}
});