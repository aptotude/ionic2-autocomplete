import { EventEmitter, TemplateRef } from '@angular/core';
export declare class AutoCompleteComponent {
    dataProvider: any;
    options: any;
    keyword: string;
    showResultsFirst: boolean;
    alwaysShowList: boolean;
    hideListOnSelection: boolean;
    template: TemplateRef<any>;
    useIonInput: boolean;
    itemSelected: EventEmitter<any>;
    itemsShown: EventEmitter<any>;
    itemsHidden: EventEmitter<any>;
    ionAutoInput: EventEmitter<string>;
    searchbarElem: any;
    inputElem: any;
    suggestions: string[];
    showList: boolean;
    defaultOpts: any;
    private _showList;
    private selection;
    private showListChanged;
    /**
     * create a new instace
     */
    constructor();
    ngAfterViewChecked(): void;
    /**
     * get items for auto-complete
     */
    getItems(): void;
    /**
     * show item list
     */
    showItemList(): void;
    /**
     * hide item list
     */
    hideItemList(): void;
    /**
     * select item from list
     *
     * @param event
     * @param selection
     **/
    select(selection: any): void;
    /**
     * get current selection
     * @returns {any}
     */
    getSelection(): any;
    /**
     * get current input value
     * @returns {string}
     */
    getValue(): string;
    /**
     * set current input value
     */
    setValue(value: string): void;
    /**
  
     /**
     * clear current input value
     */
    clearValue(hideItemList?: boolean): void;
    /**
     * set focus of searchbar
     */
    setFocus(): void;
    /**
     * handle document click
     * @param event
     */
    private documentClickHandler(event);
}
