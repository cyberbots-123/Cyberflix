import { assets } from "../assets/assets";

export const festData = [
  {
    category: "Grades 3–5",
    zones: [
      {
        name: "LUMINA FORGE",
        image: assets.Zone1A,
        detailImage: assets.Naruto,
        play: "Individual Player",
        handbook: assets.LuminaForgePDF,
        registerLink: "https://forms.gle/lumina-forge-temp",
        backstory:
          "Once a radiant hub of innovation, the Hidden Village now lies in darkness after the Akatsuki’s devastating attack. Young engineers must pilot their NAVIGATION bots to restore essential systems—streetlights, windmills, water pumps, gates—and collect flags. Only the fastest and most precise will light the Hokage Monument and bring the village back to life.",
        objective:
          "Navigate the bot through the maze, complete Four electrical and mechanical challenges, collect all flags, and return to the central monument to press the buzzer.",
        arenaOverview:
          "- Leaf-shaped challenge zones around a central Hokage Monument.\n- Each zone presents one electrical or mechanical hurdle and one flag.\n- Central monument lights up once all flags are inserted.",
        challenges: [
          {
            name: "Street Light Revival",
            type: "LED Circuit",
            description:
              "Connect wires correctly to power the streetlight and restore illumination.",
            reward: "1 Flag",
          },
          {
            name: "Windmill Activation",
            type: "Diode Circuit",
            description:
              "Orient the diode correctly to run the DC motor windmill.",
            reward: "1 Flag",
          },
          {
            name: "Water Source Repair",
            type: "Potentiometer & Pump",
            description: "Tune potentiometers to start the water pump.",
            reward: "1 Flag",
          },
          {
            name: "DPDT Parking",
            type: "Control Precision",
            description:
              "Park the bot accurately within the marked boundary.",
            reward: "1 Flag",
          },
        ],
        gameFlow:
          "1. Start at your zone.\n2. Timer starts on referee’s signal.\n3. Navigate each hurdle sequentially and collect flags.\n4. Return to the central monument.\n5. Insert flags and press buzzer to light up the village.\n6. Shortest time wins.",
        rules: {
          participation: [
            "Open to Grades 3–5 only.",
            "Each participant operates individually—no external assistance.",
            "Pre-round inspection mandatory.",
            "Round-1 10 Minutes",
            "Round-2 7 Minutes"
          ],
          conduct: [
            "Gameplay begins after referee’s start signal.",
            "Touching the bot during run (without approval) = –10 points.",
            "Skipping or incorrectly completing hurdle = no flag.",
            "Crossing arena boundaries = +20s penalty.",
            "Damaging arena/props = disqualification.",
          ],
          scoring: [
            { task: "Street Light Revival", points: 10 },
            { task: "Windmill Activation", points: 10 },
            { task: "Water Source Repair", points: 10 },
            { task: "Security Gate Fix", points: 10 },
            { task: "DPDT Parking", points: 10 },
            {
              bonus: "Fastest completion +5",
              penalty: "Boundary cross +20s, Touching Bot -10",
            },
          ],
          judging: [
            "Accuracy of task completion",
            "Circuit wiring and functionality",
            "Control smoothness and timing",
            "Discipline and rule adherence",
            "Overall performance efficiency",
          ],
          safety: [
            "Handle components carefully",
            "Keep hands clear of moving wheels/servo parts",
            "Avoid water near circuits",
            "Batteries insulated and fixed",
            "Follow all staff instructions",
          ],
        },
      },
      {
        name: "DRAGON VAULT",
        image: assets.Zone1B,
        detailImage: assets.Dragonball,
        play: "Team of 2 (Collector & Snatcher)",
        handbook: assets.DragonVaultPDF,
        registerLink: "https://forms.gle/dragon-vault-temp",
purchaseLink: "https://forms.gle/purchase-dragon-vault-temp",

        backstory:
          "The Dragon Balls, once protecting the land, have been scattered by a powerful villain. Teams of Collector & Snatcher must retrieve the Dragon Balls, outwit opponents, and restore peace.",
        objective:
          "Manual bots to collect metal coins while avoiding fake/bomb coins and outscore opponents.",
        arenaOverview:
          "- Maze divided into 3 zones with gates, safe zones, and coin placements.\n- Metal (+10 pts), Fake (0), Bomb (–10 pts & 20s freeze).\n- Safe zones allow temporary storage.\n- Gates open/close every 10s during Finals.",
        gameFlow:
          "1. Teams start at base zones.\n2. Collector collects coins, Snatcher steals strategically.\n3. Swap roles at 5 minutes.\n4. Deposit coins in safe zones.\n5. Avoid bomb coins.\n6. Highest total points wins.",
        rules: {
          participation: [
            "Grades 3–5 only.",
            "Team of 2 members.",
            "Operate independently, no external help.",
            "Bots checked for compliance.",
            "Round 1 - 10 Minutes",
            "Round 2 - 8 Minutes",
            "Time continues even if the bot malfunctions during the round."
          ],
          conduct: [
            "Start only on referee’s signal",
            "Touching bot outside rules = –10 pts",
            "Crossing boundaries = -20s",
            "Skipping coins/hurdles = 0 pts",
          ],
          scoring: [
            { task: "Metal Coin", points: 10 },
            { task: "Fake Coin", points: -5 },
            { task: "Bomb Coin", points: -10 },
            { task: "Bonus Clearing All Coins", points: 20 },
          ],
          judging: [
            "Accuracy & strategy",
            "Role execution",
            "Efficiency in safe zones",
            "Rule adherence",
            "Consistency",
          ],
          safety: [
            "Handle bots carefully",
            "Keep hands away from moving parts",
            "Avoid damaging props",
            "Batteries secured",
            "Follow staff instructions",
          ],
        },
      },
    ],
  },
  {
    category: "Grades 6–8",
    zones: [
      {
        name: "NAUTICA QUEST",
        image: assets.Zone2,
        detailImage: assets.Onepiece,
        play: "Team of 2",
        handbook: assets.NauticaQuestPDF,
        registerLink: "https://forms.gle/nautica-quest-temp",
purchaseLink: "https://forms.gle/purchase-nautica-quest-temp",

        backstory:
          "Set sail into the Grand Line! The world’s oceans are in chaos after the mysterious appearance of cursed Devil Fruits across the islands. Each island represents the legacy of a Straw Hat Pirate — a test of creativity, control, and courage. Your mission: journey through perilous terrains, face mechanical challenges, and defuse the Big Devil Fruit Bomb before time runs out.",
        objective:
          "Teams must navigate through five mechanical and sensor-based island challenges, collecting clues and defusing the Big Devil Fruit Bomb at the final island (Raftel).",
        arenaOverview:
          "Five themed islands arranged sequentially, each featuring unique mechanics like rotating tunnels, moving bridges.",
        gameFlow:
          "1. Prelims: Each player controls a bot through assigned islands.\n2. Complete your island challenge and defuse the Devil Fruit by pressing the limit switch.\n3. Green LED indicates completion.\n4. Advance to Raftel and defuse the Big Devil Fruit Bomb.\n5. Finale: Complete all islands again; decode and input the correct button sequence to defuse the bomb.\n6. Incorrect sequence triggers a 20-second penalty.\n7. Complete within 10 minutes to qualify.\n8. Half-time role swap",
        rules: {
          participation: [
            "Open to Grades 6–8 only.",
            "Team of 2 members.",
            "Approved bots only (Bluetooth control).",
            "Each player controls one bot.",
            "No external help or substitutions allowed.",
            "Round 1- 10 Minutes",
            "Round 2- 7 Minutes"
          ],
          conduct: [
            "Start only after referee’s signal.",
            "Touching/repositioning bot = –10 coins.",
            "Crossing island boundary = -20s penalty.",
            "Skipping island or incomplete task = 0 coins.",
            "Time continues even if bot malfunctions.",
            "One restart allowed (prelims only).",
            "Judges’ decisions final.",
          ],
          scoring: [
            { task: "Island Completion", points: 20 },
            { task: "Big Devil Fruit Bomb Defusal", points: 50 },
            {
              bonus: "Fastest completion +10",
              penalty: "Touch –10 | Boundary -20s | Wrong sequence -20s",
            },
            { total: "150 coins possible" },
          ],
          judging: [
            "Accuracy in completing mechanical/sensor challenges.",
            "Smooth Bluetooth control and navigation.",
            "Correct sequence execution on final island.",
            "Team coordination and communication.",
            "Safety and rule adherence.",
          ],
          safety: [
            "Ensure all electrical connections are secure.",
            "Keep hands away from moving parts.",
            "Avoid water spills near electronics.",
            "Maintain voltage limits.",
            "Follow referee and coordinator instructions.",
          ],
        },
      },
    ],
  },
  {
    category: "Grades 9–12",
    zones: [
      {
        name: "NEXATHON",
        image: assets.Zone3,
        detailImage: assets.Students,
        play: "Team of 5",
        handbook: assets.NexathonPDF,
        registerLink: "https://forms.gle/nexathon-temp",

        backstory:
          "In the futuristic world of NEXA, robotics governs every sector—from industry to defense. But a massive system failure has corrupted all automation codes. To bring the world back online, young engineers must rebuild circuits, trace the right components, and reactivate control through logic-based coding.",
        objective:
          "Teams must complete two rounds — first by soldering a working circuit, then identifying and integrating components to build a functional robotic model with internet access.",
        arenaOverview:
          "Round 1: Soldering Rush – A member of the team will assemble and test circuits.\nRound 2: NexaThon Finale – Teams identify, connect, and activate functional models through code integration.",
        gameFlow:
          "1. Round 1: Assemble and solder working circuit.\n2. Top teams qualify for Round 2.\n3. Identify and connect correct components on kit.\n4. Correct connection reveals code snippet.\n5. Integrate all code snippets.\n6. Demonstrate working model and explain logic.",
        rules: {
          participation: [
            "Open to Grades 9–12 only.",
            "Team of 5 members.",
            "Internet are allowed.",
            "Only components provided may be used.",
            "Round 1- 30 minutes.",
            "Round 2- 2 hours."
          ],
          conduct: [
            "Teams must complete both hardware and code within time.",
            "Wrong connection = no code + 30s penalty.",
            "Unsafe circuit handling = disqualification.",
            "Teamwork and discipline mandatory.",
            "Judges’ decision final.",
          ],
          scoring: [
            { task: "Round 1 Completion", points: 50 },
            { task: "Round 2 Completion", points: 100 },
            {
              bonus: "Zero errors +5",
              penalty: "Wrong connection +30s | Unsafe handling -10",
            },
          ],
          judging: [
            "Circuit accuracy and functionality.",
            "Component identification.",
            "Coding logic and integration.",
            "Working demonstration quality.",
            "Team coordination.",
          ],
          safety: [
            "Handle soldering iron carefully.",
            "Avoid touching live circuits.",
            "Keep workspace clean and insulated.",
            "Follow coordinator instructions.",
          ],
        },
      },
    ],
  },
];

