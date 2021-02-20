const { softAssert, softExpect } = chai;

const TiendaPage = require("../pageObjects/tiendaPage");
const DatosTiendaBuilder = require("../builder/datosTiendaBuilder");


describe('Casos de prueba - Cypress', ()=>{
    const tiendaPage = new TiendaPage();

    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar');
    })

    it.skip('CP001-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A31', ()=>{
        const datosTiendaBuilder = new DatosTiendaBuilder().equipoCP001().build();

        tiendaPage.getLupaIcono().type(' ');
        tiendaPage.getCampoBusquedaTextbox().type(datosTiendaBuilder.equipo + '{enter}');

        tiendaPage.getListaDeNombresDeEquipos().each((equipo, index) => {
            let nombreEquipo = equipo.text();
            if(nombreEquipo.includes(datosTiendaBuilder.equipo)){
                tiendaPage.getListaDeNombresDeEquipos().eq(index).click();

                tiendaPage.getCuotasTextoSuperior().invoke('text').as('cantidadCuotasTextoSuperior')
        
                cy.get('@cantidadCuotasTextoSuperior').then((texto) => {
                   softExpect(texto).to.includes('18 cuotas sin interés')
                })
        
                tiendaPage.getCuotasTextoInferior().invoke('text').as('cantidadCuotasTextoInferior')

                cy.get('@cantidadCuotasTextoInferior').then((texto) => {
                    softExpect(texto).to.includes('18 cuotas sin interés')
                 })          
            }
        })        
    })

    it('CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', ()=>{
        tiendaPage.getFiltroDropdown().click();
        cy.contains('256GB').click();
        tiendaPage.getFiltroDropdown().click();
        cy.contains('Gama Alta').click();

        tiendaPage.getFiltroDropdown().click();

        let contadorFiltros = 0;
        tiendaPage.getFiltrosActivos().each((filtro) => {
            let texto = filtro.text();

            if(texto.includes('256GB')){
                cy.log('[✔️ Se aplico correctamente el filtro de: ]()' + '256GB')
                contadorFiltros++;
            }
            
            if(texto.includes('Gama Alta')){
                cy.log('[✔️ Se aplico correctamente el filtro de: ]()' + 'Gama Alta')
                contadorFiltros++;
            }
        })

        cy.log('**-- Validando si los filtros fueron aplicados --**')
        cy.wrap(null).then(() => {
            softExpect(contadorFiltros).to.eq(2);
        })

        tiendaPage.getListaDeEquipos().then((arrayEquipos) => {
            cy.log('**Se encontraron **' + arrayEquipos.length + '** equipos 📱**');
        })
    })
})