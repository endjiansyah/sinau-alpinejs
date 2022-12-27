Alpine.data('huanjay', () => ({
    open: false,
    name: 'hilih',
    duit: '',
    list: ['ucup', 'anjay'],
    object: { key: 'value', a: 'anjay', duid: 5000 },
    html: '<i>anjay</i>',
    weruh: false,
    show: false,

    objek: [
        {
            name: 'halah',
            gender: 'l',
            age: '11'
        },
        {
            name: 'hilih',
            gender: 'p',
            age: '15'
        },
        {
            name: 'heleh',
            gender: 'p',
            age: '14'
        },
        {
            name: 'huluh',
            gender: 'l',
            age: '24'
        },
        {
            name: 'holoh',
            gender: 'l',
            age: '35'
        },
    ],


    users: [],
    isLoading: false,
    fetchingdata() {
        this.isLoading = true;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(async (response) => {
                this.users = await response.json()
                this.isLoading = false
            })
        // .catch((error) => { })
    }
}))

Alpine.store('njirr', {
    on: false,

    toggle() {
        this.on = !this.on
    }

})

