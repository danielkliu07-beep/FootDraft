// const Attack = ["ST", "CF", "LW", "RW"];
// const Midfield = ["CAM", "CM", "CDM", "LM", "RM"];
// const Defence = ["LWB", "RWB", "LB", "RB", "CB"];
// const Position = ["ST", "CF", "LW", "RW", "CAM", "CM", "CDM", "LM", "RM", "LWB", "RWB", "LB", "RB", "CB"]


function AdjustedOvr(baseOvr, preferredposition, currentposition) {

    if(preferredposition === currentposition) {

        return baseOvr;

    }
    else if(currentposition === "ST" || currentposition === "CF" || currentposition === "LW" || currentposition ==="RW") {

        if(preferredposition === "ST" || preferredposition === "CF" || preferredposition === "LW" || preferredposition ==="RW") {
            return baseOvr * 0.95;
        }
        else {
            return baseOvr * 0.70;
        }
    }
    else if(currentposition === "CAM" || currentposition === "CM" || currentposition === "CDM" || currentposition === "LM" || currentposition === "RM") {
        
        if(preferredposition === "CAM" || preferredposition === "CM" || preferredposition === "CDM" || preferredposition === "LM" || preferredposition === "RM") {
            return baseOvr * 0.95;
        }
        else {
            return baseOvr * 0.70;
        }
    }
    else if(currentposition === "LWB" || currentposition === "RWB" || currentposition === "LB" || currentposition === "RB" || currentposition === "CB") {

        if(preferredposition === "LWB" || preferredposition === "RWB" || preferredposition === "LB" || preferredposition === "RB" || preferredposition === "CB") {
            return baseOvr * 0.95;
        }
        else {
            return baseOvr * 0.70;
        }

    }

}

function AltPositions(preferredposition, alternativepositions) { //Function for splitting Alt positions into readable format, Ex: "ST,CF,LW" = ["ST","CF","LW"]
    AltPositionsSplit = alternativepositions.split(",");
    return AltPositionSplit;

}



