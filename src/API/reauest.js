export async function getData() {
    try {
        const response = await fetch("https://swapi.dev/api/vehicles/")
        const fetchedData = await response.json()
        return fetchedData.results
    } catch (err) {
        console.error(err)
    }
    return []
}
