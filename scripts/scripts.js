class Curso {
	constructor(nome, categoria, link, escola, carga) {
		this.nome = nome;
		this.categoria = categoria;
		this.link = link;
		this.escola = escola;
		this.carga = carga;
		this.container;
		this.imagem;
		
		if (this.categoria == "informatica") {
			this.imagem = "images/informatica.jpg"
			this.container = document.querySelector("#informatica")
			
		} else if (this.categoria == "gestao") {
			this.imagem = "images/gestao.jpg"
			this.container = document.querySelector("#gestao")
		}
		else if (this.categoria == "tecnologia") {
			this.imagem = "images/tecnologia.jpg"
			this.container = document.querySelector("#tecnologia")
		}
		else if (this.categoria == "industria") {
			this.imagem = "images/industria.jpg"
			this.container = document.querySelector("#industria")
		}
		else if (this.categoria == "pessoal") {
			this.imagem = "images/pessoal.jpg"
			this.container = document.querySelector("#pessoal")
		}
		
		else if (this.categoria == "educacao") {
			this.imagem = "images/educacao.jpg"
			this.container = document.querySelector("#educacao")
		}
	}
	
	exibir () {
		let card = document.createElement("a");
		card.setAttribute("href", this.link);
		card.setAttribute("target", "blank");
		card.className = "col-12 col-sm-6 col-md-4 col-lg-3 card-curso"
		
		let nome = document.createElement("h5");
		let txtNome = document.createTextNode(this.nome)
		nome.appendChild(txtNome);
		
		let imagem = document.createElement("img");
		imagem.setAttribute("src", this.imagem);
		imagem.setAttribute("width", "200px");
		
		let escola = document.createElement("p");
		escola.className = "escola";
		let txtEscola = document.createTextNode(this.escola);
		escola.appendChild(txtEscola);
		
		let carga = document.createElement("p");
		let txtCarga = document.createTextNode(this.carga);
		carga.appendChild(txtCarga);
		
		card.appendChild(nome);
		card.appendChild(imagem);
		card.appendChild(escola);
		card.appendChild(carga);
		this.container.appendChild(card);
	}
}

const cursosJson = cursos;

cursosJson.forEach( (curso, index) => {
	cursosJson[index] =  new Curso(curso.curso, curso.categoria, curso.link, curso.instituicao, curso.carga);
	cursosJson[index].exibir()
})


// Conta quantos cursos existem no JSON
let qtde = cursosJson.length;
let span = document.querySelector('#qtdeCursos').innerHTML = qtde;