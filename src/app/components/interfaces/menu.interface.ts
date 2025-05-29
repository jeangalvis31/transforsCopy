export interface menuLinks {
    name: string,
    dir: string,
    submenu: SubMenuLinks[],
}


interface SubMenuLinks{
    name: string,
    url: string
}