const common = [
  '--require-module ts-node/register' // Load TypeScript module ejecuta typescript sin tener q transpilarlo.
];

const mooc_backend = [
  ...common,
  'tests/apps/mooc/backend/features/**/*.feature',
  '--require tests/apps/mooc/backend/features/step_definitions/*.steps.ts'
].join(' ');

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
  mooc_backend,
  sedes,
  liquidaciones
};
