let switchState = 0;
let si_button = document.getElementById('si-button');
let indiceImagen = 0;
let indiceImagenAnt = 1;

var imagenes = [
    'happy-gif1',
    'happy-gif2',
    'happy-gif3'
  ];


console.log(si_button);

function no_action(){

    switch(switchState){
        case 0:

            document.getElementById('idle-gif').style.display = 'none';
            document.getElementById('sad-gif3').style.display = 'none';
            document.getElementById('sad-gif1').style.display = 'block';

            document.getElementById('no-button').innerHTML = 'Real? :c';
            
          
            si_button.style.fontSize = '40px';
            si_button.style.padding = '20px 40px';
       
            switchState++;
            break;

        case 1:

            document.getElementById('no-button').innerHTML = 'Deberitas deberitas?';
            

            si_button.style.fontSize = '50px';
            si_button.style.padding = '30px 50px';
        
            switchState++;
            break;

        case 2:
           
            document.getElementById('no-button').innerHTML = 'Ya di que si, no juegues';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '60px';
            si_button.style.padding = '40px 60px';
        
            switchState++;
            break;
        
        case 3:
           
            document.getElementById('no-button').innerHTML = 'Me quieres mucho?';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '70px';
            si_button.style.padding = '50px 70px';
        
            switchState++;
            break;
        case 4:
           
            document.getElementById('no-button').innerHTML = 'Si me quieres diras que si';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '80px';
            si_button.style.padding = '60px 80px';
         
            switchState++;
            break;
        case 5:
           
            document.getElementById('sad-gif1').style.display = 'none';
            document.getElementById('sad-gif2').style.display = 'block';

            document.getElementById('no-button').innerHTML = 'Ojo que te estoy viendo';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '90px';
            si_button.style.padding = '70px 90px';

            switchState++;
            break;
        case 6:
           
            document.getElementById('no-button').innerHTML = 'Si dices que no voy a llorar';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '100px';
            si_button.style.padding = '80px 100px';
            
            switchState++;
            break;
        case 7:
           
            document.getElementById('no-button').innerHTML = 'Estoy a dos de llorar';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '120px';
            si_button.style.padding = '90px 120px';
  
            switchState++;
            break;
        case 8:
           
            document.getElementById('no-button').innerHTML = 'Estoy a 1 de llorar';
            

            si_button.style.fontSize = '140px';
            si_button.style.padding = '100px 140px';
       
            switchState++;
            break;

        case 9:
           
            document.getElementById('no-button').innerHTML = 'Ya entendi, no te importan mis sentimientos';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '160px';
            si_button.style.padding = '110px 160px';
          
            switchState++;
            break;

        case 10:

            document.getElementById('sad-gif2').style.display = 'none';
            document.getElementById('sad-gif3').style.display = 'block';
           
            document.getElementById('no-button').innerHTML = 'Ta bueno pues, ya no pregunto';
            

         
            si_button.style.fontSize = '180px';
            si_button.style.padding = '120px 180px';
    
            switchState++;
            break;
        case 11:
           
            document.getElementById('no-button').innerHTML = 'bromi, dime que si pls';
            

            si_button.style.fontSize = '200px';
            si_button.style.padding = '130px 200px';
            
            switchState++;
            break;
        
        case 12:
           
            document.getElementById('no-button').innerHTML = 'Si me dices que si te doy un besito';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '220px';
            si_button.style.padding = '140px 220px';
    
            switchState++;
            break;
        
        case 13:
           
            document.getElementById('no-button').innerHTML = 'No me vas a dejar alternativa unu';
            

            si_button.style.fontSize = '240px';
            si_button.style.padding = '150px 240px';
         
            switchState++;
            break;
        
        case 14:
           
            document.getElementById('no-button').innerHTML = 'Ya neta, di que si';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '260px';
            si_button.style.padding = '160px 260px';
            
            switchState++;
            break;
        
        case 15:
           
            document.getElementById('no-button').innerHTML = 'pofi';
            

            // Hacer que el botón "Sí" crezca
            si_button.style.fontSize = '280px';
            si_button.style.padding = '170px 280px';
          
            switchState++;
            break;
        
     
        case 16:
            
        document.getElementById('no-button').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.getElementById('sad-gif3').style.display = 'none';

        si_button.style.fontSize = '300px';
        si_button.style.width = '100%';
        si_button.style.height = '100vh';

        document.body.style.display = "block";

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
};

function si_action() {

    console.log('si');

    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sad-section').style.display = 'none';
    document.getElementById('idle').style.display = 'none';
    document.getElementById('happy-gif1').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    si_button.style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('no-button').style.display = 'none';
    document.body.style.display = "flex";

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Yay c: Es una cita';

    var intervalo = setInterval(function(){
        
        document.getElementById(imagenes[indiceImagenAnt]).style.display = 'none';
        document.getElementById(imagenes[indiceImagen]).style.display = 'block';
        
        indiceImagenAnt = indiceImagen;
        indiceImagen = (indiceImagen + 1) % imagenes.length;
        
      }, 1000);

    // Mostrar otro gif después de 3 segundos
    // setTimeout(function() {
    //     document.getElementById('happy-gif1').style.display = 'none';
    //     document.getElementById('happy-gif2').style.display = 'block';
    // }, 1000);

    // setTimeout(function() {
    //     document.getElementById('happy-gif2').style.display = 'none';
    //     document.getElementById('happy-gif3').style.display = 'block';
    // }, 2000);
  
}


si_button.addEventListener('click', si_action);


document.getElementById('no-button').addEventListener('click', no_action);