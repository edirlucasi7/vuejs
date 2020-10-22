new Vue({
  el: '#desafio',
  data: {
    nome: 'Edir Lucas Icety',
    idade: 24,
    imagem: 'https://avatars2.githubusercontent.com/u/28410756?v=4'
  },
  methods: {
    idadeMultiplicada() {
      return this.idade * 3
    },
    gerarNumero: function() {
      return Math.random()
    }
  }
})