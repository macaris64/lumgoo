export function getSlugFromUrl() {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    return pathParts[pathParts.length - 1];
}
