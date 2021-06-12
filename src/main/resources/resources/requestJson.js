/*
a. An event occurs (mouse click):
i. Write the event handler
ii. Create a XMLHttpRequest object
iii. Write the code to create the request for your JSON data on
the server (you must first upload it to the server using FTP)
iv. Send the request to the server
v. Process the returned JSON data using JavaScript
vi. Update the page content
1. The JSON data must be displayed in a HTML table.
 */


(function() {

    // const httpURL = 'http://localhost:8080/getjson';
    const httpURL = 'https://jingtian6015.azurewebsites.net/getjson';

    // i. Write the event handler
    document.getElementById("button").onclick = function() {
        makeRequest(httpURL);
    }

    // ii. Create a XMLHttpRequest object
    const httpRequest = new XMLHttpRequest();

    // iii. Write the code to create the request for your JSON data on the server
    function makeRequest(url) {
        if (!httpRequest) {
        alert('Exiting: Cannot create an XML HTTP instance');
        return false;
        }
        alert(url);
        httpRequest.onreadystatechange = alertContents;
        // iv. Send the request to the server
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }

    // v. Process the returned JSON data using JavaScript
    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.write(httpRequest.responseText);
            } else {
                alert('Error with request');
            }
        }
    }
}
)();