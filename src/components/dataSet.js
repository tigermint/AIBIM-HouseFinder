export const korDataSet = {
  거실: [
    "거실-식당",
    "거실<->식당",
    "거실-복도",
    "거실-화장실",
    "거실-방",
    "거실-주방",
    "거실-현관",
    "거실-차고지",
    "거실-다용도실",
  ],
  주방: [
    "식당<->주방-거실",
    "주방<->식당",
    "주방-팬트리실",
    "주방-차고지",
    "주방-복도",
    "주방-다용도실",
    "주방-포치",
    "주방-세탁실",
    "주방-화장실",
  ],
  식당: [
    "식당-복도",
    "식당-포치",
    "식당-주방",
    "식당-주방-복도",
    "식당-주방-거실",
    "복도-식당-주방-거실",
    "차고지-식당-주방-거실",
    "식당-계단실",
    "식당-팬트리실",
    "식당-주방-팬트리실",
  ],
  방: [
    "방-드레스룸",
    "방-드레스룸, 방-화장실",
    "거실-방-드레스룸",
    "거실-방-화장실",
    "거실-방-붙박이장",
    "방-다용도실",
    "방-계단",
    "방-화장실, 방-붙박이장",
    "방-드레스룸, 방-화장실, 방-복도",
    "방-붙박이장",
  ],
  화장실: [
    "화장실-복도",
    "화장실-방",
    "화장실-다용도실",
    "화장실-드레스룸",
    "화장실-드레스룸",
    "방-화장실-드레스룸",
    "복도-방-화장실",
    "거실-화장실-복도",
    "차고지-화장실",
  ],
  복도: [
    "복도-방",
    "복도-붙박이장",
    "복도-방-붙박이장",
    "복도-계단",
    "복도-다용도실",
    "복도-현관",
    "복도-복도",
    "복도-방-드레스룸",
    "복도-세탁실",
  ],
  현관: [
    "현관-방",
    "현관-붙박이장",
    "현관-복도-거실",
    "현관-포치",
    "현관-차고지",
    "포치-복도-현관",
    "현관-방-붙박이장",
    "현관-방-드레스룸",
    "현관-방-화장실-드레스룸",
    "현관-복도-주방",
  ],
  계단: [
    "계단-현관",
    "계단-식당",
    "계단-주방",
    "계단-다용도실",
    "계단-화장실",
    "계단-현관-포치",
    "계단-방-붙박이장",
    "계단-방-화장실",
    "계단-방-드레스룸",
    "계단-방-화장실-드레스룸",
  ],
  차고지: [
    "차고지-다용도실",
    "차고지-다용도실-거실",
    "차고지-다용도실-주방-거실",
    "차고지-복도-방",
    "차고지-세탁실",
    "차고지-식당-거실",
    "차고지-다용도실-주방-식당",
    "차고지-계단",
    "차고지-포치",
    "차고지-복도",
  ],
  세탁실: [
    "복도-세탁실-욕실",
    "세탁실-붙박이장",
    "세탁실-복도-붙박이장",
    "세탁실-복도-다용도실",
    "세탁실-복도-방",
    "복도-세탁실-차고지",
    "차고지-세탁실-현관",
    "세탁실-복도-화장실",
    "세탁실-복도-주방",
    "세탁실-복도-거실",
  ],
  드레스룸: [
    "화장실-붙박이장-드레스룸",
    "복도-방-화장실-드레스룸",
    "방-화장실, 방-붙박이장, 방-드레스룸",
    "거실-방-화장실-드레스룸",
    "드레스룸-세탁실",
  ],
  붙박이장: [
    "계단실-붙박이장",
    "거실-붙박이장",
    "화장실-붙박이장",
    "방-붙박이장",
    "방-화장실, 방-붙박이장, 방-복도",
  ],
  다용도실: [
    "다용도실-붙박이장",
    "세탁실-다용도실",
    "복도-다용도실-차고지",
    "주방-다용도실",
    "주방-다용도실-차고지",
  ],
  팬트리실: [
    "거실-팬트리실",
    "복도-팬트리실",
    "거실-주방-팬트리실",
    "다용도실-팬트리실",
    "현관-팬트리실",
  ],
};

