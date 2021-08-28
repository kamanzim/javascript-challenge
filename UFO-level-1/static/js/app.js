// from data.js
var table_data = data;

// YOUR CODE HERE!

// Getting references
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var input_date = d3.select("#datetime");
var input_city = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var appended_table = (data_input) => {
    data_input.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

appended_table(table_data);


// Creating event listener for button
// Setting up filter button for the date and city columns

    button.on("click", () => {
        d3.event.preventDefault();
        
        var date_input = input_date.property("value").trim();
        
        var filter_date = table_data.filter(table_data => table_data.datetime === date_input);
        
        tbody.html("");
        
        let response = {
            filter_date
        }
    // Creating if function to show a message when the date is  not found

    if(response.filter_date.length !== 0) {
        appended_table(filter_date);
    }

    // Message to show if the date is not found
    
        else {
            tbody.append("tr").append("td").text("There are no sighthings here!");
        }
})