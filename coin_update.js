function calc_cf_basic(elec_units, petrol, diesel, LPG) {
    //From CO2 emission factor database, version 06, CEA (Government of India), http://www.cea.nic.in/reports/planning/cdm_co2/cdm_co2.htm 
    const Emission_Factor_Electricity = 0.8;

    //Following Emission factors are taken from the file “Emission factors from across the sector -tool”,  
    //extracted from http://www.ghgprotocol.org/calculation-tools/alltools
    const Emission_Factor_Petrol = 2.296;
    const Emission_Factor_Deisel = 2.653;
    const Emission_Factor_LPG = 2.983;

    var elec_cf = elec_units * Emission_Factor_Electricity;
    var petrol_cf = petrol * Emission_Factor_Petrol;
    var diesel_cf = diesel * Emission_Factor_Deisel;
    var LPG_cf = LPG * Emission_Factor_LPG;

    //Return carbon footprint in tonnes of CO2
    return (elec_cf + petrol_cf + diesel_cf + LPG_cf) / 1000;
}

function update_coins(Balance, elec_units, petrol, diesel, LPG, past_cf, streak) {
    var cf_basic = calc_cf_basic(elec_units, petrol, diesel, LPG);
    var add_to_balance;
    if (cf_basic > past_cf) {
        set_streak(0);
        add_to_balance = 0;
    } else {
        set_streak(++streak);
        //Scaling factor is determined keeping user-convenience in mind (ensuring a practical coin balance)
        //Streak is also take into consideration
        var scaling_factor = 0.5 * streak * 100;
        //Scale the difference in carbon footprint to update the number of coins
        add_to_balance = Math.round((past_cf - cf_basic) * scaling_factor);
    }

    //database me past_cf update karna hai
    past_cf = cf_basic;
    console.log(past_cf);
    //database me Balance update karna hai
    Balance += add_to_balance;
    console.log(Balance);
    return Balance;
}

function set_streak(new_streak) {
    //database me streak ko ye new streak set krde.
    console.log("new_streak " + new_streak);
    return new_streak;
}


/*Test:
var Balance=100;
var elec_units=1;
var petrol=1;
var diesel=1; 
var LPG=1;
var past_cf=0.10;
var streak=1;
console.log(update_coins(Balance, elec_units, petrol, diesel, LPG, past_cf, streak));
*/