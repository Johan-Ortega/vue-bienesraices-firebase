import { ref } from 'vue'

export default function useLocationMap(){

    const zoom = ref(15)
    const center = ref([18.8805971,-96.9316586])
    
    function pin(e) {
        const marker = e.target.getLatLng()
        center.value = [marker.lat, marker.lng]

        console.log(center.value)
    }

    return {
        zoom,
        center,
        pin
    }
}