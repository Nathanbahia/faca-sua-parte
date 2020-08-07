let menu = document.querySelector("#menu");
	let ulMenu = document.querySelector("#ulMenu");
	let menuheight = Number(menu.style.height);
	let menuExpanded = false;
	
	let menuIconOpen = document.querySelector("#menuOpen");
	let menuIconClose = document.querySelector("#menuClose");
	
	function expandeMenu () {
		if (menuExpanded === false) {
			menuheight = 160;
			menu.style.height = `${menuheight}px`;
			menu.style.transition = ".5s";
			menuExpanded = true;
			menuIconOpen.style.display = "none";
			menuIconClose.style.display = "block";
			
			let liInf = document.createElement("li");
			let linkInf = document.createElement("a");
			linkInf.setAttribute("href", "#informatica");
			linkInf.appendChild(document.createTextNode("INFORMÁTICA"));
			liInf.appendChild(linkInf);
			
			let liGes = document.createElement("li");
			let linkGes = document.createElement("a");
			linkGes.setAttribute("href", "#gestao");
			linkGes.appendChild(document.createTextNode("GESTÃO"));
			liGes.appendChild(linkGes);
			
			let liDes = document.createElement("li");
			let linkDes = document.createElement("a");
			linkDes.setAttribute("href", "#pessoal");
			linkDes.appendChild(document.createTextNode("DESENVOLVIMENTO"));
			liDes.appendChild(linkDes);
			
			let liInd = document.createElement("li");
			let linkInd = document.createElement("a");
			linkInd.setAttribute("href", "#industria");
			linkInd.appendChild(document.createTextNode("INDÚSTRIA"));
			liInd.appendChild(linkInd);
			
			let liEdu = document.createElement("li");
			let linkEdu = document.createElement("a");
			linkEdu.setAttribute("href", "#educacao");
			linkEdu.appendChild(document.createTextNode("EDUCAÇÃO"));
			liEdu.appendChild(linkEdu);
			
			let liTec = document.createElement("li");
			let linkTec = document.createElement("a");
			linkTec.setAttribute("href", "#tecnologia");
			linkTec.appendChild(document.createTextNode("TECNOLOGIA"));
			liTec.appendChild(linkTec);

			ulMenu.appendChild(liInf);
			ulMenu.appendChild(liGes);
			ulMenu.appendChild(liDes);
			ulMenu.appendChild(liInd);
			ulMenu.appendChild(liEdu);
			ulMenu.appendChild(liTec);
			
		} else {
			menuheight = 10;
			menu.style.height = `${menuheight}px`;
			menu.style.transition = ".5s";
			menuExpanded = false;
			
			menuIconOpen.style.display = "block";
			menuIconClose.style.display = "none";
			
			let lis = document.querySelectorAll("#ulMenu li");
			lis.forEach( (li, index) => {
				ulMenu.removeChild(li);
			})
		}
	}
	
	menuIconOpen.onclick = expandeMenu;
	menuIconClose.onclick = expandeMenu;

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