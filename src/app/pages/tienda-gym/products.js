// tienda-gym/products.js
export const allProducts = [
 // Equipos M2
  {
    id: 1,
    name: "M2-1001 Chest Press",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros", "Tríceps"],
    image: "/maquinas/M2-1001 Chest Press.png",
    alt: "M2-1001 Chest Press",
    "description": [
      "M2-1001 Chest Press. Esta máquina cuenta con un asiento ajustable y palancas para ajustar las asas de presión y lograr una posición de inicio y fin segura. Incluye una columna de pesas con pasador para facilitar su uso."
    ],
      features: [
      "Asiento ajustable para diferentes alturas",
      "Sistema de peso integrado con fácil selección",
      "Agarraderas ergonómicas para mayor comodidad",
      "Estructura resistente de acero con recubrimiento anticorrosión"
    ],
    specifications: {
      Modelo: "M2-1001",
      dimensiones: "1343 x 1313 x 1515 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "188 kg",
      "peso bruto (W.G.)": "228 kg",
      "músculo trabajado": "Pectorales, hombros y tríceps",
    }
  },
  {
    id: 2,
    name: "M2-1012 Pectoral Machine",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros"],
    image: "/maquinas/M2-1012 Pectoral Machine.png",
    alt: "M2-1012 Pectoral Machine",
    "description": [
      "M2-1012 Pectoral Machine. Esta máquina Pec Fly incluye dos juegos de palancas de ajuste: una debajo del asiento para la altura del usuario y otra en la base de los brazos para ajustar la posición inicial.",
      "Las manijas de esta máquina giran durante el movimiento, lo que permite un movimiento más natural. El peso se ajusta mediante una pila de pesas con pasador."
    ],
      features: [
      "Asiento ajustable",
      "Agarres ergonómicos",
      "Sistema de peso integrado",
      "Estructura estable de acero"
    ],
    specifications: {
      Modelo: "M2-1012",
      dimensiones: "1650 x 1175 x 1515 mm",
      "placas (Weight Stack)": "263lbs/119.25kg",
      "peso neto (N.W.)": "130 kg",
      "peso bruto (W.G.)": "170 kg",
      "músculo trabajado": "Pectorales y hombros",
    }
  },
  {
    id: 7,
    name: "M2-1007 Shoulder Press",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/maquinas/M2-1007 Shoulder Press.png",
    alt: "M2-1007 Shoulder Press",
    "description": [
      "M2-1007 Shoulder Press. El asiento de esta máquina de prensa de hombros se ajusta a la altura del usuario. Cuenta con asas en ángulo que permiten realizar press con agarre neutral y prono.",
      "Está bien acolchada, es duradera y ofrece un movimiento suave. Su peso se ajusta mediante una columna de pesas con pasador."
    ],
    features: [
      "Asiento ajustable",
      "Agarres ergonómicos",
      "Sistema de peso integrado",
      "Estructura resistente de acero"
    ],
    specifications: {
      Modelo: "M2-1007",
      dimensiones: "1455 x 1685 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "172 kg",
      "peso bruto (W.G.)": "212 kg",
      "músculo trabajado": "Deltoides y hombros",
    }
  },
  {
    id: 14,
    name: "M2-1002 Lateral Rise",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/maquinas/M2-1002 Lateral Rise.png",
    alt: "M2-1002 Lateral Rise",
    "description": [
      "M2-1002 Lateral Rise. Esta máquina incluye un asiento ajustable según la altura del usuario y brazos ajustables para modificar la posición inicial del ejercicio. También incluye una columna de pesas con pasadores y cuenta con un excelente acolchado."
    ],
    features: [
      "Asiento ajustable",
      "Resistencia con pesas integradas",
      "Agarres ergonómicos",
      "Estructura estable de acero"
    ],
    specifications: {
      Modelo: "M2-1002",
      dimensiones: "1140 x 1190 x 1515 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "165 kg",
      "peso bruto (W.G.)": "205 kg",
      "músculo trabajado": "Deltoides laterales y hombros",
    }
  },
  {
    id: 18,
    name: "M2-1015 Row Rear Delt",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Hombros", "Espalda"],
    image: "/maquinas/M2-1015 Row Rear Delt.png",
    alt: "M2-1015 Row Rear Delt",
    "description": [
      "M2-1015 Row Rear Delt. Esta robusta máquina de remo sentado incluye un asiento y una almohadilla pectoral ajustables a la altura del usuario.",
      "Está bien acolchada, ofrece un movimiento suave y cuenta con asas móviles que permiten un movimiento más natural. Su peso es ajustable mediante una columna de pesas con pasador."
    ],
    features: [
      "Asiento ajustable",
      "Agarres ergonómicos",
      "Resistencia integrada",
      "Estructura sólida de acero"
    ],
    specifications: {
      Modelo: "Negro con detalles en gris",
      dimensiones: "M2-1015",
      "placas (Weight Stack)": "	263 lbs/119.25 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Deltoides posteriores y dorsales",
      color: "Negro con detalles en gris",
    }
  },
  {
    id: 3,
    name: "M2-1003 Hip Abductor",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Cadera", "Glúteos"],
    image: "/maquinas/M2-1003 Hip Abductor.png",
    alt: "M2-1003 Hip Abductor",
    "description": [
      "M2-1003 Hip Abductor. Esta máquina de abducción de cadera incluye rodilleras ajustables que permiten cambiar la posición inicial, además de pedales para mayor soporte. El peso se ajusta mediante un conjunto de pesas con pasadores."
    ],
    features: [
      "Almohadillas acolchadas",
      "Resistencia ajustable",
      "Estructura sólida de acero",
      "Asiento ergonómico"
    ],
    specifications: {
      modelo: "M2-1003",
      dimensiones: "960 x 1555 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Abductores de cadera",
    }
  },
  {
    id: 4,
    name: "M2-1004 Hip Adductor",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Cadera", "Piernas"],
    image: "/maquinas/M2-1004 Hip Adductor.png",
    alt: "M2-1004 Hip Adductor",
    "description": [
      "M2-1004 Hip Adductor. Esta máquina de aducción de cadera incluye rodilleras ajustables que permiten al usuario cambiar la posición inicial para mejorar su movilidad y flexibilidad. Cuenta con pedales para mayor soporte. El peso se ajusta mediante un conjunto de discos con pasadores."
    ],
    features: [
      "Almohadillas acolchadas",
      "Resistencia ajustable",
      "Asiento ergonómico",
      "Estructura robusta de acero"
    ],
    specifications: {
      modelo: "M2-1004",
      dimensiones: "960 x 1555 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Aductores de cadera",
    }
  },
  {
    id: 17,
    name: "M2-1014 Multi Hip",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Cadera", "Glúteos", "Piernas"],
    image: "/maquinas/M2-1014 Multi Hip.png",
    alt: "M2-1014 Multi Hip",
    "description": [
      "M2-1014 Multi Hip. Esta máquina es robusta y muy funcional, con opciones para entrenar glúteos y flexores de cadera desde múltiples ángulos.",
      "Cuenta con varias funciones ajustables, incluyendo una palanca en el centro para ajustar la posición inicial del ejercicio, una palanca para ajustar la altura de la rodillera según las preferencias del usuario y palancas en las asas de apoyo para ajustar la altura."
    ],
    features: [
      "Múltiples posiciones de ejercicio",
      "Resistencia ajustable",
      "Almohadillas acolchadas",
      "Estructura robusta de acero"
    ],
    specifications: {
      modelo: "M2-1014",
      dimensiones: "1180 x 1125 x 1615 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "220 kg",
      "peso bruto (W.G.)": "260 kg",
      "músculo trabajado": "Abductores y aductores de cadera",
    }
  },
  {
    id: 5,
    name: "M2-1005 Leg Extension",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/maquinas/M2-1005 Leg Extension.png",
    alt: "M2-1005 Leg Extension",
    "description": [
      "M2-1005 Leg Extension. Esta extensión de piernas cuenta con varias funciones ajustables. El asiento se puede ajustar a la altura del usuario, junto con la almohadilla para el tobillo.",
      "La palanca a la derecha del asiento, en la articulación de la rodilla, ajusta la posición inicial del ejercicio y permite al usuario levantarse cómodamente después del mismo."
    ],
    features: [
      "Rodillos acolchados para piernas",
      "Asiento ajustable",
      "Resistencia con pesas integradas",
      "Estructura de acero resistente"
    ],
    specifications: {
      modelo: "M2-1005",
      dimensiones: "1255 x 1080 x 1615 mm	",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "153 kg",
      "peso bruto (W.G.)": "193 kg",
      "músculo trabajado": "Cuádriceps",
    }
  },
  {
    id: 6,
    name: "M2-1006 Prone Leg Curl",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/maquinas/M2-1006 Prone Leg Curl.png",
    alt: "M2-1006 Prone Leg Curl",
    "description": [
      "M2-1006 Prone Leg Curl. Esta máquina de curl de isquiotibiales en posición acostado es robusta, está bien acolchada y ofrece un movimiento suave.",
      "La máquina se ajusta mediante una palanca en la articulación de la rodilla para ajustar la posición inicial y otra para ajustar la almohadilla del tobillo según las preferencias del usuario. Cuenta con asas en la parte delantera para mayor agarre durante el movimiento."
    ],
    features: [
      "Rodillos acolchados para piernas",
      "Resistencia ajustable",
      "Asiento ergonómico",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1006",
      dimensiones: "1045 x 1500 x 1518 mm	",
      "placas (Weight Stack)": "263 lbs/119.25 kg	",
      "peso neto (N.W.)": "132 kg",
      "peso bruto (W.G.)": "172 kg",
      "músculo trabajado": "Isquiotibiales",
    }
  },
  {
    id: 9,
    name: "M2-1009 Leg Press",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/maquinas/M2-1009 Leg Press.png",
    alt: "M2-1009 Leg Press",
    "description": [
      "M2-1009 Leg Press. Esta prensa de piernas horizontal cuenta con un reposapiés fijo, y la resistencia empuja el asiento hacia atrás.",
      "Esta máquina cuenta con palancas para controlar la profundidad del asiento, lo que facilita su ajuste a la movilidad del usuario y aumenta la seguridad al usar y salir de la máquina."
    ],
    features: [
      "Plataforma de pies ajustable",
      "Respaldo reclinable",
      "Resistencia con pesas integradas",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1009",
      dimensiones: "1945 x 1010 x 1715 mm	",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "256 kg	",
      "peso bruto (W.G.)": "296 kg",
      "músculo trabajado": "Cuádriceps, glúteos e isquiotibiales",
    }
  },
  {
    id: 21,
    name: "M2-1019 Standing Calf",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/maquinas/M2-1019 Standing Calf.png",
    alt: "M2-1019 Standing Calf",
    "description": [
      "M2-1019 Standing Calf. Esta máquina de elevación de pantorrillas de pie tiene un diseño ergonómico y fácil de usar. Incluye una palanca bajo las hombreras para ajustar la altura del usuario.",
      "Es una máquina duradera y robusta con reposapiés de buen agarre. El peso se ajusta mediante un conjunto de discos con pasador."
    ],
    features: [
      "Plataforma ajustable",
      "Soporte acolchado",
      "Resistencia con pesas integradas",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1019",
      dimensiones: "1108 x 1018 x 1633 mm	",
      "placas (Weight Stack)": "263 lbs/119.25 kg	",
      "peso neto (N.W.)": "123 kg",
      "peso bruto (W.G.)": "163 kg",
      "músculo trabajado": "Pantorrillas",
    }
  },
  {
    id: 24,
    name: "M2-1023 Seated Leg Curl",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/maquinas/M2-1023 Seated Leg Curl.png",
    alt: "M2-1023 Seated Leg Curl",
    "description": [
      "M2-1023 Seated Leg Curl. Esta máquina de curl de piernas sentado cuenta con varias funciones ajustables: el asiento, la almohadilla para los muslos y la almohadilla para los tobillos se pueden ajustar a la altura del usuario.",
      "Una palanca adicional en la articulación de la rodilla permite ajustar la posición inicial y final del ejercicio. El peso se ajusta mediante una columna de pesas con pasador."
    ],
    features: [
      "Rodillos acolchados",
      "Asiento ajustable",
      "Resistencia con pesas integradas",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1023",
      dimensiones: "1500 x 1077 x 1515 mm	",
      "placas (Weight Stack)": "293 lbs/132.75 kg	",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Isquiotibiales",
    }
  },
  {
    id: 8,
    name: "M2-1008 Abdominal Crunch",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Abdominales"],
    image: "/maquinas/M2-1008 Abdominal Crunch.png",
    alt: "M2-1008 Abdominal Crunch",
    "description": [
      "M2-1008 Abdominal Crunch. Esta máquina viene con un asiento ajustable para distintas alturas de usuario y una pila de pesas con pasador."    
    ],
    features: [
      "Soporte lumbar acolchado",
      "Asiento cómodo",
      "Resistencia ajustable",
      "Estructura estable de acero"
    ],
    specifications: {
      modelo: "M2-1008",
      dimensiones: "1285 x 1095 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Abdominales",
    }
  },
  {
    id: 15,
    name: "M2-1013 Lat Pull Down",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/maquinas/M2-1013 Lat Pull Down.png",
    alt: "M2-1013 Lat Pull Down",
    "description": [
      "M2-1013 Lat Pull Down. Esta máquina de polea dorsal incluye un asiento y rodilleras ajustables en altura para adaptarse a las preferencias del usuario. También incluye una pila de pesas con pasadores.",
      "Los brazos de esta máquina se mueven de forma natural."    
    ],
    features: [
      "Barra ajustable",
      "Asiento acolchado",
      "Resistencia con pesas integradas",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1013",
      dimensiones: "1970 x 1135 x 1887 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "167 kg",
      "peso bruto (W.G.)": "207 kg",
      "músculo trabajado": "Dorsal ancho y espalda",
    }
  },
  {
    id: 16,
    name: "M2-1013A Lat Pull Down",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/maquinas/M2-1013A Lat Pull Down.png",
    alt: "M2-1013A Lat Pull Down",
    "description": [
      "M2-1013A Lat Pull Down. Este equipo de dominadas tiene un asiento y una rodillera ajustables en altura para adaptarse a la altura del usuario. Incluye una pila de pesas con pasador.",
      "El mango es ajustable, lo que permite probar diferentes tipos de dominadas. También incluye un soporte superior para sujetar las barras de forma segura cuando no se usan."    
    ],
    features: [
      "Barra ajustable",
      "Asiento acolchado",
      "Resistencia con pesas integradas",
      "Estructura estable de acero"
    ],
    specifications: {
      modelo: "M2-1013A",
      dimensiones: "1325 x 1255 x 2215 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "135 kg",
      "peso bruto (W.G.)": "175 kg",
      "músculo trabajado": "Dorsal ancho y espalda",
    }
  },
  {
    id: 20,
    name: "M2-1018 Seated Low Row",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/maquinas/M2-1018 Seated Low Row.png",
    alt: "M2-1018 Seated Low Row",
    "description": [
      "M2-1018 Seated Low Row. Esta máquina de remo bajo sentado es robusta y robusta, con un diseño minimalista.",
      "Está bien acolchada, cuenta con reposapiés con agarre firme y permite intercambiar las asas. Su peso se ajusta mediante una pila de pesas con pasador."    
    ],
    features: [
      "Asiento ergonómico",
      "Barra de agarre ajustable",
      "Resistencia integrada",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1018",
      dimensiones: "1810 x 1185 x 2015 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "125 kg",
      "peso bruto (W.G.)": "165 kg",
      "músculo trabajado": "Dorsal ancho y espalda",
    }
  },
  {
    id: 22,
    name: "M2-1020 Chindip Assist",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Espalda", "Bíceps", "Tríceps"],
    image: "/maquinas/M2-1020 Chindip Assist.png",
    alt: "M2-1020 Chindip Assist",
    "description": [
      "M2-1020 Chindip Assist. Esta máquina permite realizar dominadas y fondos con asistencia.",
      "Se ajusta mediante una palanca debajo del asiento de apoyo para retirar el soporte. Además, cuenta con asas para fondos que giran hacia adentro o hacia afuera según las preferencias del usuario. Las múltiples asas para dominadas permiten entrenar dominadas desde diferentes ángulos.",
      "El nivel de asistencia se puede ajustar mediante la columna de pesas con pasador."    
    ],
    features: [
      "Asistencia ajustable",
      "Agarres ergonómicos",
      "Estructura estable de acero",
      "Almohadillas para rodillas acolchadas"
    ],
    specifications: {
      modelo: "M2-1020",
      dimensiones: "1278 x 1202 x 2208 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "210 kg",
      "peso bruto (W.G.)": "250 kg",
      "músculo trabajado": "Espalda, bíceps y tríceps",
    }
  },
  {
    id: 23,
    name: "M2-1022 Glute Machine",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Glúteos", "Piernas"],
    image: "/maquinas/M2-1022 Glute Machine.png",
    alt: "M2-1022 Glute Machine",
    "description": [
      "M2-1022 Glute Machine. Esta máquina para glúteos permite realizar patadas de pie. Incluye una almohadilla para el pecho y asas de apoyo, una columna de pesas con pasadores y una plataforma para los pies con rotación suave para un movimiento más natural."
    ],
    features: [
      "Almohadillas acolchadas",
      "Resistencia ajustable",
      "Asiento ergonómico",
      "Estructura robusta de acero"
    ],
    specifications: {
      modelo: "M2-1022",
      dimensiones: "1310 x 1108 x 1595 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Glúteos y femorales",
    }
  },
  {
    id: 10,
    name: "M2-1010A Biceps Curl",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Bíceps"],
    image: "/maquinas/M2-1010A Biceps Curl.png",
    alt: "M2-1010A Biceps Curl",
    "description": [
      "M2-1010A Biceps Curl. Esta máquina de curl de bíceps cuenta con una palanca debajo del asiento para ajustar la altura del usuario.",
      "El reposabrazos de estilo predicador de la máquina está completamente acolchado para una comodidad óptima durante el ejercicio. Además, las manijas de la máquina giran naturalmente para un movimiento más natural del usuario.",
      "El peso se ajusta mediante un conjunto de discos con pasadores."
    ],
    features: [
      "Agarres ajustables",
      "Resistencia con pesas integradas",
      "Asiento ergonómico",
      "Estructura resistente de acero"
    ],
    specifications: {
      modelo: "M2-1010A",      
      dimensiones: "1200 x 1375 x 1515 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Bíceps",
    }
  },
  {
    id: 11,
    name: "M2-1010B Biceps Curl",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Bíceps"],
    image: "/maquinas/M2-1010B Biceps Curl.png",
    alt: "M2-1010B Biceps Curl",
    "description": [
      "M2-1010B Biceps Curl. Esta máquina de curl de bíceps cuenta con dos palancas: una debajo del asiento para ajustar la altura del usuario y otra en el brazo para ajustar la posición inicial.",
      "La máquina tiene un mango ligeramente inclinado y está bien acolchada para mayor comodidad y durabilidad. El peso se ajusta mediante una columna de pesas con pasador."
    ],
    features: [
      "Agarres ajustables",
      "Resistencia con pesas integradas",
      "Asiento ergonómico",
      "Estructura de acero resistente"
    ],
    specifications: {
      modelo: "M2-1010B",
      dimensiones: "1176 x 1020 x 1515 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "171 kg",
      "peso bruto (W.G.)": "211 kg",
      "músculo trabajado": "Bíceps",
    }
  },
  {
    id: 12,
    name: "M2-1011A Triceps Extension",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Tríceps"],
    image: "/maquinas/M2-1011A Triceps Extension.png",
    alt: "M2-1011A Triceps Extension",
    "description": [
      "M2-1011A Triceps Extension. Esta máquina de extensión de tríceps incluye una palanca debajo del asiento para ajustarla a la altura del usuario.",
      "Esta máquina cuenta con asas que se mueven naturalmente para adaptarse a la trayectoria del movimiento y un acolchado completo para un soporte óptimo durante el ejercicio. El peso es ajustable mediante una columna de pesas con pasadores."
    ],
    features: [
      "Agarres acolchados",
      "Resistencia ajustable",
      "Asiento ergonómico",
      "Estructura sólida de acero"
    ],
    specifications: {
      modelo: "M2-1011A",      
      dimensiones: "1660 x 1050 x 1515 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Tríceps",    
    }
  },
  {
    id: 13,
    name: "M2-1011B Triceps Extension",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Tríceps"],
    image: "/maquinas/M2-1011B Triceps Extension.png",
    alt: "M2-1011B Triceps Extension",
    "description": [
      "M2-1011B Triceps Extension. Esta máquina de extensión de tríceps incluye una palanca debajo del asiento para ajustarla a la altura del usuario.",
      "Las asas se pueden girar hacia adentro y hacia afuera para una posición óptima. El peso se ajusta mediante una columna de pesas con pasador."
    ],
    features: [
      "Agarres acolchados",
      "Resistencia ajustable",
      "Asiento ergonómico",
      "Estructura robusta de acero"
    ],
    specifications: {
      color: "M2-1011B Triceps Extension",
      dimensiones: "1020 x 928 x 1515 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "165 kg",
      "peso bruto (W.G.)": "205 kg",
      "músculo trabajado": "Tríceps",
    }
  },
  {
    id: 19,
    name: "M2-1017 Rear Delt - Pec Fly",
    primaryCategory: "M2",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros"],
    image: "/maquinas/M2-1017 Rear Delt - Pec Fly.png",
    alt: "M2-1017 Rear Delt - Pec Fly",
    "description": [
      "M2-1017 Rear Delt - Pec Fly. Esta máquina de doble función permite entrenar tanto los pectorales como los deltoides posteriores.",
      "Se ajusta mediante dos juegos de palancas: una debajo del asiento para ajustar la altura del usuario y otra en cada brazo de la máquina para ajustar la posición inicial del ejercicio seleccionado y el peso se ajusta mediante una columna de pesas con pasador."
    ],
    features: [
      "Asiento ajustable",
      "Agarres ergonómicos",
      "Resistencia con pesas integradas",
      "Estructura estable de acero"
    ],
    specifications: {
      modelo: "M2-1017",
      dimensiones: "1400 x 1280 x 1850 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "145 kg",
      "peso bruto (W.G.)": "185 kg",
      "músculo trabajado": "Pectorales y deltoides posteriores",

    }
  },


// Equipos FM

  {
    id: 25,
    name: "FM-1001 Dual Adjustable Pulley",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps"],
    image: "/fm/FM-1001 Dual Adjustable Pulley.png",
    alt: "FM-1001 Dual Adjustable Pulley",
    "description": [
      "FM-1001 Dual Adjustable Pulley. Esta compacta máquina de cable doble es versátil y ofrece múltiples opciones de entrenamiento en un espacio reducido. Es apta tanto para ejercicios con cable doble como con cable simple. Cada lado cuenta con una columna de pesas independiente con pasador y polea de altura ajustable."
    ],
    features: [
      "Poleas ajustables en múltiples alturas",
      "Sistema de doble polea para movimientos unilaterales",
      "Múltiples agarres y accesorios incluidos",
      "Permite entrenar el cuerpo completo"
    ],
    specifications: {
      modelo: "FM-1001",
      dimensiones: "1840 x 1350 x 2490 mm",
      "placas (Weight Stack)": "437 lbs/198 kg",
      "peso neto (N.W.)": "208 kg",
      "peso bruto (W.G.)": "248 kg",
      "músculo trabajado": "Cuerpo completo (Pecho, espalda, hombros, brazos, core)",
    }
  },
  {
    id: 26,
    name: "FM-1005 Multi Jungle 4 Stack",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Espalda", "Hombros", "Bíceps", "Tríceps"],
    image: "/fm/FM-1005 Multi Jungle 4 Stack.png",
    alt: "FM-1005 Multi Jungle 4 Stack",
    "description": [
      "FM-1005 Multi Jungle 4 Stack. Esta estación de entrenamiento multifunción es una excelente adición a cualquier gimnasio. Cuenta con 4 estaciones que ofrecen múltiples opciones de entrenamiento, incluyendo una estación de polea para dorsales, una estación de remo con polea, una estación de extensión de tríceps y una estación de polea individual con altura ajustable."
    ],
    features: [
      "Estación para 4 usuarios simultáneos",
      "Incluye estaciones de polea alta (jalón), polea baja (remo) y poleas ajustables",
      "Selectores de peso magnéticos y seguros",
      "Diseño optimizado para ahorrar espacio"
    ],
    specifications: {
      modelo: "FM-1005",
      dimensiones: "3405 x 1675 x 2330 mm",
      "placas (Weight Stack)": "918 lbs/416.25 kg",
      "peso neto (N.W.)": "289 kg",
      "peso bruto (W.G.)": "329 kg",
      "músculo trabajado": "Múltiples (Dorsales, hombros, bíceps, tríceps)",
    }
  },
  {
    id: 27,
    name: "FM-1006 Multi Jungle 5 Stack",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Espalda", "Hombros", "Bíceps", "Tríceps"],
    image: "/fm/FM-1006 Multi Jungle 5 Stack.png",
    alt: "FM-1006 Multi Jungle 5 Stack",
    "description": [
      "FM-1006 Multi Jungle 5 Stack. Esta estación de entrenamiento está equipada con una variedad de opciones, lo que la hace ideal para gimnasios concurridos que buscan maximizar el espacio de entrenamiento.",
      "Cuenta con una estación de polea para dorsales, una estación de remo, una estación de flexión, dos barras de dominadas (neutral y estándar) y una estación de poleas en el centro."
    ],
    features: [
      "Estación para 5 usuarios simultáneos",
      "Añade una estación adicional a la versión de 4 stacks",
      "Construcción de alta resistencia para uso comercial",
      "Permite una gran variedad de rutinas de entrenamiento"
    ],
    specifications: {
      color: "FM-1006",
      dimensiones: "3405 x 4710 x 2330 mm",
      "placas (Weight Stack)": "1136 lbs/515.25 kg",
      "peso neto (N.W.)": "398 kg",
      "peso bruto (W.G.)": "438 kg",
      "músculo trabajado": "Múltiples (Dorsales, hombros, bíceps, tríceps, pecho)",
    }
  },
  {
    id: 28,
    name: "FM-1007 Multi Jungle 8 Stack",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Espalda", "Hombros", "Bíceps", "Tríceps", "Pecho"],
    image: "/fm/FM-1007 Multi Jungle 8 Stack.png",
    alt: "FM-1007 Multi Jungle 8 Stack",
    "description": [
      "FM-1007 Multi Jungle 8 Stack. Esta amplia estación de entrenamiento está equipada con una variedad de opciones, lo que la hace ideal para gimnasios concurridos que buscan maximizar el espacio de entrenamiento.",
      "Cuenta con 2 estaciones de remo, 2 estaciones de polea dorsal, 2 juegos de barras de dominadas (una neutra y una estándar), 2 estaciones de flexión de brazos y una estación de polea en el centro."
    ],
    features: [
      "Estación central para 8 usuarios simultáneos",
      "Solución completa para entrenamiento de fuerza en gimnasios",
      "Máxima versatilidad de ejercicios",
      "Estructura robusta y estable"
    ],
    specifications: {
      color: "FM-1007",
      dimensiones: "3405 x 5200 x 2330 mm",
      "placas (Weight Stack)": "1835 lbs/832.5 kg",
      "peso neto (N.W.)": "710 kg",
      "peso bruto (W.G.)": "750 kg",
      "músculo trabajado": "Cuerpo completo",
    }
  },
  { 
    // PENDIENTE POR AGREGAR DATOS
    id: 29,
    name: "FM-1008 Cable Crossover",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros"],
    image: "/fm/FM-1008 Cable Crossover.png",
    alt: "FM-1008 Cable Crossover",
    "description": [
      "FM-1008 Cable Crossover. Esta máquina es apta para ejercicios con polea simple y doble. Cada lado cuenta con una columna de pesas independiente con pasador y polea de altura ajustable."
    ],
    features: [
      "Dos torres de poleas ajustables en altura",
      "Barra de conexión superior para dominadas (pull-ups)",
      "Movimiento de cable suave y consistente",
      "Ideal para ejercicios de apertura de pecho (flys) y elevaciones de hombros"
    ],
    specifications: {
      modelo: "FM-1008",
      dimensiones: "1935 x 2217 x 1125 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "215 kg",
      "peso bruto (W.G.)": "255 kg",
      "músculo trabajado": "Pectorales, deltoides (hombros)",
    }
  },
  {
    id: 30,
    name: "FM-1009 Smith Machine",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos", "Pecho", "Hombros"],
    image: "/fm/FM-1009 Smith Machine.png",
    alt: "FM-1009 Smith Machine",
    "description": [
      "FM-1009 Smith Machine. Esta máquina Smith es resistente y capaz de soportar cargas extremas. El recorrido de la barra está ligeramente inclinado, lo que permite un movimiento más natural para ciertos ejercicios.",
      "Esta barra cuenta con cierres de seguridad que se pueden girar para un entrenamiento más seguro. También cuenta con un amplio espacio de almacenamiento para discos de pesas."
    ],
    features: [
      "Barra guiada con movimiento vertical para mayor seguridad",
      "Múltiples topes de seguridad ajustables",
      "Permite realizar sentadillas, press de banca y press militar de forma segura",
      "Construcción de acero de alta resistencia"
    ],
    specifications: {
      modelo: "FM-1009",
      dimensiones: "2266 x 1380 x 2330 mm",
      "placas (Weight Stack)": " - ",
      "peso neto (N.W.)": "242 kg",
      "peso bruto (W.G.)": "282 kg",
      "músculo trabajado": "Múltiples (Cuádriceps, glúteos, pectorales, hombros)",
    }
  },
  {
    id: 31,
    name: "FM-1024D 45 Leg Press",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/fm/FM-1024D 45 Leg Press.png",
    alt: "FM-1024D 45 Leg Press",
    "description": [
      "FM-1024D 45 Leg Press. Esta prensa de piernas con discos soporta pesos extremos y proporciona un movimiento suave. Incluye cierres de seguridad, una plataforma ancha para los pies, asas de apoyo y espacio para guardar discos."    
    ],
    features: [
      "Plataforma amplia y antideslizante para los pies",
      "Inclinación de 45 grados para un trabajo intenso de piernas",
      "Sistema de bloqueo de seguridad de fácil acceso",
      "Asiento y respaldo ergonómicos para una postura correcta"
    ],
    specifications: {
      modelo: "FM-1024D",
      dimensiones: "2266 x 1585 x 1630 mm",
      "placas (Weight Stack)": " - ",
      "peso neto (N.W.)": "268 kg",
      "peso bruto (W.G.)": "308 kg",
      "músculo trabajado": "Cuádriceps, glúteos, isquiotibiales",
    }
  },
  {
    id: 32,
    name: "FM-1024E Hack Squat",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/fm/FM-1024E Hack Squat.png",
    alt: "FM-1024E Hack Squat",
    "description": [
      "FM-1024E Hack Squat. Esta prensa de piernas con discos soporta pesos extremos y proporciona un movimiento suave. Incluye cierres de seguridad, una plataforma ancha para los pies, asas de apoyo y espacio para guardar discotecas."    
    ],
    features: [
      "Movimiento guiado para una sentadilla segura y efectiva",
      "Enfocado en el desarrollo de los cuádriceps",
      "Hombreras y respaldo acolchados para mayor confort",
      "Soportes laterales para carga y descarga de discos"
    ],
    specifications: {
      modelo: "FM-1024E",
      dimensiones: "1792 x 1425 x 1425 mm",
      "placas (Weight Stack)": " - ",
      "peso neto (N.W.)": "204 kg",
      "peso bruto (W.G.)": "244 kg",
      "músculo trabajado": "Cuádriceps, glúteos",
    }
  },
  {
    id: 33,
    name: "FM-1024F Hack Squat",
    primaryCategory: "FM",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/fm/FM-1024F Hack Squat.png",
    alt: "FM-1024F Hack Squat",
    "description": [
      "FM-1024F Hack Squat. Esta máquina Hack Squat incluye una plataforma ajustable para los pies, lo que permite ajustar el ángulo a su gusto. Incorpora palancas de seguridad para retirar y volver a colocar el peso, además de asas de apoyo adicionales durante el ejercicio.",
      "Está bien acolchada y soporta cargas extremas (hasta 1200 kg), ofreciendo un movimiento muy suave y es una máquina con discos de pesaje y espacio adicional para almacenarlos."    
    ],
    features: [
      "Diseño ergonómico que minimiza la tensión en la espalda baja",
      "Plataforma ajustable para variar el enfoque muscular",
      "Construcción robusta para soportar cargas pesadas",
      "Topes de seguridad para entrenar sin asistencia"
    ],
    specifications: {
      modelo: "FM-1024F",      
      dimensiones: "1935 x 2217 x 1125 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "215 kg",
      "peso bruto (W.G.)": "255 kg",
      "músculo trabajado": "Cuádriceps, glúteos",
    }
  },

  // Equpos FW
  {
    id: 34,
    name: "FW-1001 - Olympic Flat Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/FW/FW-1001 - Olympic Flat Bench.png",
    alt: "FW-1001 - Olympic Flat Bench",
    "description": [
      "FW-1001 - Olympic Flat Bench. Este banco resistente está bien acolchado y es apto para pesas libres pesadas.",
      "Incluye amplio espacio para discos de pesas y una plataforma para apoyarse."    
    ],
    features: [
      "Diseñado para press de banca plano con barra olímpica",
      "Tapicería de alta densidad y durabilidad",
      "Soportes para barra robustos y seguros",
      "Estructura de acero reforzado para máxima estabilidad"
    ],
    specifications: {
      modelo: "FW-1001",
      dimensiones: "1610 x 1728 x 1263 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "80 kg",
      "peso bruto (W.G.)": "120 kg",
      "músculo trabajado": "Soporte para entrenamiento de pectoral",
    }
  },
  {
    id: 35,
    name: "FW-1002 - Olympic Incline Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros"],
    image: "/FW/FW-1002 - Olympic Incline Bench.png",
    alt: "FW-1002 - Olympic Incline Bench",
    "description": [
      "FW-1002 - Olympic Incline Bench. Este robusto banco inclinado cuenta con un asiento ajustable a la altura del usuario. Está bien acolchado y es apto para pesas libres pesadas.",
      "Incluye amplio espacio para discos de pesas y una plataforma para apoyarse."    
    ],
    features: [
      "Diseñado para press de banca inclinado con barra olímpica",
      "Ángulo fijo para un enfoque óptimo en el pectoral superior",
      "Asiento ajustable en altura",
      "Plataforma para asistente (spotter)"
    ],
    specifications: {
      modelo: "FW-1002",
      dimensiones: "1636 x 1995 x 1483 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "105 kg",
      "peso bruto (W.G.)": "145 kg",
      "músculo trabajado": "Soporte para entrenamiento de pectoral superior y hombros",
    }
  },
  {
    id: 36,
    name: "FW-1003 - Olympic Decline Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/FW/FW-1003 - Olympic Decline Bench.png",
    alt: "FW-1003 - Olympic Decline Bench",
    "description": [
      "FW-1003 - Olympic Decline Bench. Este robusto banco fijo declinado proporciona gran estabilidad y soporte para pesas libres pesadas.",
      "También incluye un amplio espacio de almacenamiento para discos de pesas."    
    ],
    features: [
      "Diseñado para press de banca declinado con barra olímpica",
      "Enfoque específico en el pectoral inferior",
      "Rodillos de sujeción para piernas ajustables",
      "Estructura estable y segura para cargas pesadas"
    ],
    specifications: {
      modelo: "FW-1003",
      dimensiones: "1636 x 2135 x 1333 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "91 kg",
      "peso bruto (W.G.)": "131 kg",
      "músculo trabajado": "Soporte para entrenamiento de pectoral inferior",
    }
  },
  {
    id: 37,
    name: "FW-1004 - Seated Arm Curl",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Bíceps"],
    image: "/FW/FW-1004 - Seated Arm Curl.png",
    alt: "FW-1004 - Seated Arm Curl",
    "description": [
      "FW-1004 - Seated Arm Curl. Este soporte para curl de brazos sentado está diseñado principalmente para curls de predicador.",
      "Está bien acolchado, cuenta con rieles de seguridad acolchados para proteger el equipo y un asiento ajustable a la altura del usuario."    
    ],
    features: [
      "También conocido como banco predicador (Preacher Curl)",
      "Aísla el músculo bíceps de manera efectiva",
      "Almohadilla para brazos en ángulo para un soporte óptimo",
      "Asiento ajustable en altura"
    ],
    specifications: {
      modelo: "FW-1004",
      dimensiones: "796 x 1322 x 1031 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "90 kg",
      "peso bruto (W.G.)": "130 kg",
      "músculo trabajado": "Bíceps",
    }
  },
  {
    id: 38,
    name: "FW-1005 T-Bar Row",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/FW/FW-1005 T-Bar Row.png",
    alt: "FW-1005 T-Bar Row",
    "description": [
      "FW-1005 T-Bar Row. Esta máquina de remo con barra en T de pie ocupa un espacio mínimo y tiene un diseño sólido y resistente.",
      "Cuenta con una plataforma para los pies ligeramente inclinada para una mejor posición, un pequeño soporte de goma para la barra que protege la máquina y asas con agarre ancho y neutro para trabajar diferentes zonas de la espalda."    
    ],
    features: [
      "Plataforma para remo con barra T",
      "Superficie antideslizante para los pies",
      "Múltiples agarres para variar el enfoque en la espalda",
      "Punto de pivote de alta resistencia"
    ],
    specifications: {
      modelo: "FW-1005",
      dimensiones: "2630 x 987 x 680 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "73 kg",
      "peso bruto (W.G.)": "113 kg",
      "músculo trabajado": "Espalda (dorsales, romboides)",
    }
  },
  {
    id: 39,
    name: "FW-1006 - Hyperextension",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Espalda", "Glúteos"],
    image: "/FW/FW-1006 - Hyperextension.png",
    alt: "FW-1006 - Hyperextension",
    "description": [
      "FW-1006 - Hyperextension. Las almohadillas para la cadera de esta máquina cuentan con un riel deslizante, lo que facilita su ajuste a la altura del usuario. Cuenta con asas de apoyo adicionales para facilitar el acceso y la salida de la máquina.",
      "Es muy robusta y duradera en comparación con muchas otras hiperextensiones, lo que la hace ideal para el uso diario intensivo en cualquier gimnasio."    
    ],
    features: [
      "Banco para hiperextensiones a 45 grados",
      "Fortalece la zona lumbar, glúteos e isquiotibiales",
      "Almohadillas ajustables para la cadera",
      "Soportes antideslizantes para los pies"
    ],
    specifications: {
      modelo: "FW-1006",
      dimensiones: "1500 x 858 x 883 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "73 kg",
      "peso bruto (W.G.)": "113 kg",
      "músculo trabajado": "Espalda baja, glúteos, isquiotibiales",
    }
  },
  {
    id: 40,
    name: "FW-1007- Assist Abdominal Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Abdominales"],
    image: "/FW/FW-1007- Assist Abdominal Bench.png",
    alt: "FW-1007- Assist Abdominal Bench",
    "description": [
      "FW-1007- Assist Abdominal Bench. Este banco abdominal ofrece un soporte sólido para la espalda, pedales y manijas para ayudar a los usuarios con los movimientos abdominales.",
    ],
    features: [
      "Banco declinado para ejercicios abdominales",
      "Rodillos de sujeción para piernas",
      "Inclinación fija para un desafío constante",
      "Tapicería cómoda y resistente"
    ],
    specifications: {
      modelo: "FW-1007",
      dimensiones: "1686 x 798 x 1139 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "60 kg",
      "peso bruto (W.G.)": "100 kg",
      "músculo trabajado": "Abdominales",
    }
  },
  {
    id: 41,
    name: "FW-1008 - 75 Degree Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/FW/FW-1008 - 75 Degree Bench-.png",
    alt: "FW-1008 - 75 Degree Bench",
    "description": [
      "FW-1008 - 75 Degree Bench. Este banco fijo proporciona una gran estabilidad para cargas pesadas de peso libre y tiene un pedal para apoyo adicional.",
    ],
    features: [
      "Banco con respaldo a 75 grados",
      "Ideal para realizar press militar (press de hombros) sentado",
      "Proporciona soporte para la espalda durante el ejercicio",
      "Estructura compacta y estable"
    ],
    specifications: {
      modelo: "FW-1008",
      dimensiones: "1280 x 708 x 1037 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "33 kg",
      "peso bruto (W.G.)": "73 kg",
      "músculo trabajado": "Soporte para entrenamiento de hombros",
    }
  },
  {
    id: 42,
    name: "FW-1009 Flat Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Pecho", "Espalda", "Hombros"],
    image: "/FW/FW-1009 Flat Bench.png",
    alt: "FW-1009 Flat Bench",
    "description": [
      "FW-1009 Flat Bench. Este banco está bien acolchado y es apto para cargas pesadas de peso libre. Su estructura minimalista ocupa poco espacio.",
    ],
    features: [
      "Banco plano multiusos",
      "Esencial para press con mancuernas, remos y otros ejercicios",
      "Construcción de una sola pieza para máxima robustez",
      "Fácil de mover y posicionar"
    ],
    specifications: {
      modelo: "FW-1009",     
      dimensiones: "1258 x 700 x 451 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "23 kg",
      "peso bruto (W.G.)": "63 kg",
      "músculo trabajado": "Multipropósito (pectoral, espalda, hombros)",
    }
  },
  {
    id: 43,
    name: "FW-1012-Adjustable Abdominal Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Abdominales"],
    image: "/FW/FW-1012-Adjustable Abdominal Bench.png",
    alt: "FW-1012-Adjustable Abdominal Bench",
    "description": [
      "FW-1012-Adjustable Abdominal Bench. El ángulo de inclinación de este banco se puede ajustar según las preferencias del usuario y viene con un asa de agarre para mayor apoyo.",
    ],
    features: [
      "Banco abdominal con ángulo de declinación ajustable",
      "Permite aumentar o disminuir la dificultad del ejercicio",
      "Rodillos de sujeción acolchados y ajustables",
      "Diseño plegable para ahorrar espacio"
    ],
    specifications: {
      modelo: "FW-1012",     
      dimensiones: "882 x 1454 x 1002 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "21 kg",
      "peso bruto (W.G.)": "61 kg",
      "músculo trabajado": "Abdominales",
    }
  },
  {
    id: 44,
    name: "FW-1013-Adjustable Bench",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros", "Bíceps"],
    image: "/FW/FW-1013-Adjustable Bench.png",
    alt: "FW-1013-Adjustable Bench",
    "description": [
      "FW-1013-Adjustable Bench. Este banco resistente es totalmente ajustable, desde posición horizontal hasta 90 grados. Ofrece gran estabilidad y soporte para cargas pesadas de peso libre.",
    ],
    features: [
      "Banco ajustable en múltiples posiciones (declinado, plano, inclinado, vertical)",
      "Máxima versatilidad para una gran variedad de ejercicios",
      "Asiento y respaldo ajustables independientemente",
      "Ruedas y asa para fácil transporte"
    ],
    specifications: {
      modelo: "FW-1013",     
      dimensiones: "740 x 1196 x 976 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "43 kg",
      "peso bruto (W.G.)": "83 kg",
      "músculo trabajado": "Multipropósito (press inclinado, press plano, press de hombros, etc.)",

    }
  },
  {
    id: 45,
    name: "FW-1014-Barbell Rack",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Accesorios"],
    image: "/FW/FW-1014-Barbell Rack.png",
    alt: "FW-1014-Barbell Rack",
    "description": [
      "FW-1014-Barbell Rack. Capacidad para 10 barras, fabricadas en acero macizo.",
    ],
    features: [
      "Soporte para almacenar barras de musculación",
      "Diseño vertical u horizontal según el modelo",
      "Ayuda a mantener el gimnasio ordenado y seguro",
      "Construcción resistente para soportar múltiples barras"
    ],
    specifications: {
      modelo: "FW-1014",     
      dimensiones: "735 x 883 x 1269 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "65 kg",
      "peso bruto (W.G.)": "105 kg",
      "músculo trabajado": "Almacenamiento y organización de barras",

    }
  },
  {
    id: 46,
    name: "FW-1015-Dumbbell Rack Double",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Accesorios"],
    image: "/FW/FW-1015-Dumbbell Rack Double.png",
    alt: "FW-1015-Dumbbell Rack Double",
     "description": [
      "FW-1015-Dumbbell Rack Double. Este soporte tiene capacidad para 20 mancuernas y cuenta con soportes protectores para evitar el desgaste. Es resistente y robusto, apto para mancuernas de cualquier tamaño.",
    ],
    features: [
      "Soporte de dos o tres niveles para mancuernas",
      "Optimiza el espacio de almacenamiento",
      "Bases de goma para proteger las mancuernas y el rack",
      "Fácil acceso al equipo"
    ],
    specifications: {
      modelo: "FW-1015",     
      dimensiones: "2306 x 587 x 812 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "69 kg",
      "peso bruto (W.G.)": "109 kg",
      "músculo trabajado": "Almacenamiento y organización de mancuernas",
    }
  },
  {
    id: 47,
    name: "FW-1016-Plate Rack",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Accesorios"],
    image: "/FW/FW-1016-Plate Rack.png",
    alt: "FW-1016-Plate Rack",
     "description": [
      "FW-1016-Plate Rack. Este soporte para platos cuenta con 7 secciones para un amplio almacenamiento de platos, ocupando el mínimo espacio. Robusto, resistente e ideal para cualquier gimnasio.",
    ],
    features: [
      "Soporte tipo árbol para discos de peso",
      "Múltiples postes para organizar discos por tamaño y peso",
      "Base estable para evitar vuelcos",
      "Facilita la carga y descarga de barras"
    ],
    specifications: {
      modelo: "FW-1016",     
      dimensiones: "798 x 798 x 765 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "19 kg",
      "peso bruto (W.G.)": "59 kg",
      "músculo trabajado": "Almacenamiento y organización de discos",
    }
  },
  {
    id: 48,
    name: "FW-1017-Seated Calf Raise",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/FW/FW-1017-Seated Calf Raise.png",
    alt: "FW-1017-Seated Calf Raise",
     "description": [
      "FW-1017-Seated Calf Raise. Esta máquina para levantar pantorrillas sentado incluye una palanca para ajustar la altura de la rodillera según las preferencias del usuario. Una palanca de seguridad lateral soporta el peso hasta que el usuario esté listo para realizar el ejercicio.",
      "Las asas en la parte superior de la rodillera facilitan el agarre durante el ejercicio, y los pedales sólidos con agarre firme garantizan la seguridad durante el ejercicio."
    ],
    features: [
      "Máquina para elevación de talones sentado",
      "Aísla y trabaja el músculo sóleo",
      "Almohadillas ajustables para las rodillas",
      "Soporte para carga de discos de peso"
    ],
    specifications: {
      modelo: "FW-1017",     
      dimensiones: "887 x 1316 x 1020 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "74 kg",
      "peso bruto (W.G.)": "114 kg",
      "músculo trabajado": "Pantorrillas (sóleo)",
    }
  },
  {
    id: 49,
    name: "FW-1018 Squat Rack",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/FW/FW-1018 Squat Rack.png",
    alt: "FW-1018 Squat Rack",
     "description": [
      "FW-1018 Squat Rack. Este soporte para sentadillas es muy duradero y robusto, ideal para soportar pesos libres muy pesados. Incluye rieles de seguridad y amplio espacio de almacenamiento para discos de pesas.",
    ],
    features: [
      "Estructura robusta para realizar sentadillas de forma segura",
      "Soportes de barra (J-cups) ajustables en altura",
      "Brazos de seguridad (spotter arms) para protección",
      "Puede incluir una barra para dominadas (pull-ups)"
    ],
    specifications: {
      modelo: "FW-1018",     
      dimensiones: "1600 x 1552 x 1756 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "100 kg",
      "peso bruto (W.G.)": "140 kg",
      "músculo trabajado": "Soporte para sentadillas, press de banca y press militar",
    }
  },
  {
    id: 50,
    name: "FW-2012 Lying T-Bar Row",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/FW/FW-2012 Lying T-Bar Row.png",
    alt: "FW-2012 Lying T-Bar Row",
     "description": [
      "FW-2012 Lying T-Bar Row. Este remo con barra en T tiene una posición fija, lo que ofrece gran estabilidad y no tiene funciones ajustables.",
      "Cuenta con asas con múltiples ángulos para trabajar diferentes zonas de la espalda. Incluye un pequeño compartimento adicional para discos de pesas."
    ],
    features: [
      "Remo con barra T con apoyo en el pecho",
      "Aísla los músculos de la espalda al reducir el impulso",
      "Almohadilla pectoral en ángulo para mayor comodidad",
      "Agarres múltiples para diferentes enfoques"
    ],
    specifications: {
      modelo: "FW-2012",           
      dimensiones: "1857 x 1103 x 1191 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "86 kg",
      "peso bruto (W.G.)": "126 kg",
      "músculo trabajado": "Espalda (dorsales, romboides, trapecio)",
    }
  },
  {
    id: 51,
    name: "FW-2025 -Vertical Knee Up",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Abdominales", "Tríceps"],
    image: "/FW/FW-2025 -Vertical Knee Up.png",
    alt: "FW-2025 -Vertical Knee Up",
     "description": [
      "FW-2025 -Vertical Knee Up. Marcada como máquina de elevación de piernas, esta máquina es multifuncional y también permite realizar fondos.",
      "Las asas verticales ofrecen soporte para el posicionamiento en los movimientos de entrenamiento de core, mientras que las asas horizontales son ideales para fondos y entrenamiento de core."
    ],
    features: [
      "Estación de elevación de rodillas vertical (VKR)",
      "Trabaja intensamente los abdominales inferiores",
      "Agarres para fondos (dips) para entrenar tríceps y pecho",
      "Respaldo y apoyabrazos acolchados"
    ],
    specifications: {
      modelo: "FW-2025",     
      dimensiones: "1122 x 805 x 1690 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "105 kg",
      "peso bruto (W.G.)": "145 kg",
      "músculo trabajado": "Abdominales inferiores, Tríceps, Pectoral inferior",
    }
  },
  {
    id: 52,
    name: "FW-2029 Glute Ham Raise",
    primaryCategory: "FW",
    status: "in-stock",
    subCategories: ["Glúteos", "Piernas", "Espalda"],
    image: "/FW/FW-2029 Glute Ham Raise.png",
    alt: "FW-2029 Glute Ham Raise",
     "description": [
      "FW-2029 Glute Ham Raise. Esta máquina de elevación de glúteos y isquiotibiales incluye una plataforma y almohadillas de apoyo ajustables, ambas sobre un riel deslizante, lo que permite ajustes precisos según la altura del usuario y la selección de ejercicios. Además, cuenta con rodilleras y asas acolchadas para facilitar su entrada y salida. Sus materiales y diseño la hacen duradera, resistente y ligera.",
    ],
    features: [
      "Máquina GHD (Glute Ham Developer)",
      "Excelente para fortalecer la cadena posterior",
      "Plataformas para pies y rodillas ajustables",
      "Permite realizar GHR, hiperextensiones y sit-ups"
    ],
    specifications: {
      modelo: "FW-2029",     
      dimensiones: "1715 x 678 x 1210 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "84 kg",
      "peso bruto (W.G.)": "124 kg",
      "músculo trabajado": "Glúteos, isquiotibiales, espalda baja",
    }
  },

  // Equipos LD 
  {
    id: 53,
    name: "LD-1001 Chest Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/ld/LD-1001 Chest Press.png",
    alt: "LD-1001 Chest Press",
     "description": [
      "LD-1001 Chest Press. Esta prensa de pecho de alta resistencia cuenta con brazos convergentes para un movimiento más natural. Una palanca debajo del asiento se ajusta a la altura del usuario.",
      "El pedal inferior ayuda a activar el cierre de seguridad para iniciar y finalizar el movimiento. La máquina cuenta con discos de pesas a ambos lados."
    ],
    features: [
      "Movimiento convergente para una contracción pectoral natural",
      "Agarres múltiples (vertical y horizontal)",
      "Asiento ajustable en altura",
      "Biomecánica optimizada para aislar el pecho"
    ],
    specifications: {
      modelo: "",
      dimensiones: "1350 x 1550 x 1830 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "153 kg",
      "peso bruto (W.G.)": "193 kg",
      "músculo trabajado": "Pectoral mayor",
      modelo: "LD-1001",
    }
  },
  {
    id: 54,
    name: "LD-1002 Horizontal Bench Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/ld/LD-1002 Horizontal Bench Press.png",
    alt: "LD-1002 Horizontal Bench Press",
     "description": [
      "LD-1002 Horizontal Bench Press. Este banco de press de banca de alta resistencia permite entrenar ambos lados de forma unilateral o bilateral.",
      "Se cargan discos a ambos lados de la máquina y cuenta con espacio adicional para almacenarlos. El pedal ofrece apoyo al retirar y volver a colocar las pesas en el soporte."
    ],
    features: [
      "Simula el movimiento de press de banca plano con barra",
      "Brazos independientes para un desarrollo muscular equilibrado",
      "Topes de seguridad para entrenar sin asistencia",
      "Asiento ajustable para una correcta alineación"
    ],
    specifications: {
      modelo: "LD-1002",
      dimensiones: "1880 x 1950 x 850 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "165 kg",
      "peso bruto (W.G.)": "205 kg",
      "músculo trabajado": "Pectoral, deltoides anterior, tríceps",
    }
  },
  {
    id: 55,
    name: "LD-1003 Shoulder Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/ld/LD-1003 Shoulder Press.png",
    alt: "LD-1003 Shoulder Press",
     "description": [
      "LD-1003 Shoulder Press. Esta máquina de prensa de hombros premium es duradera y apta para uso frecuente e intensivo. Su asiento se ajusta a la altura del usuario. Cuenta con protectores de seguridad para soportar el peso antes y después del ejercicio.",
      "Sus asas están en ángulo, lo que permite diferentes agarres de presión y ofrece una trayectoria de movimiento natural y suave. Es ideal para entrenamiento bilateral y con un solo brazo."
    ],
    features: [
      "Máquina para press de hombros sentado",
      "Movimiento convergente que imita la trayectoria natural del hombro",
      "Respaldo en ángulo para mayor estabilidad y confort",
      "Agarres ergonómicos para reducir la tensión en las muñecas"
    ],
    specifications: {
      modelo: "LD-1003",
      dimensiones: "1650 x 1600 x 1435 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "210 kg",
      "peso bruto (W.G.)": "250 kg",
      "músculo trabajado": "Deltoides, tríceps",
    }
  },
  {
    id: 56,
    name: "LD-1004 Standing Lateral Rise Rear Deltoid",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/ld/LD-1004 Standing Lateral Rise Rear Deltoid.png",
    alt: "LD-1004 Standing Lateral Rise Rear Deltoid",
     "description": [
      "LD-1004 Standing Lateral Rise Rear Deltoi. Esta máquina premium para deltoides laterales/posteriores está configurada para realizar elevaciones de pie y sentado en lados opuestos. Tanto el asiento como la plataforma son ajustables.",
      "Cada brazo de la máquina está equipado con discos de pesas y es apta para entrenamiento bilateral o individual. Las asas también permiten un movimiento natural durante el ejercicio."
    ],
    features: [
      "Máquina para elevaciones laterales y posteriores de hombro",
      "Brazos ajustables para variar el ejercicio",
      "Aísla las cabezas lateral y posterior del deltoides",
      "Almohadillas acolchadas para el pecho y los brazos"
    ],
    specifications: {
      modelo: "LD-1004",
      dimensiones: "2100 x 810 x 1710 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Deltoides lateral y posterior",
    }
  },
  {
    id: 57,
    name: "LD-1005 Biceps Curl",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Bíceps"],
    image: "/ld/LD-1005 Biceps Curl.png",
    alt: "LD-1005 Biceps Curl",
     "description": [
      "LD-1005 Biceps Curl. Esta robusta máquina de curl de bíceps incluye una palanca debajo del asiento para ajustar la altura del usuario. Está bien acolchada y cuenta con pedales con agarres firmes para mayor apoyo.",
      "La máquina admite discos a ambos lados y cuenta con espacio adicional para guardar discos."
    ],
    features: [
      "Máquina de curl de bíceps sentado",
      "Almohadilla en ángulo para un apoyo óptimo del brazo (tipo predicador)",
      "Punto de pivote alineado con la articulación del codo",
      "Agarre giratorio para un movimiento más natural"
    ],
    specifications: {
      modelo: "LD-1005",
      dimensiones: "1100 x 1420 x 1060 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "128 kg",
      "peso bruto (W.G.)": "168 kg",
      "músculo trabajado": "Bíceps",
    }
  },
  {
    id: 58,
    name: "LD-1006 Front Lat Pull Down",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1006 Front Lat Pull Down.png",
    alt: "LD-1006 Front Lat Pull Down",
     "description": [
      "LD-1006 Front Lat Pull Down. Esta robusta máquina de remo alto cuenta con varias funciones ajustables: la palanca bajo el asiento se ajusta a la altura del usuario, y las almohadillas para los muslos y el pecho también se pueden ajustar según sus preferencias.",
      "Cuenta con asas de apoyo adicionales para mayor agarre (por ejemplo, durante los pulldowns con un solo brazo) y pedales con agarres firmes. Incorpora discos de pesaje a ambos lados con espacio adicional para almacenarlos."
    ],
    features: [
      "Máquina para jalón al pecho",
      "Rodillos de sujeción para piernas ajustables en altura",
      "Barra larga con agarres en ángulo",
      "Ideal para desarrollar la amplitud de la espalda"
    ],
    specifications: {
      modelo: "LD-1006",
      dimensiones: "2000 x 900 x 2050 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "196 kg",
      "peso bruto (W.G.)": "236 kg",
      "músculo trabajado": "Dorsal ancho, bíceps",
    }
  },
  {
    id: 59,
    name: "LD-1007 Smith Machine Dual System",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos", "Pecho", "Hombros"],
    image: "/ld/LD-1007 Smith Machine Dual System.png",
    alt: "LD-1007 Smith Machine Dual System",
     "description": [
      "LD-1007 Smith Machine Dual System. Esta robusta máquina de banco plano cuenta con una prensa convergente sobre rieles deslizantes para un movimiento suave y natural.",
      "Se cargan discos de pesas a ambos lados de la máquina e incluye un ligero espacio de almacenamiento adicional para discos de pesas."
    ],
    features: [
      "Sistema dual: Smith Machine y Jaula de potencia (Rack)",
      "Barra guiada con contrapeso para un movimiento suave",
      "Múltiples posiciones de seguridad",
      "Incluye soportes J-Cups y brazos de seguridad para uso con barra libre"
    ],
    specifications: {
      modelo: "LD-1007",
      dimensiones: "2209 x 1867 x 1440 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "200 kg",
      "peso bruto (W.G.)": "240 kg",
      "músculo trabajado": "Cuerpo completo (soporte para sentadillas, press de banca, etc.)",
    }
  },
  {
    id: 60,
    name: "LD-1008 Smith Machine Dual System Shoulder",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Hombros"],
    image: "/ld/LD-1008 Smith Machine Dual System Shoulder.png",
    alt: "LD-1008 Smith Machine Dual System Shoulder",
     "description": [
      "LD-1008 Smith Machine Dual System Shoulder. Esta robusta máquina de banco inclinado cuenta con una prensa convergente sobre rieles deslizantes para un movimiento suave y natural.",
      "Una palanca bajo el asiento se ajusta a la altura del usuario, con pedales debajo para mayor apoyo. Los discos de pesas se cargan a ambos lados de la máquina y cuenta con espacio adicional para almacenarlos."
    ],
    features: [
      "Máquina Smith enfocada en el press de hombros",
      "Movimiento guiado vertical o ligeramente angulado",
      "Asiento integrado con respaldo para una postura correcta",
      "Topes de seguridad para un entrenamiento seguro"
    ],
    specifications: {
      modelo: "LD-1008",
      dimensiones: "2095 x 1939 x 2055 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "260 kg",
      "peso bruto (W.G.)": "300 kg",
      "músculo trabajado": "Deltoides, tríceps",
    }
  },
  {
    id: 61,
    name: "LD-1009 Rowing",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1009 Rowing.png",
    alt: "LD-1009 Rowing",
     "description": [
      "LD-1009 Rowing. Esta robusta máquina de remo incluye un asiento y un soporte para el pecho ajustables a la altura del usuario.",
      "Los brazos de la máquina se mueven de forma natural, con mangos estrechos y neutrales y mangos rectos más anchos para optimizar la mecánica en diferentes movimientos de la espalda."
    ],
    features: [
      "Máquina de remo sentado con apoyo en el pecho",
      "Aísla la espalda al eliminar el balanceo del torso",
      "Agarres múltiples para diferentes enfoques (ancho, estrecho)",
      "Plataforma para pies antideslizante"
    ],
    specifications: {
      modelo: "LD-1009",
      dimensiones: "1643 x 1571 x 1361 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "199 kg",
      "peso bruto (W.G.)": "239 kg",
      "músculo trabajado": "Espalda media, dorsales, romboides",
    }
  },
  {
    id: 62,
    name: "LD-1010 Wide Chest Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/ld/LD-1010 Wide Chest Pres.png",
    alt: "LD-1010 Wide Chest Press",
     "description": [
      "LD-1010 Wide Chest Press. Esta prensa de pecho de alta resistencia cuenta con brazos convergentes y asas en ángulo para un movimiento más natural, y también es ideal para entrenar con un solo brazo.",
      "También cuenta con una plataforma para los pies que permite controlar un cierre de seguridad antes y después del ejercicio.",
      "El asiento es ajustable a la altura del usuario. Esta máquina admite discos de pesaje a ambos lados y cuenta con un ligero espacio de almacenamiento adicional para ellos."
    ],
    features: [
      "Press de pecho con agarre ancho",
      "Enfatiza el trabajo en la parte externa del pectoral",
      "Movimiento guiado y seguro",
      "Respaldo ajustable para adaptarse a diferentes usuarios"
    ],
    specifications: {
      modelo: "LD-1010",
      dimensiones: "1620 x 1465 x 1738 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "260 kg",
      "peso bruto (W.G.)": "300 kg",
      "músculo trabajado": "Pectoral (fibras externas), deltoides anterior",
    }
  },
  {
    id: 63,
    name: "LD-1011 Level Row",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1011 Level Row.png",
    alt: "LD-1011 Level Row",
     "description": [
      "LD-1010 Wide Chest Press. Esta robusta máquina de remo incluye un asiento y un soporte para el pecho ajustables a la altura del usuario.",
      "Los brazos de la máquina se mueven de forma natural, con asas en ángulo para una mecánica óptima.",
      "Los brazos de la máquina se mueven de forma natural, con asas en ángulo para una mecánica óptima."
    ],
    features: [
      "Máquina de remo con trayectoria horizontal",
      "Simula el movimiento de remo con mancuerna o en polea baja",
      "Brazos independientes para trabajo unilateral",
      "Asiento y apoyo pectoral ajustables"
    ],
    specifications: {
      modelo: "LD-1011",
      dimensiones: "1786 x 1435 x 1956 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "235 kg",
      "peso bruto (W.G.)": "275 kg",
      "músculo trabajado": "Dorsal ancho, espalda media",
    }
  },
  {
    id: 64,
    name: "LD-1012 High Row",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1012 High Row.png",
    alt: "LD-1012 High Row",
     "description": [
      "LD-1012 High Row. Esta polea frontal premium incluye varias características ajustables, como asiento, rodilleras y soporte para el pecho, adaptados a la altura del usuario.",
      "Esta polea ha sido diseñada para una biomecánica óptima, lo que proporciona a los brazos de la máquina una trayectoria de movimiento natural para mejores contracciones.",
    ],
    features: [
      "Máquina de remo alto para enfocar la espalda superior",
      "El tirón se realiza desde un ángulo superior",
      "Apoyo pectoral para mayor estabilidad",
      "Desarrolla el grosor de la espalda alta y trapecios"
    ],
    specifications: {
      modelo: "LD-1012",
      dimensiones: "1620 x 1775 x 2090 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "217 kg",
      "peso bruto (W.G.)": "257 kg",
      "músculo trabajado": "Espalda alta, trapecio, deltoides posterior",
    }
  },
  {
    id: 65,
    name: "LD-1013 Pectoral Machine",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Pecho"],
    image: "/ld/LD-1013 Pectoral Machine.png",
    alt: "LD-1013 Pectoral Machine",
     "description": [
      "LD-1013 Pectoral Machine. Esta máquina inclinada para pectorales ha sido diseñada para una biomecánica óptima. Su suave recorrido y sus asas giratorias garantizan las mejores contracciones.",
      "Una palanca bajo el asiento permite ajustar la altura del usuario. El pedal de seguridad inferior permite comenzar y finalizar el ejercicio en una posición segura, minimizando el riesgo de lesiones.",
      "La máquina cuenta con pesas a ambos lados y brazos móviles independientes, lo que la hace ideal tanto para entrenamiento bilateral como aislado."
    ],
    features: [
      "También conocida como máquina de contractor o pec deck",
      "Aísla el pectoral a través de un movimiento de aducción (apertura)",
      "Brazos de doble función para ejercicios de pectoral y deltoides posterior (pájaros)",
      "Ajuste sencillo del rango de movimiento"
    ],
    specifications: {
      modelo: "LD-1013",
      dimensiones: "1475 x 1445 x 1045 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "130 kg",
      "peso bruto (W.G.)": "170 kg",
      "músculo trabajado": "Pectoral",
    }
  },
  {
    id: 66,
    name: "LD-1014 Low Row",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1014 Low Row.png",
    alt: "LD-1014 Low Row",
     "description": [
      "LD-1014 Low Row. Esta máquina premium de remo bajo ha sido diseñada para una biomecánica óptima, garantizando una excelente experiencia de usuario. Los brazos de la máquina se mueven con naturalidad y las empuñaduras curvas permiten un agarre neutral o prono.",
      "Una palanca debajo del asiento y detrás del soporte pectoral permite ajustar la altura del usuario.",
      "Cada brazo de esta máquina de remo bajo se carga con un disco de pesas en la parte superior y se mueve de forma independiente, lo que la hace ideal para entrenamiento bilateral o isolateral. Las empuñaduras detrás del soporte pectoral ofrecen apoyo durante los movimientos con un solo brazo."
    ],
    features: [
      "Máquina de remo bajo, similar al remo en polea sentado",
      "Enfoca el trabajo en la parte media y baja del dorsal",
      "Plataforma larga para los pies para mayor estabilidad",
      "Movimiento suave y recorrido completo"
    ],
    specifications: {
      modelo: "LD-1014",
      dimensiones: "1485 x 1850 x 1751 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "185 kg",
      "peso bruto (W.G.)": "225 kg",
      "músculo trabajado": "Dorsal ancho (fibras inferiores), espalda media",
    }
  },
  {
    id: 67,
    name: "LD-1015 Incline Chest Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Pecho", "Hombros"],
    image: "/ld/LD-1015 Incline Chest Press.png",
    alt: "LD-1015 Incline Chest Press",
     "description": [
      "LD-1015 Incline Chest Press. Esta prensa de pecho inclinada premium ha sido diseñada para una biomecánica óptima y la seguridad del usuario, garantizando una experiencia excepcional.",
      "Los brazos tienen una trayectoria de movimiento convergente con asas en ángulo para contracciones de mayor calidad. Cada brazo se carga con discos de pesas y se mueve de forma independiente, lo que la hace ideal para entrenamiento bilateral e isolateral.",
      "El asiento es ajustable a la altura del usuario. Bajo el asiento hay un pedal que permite a los usuarios comenzar y terminar el ejercicio en una posición segura sin necesidad de un observador."
    ],
    features: [
      "Máquina de press inclinado para el pectoral superior",
      "Movimiento convergente para una mejor contracción muscular",
      "Asiento ajustable para alinear los hombros con los agarres",
      "Alternativa segura al press inclinado con peso libre"
    ],
    specifications: {
      modelo: "LD-1015",
      dimensiones: "1350 x 1550 x 1830 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "255 kg",
      "peso bruto (W.G.)": "295 kg",
      "músculo trabajado": "Pectoral superior, deltoides anterior, tríceps",
    }
  },
  {
    id: 68,
    name: "LD-1016 Leader Triceps",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Tríceps"],
    image: "/ld/LD-1016 Leader Triceps.png",
    alt: "LD-1016 Leader Triceps",
     "description": [
      "LD-1016 Leader Triceps. Esta máquina premium para fondos de tríceps ha sido diseñada para una biomecánica óptima, lo que le proporciona una trayectoria de movimiento natural.",
      "Los brazos de la máquina se pueden ajustar para moverse sincronizados o de forma independiente para un entrenamiento isolateral.",
    ],
    features: [
      "Máquina de extensiones de tríceps sentado",
      "Aísla las tres cabezas del tríceps",
      "Respaldo y asiento ajustables para una postura correcta",
      "Movimiento fluido para reducir la tensión en los codos"
    ],
    specifications: {
      modelo: "LD-1016",
      dimensiones: " - ",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": " - ",
      "peso bruto (W.G.)": " - ",
      "músculo trabajado": "Tríceps",
    }
  },
  {
    id: 69,
    name: "LD-1018 Circular Pulldown",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Espalda"],
    image: "/ld/LD-1018 Circular Pulldown.png",
    alt: "LD-1018 Circular Pulldown",
     "description": [
      "LD-1018 Circular Pulldown. Esta máquina premium de polea dorsal incluye varias características ajustables, como asiento ajustable, rodilleras y soporte pectoral para la altura del usuario.",
      "Esta máquina replica una polea dorsal con agarre ancho para trabajar la musculatura de la espalda superior. Su diseño biomecánico optimiza los brazos, proporcionando una trayectoria de movimiento natural para mejores contracciones.",
      "Cada brazo se mueve de forma independiente, lo que la hace ideal para entrenamiento bilateral o isolateral. Las asas adicionales detrás de la almohadilla pectoral facilitan los movimientos con un solo brazo."
    ],
    features: [
      "Máquina de jalón con un movimiento circular o de arco",
      "Simula el movimiento de una dominada de forma más natural",
      "Brazos independientes para trabajo unilateral",
      "Rodillos de sujeción para piernas"
    ],
    specifications: {
      modelo: "LD-1018",
      dimensiones: " - ",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": " - ",
      "peso bruto (W.G.)": " - ",
      "músculo trabajado": "Dorsal ancho, espalda alta",
    }
  },
  {
    id: 70,
    name: "LD-2001 Leg Extension",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/ld/LD-2001 Leg Extension.png",
    alt: "LD-2001 Leg Extension",
     "description": [
      "LD-2001 Leg Extension. Esta robusta extensión de piernas incluye espinilleras y asiento ajustables a la altura del usuario. Cada pierna cuenta con una palanca para ajustar la posición inicial y final del ejercicio.",
      "Cada pierna se carga con un disco de peso independiente y la máquina es apta para entrenamiento bilateral o individual.",
    ],
    features: [
      "Máquina para extensiones de cuádriceps",
      "Aísla y define los músculos frontales del muslo",
      "Almohadilla para piernas y respaldo ajustables",
      "Movimiento controlado para proteger la articulación de la rodilla"
    ],
    specifications: {
      modelo: "LD-2001",
      dimensiones: "1550 x 1900 x 1200 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "152 kg",
      "peso bruto (W.G.)": "192 kg",
      "músculo trabajado": "Cuádriceps",
    }
  },
  {
    id: 71,
    name: "LD-2002 Kneeling Leg Curl",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas"],
    image: "/ld/LD-2002 Kneeling Leg Curl.png",
    alt: "LD-2002 Kneeling Leg Curl",
     "description": [
      "LD-2002 Kneeling Leg Curl. Esta máquina de curl de piernas de rodillas permite a los usuarios aislar una pierna de forma óptima gracias a una almohadilla que se desliza de izquierda a derecha.",
      "Está bien acolchada con rodilleras, protectores para muslos, coderas y espinilleras. Las asas en la parte superior ofrecen soporte durante el movimiento.",
      "Se cargan discos de pesaje a ambos lados de la máquina y cuenta con espacio de almacenamiento adicional."
    ],
    features: [
      "Máquina de curl femoral de rodillas",
      "Trabaja una pierna a la vez para un enfoque máximo",
      "Permite una mayor contracción del isquiotibial",
      "Almohadillas de apoyo para pecho y rodilla"
    ],
    specifications: {
      modelo: "LD-2002",
      dimensiones: "1200 x 1650 x 1350 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "141 kg",
      "peso bruto (W.G.)": "181 kg",
      "músculo trabajado": "Isquiotibiales",
    }
  },
  {
    id: 72,
    name: "LD-2003 Super Squat",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/ld/LD-2003 Super Squat.png",
    alt: "LD-2003 Super Squat",
     "description": [
      "LD-2003 Super Squat. Esta robusta máquina de sentadillas permite realizar movimientos tanto de sentadilla en V como de sentadilla hack. El ángulo de la plataforma es ajustable para diferentes variaciones.",
      "Está bien acolchada para mayor comodidad con cargas pesadas y cuenta con rieles de seguridad que se controlan con palancas para sostener el peso al comenzar y finalizar el ejercicio. Cuenta con asas junto a las hombreras para mayor agarre durante el ejercicio.",
      "Se pueden cargar discos de pesas a ambos lados de la máquina, con espacio adicional para guardarlos."
    ],
    features: [
      "Máquina que simula el movimiento de una sentadilla",
      "El arco de movimiento reduce la tensión en la espalda baja",
      "Plataforma amplia para los pies",
      "Hombreras acolchadas para mayor comodidad"
    ],
    specifications: {
      modelo: "LD-2003",
      dimensiones: "1905 x 1520 x 1610 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "205 kg",
      "peso bruto (W.G.)": "245 kg",
      "músculo trabajado": "Cuádriceps, glúteos",
    }
  },
  {
    id: 73,
    name: "LD-2004 Belt Squat",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/ld/LD-2004 Belt Squat.png",
    alt: "LD-2004 Belt Squat",
    description: [
      "LD-2004 Belt Squat. Esta máquina de Belt Squat es muy robusta y duradera, capaz de soportar cargas muy pesadas con un uso frecuente. El ángulo de la plataforma se ajusta mediante una palanca inferior.",
      "Incluye una palanca de seguridad para soportar el peso antes y después del ejercicio, además de varias asas a diferentes alturas para brindar apoyo durante el movimiento.",
      "Se carga con discos a ambos lados de la máquina y cuenta con amplio espacio para guardar discos adicionales."
    ],
    features: [
      "Máquina de sentadilla con cinturón",
      "Carga el peso directamente en las caderas, eliminando la compresión espinal",
      "Ideal para personas con problemas de espalda",
      "Plataforma elevada y agarres de soporte"
    ],
    specifications: {
      modelo: "LD-2004",
      dimensiones: "1580 x 1650 x 1680 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "240 kg",
      "peso bruto (W.G.)": "280 kg",
      "músculo trabajado": "Cuádriceps, glúteos, aductores",
    }
  },
  {
    id: 74,
    name: "LD-2005 Buttocks Bridge",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Glúteos"],
    image: "/ld/LD-2005 Buttocks Bridge.png",
    alt: "LD-2005 Buttocks Bridge",
    description: [
      "LD-2005 Buttocks Bridge. Esta robusta máquina de puente de glúteos permite trabajar con cargas elevadas con la máxima comodidad y seguridad.",
      "Su asiento es ajustable para el rango de movimiento deseado. En lugar de usar una barra o almohadilla tradicional para levantar el peso, los usuarios se colocan un cinturón de seguridad en las caderas para mayor comodidad.",
      "Su amplio reposapiés está inclinado para una mejor trayectoria de movimiento y el respaldo acolchado mantiene a los usuarios cómodos incluso con cargas extremas y los discos de pesas se cargan a ambos lados de la máquina. "
    ],
    features: [
      "Máquina para puente de glúteos (Hip Thrust)",
      "Aísla y desarrolla los glúteos de forma segura y efectiva",
      "Cinturón acolchado para mayor comodidad sobre la cadera",
      "Plataforma para pies y respaldo para un soporte óptimo"
    ],
    specifications: {
      modelo: "LD-2005",
      dimensiones: "1635 x 1800 x 800 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "186 kg",
      "peso bruto (W.G.)": "226 kg",
      "músculo trabajado": "Glúteos, isquiotibiales",
    }
  },
  {
    id: 75,
    name: "LD-2006 Pendulum Squat",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/ld/LD-2006 Pendulum Squat.png",
    alt: "LD-2006 Pendulum Squat",
    description: [
      "LD-2006 Pendulum Squat. Esta robusta máquina de sentadilla de péndulo es una máquina popular, ideal para cualquier gimnasio serio.",
      "El respaldo y las hombreras bien acolchados ofrecen comodidad incluso con cargas elevadas. Bajo la plataforma para pies hay un tope de goma que protege al usuario si se alcanza el fallo muscular en la parte inferior. ",
      "El peso se carga con discos en el lateral del respaldo y la máquina incluye amplio espacio de almacenamiento adicional para discos de pesas."
    ],
    features: [
      "Máquina de sentadilla pendular",
      "Movimiento en arco que mantiene la tensión constante en los cuádriceps",
      "Reduce la tensión en rodillas y espalda",
      "Plataforma en ángulo y respaldo acolchado"
    ],
    specifications: {
      modelo: "LD-2006",
      dimensiones: "2003 x 890 x 1835 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "223 kg",
      "peso bruto (W.G.)": "263 kg",
      "músculo trabajado": "Cuádriceps, glúteos",
    }
  },
  {
    id: 76,
    name: "LD-2007 Glute Machine",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Glúteos"],
    image: "/ld/LD-2007 Glute Machine.png",
    alt: "LD-2007 Glute Machine",
    description: [
      "LD-2007 Glute Machine. Esta máquina de glúteos con rodillas incluye una almohadilla pectoral ajustable a la altura del usuario. Está bien acolchada y cuenta con asas delanteras para mayor apoyo durante el movimiento.",
      "La carga de los discos de pesas se realiza en el lateral de la máquina.",
    ],
    features: [
      "Máquina para patada de glúteo (Glute Kickback)",
      "Aísla el glúteo mayor",
      "Movimiento de extensión de cadera contra resistencia",
      "Apoyos para el torso y antebrazos"
    ],
    specifications: {
      modelo: "LD-2007",
      dimensiones: "2022 x 1549 x 1101 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "146 kg",
      "peso bruto (W.G.)": "186 kg",
      "músculo trabajado": "Glúteo mayor",
    }
  },
  {
    id: 77,
    name: "LD-2008 Glute Machine",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Glúteos"],
    image: "/ld/LD-2008 Glute Machine.png",
    alt: "LD-2008 Glute Machine",
    description: [
      "LD-2008 Glute Machine. Esta robusta máquina de glúteos con contragolpe está completamente acolchada. Incluye asas para mayor apoyo durante el ejercicio y un reposapiés que gira suavemente para un movimiento más natural.",
      "El disco de pesas se carga en el lateral de la máquina.",
    ],
    features: [
      "Máquina de abducción de cadera de pie",
      "Enfocada en el trabajo del glúteo medio",
      "Plataforma de apoyo y almohadilla móvil para la pierna",
      "Permite un gran rango de movimiento"
    ],
    specifications: {
      modelo: "LD-2008",
      dimensiones: "1330 x 1120 x 1580 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "145 kg",
      "peso bruto (W.G.)": "185 kg",
      "músculo trabajado": "Glúteo medio y menor",
    }
  },
  {
    id: 78,
    name: "LD-2009 Abductor",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Cadera", "Glúteos"],
    image: "/ld/LD-2009 Abductor.png",
    alt: "LD-2009 Abductor",
    description: [
      "LD-2009 Abductor. Esta robusta máquina de abducción de cadera es muy duradera y robusta. Cuenta con palancas para ajustar la posición inicial y final del ejercicio, asas a ambos lados del asiento y pedales para mayor apoyo durante el movimiento.",
      "Se carga con discos en la parte trasera y cuenta con un ligero espacio de almacenamiento para discos.",
    ],
    features: [
      "Máquina de abductores sentado",
      "Fortalece la parte externa de los muslos y caderas",
      "Almohadillas en la parte exterior de las rodillas",
      "Ayuda a mejorar la estabilidad de la cadera"
    ],
    specifications: {
      modelo: "LD-2009",
      dimensiones: "1865 x 1052 x 1589 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "145 kg",
      "peso bruto (W.G.)": "185 kg",
      "músculo trabajado": "Glúteo medio, glúteo menor, tensor de la fascia lata",
    }
  },
  {
    id: 79,
    name: "LD-2010- Adductor",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Cadera", "Piernas"],
    image: "/ld/LD-2010- Adductor.png",
    alt: "LD-2010- Adductor",
    description: [
      "LD-2010- Adductor. Esta robusta máquina de aducción de cadera entrena la parte interna de los muslos con intensidad. Cuenta con palancas para ajustar la posición inicial y final del ejercicio, asas a ambos lados del asiento y pedales para mayor apoyo durante el movimiento.",
      "Se carga con discos en la parte trasera y cuenta con un ligero espacio de almacenamiento para discos.",
    ],
    features: [
      "Máquina de aductores sentado",
      "Fortalece la parte interna de los muslos",
      "Almohadillas en la parte interior de las rodillas",
      "Rango de movimiento ajustable"
    ],
    specifications: {
      modelo: "LD-2010",
      dimensiones: "1865 x 1052 x 1589 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "145 kg",
      "peso bruto (W.G.)": "185 kg",
      "músculo trabajado": "Aductores",
    }
  },
  {
    id: 80,
    name: "LD-2011 3 in 1 Leg Press",
    primaryCategory: "LD",
    status: "in-stock",
    subCategories: ["Piernas", "Glúteos"],
    image: "/ld/LD-2011 3 in 1 Leg Press.png",
    alt: "LD-2011 3 in 1 Leg Press",
    description: [
      "LD-2011 3 in 1 Leg Press. Esta prensa de piernas LD premium es única. Está diseñada con una trayectoria de movimiento que sigue una biomecánica óptima.",
      "Esta prensa de piernas con pesas de disco soporta pesos extremos y proporciona un movimiento suave. Incluye cierres de seguridad, una plataforma ancha y angulada para los pies, asas de apoyo y espacio para guardar pesas.",
    ],
    features: [
      "Máquina multifuncional: Prensa de piernas, Hack Squat y Elevación de pantorrillas",
      "Ahorra espacio al combinar tres máquinas en una",
      "Transición sencilla entre los diferentes ejercicios",
      "Plataforma y respaldos ajustables"
    ],
    specifications: {
      modelo: "LD-2011",
      dimensiones: "2653 x 1600 x 560 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "500 kg",
      "peso bruto (W.G.)": "540 kg",
      "músculo trabajado": "Cuádriceps, glúteos, isquiotibiales, pantorrillas",
    }
  },

  //Equipos M3

  {
    "id": 81,
    "name": "M3-1001 Chest Press",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/m3/M3-1001 Chest Press.png",
    "alt": "M3-1001 Chest Press",
    description: [
      "M3-1001 Chest Press. Esta máquina de prensa de pecho cuenta con un asiento ajustable, palancas para ajustar las asas de presión para una posición de inicio y fin segura, y una columna de pesas con pasador para facilitar su uso.",
      "Esta máquina de la serie M3 tiene un diseño elegante y moderno. El proceso de pintura consiste en una capa inferior de zinc pulverizado, una capa intermedia de metal pulverizado y una línea final de polvo transparente. El acabado de alta calidad de la serie M3 destaca en cualquier gimnasio.",
    ],
    "features": [
      "Movimiento convergente para una contracción natural",
      "Asiento con ajuste de altura asistido por gas",
      "Agarres ergonómicos para reducir la tensión",
      "Pila de pesas completamente cubierta para seguridad"
    ],
    "specifications": {
      modelo: "M3-1001",
      dimensiones: "1300 x 1476 x 1518 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "182 kg",
      "peso bruto (W.G.)": "222 kg",
      "músculo trabajado": "Pectoral, Deltoides Anterior, Tríceps",

    }
  },
  {
    "id": 82,
    "name": "M3-1002 Lateral Rise",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/m3/M3-1002 Lateral Rise.png",
    "alt": "M3-1002 Lateral Rise",
    "description": [
      "M3-1002 Lateral Rise. Esta máquina incluye un asiento ajustable según la altura del usuario y brazos ajustables para modificar la posición inicial del ejercicio. También incluye una columna de pesas con pasadores y una excelente amortiguación.",
      "Esta máquina de la serie M3 presenta un diseño elegante y moderno. El proceso de pintura consiste en una capa inferior de zinc pulverizado, una capa intermedia de metal pulverizado y una línea final de polvo transparente. El acabado de alta calidad de la serie M3 destaca en cualquier gimnasio.",
    ],
    "features": [
      "Máquina para elevaciones laterales",
      "Aísla la cabeza medial del deltoides",
      "Brazos independientes para trabajo unilateral",
      "Almohadillas acolchadas para un apoyo cómodo del brazo"
    ],
    "specifications": {
      "modelo": "M3-1002",
      "dimensiones": "1171 x 1137 x 1518 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "152 kg",
      "peso bruto (W.G.)": "192 kg",
      "músculo trabajado": "Deltoides Medial"
    }
  },
  {
    "id": 83,
    "name": "M3-1003 Hip Abductor",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Cadera", "Glúteos"],
    "image": "/m3/M3-1003 Hip Abductor.png",
    "alt": "M3-1003 Hip Abductor",
    "description": [
      "M3-1003 Hip Abductor. Esta máquina de abducción de cadera incluye rodilleras ajustables que permiten al usuario cambiar la posición inicial, además de pedales para mayor soporte. El peso se ajusta mediante un conjunto de discos con pasadores.",
      "Esta máquina de la serie M3 presenta un diseño elegante y moderno. El proceso de pintura consiste en una capa inferior de zinc pulverizado, una capa intermedia de metal pulverizado y una línea final de pintura en polvo transparente. El acabado de alta calidad de la serie M3 destaca en cualquier gimnasio.",
    ],
    "features": [
      "Fortalece los músculos externos de la cadera y los glúteos",
      "Posición sentada para mayor estabilidad",
      "Almohadillas acolchadas para las piernas",
      "Rango de movimiento ajustable"
    ],
    "specifications": {
      "modelo": "M3-1003",
      "dimensiones": "992 x 1353 x 1518 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Glúteo Medio, Glúteo Menor"
    }
  },
  {
    "id": 84,
    "name": "M3-1004 Hip Adductor",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Cadera", "Piernas"],
    "image": "/m3/M3-1004 Hip Adductor.png",
    "alt": "M3-1004 Hip Adductor",
    "description": [
      "M3-1004 Hip Adductor. Esta máquina de aducción de cadera incluye rodilleras ajustables que permiten al usuario cambiar la posición inicial para mejorar su movilidad y flexibilidad. Cuenta con pedales para mayor soporte. El peso se ajusta mediante un conjunto de discos con pasadores.",
      "Esta máquina de la serie M3 presenta un diseño elegante y moderno. El proceso de pintura consiste en una capa inferior de zinc pulverizado, una capa intermedia de metal pulverizado y una línea final de pintura en polvo transparente. El acabado de alta calidad de la serie M3 destaca en cualquier gimnasio.",
    ],
    "features": [
      "Fortalece los músculos internos del muslo",
      "Posición sentada cómoda y ergonómica",
      "Rango de movimiento inicial ajustable",
      "Pila de pesas para una fácil selección de la carga"
    ],
    "specifications": {
      "modelo": "M3-1004",
      "dimensiones": "1146 x 1340 x 1518 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Aductores"
    }
  },
  {
    "id": 85,
    "name": "M3-1005 Leg Extension",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m3/M3-1005 Leg Extension.png",
    "alt": "M3-1005 Leg Extension",
    "description": [
      "M3-1005 Leg Extension. Esta extensión de piernas cuenta con varias funciones ajustables; el asiento y la espinillera se pueden ajustar a la altura del usuario.",
      "La palanca a la derecha del asiento, en la articulación de la rodilla, ajusta la posición inicial y final del ejercicio, además de permitir al usuario levantarse cómodamente después del ejercicio.",
      "Esta máquina de la serie M3 tiene un diseño elegante y moderno. El proceso de pintura consiste en una capa inferior de zinc pulverizado, una capa intermedia de metal pulverizado y una línea final de pintura en polvo transparente. El acabado de alta calidad de la serie M3 destaca en cualquier gimnasio."
    ],
    "features": [
      "Aísla y define los cuádriceps",
      "Almohadilla de rodillo y respaldo ajustables",
      "Punto de pivote alineado con la articulación de la rodilla",
      "Movimiento suave y controlado"
    ],
    "specifications": {
      "modelo": "M3-1005",
      "dimensiones": "1073 x 1587 x 1618 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Cuádriceps"
    }
  },
  {
    "id": 86,
    "name": "M3-1006 Prone Leg Curl",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m3/M3-1006 Prone Leg Curl.png",
    "alt": "M3-1006 Prone Leg Curl",
    "description": [
      "M3-1006 Prone Leg Curl. Esta máquina de curl de isquiotibiales tumbado es robusta, está bien acolchada y ofrece un movimiento suave.",
      "La máquina se ajusta mediante una palanca en la articulación de la rodilla para ajustar la posición inicial y otra para ajustar la almohadilla del tobillo según las preferencias del usuario. Cuenta con asas en la parte delantera para mayor agarre y apoyo durante el movimiento.",
      "El peso se ajusta fácilmente mediante la pila de pesas con pasador."
    ],
    "features": [
      "Máquina de curl femoral tumbado (boca abajo)",
      "Aísla los isquiotibiales de manera efectiva",
      "Almohadillas en ángulo para reducir la tensión lumbar",
      "Ajuste de la almohadilla del rodillo para diferentes longitudes de pierna"
    ],
    "specifications": {
      "modelo": "M3-1006",
      "dimensiones": "1043 x 1500 x 1518 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "130 kg",
      "peso bruto (W.G.)": "170 kg",
      "músculo trabajado": "Isquiotibiales"
    }
  },
  {
    "id": 87,
    "name": "M3-1007 Shoulder Press",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/m3/M3-1007 Shoulder Press.png",
    "alt": "M3-1007 Shoulder Press",
    "description": [
      "M3-1007 Shoulder Press. El asiento de esta máquina de prensa de hombros se ajusta a la altura del usuario. Cuenta con asas en ángulo que permiten realizar press con agarre neutro y prono.",
      "Está bien acolchada, es duradera y ofrece un movimiento suave. Su peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Desarrolla la fuerza y el tamaño de los hombros",
      "Movimiento convergente para una trayectoria de movimiento natural",
      "Asiento y respaldo ajustables",
      "Agarres múltiples para diferentes anchos"
    ],
    "specifications": {
      "modelo": "M3-1007",
      "dimensiones": "1444 x 1666 x 1518 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "168 kg",
      "peso bruto (W.G.)": "208 kg",
      "músculo trabajado": "Deltoides, Tríceps"
    }
  },
  {
    "id": 88,
    "name": "M3-1008 Abdominal Crunch",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Abdominales"],
    "image": "/m3/M3-1008 Abdominal Crunch.png",
    "alt": "M3-1008 Abdominal Crunch",
    "description": [
      "M3-1008 Abdominal Crunch. Esta máquina cuenta con asiento ajustable para diferentes alturas. El peso se ajusta mediante una columna de pesas con pasador.",
      "Incluye pedales, coderas y asas para facilitar la ejecución del ejercicio.",
    ],
    "features": [
      "Máquina para encogimientos abdominales",
      "Aísla los músculos abdominales de forma segura",
      "Almohadillas para hombros y respaldo ergonómicos",
      "Movimiento de crunch biomecánicamente correcto"
    ],
    "specifications": {
      "modelo": "M3-1008",
      "dimensiones": "1058 x 1280 x 1518 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "142 kg",
      "peso bruto (W.G.)": "182 kg",
      "músculo trabajado": "Recto Abdominal"
    }
  },
  {
    "id": 89,
    "name": "M3-1009 Seated Leg Press",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/m3/M3-1009 Seated Leg Press.png",
    "alt": "M3-1009 Seated Leg Press",
    "description": [
      "M3-1009 Seated Leg Press. Esta prensa de piernas horizontal cuenta con un reposapiés fijo, y la resistencia empuja el asiento hacia atrás.",
      "Esta máquina cuenta con palancas para controlar la profundidad del asiento, lo que facilita su ajuste a la movilidad del usuario y aumenta la seguridad al usar y salir de la máquina.",
      "El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Prensa de piernas sentado con movimiento horizontal",
      "Fortalece cuádriceps, isquiotibiales y glúteos",
      "Plataforma para pies amplia y antideslizante",
      "Respaldo ajustable para diferentes rangos de movimiento"
    ],
    "specifications": {
      "modelo": "M3-1009",
      "dimensiones": "995 x 1942 x 1718 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "256 kg",
      "peso bruto (W.G.)": "296 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales"
    }
  },
  {
    "id": 90,
    "name": "M3-1010 Biceps Curl",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Bíceps"],
    "image": "/m3/M3-1010 Biceps Curl.png",
    "alt": "M3-1010 Biceps Curl",
    "description": [
      "M3-1010 Biceps Curl. Esta máquina de curl de bíceps se ajusta mediante dos palancas: una debajo del asiento para ajustar la altura del usuario y otra en el brazo para ajustar la posición inicial.",
      "Las manijas giran naturalmente, lo que permite un movimiento más natural. Ambos lados del asiento cuentan con acolchado para los brazos para mantener una postura correcta, mientras que el respaldo está ligeramente inclinado para permitir la extensión completa de los brazos.",
      "El peso se ajusta mediante una pila de pesas con pasador."
    ],
    "features": [
      "Máquina de curl de bíceps sentado",
      "Aísla el bíceps para un desarrollo máximo",
      "Brazos articulados para un movimiento natural",
      "Asiento y almohadilla de apoyo ajustables"
    ],
    "specifications": {
      "modelo": "M3-1010",
      "dimensiones": "1371 x 1208 x 1518 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "132 kg",
      "peso bruto (W.G.)": "172 kg",
      "músculo trabajado": "Bíceps"
    }
  },
  {
    "id": 91,
    "name": "M3-1011 Triceps Extension",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Tríceps"],
    "image": "/m3/M3-1011 Triceps Extension.png",
    "alt": "M3-1011 Triceps Extension",
    "description": [
      "M3-1011 Triceps Extension. Esta máquina de extensión de tríceps incluye una palanca debajo del asiento para ajustarla a la altura del usuario.",
      "Cuenta con asas que giran para adaptarse a la trayectoria de movimiento. Su peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Máquina de extensiones de tríceps sentado",
      "Trabaja las tres cabezas del tríceps",
      "Almohadillas para brazos y respaldo para una postura correcta",
      "Movimiento suave para proteger la articulación del codo"
    ],
    "specifications": {
      "modelo": "M3-1011",
      "dimensiones": "1682 x 1157 x 1518 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "132 kg",
      "peso bruto (W.G.)": "172 kg",
      "músculo trabajado": "Tríceps"
    }
  },
  {
    "id": 92,
    "name": "M3-1012 Pectoral Machine",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/m3/M3-1012 Pectoral Machine.png",
    "alt": "M3-1012 Pectoral Machine",
    "description": [
      "M3-1012 Pectoral Machine. Esta máquina Pec Fly incluye dos juegos de palancas de ajuste: una debajo del asiento para la altura del usuario y otra en la base de los brazos para ajustar la posición inicial.",
      "Las manijas de esta máquina giran durante el movimiento, lo que permite un movimiento más natural. El peso se ajusta mediante una pila de pesas con pasador.",
    ],
    "features": [
      "Máquina de contractor de pecho (Pec Deck)",
      "Aísla el pectoral para definición muscular",
      "Brazos pivotantes que se adaptan a la longitud del brazo del usuario",
      "Rango de movimiento ajustable"
    ],
    "specifications": {
      "modelo": "M3-1012",
      "dimensiones": "1090 x 1958 x 1518 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "130 kg",
      "peso bruto (W.G.)": "170 kg",
      "músculo trabajado": "Pectoral"
    }
  },
  {
    "id": 93,
    "name": "M3-1013 Lat Pulldown",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/m3/M3-1013 Lat Pulldown.png",
    "alt": "M3-1013 Lat Pulldown",
    "description": [
      "M3-1013 Lat Pulldown. Esta máquina de polea dorsal incluye un asiento y rodilleras ajustables en altura para adaptarse a las preferencias del usuario. También incluye una pila de pesas con pasadores.",
      "Los brazos de esta máquina se mueven juntos siguiendo una trayectoria natural.",
    ],
    "features": [
      "Máquina de jalón al pecho para espalda",
      "Desarrolla la amplitud (forma de V) de la espalda",
      "Rodillos de sujeción para piernas ajustables",
      "Polea alta para un recorrido completo del movimiento"
    ],
    "specifications": {
      "modelo": "M3-1013",
      "dimensiones": "1090 x 1958 x 1882 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "165 kg",
      "peso bruto (W.G.)": "205 kg",
      "músculo trabajado": "Dorsal Ancho, Bíceps"
    }
  },
  {
    "id": 94,
    "name": "M3-1014 Multi Hip",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Cadera", "Glúteos", "Piernas"],
    "image": "/m3/M3-1014 Multi Hip.png",
    "alt": "M3-1014 Multi Hip",
    "description": [
      "M3-1014 Multi Hip. Esta máquina es robusta y muy funcional, con opciones para entrenar glúteos y flexores de cadera desde múltiples ángulos.",
      "Cuenta con varias funciones ajustables, incluyendo una palanca en el centro para ajustar la posición inicial del ejercicio, una palanca para ajustar la altura de la rodillera según las preferencias del usuario y palancas en las asas de apoyo para ajustar la altura.",
      "El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Máquina multifuncional para la cadera",
      "Permite realizar flexión, extensión, abducción y aducción de cadera",
      "Plataforma y rodillo de altura ajustable",
      "Ideal para la rehabilitación y el fortalecimiento general de la cadera"
    ],
    "specifications": {
      "modelo": "M3-1014",
      "dimensiones": "1165 x 1113 x 1618 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "215 kg",
      "peso bruto (W.G.)": "255 kg",
      "músculo trabajado": "Flexores/extensores de cadera, Aductores, Abductores, Glúteos"
    }
  },
  {
    "id": 95,
    "name": "M3-1015 Rower Delt",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Espalda", "Hombros"],
    "image": "/m3/M3-1015 Rower Delt.png",
    "alt": "M3-1015 Rower Delt",
    "description": [
      "M3-1015 Rower Delt. Esta robusta máquina de remo sentado incluye un asiento y una almohadilla para el pecho ajustables a la altura del usuario.",
      "Está bien acolchada, ofrece un movimiento suave y cuenta con asas móviles que permiten un movimiento más natural. Su peso es ajustable mediante una columna de pesas con pasadores.",
    ],
    "features": [
      "Máquina de remo con enfoque en deltoides posterior",
      "Agarres múltiples para variar el ejercicio",
      "Apoyo pectoral para aislar los músculos objetivo",
      "Fortalece la parte superior de la espalda y la parte trasera de los hombros"
    ],
    "specifications": {
      "modelo": "M3-1015",
      "dimensiones": "875 x 1479 x 1518 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "138 kg",
      "peso bruto (W.G.)": "178 kg",
      "músculo trabajado": "Deltoides Posterior, Romboides, Trapecio"
    }
  },
  {
    "id": 96,
    "name": "M3-1015A Rower Delt",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Espalda", "Hombros"],
    "image": "/m3/M3-1015A Rower Delt.png",
    "alt": "M3-1015A Rower Delt",
    "description": [
      "M3-1015A Rower Delt. Esta robusta máquina de remo sentado incluye un asiento y una almohadilla pectoral ajustables a la altura del usuario.",
      "Está bien acolchada, ofrece un movimiento suave y cuenta con asas en ángulo ideales para remar con agarre supino. Su peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Versión alternativa de la máquina de remo para deltoides",
      "Diseño ergonómico mejorado",
      "Brazos de movimiento independientes",
      "Ajustes intuitivos para una rápida configuración"
    ],
    "specifications": {
      "modelo": "M3-1015A",
      "dimensiones": "788 x 1458 x 1852 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "147 kg",
      "peso bruto (W.G.)": "187 kg",
      "músculo trabajado": "Deltoides Posterior, Romboides, Trapecio"
    }
  },
  {
    "id": 97,
    "name": "M3-1016 Back Extension",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Espalda", "Glúteos"],
    "image": "/m3/M3-1016 Back Extension.png",
    "alt": "M3-1016 Back Extension",
    "description": [
      "M3-1016 Back Extension. Una palanca ajustable permite ajustar la almohadilla de extensión según las preferencias del usuario. La máquina está bien acolchada para mayor comodidad e incluye asas y pedales para mayor estabilidad. El peso se ajusta mediante una pila de pesas con pasador.",
    ],
    "features": [
      "Máquina para extensiones de espalda baja",
      "Fortalece los músculos erectores de la columna",
      "Almohadilla lumbar ajustable para un soporte preciso",
      "Movimiento seguro y controlado"
    ],
    "specifications": {
      "modelo": "M3-1016",
      "dimensiones": "945 x 1338 x 1518 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "142 kg",
      "peso bruto (W.G.)": "182 kg",
      "músculo trabajado": "Erectores Espinales, Glúteos, Isquiotibiales"
    }
  },
  {
    "id": 98,
    "name": "M3-1017 Rear Delt and Pec Fly",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Hombros", "Pecho"],
    "image": "/m3/M3-1017 Rear Delt and Pec Fly.png",
    "alt": "M3-1017 Rear Delt and Pec Fly",
    "description": [
      "M3-1017 Rear Delt and Pec Fly. Esta máquina de doble función permite entrenar tanto los pectorales como los deltoides posteriores.",
      "Se ajusta mediante dos juegos de palancas: una debajo del asiento para ajustar la altura del usuario y otra en cada brazo de la máquina para ajustar la posición inicial del ejercicio seleccionado.",
      "El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Máquina dual para deltoides posterior (pájaros) y pectoral (contractor)",
      "Ahorra espacio al combinar dos ejercicios en uno",
      "Transición fácil entre ejercicios con un simple ajuste",
      "Brazos pivotantes para adaptarse a diferentes usuarios"
    ],
    "specifications": {
      "modelo": "M3-1017",
      "dimensiones": "1380 x 1227 x 1868 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "170 kg",
      "peso bruto (W.G.)": "210 kg",
      "músculo trabajado": "Deltoides Posterior, Pectoral"
    }
  },
  {
    "id": 99,
    "name": "M3-1018 Seated Leg Curl",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m3/M3-1018 Seated Leg Curl.png",
    "alt": "M3-1018 Seated Leg Curl",
    "description": [
      "M3-1018 Seated Leg Curl. Esta máquina de curl de piernas sentado cuenta con varias funciones ajustables: el asiento, la almohadilla para los muslos y la almohadilla para los tobillos se pueden ajustar a la altura del usuario.",
      "Una palanca adicional en la articulación de la rodilla permite ajustar la posición inicial y final del ejercicio.",
      "El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Máquina de curl femoral sentado",
      "Aísla los isquiotibiales en una posición cómoda",
      "Respaldo ajustable para alinear la rodilla con el eje de pivote",
      "Almohadillas de sujeción para muslos y rodillos para tobillos"
    ],
    "specifications": {
      "modelo": "M3-1018",
      "dimensiones": "1073 x 1067 x 1618 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "170 kg",
      "peso bruto (W.G.)": "210 kg",
      "músculo trabajado": "Isquiotibiales"
    }
  },
  {
    "id": 100,
    "name": "M3-1019 Standing Calf",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m3/M3-1019 Standing Calf.png",
    "alt": "M3-1019 Standing Calf",
    "description": [
      "M3-1019 Standing Calf. Esta máquina de elevación de pantorrillas de pie cuenta con una palanca bajo las hombreras para ajustar la altura del usuario.",
      "Es una máquina duradera y robusta con reposapiés bien sujetos. El peso se ajusta mediante una pila de discos con pasador.",
    ],
    "features": [
      "Máquina para elevación de talones de pie",
      "Desarrolla los músculos gastrocnemios (gemelos)",
      "Almohadillas para hombros acolchadas y ajustables en altura",
      "Plataforma antideslizante para los pies"
    ],
    "specifications": {
      "modelo": "M3-1019",
      "dimensiones": "992 x 1102 x 1633 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "123 kg",
      "peso bruto (W.G.)": "163 kg",
      "músculo trabajado": "Gastrocnemios (Gemelos)"
    }
  },
  {
    "id": 101,
    "name": "M3-1020 Chin Dip Assist",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Espalda", "Pecho", "Tríceps", "Bíceps"],
    "image": "/m3/M3-1020 Chin Dip Assist.png",
    "alt": "M3-1020 Chin Dip Assist",
    "description": [
      "M3-1020 Chin Dip Assist. Esta máquina incluye un asiento ajustable, pedales para subir y bajar de la plataforma con seguridad y una columna de pesas con pasador para ajustar la asistencia de la máquina al usuario. Sus asas también giran para un agarre más amplio o más estrecho.",
    ],
    "features": [
      "Máquina de dominadas y fondos asistidos",
      "Plataforma de contrapeso para ayudar al usuario a levantar su propio peso",
      "Permite la progresión a medida que se gana fuerza",
      "Agarres múltiples para dominadas (ancho, estrecho, neutro)"
    ],
    "specifications": {
      "modelo": "M3-1020",
      "dimensiones": "992 x 1921 x 2340 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "245 kg",
      "peso bruto (W.G.)": "285 kg",
      "músculo trabajado": "Dorsales, Bíceps, Pectoral, Tríceps"
    }
  },
  {
    "id": 102,
    "name": "M3-1021 Rotary Torso",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Abdominales"],
    "image": "/m3/M3-1021 Rotary Torso.png",
    "alt": "M3-1021 Rotary Torso",
    "description": [
      "M3-1021 Rotary Torso. Esta máquina de rotación de core cuenta con una palanca ajustable bajo el asiento para ajustar el ángulo inicial.",
      "Cuenta con pedales y asas para mayor apoyo durante el ejercicio e incluye una columna de pesas con pasadores.",
    ],
    "features": [
      "Máquina para rotación de torso",
      "Fortalece los músculos oblicuos",
      "Posición sentada con almohadillas para rodillas para fijar la parte inferior del cuerpo",
      "Rango de movimiento ajustable para seguridad"
    ],
    "specifications": {
      "modelo": "M3-1021",
      "dimensiones": "759 x 1163 x 1618 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "137 kg",
      "peso bruto (W.G.)": "177 kg",
      "músculo trabajado": "Oblicuos Internos y Externos"
    }
  },
  {
    "id": 103,
    "name": "M3-1022 Glute Machine",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Glúteos"],
    "image": "/m3/M3-1022 Glute Machine.png",
    "alt": "M3-1022 Glute Machine",
    "description": [
      "M3-1022 Glute Machine. Esta máquina para glúteos permite realizar patadas de pie. Incluye una almohadilla para el pecho y asas de apoyo, una columna de pesas con pasadores y una plataforma para los pies con rotación suave para un movimiento más natural.",
    ],
    "features": [
      "Máquina de patada de glúteo (Glute Kickback)",
      "Aísla y tonifica los músculos de los glúteos",
      "Apoyo para el pecho y antebrazos para una postura estable",
      "Movimiento de extensión de cadera contra resistencia"
    ],
    "specifications": {
      "modelo": "M3-1022",
      "dimensiones": "1108 x 1117 x 1518 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "148 kg",
      "peso bruto (W.G.)": "182 kg",
      "músculo trabajado": "Glúteo Mayor"
    }
  },
  {
    "id": 104,
    "name": "M3-1023 Glute Machine",
    "primaryCategory": "M3",
    status: "in-stock",
    "subCategories": ["Glúteos"],
    "image": "/m3/M3-1023 Glute Machine.png",
    "alt": "M3-1023 Glute Machine",
    "description": [
      "M3-1023 Glute Machine. Esta máquina para glúteos permite realizar patadas de rodillas. Incluye rodilleras, coderas y asas de apoyo, una almohadilla pectoral de altura ajustable y una columna de pesas con pasadores.",
    ],
    "features": [
      "Diseño alternativo para el entrenamiento de glúteos",
      "Puede enfocarse en diferentes ángulos del glúteo",
      "Plataforma de pie antideslizante",
      "Ajustes para adaptarse a diferentes estaturas de usuario"
    ],
    "specifications": {
      "modelo": "M3-1023",
      "dimensiones": "2011 x 1101 x 1618 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "220 kg",
      "peso bruto (W.G.)": "260 kg",
      "músculo trabajado": "Glúteo Mayor y Medio"
    }
  },

  //Equipos M7
  {
    "id": 105,
    "name": "M7-1001 Chest Press",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/m7/M7-1001 Chest Press.png",
    "alt": "M7-1001 Chest Press",
    "description": [
      "M7-1001 Chest Press. Esta máquina de press de pecho tiene un diseño ergonómico y fácil de usar. El respaldo está ligeramente inclinado para una mejor trayectoria de movimiento, y un gatillo en el mango permite al usuario ajustar la posición inicial según su movilidad.",
      "Cuenta con un asiento ajustable a la altura del usuario y un acolchado completo. El peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Movimiento isolateral para un desarrollo de fuerza equilibrado",
      "Trayectoria de movimiento convergente",
      "Asiento ajustable para una alineación precisa",
      "Agarres ergonómicos para comodidad y variedad"
    ],
    "specifications": {
      "modelo": "M7-1001",
      "dimensiones": "1621 x 1506 x 1801 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Pectoral, Deltoides Anterior, Tríceps"
    }
  },
  {
    "id": 106,
    "name": "M7-1002 Seated Lateral Rise",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/m7/M7-1002 Seated Lateral Rise.png",
    "alt": "M7-1002 Seated Lateral Rise",
    "description": [
      "M7-1002 Seated Lateral Rise. El asiento de esta máquina de prensa de hombros se ajusta a la altura del usuario. Cuenta con asas en ángulo que permiten realizar press con agarre neutral y prono.",
      "Está bien acolchada, es duradera y ofrece un movimiento suave. Su peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Diseñada para aislar la cabeza medial del deltoides",
      "Brazos independientes para un movimiento unilateral",
      "Posición sentada que elimina el impulso",
      "Almohadillas acolchadas para un apoyo cómodo"
    ],
    "specifications": {
      "modelo": "M7-1002",
      "dimensiones": "1318 x 1112 x 1450 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "182 kg",
      "peso bruto (W.G.)": "222 kg",
      "músculo trabajado": "Deltoides Medial"
    }
  },
  {
    "id": 107,
    "name": "M7-1003 Shoulder Press",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/m7/M7-1003 Shoulder Press.png",
    "alt": "M7-1003 Shoulder Press",
    "description": [
      "M7-1003 Shoulder Press. El asiento de esta máquina de prensa de hombros se ajusta a la altura del usuario. Cuenta con asas en ángulo que permiten realizar press con agarre neutral y prono.",
      "Está bien acolchada, es duradera y ofrece un movimiento suave. Su peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Movimiento convergente que simula el levantamiento de peso libre",
      "Respaldo en ángulo para una postura correcta y soporte lumbar",
      "Brazos contrapesados para una baja resistencia inicial",
      "Agarres múltiples para diferentes anchos"
    ],
    "specifications": {
      "modelo": "M7-1003",
      "dimensiones": "1697 x 1428 x 1450 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Deltoides, Tríceps"
    }
  },
  {
    "id": 108,
    "name": "M7-1004 Abdominal Crunch",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Abdominales"],
    "image": "/m7/M7-1004 Abdominal Crunch.png",
    "alt": "M7-1004 Abdominal Crunch",
    "description": [
      "M7-1004 Abdominal Crunch. Esta máquina de abdominales incluye asiento y espinilleras ajustables para diferentes alturas. El peso se ajusta mediante una columna de pesas con pasador.",
      "Incluye asas para mayor apoyo durante el movimiento y está completamente acolchada.",
    ],
    "features": [
      "Aísla los músculos abdominales de forma efectiva",
      "Movimiento biomecánicamente correcto que evita la tensión en el cuello",
      "Almohadillas para hombros acolchadas",
      "Pila de pesas para una resistencia ajustable"
    ],
    "specifications": {
      "modelo": "M7-1004",
      "dimensiones": "1307 x 1180 x 1628 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "163 kg",
      "peso bruto (W.G.)": "203 kg",
      "músculo trabajado": "Recto Abdominal"
    }
  },
  {
    "id": 109,
    "name": "M7-1005 Biceps Curl",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Bíceps"],
    "image": "/m7/M7-1005 Biceps Curl.png",
    "alt": "M7-1005 Biceps Curl",
    "description": [
      "M7-1005 Biceps Curl. Esta máquina de curl de bíceps se ajusta mediante dos palancas: una debajo del asiento para ajustar la altura del usuario y otra en el brazo para ajustar la posición inicial.",
      "Las asas giran naturalmente, lo que permite un movimiento más natural. Ambos lados del asiento cuentan con acolchado para los brazos para mantener una postura correcta, y el respaldo está ligeramente inclinado para permitir la extensión completa de los brazos.",
      "El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Máquina de curl de bíceps sentado",
      "Punto de pivote alineado con la articulación del codo para un aislamiento preciso",
      "Asiento y almohadilla de apoyo ajustables",
      "Agarres pivotantes para adaptarse al movimiento natural de la muñeca"
    ],
    "specifications": {
      "modelo": "M7-1005",
      "dimensiones": "1410 x 1235 x 1450 mm",
      "placas (Weight Stack)": "174 lbs/78.75 kg",
      "peso neto (N.W.)": "182 kg",
      "peso bruto (W.G.)": "222 kg",
      "músculo trabajado": "Bíceps"
    }
  },
  {
    "id": 110,
    "name": "M7-1006 Triceps Extension",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Tríceps"],
    "image": "/m7/M7-1006 Triceps Extension.png",
    "alt": "M7-1006 Triceps Extension",
    "description": [
      "M7-1006 Triceps Extension. Esta máquina incluye portabotellas y porta toallas de serie. Su cómodo asiento y su facilidad de uso las hacen ideales para cualquier usuario del gimnasio.",
      "La soldadura de alta calidad de cada máquina, su elegante diseño y su excelente pintura en polvo las hacen destacar en cualquier gimnasio.",
    ],
    "features": [
      "Máquina de extensiones de tríceps sentado",
      "Aísla las tres cabezas del tríceps",
      "Respaldo en ángulo para mayor estabilidad",
      "Brazos autoajustables para adaptarse a diferentes longitudes de brazo"
    ],
    "specifications": {
      "modelo": "M7-1006",
      "dimensiones": "1685 x 1098 x 1450 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "182 kg",
      "peso bruto (W.G.)": "222 kg",
      "músculo trabajado": "Tríceps"
    }
  },
  {
    "id": 111,
    "name": "M7-1007 Pectoral Machine",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/m7/M7-1007 Pectoral Machine.png",
    "alt": "M7-1007 Pectoral Machine",
    "description": [
      "M7-1007 Pectoral Machine. Esta máquina para hacer pectorales tiene un diseño ergonómico y un movimiento suave. Sus asas giran durante el ejercicio para adaptarse al movimiento natural del usuario.",
      "Una palanca debajo del asiento permite ajustar la altura del usuario. El peso de la máquina se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Máquina de contractor de pecho (Pec Deck)",
      "Brazos pivotantes para un amplio rango de movimiento",
      "Asiento con ajuste de altura asistido por gas",
      "Agarres verticales para un movimiento cómodo"
    ],
    "specifications": {
      "modelo": "M7-1007",
      "dimensiones": "2055 x 1345 x 1630 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "159 kg",
      "peso bruto (W.G.)": "199 kg",
      "músculo trabajado": "Pectoral"
    }
  },
  {
    "id": 112,
    "name": "M7-1008 Lat Pull Down",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/m7/M7-1008 Lat Pull Down.png",
    "alt": "M7-1008 Lat Pull Down",
    "description": [
      "M7-1008 Lat Pull Down. Esta máquina de polea dorsal tiene un diseño ergonómico y fácil de usar. Incluye asiento y rodilleras ajustables según la altura del usuario.",
      "El peso se ajusta mediante un conjunto de discos con pasadores.",
    ],
    "features": [
      "Máquina de jalón al pecho",
      "Rodillos de sujeción para muslos ajustables",
      "Movimiento de polea suave y consistente",
      "Ideal para desarrollar la amplitud de la espalda"
    ],
    "specifications": {
      "modelo": "M7-1008",
      "dimensiones": "1852 x 1170 x 1930 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "195 kg",
      "peso bruto (W.G.)": "235 kg",
      "músculo trabajado": "Dorsal Ancho, Bíceps"
    }
  },
  {
    "id": 113,
    "name": "M7-1009 Row Rear Delt",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Espalda", "Hombros"],
    "image": "/m7/M7-1009 Row Rear Delt.png",
    "alt": "M7-1009 Row Rear Delt",
    "description": [
      "M7-1009 Row Rear Delt. Esta máquina incluye portabotellas y porta toallas de serie. Su cómodo asiento y su facilidad de uso las hacen ideales para cualquier usuario del gimnasio.",
      "La soldadura de alta calidad de cada máquina, su elegante diseño y su excelente pintura en polvo las hacen destacar en cualquier gimnasio.",
    ],
    "features": [
      "Máquina de remo sentado con apoyo pectoral",
      "Agarres duales para enfocar la espalda media o el deltoides posterior",
      "Asiento y apoyo pectoral ajustables",
      "Brazos de movimiento independientes"
    ],
    "specifications": {
      "modelo": "M7-1009",
      "dimensiones": "1485 x 966 x 1450 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "159 kg",
      "peso bruto (W.G.)": "199 kg",
      "músculo trabajado": "Espalda Media, Romboides, Deltoides Posterior"
    }
  },
  {
    "id": 114,
    "name": "M7-1010 Chin Dip Assist",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Espalda", "Pecho", "Tríceps", "Bíceps"],
    "image": "/m7/M7-1010 Chin Dip Assist.png",
    "alt": "M7-1010 Chin Dip Assist",
    "description": [
      "M7-1010 Chin Dip Assist. Esta máquina te permite ejecutar dominadas y fondos de manera progresiva. Su sistema de contrapeso ajustable te ayuda a medida que ganas fuerza, garantizando una técnica segura y efectiva.",
      "Utiliza sus agarres múltiples para un entrenamiento completo de espalda, pecho, bíceps y tríceps. Para un mayor desafío, la plataforma de rodillas es abatible, permitiendo un trabajo sin asistencia para los usuarios más avanzados.",
    ],
    "features": [
      "Máquina de dominadas y fondos con asistencia de contrapeso",
      "Plataforma de rodillas abatible para usuarios avanzados",
      "Agarres múltiples para dominadas y fondos",
      "Permite una progresión segura en ejercicios con peso corporal"
    ],
    "specifications": {
      "modelo": "M7-1010",
      "dimensiones": "1931 x 1266 x 2286 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "247 kg",
      "peso bruto (W.G.)": "287 kg",
      "músculo trabajado": "Dorsales, Bíceps, Pectoral, Tríceps"
    }
  },
  {
    "id": 115,
    "name": "M7-1011 Pec Fly Rear Delt",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Pecho", "Hombros"],
    "image": "/m7/M7-1011 Pec Fly Rear Delt.png",
    "alt": "M7-1011 Pec Fly Rear Delt",
    "description": [
      "M7-1011 Pec Fly Rear Delt. Esta máquina ofrece doble función para los ejercicios de apertura de pectorales y deltoides posteriores gracias a sus brazos ajustables, que pueden girarse a diversas posiciones iniciales.",
      "Otras características ajustables incluyen el asiento a la altura del usuario y la columna de pesas con pasadores.",
    ],
    "features": [
      "Máquina dual: contractor de pecho y pájaros para deltoides posterior",
      "Ahorra espacio al combinar dos máquinas",
      "Ajuste sencillo para cambiar entre ejercicios",
      "Brazos pivotantes con 5 posiciones de inicio"
    ],
    "specifications": {
      "modelo": "M7-1011",
      "dimensiones": "1476 x 1380 x 1975 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "172 kg",
      "peso bruto (W.G.)": "212 kg",
      "músculo trabajado": "Pectoral, Deltoides Posterior"
    }
  },
  {
    "id": 116,
    "name": "M7-1012 Back Extension",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Espalda", "Glúteos"],
    "image": "/m7/M7-1012 Back Extension.png",
    "alt": "M7-1012 Back Extension",
    "description": [
      "M7-1012 Back Extension. Esta máquina de extensión de espalda incluye pedales ajustables a la altura del usuario y una palanca para ajustar la posición inicial del ejercicio.",
      "Dispone de varias asas de apoyo tanto durante la preparación como durante la ejecución del ejercicio. El peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Máquina de extensiones lumbares",
      "Fortalece la cadena posterior",
      "Almohadilla pélvica y rodillos ajustables",
      "Rango de movimiento controlado para mayor seguridad"
    ],
    "specifications": {
      "modelo": "M7-1012",
      "dimensiones": "1622 x 1200 x 1450 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Erectores Espinales, Glúteos"
    }
  },
  {
    "id": 117,
    "name": "M7-2001 Hip Abductor",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Cadera", "Glúteos"],
    "image": "/m7/M7-2001 Hip Abductor.png",
    "alt": "M7-2001 Hip Abductor",
    "description": [
      "M7-2001 Hip Abductor. Esta máquina de abducción de cadera incluye palancas que ajustan la posición inicial y final del ejercicio.",
      "Está bien acolchada, con pedales y asas para mayor apoyo durante el movimiento. Su peso se ajusta mediante una pila de pesas con pasador.",
    ],
    "features": [
      "Fortalece los músculos externos de la cadera y el glúteo medio",
      "Posición sentada para una mayor estabilidad",
      "Almohadillas acolchadas para un ejercicio cómodo",
      "Rango de movimiento ajustable desde la posición sentada"
    ],
    "specifications": {
      "modelo": "M7-2001",
      "dimensiones": "1400 x 1122 x 1450 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Glúteo Medio y Menor"
    }
  },
  {
    "id": 118,
    "name": "M7-2002 Hip Adductor",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Cadera", "Piernas"],
    "image": "/m7/M7-2001 Hip Adductor.png",
    "alt": "M7-2001 Hip Adductor",
    "description": [
      "M7-2002 Hip Adductor. Esta máquina para aductores de cadera incluye palancas que ajustan la posición inicial y final del ejercicio.",
      "Está bien acolchada, con pedales y asas para mayor apoyo durante el movimiento. Su peso se ajusta mediante una pila de pesas con pasador.",
    ],
    "features": [
      "Fortalece los músculos internos del muslo",
      "Diseño ergonómico para un movimiento correcto",
      "Rango de movimiento inicial ajustable",
      "Pila de pesas completamente cubierta"
    ],
    "specifications": {
      "modelo": "M7-2002",
      "dimensiones": "1455 x 1268 x 1450 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Aductores"
    }
  },
  {
    "id": 119,
    "name": "M7-2003 Leg Extension",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m7/M7-2003 Leg Extension.png",
    "alt": "M7-2003 Leg Extension",
    "description": [
      "M7-2003 Leg Extension. Esta extensión de piernas cuenta con varias funciones ajustables. El asiento se puede ajustar a la altura del usuario, junto con la almohadilla para el tobillo.",
      "La palanca a la derecha del asiento, en la articulación de la rodilla, ajusta la posición inicial del ejercicio y permite al usuario levantarse cómodamente después del ejercicio.",
    ],
    "features": [
      "Aísla y desarrolla los cuádriceps",
      "Respaldo y almohadilla de rodillo ajustables",
      "Punto de pivote alineado con la rodilla para reducir la tensión",
      "Movimiento suave y biomecánicamente correcto"
    ],
    "specifications": {
      "modelo": "M7-2003",
      "dimensiones": "1250 x 1173 x 1630 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "177 kg",
      "peso bruto (W.G.)": "217 kg",
      "músculo trabajado": "Cuádriceps"
    }
  },
  {
    "id": 120,
    "name": "M7-2004 Seated Leg Curl",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m7/M7-2004 Seated Leg Curl.png",
    "alt": "M7-2004 Seated Leg Curl",
    "description": [
      "M7-2004 Seated Leg Curl. Esta máquina de curl de piernas cuenta con varias funciones ajustables: el asiento, la almohadilla para los muslos y la almohadilla para los tobillos se pueden ajustar a la altura del usuario.",
      "Una palanca adicional en la articulación de la rodilla permite ajustar la posición inicial y final del ejercicio.",
    ],
    "features": [
      "Máquina de curl femoral sentado",
      "Aísla los isquiotibiales",
      "Respaldo y rodillos ajustables para una alineación perfecta",
      "Movimiento controlado para maximizar la contracción muscular"
    ],
    "specifications": {
      "modelo": "M7-2004",
      "dimensiones": "1483 x 1153 x 1630 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "200 kg",
      "peso bruto (W.G.)": "240 kg",
      "músculo trabajado": "Isquiotibiales"
    }
  },
  {
    "id": 121,
    "name": "M7-2005 Seated Leg Press",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/m7/M7-2005 Seated Leg Press.png",
    "alt": "M7-2005 Seated Leg Press",
    "description": [
      "M7-2005 Seated Leg Press. Esta prensa de piernas horizontal cuenta con un reposapiés fijo, y la resistencia empuja el asiento hacia atrás.",
      "Esta máquina cuenta con palancas para controlar la profundidad del asiento, fácilmente ajustables para la movilidad del usuario y mayor seguridad al usar y salir de la máquina.",
    ],
    "features": [
      "Prensa de piernas sentado",
      "Trabaja todo el tren inferior de forma segura",
      "Plataforma de pies sobredimensionada para variar la posición",
      "Asiento y respaldo ajustables para un confort óptimo"
    ],
    "specifications": {
      "modelo": "M7-2005",
      "dimensiones": "1985 x 1190 x 1630 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "295 kg",
      "peso bruto (W.G.)": "335 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales"
    }
  },
  {
    "id": 122,
    "name": "M7-2006 Rotary Torso",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Abdominales"],
    "image": "/m7/M7-2006 Rotary Torso.png",
    "alt": "M7-2006 Rotary Torso",
    "description": [
      "M7-2006 Rotary Torso. Esta máquina de rotación de core cuenta con una palanca ajustable debajo de la almohadilla de rodillas para ajustar la posición inicial.",
      "Otra palanca en las hombreras se ajusta a la altura del usuario. El peso se ajusta mediante una pila de pesas con pasador.",
    ],
    "features": [
      "Máquina para rotación de torso",
      "Fortalece los músculos oblicuos",
      "Posición sentada con almohadillas para fijar las rodillas y aislar el torso",
      "Rango de movimiento ajustable para un ejercicio seguro"
    ],
    "specifications": {
      "modelo": "M7-2006",
      "dimensiones": "1150 x 1116 x 1450 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "164 kg",
      "peso bruto (W.G.)": "204 kg",
      "músculo trabajado": "Oblicuos Internos y Externos"
    }
  },
  {
    "id": 123,
    "name": "M7-2007 St anding Calf Raise",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m7/M7-2007 Standing Calf Raise.png",
    "alt": "M7-2007 Standing Calf Raise",
    "description": [
      "M7-2007 Standing Calf Raise. Esta máquina de elevación de pantorrillas de pie cuenta con una palanca bajo las hombreras para ajustar la altura del usuario.",
      "Es una máquina duradera y robusta con reposapiés bien sujetos. El peso se ajusta mediante una pila de discos con pasador.",
    ],
    "features": [
      "Máquina para elevación de talones de pie",
      "Desarrolla los músculos de la pantorrilla (gemelos)",
      "Almohadillas para hombros ajustables en altura",
      "Plataforma antideslizante con bloque para un mayor estiramiento"
    ],
    "specifications": {
      "modelo": "M7-2007",
      "dimensiones": "1258 x 1103 x 1635 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "147 kg",
      "peso bruto (W.G.)": "187 kg",
      "músculo trabajado": "Gastrocnemios (Gemelos)"
    }
  },
  {
    "id": 124,
    "name": "M7-2008 Glute Machine",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Glúteos"],
    "image": "/m7/M7-2008 Glute Machine.png",
    "alt": "M7-2008 Glute Machine",
    "description": [
      "M7-2008 Glute Machine. Esta máquina para glúteos cuenta con varias funciones ajustables: su almohadilla pectoral se ajusta a la altura del usuario y el reposapiés gira a la izquierda y a la derecha para trabajar cualquier pierna.",
      "Esta máquina ofrece un movimiento suave y el peso se ajusta mediante un conjunto de placas con pasadores.",
    ],
    "features": [
      "Máquina para patada de glúteo (Glute Kickback)",
      "Aísla y tonifica los glúteos",
      "Apoyo para el torso y antebrazos para una postura estable",
      "Movimiento de extensión de cadera contra resistencia"
    ],
    "specifications": {
      "modelo": "M7-2008",
      "dimensiones": "2070 x 1015 x 1630 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "149 kg",
      "peso bruto (W.G.)": "189 kg",
      "músculo trabajado": "Glúteo Mayor"
    }
  },
  {
    "id": 125,
    "name": "M7-2009 Prone Leg Curl",
    "primaryCategory": "M7",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/m7/M7-2009 Prone Leg Curl.png",
    "alt": "M7-2009 Prone Leg Curl",
    "description": [
      "M7-2009 Prone Leg Curl. Esta máquina de curl de isquiotibiales en posición acostado es robusta, está bien acolchada y ofrece un movimiento suave.",
      "La máquina se ajusta mediante una palanca en la articulación de la rodilla para ajustar la posición inicial y otra para ajustar la almohadilla del tobillo según las preferencias del usuario. Cuenta con asas en la parte delantera para mayor agarre durante el movimiento.",
    ],
    "features": [
      "Máquina de curl femoral tumbado",
      "Aísla los isquiotibiales de manera efectiva",
      "Diseño en ángulo para reducir la tensión en la espalda baja",
      "Rodillo y agarres ajustables para adaptarse a cada usuario"
    ],
    "specifications": {
      "modelo": "M7-2009",
      "dimensiones": "1500 x 1080 x 1630 mm",
      "placas (Weight Stack)": "293 lbs/132.75 kg",
      "peso neto (N.W.)": "150 kg",
      "peso bruto (W.G.)": "190 kg",
      "músculo trabajado": "Isquiotibiales"
    }
  },
  //Equipos PF

  {
    "id": 126,
    "name": "PF-1001 Chest Press - Shoulder Press",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Pecho", "Hombros"],
    "image": "/pf/PF-1001 Chest Press - Shoulder Press.png",
    "alt": "PF-1001 Chest Press - Shoulder Press",
    "description": [
      "PF-1001 Chest Press - Shoulder Press. Esta máquina de doble función permite realizar press de pecho y de hombros, con una palanca bajo el asiento que permite ajustar prácticamente cualquier ángulo, desde plano hasta totalmente inclinado.",
      "El peso se ajusta fácilmente mediante una columna de pesas con pasador.",
      "Esta máquina es duradera, cómoda y fácil de usar, ideal para cualquier gimnasio."
    ],
    "features": [
      "Máquina dual que combina press de pecho y press de hombros",
      "Ajuste sencillo del respaldo y el asiento para cambiar de ejercicio",
      "Brazos de presión con múltiples agarres",
      "Ideal para optimizar el espacio en el gimnasio"
    ],
    "specifications": {
      "modelo": "PF-1001",
      "dimensiones": "1980 x 1236 x 1515 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "154 kg",
      "peso bruto (W.G.)": "194 kg",
      "músculo trabajado": "Pectoral, Deltoides, Tríceps"
    }
  },
  {
    "id": 127,
    "name": "PF-1002 Biceps - Triceps",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Bíceps", "Tríceps"],
    "image": "/pf/PF-1002 Biceps - Triceps.png",
    "alt": "PF-1002 Biceps - Triceps",
    "description": [
      "PF-1002 Biceps - Triceps. Esta robusta máquina ahorra espacio y ofrece doble función para curls de bíceps y extensiones de tríceps.",
      "Una palanca bajo el asiento se ajusta a la altura del usuario. Las palancas en el brazo de la máquina permiten cambiar la posición inicial para alternar entre ejercicios.",
      "Las asas están inclinadas para ofrecer múltiples opciones de agarre y su acolchado garantiza comodidad durante el ejercicio. El peso se ajusta mediante una columna de pesas con pasador."
    ],
    "features": [
      "Máquina dual para curl de bíceps y extensiones de tríceps",
      "Cambio rápido entre ejercicios mediante un pasador de selección",
      "Brazos ajustables para un rango de movimiento completo",
      "Diseño ergonómico para aislar los músculos del brazo"
    ],
    "specifications": {
      "modelo": "PF-1002",
      "dimensiones": "1292 x 910 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "145 kg",
      "peso bruto (W.G.)": "185 kg",
      "músculo trabajado": "Bíceps, Tríceps"
    }
  },
  {
    "id": 128,
    "name": "PF-1003 Pec Fly Rear Deltoid",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Pecho", "Hombros"],
    "image": "/pf/PF-1003 Pec Fly Rear Deltoid.png",
    "alt": "PF-1003 Pec Fly Rear Deltoid",
    "description": [
      "PF-1003 Pec Fly Rear Deltoid. Esta máquina de doble función permite entrenar tanto los pectorales como los deltoides posteriores.",
      "Se ajusta mediante dos juegos de palancas: una debajo del asiento para ajustar la altura del usuario y otra en cada brazo de la máquina para ajustar la posición inicial del ejercicio seleccionado.",
    ],
    "features": [
      "Máquina dual para contractor de pecho (Pec Fly) y deltoides posterior (Rear Delt)",
      "Brazos pivotantes con múltiples posiciones de inicio",
      "Transición sencilla entre los dos movimientos",
      "Aísla eficazmente los músculos del pecho y la parte posterior de los hombros"
    ],
    "specifications": {
      "modelo": "PF-1003",
      "dimensiones": "1840 x 1210 x 2006 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "135 kg",
      "peso bruto (W.G.)": "175 kg",
      "músculo trabajado": "Pectoral, Deltoides Posterior"
    }
  },
  {
    "id": 129,
    "name": "PF-1004 Lat Pull Down - Low Row",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/pf/PF-1004 Lat Pull Down - Low Row.png",
    "alt": "PF-1004 Lat Pull Down - Low Row",
    "description": [
      "PF-1004 Lat Pull Down - Low Row. Esta máquina de espalda de doble propósito incluye rodilleras ajustables a la altura del usuario. El mango permite cambiar fácilmente entre polea alta y remo sentado.",
      "Cuenta con pedales para mayor apoyo durante el ejercicio. El peso se ajusta mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Máquina dual que combina jalón al pecho (Lat Pull Down) y remo bajo (Low Row)",
      "Dos poleas (alta y baja) con una sola pila de pesas",
      "Incluye barra de jalón y agarre de remo",
      "Solución completa para el entrenamiento de espalda"
    ],
    "specifications": {
      "modelo": "PF-1004",
      "dimensiones": "1746 x 1250 x 2317 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Dorsal Ancho, Romboides, Bíceps"
    }
  },
  {
    "id": 130,
    "name": "PF-1005 Back Extension - Abdominal Crunch",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Espalda", "Abdominales"],
    "image": "/pf/PF-1005 Back Extension - Abdominal Crunch.png",
    "alt": "PF-1005 Back Extension - Abdominal Crunch",
    "description": [
      "PF-1005 Back Extension - Abdominal Crunch. Esta máquina tiene una doble función: entrenar la espalda y el torso. Las palancas en el brazo permiten ajustar la posición inicial y el ejercicio.",
      "Su acolchado proporciona una comodidad óptima durante el movimiento. Cuenta con pedales y asas a ambos lados de la silla para mayor apoyo durante el ejercicio.",
    ],
    "features": [
      "Máquina dual para extensiones lumbares y encogimientos abdominales",
      "Diseño compacto para trabajar los músculos del core",
      "Ajustes sencillos para cambiar de un ejercicio a otro",
      "Fortalece la parte frontal y posterior del torso"
    ],
    "specifications": {
      "modelo": "PF-1005",
      "dimensiones": "1230 x 932 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "134 kg",
      "peso bruto (W.G.)": "174 kg",
      "músculo trabajado": "Erectores Espinales, Recto Abdominal"
    }
  },
  {
    "id": 131,
    "name": "PF-1006 Abductor-Adductor",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Cadera", "Glúteos", "Piernas"],
    "image": "/pf/PF-1006 Abductor-Adductor.png",
    "alt": "PF-1006 Abductor-Adductor",
    "description": [
      "PF-1006 Abductor-Adductor. Esta máquina dual para abductores y aductores cuenta con brazos totalmente ajustables para cambiar la posición inicial y final, así como el ejercicio deseado.",
      "Ofrece una resistencia suave en ambas direcciones, con pedales y asas para mayor apoyo durante el movimiento. El peso se ajusta mediante una pila de pesas con pasadores.",
    ],
    "features": [
      "Máquina dual que trabaja tanto los abductores como los aductores de la cadera",
      "Almohadillas giratorias para cambiar fácilmente entre ejercicios",
      "Fortalece la parte externa e interna de los muslos",
      "Rango de movimiento ajustable para adaptarse a cada usuario"
    ],
    "specifications": {
      "modelo": "PF-1006",
      "dimensiones": "1595 x 1465 x 1515 mm",
      "placas (Weight Stack)": "218 lbs/99 kg",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Abductores (Glúteo Medio), Aductores"
    }
  },
  {
    "id": 132,
    "name": "PF-1007 Leg Curl-Leg Extension",
    "primaryCategory": "PF",
    "subCategories": ["Piernas"],
    "image": "/pf/PF-1007 Leg Curl-Leg Extension.png",
    "alt": "PF-1007 Leg Curl-Leg Extension",
    "description": [
      "PF-1007 Leg Curl-Leg Extension. Esta máquina de piernas ofrece funciones duales para extensiones de piernas y flexiones de isquiotibiales. Cuenta con varias funciones ajustables: el asiento, la almohadilla para muslos y la almohadilla para tobillos, todas ajustables a la altura del usuario.",
      "Una palanca adicional en la articulación de la rodilla permite ajustar la posición inicial y final del ejercicio. Esta palanca también permite alternar entre flexiones y extensiones de piernas.",
    ],
    "features": [
      "Máquina dual para curl femoral y extensiones de cuádriceps",
      "Un solo puesto para un entrenamiento completo de la parte superior de la pierna",
      "Ajuste rápido para cambiar de un movimiento a otro",
      "Almohadillas de rodillo y respaldo ajustables"
    ],
    "specifications": {
      "modelo": "PF-1007",
      "dimensiones": "1708 x 922 x 1515 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Cuádriceps, Isquiotibiales"
    }
  },
  {
    "id": 133,
    "name": "PF-1008 Chin Dip Assist",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Espalda", "Pecho", "Tríceps", "Bíceps"],
    "image": "/pf/PF-1008 Chin Dip Assist.png",
    "alt": "PF-1008 Chin Dip Assist",
    "description": [
      "PF-1008 Chin Dip Assist. Esta máquina permite realizar dominadas y fondos con asistencia.",
      "Se ajusta mediante una palanca debajo del asiento de apoyo para retirar el soporte. Además, cuenta con asas para fondos que giran hacia adentro o hacia afuera según las preferencias del usuario. Las múltiples asas para dominadas permiten entrenar dominadas y fondos desde diferentes ángulos.",
    ],
    "features": [
      "Máquina de dominadas y fondos con asistencia de contrapeso",
      "Plataforma de rodillas que reduce el peso corporal del usuario",
      "Agarres múltiples para dominadas (chin-ups) y fondos (dips)",
      "Ideal para progresar en ejercicios de peso corporal"
    ],
    "specifications": {
      "modelo": "PF-1008",
      "dimensiones": "1278 x 1200 x 2208 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "215 kg",
      "peso bruto (W.G.)": "255 kg",
      "músculo trabajado": "Dorsales, Bíceps, Pectoral, Tríceps"
    }
  },
  {
    "id": 134,
    "name": "PF-1009 Leg Press - Calf Raise",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/pf/PF-1009 Leg Press - Calf Raise.png",
    "alt": "PF-1009 Leg Press - Calf Raise",
    "description": [
      "PF-1009 Leg Press - Calf Raise. Esta prensa de piernas cuenta con un asiento ajustable a la altura del usuario.",
      "Su diseño es fácil de usar, está bien acolchada y cuenta con asas de apoyo a ambos lados del asiento. Su peso se ajusta fácilmente mediante una columna de pesas con pasador.",
    ],
    "features": [
      "Máquina dual que combina prensa de piernas y elevación de talones",
      "Plataforma de pies sobredimensionada con superficie antideslizante",
      "Posición sentada ergonómica y segura",
      "Permite un entrenamiento completo del tren inferior"
    ],
    "specifications": {
      "modelo": "PF-1009",
      "dimensiones": "1740 x 998 x 1715 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "183 kg",
      "peso bruto (W.G.)": "223 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales, Pantorrillas"
    }
  },
  {
    "id": 135,
    "name": "PF-1010 Double Pulley Machine",
    "primaryCategory": "PF",
    status: "in-stock",
    "subCategories": ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps"],
    "image": "/pf/PF-1010 Double Pulley Machine.png",
    "alt": "PF-1010 Double Pulley Machine",
    "description": [
      "PF-1010 Double Pulley Machine. Esta máquina de doble polea se puede utilizar para una variedad de ejercicios. Su espacio abierto permite colocar otros soportes para ejercicios adicionales (como bancos).",
      "Su peso se ajusta mediante una pila de pesas con pasador. Sus poleas de altura fija admiten diferentes accesorios de agarre. Los agarres en la base ofrecen soporte durante el ejercicio.",
    ],
    "features": [
      "Máquina de polea doble ajustable o crossover funcional",
      "Dos poleas ajustables en altura de forma independiente",
      "Extrema versatilidad para entrenar todo el cuerpo",
      "Incluye múltiples agarres y accesorios"
    ],
    "specifications": {
      "modelo": "PF-1010",
      "dimensiones": "1521 x 1368 x 2215 mm",
      "placas (Weight Stack)": "263 lbs/119.25 kg",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Cuerpo Completo"
    }
  },
