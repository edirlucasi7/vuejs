<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>A Idade do usuário é: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar idade nos compoentes filhos</button>
    </div>
</template>

<script>
// import barramento from '@/barramento'

export default {
    props: ['idade'],
     data() {
        return {
            
        }
    },
    methods: {
        alterarIdade() {
            this.$emit('idadeMudou', 25)
            // this.idade = 25
            // barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
