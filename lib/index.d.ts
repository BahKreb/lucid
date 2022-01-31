interface LucidElement {
    tag: keyof HTMLElementTagNameMap | ((component: any) => LucidElement);
    attrs: {
        [key: string]: any;
    };
    children: string | any[];
}
declare class Lucid {
    private component;
    private createElement;
    render(dom: HTMLElement, element: LucidElement): void;
    private _render;
    private _update;
}
export declare const lucid: Lucid;
export {};
