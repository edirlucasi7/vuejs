new Vue({
  el: '#projeto01',
  data: {
    iniciarJogo: false,
    vidaJogador: 100,
    vidaMonstro: 100,
    logs: []
  },
  computed: {
    hasResult() {
      return this.vidaJogador == 0 || this.vidaMonstro == 0
    }
  },
  methods: {
    começarJogo() {
      this.iniciarJogo = true
      this.vidaJogador = 100
      this.vidaMonstro = 100
      this.logs = []
    },
    atacar(especial) {
      this.machucar('vidaJogador', false, 7, 12, 'Monstro', 'Jogador', 'monstroLogs')
      if (this.vidaJogador > 0) {
        this.machucar('vidaMonstro', especial, 5, 10, 'Jogador', 'Monstro', 'jogadorLogs')
      }
    },
    curar() {
      if (this.vidaJogador < 100) { 
        this.renovar('vidaJogador', 5, 10, 'Jogador', 'jogadorLogs')
      }
      if (this.vidaMonstro < 100) {
        this.renovar('vidaMonstro', 3, 8, 'Monstro', 'monstroLogs')
      }
    },
    machucar(prop, especial, min, max, fonte, alvo, cls) {
      const plus = especial ? 7 : 0
      const machucar = this.obterNumeroAleatorio(min + plus, max + plus)
      this[prop] = Math.max(this[prop] - machucar, 0)
      this.registrarLogs(`O ${fonte} atacou o ${alvo} com ${machucar}.`, cls)
    },
    renovar(prop, min, max, fonte, cls) {
      const renovar = this.obterNumeroAleatorio(min, max)
      this[prop] = Math.min(this[prop] + renovar, 100)
      this.registrarLogs(`O ${fonte} ganhou vida de ${renovar}.`, cls)
    },
    obterNumeroAleatorio(min, max) {
      const value = Math.floor(Math.random() * (max - min) + min)
      return Math.round(value)
    },
    registrarLogs(text, cls) {
      this.logs.unshift({text, cls})
    }
  },
  watch: {
    hasResult(value) {
      if (value) return this.iniciarJogo = false
    }
  }
})