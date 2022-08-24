import { UpdateConfig } from './updateConfigInterface';

export const sedesUpdateConfig = (): UpdateConfig => {
  return {
    config: {
      url: '/sucursales',
      filters: {
        habilitada: { eq: 1 }
      }
    },
    maper: (sedes: any) => {
      let sedesMapeadas = sedes.data.map((sede: any) => {
        return {
          id_dentalink: sede.id,
          name: sede.nombre,
          direccion: sede.direccion,
          citas: sede.links[2].href,
          cajas: sede.links[1].href
        };
      });

      return sedesMapeadas;
    }
  };
};