// Equipo RS

  {
    "id": 136,
    "name": "RS-1001 Chest Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/rs/RS-1001 Chest Press.png",
    "alt": "RS-1001 Chest Press",
    "description": [
      "RS-1001 Iso Lateral Bench Press. Este robusto press de banca cuenta con un asiento ajustable a la altura del usuario.",
      "Sus brazos convergentes ofrecen una trayectoria de movimiento natural y también es ideal para entrenar con un solo brazo. Los discos se cargan a ambos lados de la máquina y cuenta con espacio adicional para almacenarlos.",
    ],
    "features": [
      "Máquina de press de pecho sentado de carga con discos",
      "Brazos independientes para un desarrollo muscular equilibrado",
      "Movimiento convergente para una contracción pectoral superior",
      "Asiento ajustable en altura"
    ],
    "specifications": {
      "Modelo": "RS-1001",
      dimensiones: "14988 x 1076 x 1778 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "140 kg",
      "peso bruto (W.G.)": "180 kg",
      "músculo trabajado": "Pectoral, Deltoides Anterior, Tríceps",
    }
  },
  {
    "id": 137,
    "name": "RS-1002 Chest Back",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho", "Espalda"],
    "image": "/rs/RS-1002 Chest Back.png",
    "alt": "RS-1002 Chest Back",
    "description": [
      "RS-1002 Chest Back. Esta máquina premium de doble función permite entrenar remo alto o press de pecho. Cuenta con palancas bajo ambos asientos para ajustar la altura del usuario y bajo el soporte para los muslos de la sección trasera.",
      "Cada brazo de la máquina se mueve independientemente para ofrecer entrenamiento iso-lateral. Cada brazo se carga con discos y cuenta con 4 pasadores adicionales para almacenarlos.",
    ],
    "features": [
      "Máquina dual para press de pecho y remo",
      "Brazos de movimiento con doble función",
      "Ideal para superseries y ahorro de espacio",
      "Apoyo pectoral y respaldo para una postura correcta en ambos ejercicios"
    ],
    "specifications": {
      "Modelo": "RS-1002",
      dimensiones: "1887 x 1764 x 2127 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "174 kg",
      "peso bruto (W.G.)": "214 kg",
      "músculo trabajado": "Pectoral, Espalda (Dorsales y Romboides)",
    }
  },
  {
    "id": 138,
    "name": "RS-1003 Decline Chest Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/rs/RS-1003 Decline Chest Press.png",
    "alt": "RS-1003 Decline Chest Press",
    "description": [
      "RS-1003 Decline Chest Press. Este banco de prensa de alta resistencia incluye un asiento ajustable a la altura del usuario.",
      "Cuenta con brazos convergentes para un movimiento natural y es ideal para entrenar con un solo brazo. Los discos se colocan a ambos lados de la máquina y cuenta con espacio adicional para almacenarlos.",
    ],
    "features": [
      "Máquina de press declinado para pectoral inferior",
      "Movimiento guiado para un aislamiento efectivo",
      "Agarres en ángulo para una posición cómoda de la muñeca",
      "Asiento ajustable para adaptarse a diferentes usuarios"
    ],
    "specifications": {
      "Modelo": "RS-1003",
      dimensiones: "1710 x 1580 x 1777 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "170 kg",
      "peso bruto (W.G.)": "210 kg",
      "músculo trabajado": "Pectoral Inferior",
    }
  },
  {
    "id": 139,
    "name": "RS-1004 Level Row",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1004 Level Row.png",
    "alt": "RS-1004 Level Row",
    "description": [
      "RS-1004 Level Row. Esta robusta máquina de remo nivelado cuenta con un asiento ajustable a la altura del usuario.",
      "Los brazos de la máquina se mueven con naturalidad y las manijas están ligeramente inclinadas para mejorar la mecánica de movimiento. Adecuada para entrenamiento bilateral o con un solo brazo, con un asa de apoyo adicional detrás del soporte pectoral.",
      "La parte superior de cada brazo soporta discos de pesas y la máquina cuenta con un amplio espacio de almacenamiento adicional para discos de pesas."
    ],
    "features": [
      "Máquina de remo horizontal con carga de discos",
      "Apoyo para el pecho que aísla los músculos de la espalda",
      "Brazos independientes para trabajo unilateral",
      "Plataforma para pies antideslizante para mayor estabilidad"
    ],
    "specifications": {
      "Modelo": "RS-1004",
      dimensiones: "1674 x 1472 x 2106 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "160 kg",
      "peso bruto (W.G.)": "200 kg",
      "músculo trabajado": "Dorsal Ancho, Romboides, Espalda Media",
    }
  },
  {
    "id": 140,
    "name": "RS-1005 Front Lat Pull Down",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1005 Front Lat Pull Down.png",
    "alt": "RS-1005 Front Lat Pull Down",
    "description": [
      "RS-1005 Front Lat Pull Down. Este resistente jalón incluye asiento y rodilleras ajustables a la altura del usuario.",
      "Los brazos de la máquina tienen un recorrido natural y son ideales para entrenar con un solo brazo, con un asa adicional en la parte posterior del acolchado pectoral que proporciona apoyo en estos movimientos.",
      "Se pueden colocar discos de pesaje a ambos lados de la máquina y cuenta con amplio espacio de almacenamiento adicional para discos."
    ],
    "features": [
      "Máquina de jalón al pecho con carga de discos",
      "Brazos de movimiento isolaterales",
      "Rodillos de sujeción para piernas ajustables",
      "Asiento en ángulo para una mayor activación dorsal"
    ],
    "specifications": {
      "Modelo": "RS-1005",
      dimensiones: "1620 x 1400 x 2075 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "150 kg",
      "peso bruto (W.G.)": "190 kg",
      "músculo trabajado": "Dorsal Ancho, Bíceps",
    }
  },
  {
    "id": 141,
    "name": "RS-1006 High Row",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1006 High Row.png",
    "alt": "RS-1006 High Row",
    "description": [
      "RS-1006 High Row. Este resistente jalón frontal iso-lateral cuenta con funciones ajustables: la palanca bajo el asiento se ajusta a la altura del usuario y una palanca para ajustar la almohadilla del muslo.",
      "El diseño iso-lateral de esta máquina permite entrenar un lado de forma aislada para corregir desequilibrios. Cada brazo de la máquina se carga con pesas de forma independiente."
    ],
    "features": [
      "Máquina de remo alto para enfocar la espalda superior",
      "Apoyo pectoral para máxima estabilidad",
      "Movimiento descendente en arco",
      "Fortalece trapecios, romboides y deltoides posterior"
    ],
    "specifications": {
      "Modelo": "RS-1006",
      dimensiones: "1778 x 1490 x 2085 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Espalda Alta, Trapecio, Deltoides Posterior",
    }
  },
  {
    "id": 142,
    "name": "RS-1007 Horizontal Bench Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/rs/RS-1007 Horizontal Bench Press.png",
    "alt": "RS-1007 Horizontal Bench Press",
    "description": [
      "RS-1007 Horizontal Bench Press. Este banco de prensa de alta resistencia cuenta con un movimiento convergente y asas en ángulo para un movimiento más natural.",
      "Se pueden colocar discos de pesaje a ambos lados de la máquina y cuenta con espacio adicional para almacenarlos. Es una máquina robusta y resistente."
    ],
    "features": [
      "Máquina de press de banca horizontal con carga de discos",
      "Simula el movimiento del press con barra de forma segura",
      "Brazos independientes para un desarrollo equilibrado",
      "Topes ajustables para limitar el rango de movimiento"
    ],
    "specifications": {
      "Modelo": "RS-1007",
      dimensiones: "1707 x 1905 x 1195 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "155 kg",
      "peso bruto (W.G.)": "195 kg",
      "músculo trabajado": "Pectoral, Deltoides Anterior, Tríceps",
    }
  },
  {
    "id": 143,
    "name": "RS-1008 Incline Chest Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho", "Hombros"],
    "image": "/rs/RS-1008 Incline Chest Pres.png",
    "alt": "RS-1008 Incline Chest Press",
    "description": [
      "RS-1008 Incline Chest Press. Esta prensa de pecho de alta resistencia cuenta con brazos convergentes y asas en ángulo para un movimiento más natural, y también es ideal para entrenar con un solo brazo.",
      "El asiento es ajustable a la altura del usuario. La máquina admite discos de pesaje a ambos lados y cuenta con un amplio espacio de almacenamiento adicional para ellos."
    ],
    "features": [
      "Máquina de press inclinado para pectoral superior",
      "Asiento en ángulo para un enfoque preciso",
      "Movimiento convergente que imita el press con mancuernas",
      "Plataforma para asistente (spotter)"
    ],
    "specifications": {
      "Modelo": "RS-1008",
      dimensiones: "1707 x 1400 x 1933 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "133 kg",
      "peso bruto (W.G.)": "173 kg",
      "músculo trabajado": "Pectoral Superior, Deltoides Anterior",
    }
  },
  {
    "id": 144,
    "name": "RS-1009 Low Row",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1009 Low Row.png",
    "alt": "RS-1009 Low Row",
    "description": [
      "RS-1009 Low Row. Esta robusta máquina de remo bajo cuenta con un asiento ajustable a la altura del usuario. ",
      "Los brazos de la máquina se mueven de forma natural y las manijas están ligeramente inclinadas para mejorar la mecánica de movimiento. Adecuada para entrenamiento bilateral o con un solo brazo, con un asa de apoyo adicional detrás del soporte pectoral.",
      "La parte superior de cada brazo soporta discos de pesas y la máquina cuenta con un amplio espacio de almacenamiento adicional para discos de pesas."
    ],
    "features": [
      "Máquina de remo bajo con carga de discos",
      "Enfatiza el trabajo en el dorsal inferior y medio",
      "Agarres pivotantes para un movimiento natural",
      "Plataforma para pies amplia para mayor estabilidad"
    ],
    "specifications": {
      "Modelo": "RS-1009",
      dimensiones: "1646 x 1323 x 1728 mm	",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "135 kg",
      "peso bruto (W.G.)": "175 kg",
      "músculo trabajado": "Dorsal Ancho, Espalda Media",
    }
  },
  {
    "id": 145,
    "name": "RS-1010 Sissy Squat",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1010 Sissy Squat.png",
    "alt": "RS-1010 Sissy Squat",
    "description": [
      "RS-1010 Sissy Squat. Esta máquina de sentadillas Sissy incluye una espinillera ajustable según las preferencias del usuario. Está bien acolchada para mayor comodidad.",
      "Es una máquina robusta y bien equilibrada, ideal para un uso frecuente."
    ],
    "features": [
      "Banco para sentadillas Sissy",
      "Aísla los cuádriceps de forma intensa",
      "Plataforma antideslizante",
      "Rodillos de sujeción para tobillos y pantorrillas ajustables"
    ],
    "specifications": {
      "Modelo": "RS-1010",
      dimensiones: "1486 x 827 x 540 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "44 kg",
      "peso bruto (W.G.)": "84 kg",
      "músculo trabajado": "Cuádriceps",
    }
  },
  {
    "id": 146,
    "name": "RS-1011 Rowing",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1011 Rowing.png",
    "alt": "RS-1011 Rowing",
    "description": [
      "RS-1011 Rowing. La máquina de remo bajo de alta resistencia incluye un asiento y un soporte para el pecho ajustables a la altura del usuario. ",
      "Los brazos de la máquina se mueven de forma natural, con asas neutras estrechas y asas rectas más anchas para optimizar la mecánica en diferentes movimientos de la espalda.",
      "Ideal para entrenamiento bilateral o con un solo brazo, con un asa de apoyo adicional detrás del soporte para el pecho. La máquina admite discos de pesaje a ambos lados."
    ],
    "features": [
      "Máquina de remo sentado con carga de discos",
      "Diseño robusto para cargas pesadas",
      "Movimiento de arco natural para una máxima contracción de la espalda",
      "Múltiples opciones de agarre"
    ],
    "specifications": {
      "Modelo": "RS-1011",
      dimensiones: "1640 x 1445 x 1445 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "143 kg",
      "peso bruto (W.G.)": "183 kg",
      "músculo trabajado": "Dorsales, Romboides, Trapecio",
    }
  },
  {
    "id": 147,
    "name": "RS-1012A Shoulder Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/rs/RS-1012A Shoulder Press.png",
    "alt": "RS-1012A Shoulder Press",
    "description": [
      "RS-1012A Shoulder Press. Esta robusta máquina de prensa de hombros con discos es duradera y apta para uso intensivo frecuente.",
      "Su asiento se ajusta a la altura del usuario. Cuenta con protectores de goma para soportar el peso antes y después del ejercicio.",
      "Cada brazo se mueve de forma independiente, lo que permite un entrenamiento aislado-lateral. Esta máquina también cuenta con un amplio espacio de almacenamiento adicional para discos."
    ],
    "features": [
      "Máquina de press de hombros con carga de discos",
      "Brazos independientes para un trabajo equilibrado",
      "Respaldo ajustable para una postura óptima",
      "Movimiento convergente para mayor comodidad articular"
    ],
    "specifications": {
      "Modelo": "RS-1012A",
      dimensiones: "1130 x 1827 x 1921 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "144 kg",
      "peso bruto (W.G.)": "184 kg",
      "músculo trabajado": "Deltoides, Tríceps",
    }
  },
  {
    "id": 148,
    "name": "RS-1012B Shoulder Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/rs/RS-1012B Shoulder Press.png",
    "alt": "RS-1012B Shoulder Press",
    "description": [
      "RS-1012B Shoulder Press. Esta robusta máquina de press de hombros es duradera y apta para uso frecuente.",
      "Su asiento se ajusta a la altura del usuario e incluye protectores de seguridad para soportar el peso antes y después del ejercicio.",
      "Las asas están en ángulo, lo que permite diferentes agarres de presión y ofrece una trayectoria de movimiento suave y natural. Es ideal para entrenamiento bilateral y con un solo brazo.",
      "Cada brazo cuenta con discos de pesaje, con espacio adicional para almacenarlos a ambos lados de la máquina."
    ],
    "features": [
      "Variante de la máquina de press de hombros",
      "Diseño biomecánico alternativo",
      "Agarres neutros y pronados",
      "Asiento ajustable en altura"
    ],
    "specifications": {
      "Modelo": "RS-1012B",
      dimensiones: "1315 x 1796 x 1335 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "150 kg",
      "peso bruto (W.G.)": "190 kg",
      "músculo trabajado": "Deltoides, Tríceps",
    }
  },
  {
    "id": 149,
    "name": "RS-1013 Super Incline Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho", "Hombros"],
    "image": "/rs/RS-1013 Super Incline Press.png",
    "alt": "RS-1013 Super Incline Press",
    "description": [
      "RS-1013 Super Incline Press. Esta robusta prensa de pecho inclinada cuenta con brazos convergentes y asas en ángulo para un movimiento más natural, además de ser ideal para entrenar con un solo brazo.",
      "El asiento es ajustable a la altura del usuario. La máquina admite discos de pesaje a ambos lados y cuenta con un amplio espacio de almacenamiento adicional para ellos."
    ],
    "features": [
      "Máquina de press super inclinado",
      "Enfoque intenso en la parte clavicular del pectoral y el deltoides anterior",
      "Movimiento de arco ascendente",
      "Plataforma para asistente (spotter)"
    ],
    "specifications": {
      "Modelo": "RS-1013",
      dimensiones: "1365 x 1820 x 1550 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "121 kg",
      "peso bruto (W.G.)": "161 kg",
      "músculo trabajado": "Pectoral Superior, Deltoides Anterior",
    }
  },
  {
    "id": 150,
    "name": "RS-1014 Wide Chest Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/rs/RS-1014 Wide Chest Press.png",
    "alt": "RS-1014 Wide Chest Press",
    "description": [
      "RS-1014 Wide Chest Press. Esta prensa de pecho pesada cuenta con brazos convergentes y asas en ángulo para un movimiento más natural, y también es ideal para entrenar con un solo brazo.",
      "El asiento es ajustable a la altura del usuario. La máquina admite discos de pesaje a ambos lados y cuenta con un amplio espacio de almacenamiento adicional para ellos."
    ],
    "features": [
      "Máquina de press de pecho con agarre ancho",
      "Enfatiza el trabajo en la parte externa del pectoral",
      "Brazos independientes y movimiento convergente",
      "Soportes de almacenamiento de discos integrados"
    ],
    "specifications": {
      "Modelo": "RS-1014",
      dimensiones: "1433 x 1680 x 1700 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "172 kg",
      "peso bruto (W.G.)": "212 kg",
      "músculo trabajado": "Pectoral (fibras externas)",
    }
  },
  {
    "id": 151,
    "name": "RS-1015 Wide Pull Down",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda"],
    "image": "/rs/RS-1015 Wide Pull Down.png",
    "alt": "RS-1015 Wide Pull Down",
    "description": [
      "RS-1015 Wide Pull Down. Esta máquina de polea dorsal de alta resistencia incluye asiento y rodilleras ajustables a la altura del usuario.",
      "Los brazos de la máquina se extienden con una amplitud natural, ideal para entrenar la parte superior de la espalda, tanto con ambos brazos como con un solo brazo. Dispone de discos de pesaje a ambos lados de la máquina, con espacio adicional para almacenarlos."
    ],
    "features": [
      "Máquina de jalón con agarre ancho",
      "Simula el movimiento de las dominadas con agarre abierto",
      "Brazos de movimiento isolaterales",
      "Rodillos de sujeción para muslos"
    ],
    "specifications": {
      "Modelo": "RS-1015",
      dimensiones: "1808 x 1265 x 1915 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "110 kg",
      "peso bruto (W.G.)": "150 kg",
      "músculo trabajado": "Dorsal Ancho (fibras superiores)",
    }
  },
  {
    "id": 152,
    "name": "RS-1016 Lateral Rise",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/rs/RS-1016 Lateral Rise.png",
    "alt": "RS-1016 Lateral Rise",
    "description": [
      "RS-1016 Lateral Rise. Esta robusta máquina de elevación lateral incluye un asiento ajustable a la altura del usuario.",
      "Esta máquina es robusta y cuenta con un acolchado completo para mayor comodidad. Cada brazo está equipado con discos de pesas y es apta para entrenamiento bilateral o individual."
    ],
    "features": [
      "Máquina para elevaciones laterales con carga de discos",
      "Aísla la cabeza medial del deltoides",
      "Brazos pivotantes para un movimiento natural en arco",
      "Asiento y almohadillas ajustables"
    ],
    "specifications": {
      "Modelo": "RS-1016",
      dimensiones: "1230 x 1165 x 1320 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "154 kg",
      "peso bruto (W.G.)": "194 kg",
      "músculo trabajado": "Deltoides Medial",
    }
  },
  {
    "id": 153,
    "name": "RS-1017 Pullover",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho", "Espalda"],
    "image": "/rs/RS-1017 Pullover.png",
    "alt": "RS-1017 Pullover",
    "description": [
      "RS-1017 Pullover. Esta máquina premium de pull-up dorsal con carga de discos cuenta con un asiento ajustable a la altura del usuario e incluye un cinturón para asegurarlo al levantar cargas pesadas.",
      "Un pedal permite al usuario retirar y volver a colocar el peso del soporte de forma segura. La máquina está completamente acolchada e incluye espacio adicional para guardar discos."
    ],
    "features": [
      "Máquina de pullover para trabajar pecho y espalda",
      "Movimiento de arco sobre la cabeza",
      "Respaldo y asiento ajustables para un rango de movimiento completo",
      "Activa los dorsales y el serrato anterior"
    ],
    "specifications": {
      "Modelo": "RS-1017",
      dimensiones: "1040 x 1540 x 1510 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "168 kg",
      "peso bruto (W.G.)": "208 kg",
      "músculo trabajado": "Dorsales, Serrato Anterior, Pectoral",
    }
  },
  {
    "id": 154,
    "name": "RS-1018 Biceps Curl",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Bíceps"],
    "image": "/rs/RS-1018 Biceps Curl.png",
    "alt": "RS-1018 Biceps Curl",
    "description": [
      "RS-1018 Biceps Curl. Esta robusta máquina de curl de bíceps incluye una palanca debajo del asiento para ajustar la altura del usuario. Está bien acolchada y cuenta con pedales con agarres firmes para mayor apoyo.",
      "La máquina cuenta con asas en ángulo, pesas con discos y espacio adicional para guardarlas."
    ],
    "features": [
      "Máquina de curl de bíceps sentado con carga de discos",
      "Almohadilla de apoyo en ángulo (tipo predicador)",
      "Brazos de movimiento independientes",
      "Agarres pivotantes para comodidad de la muñeca"
    ],
    "specifications": {
      "Modelo": "RS-1018",
      dimensiones: "1265 x 1376 x 1050 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "108 kg",
      "peso bruto (W.G.)": "148 kg",
      "músculo trabajado": "Bíceps",
    }
  },
  {
    "id": 155,
    "name": "RS-1019 Standing Calf Raise",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1019 Standing Calf Raise.png",
    "alt": "RS-1019 Standing Calf Raise",
    "description": [
      "RS-1019 Standing Calf Raise. Esta robusta máquina de elevación de pantorrillas de pie con pesas es duradera y apta para uso frecuente e intensivo.",
      "Las hombreras están completamente acolchadas y se ajustan a la altura del usuario. Los pedales recubiertos de goma ofrecen un agarre firme para un soporte óptimo.",
      "La máquina admite pesas a ambos lados e incluye espacio adicional para guardar discos."
    ],
    "features": [
      "Máquina para elevación de talones de pie con carga de discos",
      "Almohadillas para hombros acolchadas y ajustables",
      "Bloque para pies para un estiramiento completo de la pantorrilla",
      "Estructura robusta para soportar cargas pesadas"
    ],
    "specifications": {
      "Modelo": "RS-1019",
      dimensiones: "1105 x 1080 x 1755 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "105 kg",
      "peso bruto (W.G.)": "145 kg",
      "músculo trabajado": "Gastrocnemios (Gemelos)",
    }
  },
  {
    "id": 156,
    "name": "RS-1020 Standing Calf Raise",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1020 Standing Calf Rise.png",
    "alt": "RS-1020 Standing Calf Raise",
    "description": [
      "RS-1020 Standing Calf Raise. Esta robusta prensa de pantorrillas de pie incluye un soporte para hombros bien acolchado y ajustable en altura.",
      "Los pedales ofrecen un buen agarre y las asas a ambos lados de las hombreras ofrecen soporte adicional. Incorpora discos de pesaje y espacio de almacenamiento adicional para ellos."
    ],
    "features": [
      "Variante de la máquina de elevación de talones de pie",
      "Diseño compacto",
      "Sistema de palanca para la resistencia",
      "Fácil carga y descarga de discos"
    ],
    "specifications": {
      "Modelo": "RS-1020",
      dimensiones: "1305 x 1272 x 1765 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "147 kg",
      "peso bruto (W.G.)": "187 kg",
      "músculo trabajado": "Gastrocnemios (Gemelos)",
    }
  },
  {
    "id": 157,
    "name": "RS-1021 Leg Curl",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1021 Leg Curl.png",
    "alt": "RS-1021 Leg Curl",
    "description": [
      "RS-1021 Leg Curl. Esta robusta máquina de curl de piernas en posición prona permite realizar curls de isquiotibiales en posición acostado, tanto de forma bilateral como aislada.",
      "Esta máquina está completamente acolchada y cuenta con asas delanteras que ofrecen agarre durante el levantamiento.",
      "La máquina utiliza discos de pesaje en cada pierna."
    ],
    "features": [
      "Máquina de curl femoral tumbado con carga de discos",
      "Diseño en ángulo para proteger la espalda baja",
      "Rodillo y agarres ajustables",
      "Aísla eficazmente los isquiotibiales"
    ],
    "specifications": {
      "Modelo": "RS-1021",
      dimensiones: "1488 x 1550 x 910 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "68 kg",
      "peso bruto (W.G.)": "108 kg",
      "músculo trabajado": "Isquiotibiales",
    }
  },
  {
    "id": 158,
    "name": "RS-1022 Leg Extension",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1022 Leg Extension.png",
    "alt": "RS-1022 Leg Extension",
    "description": [
      "RS-1022 Leg Extension. Esta extensión de piernas isolateral tiene una posición fija y un tamaño cómodo para la mayoría de los usuarios, con asas para sujetarla a ambos lados del asiento.",
      "Su asiento está ligeramente inclinado para un mayor rango de movimiento en la parte baja del movimiento y es ideal para entrenar cada pierna a la vez o por separado."
    ],
    "features": [
      "Máquina de extensiones de cuádriceps con carga de discos",
      "Brazos de movimiento independientes para trabajo unilateral",
      "Respaldo y rodillo ajustables para una alineación correcta",
      "Movimiento suave y centrado en el cuádriceps"
    ],
    "specifications": {
      "Modelo": "RS-1022",
      dimensiones: "1664 x 1745 x 1215 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "134 kg",
      "peso bruto (W.G.)": "174 kg",
      "músculo trabajado": "Cuádriceps",
    }
  },
  {
    "id": 159,
    "name": "RS-1023 Leg Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1023 Leg Press.png",
    "alt": "RS-1023 Leg Press",
    "description": [
      "RS-1023 Leg Press. Esta prensa de piernas de alta resistencia cuenta con un asiento ajustable que permite modificar tanto su ángulo como la distancia a los reposapiés.",
      "Se mueve con naturalidad y es ideal para entrenar cada pierna a la vez o por separado. Cada pierna de la máquina puede cargarse con discos de pesas de forma independiente en la parte trasera."
    ],
    "features": [
      "Prensa de piernas inclinada a 45 grados con carga de discos",
      "Plataforma para pies sobredimensionada",
      "Mecanismo de seguridad de fácil acceso",
      "Soportes de almacenamiento de discos"
    ],
    "specifications": {
      "Modelo": "RS-1023",
      dimensiones: "1335 x 1895 x 1475 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "194 kg",
      "peso bruto (W.G.)": "234 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales",
    }
  },
  {
    "id": 160,
    "name": "RS-1024 Leg Extension",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1024 Leg Extension.png",
    "alt": "RS-1024 Leg Extension",
    "description": [
      "RS-1024 Leg Extension. Esta robusta máquina de extensión de piernas cuenta con un respaldo ajustable a la altura del usuario.",
      "La máquina ofrece un recorrido suave. Cuenta con discos de pesaje a ambos lados y espacio para discos adicionales en la parte trasera."
    ],
    "features": [
      "Variante de la máquina de extensiones de cuádriceps",
      "Diseño con el asiento reclinado",
      "Biomecánica enfocada en reducir la tensión de la rodilla",
      "Ajustes intuitivos"
    ],
    "specifications": {
      "Modelo": "RS-1024",
      dimensiones: "1556 x 1922 x 1160 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "113 kg",
      "peso bruto (W.G.)": "153 kg",
      "músculo trabajado": "Cuádriceps",
    }
  },
  {
    "id": 161,
    "name": "RS-1025 Horizontal Calf",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1025 Horizontal Calf.png",
    "alt": "RS-1025 Horizontal Calf",
    "description": [
      "RS-1025 Horizontal Calf. Esta prensa de pantorrillas cuenta con un asiento ajustable para ajustar la altura y la posición.",
      "Dos pedales de agarre firme permiten realizar el ejercicio. La máquina cuenta con discos de pesas a ambos lados."
    ],
    "features": [
      "Máquina de pantorrillas tipo prensa horizontal",
      "Trabaja las pantorrillas en una posición sentada",
      "Plataforma antideslizante",
      "Sistema de palanca para una resistencia suave y constante"
    ],
    "specifications": {
      "Modelo": "RS-1025",
      dimensiones: "1430 x 1600 x 1377 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "144 kg",
      "peso bruto (W.G.)": "184 kg",
      "músculo trabajado": "Pantorrillas (Gemelos y Sóleo)",
    }
  },

  {
    "id": 162,
    "name": "RS-1026 V Squat",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1026 V Squat.png",
    "alt": "RS-1026 V Squat",
    "description": [
      "RS-1026 V Squat. Esta robusta máquina de sentadillas en V tiene un diseño ergonómico y una trayectoria de movimiento suave y natural.",
      "Está bien acolchada y cuenta con asas para sujetar el peso durante el movimiento. Incluye una palanca de seguridad para sujetar el peso antes y después del ejercicio.",
      "Se pueden colocar discos de pesaje a ambos lados de la máquina, con un ligero espacio de almacenamiento para los discos."
    ],
    "features": [
      "Máquina de sentadilla en V (V-Squat)",
      "Movimiento en arco que reduce la tensión en la espalda y rodillas",
      "Plataforma para pies amplia para diferentes posturas",
      "Hombreras acolchadas y agarres de seguridad"
    ],
    "specifications": {
      "Modelo": "RS-1026",
      dimensiones: "1540 x 1525 x 2165 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "130 kg",
      "peso bruto (W.G.)": "170 kg",
      "músculo trabajado": "Cuádriceps, Glúteos",
    }
  },
  {
    "id": 163,
    "name": "RS-1027C Smith Machine With Power Rack",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros"],
    "image": "/rs/RS-1027C Smith Machine With Power Rack.png",
    "alt": "RS-1027C Smith Machine With Power Rack",
    "description": [
      "RS-1027C Smith Machine With Power Rack. Esta máquina Smith combinada con un rack de potencia es muy resistente y duradera.",
      "Cuenta con numerosas características: rieles de seguridad, pasadores para barras de altura ajustable, barra independiente en una máquina Smith de recorrido recto, dos barras de dominadas con diversas opciones de agarre y clavijas en la parte inferior para sujetar bandas.",
      "También cuenta con seis racks para discos en la parte trasera para un amplio espacio de almacenamiento adicional."
    ],
    "features": [
      "Sistema combinado: Máquina Smith y Jaula de Potencia (Power Rack)",
      "Barra guiada con contrapeso para un movimiento suave en la Smith",
      "Soportes J-cups y brazos de seguridad para uso con barra libre",
      "Barra de dominadas multi-agarre integrada"
    ],
    "specifications": {
      "Modelo": "RS-1027C",
      dimensiones: "2265 x 1695 x 2285 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "185 kg",
      "peso bruto (W.G.)": "225 kg",
      "músculo trabajado": "Cuerpo Completo (Soporte para múltiples ejercicios)",
    }
  },
  {
    "id": 164,
    "name": "RS-1028 Squat and Longe",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1028 Squat and Longe.png",
    "alt": "RS-1028 Squat and Longe",
    "description": [
      "RS-1028 Squat and Longe. Esta robusta máquina permite realizar diversos ejercicios, como zancadas, sentadillas, peso muerto y variantes de remo.",
      "Cada brazo de la máquina carga discos de forma independiente. También cuenta con un compartimento ligero para discos."
    ],
    "features": [
      "Máquina para sentadillas y zancadas (lunges)",
      "Permite un movimiento guiado y seguro para ambos ejercicios",
      "Hombreras acolchadas",
      "Plataforma amplia para una base estable"
    ],
    "specifications": {
      "Modelo": "RS-1028",
      dimensiones: "1347 x 1636 x 1000 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "97 kg",
      "peso bruto (W.G.)": "137 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales",
    }
  },
  {
    "id": 165,
    "name": "RS-1029 Linear Leg Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1029 Linear Leg Press.png",
    "alt": "RS-1029 Linear Leg Press",
    "description": [
      "RS-1029 Linear Leg Press. es una máquina de entrenamiento de fuerza de servicio pesado diseñada específicamente para trabajar la parte inferior del cuerpo, incluyendo cuádriceps, glúteos y femorales.",
      "Este equipo utiliza un sistema de carga de placas (plate-loaded), permitiendo a los usuarios aumentar la resistencia progresivamente y de manera segura. El diseño incluye un mecanismo de carro que se desliza sobre guías lineales, asegurando una trayectoria de movimiento suave y constante durante el ejercicio.",
      "La amplia plataforma texturizada para los pies permite variar la posición de los mismos, facilitando el aislamiento de diferentes grupos musculares de la pierna y promoviendo una activación muscular efectiva."
    ],
    "features": [
      "Prensa de piernas con movimiento lineal",
      "Carro de deslizamiento suave sobre rodamientos lineales",
      "Respaldo y plataforma ajustables",
      "Soportes de almacenamiento de discos integrados"
    ],
    "specifications": {
      "Modelo": "RS-1029",
      dimensiones: "	2212 x 1713 x 1490 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "216 kg",
      "peso bruto (W.G.)": "256 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales",
    }
  },
  {
    "id": 166,
    "name": "RS-1030 Kneeling Leg Curl",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1030 Kneeling Leg Curl.png",
    "alt": "RS-1030 Kneeling Leg Curl",
    "description": [
      "RS-1030 Kneeling Leg Curl. Esta máquina de curl de piernas de rodillas permite a los usuarios aislar una pierna de forma óptima gracias a una almohadilla que se desliza de izquierda a derecha.",
      "Está bien acolchada con rodilleras, protectores para muslos, coderas y espinilleras. Las asas en la parte superior ofrecen soporte durante el movimiento.",
      "Se cargan discos de pesaje a ambos lados de la máquina y cuenta con espacio de almacenamiento adicional."
    ],
    "features": [
      "Máquina de curl femoral de rodillas con carga de discos",
      "Trabaja una pierna a la vez para un aislamiento máximo",
      "Permite una contracción completa del isquiotibial",
      "Apoyos acolchados para el pecho y la rodilla"
    ],
    "specifications": {
      "Modelo": "RS-1030",
      dimensiones: "1632 x 1040 x 1360 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "148 kg",
      "peso bruto (W.G.)": "188 kg",
      "músculo trabajado": "Isquiotibiales",
    }
  },
  {
    "id": 167,
    "name": "RS-1031 Triceps Extension",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Tríceps"],
    "image": "/rs/RS-1031 Triceps Extension.png",
    "alt": "RS-1031 Triceps Extension",
    "description": [
      "RS-1031 Triceps Extension. Esta robusta máquina de extensión de tríceps es robusta y duradera.",
      "Su asiento y almohadillas para los muslos son ajustables a la altura del usuario. La máquina cuenta con almohadillas protectoras en los extremos para proteger el suelo del gimnasio. Se carga con discos de pesaje en ambos lados."
    ],
    "features": [
      "Máquina de extensiones de tríceps sentado con carga de discos",
      "Brazos de movimiento independientes",
      "Respaldo en ángulo para una postura estable",
      "Agarres ergonómicos para reducir la tensión en las muñecas"
    ],
    "specifications": {
      "Modelo": "RS-1031",
      dimensiones: "	1471 x 1510 x 965 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "108 kg",
      "peso bruto (W.G.)": "148 kg",
      "músculo trabajado": "Tríceps",
    }
  },
  {
    "id": 168,
    "name": "RS-1033 Hack Squat",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1033 Hack Squat.png",
    "alt": "RS-1033 Hack Squat",
    "description": [
      "RS-1033 Hack Squat. Esta robusta máquina para sentadillas hack squat es muy robusta y duradera, capaz de soportar cargas muy pesadas con un movimiento suave.",
      "El ángulo de su reposapiés es ajustable y cuenta con varias asas para mayor apoyo durante el ejercicio. Esta máquina se carga con discos de pesas a ambos lados."
    ],
    "features": [
      "Máquina de sentadilla Hack con carga de discos",
      "Plataforma para pies amplia y respaldo en ángulo",
      "Carro de deslizamiento suave con rodamientos de alta resistencia",
      "Mecanismo de seguridad de fácil liberación"
    ],
    "specifications": {
      "Modelo": "RS-1033",
      dimensiones: "2450 x 1410 x 1180 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "135 kg",
      "peso bruto (W.G.)": "175 kg",
      "músculo trabajado": "Cuádriceps, Glúteos",
    }
  },
  {
    "id": 169,
    "name": "RS-1034 Tibial Dorsal Flexion",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas"],
    "image": "/rs/RS-1034 Tibial Dorsal Flexion.png",
    "alt": "RS-1034 Tibial Dorsal Flexion",
    "description": [
      "RS-1034 Tibial Dorsal Flexion. Esta máquina de flexión dorsal de tibia sirve para entrenar el músculo tibial anterior, en la parte delantera de las espinillas.",
      "Es una máquina única, robusta y duradera, perfecta para este propósito. Cuenta con discos de pesaje en ambos lados."
    ],
    "features": [
      "Máquina para flexión dorsal del tobillo",
      "Fortalece el músculo tibial anterior",
      "Ayuda a prevenir lesiones y a mejorar el equilibrio",
      "Diseño de carga de discos simple y efectivo"
    ],
    "specifications": {
      "Modelo": "RS-1034",
      dimensiones: "395 x 1175 x 400 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "20 kg",
      "peso bruto (W.G.)": "60 kg",
      "músculo trabajado": "Tibial Anterior",
    }
  },
  {
    "id": 170,
    "name": "RS-1035 Both Way Squat",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1035 Both Way Squat.png",
    "alt": "RS-1035 Both Way Squat",
    "description": [
      "RS-1035 Both Way Squat. Esta robusta máquina de sentadillas permite realizar movimientos tanto de sentadilla en V como de sentadilla hack.",
      "Está bien acolchada para mayor comodidad al levantar cargas pesadas y cuenta con rieles de seguridad que se controlan con palancas para sostener el peso al comenzar y finalizar el ejercicio. Cuenta con asas junto a las hombreras para mayor agarre durante el ejercicio.",
      "Se pueden colocar discos de pesaje a ambos lados de la máquina, con espacio adicional para guardarlos."
    ],
    "features": [
      "Máquina de sentadilla que permite el movimiento en dos direcciones (frontal y trasera)",
      "Permite realizar sentadillas frontales y sentadillas tipo Hack",
      "Hombreras pivotantes para mayor comodidad",
      "Estructura robusta para uso intensivo"
    ],
    "specifications": {
      "Modelo": "RS-1035",
      dimensiones: "1940 x 1550 x 1565 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "190 kg",
      "peso bruto (W.G.)": "230 kg",
      "músculo trabajado": "Cuádriceps, Glúteos",
    }
  },
  {
    "id": 171,
    "name": "RS-1036 Forearm Tension",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Bíceps"],
    "image": "/rs/RS-1036 Forearm Tension.png",
    "alt": "RS-1036 Forearm Tension",
    "description": [
      "RS-1036 Forearm Tension. Esta máquina cuenta con asas angulares unidas a una articulación pivotante con asas de apoyo en la parte delantera, lo que la hace ideal para entrenar antebrazos y remar a baja altura.",
      "Esta máquina se carga con discos de pesas en la parte delantera."
    ],
    "features": [
      "Máquina para fortalecer el antebrazo y el agarre",
      "Movimiento de enrollado de muñeca contra resistencia",
      "Agarre de diámetro grueso",
      "Carga de discos"
    ],
    "specifications": {
      "Modelo": "RS-1036",
      dimensiones: "1232 x 625 x 980 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "32 kg",
      "peso bruto (W.G.)": "72 kg",
      "músculo trabajado": "Músculos del antebrazo (Flexores y extensores de la muñeca)",
    }
  },
  {
    "id": 172,
    "name": "RS-1037 Abdominal Crunch",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Abdominales"],
    "image": "/rs/RS-1037 Abdominal Crunch.png",
    "alt": "RS-1037 Abdominal Crunch",
    "description": [
      "RS-1037 Abdominal Crunch. Esta máquina para abdominales incluye una espinillera ajustable a la altura del usuario. Los discos se cargan en la parte trasera de la máquina y cuenta con asas para facilitar la ejecución del movimiento.",
      "Incluye un compartimento ligero adicional para discos."
    ],
    "features": [
      "Máquina de encogimientos abdominales con carga de discos",
      "Aísla el recto abdominal",
      "Almohadillas para el pecho y agarres para las manos",
      "Movimiento de arco para una contracción abdominal completa"
    ],
    "specifications": {
      "Modelo": "RS-1037",
      dimensiones: "	1450 x 1300 x 1625 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "103 kg",
      "peso bruto (W.G.)": "143 kg",
      "músculo trabajado": "Recto Abdominal",
    }
  },
  {
    "id": 173,
    "name": "RS-1038 Abductor",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Cadera", "Glúteos"],
    "image": "/rs/RS-1038 Abductor.png",
    "alt": "RS-1038 Abductor",
    "description": [
      "RS-1038 Abductor. Esta máquina de abducción de cadera premium con pesas es duradera y está bien acolchada.",
      "Cuenta con palancas para ajustar la posición inicial y final del ejercicio y asas a ambos lados del asiento.",
      "La pesa se carga en la parte trasera y también incluye un ligero espacio para guardar pesas."
    ],
    "features": [
      "Máquina de abductores con carga de discos",
      "Fortalece la parte externa de la cadera y los glúteos",
      "Brazos de movimiento independientes",
      "Almohadillas ajustables para las piernas"
    ],
    "specifications": {
      "Modelo": "RS-1038",
      dimensiones: "1810 x 1827 x 1285 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "112 kg",
      "peso bruto (W.G.)": "152 kg",
      "músculo trabajado": "Glúteo Medio y Menor",
    }
  },
  {
    "id": 174,
    "name": "RS-1039 Vertical Leg Press",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos"],
    "image": "/rs/RS-1039 Vertical Leg Press.png",
    "alt": "RS-1039 Vertical Leg Press",
    "description": [
      "RS-1039 Vertical Leg Press. Esta prensa vertical de piernas de alta resistencia incluye palancas para ajustar la posición inicial del asiento a la altura del usuario.",
      "Cuenta con rieles de seguridad para soportar el peso antes y después del ejercicio, que se accionan fácilmente con una palanca. Dispone de varias asas para facilitar la entrada y salida de la máquina.",
      "Se pueden cargar discos de pesaje a ambos lados y cuenta con un amplio espacio de almacenamiento adicional para discos de pesaje."
    ],
    "features": [
      "Prensa de piernas vertical",
      "Movimiento directo contra la gravedad para máxima resistencia",
      "Respaldo acolchado y agarres de seguridad",
      "Diseño compacto"
    ],
    "specifications": {
      "Modelo": "RS-1039",
      dimensiones: "	1810 x 1700 x 2155 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "260 kg",
      "peso bruto (W.G.)": "300 kg",
      "músculo trabajado": "Cuádriceps, Glúteos, Isquiotibiales",
    }
  },
  {
    "id": 175,
    "name": "RS-1040 4 Way Neck",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ['Cuello'],
    "image": "/rs/RS-1040 4 Way Neck.png",
    "alt": "RS-1040 4 Way Neck",
    "description": [
      "RS-1040 4 Way Neck. El tubo principal del producto es un tubo ovalado mejorado de 115 x 57 mm y 3 mm de espesor, el diámetro del tubo de la parte móvil es de 48 mm y 2,5 mm de espesor",
      "El cojín y el respaldo están fabricados con esponja de alta densidad, cuya superficie es de cuero engrosado de 2 mm.",
      "Gracias al cable de acero de alta resistencia de 6 mm de diámetro y a la polea de aleación de aluminio, el producto se caracteriza por su suavidad, estabilidad y durabilidad."
    ],
    "features": [
      "Máquina para fortalecer el cuello en 4 direcciones",
      "Permite realizar flexión, extensión y flexión lateral",
      "Almohadilla ajustable para la cabeza",
      "Esencial para atletas de deportes de contacto"
    ],
    "specifications": {
      "Modelo": "RS-1040",
      dimensiones: "995 x 1575 x 1635 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "139 kg",
      "peso bruto (W.G.)": "179 kg",
      "músculo trabajado": "Músculos del cuello (Esternocleidomastoideo, Escalenos, etc.)",
    }
  },
  {
    "id": 176,
    "name": "RS-1041 Olympic Military Bench",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/rs/RS-1041 Olympic Military Bench.png",
    "alt": "RS-1041 Olympic Military Bench",
    "description": [
      "RS-1041 Olympic Military Bench. Este banco robusto está diseñado para máxima seguridad en movimientos de press intenso, con ranuras para barras tanto delante como detrás del usuario.",
      "El banco es fijo y cuenta con pedales de agarre firme en la parte delantera para mayor apoyo. Cuenta con barandillas de seguridad a ambos lados y una plataforma de apoyo en la parte trasera."
    ],
    "features": [
      "Banco para press militar olímpico",
      "Respaldo en posición vertical con soportes para barra olímpica",
      "Plataforma para asistente (spotter)",
      "Asiento ajustable en altura"
    ],
    "specifications": {
      "Modelo": "RS-1041",
      dimensiones: "1640 x 1290 x 1705 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "120 kg",
      "peso bruto (W.G.)": "160 kg",
      "músculo trabajado": "Soporte para press de hombros con barra",
    }
  },
  {
    "id": 177,
    "name": "RS-1042 Chin Up",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Espalda", "Bíceps"],
    "image": "/rs/RS-1042 Chin Up.png",
    "alt": "RS-1042 Chin Up",
    "description": [
      "RS-1042 Chin Up. Esta estación de dominadas y fondos es robusta, duradera y apta para uso frecuente.",
      "Su base robusta y su diseño duradero garantizan que los usuarios puedan realizar variaciones con peso con total confianza.",
      "Esta máquina está completamente acolchada e incluye múltiples asas que permiten entrenar dominadas, fondos y elevaciones de piernas colgado. El revestimiento de goma de las empuñaduras permite colocarse en posición sin resbalar."
    ],
    "features": [
      "Estación de dominadas (Chin-ups y Pull-ups)",
      "Agarres múltiples (ancho, estrecho, neutro)",
      "Estructura robusta y estable",
      "Escalones para un fácil acceso"
    ],
    "specifications": {
      "Modelo": "RS-1042",
      dimensiones: "1395 x 1160 x 2265 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "109 kg",
      "peso bruto (W.G.)": "149 kg",
      "músculo trabajado": "Dorsales, Bíceps, Espalda Alta",
    }
  },
  {
    "id": 178,
    "name": "RS-1043 Olympic Power Rack",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros"],
    "image": "/rs/RS-1043 Olympic Power Rack.png",
    "alt": "RS-1043 Olympic Power Rack",
    "description": [
      "RS-1043 Olympic Power Rack. Este robusto rack olímpico de potencia tiene un diseño versátil y es ideal para uso intensivo.",
      "Cuenta con zonas para colocar la barra tanto en la parte delantera como trasera. También se pueden usar para fijar rieles en la parte inferior para mayor seguridad al levantar.",
      "Las plataformas inferiores permiten alcanzar la barra de dominadas en ángulo alto o para apoyarla. Este rack también cuenta con un amplio espacio de almacenamiento para discos."
    ],
    "features": [
      "Jaula de potencia olímpica (Power Rack)",
      "Proporciona un entorno seguro para sentadillas, press de banca, etc.",
      "Soportes J-cups y barras de seguridad ajustables",
      "Barra de dominadas integrada"
    ],
    "specifications": {
      "Modelo": "RS-1043",
      dimensiones: "1545 x 1853 x 2400 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "162 kg",
      "peso bruto (W.G.)": "202 kg",
      "músculo trabajado": "Soporte para ejercicios de cuerpo completo",
    }
  },
  {
    "id": 179,
    "name": "RS-1044 Half Rack",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros"],
    "image": "/rs/RS-1044 Half Rack.png",
    "alt": "RS-1044 Half Rack",
    "description": [
      "RS-1044 Half Rack. Este medio rack es robusto y duradero, ideal para cargas muy pesadas.",
      "Cuenta con rieles de seguridad de altura ajustable, pasadores de altura ajustable para sujetar la barra y una barra de dominadas con varias asas.",
      "Incluye un amplio espacio de almacenamiento adicional para discos de pesas."
    ],
    "features": [
      "Media jaula de potencia (Half Rack)",
      "Diseño más compacto que una jaula completa",
      "Brazos de seguridad para un entrenamiento seguro en solitario",
      "Soportes de almacenamiento de discos"
    ],
    "specifications": {
      "Modelo": "RS-1044",
      dimensiones: "1455 x 1650 x 2370 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "137 kg",
      "peso bruto (W.G.)": "177 kg",
      "músculo trabajado": "Soporte para ejercicios de cuerpo completo",
    }
  },
  {
    "id": 180,
    "name": "RS-1045 Power Cage",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros"],
    "image": "/rs/RS-1045 Power Cage.png",
    "alt": "RS-1045 Power Cage",
    "description": [
      "RS-1045 Power Cage. Equipo esencial de entrenamiento de peso libre diseñado para la máxima seguridad al realizar levantamientos pesados.",
      "Su estructura de acero de gran calibre proporciona una base estable y robusta, fundamental para ejercicios compuestos como la sentadilla, el press de banca o el press militar. La jaula incluye ganchos y barras de seguridad (spotter pins) ajustables en altura que permiten al usuario entrenar con barras olímpicas de forma segura dentro del rack. En la parte superior, incorpora una barra de dominadas multi-agarre que permite realizar pull-ups y chin-ups con diversas anchuras, ampliando las opciones de entrenamiento del tren superior."
    ],
    "features": [
      "Jaula de potencia (Power Cage)",
      "Estructura de cuatro postes para máxima seguridad y estabilidad",
      "Múltiples puntos de ajuste para soportes y barras de seguridad",
      "Ideal para levantadores de pesas serios"
    ],
    "specifications": {
      "Modelo": "RS-1045",
      dimensiones: "1270 x 1315 x 2365 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "157 kg",
      "peso bruto (W.G.)": "197 kg",
      "músculo trabajado": "Soporte para ejercicios de cuerpo completo",
    }
  },
  {
    "id": 181,
    "name": "RS-1046 Power Cage",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros"],
    "image": "/rs/RS-1046 Power Cage.png",
    "alt": "RS-1046 Power Cage",
    "description": [
      "RS-1045 Power Cage. Equipo esencial de entrenamiento de peso libre diseñado para la máxima seguridad al realizar levantamientos pesados.",
      "Su estructura de acero de gran calibre proporciona una base estable y robusta, fundamental para ejercicios compuestos como la sentadilla, el press de banca o el press militar. La jaula incluye ganchos y barras de seguridad (spotter pins) ajustables en altura que permiten al usuario entrenar con barras olímpicas de forma segura dentro del rack. En la parte superior, incorpora una barra de dominadas multi-agarre que permite realizar pull-ups y chin-ups con diversas anchuras, ampliando las opciones de entrenamiento del tren superior."
    ],
    "features": [
      "Variante de la jaula de potencia",
      "Puede incluir accesorios adicionales como estación de fondos (dips)",
      "Construcción de acero de alto calibre",
      "Perfecta para el entrenamiento de fuerza pesado"
    ],
    "specifications": {
      "Modelo": "",
      dimensiones: "1270 x 1315 x 2365 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "157 kg",
      "peso bruto (W.G.)": "197 kg",
      "músculo trabajado": "Soporte para ejercicios de cuerpo completo",
    }
  },
  {
    "id": 182,
    "name": "RS-1047 Multi Function Power Cage",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Pecho", "Hombros", "Espalda"],
    "image": "/rs/RS-1047 Multi Function Power Cage.png",
    "alt": "RS-1047 Multi Function Power Cage",
    "description": [
      "RS-1047 Multi Function Power Cage. Esta robusta jaula Multi Power es muy robusta y duradera, ideal para uso frecuente con pesas libres pesadas.",
      "Cuenta con rieles de seguridad ajustables para la sujeción y pasadores para la barra. Incluye una barra de dominadas ancha con diferentes agarres y una segunda barra inferior ideal para dominadas o para colgar bandas de resistencia.",
      "Dispone de un amplio espacio de almacenamiento adicional para discos de pesas con 8 soportes."
    ],
    "features": [
      "Jaula de potencia multifuncional",
      "Integra sistema de poleas (alta y baja) para jalones y remos",
      "Combina la seguridad de una jaula con la versatilidad de las poleas",
      "Solución de entrenamiento todo en uno"
    ],
    "specifications": {
      "Modelo": "RS-1047",
      dimensiones: "1735 x 2200 x 2355 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "191 kg",
      "peso bruto (W.G.)": "231 kg",
      "músculo trabajado": "Soporte para ejercicios de cuerpo completo",
    }
  },
  {
    "id": 183,
    "name": "RS-1048 Pectoral Machine",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Pecho"],
    "image": "/rs/RS-1048 Pectoral Machine.png",
    "alt": "RS-1048 Pectoral Machine",
    "description": [
      "RS-1048 Pectoral Machine. Esta máquina inclinada para levantamiento de pecho tiene un diseño ergonómico y un movimiento suave. Sus mangos giran durante el ejercicio para adaptarse al movimiento natural del usuario.",
      "Una palanca debajo del asiento permite ajustar la altura del usuario. La máquina cuenta con pesas a ambos lados y es apta para entrenamiento bilateral y unilateral."
    ],
    "features": [
      "Máquina de contractor de pecho con carga de discos",
      "Brazos independientes para un movimiento isolateral",
      "Asiento y almohadillas ajustables",
      "Movimiento de arco para una máxima contracción pectoral"
    ],
    "specifications": {
      "Modelo": "RS-1048",
      dimensiones: "1515 x 1443 x 1015 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "80 kg",
      "peso bruto (W.G.)": "120 kg",
      "músculo trabajado": "Pectoral",
    }
  },
  {
    "id": 184,
    "name": "RS-1049 Buttock Bridge",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Glúteos"],
    "image": "/rs/RS-1049 Buttock Bridge.png",
    "alt": "RS-1049 Buttock Bridge",
    "description": [
      "RS-1049 Buttock Bridge. Esta robusta máquina de puente de glúteos es perfecta para entrenar glúteos con intensidad, con la máxima comodidad y estabilidad.",
      "En lugar de usar una barra o almohadilla tradicional para levantar el peso, los usuarios se colocan un cinturón sobre las caderas. Su amplio reposapiés fijo está inclinado para un amplio rango de movimiento y una mejor distribución del movimiento.",
      "Los discos de pesas se cargan a ambos lados de la máquina."
    ],
    "features": [
      "Máquina para puente de glúteos (Hip Thrust) con carga de discos",
      "Cinturón acolchado para un apoyo cómodo sobre la cadera",
      "Plataforma amplia para los pies",
      "Aísla y desarrolla los glúteos de forma efectiva y segura"
    ],
    "specifications": {
      "Modelo": "RS-1049",
      dimensiones: "1600 x 1520 x 800 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "95 kg",
      "peso bruto (W.G.)": "135 kg",
      "músculo trabajado": "Glúteos, Isquiotibiales",
    }
  },
  {
    "id": 185,
    "name": "RS-1050 Standing Lateral Rise Rear Deltoid",
    "primaryCategory": "RS",
    status: "in-stock",
    "subCategories": ["Hombros"],
    "image": "/rs/RS-1050 Standing Lateral Rise Rear Deltoid.png",
    "alt": "RS-1050 Standing Lateral Rise Rear Deltoid",
    "description": [
      "RS-1050 Standing Lateral Rise Rear Deltoid. Esta robusta máquina para deltoides laterales/posteriores está diseñada para realizar elevaciones de pie y sentado en lados opuestos.",
      "Cada brazo de la máquina está equipado con discos de pesas, lo que la hace ideal para entrenamiento bilateral o isolateral. Las asas también permiten un movimiento natural durante el ejercicio."
    ],
    "features": [
      "Máquina para elevaciones laterales y pájaros de pie",
      "Brazos pivotantes para un movimiento natural",
      "Apoyo para el pecho para aislar el deltoides",
      "Carga de discos"
    ],
    "specifications": {
      "Modelo": "RS-1050",
      dimensiones: "2000 x 824 x 1655 mm",
      "placas (Weight Stack)": " -",
      "peso neto (N.W.)": "175 kg",
      "peso bruto (W.G.)": "215 kg",
      "músculo trabajado": "Deltoides Medial y Posterior",
    }
  },

 // equipo cardio
  {
    "id": 186,
    "name": "RCT-900M Commercial Treadmill Led Screen 4hp",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Cardio"], // Añadido Cardio para consistencia
    "image": "/cardio/RCT-900M Commercial Treadmil Led Screen 4hp.png",
    "alt": "RCT-900M Commercial Treadmill Led Screen 4hp",
    "description": [
      "RCT-900M Commercial Treadmill. Una cinta de correr potente y duradera es esencial en cualquier gimnasio.",
      "Tiene ajustes de inclinación, una velocidad máxima de 20 km/h y más de 30 programas para elegir y disfrutar de una variedad de estímulos.",
      "Su pantalla LED muestra el tiempo, la distancia, la inclinación, la velocidad, la frecuencia cardíaca y las calorías quemadas, e incluye funciones de parada automática y de emergencia."
    ],
    "features": [
      "Motor de corriente alterna de 4 HP para uso comercial intensivo",
      "Pantalla LED de fácil lectura con métricas de entrenamiento",
      "Amplia superficie de carrera con sistema de amortiguación",
      "Ajuste electrónico de velocidad e inclinación"
    ],
    "specifications": {
      "modelo": "RCT-900M",
      "dimensiones": "2170 x 930 x 1650 mm",
      "peso neto (N.W.)": "230 kg",
      "peso bruto (W.G.)": "260 kg",
      "músculo trabajado": "Cardiovascular, Piernas (Cuádriceps, Isquiotibiales, Glúteos)"
    }
  },
  {
    "id": 187,
    "name": "RE-6600R Recumbent Bike",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Cardio"],
    "image": "/cardio/RE-6600R Recumbent Bike.png",
    "alt": "RE-6600R Recumbent Bike",
    "description": [
      "RE-6600R Recumbent Bike. Esta bicicleta reclinada ofrece gran comodidad gracias a su asiento acolchado y ajustable en altura.",
      "Incluye varias pantallas en su consola, como velocidad, tiempo, distancia, calorías, vatios, temperatura y pulso e incluye 32 niveles de resistencia",
    ],
    "features": [
      "Bicicleta reclinada para un ejercicio de bajo impacto",
      "Asiento ergonómico con respaldo para soporte lumbar",
      "Ajuste de asiento de fácil acceso",
      "Múltiples niveles de resistencia magnética"
    ],
    "specifications": {
      "modelo": "RE-6600R",
      "dimensiones": "1520 x 585 x 1130 mm",
      "peso neto (N.W.)": "89 kg",
      "peso bruto (W.G.)": "92 kg",
      "músculo trabajado": "Cardiovascular, Piernas (bajo impacto)"
    }
  },
  {
    "id": 188,
    "name": "RE-6600U Upright Bike",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Cardio"],
    "image": "/cardio/RE-6600U Upright Bike.png",
    "alt": "RE-6600U Upright Bike",
    "description": [
      "RE-6600U Upright Bike. Esta bicicleta estática ofrece gran comodidad gracias a su asiento acolchado y ajustable en altura.",
      "Incluye varias pantallas en su consola, como velocidad, tiempo, distancia, calorías, vatios, temperatura y pulso e incluye 32 niveles de resistencia.",
    ],
    "features": [
      "Bicicleta estática vertical para una posición de ciclismo tradicional",
      "Asiento y manillar ajustables (altura y profundidad)",
      "Sistema de resistencia electromagnética",
      "Consola con programas de entrenamiento preestablecidos"
    ],
    "specifications": {
      "modelo": "RE-6600U",
      "dimensiones": "1120 x 580 x 1460 mm",
      "peso neto (N.W.)": "69 kg",
      "peso bruto (W.G.)": "85 kg",
      "músculo trabajado": "Cardiovascular, Piernas, Glúteos"
    }
  },
  {
    "id": 189,
    "name": "RS-260 Spinning Bike",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Cardio"],
    "image": "/cardio/RS-260 Spinning Bike.png",
    "alt": "RS-260 Spinning Bike",
    "description": [
      "RS-260 Spinning Bike. Esta bicicleta de spinning está diseñada para durar, con su resistente y duradero marco de acero sólido de 2,5 mm de grosor y su diseño robusto.",
      "Incluye asiento y manillares ajustables según la altura del usuario.",
    ],
    "features": [
      "Bicicleta de spinning para entrenamiento de alta intensidad",
      "Volante de inercia pesado para un pedaleo suave y constante",
      "Sistema de resistencia por fricción o magnético",
      "Manillar y sillín con micro-ajustes para una ergonomía perfecta"
    ],
    "specifications": {
      "modelo": "RS-260",
      "dimensiones": "1145 x 630 x 970 mm",
      "peso neto (N.W.)": "58 kg",
      "peso bruto (W.G.)": "60 kg",
      "músculo trabajado": "Cardiovascular de alta intensidad, Piernas, Glúteos"
    }
  },
  {
    "id": 190,
    "name": "RS-800 Stair Mill",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Cardio"],
    "image": "/cardio/RS-800 Stair Mill.png",
    "alt": "RS-800 Stair Mill",
    "description": [
      "RS-800 Stair Mill. Ofrece todas las ventajas de una cinta de escaleras eléctrica sin los elevados costes de mantenimiento. Además, al no tener cables, se puede reubicar fácilmente en todo el gimnasio.",
      "Tiene un diseño elegante y robusto, 16 velocidades diferentes y una pantalla LED con monitor de pulso.",
      "Ofrezca a sus miembros la misma experiencia de usuario excepcional que esperan de cualquier cinta de escaleras eléctrica de alta gama, a la vez que ahorra una fortuna en gastos de mantenimiento."
    ],
    "features": [
      "Simulador de escaleras con escalones giratorios",
      "Ejercicio cardiovascular de alta intensidad y bajo impacto",
      "Pasamanos ergonómicos para mayor seguridad",
      "Panel de control con diversos programas de entrenamiento"
    ],
    "specifications": {
      "modelo": "RS-800",
      "dimensiones": "1570 x 760 x 2270 mm",
      "peso neto (N.W.)": "260 kg",
      "peso bruto (W.G.)": "300 kg",
      "músculo trabajado": "Cardiovascular, Glúteos, Cuádriceps, Pantorrillas"
    }
  },
  {
    "id": 191,
    "name": "RS-6600E Elliptical",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Glúteos", "Bíceps", "Tríceps", "Cardio"],
    "image": "/cardio/RS-6600E Elliptical.png",
    "alt": "RS-6600E Elliptical",
    "description": [
      "RS-6600E Elliptical. Ofrece un entrenamiento cardiovascular de cuerpo completo y de bajo impacto, ideal para usuarios de todos los niveles. Su movimiento fluido y natural protege las articulaciones mientras activa eficazmente tanto el tren inferior como el superior.",
      "Gracias a sus manillares móviles y múltiples niveles de resistencia, permite un ejercicio integral que fortalece piernas, glúteos y brazos simultáneamente. Es la máquina perfecta para mejorar la resistencia y quemar calorías de forma eficiente y segura.",
    ],
    "features": [
      "Máquina elíptica para un entrenamiento de cuerpo completo",
      "Manillares móviles para trabajar el tren superior",
      "Movimiento elíptico suave y natural que minimiza el impacto articular",
      "Niveles de resistencia ajustables y programas de entrenamiento"
    ],
    "specifications": {
      "modelo": "RS-6600E",
      "dimensiones": "2130 x 670 x 1780 mm",
      "peso neto (N.W.)": "100 kg",
      "peso bruto (W.G.)": "120 kg",
      "músculo trabajado": "Cardiovascular (Cuerpo completo), Piernas, Glúteos, Brazos"
    }
  },
  {
    "id": 192,
    "name": "RTC-900A Commercial Treadmill Touch Screen",
    "primaryCategory": "Cardio",
    status: "in-stock",
    "subCategories": ["Piernas", "Cardio"],
    "image": "/cardio/RTC-900A Commercial Treadmill Touch Screen.png",
    "alt": "RTC-900A Commercial Treadmill Touch Screen",
    "description": [
      "RTC-900A Commercial Treadmill Touch Screen. Su pantalla LCD interactiva cuenta con 32 programas, incluyendo experiencias virtuales de caminata/carrera, con una amplia variedad de escenas que los usuarios pueden elegir, incluyendo configuraciones de montaña y colina.",
      "La pantalla también muestra el tiempo, la distancia, la inclinación, la velocidad, la frecuencia cardíaca y las calorías quemadas. Además, es compatible con USB y MP3.",
      "Dispone de 5 niveles de inclinación con una pendiente de hasta el 20 % y una velocidad máxima de 20 km/h."
    ],
    "features": [
      "Caminadora comercial de alta gama con pantalla táctil",
      "Consola interactiva con aplicaciones, internet y recorridos virtuales",
      "Motor potente y silencioso",
      "Sistema de inclinación y declinación para simular terrenos variados"
    ],
    "specifications": {
      "modelo": "RTC-900A",
      "dimensiones": "2170 x 930 x 1650 mm",
      "peso neto (N.W.)": "230 kg",
      "peso bruto (W.G.)": "260 kg",
      "músculo trabajado": "Cardiovascular, Piernas (Cuádriceps, Isquiotibiales, Glúteos)"
    }
  }

];
export const primaryCategories = [
  'Todos',
  'LD',
  'M2',
  'M3',
  'M7',
  'RS',
  'FM',
  'FW',
  'PF',
  'Cardio',
];

export const subCategories = [
  'Todos',
  'Pecho',
  'Hombros',
  'Bíceps',
  'Tríceps',
  'Espalda',
  'Piernas',
  'Glúteos',
  'Abdominales',
  'Cadera',
  'Cuello', 
  'Accesorios'
];