import KHeader from './Header.vue'
KHeader.install = (app) => {
    app.component(KHeader.name, KHeader)
}

export const Header = KHeader

export default Header