//OBJETOS

$(document).ready( app );

function app() {

    const teslaView = {
        //--
        loader: $('.divPreloader'),

        //--
        colores: ['blanco', 'negro'],

        //--
        changeColor(src) {

            const $loaderView = teslaView.loader; //$ hace referencia a una asignación Query

            //.fadeIn(time): Cambo gradual de oculto a visible
            $loaderView.fadeIn(200);

            if(!src) {
                const color = teslaView.colores[0];

                src = `img/tesla/modelS-${color}.jpg`;
            }

            $('<img>', {
                src,
                class: 'img-fluid'
            }).on('load', function() {
                console.log('imagen cargada');

                $('.divVistaPrevia').find('img').remove();

                $(this).appendTo('.divVistaPrevia');

                //.fadeOut(time): Cambo gradual de visible a oculto
                $loaderView.fadeOut(200);
            });
        },

        //--
        init(options) {

            //.extend(): Función de extensión de Objetos
            $.extend( teslaView, options );

            for(let i = 0; i < this.colores.length; i++) {
                let color = this.colores[i];

                $('<option>', {
                    value: color,
                    text: color.toUpperCase()
                }).appendTo('#cmbColor');
            }

            $('#cmbColor').bind('change', function() {
                const color = $(this).val();
                const src = `img/tesla/modelS-${color}.jpg`;

                teslaView.changeColor(src);
            });

            teslaView.changeColor(""); //Primera carga
        }
    }

    teslaView.init({
        colores: ['blanco' ,'rojo', 'cafe', 'verde', 'negro', 'gris']
    });

}
