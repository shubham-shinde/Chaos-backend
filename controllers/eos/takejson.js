var jn = require('../../pythonscript/data.json');
import api from '../../eosjs';

async function addallcard() {
    for(var i=0;i<jn.length; i++) {
        var s = !jn[i]["Notes"] ? "name" : jn[i]["Notes"];
        var cardName = !jn[i]["Notes"] ? "name" : jn[i]["Notes"];
        var type = !jn[i]["Type"] ? "type" : jn[i]["Type"];
        var faction = !jn[i]["SubType"] ? "sub type" : jn[i]["SubType"];
        var manaCost = !jn[i]["Cost"] ? 1 : Math.abs(jn[i]["Cost"]);
        var attack = !jn[i]["Attack"] ? 1 : Math.abs(jn[i]["Attack"]);
        var health = !jn[i]["Defense"] ? 1 : Math.abs(jn[i]["Defense"]);
        var expset = !jn[i]["Color"] ? "red" : jn[i]["Color"];
        var craftCost = !jn[i]["Cost"] ? 1 : Math.abs(jn[i]["Cost"]);
        var cardText = !jn[i]["Text"] ? "text" : jn[i]["Text"];
        var cardKeywords = !jn[i]["Unnamed"] ? "pata nhi" : jn[i]["Unnamed"];
        // console.log({
        //     s,
        //     cardName,
        //     type,
        //     faction,
        //     manaCost,
        //     attack,
        //     health,
        //     expset,
        //     carftCost,
        //     cardText,
        //     cardKeywords
        // })
        await api.addcard( s, cardName, type, faction, manaCost, attack, health, expset, craftCost, cardText, cardKeywords);
        console.log('done ', cardName);
    }
}

addallcard().then(d => {
    console.log("okkk...............");
}).catch((err)=> {
    console.log("shit... errrr ", err);
});

export default jn;

{
    "cardName":     "Lao, Grand Adjudicator",
    "type":         "Unit",
    "faction":      "Unique Character - Apostle",
    "manaCost":     8,
    "attack":       3,
    "health":       8,
    "expset":       "Chiffon",
    "craftCost":    8,
    "cardText":     "Pin all other Units.",
    "cardKeywords": "pata nhi"
}