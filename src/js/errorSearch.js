import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';


export const errorSearch = () => {
    setTimeout(() => {
        return error({
            text: 'No image! Please try again!',
            animation: 'slide',
            delay: 1500
        });
   }, 500);
      
} 

defaultModules.style = 'material';