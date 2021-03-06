<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>O nome do usuário é: <strong>{{ inverterNome() }}</strong></p>
        <p>A idade do usuário é: <strong>{{ idade }}</strong></p>
        <button @click="retornarNome">Retornar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
       
    </div>
</template>

<script>
// import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            // required: true,
            // default: function() {
            //     return Array(10).fill(0).join(', ')
            // }
            default: 'Anônimo'
        },
        reiniciarFn: Function,
        idade: {
            type: Number,
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        }, 
        retornarNome() {
            const antigo = this.nome
            this.$emit('nomeMudou', {
                novo: 'Pedro',
                antigo
            })
            // this.$emit('NomeMudou', 'Pedro')
        },
    },
    // created() {
    //     barramento.quandoIdadeMudar(idade => {
    //         this.idade = idade
    //     })
    // }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
