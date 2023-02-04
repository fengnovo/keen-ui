import KMain from './Main.vue'
KMain.install = (app) => {
    app.component(KMain.name, KMain)
}

export const Main = KMain

export default Main