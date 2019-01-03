import HomeScreen from '../HomeScreen'
import MafMain from './Maf/MafMain'
import MafProc from './Maf/MafProc'
import CcMain from './CC/CcMain'
import EaiMain from './EAI/EaiMain'

export const AppRoutes = {
    'Home': HomeScreen,
    'MAF': MafMain,
    'MafProc': MafProc,
    'CC': CcMain,
    'EAI': EaiMain  
 }

 export const DefaultRoute = { 
     initialRouteName: 'Home' 
}
 