document.addEventListener("DOMContentLoaded", init, false);
var data;
var item;

function init() {
    createTestData();
    document.getElementById("test_button").addEventListener("click", fillForm);
}

function createTestData() {
     data = {
        "testData": [
            {
                "typ": {
                    "restaurant": true,
                    "bar": true,
                    "location": false
                },
                "title": "Boogie's Diner",
                "description": "Boogie's Diner is a nice place for the whole family. They have tasty burgers and lovely milkshakes.",
                "adresse": "Warschauererstraße 15 10249 Berlin",
                "price": 3
            },
            {
                "typ": {
                    "restaurant": false,
                    "bar": false,
                    "location": true
                },
                "title": "Treptower Park",
                "description": "One of Berlin's most beautiful Parks, nearby Spree.",
                "adresse": "Rosengarten 12435 Berlin",
                "price": 1
            },
            {
                "typ": {
                    "restaurant": false,
                    "bar": true,
                    "location": false
                },
                "title": "FairyTale",
                "description": "Fairytale is a nice little enchanting bar near Volkspark Friedrichshain.",
                "adresse": "Rosengarten 12435 Berlin",
                "price": 2
            }
        ]
    }
}

function fillForm() {

    item = data.testData[Math.floor(Math.random()*3)]; // get a random element

    /**
     * set the sample data for the checkboxes
     */
    if(item.typ.restaurant == true) {
        document.getElementById("restaurant").checked = true;
    } else {
        document.getElementById("restaurant").checked = false;
    }
    if(item.typ.bar == true) {
        document.getElementById("bar").checked = true;
    } else {
        document.getElementById("bar").checked = false;
    }
    if(item.typ.location == true) {
        document.getElementById("location").checked = true;
    } else {
        document.getElementById("location").checked = false;
    }
    /**
     * set data for the textfields
     */
    var form = document.getElementById("add-form").elements;
    form.namedItem("title").value = item.title;
    form.namedItem("description").value = item.description;
    form.namedItem("adress").value = item.adresse;

    /**
     * set data for the radio button
     */

    form.namedItem("price").value = item.price;
}