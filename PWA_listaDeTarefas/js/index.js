window.addEventListener('load', ()=>{
    registerSW()
})

async function registerSW(){
    if('ServiceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        }catch(e){
            console.log('SW registrartion failed');
        }

    }
}