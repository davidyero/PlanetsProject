export interface Planet {
  id: string;               // Identificador único del planeta
  name: string;             // Nombre del planeta
  isPlanet: boolean;        // Confirma que es un planeta
  moons: Moon[] | null;     // Lista de lunas, si las tiene
  semimajorAxis: number;    // Semieje mayor de la órbita en km
  perihelion: number;       // Perihelio de la órbita en km
  aphelion: number;         // Afelio de la órbita en km
  eccentricity: number;     // Excentricidad de la órbita
  inclination: number;      // Inclinación de la órbita en grados
  mass: {
    massValue: number;      // Valor de la masa
    massExponent: number;   // Exponente de la masa
  };
  vol: {
    volValue: number;       // Valor del volumen
    volExponent: number;    // Exponente del volumen
  };
  density: number;          // Densidad en g/cm³
  gravity: number;          // Gravedad en m/s²
  escape: number;           // Velocidad de escape en km/s
  meanRadius: number;       // Radio medio en km
  equaRadius: number;       // Radio ecuatorial en km
  polarRadius: number;      // Radio polar en km
  discoveryDate: string;    // Fecha de descubrimiento, si aplica
  discoveredBy: string;     // Descubierto por, si aplica
  alternativeName: string;  // Nombre alternativo, si aplica
}

interface Moon {
  moon: string;             // Nombre de la luna
  rel: string;              // URL relativa de la luna en la API
}
