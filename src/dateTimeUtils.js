module.exports = {
    getCurrentDate: () => {
        let current_ts = getCurrentDateTime()
        return current_ts.split('T')[0]
    },

    getCurrentTime: () => {
        let current_ts = getCurrentDateTime()
        return current_ts.split('T')[1]
    }
}

const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}