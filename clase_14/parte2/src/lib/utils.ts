export const getTime = () => {
    return {
        fyh: new Date().toLocaleDateString(),
        timestamp: Date.now()
    }
}