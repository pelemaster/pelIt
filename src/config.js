//https://msso.pelephone.co.il/mobileAppGw/dev/maf/proc
const env = 'DEV' 

const envConfig = {
    'DEV': {
        'backendURL' : 'https://msso.pelephone.co.il/mobileAppGw/dev/',
        'getMenuURL' : 'http://msso.pelephone.co.il/DV/MobileServices/SSOService.svc/json/GetUserMenu'
    },
    'PROD': {
        'backendURL' : 'https://msso.pelephone.co.il/mobileAppGw/prod/'
    }
}

export default envConfig[env]