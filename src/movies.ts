const moviesJSONData = [
  {
    id: 1,
    name: "Stand By Me",
    score: "235 points",
    status: false,
  },
  {
    id: 2,
    name: "Raging Bull",
    score: "609 points",
    status: false,
  },
  {
    id: 3,
    name: "Amelie",
    score: "647 points",
    status: false,
  },
  {
    id: 4,
    name: "Titanic",
    score: "927 points",
    status: false,
  },
  {
    id: 5,
    name: "Good Will Hunting",
    score: "682 points",
    status: false,
  },
  {
    id: 6,
    name: "Arrival",
    score: "222 points",
    status: false,
  },
  {
    id: 7,
    name: "Lost In Translation",
    score: "609 points",
    status: false,
  },
  {
    id: 8,
    name: "The Princess Bride",
    score: "444 points",
    status: false,
  },
  {
    id: 9,
    name: "The Terminator",
    score: "60 points",
    status: false,
  },
  {
    id: 10,
    name: "The Prestige",
    score: "24 points",
    status: false,
  },
  {
    id: 11,
    name: "No Country For Old Men",
    score: "851 points",
    status: false,
  },
  {
    id: 12,
    name: "Shaun Of The Dead",
    score: "886 points",
    status: false,
  },
  {
    id: 13,
    name: "The Exorcist",
    score: "183 points",
    status: false,
  },
  {
    id: 14,
    name: "Predator",
    score: "720 points",
    status: false,
  },
  {
    id: 15,
    name: "Indiana Jones And The Last Crusade",
    score: "691 points",
    status: false,
  },
  {
    id: 16,
    name: "L\u00c3\u00a9on",
    score: "110 points",
    status: false,
  },
  {
    id: 17,
    name: "Rocky",
    score: "561 points",
    status: false,
  },
  {
    id: 18,
    name: "True Romance",
    score: "699 points",
    status: false,
  },
  {
    id: 19,
    name: "Some Like It Hot",
    score: "277 points",
    status: false,
  },
  {
    id: 20,
    name: "The Social Network",
    score: "117 points",
    status: false,
  },
  {
    id: 21,
    name: "Spirited Away",
    score: "308 points",
    status: false,
  },
  {
    id: 22,
    name: "Captain America: Civil War",
    score: "377 points",
    status: false,
  },
  {
    id: 23,
    name: "Oldboy",
    score: "145 points",
    status: false,
  },
  {
    id: 24,
    name: "Toy Story",
    score: "146 points",
    status: false,
  },
  {
    id: 25,
    name: "A Clockwork Orange",
    score: "244 points",
    status: false,
  },
  {
    id: 26,
    name: "Fargo",
    score: "751 points",
    status: false,
  },
  {
    id: 27,
    name: "Mulholland Dr.",
    score: "368 points",
    status: false,
  },
  {
    id: 28,
    name: "Seven Samurai",
    score: "309 points",
    status: false,
  },
  {
    id: 29,
    name: "Rear Window",
    score: "792 points",
    status: false,
  },
  {
    id: 30,
    name: "Hot Fuzz",
    score: "228 points",
    status: false,
  },
  {
    id: 31,
    name: "The Lion King",
    score: "757 points",
    status: false,
  },
  {
    id: 32,
    name: "Singin' In The Rain",
    score: "536 points",
    status: false,
  },
  {
    id: 33,
    name: "Ghostbusters",
    score: "390 points",
    status: false,
  },
  {
    id: 34,
    name: "Memento",
    score: "45 points",
    status: false,
  },
  {
    id: 35,
    name: "Return Of The Jedi",
    score: "731 points",
    status: false,
  },
  {
    id: 36,
    name: "Avengers Assemble",
    score: "515 points",
    status: false,
  },
  {
    id: 37,
    name: "L.A. Confidential",
    score: "275 points",
    status: false,
  },
  {
    id: 38,
    name: "Donnie Darko",
    score: "564 points",
    status: false,
  },
  {
    id: 39,
    name: "La La Land",
    score: "451 points",
    status: false,
  },
  {
    id: 40,
    name: "Forrest Gump",
    score: "933 points",
    status: false,
  },
  {
    id: 41,
    name: "American Beauty",
    score: "93 points",
    status: false,
  },
  {
    id: 42,
    name: "E.T. \u00e2\u0080\u0093 The Extra Terrestrial",
    score: "151 points",
    status: false,
  },
  {
    id: 43,
    name: "Inglourious Basterds",
    score: "482 points",
    status: false,
  },
  {
    id: 44,
    name: "Whiplash",
    score: "255 points",
    status: false,
  },
  {
    id: 45,
    name: "Reservoir Dogs",
    score: "693 points",
    status: false,
  },
  {
    id: 46,
    name: "Pan's Labyrinth",
    score: "81 points",
    status: false,
  },
  {
    id: 47,
    name: "Vertigo",
    score: "953 points",
    status: false,
  },
  {
    id: 48,
    name: "Psycho",
    score: "427 points",
    status: false,
  },
  {
    id: 49,
    name: "Once Upon A Time In The West",
    score: "901 points",
    status: false,
  },
  {
    id: 50,
    name: "It's A Wonderful Life",
    score: "409 points",
    status: false,
  },
  {
    id: 51,
    name: "Lawrence Of Arabia",
    score: "144 points",
    status: false,
  },
  {
    id: 52,
    name: "Trainspotting",
    score: "580 points",
    status: false,
  },
  {
    id: 53,
    name: "The Silence Of The Lambs",
    score: "934 points",
    status: false,
  },
  {
    id: 54,
    name: "Interstellar",
    score: "477 points",
    status: false,
  },
  {
    id: 55,
    name: "Citizen Kane",
    score: "446 points",
    status: false,
  },
  {
    id: 56,
    name: "Drive",
    score: "988 points",
    status: false,
  },
  {
    id: 57,
    name: "Gladiator",
    score: "684 points",
    status: false,
  },
  {
    id: 58,
    name: "One Flew Over The Cuckoo's Nest",
    score: "195 points",
    status: false,
  },
  {
    id: 59,
    name: "There Will Be Blood",
    score: "852 points",
    status: false,
  },
  {
    id: 60,
    name: "Eternal Sunshine Of The Spotless Mind",
    score: "543 points",
    status: false,
  },
  {
    id: 61,
    name: "12 Angry Men",
    score: "152 points",
    status: false,
  },
  {
    id: 62,
    name: "Saving Private Ryan",
    score: "875 points",
    status: false,
  },
  {
    id: 63,
    name: "Mad Max: Fury Road",
    score: "818 points",
    status: false,
  },
  {
    id: 64,
    name: "The Thing",
    score: "907 points",
    status: false,
  },
  {
    id: 65,
    name: "The Departed",
    score: "988 points",
    status: false,
  },
  {
    id: 66,
    name: "The Shining",
    score: "874 points",
    status: false,
  },
  {
    id: 67,
    name: "Guardians Of The Galaxy",
    score: "539 points",
    status: false,
  },
  {
    id: 68,
    name: "Schindler's List",
    score: "672 points",
    status: false,
  },
  {
    id: 69,
    name: "The Usual Suspects",
    score: "439 points",
    status: false,
  },
  {
    id: 70,
    name: "Taxi Driver",
    score: "958 points",
    status: false,
  },
  {
    id: 71,
    name: "Seven",
    score: "734 points",
    status: false,
  },
  {
    id: 72,
    name: "The Big Lebowski",
    score: "440 points",
    status: false,
  },
  {
    id: 73,
    name: "Casablanca",
    score: "16 points",
    status: false,
  },
  {
    id: 74,
    name: "The Good, The Bad And The Ugly",
    score: "829 points",
    status: false,
  },
  {
    id: 75,
    name: "Heat",
    score: "869 points",
    status: false,
  },
  {
    id: 76,
    name: "Terminator 2: Judgment Day",
    score: "634 points",
    status: false,
  },
  {
    id: 77,
    name: "The Matrix",
    score: "701 points",
    status: false,
  },
  {
    id: 78,
    name: "The Lord Of The Rings: The Two Towers",
    score: "729 points",
    status: false,
  },
  {
    id: 79,
    name: "Apocalypse Now",
    score: "976 points",
    status: false,
  },
  {
    id: 80,
    name: "2001: A Space Odyssey",
    score: "917 points",
    status: false,
  },
  {
    id: 81,
    name: "Die Hard",
    score: "573 points",
    status: false,
  },
  {
    id: 82,
    name: "Jurassic Park",
    score: "341 points",
    status: false,
  },
  {
    id: 83,
    name: "Inception",
    score: "756 points",
    status: false,
  },
  {
    id: 84,
    name: "Fight Club",
    score: "234 points",
    status: false,
  },
  {
    id: 85,
    name: "The Lord Of The Rings: The Return Of The King",
    score: "913 points",
    status: false,
  },
  {
    id: 86,
    name: "Aliens",
    score: "520 points",
    status: false,
  },
  {
    id: 87,
    name: "Alien",
    score: "353 points",
    status: false,
  },
  {
    id: 88,
    name: "Blade Runner",
    score: "892 points",
    status: false,
  },
  {
    id: 89,
    name: "The Godfather Part II",
    score: "306 points",
    status: false,
  },
  {
    id: 90,
    name: "Back To The Future",
    score: "886 points",
    status: false,
  },
  {
    id: 91,
    name: "The Lord Of The Rings: The Fellowship Of The Ring",
    score: "251 points",
    status: false,
  },
  {
    id: 92,
    name: "Star Wars",
    score: "222 points",
    status: false,
  },
  {
    id: 93,
    name: "Jaws",
    score: "675 points",
    status: false,
  },
  {
    id: 94,
    name: "Raiders Of The Lost Ark",
    score: "89 points",
    status: false,
  },
  {
    id: 95,
    name: "Goodfellas",
    score: "760 points",
    status: false,
  },
  {
    id: 96,
    name: "Pulp Fiction",
    score: "686 points",
    status: false,
  },
  {
    id: 97,
    name: "The Shawshank Redemption",
    score: "254 points",
    status: false,
  },
  {
    id: 98,
    name: "The Dark Knight",
    score: "561 points",
    status: false,
  },
  {
    id: 99,
    name: "The Empire Strikes Back",
    score: "856 points",
    status: false,
  },
  {
    id: 100,
    name: "The Godfather",
    score: "195 points",
    status: false,
  },
];
