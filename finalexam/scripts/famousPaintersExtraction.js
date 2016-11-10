(function addJQuery() {
    var elem = document.createElement('script');
    elem.src = 'https://code.jquery.com/jquery-2.2.4.min.js';
    document.getElementById('gsr').appendChild(elem);
})();
var collection = [];
var elems;

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function choosePainter() {
    elems = elems || $('.klitem');
    var maxLength = elems.length;
    if (maxLength > collection.length) {
        (elems[collection.length]).click();
    } else {
        download('painters.json', JSON.stringify(collection));
    }
};

setTimeout(function () {
    $('body').bind('DOMNodeInserted', function (event) {
        if (event.type == 'DOMNodeInserted' && event.target.id == 'rhs') {
            var elem = $(event.target);
            setTimeout(function () {
                var painter = {
                    work: [],
                    props: []
                };
                painter.name = elem.find('.kno-ecr-pt').text();
                painter.description = $(elem.find('.kno-rdesc span')[0]).text();
                painter.url = elem.find('.kno-rdesc a').attr('href');
                painter.image = elem.find('.img-kc-m img').attr('src');
                elem.find('._eFb').each(function (a, b) {
                    var es = $(b).find('span')
                    painter.props.push({ key: $(es[0]).text(), value: $(es[1]).text() });
                });

                $((elem.find('._nDd ._c4')[0]).children).each(function (a, b) {
                    var w = $(b).find('img');
                    var title = w.attr('alt');
                    var year = title.substr(title.indexOf("(") + 1);
                    year = year.substr(0, year.length - 1);
                    title = title.substr(0, title.indexOf("(") - 1);
                    painter.work.push({
                        image: w.attr('src'),
                        title: title,
                        year: year
                    });
                });

                collection.push(painter);
                choosePainter();
            }, 1000);
        }
    });

    choosePainter();

}, 5000);

