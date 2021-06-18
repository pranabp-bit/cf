# Green with Groot
A web application which enables users to keep a tab on their monthly Carbon footprint using their electricity, LPG, and fossil fuel usage data.

## Calculation of carbon footprint:
  4 factors have been taken into account:
  - Units of electricity (in KWh)- `elec_units`
  - LPG consumed (in Kg)- `LPG`
  - Petrol consumed (in L)- `petrol`
  - Diesel consumed (in L)- `diesel`

Emmision factors for the above factors are extracted from trusted recources of - \
[Central Electricity Authority](http://www.cea.nic.in/reports/planning/cdm_co2/cdm_co2.htm ) \
[Green House Gas Protocol](http://www.ghgprotocol.org/calculation-tools/alltools)


    Emission_Factor_Electricity = 0.8 Kg/KWh;
    Emission_Factor_Petrol = 2.296 Kg/L;
    Emission_Factor_Deisel = 2.653 Kg/L;
    Emission_Factor_LPG = 2.983 Kg/Kg;

Net Kg of CO2 can be calculated as the sum due to individual sources `elec_cf + petrol_cf + diesel_cf + LPG_cf`
which when divided by 1000 will give the Tonnes of CO2.

## Calculation of Coins:
 We are following the policy which ensures that the more regularly a user reduces carbon footprint, the more rewards a he/she would receive.
 To maintain, a non overflowing, readable value of Total coins- the following factor has been used- `0.5 * streak * 100` 
 
 This is multiplied to the difference of current and previous month's carbon footprint, and rounded of to the nearest integer-
 
 > add_to_balance = Math.round((past_cf - cf_basic) * scaling_factor);
 

