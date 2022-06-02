const programas = [
    {"id": 1, "nombre": "Couch to 5K",           "precio": 600, "cupo": 50},
    {"id": 2, "nombre": "Hatha Yoga",            "precio": 400, "cupo": 40},
    {"id": 3, "nombre": "Boring But Big",        "precio": 500, "cupo": 20},
    {"id": 4, "nombre": "Pull, Push, Legs 3x",   "precio": 500, "cupo": 20},
    {"id": 5, "nombre": "Pull, Push, Legs 4x",   "precio": 600, "cupo": 20},
    {"id": 6, "nombre": "Pull, Push, Legs 5x",   "precio": 700, "cupo": 20},
    {"id": 7, "nombre": "Crossfit",              "precio": 500, "cupo": 30},
    {"id": 8, "nombre": "Boxing",                "precio": 400, "cupo": 20},
    {"id": 9, "nombre": "Crossfit",              "precio": 800, "cupo": 30},
    {"id": 10, "nombre": "Kickboxing",            "precio": 600, "cupo": 20},
    {"id": 11, "nombre": "Powerlifting",          "precio": 600, "cupo": 20},
    {"id": 12, "nombre": "Coaching Personalizado","precio": 1200, "cupo": 10},    
]

for(let i = 0; i<programas.length; i++) {
    programas[i].img = `../../images/card${i+1}.jpg`
};
