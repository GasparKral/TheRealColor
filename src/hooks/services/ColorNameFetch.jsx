import { useEffect } from "react";
import { ColorApi } from "./fetchConst";
import colorString from 'color-string';

export const ColorNameFetch = () => {

    useEffect(() => {
        fetch((ColorApi + colorString.to.hsl("#ff0000").replaceAll(' ', '')))
            .then(res => res.json())
            .then(data => {
                const name = data.name.value;
                return name
            })
    }, [])
}