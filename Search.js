// This file is for searching through the data base to find the selected country and corresponding history from the query thing lol

function search(queryExample){
    console.log("reached search function");
    switch (queryExample){
        case 0:
            queryExample.toLowerCase = "united states" || "united states of america" || "us" || "u.s." || "u.s.a"
            console.log("USA selected");
            return queryExample + " selected";
        case 1:
            queryExample.toLowerCase = "united kingdom" || "great britian" || "uk" || "england"
            console.log("UK selected");
            return queryExample + " selected";
        case 2:
            queryExample.toLowerCase = "russia" || "soviet union" || "ussr"
            console.log("Russia selected");
            return queryExample + " selected";
        case 3:
            queryExample.toLowerCase = "japan"
            console.log("Japan selected");
            return queryExample + " selected";
        case 4:
            queryExample.toLowerCase = "china" || "people's republic of china" || "p.r.c"
            console.log("China selected");
            return queryExample + " selected";
        case 5:
            queryExample.toLowerCase = "germany"
            console.log("Germany selected");
            return queryExample + " selected";
        case 6:
            console.log("selection not implemented or doesn't exist");
            return "This selection has not been implemented or doesn't exist. Please try again."
    }
}