var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-of-house",
      "name": "Front of House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.8359921145968929,
        "pitch": -0.16960096511432,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.8333688350857642,
          "pitch": -0.14786169141957117,
          "rotation": 0,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.1295892212369747,
        "pitch": -0.1895061690830584,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -1.98105949379031,
          "pitch": 0.6396974560452335,
          "rotation": 0,
          "target": "0-front-of-house"
        },
        {
          "yaw": 1.1279388988665158,
          "pitch": -0.1545307006857186,
          "rotation": 0,
          "target": "2-porch"
        },
        {
          "yaw": 1.982714559864573,
          "pitch": 0.22943702759797802,
          "rotation": 6.283185307179586,
          "target": "22-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-porch",
      "name": "Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.677687100585091,
        "pitch": 0.156506969317169,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 1.5339808768962344,
          "pitch": 0.7400525502242736,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -1.053369143176452,
          "pitch": 0.23459745289552458,
          "rotation": 12.566370614359176,
          "target": "3-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-floor",
      "name": "First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9975477922622158,
          "pitch": 0.3270049300736453,
          "rotation": 0,
          "target": "2-porch"
        },
        {
          "yaw": -0.6892231704301004,
          "pitch": -0.44464144992070054,
          "rotation": 5.497787143782138,
          "target": "11-upstairs"
        },
        {
          "yaw": 2.8881571518992786,
          "pitch": 0.3080874372421363,
          "rotation": 0,
          "target": "4-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.9126914866103633,
        "pitch": 0.1800089168148844,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -2.2819663614305377,
          "pitch": 0.23340126118791815,
          "rotation": 0,
          "target": "3-first-floor"
        },
        {
          "yaw": 2.526526114479692,
          "pitch": 0.37536047184032384,
          "rotation": 0,
          "target": "5-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.0811530496246213,
        "pitch": 0.17815485417931676,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -2.5893138409421166,
          "pitch": 0.30064193755004176,
          "rotation": 0,
          "target": "4-living-room"
        },
        {
          "yaw": 0.18436496458650176,
          "pitch": 0.46207442262568144,
          "rotation": 0,
          "target": "6-kitchen-hallway"
        },
        {
          "yaw": 1.6210894812017358,
          "pitch": 0.4119278274486966,
          "rotation": 0,
          "target": "8-double-room-at-cozy-homeva-chatterton-wp-first-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen-hallway",
      "name": "Kitchen Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7345819521975159,
        "pitch": 0.26051361444347343,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -2.12879627349351,
          "pitch": 0.34794386707377,
          "rotation": 0,
          "target": "7-kitchen--dining-area"
        },
        {
          "yaw": 1.9689715251362765,
          "pitch": 0.47741169535383143,
          "rotation": 0,
          "target": "5-dining-area"
        },
        {
          "yaw": -0.8451016936904612,
          "pitch": 0.48721681807344197,
          "rotation": 0,
          "target": "21-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen--dining-area",
      "name": "Kitchen + Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.9962962141630047,
        "pitch": 0.15690652413148243,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.6176437365633252,
          "pitch": 0.39582626776523355,
          "rotation": 0,
          "target": "6-kitchen-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-double-room-at-cozy-homeva-chatterton-wp-first-room",
      "name": "Double Room At Cozy Homeva Chatterton WP First Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.468649883381282,
        "pitch": 0.27798277536721017,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.9699333888034367,
          "pitch": 0.45852936692608104,
          "rotation": 0,
          "target": "5-dining-area"
        },
        {
          "yaw": 2.667189398935365,
          "pitch": 0.3662085131137971,
          "rotation": 0,
          "target": "10-double-room-at-cozy-homeva-chatterton-wp-second-room"
        },
        {
          "yaw": 1.9167883327566146,
          "pitch": 0.5528224251371299,
          "rotation": 0,
          "target": "9-half-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-half-bathroom",
      "name": "Half Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.4798537116008674,
        "pitch": 0.7791395937354562,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.5962688588603662,
          "pitch": 0.6071529096600727,
          "rotation": 0,
          "target": "8-double-room-at-cozy-homeva-chatterton-wp-first-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-double-room-at-cozy-homeva-chatterton-wp-second-room",
      "name": "Double Room At Cozy Homeva Chatterton WP Second Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.4095200387970017,
        "pitch": 0.28001028111760284,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.13200604415878914,
          "pitch": 0.3057484203508096,
          "rotation": 0,
          "target": "8-double-room-at-cozy-homeva-chatterton-wp-first-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-upstairs",
      "name": "Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.7637269100787751,
        "pitch": 0.5423424075419305,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 1.0341248791557476,
          "pitch": 0.8081527396286248,
          "rotation": 1.5707963267948966,
          "target": "3-first-floor"
        },
        {
          "yaw": 2.5876813378576866,
          "pitch": 0.2798435917709625,
          "rotation": 0,
          "target": "12-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-second-floor",
      "name": "Second Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.0747193763236709,
        "pitch": 0.1278768380880706,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 2.8768870467748986,
          "pitch": 0.6828971524301508,
          "rotation": 0,
          "target": "13-balcony-room-at-cozy-homeva-chatterton-wp"
        },
        {
          "yaw": 1.017251842410566,
          "pitch": 0.6299967543950871,
          "rotation": 0,
          "target": "11-upstairs"
        },
        {
          "yaw": -1.1645057092600464,
          "pitch": 0.42130847767334423,
          "rotation": 5.497787143782138,
          "target": "15-master-suite-at-cozy-homeva-chatterton-wp"
        },
        {
          "yaw": -0.719441033355114,
          "pitch": 0.492874745366068,
          "rotation": 0,
          "target": "17-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-balcony-room-at-cozy-homeva-chatterton-wp",
      "name": "Balcony Room At Cozy Homeva Chatterton WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.1137540392315657,
        "pitch": 0.2037452255429546,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 2.3869422693722715,
          "pitch": 0.1835016348831786,
          "rotation": 0,
          "target": "14-balcony"
        },
        {
          "yaw": -0.5968053029621707,
          "pitch": 0.4668528865483079,
          "rotation": 0,
          "target": "12-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 3.0401996510111893,
        "pitch": 0.2852471971404409,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -0.13244673464365242,
          "pitch": 0.30419493911488615,
          "rotation": 0,
          "target": "13-balcony-room-at-cozy-homeva-chatterton-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-master-suite-at-cozy-homeva-chatterton-wp",
      "name": "Master Suite At Cozy Homeva Chatterton WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7767660700202352,
        "pitch": 0.22605132290276408,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.3020695998089966,
          "pitch": 0.19348444072307913,
          "rotation": 0,
          "target": "16-private-bathroom"
        },
        {
          "yaw": 2.542957518291174,
          "pitch": 0.31699746597920786,
          "rotation": 0,
          "target": "12-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-private-bathroom",
      "name": "Private Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.7525879942805087,
        "pitch": 0.15059812392521899,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -2.899529448497624,
          "pitch": 0.37184757129080026,
          "rotation": 0,
          "target": "15-master-suite-at-cozy-homeva-chatterton-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.0468537635260624,
        "pitch": 0.2026642602786506,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -0.7390862637840243,
          "pitch": 0.4716168651242256,
          "rotation": 0,
          "target": "12-second-floor"
        },
        {
          "yaw": 2.237406394855247,
          "pitch": 0.5823704447256475,
          "rotation": 0,
          "target": "18-shared-bathroom"
        },
        {
          "yaw": -2.0313078717542794,
          "pitch": 0.4785884956565756,
          "rotation": 1.5707963267948966,
          "target": "19-cute-room-at-cozy-homeva-chatterton-wp"
        },
        {
          "yaw": -2.643736081957634,
          "pitch": 0.4752272562664981,
          "rotation": 4.71238898038469,
          "target": "20-mini-room-at-cozy-homeva-chatterton-wp"
        },
        {
          "yaw": -0.3943915882825131,
          "pitch": 0.4104162443851216,
          "rotation": 1.5707963267948966,
          "target": "15-master-suite-at-cozy-homeva-chatterton-wp"
        },
        {
          "yaw": -0.7408704525010208,
          "pitch": 0.28382846794736594,
          "rotation": 0,
          "target": "13-balcony-room-at-cozy-homeva-chatterton-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-shared-bathroom",
      "name": "Shared Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0013266368456257283,
        "pitch": 0.19244082394991047,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -0.9800380835864075,
          "pitch": 0.5442033308668464,
          "rotation": 0,
          "target": "17-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-cute-room-at-cozy-homeva-chatterton-wp",
      "name": "Cute Room At Cozy Homeva Chatterton WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.2117957575592833,
        "pitch": 0.513030406615977,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -2.495941698528977,
          "pitch": 0.7293106524093034,
          "rotation": 4.71238898038469,
          "target": "17-hallway"
        },
        {
          "yaw": -2.341984068187138,
          "pitch": 0.35920858906387565,
          "rotation": 0,
          "target": "20-mini-room-at-cozy-homeva-chatterton-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-mini-room-at-cozy-homeva-chatterton-wp",
      "name": "Mini Room At Cozy Homeva Chatterton WP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.7934272582749156,
        "pitch": 0.4540296753868418,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -1.1257688529203538,
          "pitch": 0.650650048499342,
          "rotation": 1.5707963267948966,
          "target": "17-hallway"
        },
        {
          "yaw": -1.237893263754259,
          "pitch": 0.4559633686935829,
          "rotation": 0,
          "target": "19-cute-room-at-cozy-homeva-chatterton-wp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-patio",
      "name": "Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6703136755330252,
        "pitch": 0.08995972080208148,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": -1.3904868010435152,
          "pitch": 0.16472735610771494,
          "rotation": 4.71238898038469,
          "target": "6-kitchen-hallway"
        },
        {
          "yaw": -2.8039739828724883,
          "pitch": 0.3797284535691894,
          "rotation": 0,
          "target": "22-side-entrance"
        },
        {
          "yaw": -0.29169131879919874,
          "pitch": -0.15862356889719464,
          "rotation": 0.7853981633974483,
          "target": "23-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-side-entrance",
      "name": "Side Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.9365987456459415,
        "pitch": 0.0007793769057045097,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 1.0105149187540672,
          "pitch": 0.05376404610952079,
          "rotation": 0,
          "target": "21-patio"
        },
        {
          "yaw": -1.9859889874970378,
          "pitch": 0.23483253947952676,
          "rotation": 1.5707963267948966,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.7137865676390849,
        "pitch": 0.11957310550383582,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 1.5569546539355876,
          "pitch": 0.24183807405939817,
          "rotation": 0,
          "target": "21-patio"
        },
        {
          "yaw": -1.5761247138849264,
          "pitch": -0.046717558379755886,
          "rotation": 0,
          "target": "24-backyard-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-backyard-ii",
      "name": "Backyard II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.326767464179138,
          "pitch": -0.03882156462950448,
          "rotation": 0,
          "target": "25-backyard--view"
        },
        {
          "yaw": 0.7373555260994564,
          "pitch": 0.4054836158730115,
          "rotation": 0,
          "target": "23-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-backyard--view",
      "name": "Backyard + View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.3846573952639076,
        "pitch": 0.07895985921879678,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.07983155067981684,
          "pitch": 0.04862806185113655,
          "rotation": 0,
          "target": "26-parking"
        },
        {
          "yaw": 2.1497519583907287,
          "pitch": 0.36162568855906585,
          "rotation": 0,
          "target": "24-backyard-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.16688843336741677,
        "pitch": 0.0063944561634965424,
        "fov": 1.2032036978509733
      },
      "linkHotspots": [
        {
          "yaw": 0.25035157201203795,
          "pitch": 0.1166600445426429,
          "rotation": 0,
          "target": "25-backyard--view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cozy Homeva Chatterton WP Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
