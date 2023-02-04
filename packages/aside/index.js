import KAside from './Aside.vue'
KAside.install = (app) => {
    app.component(KAside.name, KAside)
}

export const Aside = KAside

export default Aside