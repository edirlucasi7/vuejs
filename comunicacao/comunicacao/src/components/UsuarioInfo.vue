<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>O nome do usuário é: <strong>{{ inverterNome() }}</strong></p>
        <button @click="retornarNome">Retornar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            // default: function() {
            //     return Array(10).fill(0).join(', ')
            // }
            default: 'Anônimo'
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
            this.nome = 'Pedro'
            this.$emit('NomeMudou', {
                novo: this.nome,
                antigo
            })
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
