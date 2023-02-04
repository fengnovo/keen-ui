import * as Components from '../packages';
const { name, version } = require('../package.json');


const install = (app) => {
    Object.keys(Components).forEach(item => app.use(Components[item]))
}
export * from '../packages'

export default {
    name,
    version,
    install,
    ...Components
}
