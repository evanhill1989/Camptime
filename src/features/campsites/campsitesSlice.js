import { CAMPSITES } from '../../app/shared/CAMPSITES.js'   

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = ()=> {
     const campsite = CAMPSITES[Math.floor(Math.random()*CAMPSITES.length)];
    
    return campsite;
}