export const engDataSet = {
  Livingroom: [
    "Living room-Dining room",
    "Living room<->Dining room",
    "Living room-Hall",
    "Living room-Bathroom",
    "Living room-Bedroom",
    "Living room-Stair ",
    "Living room-Kitchen",
    "Living room-Foyer",
    "Living room-Garage",
    "Living room-Utility room",
  ],
  Kichen: [
    "Dining room<->Kitchen-Living room",
    "Kitchen<->Dining room",
    "Kitchen-Pantry room",
    "Kitchen-Garage",
    "Kitchen-Hall",
    "Kitchen-Closet",
    "Kitchen-Utility room",
    "Kitchen-Porch",
    "Kitchen-Laundry room",
    "Kitchen-Bathroom",
  ],
  Diningroom: [
    "Dining room-Hall",
    "Dining room-Porch",
    "Dining room-Kitchen",
    "Dining room-Kitchen-Hall",
    "Dining room-Kitchen-Living room",
    "Hall-Dining room-Kitchen-Living room",
    "Garage-Dining room-Kitchen-Living room",
    "Dining room-Stair",
    "Dining room-Pantry room",
    "Dining room-Kitchen-Pantry room",
  ],
  Bedroom: [
    "Bedroom-Dressing room",
    "Bedroom-Dressing room, Bedroom-Bathroom",
    "Living room-Bedroom-Dressing room",
    "Living room-Bedroom-Bathroom",
    "Living room-Bedroom-Closet",
    "Bedroom-Utility room",
    "Bedroom-Stair",
    "Bedroom-Bathroom, Bedroom-Closet",
    "Bedroom-Dressing room, Bedroom-Bathroom, Bedroom-Hall",
    "Bedroom-Closet",
  ],
  Bathroom: [
    "Bathroom-Hall",
    "Bathroom-Bedroom",
    "Bathroom-Utility room",
    "Bathroom-Utility room",
    "Bathroom-Dressing room",
    "Bedroom-Bathroom-Dressing room",
    "Bathroom-Bedroom-Hall",
    "Living room-Bathroom-Hall",
    "Bathroom-Garage",
  ],
  Hall: [
    "Hall-Bedroom",
    "Hall-Closet",
    "Hall-Bedroom-Closet",
    "Living room-Hall-Garage",
    "Hall-Stair",
    "Hall-Utility room",
    "Hall-Foyer",
    "Hall-Hall",
    "Hall-Bedroom-Dressing room",
    "Hall-Laundry room",
  ],
  Foyer: [
    "Foyer-Bedroom",
    "Foyer-Closet",
    "Foyer-Hall-Living room",
    "Foyer-Porch",
    "Foyer-Garage",
    "Foyer-Hall-Porch",
    "Foyer-Bedroom-Closet",
    "Foyer-Bedroom-Dressing room",
    "Foyer-Bedroom-Bathroom-Dressing room",
    "Foyer-Hall-Kitchen",
  ],
  Stairroom: [
    "Stair-Foyer",
    "Stair-Dining room",
    "Stair-Kitchen",
    "Stair-Utility room",
    "Stair-Bathroom",
    "Stair-Foyer-Porch",
    "Stair-Bedroom-Closet",
    "Stair-Bedroom-Bathroom",
    "Stair-Bedroom-Dressing room",
    "Stair-Bedroom-Bathroom-Dressing room",
  ],
  Garage: [
    "Garage-Utility room",
    "Garage-Utility room-Living room",
    "Garage-Utility room-Kitchen-Living room",
    "Garage-Hall-Bedroom",
    "Garage-Laundry room",
    "Garage-Dining room-Living room",
    "Garage-Utility room-Kitchen-Dining room",
    "Garage-Stair",
    "Garage-Porch",
    "Garage-Hall",
  ],
  Laundryroom: [
    "Hall-Laundry room-Bathroom",
    "Laundry room-Closet",
    "Laundry room-Hall-Closet",
    "Laundry room-Hall-Utility room",
    "Laundry room-Hall-Bedroom",
    "Hall-Laundry room-Garage",
    "Garage-Laundry room-Foyer",
    "Laundry room-Hall-Bathroom",
    "Laundry room-Hall-Kitchen",
    "Laundry room-Hall-Living room",
  ],
  Dressingroom: [
    "Dressing room-Closet-Bathroom",
    "Dressing room-Bathroom-Bedroom-Hall",
    "Dressing room-Bedroom. Bedroom-Closet, Bedroom-Bathroom",
    "Dressing room-Bathroom-Bedroom-Living room",
    "Dressing room-Laundry room",
  ],
  Closet: [
    "Closet-Stair",
    "Closet-Living room",
    "Closet-Bathroom",
    "Closet-Bedroom",
    "Closet-Bedroom, Bedroom-Bathroom, Bedroom-Hall",
  ],
  Utilityroom: [
    "Utility room-Closet",
    "Utility room-Laundry room",
    "Utility room-Kitchen",
    "Hall-Utility room-Garage",
    "Kitchen-Utility room-Garage",
  ],
  Pantryroom: [
    "Pantry room-Living room",
    "Pantry room-Hall",
    "Pantry room-Kitchen-Living room",
    "Pantry room-Utility room",
    "Pantry room-Foyer",
  ],
};
