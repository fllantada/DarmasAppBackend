import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

//Mi inyeccion de dependencias

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV || 'dev';

//Le digo que leer a loader en este caso lee aplication
loader.load(`${__dirname}/application_${env}.yaml`);

export default container;

//Dependiendo de el NODEenv en el que estamos corriendo, lea el archivo application_dev.yaml o application_prod.yaml
