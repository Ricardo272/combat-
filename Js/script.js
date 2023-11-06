

class personnage {
    nom_ = ""
    vie_ = 0
    atk_ = 0
    def = 0
    existe_ = false
    constructor() {
        this.nom_ = prompt("saisir un nom de joueur: ")
        this.vie_ = this.nombreAleatoire()
        this.atk_ = this.nombreAleatoire()
        this.def = this.nombreAleatoire()
        this.existe_ = true
    }

    nombreAleatoire(min, max) {
        return Math.round((100 - 20) * Math.random() + 20)
    }

    info() {
        console.log(this.nom_ + "|" + " Vie :" + this.vie_ + "|" + " Attaque :", this.atk_ + "|" + " Défense :", this.def)
    }

    attaquer(defenseur) {
        console.log("nouvelle Attaque de " + this.nom_ + " sur " + defenseur.nom_)

        if (this.atk_ > defenseur.def) {
            defenseur.vie_ = defenseur.vie_ - 10

        } else if (this.atk_ == defenseur.def) {
            defenseur.vie_ = defenseur.vie_ - 5

        } else if (this.atk_ < defenseur.def) {
            this.vie = this.vie_ - 5

        }

        if (this.vie_ <= 0) {
            console.error(" Le personnage " + this.nom_ + " est mort")
            this.existe_ = false

        } else if (defenseur.vie_ <= 0) {
            console.error(" Le personnage " + defenseur.nom_ + " est mort")
            defenseur.existe_ = false

        }
        this.info();
        defenseur.info();

    }

}
// let perso1 = new personnage("toto")
// console.log(perso1)
// let perso2 = new personnage("michel")
// console.log(perso2)

// perso1.attaquer(perso2)



function run(players) {
    if (players.length === 1) {
        console.log("Le gagnant est " + players[0].nom_);
        return;
    }

    const [attacker, defender] = getRandomPlayers(players);

    attacker.attaquer(defender);

    if (defender.existe_) {
        run(players);
    } else {
        players = players.filter(player => player !== defender);
        run(players);
    }
}
function getRandomPlayers(players) {
    const attackerIndex = Math.floor(Math.random() * players.length);
    let defenderIndex = Math.floor(Math.random() * players.length);

    while (defenderIndex === attackerIndex) {
        defenderIndex = Math.floor(Math.random() * players.length);
    }

    const attacker = players[attackerIndex];
    const defender = players[defenderIndex];

    return [attacker, defender];
}

const nombreDeJoueur = 5;
let players = [];

for (let i = 0; i < nombreDeJoueur; i++) {
    let perso = new personnage();
    players.push(perso);
}

run(players);