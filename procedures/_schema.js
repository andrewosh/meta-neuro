procedure: {
  animal: Number,
  date: Date,
  method: [
    implant : {
      type: String,
      enum: [ 'headpost' , 'window' , 'silicon-probe' , 'clear-skullcap' ,
        'ground-pin' , 'crainiotomy' ],
      },
    size: Number,
    shape: String,
    coordinate: {
      ML: Number,
      AP: Number,
      depth: Number,
    },
    location: String,
  ],
  injection: [{
    name: String,
    concentration: Number,
    volume: Number,
    duration: Number,
    coordinate: {
      ML: Number,
      AP: Number,
      depth: Number,
    },
    location: String,
  }],
  trimWhiskersRight: [{
    type: String,
    enum: [ 'alpha', 'A1' , 'A2' , 'A3' , 'A4' ,
      'beta', 'B1' , 'B2' , 'B3' , 'B4' ,
      'gamma', 'C1' , 'C2' , 'C3' , 'C4' , 'C5' , 'C6' , 'C7' ,
      'delta', 'D1' , 'D2' , 'D3' , 'D4' , 'D5' , 'D6', 'D7', 'D8',
      'E1' , 'E2' , 'E3' , 'E4' , 'E5' , 'E6' , 'E7' , 'E8' , 'E9' , 'E10' ,
      'orbital' , 'genal' , 'mandibular' , 'carpal' , 'microvibrissae' ,
    ],
  }],
  trimWhiskersLeft: [{
    type: String,
    enum: [ 'alpha', 'A1' , 'A2' , 'A3' , 'A4' ,
      'beta', 'B1' , 'B2' , 'B3' , 'B4' ,
      'gamma', 'C1' , 'C2' , 'C3' , 'C4' , 'C5' , 'C6' , 'C7' ,
      'delta', 'D1' , 'D2' , 'D3' , 'D4' , 'D5' , 'D6', 'D7', 'D8',
      'E1' , 'E2' , 'E3' , 'E4' , 'E5' , 'E6' , 'E7' , 'E8' , 'E9' , 'E10' ,
      'orbital' , 'genal' , 'mandibular' , 'carpal' , 'microvibrissae' ,
    ],
  }],
}
