// ⚠️ Actualizá los precios acá. Se reflejan automáticamente en todo el sitio.

export const PRICES = {
  salas: {
    laSolari: {
      name: "La Solari",
      pricePerHour: 25000,
      currency: "ARS",
      minimumHours: 2,
      extras: ["Se puede alquilar platos"],
    },
    laMercedes: {
      name: "La Mercedes",
      pricePerHour: 25000,
      currency: "ARS",
      minimumHours: 2,
      extras: ["Se puede alquilar platos"],
    },
  },
  clases: {
    canto: {
      individual: {
        label: "Individual",
        duration: "1hs",
        description: "Clase personalizada según tu nivel y objetivos",
        firstClassFree: true,
        price: null, // consultar
      },
      compartida: {
        label: "Compartida",
        duration: "1hs",
        description:
          "Grupos de 2 o 3 compañeros según edad, nivel y objetivos. " +
          "Entrenamiento individual con aprendizaje integral observando " +
          "el proceso de tus compañeros. Arancel económico.",
        firstClassFree: true,
        price: null, // consultar
      },
    },
    instrumento: {
      available: ["Guitarra", "Bajo", "Piano", "Batería"],
      price: null, // consultar
    },
  },
}
