var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var battleSchema = new Schema({

    name: { type: String, required: true, unique: true },

    year: { type: String, required: true },

    battle_number: { type: Number, required: true },

    attacker_king: { type: String, required: false },

    defender_king: { type: String, required: false },

    attacker_1: { type: String, required: true },

    attacker_2: { type: String, required: false },

    attacker_3: { type: String, required: false },

    attacker_4: { type: String, required: false },

    defender_1: { type: String, required: true },

    defender_2: { type: String, required: false },

    defender_3: { type: String, required: false },

    defender_4: { type: String, required: false },

    attacker_outcome: { type: String, required: true },

    battle_type: { type: String, required: true },

    major_death: { type: Number, required: true },

    major_capture: { type: Number, required: true },

    attacker_size: { type: Number, required: false },

    defender_size: { type: Number, required: false },

    attacker_commander: { type: String, required: false },

    defender_commander: { type: String, required: false },

    summer: { type: Number, required: false },

    location: { type: String, required: false },

    region: { type: String, required: false },

    note: { type: String, required: false }

});



module.exports = mongoose.model('Battle', battleSchema)