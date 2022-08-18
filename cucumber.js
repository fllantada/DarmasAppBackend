const common = [
  '--require-module ts-node/register' // Load TypeScript module ejecuta typescript sin tener q transpilarlo.
];

const sedes = [
  ...common,
  'tests/apps/sedes/sedes/*.feature',
  '--require tests/apps/sedes/sedes/step_definitions/*.steps.ts'
].join(' ');

const liquidaciones = [
  ...common,
  'tests/apps/liquidaciones/features/postLiquidaciones/*.feature',
  '--require tests/apps/liquidaciones/features/postLiquidaciones/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  sedes,
  liquidaciones
};
