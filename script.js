const races = [
    { value: "Clear" },
    { value: "Dragonborn", label: "Dragonborn" },
    { value: "Dwarf", label: "Dwarf" },
    { value: "Elf", label: "Elf" },
    { value: "Gnome", label: "Gnome" },
    { value: "Halfling", label: "Halfling" },
    { value: "Half-Elf", label: "Half-Elf" },
    { value: "Half-Orc", label: "Half-Orc" },
    { value: "Human", label: "Human" },
    { value: "Tiefling", label: "Tiefling" },
  ];

  const classes = [
    { value: "Clear" },
    { value: "Artificer", label: "Artificer" },
    { value: "Barbarian", label: "Barbarian" },
    { value: "Bard", label: "Bard" },
    { value: "Cleric", label: "Cleric" },
    { value: "Druid", label: "Druid" },
    { value: "Fighter", label: "Fighter" },
    { value: "Monk", label: "Monk" },
    { value: "Paladin", label: "Paladin" },
    { value: "Ranger", label: "Ranger" },
    { value: "Rogue", label: "Rogue" },
    { value: "Sorcerer", label: "Sorcerer" },
    { value: "Warlock", label: "Warlock" },
    { value: "Wizard", label: "Wizard" },
  ];

  const raceSelect = document.getElementById("race");
  const subraceSelect = document.getElementById("subrace");
  const classSelect = document.getElementById("class");
  const subclassSelect = document.getElementById("subclass");

  // Populate race menu
  races.forEach((race) => {
    const option = document.createElement("option");
    option.value = race.value;
    option.textContent = race.label;
    raceSelect.appendChild(option);
  });

  // Define subraces based on race selection
  const subraces = {
    Dragonborn: [
      "Black",
      "Blue",
      "Brass",
      "Bronze",
      "Copper",
      "Gold",
      "Green",
      "Red",
      "Silver",
      "White",
    ],
    Dwarf: ["Hill Dwarf", "Mountain Dwarf"],
    Elf: ["Dark Elf", "High Elf", "Wood Elf"],
    Gnome: ["Forest", "Rock"],
    Halfling: ["Lightfoot", "Stout"],
    "Half-Elf": ["Human", "Orc"],
    "Half-Orc": ["Human", "Elf"],
    Human: ["Boring", "Variant"],
    Tiefling: ["Bloodline of Asmodeus"],
  };

  // Populate subrace menu based on race selection
  raceSelect.addEventListener("change", () => {
    const selectedRace = raceSelect.value;
    subraceSelect.innerHTML = ""; // Clear existing options

    subraces[selectedRace].forEach((subrace) => {
      const option = document.createElement("option");
      option.value = subrace;
      option.textContent = subrace;
      subraceSelect.appendChild(option);
    });
  });

  // Populate class menu
  classes.forEach((characterClass) => {
    const option = document.createElement("option");
    option.value = characterClass.value;
    option.textContent = characterClass.label;
    classSelect.appendChild(option);
  });

  // Define subclasses based on class selection
  const subclasses = {
    Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
    Barbarian: [
      "Path of the Ancestral Guardian",
      "Path of the Battlerager",
      "Path of the Beast",
      "Path of the Berserker",
      "Path of the Giant",
      "Path of the Storm Herald",
      "Path of the Totem Warrior",
      "Path of Wild Magic",
      "Path of the Zealot",
    ],
    Bard: [
      "College of Creation",
      "College of Eloquence",
      "College of Glamour",
      "College of Lore",
      "College of Spirits",
      "College of Swords",
      "College of Valor",
      "College of Whispers",
    ],
    Cleric: [
      "Arcana Domain",
      "Death Domain",
      "Forge Domain",
      "Grave Domain",
      "Knowledge Domain",
      "Life Domain",
      "Light Domain",
      "Nature Domain",
      "Order Domain",
      "Peace Domain",
      "Tempest Domain",
      "Trickery Domain",
      "Twilight Domain",
      "War Domain",
    ],
    Druid: [
      "Circle of Dreams",
      "Circle of the Land",
      "Circle of the Moon",
      "Circle of the Shepherd",
      "Circle of Spores",
      "Circle of Stars",
      "Circle of Wildfire",
    ],
    Fighter: [
      "Arcane Archer",
      "Banneret",
      "Battle Master",
      "Cavalier",
      "Champion",
      "Echo Knight",
      "Eldritch Knight",
      "Psi Warrior",
      "Rune Knight",
      "Samurai",
    ],
    Monk: [
      "Way of Mercy",
      "Way of the Ascendant Dragon",
      "Way of the Astral Self",
      "Way of the Drunken Master",
      "Way of the Four Elements",
      "Way of the Kensei",
      "Way of the Long Death",
      "Way of the Open Hand",
      "Way of Shadow",
      "Way of the Sun Soul",
    ],
    Paladin: [
      "Oath of the Ancients",
      "Oath of Conquest",
      "Oath of the Crown",
      "Oath of Devotion",
      "Oath of Glory",
      "Oath of Redemption",
      "Oath of Vengeance",
      "Oath of the Watchers",
      "Oathbreaker",
    ],
    Ranger: [
      "Beast Master Conclave",
      "Drakewarden",
      "Fey Wanderer",
      "Gloom Stalker Conclave",
      "Horizon Walker Conclave",
      "Hunter Conclave",
      "Monster Slayer Conclave",
      "Swarmkeeper",
    ],
    Rogue: [
      "Arcane Trickster",
      "Assassin",
      "Inquisitive",
      "Mastermind",
      "Phantom",
      "Scout",
      "Soulknife",
      "Swashbuckler",
      "Thief",
    ],
    Sorcerer: [
      "Aberrant Mind",
      "Clockwork Soul",
      "Favored Soul",
      "Favored Soul Revisited",
      "Giant Soul",
      "Lunar Magic",
      "Mage of Prismari",
      "Mage of Quandrix",
      "Phoenix Sorcery",
      "Psionic Soul",
      "Sea Sorcery",
      "Shadow",
      "Stone Sorcery",
    ],
    Warlock: [
      "Celestial",
      "Genie",
      "Ghost in the Machine",
      "Hexblade",
      "Lurker in the Deep",
      "Mage of Silverquill",
      "Mage of Witherbloom",
      "Noble Genie",
      "Raven Queen",
      "Seeker",
      "Undead",
      "Undying Light",
    ],
    Wizard: [
      "Artificer",
      "School of Invention",
      "School of Lore Mastery",
      "Mage of Lorehold",
      "Mage of Prismari",
      "Mage of Quandrix",
      "Mage of Silverquill",
      "School of Onomancy",
      "Order of Scribes",
      "Psionics",
      "School of Technomancy",
      "School of Theurgy",
    ],
  };

  // Populate subclass menu based on class selection
  classSelect.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    subclassSelect.innerHTML = ""; // Clear existing options

    subclasses[selectedClass].forEach((subclass) => {
      const option = document.createElement("option");
      option.value = subclass;
      option.textContent = subclass;
      subclassSelect.appendChild(option);
    });
  });

  // Function to save selected option to local storage
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  } // Event listeners for dropdowns
  raceSelect.addEventListener("change", () => {
    const selectedRace = raceSelect.value;
    saveToLocalStorage("selectedRace", selectedRace);
  });

  classSelect.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    saveToLocalStorage("selectedClass", selectedClass);
  });
  subraceSelect.addEventListener("change", () => {
    const selectedSubrace = subraceSelect.value;
    saveToLocalStorage("selectedSubrace", selectedSubrace);
  });

  subclassSelect.addEventListener("change", () => {
    const selectedSubclass = subclassSelect.value;
    saveToLocalStorage("selectedSubclass", selectedSubclass);
  });

  // Restore selected options from local storage (on page load)
  function restoreFromLocalStorage() {
    const savedRace = localStorage.getItem("selectedRace");
    const savedClass = localStorage.getItem("selectedClass");
    const savedSubrace = localStorage.getItem("selectedSubrace");
    const savedSubclass = localStorage.getItem("selectedSubclass");

    // Set the selected options
    raceSelect.value = savedRace || "Clear";
    classSelect.value = savedClass || "Clear";
    subraceSelect.value = savedSubrace || "Clear";
    subclassSelect.value = savedSubclass || "Clear";
  }

  // Populate subclass menu based on class selection
  classSelect.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    subclassSelect.innerHTML = ""; // Clear existing options

    subclasses[selectedClass].forEach((subclass) => {
      const option = document.createElement("option");
      option.value = subclass;
      option.textContent = subclass;
      subclassSelect.appendChild(option);
    });
  });

  // Call the function to restore options on page load
  restoreFromLocalStorage();