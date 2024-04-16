export function formatCurrency(amount) {
    return new Intl.NumberFormat("en", {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

export function getMinutesLeft(dateStr) {
    const now = new Date().getTime();
    const deliveryTime = new Date(dateStr).getTime();

    // to convert it from millisecond to minutes we divide by 60000
    return Math.round((deliveryTime - now) / 60000);
}

export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(dateStr));
}