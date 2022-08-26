"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidacionSemanalSedeCreator = void 0;
class LiquidacionSemanalSedeCreator {
    constructor(nombreSucursal, idSucursal, fechaInicio, fechaFin) {
        this.idDentistas = [];
        this.Efectivo = 0;
        this['Mercadopago Dar Mas'] = 0;
        this.Bono = 0;
        this['Mercadopago Especialista'] = 0;
        this.liquidacion = 0;
        this.links = [];
        this.nombreSucursal = nombreSucursal;
        this.idSucursal = idSucursal;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    agregarPago(pago) {
        switch (pago.medio_pago) {
            case 'Efectivo':
                this.Efectivo += pago.monto;
                break;
            case 'Mercadopago Dar Mas':
                this['Mercadopago Dar Mas'] += pago.monto;
                break;
            case 'Bono':
                this.Bono += pago.monto;
                break;
            case 'Mercadopago Especialista':
                this['Mercadopago Especialista'] += pago.monto;
                break;
        }
    }
    agregarLiquidacion(liquidacion) {
        const dentista = liquidacion.id_dentista;
        if (!this.idDentistas.includes(dentista)) {
            this.idDentistas.push(dentista);
        }
        this.liquidacion += liquidacion.monto;
        if (liquidacion.link_detalle) {
            this.links.push(liquidacion.link_detalle);
        }
    }
    getResumenLiquidacion() {
        return {
            nombre_sucursal: this.nombreSucursal,
            id_sucursal: this.idSucursal,
            id_dentistas: this.idDentistas,
            fecha_inicio: this.fechaInicio,
            fecha_fin: this.fechaFin,
            Efectivo: this.Efectivo,
            'Mercadopago Dar Mas': this['Mercadopago Dar Mas'],
            Bono: this.Bono,
            'Mercadopago Especialista': this['Mercadopago Especialista'],
            liquidacion: this.liquidacion,
            links: this.links
        };
    }
}
exports.LiquidacionSemanalSedeCreator = LiquidacionSemanalSedeCreator;
