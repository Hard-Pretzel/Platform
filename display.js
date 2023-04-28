const MIN_PIXEL_SIZE = 400; //Minimum Height
const W_RATIO = 9; 
const H_RATIO = 16; //set default w and h to 16.
const WALL_MARGIN = .9; //make sure theres some space along the walls.

document.documentElement.style.setProperty('--min-pixel-size', `${MIN_PIXEL_SIZE}px`);
//Set the minimum size for the game canvas

// Scale screen
function updateGameDisplay() {
    const canvas = document.getElementById('game-canvas');
    const errorDiv = document.getElementById('size-err');
    const screenHeight = window.innerHeight;
    if (screenHeight < MIN_PIXEL_SIZE) {
      canvas.style.display = 'none';
      errorDiv.style.display = 'block';
      document.getElementById('min-pixel-size').innerText = MIN_PIXEL_SIZE;
    } else {
        const canvasHeight = Math.floor(screenHeight * WALL_MARGIN);
        const canvasWidth = Math.floor(canvasHeight * (W_RATIO/H_RATIO));
      
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.display = 'block';
      errorDiv.style.display = 'none';
    }
  };
  
  //first load instructions
  window.addEventListener('DOMContentLoaded', (event) => {
    // Show loading text while scripts are loading
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerText = 'Loading...';
    document.body.appendChild(loadingScreen);
    
      // Hide loading text when the page is done loading
  window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
  });

    //this is where i'd put cookies or something in order to load in your preferences IF I HAD ONE

    //load display
    updateGameDisplay();
  });
  
  //when one of you bastards ctrl scroll the screen
  window.addEventListener('resize', () => {
    updateGameDisplay();
  });


