export default class tiendaPage {
	/* 
     * Localizadores
     */

	lupaIcono = ".icon-search.pnt-js-boton-buscador";
	campoBusquedaTextbox = "#myInput";
	listaDeEquipos = ".product-name";
	cuotasTextoSuperior = ".price-installments";
	cuotasTextoInferior = ".details > ul > :nth-child(1)"

	filtrarPorDropdown = '[data-target=".filter-dropdown-menu"]'
	filtrosActivos = '.filter-info.f-active'
	equiposCards = '.item.last'
	
	/* 
     * Constructor
     */
	constructor() {}

	/* 
     * Metodos de acceso
     */
	getLupaIcono(){
		return cy.get(this.lupaIcono);
	}

	getCampoBusquedaTextbox(){
		return cy.get(this.campoBusquedaTextbox);
	}

	getListaDeNombresDeEquipos(){
		return cy.get(this.listaDeEquipos);
	}

	getCuotasTextoSuperior(){
		return cy.get(this.cuotasTextoSuperior);
	}

	getCuotasTextoInferior(){
		return cy.get(this.cuotasTextoInferior);
	}

	getFiltroDropdown(){
		return cy.get(this.filtrarPorDropdown);
	}

	getFiltrosActivos(){
		return cy.get(this.filtrosActivos);
	}

	getListaDeEquipos(){
		return cy.get(this.equiposCards);
	}
}