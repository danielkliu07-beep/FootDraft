function GetDribblingStat(Dribbling, Ball_Control, Agility, Balance) {
     return (0.50 * Dribbling) + (0.35 * Ball_Control) + (0.10 * Agility + (0.05 * Balance));

}

function GetPassingStat(Short_Pass, Vision, Crossing, Long_Passing, Curve, Free_Kick_Accuracy) {
    return (0.35 * Short_Pass) + (0.20 * Vision) + (0.20 * Crossing) + (0.15 * Long_Passing) + (0.05 * Curve) + (0.05 * Free_Kick_Accuracy);

}

function GetDefendingStat(Defensive_Awareness, Standing_Tackle, Interception, Heading_Accuracy, Slide_Tackle) {
    return (0.3 * Defensive_Awareness) + (0.3 * Standing_Tackle) + (0.2 * Interception) + (0.1 * Heading_Accuracy) + (0.1 * Slide_Tackle);

}

function GetPhysicalityStat(Strength, Stamina, Aggression, Jumping) {
    return (0.5 * Strength) + (0.25 * Stamina) + (0.2 * Aggression) + (0.05 * Jumping);

}

function GetPaceStat(Sprint_Speed, Acceleration) {
    return (0.55 * Sprint_Speed) + (0.45 * Acceleration);

}

function GetShootingStat(Positioning, Penalties, Volleys, Finishing, Shot_Power, Long_Shots) {
    return (0.05 * Positioning) + (0.05 * Penalties) + (0.05 * Volleys) + (0.45 * Finishing) + (0.2 * Shot_Power) + (0.2 * Long_Shots);

}