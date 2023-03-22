// Obtener el elemento del editor y el botón de limpiar
const editor = document.getElementById('editor');

		// Asigna la función al evento "click"
		editor.addEventListener("click", function() {
      
      var botonBold = document.getElementById('btnBold');
        
        if (document.queryCommandState('bold')) {
            botonBold.classList.add('activo');
            
          } else {
            botonBold.classList.remove('activo');
            
          }

          var botonItalic = document.getElementById('btnItalic');

          if (document.queryCommandState('italic')) {
              botonItalic.classList.add('activo');
              
            } else {
              botonItalic.classList.remove('activo');
              
            }

            var btnUnderline = document.getElementById('btnUnderline');

        if (document.queryCommandState('underline')) {
            btnUnderline.classList.add('activo');
            
          } else {
            btnUnderline.classList.remove('activo');
            
          }

          var btnStrike = document.getElementById('btnStrike');

    if (document.queryCommandState('strikeThrough')) {
        btnStrike.classList.add('activo');
        
      } else {
        btnStrike.classList.remove('activo');
        
      }
      
		});



// Función para aplicar formato al texto seleccionado
function formato1() {
   
        document.execCommand('bold', true, null);
        resaltarBotones(1)
   
    
}

function formato2() {
   
  document.execCommand('italic', true, null);
  resaltarBotones(2)


}

function formato3() {
   
  document.execCommand('underline', true, null);
  resaltarBotones(3)


}

function formato4() {
   
  document.execCommand('strikeThrough', true, null);
  resaltarBotones(4)


}

// Función para cambiar la fuente del texto seleccionado
function fuente(select) {
    const fuente = select.value;
    document.execCommand('fontName', true, fuente);
}

// Función para cambiar el tamaño del texto seleccionado
function tamano(select) {
    const tamano = select.value;
    document.execCommand('fontSize', true, tamano);
}

// Función para cambiar el color del texto seleccionado
function color(input) {
    const color = input.value;
    document.execCommand('foreColor', true, color);
}

// Función para limpiar el contenido del editor
function limpiar() {
    editor.innerHTML = '';
}

// Función para guardar el contenido del editor en un archivo
function guardar() {
    // Este es solo un ejemplo y no guarda realmente el contenido en un archivo
    const contenido = editor.innerHTML;
    console.log('Contenido guardado: ', contenido);
}


function resaltarBotones(numero) {

    if(numero==1){

        var botonBold = document.getElementById('btnBold');
        
        if (document.queryCommandState('bold')) {
            botonBold.classList.add('activo');
            
          } else {
            botonBold.classList.remove('activo');
            
          }

    }

    if(numero==2){

        var botonItalic = document.getElementById('btnItalic');

        if (document.queryCommandState('italic')) {
            botonItalic.classList.add('activo');
            
          } else {
            botonItalic.classList.remove('activo');
            
          }

    }

    if(numero==3){

        var btnUnderline = document.getElementById('btnUnderline');

        if (document.queryCommandState('underline')) {
            btnUnderline.classList.add('activo');
            
          } else {
            btnUnderline.classList.remove('activo');
            
          }
    }

    
    if(numero==4){

        var btnStrike = document.getElementById('btnStrike');

    if (document.queryCommandState('strikeThrough')) {
        btnStrike.classList.add('activo');
        
      } else {
        btnStrike.classList.remove('activo');
        
      }

    }
      
  }

  // Al hacer clic en el botón "Cargar imagen", activar el evento click en el input file
document.querySelector('#cargarImagen').addEventListener('click', function() {
  document.querySelector('input[type="file"]').click();
});

// Cuando se carga una imagen, leer su contenido y agregarla al editor
document.querySelector('input[type="file"]').addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', function() {
    const img = new Image();
    img.src = reader.result;
    document.querySelector('#editor').appendChild(img);
  });
  reader.readAsDataURL(this.files[0]);
});