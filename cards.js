const cards = [
    { "imgName": "aardvark.jpg", "Name": "Aardvark", "Set": "O", "Base Stat": "4", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R" },
    { "imgName": "accounts_receivable.jpg", "Name": "Accounts Receivable", "Set": "O", "cost": "5", "Player": "corp", "Type": "O", "Rarity": "C", "keywords": ["Transactions"] },
    { "imgName": "acme_savings_and_loan.jpg", "Name": "ACME Savings and Loan", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Transactions"] },
    { "imgName": "ai_chief_financial_officer.jpg", "Name": "AI Chief Financial Officer", "Set": "O", "Base Stat": "2", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Asset"] },
    { "imgName": "annual_reviews.jpg", "Name": "Annual Reviews", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "antiquated_interface_routines.jpg", "Name": "Antiquated Interface Routines", "Set": "O", "Base Stat": "1", "cost": "2", "Player": "corp", "Type": "U", "Rarity": "U" },
    { "imgName": "artificial_security_directors.jpg", "Name": "Artificial Security Directors", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Research"] },
    { "imgName": "asp.jpg", "Name": "Asp", "Set": "O", "Base Stat": "4", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Flatline"] },
    { "imgName": "audit_of_call_records.jpg", "Name": "Audit of Call Records", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "ball_and_chain.jpg", "Name": "Ball and Chain", "Set": "O", "Base Stat": "5", "cost": "2", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "banpei.jpg", "Name": "Banpei", "Set": "O", "Base Stat": "0", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "bbs_whispering_campaign.jpg", "Name": "BBS Whispering Campaign", "Set": "O", "Base Stat": "4", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Advertisement"] },
    { "imgName": "bioweapons_engineering.jpg", "Name": "Bioweapons Engineering", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Research"] },
    { "imgName": "bizarre_encryption_scheme.jpg", "Name": "Bizarre Encryption Scheme", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "U" },
    { "imgName": "black_ice_quality_assurance.jpg", "Name": "Black Ice Quality Assurance", "Set": "O", "Base Stat": "2", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Research", "Black Ops"] },
    { "imgName": "blood_cat.jpg", "Name": "Blood Cat", "Set": "O", "Base Stat": "0", "cost": "6", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["AI"] },
    { "imgName": "bolter_cluster.jpg", "Name": "Bolter Cluster", "Set": "O", "Base Stat": "4", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "AP", "Hellbolt"] },
    { "imgName": "braindance_campaign.jpg", "Name": "Braindance Campaign", "Set": "O", "Base Stat": "7", "cost": "6", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Advertisement", "Gray Ops"] },
    { "imgName": "canis_major.jpg", "Name": "Canis Major", "Set": "O", "Base Stat": "4", "cost": "0", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Watchdog"] },
    { "imgName": "canis_minor.jpg", "Name": "Canis Minor", "Set": "O", "Base Stat": "5", "cost": "0", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Watchdog"] },
    { "imgName": "cerberus.jpg", "Name": "Cerberus", "Set": "O", "Base Stat": "5", "cost": "11", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Hellhound"] },
    { "imgName": "chance_observation.jpg", "Name": "Chance Observation", "Set": "O", "cost": "2", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "chester_mix.jpg", "Name": "Chester Mix", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Sysop"] },
    { "imgName": "chicago_branch.jpg", "Name": "Chicago Branch", "Set": "O", "Base Stat": "1", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Asset"] },
    { "imgName": "chimera.jpg", "Name": "Chimera", "Set": "O", "Base Stat": "3", "cost": "2", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Ambush"] },
    { "imgName": "cinderella.jpg", "Name": "Cinderella", "Set": "O", "Base Stat": "6", "cost": "8", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Firestarter"] },
    { "imgName": "city_surveilance.jpg", "Name": "City Surveillance", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["Gray Ops"] },
    { "imgName": "closed_accounts.jpg", "Name": "Closed Accounts", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "code_corpse.jpg", "Name": "Code Corpse", "Set": "O", "Base Stat": "5", "cost": "10", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Zombie"] },
    { "imgName": "corporate_boon.jpg", "Name": "Corporate Boon", "Set": "O", "Base Stat": "2", "cost": "6", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "corporate_coup.jpg", "Name": "Corporate Coup", "Set": "O", "Base Stat": "2", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Black Ops"] },
    { "imgName": "corporate_detective_agency.jpg", "Name": "Corporate Detective Agency", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "corporate_downsizing.jpg", "Name": "Corporate Downsizing", "Set": "O", "Base Stat": "2", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "corporate_negotiating_center.jpg", "Name": "Corporate Negotiating Center", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["Asset"] },
    { "imgName": "corporate_retreat.jpg", "Name": "Corporate Retreat", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "corporate_war.jpg", "Name": "Corporate War", "Set": "O", "Base Stat": "3", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Black Ops"] },
    { "imgName": "corprunners_shattered_remains.jpg", "Name": "Corprunner's Shattered Remains", "Set": "O", "Base Stat": "0", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Ambush"] },
    { "imgName": "cortical_scanner.jpg", "Name": "Cortical Scanner", "Set": "O", "Base Stat": "3", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "cortical_scrub.jpg", "Name": "Cortical Scrub", "Set": "O", "Base Stat": "3", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Brainwipe"] },
    { "imgName": "cowboy_sysop.jpg", "Name": "Cowboy Sysop", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "crybaby.jpg", "Name": "Crybaby", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Ambush"] },
    { "imgName": "crystal_palace_station_grid.jpg", "Name": "Crystal Palace Station Grid", "Set": "O", "Base Stat": "5", "cost": "5", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Region"] },
    { "imgName": "crystal_wall.jpg", "Name": "Crystal Wall", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "darc_knight.jpg", "Name": "D'Arc Knight", "Set": "O", "Base Stat": "2", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "data_darts.jpg", "Name": "Data Darts", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "AP", "Hellbolt"] },
    { "imgName": "data_fort_reclamation.jpg", "Name": "Data Fort Reclamation", "Set": "O", "Base Stat": "2", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "data_masons.jpg", "Name": "Data Masons", "Set": "O", "Base Stat": "1", "cost": "1", "Player": "corp", "Type": "N", "Rarity": "R" },
    { "imgName": "data_naga.jpg", "Name": "Data Naga", "Set": "O", "Base Stat": "5", "cost": "9", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "data_raven.jpg", "Name": "Data Raven", "Set": "O", "Base Stat": "5", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry"] },
    { "imgName": "data_wall.jpg", "Name": "Data Wall", "Set": "O", "Base Stat": "0", "cost": "1", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "data_wall_20.jpg", "Name": "Data Wall 2.0", "Set": "O", "Base Stat": "1", "cost": "2", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "datapool_by_zetatech.jpg", "Name": "Datapool by Zetatech", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "day_shift.jpg", "Name": "Day Shift", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "dedicated_response_team.jpg", "Name": "Dedicated Response Team", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Ambush"] },
    { "imgName": "department_of_truth_enhancement.jpg", "Name": "Department of Truth Enhancement", "Set": "O", "Base Stat": "1", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "detroit_police_contract.jpg", "Name": "Detroit Police Contract", "Set": "O", "Base Stat": "1", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Black Ops"] },
    { "imgName": "dieter_esslin.jpg", "Name": "Dieter Esslin", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Sysop", "Ambush"] },
    { "imgName": "disinfectant_inc.jpg", "Name": "Disinfectant, Inc.", "Set": "O", "Base Stat": "4", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R" },
    { "imgName": "dr_dreff.jpg", "Name": "Dr. Dreff", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Sysop"] },
    { "imgName": "edgerunner_inc_temps.jpg", "Name": "Edgerunner, Inc., Temps", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "efficiency_experts.jpg", "Name": "Efficiency Experts", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "C", "keywords": ["Transactions"] },
    { "imgName": "employee_empowerment.jpg", "Name": "Employee Empowerment", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "encoder_inc.jpg", "Name": "Encoder, Inc.", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R" },
    { "imgName": "encryption_breakthrough.jpg", "Name": "Encryption Breakthrough", "Set": "O", "Base Stat": "2", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Research"] },
    { "imgName": "endless_corridor.jpg", "Name": "Endless Corridor", "Set": "O", "Base Stat": "2", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "esa_contract.jpg", "Name": "ESA Contract", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "euromarket_consortium.jpg", "Name": "Euromarket Consortium", "Set": "O", "Base Stat": "4", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "executive_extraction.jpg", "Name": "Executive Extraction", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Black Ops"] },
    { "imgName": "experimental_ai.jpg", "Name": "Experimental AI", "Set": "O", "Base Stat": "0", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["AI", "Ambush"] },
    { "imgName": "falsified-transactions_expert.jpg", "Name": "Falsified Transactions Expert", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "R" },
    { "imgName": "fang.jpg", "Name": "Fang", "Set": "O", "Base Stat": "4", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Pit Bull"] },
    { "imgName": "fang_20.jpg", "Name": "Fang 2.0", "Set": "O", "Base Stat": "5", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Pit Bull"] },
    { "imgName": "fatal_attractor.jpg", "Name": "Fatal Attractor", "Set": "O", "Base Stat": "4", "cost": "1", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP"] },
    { "imgName": "fetch_401.jpg", "Name": "Fetch 4.0.1", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Bloodhound"] },
    { "imgName": "filter.jpg", "Name": "Filter", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "fire_wall.jpg", "Name": "Fire Wall", "Set": "O", "Base Stat": "4", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "fortress_architects.jpg", "Name": "Fortress Architects", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R" },
    { "imgName": "fragmentation_storm.jpg", "Name": "Fragmentation Storm", "Set": "O", "Base Stat": "4", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Flatline"] },
    { "imgName": "genetics-visionary_acquisition.jpg", "Name": "Genetics-Visionary Acquisition", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Gray Ops"] },
    { "imgName": "hacker_tracker_central.jpg", "Name": "Hacker Tracker Central", "Set": "O", "Base Stat": "2", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Asset"] },
    { "imgName": "haunting_inquisition.jpg", "Name": "Haunting Inquisition", "Set": "O", "Base Stat": "6", "cost": "8", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "holovid_campaign.jpg", "Name": "Holovid Campaign", "Set": "O", "Base Stat": "7", "cost": "4", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Advertisement"] },
    { "imgName": "homewrecker.jpg", "Name": "Homewrecker", "Set": "O", "Base Stat": "5", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Firestarter"] },
    { "imgName": "hostile_takeover.jpg", "Name": "Hostile Takeover", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "hunter.jpg", "Name": "Hunter", "Set": "O", "Base Stat": "5", "cost": "2", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Bloodhound"] },
    { "imgName": "i_got_a_rock.jpg", "Name": "I Got a Rock", "Set": "O", "Base Stat": "2", "cost": "3", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["Black Ops"] },
    { "imgName": "ice_pick_willie.jpg", "Name": "Ice Pick Willie", "Set": "O", "Base Stat": "1", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "ice_transmutation.jpg", "Name": "Ice Transmutation", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Research"] },
    { "imgName": "information_laundering.jpg", "Name": "Information Laundering", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Transactions"] },
    { "imgName": "investment_firm.jpg", "Name": "Investment Firm", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Transactions"] },
    { "imgName": "jack_attack.jpg", "Name": "Jack Attack", "Set": "O", "Base Stat": "3", "cost": "3", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "AP"] },
    { "imgName": "jenny_jett.jpg", "Name": "Jenny Jett", "Set": "O", "Base Stat": "1", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Sysop"] },
    { "imgName": "jerusalem_city_grid.jpg", "Name": "Jerusalem City Grid", "Set": "O", "Base Stat": "5", "cost": "2", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "keeper.jpg", "Name": "Keeper", "Set": "O", "Base Stat": "4", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "krumz.jpg", "Name": "Krumz", "Set": "O", "Base Stat": "2", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["AI"] },
    { "imgName": "laser_wire.jpg", "Name": "Laser Wire", "Set": "O", "Base Stat": "2", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "liche.jpg", "Name": "Liche", "Set": "O", "Base Stat": "6", "cost": "14", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP"] },
    { "imgName": "main-office_relocation.jpg", "Name": "Main-Office Relocation", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "management_shake-up.jpg", "Name": "Management Shake-Up", "Set": "O", "cost": "10", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "marine_arcology.jpg", "Name": "Marine Arcology", "Set": "O", "Base Stat": "2", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "mastiff.jpg", "Name": "Mastiff", "Set": "O", "Base Stat": "5", "cost": "12", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Hellhound", "Watchdog"] },
    { "imgName": "mazer.jpg", "Name": "Mazer", "Set": "O", "Base Stat": "5", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "namatoki_plaza.jpg", "Name": "Namatoki Plaza", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "U", "Rarity": "U" },
    { "imgName": "nerve_labyrinth.jpg", "Name": "Nerve Labyrinth", "Set": "O", "Base Stat": "4", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "netwatch_credit_voucher.jpg", "Name": "Netwatch Credit Voucher", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "C", "keywords": ["Gray Ops"] },
    { "imgName": "netwatch_operations_office.jpg", "Name": "Netwatch Operations Office", "Set": "O", "Base Stat": "2", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "neural_blade.jpg", "Name": "Neural Blade", "Set": "O", "Base Stat": "4", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "AP", "Sword"] },
    { "imgName": "nevinyrral.jpg", "Name": "Nevinyrral", "Set": "O", "Base Stat": "5", "cost": "3", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["AI", "Unique"] },
    { "imgName": "new_blood.jpg", "Name": "New Blood", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "R" },
    { "imgName": "new_galveston_city_grid.jpg", "Name": "New Galveston City Grid", "Set": "O", "Base Stat": "4", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "newsgroup_taunting.jpg", "Name": "Newsgroup Taunting", "Set": "O", "Base Stat": "0", "cost": "1", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "night_shift.jpg", "Name": "Night Shift", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "off-site_backups.jpg", "Name": "Off-Site Backups", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "olivia_salazar.jpg", "Name": "Olivia Salazar", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Sysop"] },
    { "imgName": "omni_kismet_phd.jpg", "Name": "Omni Kismet, Ph.D", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Sysop"] },
    { "imgName": "omniscience_foundation.jpg", "Name": "Omniscience Foundation", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "on-call_solo_team.jpg", "Name": "On-Call Solo Team", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "overtime_incentives.jpg", "Name": "Overtime Incentives", "Set": "O", "cost": "4", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "pacifica_regional_ai.jpg", "Name": "Pacifica Regional AI", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["AI"] },
    { "imgName": "paris_city_grid.jpg", "Name": "Paris City Grid", "Set": "O", "Base Stat": "6", "cost": "2", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Region"] },
    { "imgName": "pi_in_the_face.jpg", "Name": "PI in the 'Face", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "DecKrash"] },
    { "imgName": "planning_consultants.jpg", "Name": "Planning Consultants", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "C", "keywords": ["Gray Ops"] },
    { "imgName": "pocket_virtual_reality.jpg", "Name": "Pocket Virtual Reality", "Set": "O", "Base Stat": "4", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry"] },
    { "imgName": "political_coup.jpg", "Name": "Political Coup", "Set": "O", "Base Stat": "2", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Black Ops"] },
    { "imgName": "political_overthrow.jpg", "Name": "Political Overthrow", "Set": "O", "Base Stat": "6", "cost": "9", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Black Ops"] },
    { "imgName": "polymer_breakthrough.jpg", "Name": "Polymer Breakthrough", "Set": "O", "Base Stat": "3", "cost": "6", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Research"] },
    { "imgName": "power_grid_overload.jpg", "Name": "Power Grid Overload", "Set": "O", "cost": " X", "Player": "corp", "Type": "O", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "priority_requisition.jpg", "Name": "Priority Requisition", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "private_cybernet_police.jpg", "Name": "Private Cybernet Police", "Set": "O", "Base Stat": "2", "cost": "7", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "project_babylon.jpg", "Name": "Project Babylon", "Set": "O", "Base Stat": "1", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Black Ops"] },
    { "imgName": "project_consultants.jpg", "Name": "Project Consultants", "Set": "O", "cost": "12", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "punitive_counterstrike.jpg", "Name": "Punitive Counterstrike", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "U", "keywords": ["Black Ops"] },
    { "imgName": "quandary.jpg", "Name": "Quandary", "Set": "O", "Base Stat": "2", "cost": "2", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "razor_wire.jpg", "Name": "Razor Wire", "Set": "O", "Base Stat": "3", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "red_herrings.jpg", "Name": "Red Herrings", "Set": "O", "Base Stat": "1", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "U" },
    { "imgName": "reinforced_wall.jpg", "Name": "Reinforced Wall", "Set": "O", "Base Stat": "4", "cost": "8", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "remote_facility.jpg", "Name": "Remote Facility", "Set": "O", "Base Stat": "1", "cost": "5", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Asset"] },
    { "imgName": "rescheduler.jpg", "Name": "Rescheduler", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Gray Ops"] },
    { "imgName": "rex.jpg", "Name": "Rex", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Pit Bull"] },
    { "imgName": "rio_de_janeiro_city_grid.jpg", "Name": "Rio de Janeiro City Grid", "Set": "O", "Base Stat": "6", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Region", "Random"] },
    { "imgName": "rock_is_strong.jpg", "Name": "Rock is Strong", "Set": "O", "Base Stat": "5", "cost": "6", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "rockerboy_promotion.jpg", "Name": "Rockerboy Promotion", "Set": "O", "Base Stat": "3", "cost": "4", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Advertisement"] },
    { "imgName": "roving_submarine.jpg", "Name": "Roving Submarine", "Set": "O", "Base Stat": "0", "cost": "3", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "rustbelt_hq_branch.jpg", "Name": "Rustbelt HQ Branch", "Set": "O", "Base Stat": "2", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Asset"] },
    { "imgName": "schlaghund.jpg", "Name": "Schlaghund", "Set": "O", "Base Stat": "4", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "R", "keywords": ["Random", "Black Ops"] },
    { "imgName": "scorched_earth.jpg", "Name": "Scorched Earth", "Set": "O", "cost": "3", "Player": "corp", "Type": "O", "Rarity": "U", "keywords": ["Black Ops"] },
    { "imgName": "scramble.jpg", "Name": "Scramble", "Set": "O", "Base Stat": "3", "cost": "3", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "security_net_optimization.jpg", "Name": "Security Net Optimization", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "security_purge.jpg", "Name": "Security Purge", "Set": "O", "Base Stat": "2", "cost": "3", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Gray Ops"] },
    { "imgName": "sentinels_prime.jpg", "Name": "Sentinels Prime", "Set": "O", "Base Stat": "4", "cost": "8", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "setup.jpg", "Name": "Setup!", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Ambush"] },
    { "imgName": "shockr.jpg", "Name": "Shock.r", "Set": "O", "Base Stat": "3", "cost": "1", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry", "AP", "Stun"] },
    { "imgName": "shotgun_wire.jpg", "Name": "Shotgun Wire", "Set": "O", "Base Stat": "5", "cost": "8", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "silver_lining_recovery_protocol.jpg", "Name": "Silver Lining Recovery Protocol", "Set": "O", "cost": "0", "Player": "corp", "Type": "O", "Rarity": "R" },
    { "imgName": "singapore_city_grid.jpg", "Name": "Singapore City Grid", "Set": "O", "Base Stat": "5", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "skalderviken_sa_beta_test_site.jpg", "Name": "Skalderviken SA Beta Test Site", "Set": "O", "Base Stat": "2", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "R" },
    { "imgName": "sleeper.jpg", "Name": "Sleeper", "Set": "O", "Base Stat": "1", "cost": "1", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "solo_squad.jpg", "Name": "Solo Squad", "Set": "O", "Base Stat": "3", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "south_african_mining_corp.jpg", "Name": "South African Mining Corp", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Transactions"] },
    { "imgName": "spinn_public_relations.jpg", "Name": "Spinn Public Relations", "Set": "O", "Base Stat": "4", "cost": "1", "Player": "corp", "Type": "N", "Rarity": "C", "keywords": ["Transactions"] },
    { "imgName": "strike_force_kali.jpg", "Name": "Strike Force Kali", "Set": "O", "Base Stat": "3", "cost": "6", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Asset"] },
    { "imgName": "subsidiary_branch.jpg", "Name": "Subsidiary Branch", "Set": "O", "Base Stat": "1", "cost": "6", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Gray Ops"] },
    { "imgName": "superior_net_barriers.jpg", "Name": "Superior Net Barriers", "Set": "O", "Base Stat": "3", "cost": "6", "Player": "corp", "Type": "A", "Rarity": "R", "keywords": ["Research"] },
    { "imgName": "systematic_layoffs.jpg", "Name": "Systematic Layoffs", "Set": "O", "cost": "5", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "team_restructuring.jpg", "Name": "Team Restructuring", "Set": "O", "cost": "1", "Player": "corp", "Type": "O", "Rarity": "U" },
    { "imgName": "tesseract_fort_construction.jpg", "Name": "Tesseract Fort Construction", "Set": "O", "Base Stat": "3", "cost": "2", "Player": "corp", "Type": "U", "Rarity": "R" },
    { "imgName": "tko_20.jpg", "Name": "TKO 2.0", "Set": "O", "Base Stat": "4", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "AP", "Knockout"] },
    { "imgName": "tokyo-chiba_infighting.jpg", "Name": "Tokyo-Chiba Infighting", "Set": "O", "Base Stat": "6", "cost": "0", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "too_many_doors.jpg", "Name": "Too Many Doors", "Set": "O", "Base Stat": "3", "cost": "1", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Sentry", "keywords": ["Sentry"] },
    { "imgName": "trap.jpg", "Name": "TRAP!", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Ambush"] },
    { "imgName": "triggerman.jpg", "Name": "Triggerman", "Set": "O", "Base Stat": "3", "cost": "7", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Killer"] },
    { "imgName": "trojan_horse.jpg", "Name": "Trojan Horse", "Set": "O", "cost": "2", "Player": "corp", "Type": "O", "Rarity": "C" },
    { "imgName": "turbeau_delacroix.jpg", "Name": "Turbeaux Delacroix", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "U", "keywords": ["Sysop", "Ambush"] },
    { "imgName": "tutor.jpg", "Name": "Tutor", "Set": "O", "Base Stat": "5", "cost": "4", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Code Gate", "keywords": ["Code Gate"] },
    { "imgName": "twenty-four-hour_surveillance.jpg", "Name": "Twenty-Four-Hour Surveillance", "Set": "O", "Base Stat": "2", "cost": "1", "Player": "corp", "Type": "U", "Rarity": "R" },
    { "imgName": "tycho_extension.jpg", "Name": "Tycho Extension", "Set": "O", "Base Stat": "4", "cost": "4", "Player": "corp", "Type": "A", "Rarity": "V", "keywords": ["Asset"] },
    { "imgName": "urban_renewal.jpg", "Name": "Urban Renewal", "Set": "O", "cost": "6", "Player": "corp", "Type": "O", "Rarity": "C", "keywords": ["Black Ops"] },
    { "imgName": "vacant_soulkiller.jpg", "Name": "Vacant Soulkiller", "Set": "O", "Base Stat": "0", "cost": "2", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Ambush"] },
    { "imgName": "vacuum_link.jpg", "Name": "Vacuum Link", "Set": "O", "Base Stat": "5", "cost": "3", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Sentry", "keywords": ["Sentry", "Random"] },
    { "imgName": "vapor_ops.jpg", "Name": "Vapor Ops", "Set": "O", "Base Stat": "1", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U" },
    { "imgName": "viral_15.jpg", "Name": "Viral 15", "Set": "O", "Base Stat": "3", "cost": "5", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry"] },
    { "imgName": "virizz.jpg", "Name": "Virizz", "Set": "O", "Base Stat": "4", "cost": "2", "Player": "corp", "Type": "I", "Rarity": "U", "Sort Key": "Sentry", "keywords": ["Sentry"] },
    { "imgName": "virus_test_site.jpg", "Name": "Virus Test Site", "Set": "O", "Base Stat": "0", "cost": "0", "Player": "corp", "Type": "N", "Rarity": "U", "keywords": ["Ambush"] },
    { "imgName": "wall_of_ice.jpg", "Name": "Wall of Ice", "Set": "O", "Base Stat": "6", "cost": "13", "Player": "corp", "Type": "I", "Rarity": "R", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "wall_of_static.jpg", "Name": "Wall of Static", "Set": "O", "Base Stat": "2", "cost": "3", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Wall", "keywords": ["Wall"] },
    { "imgName": "washington_dc_city_grid.jpg", "Name": "Washington, D.C., City Grid", "Set": "O", "Base Stat": "6", "cost": "7", "Player": "corp", "Type": "U", "Rarity": "R", "keywords": ["Region"] },
    { "imgName": "zombie.jpg", "Name": "Zombie", "Set": "O", "Base Stat": "4", "cost": "9", "Player": "corp", "Type": "I", "Rarity": "C", "Sort Key": "Sentry", "keywords": ["Sentry", "Black Ice", "AP", "Zombie"] }
]