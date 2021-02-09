function playersRepeat(first, second) {
    var players = {};
    var resp = [];
    console.log(first[0]);
    first.forEach(function (obj) {
        // console.log(obj)
        var current = obj.first_name + ' ' + obj.last_name;
        if (players[current] !== undefined) {
            players[current] += 1;
        }
        else {
            players[current] = 1;
        }
    });
    second.forEach(function (obj) {
        var current = obj.first_name + ' ' + obj.last_name;
        if (players[current] !== undefined) {
            resp.push(current);
            players[current] += 1;
        }
        else {
            players[current] = 1;
        }
    });
    // console.log(players)
    console.log(resp);
    return resp;
}
var basketball_players = [
    { first_name: "Jill", last_name: "Huang", team: "Gators" },
    { first_name: "Janko", last_name: "Barton", team: "Sharks" },
    { first_name: "Wanda", last_name: "Vakulskas", team: "Sharks" },
    { first_name: "Jill", last_name: "Moloney", team: "Gators" },
    { first_name: "Luuk", last_name: "Watkins", team: "Gators" }
];
var football_players = [
    { first_name: "Hanzla", last_name: "Radosti", team: "32ers" },
    { first_name: "Tina", last_name: "Watkins", team: "Barleycorns" },
    { first_name: "Alex", last_name: "Patel", team: "32ers" },
    { first_name: "Jill", last_name: "Huang", team: "Barleycorns" },
    { first_name: "Wanda", last_name: "Vakulskas", team: "Barleycorns" }
];
playersRepeat(basketball_players, football_players);
