import { ColorApi } from "./fetchConst";

export const ColorNameFetch = async (color) => {

    const res = await fetch((ColorApi + 'hex=' + color.replace("#", "")));
    const data = await res.json();
    return data.name.value;

}