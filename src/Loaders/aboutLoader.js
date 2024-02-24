const URL = process.env.REACT_APP_URL;

export const aboutLoader = async () => {
    const response = await fetch(`${URL}/about`);
    const about = await response.json();
    return about
}