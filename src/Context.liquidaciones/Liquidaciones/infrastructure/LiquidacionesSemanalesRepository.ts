export class LiquidacionesSemanalesRepository {
  private dates: any;
  private dataBase: any;
  constructor(mongoRepository: any, datesRepository: any) {
    this.dates = datesRepository;
    this.dataBase = mongoRepository;
  }

  async getPagosSemanales(): Promise<any> {
    console.log('Inicio pagos');
    const filter = {
      fecha_recepcion: {
        $gte: this.dates.lunesSemanaAnterior()
      },
      fecha_vencimiento: {
        $lte: this.dates.lunesEstaSemana()
      }
    };

    console.log('Llamo a la database metodo find');
    const pagos = await this.dataBase.find('Pagos', filter);
    return pagos;
  }
  async getLiquidacionesSemanales(): Promise<any> {
    const filter = {
      $and: [
        { fecha_termino: { $lt: this.dates.lunesEstaSemana() } },
        { fecha_termino: { $gte: this.dates.lunesSemanaAnterior() } }
      ]
    };
    const liquidaciones = this.dataBase.find('Liquidaciones', filter);
    return liquidaciones;
  }

  async getSedes(): Promise<any> {
    const sedes = this.dataBase.find('Sedes');
    return sedes;
  }
}
