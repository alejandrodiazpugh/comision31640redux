const programas = [
    {"id": 01, "nombre": "Couch to 5K",         "precio": 600, "cupo": 50},
    {"id": 02, "nombre": "Hatha Yoga",          "precio": 400, "cupo": 40},
    {"id": 03, "nombre": "Boring But Big",      "precio": 500, "cupo": 20},
    {"id": 04, "nombre": "Pull, Push, Legs 3x", "precio": 500, "cupo": 20},
    {"id": 05, "nombre": "Pull, Push, Legs 4x", "precio": 600, "cupo": 20},
    {"id": 06, "nombre": "Pull, Push, Legs 5x", "precio": 700, "cupo": 20},
    {"id": 07, "nombre": "Crossfit",            "precio": 500, "cupo": 30},
    {"id": 08, "nombre": "Boxing",              "precio": 400, "cupo": 20},
    {"id": 09, "nombre": "Crossfit",            "precio": 800, "cupo": 30},
    {"id": 10, "nombre": "Kickboxing",           "precio": 600, "cupo": 20},
    {"id": 11, "nombre": "Powerlifting",         "precio": 600, "cupo": 20},
]

for(let i = 0; i<programas.length; i++) {
    programas[i].img = `../../images/card${i+1}.jpg`
};

console.log(programas);
