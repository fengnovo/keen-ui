import KButton from './Button.vue'
KButton.install = (app) => {
    app.component(KButton.name, KButton)
}

export const Button = KButton

export default Button