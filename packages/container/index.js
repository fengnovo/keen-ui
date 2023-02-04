import KContainer from './Container.vue'
KContainer.install = (app) => {
    app.component(KContainer.name, KContainer)
}

export const Container = KContainer

export default Container