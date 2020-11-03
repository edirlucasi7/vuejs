new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: 'destaque',
		aplicarCSS1: true,
		usuarioAplicarClasse: '',
		aplicarClasseInformada: '',
		usuarioCSSTrueFasle: false,
		cor: '',
		estiloCor: {
			width: '100px',
			height: '100px'
		}, 
		width: '0'
	},	
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicarEfeito = this.aplicarEfeito == 'destaque' ? 'encolher' : 
				'destaque'
			}, 1000)			
		},
		aplicar() {
			const event = document.querySelector('.event')
			if(event.value == "true") {
				this.usuarioCSSTrueFasle = true
			} else if(event.value == "false") {
				this.usuarioCSSTrueFasle = false
			}
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5	
				console.log(valor)
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador) 
			}, 1000)

		}
	}
})
