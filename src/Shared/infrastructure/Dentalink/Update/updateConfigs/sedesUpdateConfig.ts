import { UpdateConfig } from './updateConfigInterface';

export const sedesUpdateConfig = (): UpdateConfig => ({
  config: {
    url: '/sucursales',
    filters: {
      habilitada: { eq: 1 }
    }
  },
  maper: (sedes: any) => {
    const sedesMapeadas = sedes.map((sede: any) => ({
      id_dentalink: sede.id,
      name: sede.nombre,
      direccion: sede.direccion,
      citas: sede.links[2].href,
      cajas: sede.links[1].href
    }));

    return sedesMapeadas;
  }
});
