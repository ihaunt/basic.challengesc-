


let hero = {
    Name: ' ',
    Age: 24,

    type: {
        0: ['Warrior', 'Espada'],
        1: ['Wizard', 'Magia'],
        2: ['Monk', 'Artes marciais'],
        3: ['Ninja', 'Shuriken'],
    }
}

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = '';

        for (let index in hero.type) {
            if (hero.type[index][0] === tipo) {
                [this.tipo, this.ataque] = hero.type[index];
                break;
            }
        }
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Wizard':
                ataque = 'usou magia';
                break;
            case 'Warrior':
                ataque = 'usou espada';
                break;
            case 'Monk':
                ataque = 'usou artes marciais';
                break;
            case 'Ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
let meuHeroi = new Heroi('Herói A', 30, 'Ninja');
meuHeroi.atacar();
