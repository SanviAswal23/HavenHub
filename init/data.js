const sampleListings = [

  {
    title: "Driftwood Villa on Seminyak Shore",
    description: "A barefoot-luxury villa steps from Bali's golden sands. Private deck, open-air bath, and curated sunset rituals await.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800" },
    price: 420,
    location: "Seminyak, Bali",
    country: "Indonesia",
    category: "beach"
  },
  {
    title: "Whitewashed Beach House in Santorini",
    description: "Clinging to volcanic cliffs with unobstructed Aegean views. A serene retreat where the sea meets infinity.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800" },
    price: 680,
    location: "Oia, Santorini",
    country: "Greece",
    category: "beach"
  },
  {
    title: "Overwater Bungalow at Bora Bora Lagoon",
    description: "Sleep above turquoise shallows in a thatched bungalow with a glass floor panel revealing marine life below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800" },
    price: 1100,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "beach"
  },
  {
    title: "Tulum Jungle-Beach Cabana",
    description: "Eco-chic palapa nestled between ancient jungle and Caribbean coast. Wake up to howler monkeys and turquoise waves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" },
    price: 310,
    location: "Tulum",
    country: "Mexico",
    category: "beach"
  },
  {
    title: "Amalfi Cliffside Retreat",
    description: "A sun-drenched villa carved into the Amalfi Coast's terraced cliffs. Lemon groves, sea breezes, and timeless Italian charm.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800" },
    price: 750,
    location: "Positano, Amalfi Coast",
    country: "Italy",
    category: "beach"
  },
  {
    title: "Maldives Water Villa Escape",
    description: "A secluded water villa with a private pool, coral reef snorkeling, and butler service around the clock.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800" },
    price: 1450,
    location: "North Malé Atoll",
    country: "Maldives",
    category: "beach"
  },
  {
    title: "Beachfront Riad in Essaouira",
    description: "A restored Moroccan riad opening onto a wild Atlantic beach. Hand-carved arches, blue tiles, and ocean winds.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800" },
    price: 290,
    location: "Essaouira",
    country: "Morocco",
    category: "beach"
  },
  {
    title: "Malibu Glass House on the Pacific",
    description: "Floor-to-ceiling glass walls frame epic Pacific sunsets. Minimalist luxury meets California surf culture.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800" },
    price: 995,
    location: "Malibu, California",
    country: "United States",
    category: "beach"
  },
  {
    title: "Sri Lanka Surf Shack & Villa",
    description: "Right on Weligama Bay's legendary point break. Surf at dawn, hammock at dusk — an unfiltered paradise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
    price: 260,
    location: "Weligama",
    country: "Sri Lanka",
    category: "beach"
  },
  {
    title: "Cape Town Clifftop Beach House",
    description: "Perched above Clifton's famous white sands with panoramic Atlantic and Table Mountain views. Dramatic and serene.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
    price: 580,
    location: "Clifton, Cape Town",
    country: "South Africa",
    category: "beach"
  },
  {
    title: "Ko Lanta Secluded Beach Villa",
    description: "A private teak villa on a quiet stretch of Thai coastline. Pristine waters, palm shade, and total seclusion.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800" },
    price: 340,
    location: "Ko Lanta",
    country: "Thailand",
    category: "beach"
  },
  {
    title: "Byron Bay Beachfront Cottage",
    description: "A chic Australian cottage on the sand at Byron Bay. Morning yoga deck, outdoor shower, and bohemian spirit.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800" },
    price: 490,
    location: "Byron Bay, New South Wales",
    country: "Australia",
    category: "beach"
  },
  {
    title: "Côte d'Azur Beach Penthouse",
    description: "Sun-soaked terrace over the French Riviera. Rosé, Riviera lifestyle, and the sparkling Mediterranean at your feet.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800" },
    price: 870,
    location: "Nice",
    country: "France",
    category: "beach"
  },
  {
    title: "Zanzibar Spice Island Beach House",
    description: "A breezy coral-stone cottage on Nungwi Beach. Turquoise reefs, dhow boats at sunset, and Swahili hospitality.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=800" },
    price: 295,
    location: "Nungwi, Zanzibar",
    country: "Tanzania",
    category: "beach"
  },
  {
    title: "Phuket Hillside Ocean Villa",
    description: "Cascading over a jungle hillside above Kata Noi Beach. Infinity pool, Buddha garden, and panoramic Andaman views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800" },
    price: 630,
    location: "Kata Noi, Phuket",
    country: "Thailand",
    category: "beach"
  },
  {
    title: "Hamptons Shingled Beach Estate",
    description: "A classic Hamptons estate on Dune Road — wide porches, cedar shingles, private beach access, and summer perfection.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    price: 1250,
    location: "Westhampton Beach, New York",
    country: "United States",
    category: "beach"
  },
  {
    title: "Cinque Terre Cliffside Cottage",
    description: "A pastel-painted fisherman's cottage overlooking the Ligurian Sea. Hike, kayak, and feast on fresh catch by candlelight.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800" },
    price: 410,
    location: "Vernazza, Cinque Terre",
    country: "Italy",
    category: "beach"
  },
  {
    title: "Seychelles Private Island Retreat",
    description: "Exclusive villa on a granite-boulder island surrounded by coral reefs and sea turtles. Truly off the beaten path.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800" },
    price: 1600,
    location: "La Digue Island",
    country: "Seychelles",
    category: "beach"
  },
  {
    title: "Algarve Cliffside Beach Hideout",
    description: "A golden limestone villa above the famous sea stacks of Praia da Marinha. Wild beauty meets coastal comfort.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800" },
    price: 475,
    location: "Lagoa, Algarve",
    country: "Portugal",
    category: "beach"
  },
  {
    title: "Fiji Plantation Island Bure",
    description: "A traditional Fijian bure set on an exclusive plantation island. Coral gardens, ceviche at dusk, and starlit silence.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" },
    price: 820,
    location: "Malolo Island",
    country: "Fiji",
    category: "beach"
  },

  {
    title: "Ibiza Cliffside Pool Mansion",
    description: "A spectacular glass-and-stone mansion with an infinity pool suspended over the Mediterranean. Sunsets here are legendary.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800" },
    price: 1200,
    location: "Es Cubells, Ibiza",
    country: "Spain",
    category: "pools"
  },
  {
    title: "Marrakech Riad with Private Plunge Pool",
    description: "A jewel-toned riad hidden behind a carved cedar door. Mosaic plunge pool, rose-petal baths, and rooftop mint tea.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=800" },
    price: 380,
    location: "Medina, Marrakech",
    country: "Morocco",
    category: "pools"
  },
  {
    title: "Palm Springs Modernist Pool House",
    description: "A mid-century gem by a legendary architect. Kidney-shaped pool, desert garden, and retro-chic interiors.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800" },
    price: 640,
    location: "Palm Springs, California",
    country: "United States",
    category: "pools"
  },
  {
    title: "Bali Jungle Villa with Cascading Pools",
    description: "Three-tiered infinity pools flow into lush rice terrace views. A spiritual sanctuary above the Ayung River gorge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540541338537-f3eabf7e7a42?w=800" },
    price: 780,
    location: "Ubud, Bali",
    country: "Indonesia",
    category: "pools"
  },
  {
    title: "Mykonos Cycladic Pool Villa",
    description: "All-white Cycladic architecture with a cerulean pool overlooking the Aegean. Minimalism perfected under Greek sun.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800" },
    price: 920,
    location: "Elia, Mykonos",
    country: "Greece",
    category: "pools"
  },
  {
    title: "Tuscany Pool Estate Amid Vineyards",
    description: "A Renaissance-era farmhouse with a stone pool framed by cypress trees and rolling vineyards. La dolce vita, embodied.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800" },
    price: 860,
    location: "Montalcino, Tuscany",
    country: "Italy",
    category: "pools"
  },
  {
    title: "Dubai Rooftop Pool Penthouse",
    description: "A sky-high penthouse with a 40-metre rooftop pool floating above the Dubai skyline. Opulence without compromise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" },
    price: 1800,
    location: "Downtown Dubai",
    country: "UAE",
    category: "pools"
  },
  {
    title: "Provence Lavender Farm Pool Retreat",
    description: "A honey-stone bastide with a mirror pool surrounded by lavender fields. The scent alone is worth the journey.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
    price: 590,
    location: "Gordes, Provence",
    country: "France",
    category: "pools"
  },
  {
    title: "Costa Rica Treehouse with Pool",
    description: "Elevated in cloud forest canopy with a heated plunge pool and panoramic Pacific horizon views. Wild and refined.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800" },
    price: 530,
    location: "Manuel Antonio",
    country: "Costa Rica",
    category: "pools"
  },
  {
    title: "Santorini Caldera Pool Suite",
    description: "Hewn into the caldera cliff with a private heated pool facing the volcano. Waking up here redefines beauty.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1603402696166-fa87a5c5b6f3?w=800" },
    price: 1050,
    location: "Imerovigli, Santorini",
    country: "Greece",
    category: "pools"
  },
  {
    title: "Bel-Air Hillside Pool Compound",
    description: "A gated hillside compound with a 25m lap pool, home cinema, and panoramic Los Angeles city-light views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800" },
    price: 2100,
    location: "Bel-Air, Los Angeles",
    country: "United States",
    category: "pools"
  },
  {
    title: "Alentejo Pool Farmhouse Retreat",
    description: "A whitewashed cork-oak estate with a natural stone swimming pool. Slow mornings, olive groves, and Portuguese wine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800" },
    price: 445,
    location: "Évora, Alentejo",
    country: "Portugal",
    category: "pools"
  },
  {
    title: "Tulum Cenote-Pool Jungle Villa",
    description: "Built around a natural cenote converted into a freshwater pool. Ancient jungle, moonlit swims, and total serenity.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800" },
    price: 670,
    location: "Tulum Pueblo",
    country: "Mexico",
    category: "pools"
  },
  {
    title: "Singapore Skypark Pool Suite",
    description: "A Marina Bay hotel suite with access to the iconic infinity pool at 57 floors above the Lion City. Unforgettable.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800" },
    price: 980,
    location: "Marina Bay, Singapore",
    country: "Singapore",
    category: "pools"
  },
  {
    title: "Sri Lanka Tea Estate Pool Bungalow",
    description: "A colonial planter's bungalow high in the Nuwara Eliya hills. Emerald tea terraces, mist, and a heated garden pool.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
    price: 370,
    location: "Nuwara Eliya",
    country: "Sri Lanka",
    category: "pools"
  },
  {
    title: "Côte d'Azur Hillside Pool Estate",
    description: "Sweeping St Tropez bay views from a sun-drenched stone terrace and 20m mosaic pool. French luxury at its peak.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800" },
    price: 1350,
    location: "Ramatuelle, St Tropez",
    country: "France",
    category: "pools"
  },
  {
    title: "Rajasthan Desert Pool Haveli",
    description: "A royal sandstone haveli with a blue mosaic pool in the Thar Desert. Camel at dusk, stars at midnight.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800" },
    price: 490,
    location: "Jodhpur, Rajasthan",
    country: "India",
    category: "pools"
  },
  {
    title: "Quinta do Lago Golf & Pool Villa",
    description: "A contemporary Algarve villa with a private pool and manicured golf course views. Sporty elegance under endless sun.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800" },
    price: 760,
    location: "Quinta do Lago, Algarve",
    country: "Portugal",
    category: "pools"
  },
  {
    title: "Chiang Mai Hilltop Pool Villa",
    description: "A teak and glass villa above Chiang Mai's Old City. Morning mist, jungle pool, and golden temple spires below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800" },
    price: 420,
    location: "Doi Suthep, Chiang Mai",
    country: "Thailand",
    category: "pools"
  },
  {
    title: "Capri Cliffside Pool Hideaway",
    description: "A secluded limestone villa with a sea-glass mosaic pool above the Faraglioni rocks. Capri's most private escape.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800" },
    price: 1100,
    location: "Anacapri, Capri",
    country: "Italy",
    category: "pools"
  },

  {
    title: "Zermatt Alpine Chalet below the Matterhorn",
    description: "A hand-hewn timber chalet with a direct view of the Matterhorn. Crackling fire, mulled wine, and infinite snow.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800" },
    price: 980,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountain"
  },
  {
    title: "Dolomites Glass Cabin at Tre Cime",
    description: "A transparent mountain pod perched above the iconic Tre Cime di Lavaredo. Stargazing from your bed is mandatory.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
    price: 780,
    location: "Auronzo, Dolomites",
    country: "Italy",
    category: "mountain"
  },
  {
    title: "Patagonia Wilderness Cabin",
    description: "Off-grid timber cabin at the base of the Torres del Paine. Guanacos at the door, glaciers on the horizon.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800" },
    price: 540,
    location: "Torres del Paine",
    country: "Chile",
    category: "mountain"
  },
  {
    title: "Japanese Alps Snow Ryokan",
    description: "A traditional ryokan in the Japanese Alps with open-air onsen baths, kaiseki dinners, and washi paper screens.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" },
    price: 620,
    location: "Hakuba, Nagano",
    country: "Japan",
    category: "mountain"
  },
  {
    title: "Aspen Mountain Ski Chalet",
    description: "Ski-in/ski-out chalet with heated floors, antler chandeliers, and Ajax Mountain as your backyard.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800" },
    price: 1450,
    location: "Aspen, Colorado",
    country: "United States",
    category: "mountain"
  },
  {
    title: "Himalayan Stone Lodge in Langtang",
    description: "A remote stone lodge above the clouds in Nepal's Langtang Valley. Yak-butter tea, prayer flags, and raw Himalayan peace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516206814697-82ea2b0bb25e?w=800" },
    price: 195,
    location: "Langtang Valley",
    country: "Nepal",
    category: "mountain"
  },
  {
    title: "Scottish Highland Hunting Lodge",
    description: "A Victorian baronial lodge on a 1,000-acre Highland estate. Red deer, single malt whisky, and eternal mist.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" },
    price: 870,
    location: "Cairngorms, Scotland",
    country: "United Kingdom",
    category: "mountain"
  },
  {
    title: "Blue Ridge Mountains A-Frame Retreat",
    description: "A geometric A-frame surrounded by old-growth Appalachian forest. Wood stove, panoramic ridge views, and zero signal.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800" },
    price: 355,
    location: "Asheville, North Carolina",
    country: "United States",
    category: "mountain"
  },
  {
    title: "Chamonix Mont Blanc Ski Lodge",
    description: "A slope-side lodge with direct views of Mont Blanc's north face. Europe's highest skiing adventure from your door.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800" },
    price: 1100,
    location: "Chamonix",
    country: "France",
    category: "mountain"
  },
  {
    title: "Andes Vineyard Altitude Lodge",
    description: "A boutique lodge at 1,200m amid Malbec vines with the Andes as a backdrop. Wine, altitude, and silence.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800" },
    price: 410,
    location: "Luján de Cuyo, Mendoza",
    country: "Argentina",
    category: "mountain"
  },
  {
    title: "Atlas Mountains Berber Kasbah",
    description: "A fortified Berber kasbah with panoramic Atlas views, carved cedar ceilings, and home-cooked tagines at dusk.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800" },
    price: 270,
    location: "Aït Benhaddou",
    country: "Morocco",
    category: "mountain"
  },
  {
    title: "New Zealand Southern Alps Eco-Lodge",
    description: "An eco-lodge carved into the foothills above Lake Wanaka. Hiking, glacier heli-tours, and milky-way skies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    price: 620,
    location: "Wanaka, Otago",
    country: "New Zealand",
    category: "mountain"
  },
  {
    title: "Tibetan Border Mountain Guesthouse",
    description: "A remote guesthouse near the Tibetan border with 8,000m peaks visible from the prayer-flag terrace.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800" },
    price: 165,
    location: "Namche Bazaar",
    country: "Nepal",
    category: "mountain"
  },
  {
    title: "Kyoto Mountain Temple Guesthouse",
    description: "A centuries-old shukubo guesthouse adjacent to a Zen temple on Mount Kurama. Morning meditation included.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800" },
    price: 290,
    location: "Kurama, Kyoto",
    country: "Japan",
    category: "mountain"
  },
  {
    title: "Carpathian Forest Log Cabin",
    description: "A hand-built log cabin inside a primeval beech forest. Wolf tracks in the snow and woodsmoke at night.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800" },
    price: 230,
    location: "Sinaia, Carpathians",
    country: "Romania",
    category: "mountain"
  },
  {
    title: "Lofoten Mountain Sea Cabin",
    description: "A dramatic red fishing cabin where jagged peaks plunge into Arctic fjords. Midnight sun and northern lights alternate.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800" },
    price: 710,
    location: "Reine, Lofoten",
    country: "Norway",
    category: "mountain"
  },
  {
    title: "Bhutan Dragon Kingdom Farmhouse",
    description: "A traditional rammed-earth farmhouse in the Paro Valley. Tigers Nest monastery visible at dawn, happiness guaranteed.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516206814697-82ea2b0bb25e?w=800" },
    price: 430,
    location: "Paro Valley",
    country: "Bhutan",
    category: "mountain"
  },
  {
    title: "Georgia Svan Tower Mountain Stay",
    description: "Sleep in a thousand-year-old Svan defensive tower in the Caucasus. Glaciers, ancient churches, and wild hospitality.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" },
    price: 215,
    location: "Mestia, Svaneti",
    country: "Georgia",
    category: "mountain"
  },
  {
    title: "Whistler Peak Luxury Ski Chalet",
    description: "A contemporary ski-in/ski-out chalet with a hot tub facing Blackcomb peak. The ultimate Canadian powder experience.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800" },
    price: 1300,
    location: "Whistler, British Columbia",
    country: "Canada",
    category: "mountain"
  },
  {
    title: "Cinque Terre Hilltop Stone House",
    description: "Perched above the terraced vineyards with views of five colorful fishing villages. Pesto, porcini, and perfection.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800" },
    price: 395,
    location: "Corniglia, Cinque Terre",
    country: "Italy",
    category: "mountain"
  },

  {
    title: "Tromsø Glass Igloo Northern Lights Suite",
    description: "A heated glass igloo above the Arctic Circle. Watch auroras dance across the sky without leaving your bed.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800" },
    price: 890,
    location: "Tromsø",
    country: "Norway",
    category: "arctic"
  },
  {
    title: "Saariselkä Finnish Igloo Resort",
    description: "A thermal-glass Aurora Cabin in Finnish Lapland. Reindeer sleigh rides, frozen lakes, and celestial light shows.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=800" },
    price: 760,
    location: "Saariselkä, Lapland",
    country: "Finland",
    category: "arctic"
  },
  {
    title: "Icelandic Geothermal Hot Spring Cabin",
    description: "A black-lava cabin with a private geothermal hot tub on the Snæfellsnes Peninsula. Ice, fire, and raw Iceland.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800" },
    price: 680,
    location: "Snæfellsnes Peninsula",
    country: "Iceland",
    category: "arctic"
  },
  {
    title: "Svalbard Polar Wilderness Lodge",
    description: "A fortified expedition lodge at 78° North. Polar bears at the perimeter, dog-sled adventures, and midnight sun.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800" },
    price: 1100,
    location: "Longyearbyen, Svalbard",
    country: "Norway",
    category: "arctic"
  },
  {
    title: "Yellowknife Aurora Floating Cabin",
    description: "Suspended above Great Slave Lake on a heated floating platform. Canada's best Northern Lights corridor, unobstructed.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800" },
    price: 720,
    location: "Yellowknife, Northwest Territories",
    country: "Canada",
    category: "arctic"
  },
  {
    title: "Swedish Kiruna Treehotel Arctic Nest",
    description: "A spherical nest cabin wrapped in reflective panels, cloaked in the boreal forest at -20°C. Extraordinary calm.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
    price: 840,
    location: "Harads, Lapland",
    country: "Sweden",
    category: "arctic"
  },
  {
    title: "Reykjavik Lava Field Glass House",
    description: "A stark modernist glass house surrounded by moss-covered lava. City lights, geysers, and Greenland on clear days.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539667362-bd8adf8f3478?w=800" },
    price: 550,
    location: "Reykjavik",
    country: "Iceland",
    category: "arctic"
  },
  {
    title: "Husky Farm Cabin in Rovaniemi",
    description: "A lakeside log cabin on a working husky farm. Meet Santa's reindeer, mush your own team, and sleep under stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800" },
    price: 460,
    location: "Rovaniemi, Lapland",
    country: "Finland",
    category: "arctic"
  },
  {
    title: "Greenland Ice Sheet Basecamp Tent",
    description: "A fully guided luxury tent camp on the Greenland ice sheet. Glacier walks, kayaking icebergs, and pure silence.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800" },
    price: 1600,
    location: "Ilulissat Icefjord",
    country: "Greenland",
    category: "arctic"
  },
  {
    title: "Norwegian Fjord Fisherman's Rorbu",
    description: "A traditional red rorbu cabin on stilts above the Vestfjorden. Cod fishing, whale watching, and aurora reflections.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800" },
    price: 530,
    location: "Svolvær, Lofoten",
    country: "Norway",
    category: "arctic"
  },
  {
    title: "Abisko National Park Star-Gazing Dome",
    description: "Sweden's clearest skies surround this geodesic dome above Lake Torneträsk. An observatory with a bed inside.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800" },
    price: 690,
    location: "Abisko, Lapland",
    country: "Sweden",
    category: "arctic"
  },
  {
    title: "Churchill Polar Bear Tundra Lodge",
    description: "A heated tundra lodge with rover excursions among wild polar bears on Hudson Bay. Bucket-list, redefined.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800" },
    price: 1400,
    location: "Churchill, Manitoba",
    country: "Canada",
    category: "arctic"
  },
  {
    title: "Iceland Glacier Lagoon Cabin",
    description: "A black-timber cabin overlooking the Jökulsárlón glacier lagoon. Floating icebergs, seals, and electric auroras.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800" },
    price: 740,
    location: "Jökulsárlón, South Iceland",
    country: "Iceland",
    category: "arctic"
  },
  {
    title: "Alta Ice Hotel Suite",
    description: "Carved entirely from snow and ice each winter. Sleep under reindeer furs in a sculpted ice suite. Truly unforgettable.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=800" },
    price: 870,
    location: "Alta, Finnmark",
    country: "Norway",
    category: "arctic"
  },
  {
    title: "Taiga Forest Winter Retreat, Siberia",
    description: "A remote taiga cabin accessible only by snowmobile. Wolves, bears, Siberian silence, and a traditional banya sauna.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800" },
    price: 380,
    location: "Altai Republic",
    country: "Russia",
    category: "arctic"
  },
  {
    title: "Faroe Islands Storm-Cliffs Cottage",
    description: "A turf-roofed cottage on sheer Atlantic cliffs above puffin colonies. Fog, drama, and Viking solitude.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=800" },
    price: 490,
    location: "Gásadalur, Vágar",
    country: "Faroe Islands",
    category: "arctic"
  },
  {
    title: "Inari Wilderness Snowmobile Cabin",
    description: "Deep inside Urho Kekkonen National Park. Your sled, your route, your private birch-log cabin at the end of the trail.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800" },
    price: 520,
    location: "Inari, Lapland",
    country: "Finland",
    category: "arctic"
  },
  {
    title: "North Pole Research Station Room",
    description: "An exclusive berth aboard a luxury icebreaker at 90° North. The purest white silence imaginable. One of a kind.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800" },
    price: 3200,
    location: "North Pole",
    country: "International Waters",
    category: "arctic"
  },
  {
    title: "Newfoundland Iceberg Alley Cabin",
    description: "A weathered cedar cabin overlooking iceberg alley on the Newfoundland coast. Icebergs drift by your window in June.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800" },
    price: 340,
    location: "Twillingate, Newfoundland",
    country: "Canada",
    category: "arctic"
  },
  {
    title: "Arctic Ocean Frozen Houseboat",
    description: "A houseboat locked in the ice of the Luleå archipelago. Cross-country ski from the deck, sauna every evening.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
    price: 615,
    location: "Luleå Archipelago",
    country: "Sweden",
    category: "arctic"
  },

  {
    title: "Cotswolds Stone Farmhouse Retreat",
    description: "A Grade II listed farmhouse amid honey-stone villages. Aga cooking, walled herb garden, and village pub a stroll away.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800" },
    price: 520,
    location: "Bourton-on-the-Water, Cotswolds",
    country: "United Kingdom",
    category: "farms"
  },
  {
    title: "Tuscany Olive Farm Agriturismo",
    description: "A working olive farm near Florence with a wood-fired farmhouse kitchen. Press your own oil, harvest by hand.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
    price: 360,
    location: "Greve in Chianti, Tuscany",
    country: "Italy",
    category: "farms"
  },
  {
    title: "Provence Lavender & Honey Farm",
    description: "Stay with a master beekeeper amid the world's most famous lavender fields. Honey harvest tastings at sunrise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800" },
    price: 295,
    location: "Valensole, Provence",
    country: "France",
    category: "farms"
  },
  {
    title: "New Zealand Sheep Station Homestead",
    description: "A sprawling merino sheep station in Marlborough. Muster with horses, shear by hand, and feast on lamb under open sky.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" },
    price: 410,
    location: "Blenheim, Marlborough",
    country: "New Zealand",
    category: "farms"
  },
  {
    title: "Vermont Maple Syrup Farm Stay",
    description: "A classic New England sugar farm in peak autumn foliage. Tap maples, boil sap, and eat pancakes at the long table.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800" },
    price: 275,
    location: "Stowe, Vermont",
    country: "United States",
    category: "farms"
  },
  {
    title: "Dordogne Duck Farm Château",
    description: "A rustic château on a working duck farm in the Périgord Noir. Foie gras, truffles, and the French art of slow living.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    price: 445,
    location: "Sarlat-la-Canéda, Dordogne",
    country: "France",
    category: "farms"
  },
  {
    title: "Galicia Seafood & Cattle Farm Pazo",
    description: "A granite Galician pazo on a farm overlooking the Atlantic Rías. Octopus pulled from the sea, cows out the window.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800" },
    price: 310,
    location: "Pontevedra, Galicia",
    country: "Spain",
    category: "farms"
  },
  {
    title: "Kerala Spice Plantation Villa",
    description: "A colonial bungalow surrounded by cardamom, pepper, and cinnamon. Sunrise plantation walks and Keralan feasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=800" },
    price: 220,
    location: "Munnar, Kerala",
    country: "India",
    category: "farms"
  },
  {
    title: "Umbrian Truffle Farm Farmhouse",
    description: "A stone farmhouse in the truffle capital of the world. Hunt with a Lagotto Romagnolo, then cook your haul for dinner.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800" },
    price: 490,
    location: "Norcia, Umbria",
    country: "Italy",
    category: "farms"
  },
  {
    title: "Alentejo Cork Oak Wine Farm",
    description: "A whitewashed wine estate surrounded by ancient cork oaks. Harvest grapes, taste reserve wines, and breathe deep.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" },
    price: 380,
    location: "Monsaraz, Alentejo",
    country: "Portugal",
    category: "farms"
  },
  {
    title: "Kyoto Organic Rice Paddy Farm Stay",
    description: "Stay with a fifth-generation rice farmer in the hills above Kyoto. Plant, harvest, and eat what you grow.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800" },
    price: 195,
    location: "Wazuka, Kyoto",
    country: "Japan",
    category: "farms"
  },
  {
    title: "Patagonia Estancia Cattle Ranch",
    description: "A legendary estancia spanning 10,000 hectares of Patagonian steppe. Gaucho horsemanship and condors overhead.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 560,
    location: "Santa Cruz, Patagonia",
    country: "Argentina",
    category: "farms"
  },
  {
    title: "Cape Winelands Working Farm Cottage",
    description: "A restored 18th-century wine estate cottage at the foot of the Stellenbosch mountains. Safari wine, anyone?",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1475688621402-4257c812d6db?w=800" },
    price: 330,
    location: "Franschhoek, Western Cape",
    country: "South Africa",
    category: "farms"
  },
  {
    title: "Alsatian Vineyard Farm Half-Timbered House",
    description: "A flower-bedecked Alsatian maison de vigneron amid grand cru vineyards on the Route des Vins.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800" },
    price: 340,
    location: "Riquewihr, Alsace",
    country: "France",
    category: "farms"
  },
  {
    title: "Outback Australian Cattle Station",
    description: "A red-dust cattle station in the Northern Territory. Muster from horseback, sleep under a billion stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 290,
    location: "Katherine, Northern Territory",
    country: "Australia",
    category: "farms"
  },
  {
    title: "Swiss Alpine Dairy Farm Chalet",
    description: "Move into an Appenzell dairy farm for a week. Morning milking, cheese-making, cowbell symphonies, and meadow views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800" },
    price: 370,
    location: "Appenzell",
    country: "Switzerland",
    category: "farms"
  },
  {
    title: "Douro Valley Quinta Wine Lodge",
    description: "A terraced schist quinta at the heart of port wine country. Harvest in October, river cruises all year.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1475688621402-4257c812d6db?w=800" },
    price: 420,
    location: "Pinhão, Douro Valley",
    country: "Portugal",
    category: "farms"
  },
  {
    title: "Burgundy Domaine Farmhouse Stay",
    description: "A working Pinot Noir domaine in the heart of the Côte d'Or. Cellar tours, barrel tastings, and truffle risotto.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    price: 510,
    location: "Gevrey-Chambertin, Burgundy",
    country: "France",
    category: "farms"
  },
  {
    title: "Icelandic Turf Farm Guesthouse",
    description: "A restored medieval turf farmhouse in the Skagafjörður horse valley. Viking heritage, Icelandic horses, hot springs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539667362-bd8adf8f3478?w=800" },
    price: 340,
    location: "Skagafjörður",
    country: "Iceland",
    category: "farms"
  },
  {
    title: "Oaxacan Mezcal Agave Farm",
    description: "Sleep among agave plants on a certified mezcal palenque. Watch distillation by firelight under Oaxacan stars.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=800" },
    price: 240,
    location: "Matatlán, Oaxaca",
    country: "Mexico",
    category: "farms"
  },

  {
    title: "Loire Valley Renaissance Château",
    description: "An entire Renaissance château on the Loire. Private moat, frescoed galleries, Michelin-starred private dining.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 2800,
    location: "Amboise, Loire Valley",
    country: "France",
    category: "castles"
  },
  {
    title: "Scottish Baronial Castle on a Loch",
    description: "A turreted baronial castle with its own island in the Scottish Highlands. Stag stalking, peat fires, and full tartan service.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 3400,
    location: "Perthshire, Scotland",
    country: "United Kingdom",
    category: "castles"
  },
  {
    title: "Bavarian Fairy-Tale Castle Tower Suite",
    description: "A tower suite in a genuine Bavarian castle above the Rhine. Four-poster beds, suits of armour, and medieval feasts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 1600,
    location: "Rhine Valley, Bavaria",
    country: "Germany",
    category: "castles"
  },
  {
    title: "Irish 13th-Century Tower Keep",
    description: "A restored Norman tower keep on the Wild Atlantic Way. Spiral stone stairs, arrow slits, and crashing Atlantic waves.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 890,
    location: "Connemara, Galway",
    country: "Ireland",
    category: "castles"
  },
  {
    title: "Transylvanian Gothic Castle",
    description: "Sleep in Dracula's reputed homeland inside a Gothic Transylvanian castle. Fog, candles, wolf howls — deliciously eerie.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 740,
    location: "Bran, Transylvania",
    country: "Romania",
    category: "castles"
  },
  {
    title: "Umbrian Medieval Castle Estate",
    description: "A walled hilltop castello with frescoed chapel, olive grove, and a private labyrinth garden. Renaissance Italy, lived.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 1900,
    location: "Spoleto, Umbria",
    country: "Italy",
    category: "castles"
  },
  {
    title: "Welsh Dragon Castle Estate",
    description: "A Grade I listed 12th-century Welsh marches castle, privately rented. Dungeons converted to a wine cellar.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 2200,
    location: "Hay-on-Wye, Powys",
    country: "United Kingdom",
    category: "castles"
  },
  {
    title: "Portuguese Medieval Pousada Castle",
    description: "A state pousada converted from a 13th-century castle above the Douro. Armour in the halls, port wine at dinner.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 690,
    location: "Óbidos",
    country: "Portugal",
    category: "castles"
  },
  {
    title: "Rajput Palace Fort Hotel Suite",
    description: "A maharaja's suite inside Mehrangarh Fort. Carved sandstone, elephant parades, and Jodhpur's blue city below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800" },
    price: 1100,
    location: "Jodhpur, Rajasthan",
    country: "India",
    category: "castles"
  },
  {
    title: "Austro-Hungarian Border Castle",
    description: "A Baroque castle on the Styrian hills with private wine cellar, heated indoor pool, and 14 ornate bedrooms.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 2600,
    location: "Graz, Styria",
    country: "Austria",
    category: "castles"
  },
  {
    title: "Crusader Sea Castle, Lebanon",
    description: "A restored Crusader sea fortress turned boutique hotel. Mediterranean at every window, Phoenician history underfoot.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 560,
    location: "Sidon",
    country: "Lebanon",
    category: "castles"
  },
  {
    title: "Polish Teutonic Order Castle",
    description: "A UNESCO-listed Teutonic Gothic castle on the Vistula. Knights' halls converted to suites, amber in every corner.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 650,
    location: "Malbork",
    country: "Poland",
    category: "castles"
  },
  {
    title: "Andalusian Moorish Alcázar Villa",
    description: "A private villa within the walls of a Moorish alcázar. Arabesque arches, orange-blossom courtyards, and flamenco at night.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 1350,
    location: "Carmona, Seville",
    country: "Spain",
    category: "castles"
  },
  {
    title: "Slovenian Bled Island Castle Stay",
    description: "Reach your private castle apartment by wooden pletna boat. Lake Bled, mist, and the Julian Alps on every side.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 790,
    location: "Lake Bled",
    country: "Slovenia",
    category: "castles"
  },
  {
    title: "Dutch Moated Kasteel",
    description: "A 15th-century moated Dutch kasteel rising from tulip fields. Drawbridge, great hall, and a Michelin-starred restaurant within.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 1200,
    location: "North Brabant",
    country: "Netherlands",
    category: "castles"
  },
  {
    title: "Hungarian Baroque Palace Hotel",
    description: "A Rococo palace hotel in the Tokaj wine region. Grand ballrooms, Esterházy frescoes, and noble pince cellar dinners.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 870,
    location: "Fertőd, Western Hungary",
    country: "Hungary",
    category: "castles"
  },
  {
    title: "Japanese Feudal Shiro Castle Town",
    description: "Stay in a samurai-era machi-ya inside a castle town. Private tea ceremony, Noh performances, and original tatami rooms.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800" },
    price: 690,
    location: "Himeji, Hyogo",
    country: "Japan",
    category: "castles"
  },
  {
    title: "Croatian Adriatic Fortress Hotel",
    description: "A Venetian-built sea fortress on a Dalmatian island converted into a dramatic boutique hotel.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=800" },
    price: 740,
    location: "Hvar Island",
    country: "Croatia",
    category: "castles"
  },
  {
    title: "French Bordeaux Château Wine Estate",
    description: "A classified Bordeaux Grand Cru estate with guest turrets. Barrel room breakfasts and vineyard-view terraces.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=800" },
    price: 1500,
    location: "Saint-Émilion, Bordeaux",
    country: "France",
    category: "castles"
  },
  {
    title: "Tallinn Medieval Tower Suite",
    description: "Rent a full tower in Tallinn's UNESCO Old Town. Cannon ball niches, cobblestone views, and Estonian rye bread mornings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800" },
    price: 580,
    location: "Old Town, Tallinn",
    country: "Estonia",
    category: "castles"
  },

  {
    title: "Masai Mara Luxury Tented Camp",
    description: "Raised canvas suites on the Mara River edge. Wildebeest crossings, lion prides, and sundowners in the golden grass.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 1400,
    location: "Masai Mara",
    country: "Kenya",
    category: "camps"
  },
  {
    title: "Sahara Desert Luxury Camp",
    description: "A private Berber camp of silk tents amid Erg Chebbi's orange dunes. Camel trek at dusk, djembe drums by firelight.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    price: 590,
    location: "Merzouga, Erg Chebbi",
    country: "Morocco",
    category: "camps"
  },
  {
    title: "Okavango Delta Floating Camp",
    description: "A remote mokoro-access camp in the UNESCO Okavango Delta. Elephants wade past your tent at dawn every morning.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 1650,
    location: "Okavango Delta",
    country: "Botswana",
    category: "camps"
  },
  {
    title: "Amazon Rainforest Expedition Camp",
    description: "A floating research camp deep in the Amazon basin. Pink dolphins, caiman, and star-covered jungle nights.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
    price: 720,
    location: "Upper Amazon Basin, Loreto",
    country: "Peru",
    category: "camps"
  },
  {
    title: "Serengeti Migration Fly Camp",
    description: "A six-tent fly camp repositioned daily to follow the Great Migration. Camping under African stars with no fences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 1900,
    location: "Northern Serengeti",
    country: "Tanzania",
    category: "camps"
  },
  {
    title: "Mongolian Nomadic Ger Camp",
    description: "Authentic felt gers on the open steppe with a nomadic herding family. Eagle hunting, throat singing, mare's milk.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800" },
    price: 220,
    location: "Khövsgöl Province",
    country: "Mongolia",
    category: "camps"
  },
  {
    title: "Wadi Rum Martian Desert Camp",
    description: "A Bedouin bubble-tent camp in the Valley of the Moon. Stargazing, rock climbing, and total Martian solitude.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    price: 430,
    location: "Wadi Rum",
    country: "Jordan",
    category: "camps"
  },
  {
    title: "Borneo Jungle Canopy Camp",
    description: "Suspended platforms in an ancient Bornean dipterocarp forest. Orangutans, hornbills, and nocturnal insect concerts.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
    price: 480,
    location: "Danum Valley, Sabah",
    country: "Malaysia",
    category: "camps"
  },
  {
    title: "Namib Desert Star Camp",
    description: "Private star-gazing tents in the world's oldest desert. The Milky Way overhead, oryx at the waterhole below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 780,
    location: "Sossusvlei, Namib Desert",
    country: "Namibia",
    category: "camps"
  },
  {
    title: "Patagonian Ice-Field Base Camp",
    description: "A heated expedition camp at the edge of the Southern Patagonian Ice Field. Ice trekking and condor encounters daily.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800" },
    price: 1100,
    location: "El Chaltén, Santa Cruz",
    country: "Argentina",
    category: "camps"
  },
  {
    title: "Kruger National Park Sleep-Out Platform",
    description: "A roofless starbed platform 20m above a Kruger waterhole. Fall asleep to lion roars and wake to elephant splashing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 860,
    location: "Kruger National Park",
    country: "South Africa",
    category: "camps"
  },
  {
    title: "Atacama Desert Astro Camp",
    description: "Geodesic tents in the world's driest desert and clearest night skies. ESO telescope tours and private stargazing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    price: 640,
    location: "San Pedro de Atacama",
    country: "Chile",
    category: "camps"
  },
  {
    title: "Rajasthan Royal Desert Camp",
    description: "Regal tents furnished with antique miniatures and Jodhpuri crafts beside the Sam sand dunes. Polo at sunrise.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800" },
    price: 510,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    category: "camps"
  },
  {
    title: "Canadian Rockies Glamping Tent",
    description: "Fully outfitted canvas bell tents beside a turquoise glacial lake in Banff. Bears, moose, and mountain reflections.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 490,
    location: "Banff, Alberta",
    country: "Canada",
    category: "camps"
  },
  {
    title: "Tibetan Plateau Nomad Camp",
    description: "Black yak-hair tents at 4,500m on the Chang Tang plateau. Wild yaks, blue sheep, and snow leopard territory.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800" },
    price: 290,
    location: "Chang Tang, Tibet",
    country: "China",
    category: "camps"
  },
  {
    title: "Madagascar Lemur Forest Camp",
    description: "A stilted wooden camp in a private lemur reserve. Wake to the howl of indri and breakfast with ring-tails.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
    price: 540,
    location: "Andasibe Reserve",
    country: "Madagascar",
    category: "camps"
  },
  {
    title: "Norwegian Fjord Sea Kayak Camp",
    description: "A self-guided kayak camp island-hopping the Hardangerfjord. Porpoises, waterfalls, and camp fires on granite shores.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800" },
    price: 380,
    location: "Hardangerfjord",
    country: "Norway",
    category: "camps"
  },
  {
    title: "Great Barrier Reef Live-Aboard Camp",
    description: "Sleep aboard a research vessel anchored over the outer reef. Night dives, coral spawning, and bioluminescent seas.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800" },
    price: 820,
    location: "Coral Sea, Queensland",
    country: "Australia",
    category: "camps"
  },
  {
    title: "Ethiopian Simien Mountains Trek Camp",
    description: "A porter-carried luxury camp above 4,000m in the Simien highlands. Gelada baboons and Ethiopian wolves daily.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 370,
    location: "Simien Mountains, Amhara",
    country: "Ethiopia",
    category: "camps"
  },
  {
    title: "Alaskan Wilderness Float Plane Camp",
    description: "Fly by floatplane into a remote Brooks Range camp. Grizzlies, caribou herds, and the midnight sun over tundra.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    price: 1300,
    location: "Brooks Range, Alaska",
    country: "United States",
    category: "camps"
  },

  {
    title: "Manhattan Penthouse with Empire State Views",
    description: "A full-floor Midtown penthouse with unobstructed Empire State views. Art Deco splendour, city buzz, total luxury.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800" },
    price: 2400,
    location: "Midtown, New York City",
    country: "United States",
    category: "iconic-cities"
  },
  {
    title: "Eiffel Tower View Haussmann Apartment",
    description: "A classic Haussmann apartment on the Champ de Mars with a private terrace framing the illuminated Eiffel Tower.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    price: 1100,
    location: "7th Arrondissement, Paris",
    country: "France",
    category: "iconic-cities"
  },
  {
    title: "Tokyo Shinjuku Skyscraper Suite",
    description: "A top-floor suite above neon-lit Shinjuku. Mount Fuji at dawn, the city's electric pulse at night. Tokyo distilled.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800" },
    price: 890,
    location: "Shinjuku, Tokyo",
    country: "Japan",
    category: "iconic-cities"
  },
  {
    title: "Venice Canal Grande Palazzo Suite",
    description: "A frescoed piano nobile suite in a 16th-century palazzo on the Grand Canal. Gondolas glide past your balcony.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800" },
    price: 1600,
    location: "San Marco, Venice",
    country: "Italy",
    category: "iconic-cities"
  },
  {
    title: "Sydney Harbour Bridge View Apartment",
    description: "A waterfront apartment at Circular Quay with full Sydney Harbour Bridge and Opera House panorama. Australia's finest view.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
    price: 980,
    location: "Circular Quay, Sydney",
    country: "Australia",
    category: "iconic-cities"
  },
  {
    title: "Barcelona Eixample Modernista Flat",
    description: "A Gaudí-era apartment with preserved hydraulic tiles and a rooftop overlooking Sagrada Família's spires.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800" },
    price: 640,
    location: "Eixample, Barcelona",
    country: "Spain",
    category: "iconic-cities"
  },
  {
    title: "Istanbul Bosphorus Yalı Mansion",
    description: "A 19th-century Ottoman yalı right on the Bosphorus. Watch tankers slide past over breakfast. Two continents, one view.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800" },
    price: 1200,
    location: "Bebek, Istanbul",
    country: "Turkey",
    category: "iconic-cities"
  },
  {
    title: "Amsterdam Canal House with Gable View",
    description: "A narrow 17th-century canal house on the Herengracht with original Dutch master paintings and gabled roofline views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800" },
    price: 750,
    location: "Herengracht, Amsterdam",
    country: "Netherlands",
    category: "iconic-cities"
  },
  {
    title: "Hong Kong Kowloon Peak-View Penthouse",
    description: "A glass penthouse crowning Kowloon with the world-famous Victoria Harbour Symphony of Lights as your living room.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800" },
    price: 1400,
    location: "Tsim Sha Tsui, Hong Kong",
    country: "China",
    category: "iconic-cities"
  },
  {
    title: "Buenos Aires Palermo Chic Loft",
    description: "A design-forward loft in Palermo Soho amid Buenos Aires's best restaurants, bookshops, and milongas.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800" },
    price: 380,
    location: "Palermo, Buenos Aires",
    country: "Argentina",
    category: "iconic-cities"
  },
  {
    title: "Rome Trastevere Terrace Apartment",
    description: "A sun-drenched apartment with a jasmine-scented roof terrace above Rome's prettiest medieval quarter.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800" },
    price: 670,
    location: "Trastevere, Rome",
    country: "Italy",
    category: "iconic-cities"
  },
  {
    title: "London Notting Hill Georgian Townhouse",
    description: "A five-storey Georgian townhouse on one of Notting Hill's most coveted pastel-painted crescents.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800" },
    price: 1350,
    location: "Notting Hill, London",
    country: "United Kingdom",
    category: "iconic-cities"
  },
  {
    title: "Havana Malecón Colonial Penthouse",
    description: "A rooftop penthouse above the Malecón esplanade. Classic cars below, Caribbean beyond, and 1950s glamour inside.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    price: 290,
    location: "Vedado, Havana",
    country: "Cuba",
    category: "iconic-cities"
  },
  {
    title: "Singapore Chinatown Heritage Shophouse",
    description: "A lovingly restored Peranakan shophouse with carved timber screens, terrazzo floors, and a rooftop garden.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800" },
    price: 660,
    location: "Chinatown, Singapore",
    country: "Singapore",
    category: "iconic-cities"
  },
  {
    title: "Prague Old Town Charles Bridge Suite",
    description: "A baroque apartment with direct Charles Bridge and castle views. Bohemian crystal chandeliers and golden Gothic spires.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" },
    price: 540,
    location: "Staré Město, Prague",
    country: "Czech Republic",
    category: "iconic-cities"
  },
  {
    title: "Cairo Nile-View Luxury Suite",
    description: "A rooftop suite above the Nile Corniche with the Pyramids of Giza visible on the western horizon at sunset.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800" },
    price: 490,
    location: "Garden City, Cairo",
    country: "Egypt",
    category: "iconic-cities"
  },
  {
    title: "Rio de Janeiro Christ-View Penthouse",
    description: "A penthouse in Santa Teresa with Christ the Redeemer framed in the picture window and Guanabara Bay below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800" },
    price: 710,
    location: "Santa Teresa, Rio de Janeiro",
    country: "Brazil",
    category: "iconic-cities"
  },
  {
    title: "Seoul Bukchon Hanok Village Stay",
    description: "A restored joseon-era hanok house inside Bukchon's 600-year-old village. Tea ceremonies, silk bojagi, and Gyeongbok Gate steps away.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540541338537-f3eabf7e7a42?w=800" },
    price: 480,
    location: "Bukchon, Seoul",
    country: "South Korea",
    category: "iconic-cities"
  },
  {
    title: "Cape Town Bo-Kaap Heritage Home",
    description: "A cobalt-blue Cape Malay heritage house on the rainbow-coloured slopes of Signal Hill. Cultural richness in every corner.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800" },
    price: 420,
    location: "Bo-Kaap, Cape Town",
    country: "South Africa",
    category: "iconic-cities"
  },
  {
    title: "Kyoto Higashiyama Machiya Townhouse",
    description: "A meticulously restored Edo-period machiya townhouse on the lantern-lit stone-paved alleys of Higashiyama.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" },
    price: 590,
    location: "Higashiyama, Kyoto",
    country: "Japan",
    category: "iconic-cities"
  },

  {
    title: "Parisian Marais Artist's Loft Room",
    description: "A light-flooded atelier room in a 17th-century Marais hôtel particulier. Herringbone parquet, gallery walls, and café culture outside.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" },
    price: 195,
    location: "Le Marais, Paris",
    country: "France",
    category: "rooms"
  },
  {
    title: "Kyoto Gion Okiya Private Room",
    description: "A tatami room inside a working Gion ochaya. Washi paper walls, irori hearth, and geiko tea service at dusk.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" },
    price: 240,
    location: "Gion, Kyoto",
    country: "Japan",
    category: "rooms"
  },
  {
    title: "New York Brooklyn Brownstone Room",
    description: "A cosy bay-windowed room in a landmarked Park Slope brownstone. High ceilings, original tin ceilings, and leafy streets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800" },
    price: 180,
    location: "Park Slope, Brooklyn",
    country: "United States",
    category: "rooms"
  },
  {
    title: "Lisbon Alfama Azulejo Guestroom",
    description: "A terracotta-roofed room tiled in hand-painted azulejos with a juliet balcony overlooking the fado-filled Alfama.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" },
    price: 145,
    location: "Alfama, Lisbon",
    country: "Portugal",
    category: "rooms"
  },
  {
    title: "Rome Campo de' Fiori Suite Room",
    description: "A frescoed room with shuttered windows opening to Campo de' Fiori's morning flower market and cappuccino clamour.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800" },
    price: 220,
    location: "Campo de' Fiori, Rome",
    country: "Italy",
    category: "rooms"
  },
  {
    title: "Moroccan Fes Medina Riad Room",
    description: "A zellige-tiled room in a 14th-century Fes medina riad. Intricate plasterwork, hammam access, and the call to prayer.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=800" },
    price: 130,
    location: "Fes el-Bali, Fes",
    country: "Morocco",
    category: "rooms"
  },
  {
    title: "Buenos Aires Palacio Room with Library",
    description: "A book-lined room in an early 20th-century patrician palacio. Tango music drifts in from the milonga below on weekends.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800" },
    price: 155,
    location: "San Telmo, Buenos Aires",
    country: "Argentina",
    category: "rooms"
  },
  {
    title: "Copenhagen Nørrebø Design Room",
    description: "A Scandinavian-perfect room in a hygge apartment with vintage Danish furniture, pendant lighting, and canal views.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800" },
    price: 210,
    location: "Nørrebro, Copenhagen",
    country: "Denmark",
    category: "rooms"
  },
  {
    title: "Istanbul Beyoğlu Boho Guest Suite",
    description: "A colourful Ottoman-boho room in a 1890s Beyoğlu apartment block. Kilim rugs, rooftop terrace, and the Bosphorus glinting beyond.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800" },
    price: 165,
    location: "Beyoğlu, Istanbul",
    country: "Turkey",
    category: "rooms"
  },
  {
    title: "Edinburgh New Town Georgian Room",
    description: "A drawing-room double in a Grade A-listed Georgian townhouse on Charlotte Square. Cornicing, fireplaces, and whisky decanters.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800" },
    price: 175,
    location: "New Town, Edinburgh",
    country: "United Kingdom",
    category: "rooms"
  },
  {
    title: "Vienna Ringstraße Jugendstil Room",
    description: "A Secessionist-era room in a Ringstraße boulevard apartment. Klimt prints, café-lined streets, and waltz on the radio.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1550505095-081c8d2ed753?w=800" },
    price: 195,
    location: "1st Bezirk, Vienna",
    country: "Austria",
    category: "rooms"
  },
  {
    title: "Havana Vedado 1950s Retro Room",
    description: "A pastel room in a 1950s Vedado mansion with rocking chairs on the porch and vintage American cars rumbling below.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    price: 110,
    location: "Vedado, Havana",
    country: "Cuba",
    category: "rooms"
  },
  {
    title: "Udaipur Lake Palace Guestroom",
    description: "A marble-inlaid room inside a palace on Lake Pichola. Sunrise views of the Aravalli hills and morning boat rides.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800" },
    price: 310,
    location: "Udaipur, Rajasthan",
    country: "India",
    category: "rooms"
  },
  {
    title: "Cape Town Boho Observatory Room",
    description: "A plant-filled room in a Cape Victorian cottage in the Observatory arts quarter. Mountain views and creative community.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800" },
    price: 135,
    location: "Observatory, Cape Town",
    country: "South Africa",
    category: "rooms"
  },
  {
    title: "Hoi An Riverside Heritage Room",
    description: "A lantern-lit room in a 200-year-old Vietnamese merchant's house beside the Thu Bon River in Ancient Town.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800" },
    price: 120,
    location: "Ancient Town, Hội An",
    country: "Vietnam",
    category: "rooms"
  },
  {
    title: "Lagos Victoria Island Boutique Room",
    description: "A contemporary Afro-luxe room in a villa on Victoria Island. Lagos energy, Afrobeats, and beachside sunsets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" },
    price: 185,
    location: "Victoria Island, Lagos",
    country: "Nigeria",
    category: "rooms"
  },
  {
    title: "Mexico City Roma Norte Loft Room",
    description: "A design-store-perfect room in a converted Porfirian mansion on tree-lined Roma Norte. Coffee shops and galleries downstairs.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800" },
    price: 150,
    location: "Roma Norte, Mexico City",
    country: "Mexico",
    category: "rooms"
  },
  {
    title: "Shanghai French Concession Shikumen",
    description: "A lane-house room in a shikumen compound where Art Deco Shanghai meets contemporary design. Lane life is poetic.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800" },
    price: 200,
    location: "Xuhui, Shanghai",
    country: "China",
    category: "rooms"
  },
  {
    title: "Accra East Legon Design Guestroom",
    description: "A curated room in a contemporary Ghanaian villa with kente textiles, tropical garden, and Afro-contemporary art.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800" },
    price: 140,
    location: "East Legon, Accra",
    country: "Ghana",
    category: "rooms"
  },
  {
    title: "Dubrovnik Old Town Stone Room",
    description: "A vaulted stone room inside Dubrovnik's medieval walls. Walk to all three city gates and the Adriatic in under five minutes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1555990793-da11153b6c8d?w=800" },
    price: 230,
    location: "Grad, Dubrovnik",
    country: "Croatia",
    category: "rooms"
  },

  {
    title: "Bali Rice Terrace Floating Breakfast Villa",
    description: "The most-Instagrammed floating breakfast in Tegallalang's emerald rice terraces. A curated morning ritual above the clouds.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800" },
    price: 490,
    location: "Tegallalang, Ubud, Bali",
    country: "Indonesia",
    category: "trending"
  },
  {
    title: "Iceland Midnight Sun Floating Home",
    description: "A self-contained floating cabin on a glassy Icelandic fjord. The midnight sun never fully sets — and that's the magic.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476611338391-6f395a0dd82e?w=800" },
    price: 720,
    location: "Westfjords",
    country: "Iceland",
    category: "trending"
  },
  {
    title: "Santorini Blue Dome Suite",
    description: "The iconic blue dome and white cube, privately rented for the first time. Caldera views, private jacuzzi, and concierge.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800" },
    price: 1800,
    location: "Oia, Santorini",
    country: "Greece",
    category: "trending"
  },
  {
    title: "Swiss Alps Transparent Bubble Chalet",
    description: "Sleep in a transparent bubble above a Swiss Alpine meadow. Stars above, cowbells below, clouds at your fingertips.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" },
    price: 840,
    location: "Grindelwald",
    country: "Switzerland",
    category: "trending"
  },
  {
    title: "Cappadocia Cave Hotel Suite",
    description: "A carved-volcanic-rock cave suite in Göreme. Hot-air balloons drift by at dawn. Ancient, magical, unforgettable.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800" },
    price: 560,
    location: "Göreme, Cappadocia",
    country: "Turkey",
    category: "trending"
  },
  {
    title: "Peru Amazon Treetop Villa",
    description: "A canopy-level villa in the Madre de Dios jungle. Macaws, tapirs, and a private guide to the forest's ancient secrets.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
    price: 870,
    location: "Puerto Maldonado, Amazonia",
    country: "Peru",
    category: "trending"
  },
  {
    title: "Morocco Atlas Mountain Eco-Lodge",
    description: "A rammed-earth eco-lodge with rooftop stargazing in the High Atlas. Argan oil treatments, mule treks, and Berber cuisine.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800" },
    price: 320,
    location: "Imlil, High Atlas",
    country: "Morocco",
    category: "trending"
  },
  {
    title: "Stockholm Archipelago Floating Sauna Cabin",
    description: "A Scandi floating sauna cabin on a private archipelago islet. Birch whisks, cold plunges, and Baltic silence.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
    price: 610,
    location: "Stockholm Archipelago",
    country: "Sweden",
    category: "trending"
  },
  {
    title: "Maldives Undersea Bedroom Suite",
    description: "A glass-walled underwater bedroom suite with manta rays and reef sharks as roommates. The ocean is your wallpaper.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800" },
    price: 3500,
    location: "Rangali Island",
    country: "Maldives",
    category: "trending"
  },
  {
    title: "Japan Capsule Shinkansen Hotel Room",
    description: "A perfectly engineered pod hotel at Tokyo Station. Board the shinkansen right outside for bullet-speed adventures.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800" },
    price: 140,
    location: "Marunouchi, Tokyo",
    country: "Japan",
    category: "trending"
  },
  {
    title: "Kenya Maasai Village Luxury Glamping",
    description: "An immersive tented stay inside a Maasai community. Beadwork workshops, lion walks, and warrior sunrise ceremonies.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 780,
    location: "Amboseli, Kajiado",
    country: "Kenya",
    category: "trending"
  },
  {
    title: "Lisbon Tram 28 Neighbourhood Penthouse",
    description: "A design penthouse on the historic Tram 28 route above Alfama's rooftops. The most requested address in Lisbon right now.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800" },
    price: 460,
    location: "Graça, Lisbon",
    country: "Portugal",
    category: "trending"
  },
  {
    title: "Amalfi Coast Lemon Grove Villa",
    description: "A hilltop villa submerged in lemon groves above Ravello. The most fragrant, cinematic stay on the Italian coast.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800" },
    price: 930,
    location: "Ravello, Amalfi Coast",
    country: "Italy",
    category: "trending"
  },
  {
    title: "Colombian Cartagena Walled City Casa",
    description: "A boutique casa in the walled city, featured in every travel magazine this year. Bougainvillea, cumbia, and ocean breezes.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800" },
    price: 390,
    location: "Ciudad Amurallada, Cartagena",
    country: "Colombia",
    category: "trending"
  },
  {
    title: "Ethiopian Lalibela Rock Church Stay",
    description: "A historic guesthouse carved from the same pink tuff as the famous rock churches. Priests at dawn, stars at midnight.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800" },
    price: 200,
    location: "Lalibela, Amhara",
    country: "Ethiopia",
    category: "trending"
  },
  {
    title: "New Orleans Garden District Mansion Suite",
    description: "An antebellum mansion suite on the Live Oak corridor. Wrought-iron balconies, jazz nights, and beignets at dawn.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800" },
    price: 520,
    location: "Garden District, New Orleans",
    country: "United States",
    category: "trending"
  },
  {
    title: "Tanzania Zanzibar Spice-Route Dhow Boat",
    description: "A converted 19th-century Arab dhow anchored off Zanzibar Stone Town. Sleep above the same water that spice traders crossed.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=800" },
    price: 680,
    location: "Stone Town, Zanzibar",
    country: "Tanzania",
    category: "trending"
  },
  {
    title: "Slovenia Bled Floating Lake House",
    description: "A handbuilt floating wooden house on the most photogenic lake in Europe. Alpine silence and medieval castle spires above.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" },
    price: 580,
    location: "Lake Bled",
    country: "Slovenia",
    category: "trending"
  },
  {
    title: "Tasmania Wilderness Eco Dome",
    description: "A geodesic eco-dome in a private Tasmanian wilderness reserve. Quolls, Tasmanian devils, and bioluminescent bays nearby.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800" },
    price: 740,
    location: "Freycinet, Tasmania",
    country: "Australia",
    category: "trending"
  },
  {
    title: "Rwanda Mountain Gorilla Lodge",
    description: "A solar-powered lodge on the edge of Volcanoes National Park. Track mountain gorillas on foot every morning. Life-changing.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800" },
    price: 1650,
    location: "Kinigi, Musanze",
    country: "Rwanda",
    category: "trending"
  },
  {
    title: "Cuba Trinidad Restored Plantation Villa",
    description: "A first-ever private villa rental in a UNESCO colonial plantation house outside Trinidad. History you can touch.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
    price: 360,
    location: "Trinidad, Sancti Spíritus",
    country: "Cuba",
    category: "trending"
  },
  {
    title: "Kyoto Hidden Geisha District Studio",
    description: "A tranquil machiya studio hidden in Gion's restricted back lanes. Geiko lanterns at dusk and matcha stone-grinding mornings.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800" },
    price: 530,
    location: "Gion Shirakawa, Kyoto",
    country: "Japan",
    category: "trending"
  },
  {
    title: "Georgia Tbilisi Balcony House Retreat",
    description: "A carved wooden balcony apartment in Tbilisi's Old Town. Sulphur baths below, Caucasus Mountains beyond. Intoxicating.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800" },
    price: 195,
    location: "Kala, Tbilisi",
    country: "Georgia",
    category: "trending"
  },
  {
    title: "Oman Rose-Gold Desert Domes",
    description: "Three private rose-gold geodesic domes above the Wahiba Sands. Starlit silence, golden dunes, and Bedouin hospitality.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    price: 870,
    location: "Sharqiyah Sands, Oman",
    country: "Oman",
    category: "trending"
  },
  {
    title: "Faroe Islands Cliffside Lighthouse",
    description: "A converted lighthouse keeper's quarters on the Atlantic edge of the Faroe Islands. Puffins, sea stacks, and total solitude.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=800" },
    price: 660,
    location: "Mykines, Faroe Islands",
    country: "Faroe Islands",
    category: "trending"
  }

];

module.exports = { data: sampleListings };