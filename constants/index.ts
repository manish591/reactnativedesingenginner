interface PokemonStat {
  name: string;
  base_stat: number;
}

interface PokemonAbility {
  name: string;
  is_hidden: boolean;
}

interface PokemonForm {
  name: string;
  url: string;
}

interface PokemonSprites {
  front_default: string | null;
  other?: {
    'official-artwork'?: {
      front_default: string | null;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

interface Pokemon {
  id: number;
  name: string;
  forms: PokemonForm[];
  types: string;
  abilities: PokemonAbility[];
  height: number;
  weight: number;
  base_experience: number;
  stats: PokemonStat[];
  sprites: PokemonSprites;
}


export const POKIMON_DATA: Pokemon[] = [
  {
    "id": 1,
    "name": "bulbasaur",
    "forms": [
      { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon-form/1/" }
    ],
    "types": "grass",
    "abilities": [
      { "name": "overgrow", "is_hidden": false },
      { "name": "chlorophyll", "is_hidden": true }
    ],
    "height": 7,
    "weight": 69,
    "base_experience": 64,
    "stats": [
      { "name": "hp", "base_stat": 45 },
      { "name": "attack", "base_stat": 49 },
      { "name": "defense", "base_stat": 49 },
      { "name": "special-attack", "base_stat": 65 },
      { "name": "special-defense", "base_stat": 65 },
      { "name": "speed", "base_stat": 45 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
    }
  },
  {
    "id": 4,
    "name": "charmander",
    "forms": [
      { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon-form/4/" }
    ],
    "types": "fire",
    "abilities": [
      { "name": "blaze", "is_hidden": false },
      { "name": "solar-power", "is_hidden": true }
    ],
    "height": 6,
    "weight": 85,
    "base_experience": 62,
    "stats": [
      { "name": "hp", "base_stat": 39 },
      { "name": "attack", "base_stat": 52 },
      { "name": "defense", "base_stat": 43 },
      { "name": "special-attack", "base_stat": 60 },
      { "name": "special-defense", "base_stat": 50 },
      { "name": "speed", "base_stat": 65 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        }
      }
    }
  },
  {
    "id": 7,
    "name": "squirtle",
    "forms": [
      { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon-form/7/" }
    ],
    "types": "water",
    "abilities": [
      { "name": "torrent", "is_hidden": false },
      { "name": "rain-dish", "is_hidden": true }
    ],
    "height": 5,
    "weight": 90,
    "base_experience": 63,
    "stats": [
      { "name": "hp", "base_stat": 44 },
      { "name": "attack", "base_stat": 48 },
      { "name": "defense", "base_stat": 65 },
      { "name": "special-attack", "base_stat": 50 },
      { "name": "special-defense", "base_stat": 64 },
      { "name": "speed", "base_stat": 43 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        }
      }
    }
  },
  {
    "id": 2,
    "name": "ivysaur",
    "forms": [
      { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon-form/2/" }
    ],
    "types": "poison",
    "abilities": [
      { "name": "overgrow", "is_hidden": false },
      { "name": "chlorophyll", "is_hidden": true }
    ],
    "height": 10,
    "weight": 130,
    "base_experience": 142,
    "stats": [
      { "name": "hp", "base_stat": 60 },
      { "name": "attack", "base_stat": 62 },
      { "name": "defense", "base_stat": 63 },
      { "name": "special-attack", "base_stat": 80 },
      { "name": "special-defense", "base_stat": 80 },
      { "name": "speed", "base_stat": 60 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
        }
      }
    }
  },
  {
    "id": 3,
    "name": "venusaur",
    "forms": [
      { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon-form/3/" }
    ],
    "types": "grass",
    "abilities": [
      { "name": "overgrow", "is_hidden": false },
      { "name": "chlorophyll", "is_hidden": true }
    ],
    "height": 20,
    "weight": 1000,
    "base_experience": 236,
    "stats": [
      { "name": "hp", "base_stat": 80 },
      { "name": "attack", "base_stat": 82 },
      { "name": "defense", "base_stat": 83 },
      { "name": "special-attack", "base_stat": 100 },
      { "name": "special-defense", "base_stat": 100 },
      { "name": "speed", "base_stat": 80 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        }
      }
    }
  },
  {
    "id": 5,
    "name": "charmeleon",
    "forms": [
      { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon-form/5/" }
    ],
    "types": "fire",
    "abilities": [
      { "name": "blaze", "is_hidden": false },
      { "name": "solar-power", "is_hidden": true }
    ],
    "height": 11,
    "weight": 190,
    "base_experience": 142,
    "stats": [
      { "name": "hp", "base_stat": 58 },
      { "name": "attack", "base_stat": 64 },
      { "name": "defense", "base_stat": 58 },
      { "name": "special-attack", "base_stat": 80 },
      { "name": "special-defense", "base_stat": 65 },
      { "name": "speed", "base_stat": 80 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
        }
      }
    }
  },
  {
    "id": 6,
    "name": "charizard",
    "forms": [
      { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon-form/6/" }
    ],
    "types": "flying",
    "abilities": [
      { "name": "blaze", "is_hidden": false },
      { "name": "solar-power", "is_hidden": true }
    ],
    "height": 17,
    "weight": 905,
    "base_experience": 240,
    "stats": [
      { "name": "hp", "base_stat": 78 },
      { "name": "attack", "base_stat": 84 },
      { "name": "defense", "base_stat": 78 },
      { "name": "special-attack", "base_stat": 109 },
      { "name": "special-defense", "base_stat": 85 },
      { "name": "speed", "base_stat": 100 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        }
      }
    }
  },
  {
    "id": 8,
    "name": "wartortle",
    "forms": [
      { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon-form/8/" }
    ],
    "types": "water",
    "abilities": [
      { "name": "torrent", "is_hidden": false },
      { "name": "rain-dish", "is_hidden": true }
    ],
    "height": 10,
    "weight": 225,
    "base_experience": 142,
    "stats": [
      { "name": "hp", "base_stat": 59 },
      { "name": "attack", "base_stat": 63 },
      { "name": "defense", "base_stat": 80 },
      { "name": "special-attack", "base_stat": 65 },
      { "name": "special-defense", "base_stat": 80 },
      { "name": "speed", "base_stat": 58 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
        }
      }
    }
  },
  {
    "id": 9,
    "name": "blastoise",
    "forms": [
      { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon-form/9/" }
    ],
    "types": "water",
    "abilities": [
      { "name": "torrent", "is_hidden": false },
      { "name": "rain-dish", "is_hidden": true }
    ],
    "height": 16,
    "weight": 855,
    "base_experience": 239,
    "stats": [
      { "name": "hp", "base_stat": 79 },
      { "name": "attack", "base_stat": 83 },
      { "name": "defense", "base_stat": 100 },
      { "name": "special-attack", "base_stat": 85 },
      { "name": "special-defense", "base_stat": 105 },
      { "name": "speed", "base_stat": 78 }
    ],
    "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "other": {
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
        }
      }
    }
  }
]

export const POKIMON_CARD_COLOR: Record<string, string> = {
  poison: '#d7c2e0',
  water: '#bde3f2',
  grass: '#c9e7c3',
  flying: '#d6d6f5',
  fire: '#efd3ba',
};