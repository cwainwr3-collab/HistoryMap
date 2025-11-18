// This file is for searching through the data base to find the selected country and corresponding history from the query thing lol

function searchCountry(countryQuery){
    console.log("reached searchCountry function");
    switch (countryQuery){
        case 0:
            countryQuery.toLowerCase = "united states" || "united states of america" || "us" || "u.s." || "u.s.a"
            console.log("USA selected");
            return countryQuery + " selected";
        case 1:
            countryQuery.toLowerCase = "united kingdom" || "great britian" || "uk" || "england"
            console.log("UK selected");
            return countryQuery + " selected";
        case 2:
            countryQuery.toLowerCase = "russia" || "soviet union" || "ussr"
            console.log("Russia selected");
            return countryQuery + " selected";
        case 3:
            countryQuery.toLowerCase = "japan"
            console.log("Japan selected");
            return countryQuery + " selected";
        case 4:
            countryQuery.toLowerCase = "china" || "people's republic of china" || "p.r.c"
            console.log("China selected");
            return countryQuery + " selected";
        case 5:
            countryQuery.toLowerCase = "germany"
            console.log("Germany selected");
            return countryQuery + " selected";
        case 6:
            console.log("selection not implemented or doesn't exist");
            return "This selection has not been implemented or doesn't exist. Please try again."
    }
}

function searchHistoryType(historyQuery){
    console.log("Reached searchHistoryType function")
    switch (historyQuery){
        case 0:
            historyQuery.toLowerCase = "military" || "military history" || "warfare" || "wars" // theres too many words...
            console.log("Military History selected");
            return historyQuery + "selected"; 
        case 1:
            historyQuery.toLowerCase = "art history" || "art"
            console.log("Art History selected");
            return historyQuery + "selected";
        case 2:
            historyQuery.toLowerCase = "music history" || "music"
            console.log("Music History selected");
            return historyQuery + "selected";
        case 3:
            historyQuery.toLowerCase = "food history" || "food"
            console.log("Food History selected");
            return historyQuery + "selected";
        case 4:
            historyQuery.toLowerCase = "economic history" || "economics" || "money"
            console.log("Economic History selected");
            return historyQuery + "selected";
        case 5:
            historyQuery.toLowerCase = "science history" || "science"
            console.log("Science History selected");
            return historyQuery + "selected";
    }
}