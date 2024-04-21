import { CommonModule, DOCUMENT } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ContentChildren, effect, EventEmitter, forwardRef, Inject, Input, NgModule, numberAttribute, Output, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrimeTemplate, SharedModule, TranslationKeys } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { DomHandler } from 'primeng/dom';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayModule } from 'primeng/overlay';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { ObjectUtils, UniqueComponentId } from 'primeng/utils';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { TimesIcon } from 'primeng/icons/times';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common";
import * as i3 from "primeng/overlay";
import * as i4 from "primeng/button";
import * as i5 from "primeng/ripple";
import * as i6 from "primeng/scroller";
import * as i7 from "primeng/autofocus";
export const AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoComplete),
    multi: true
};
/**
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 * @group Components
 */
export class AutoComplete {
    document;
    el;
    renderer;
    cd;
    config;
    overlayService;
    zone;
    /**
     * Minimum number of characters to initiate a search.
     * @group Props
     */
    minLength = 1;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @group Props
     */
    delay = 300;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Hint text for the input field.
     * @group Props
     */
    placeholder;
    /**
     * When present, it specifies that the input cannot be typed.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Maximum height of the suggestions panel.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * When enabled, highlights the first item in the list by default.
     * @group Props
     */
    autoHighlight;
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     * @group Props
     */
    forceSelection;
    /**
     * Type of the input, defaults to "text".
     * @group Props
     */
    type = 'text';
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Defines a string that labels the dropdown button for accessibility.
     * @group Props
     */
    dropdownAriaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
    /**
     * Ensures uniqueness of selected items on multiple mode.
     * @group Props
     */
    unique = true;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * Whether to run a query when input receives focus.
     * @group Props
     */
    completeOnFocus = false;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Field of a suggested object to resolve and display.
     * @group Props
     * @deprecated use optionLabel property instead
     */
    field;
    /**
     * Displays a button next to the input field when enabled.
     * @group Props
     */
    dropdown;
    /**
     * Whether to show the empty message or not.
     * @group Props
     */
    showEmptyMessage = true;
    /**
     * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
     * @group Props
     */
    dropdownMode = 'blank';
    /**
     * Specifies if multiple values can be selected.
     * @group Props
     */
    multiple;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete = 'off';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Options for the overlay element.
     * @group Props
     */
    overlayOptions;
    /**
     * An array of suggestions to display.
     * @group Props
     */
    get suggestions() {
        return this._suggestions();
    }
    set suggestions(value) {
        this._suggestions.set(value);
        this.handleSuggestionsChange();
    }
    /**
     * Element dimensions of option for virtual scrolling.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
        return this._itemSize;
    }
    set itemSize(val) {
        this._itemSize = val;
        console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Unique identifier of the component.
     * @group Props
     */
    id;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = false;
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    selectOnFocus;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     * @group Props
     */
    optionDisabled;
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    focusOnHover;
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     * @group Emits
     */
    completeMethod = new EventEmitter();
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteSelectEvent} event - custom select event.
     * @group Emits
     */
    onSelect = new EventEmitter();
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteUnselectEvent} event - custom unselect event.
     * @group Emits
     */
    onUnselect = new EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new EventEmitter();
    /**
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
     * @group Emits
     */
    onDropdownClick = new EventEmitter();
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new EventEmitter();
    /**
     * Callback to invoke on input key up.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyUp = new EventEmitter();
    /**
     * Callback to invoke on overlay is shown.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onShow = new EventEmitter();
    /**
     * Callback to invoke on overlay is hidden.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onHide = new EventEmitter();
    /**
     * Callback to invoke on lazy load data.
     * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new EventEmitter();
    containerEL;
    inputEL;
    multiInputEl;
    multiContainerEL;
    dropdownButton;
    itemsViewChild;
    scroller;
    overlayViewChild;
    templates;
    _itemSize;
    itemsWrapper;
    itemTemplate;
    emptyTemplate;
    headerTemplate;
    footerTemplate;
    selectedItemTemplate;
    groupTemplate;
    loaderTemplate;
    removeIconTemplate;
    loadingIconTemplate;
    clearIconTemplate;
    dropdownIconTemplate;
    value;
    _suggestions = signal(null);
    onModelChange = () => { };
    onModelTouched = () => { };
    timeout;
    overlayVisible;
    suggestionsUpdated;
    highlightOption;
    highlightOptionChanged;
    focused = false;
    _filled;
    get filled() {
        return this._filled;
    }
    set filled(value) {
        this._filled = value;
    }
    loading;
    scrollHandler;
    listId;
    searchTimeout;
    dirty = false;
    modelValue = signal(null);
    focusedMultipleOptionIndex = signal(-1);
    focusedOptionIndex = signal(-1);
    visibleOptions = computed(() => {
        return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
    });
    inputValue = computed(() => {
        const modelValue = this.modelValue();
        if (modelValue) {
            if (typeof modelValue === 'object') {
                const label = this.getOptionLabel(modelValue);
                return label != null ? label : modelValue;
            }
            else {
                return modelValue;
            }
        }
        else {
            return '';
        }
    });
    get focusedMultipleOptionId() {
        return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
    }
    get focusedOptionId() {
        return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    get containerClass() {
        return {
            'p-autocomplete p-component p-inputwrapper': true,
            'p-disabled': this.disabled,
            'p-focus': this.focused,
            'p-autocomplete-dd': this.dropdown,
            'p-autocomplete-multiple': this.multiple,
            'p-inputwrapper-focus': this.focused,
            'p-overlay-open': this.overlayVisible
        };
    }
    get multiContainerClass() {
        return 'p-autocomplete-multiple-container p-component p-inputtext';
    }
    get panelClass() {
        return {
            'p-autocomplete-panel p-component': true,
            'p-input-filled': this.config.inputStyle === 'filled',
            'p-ripple-disabled': this.config.ripple === false
        };
    }
    get inputClass() {
        return {
            'p-autocomplete-input p-inputtext p-component': !this.multiple,
            'p-autocomplete-dd-input': this.dropdown
        };
    }
    get searchResultMessageText() {
        return ObjectUtils.isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
        return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
        return this.emptyMessage || this.config.translation.emptySearchMessage || '';
    }
    get selectionMessageText() {
        return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
        return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
        return this.hasSelectedOption() ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue().length : '1') : this.emptySelectionMessageText;
    }
    get ariaSetSize() {
        return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
    }
    get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)['listLabel'];
    }
    get virtualScrollerDisabled() {
        return !this.virtualScroll;
    }
    constructor(document, el, renderer, cd, config, overlayService, zone) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.config = config;
        this.overlayService = overlayService;
        this.zone = zone;
        effect(() => {
            this.filled = ObjectUtils.isNotEmpty(this.modelValue());
        });
    }
    ngOnInit() {
        this.id = this.id || UniqueComponentId();
        this.cd.detectChanges();
    }
    ngAfterViewChecked() {
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.overlayViewChild) {
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    if (this.overlayViewChild) {
                        this.overlayViewChild.alignOverlay();
                    }
                }, 1);
                this.suggestionsUpdated = false;
            });
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'group':
                    this.groupTemplate = item.template;
                    break;
                case 'selectedItem':
                    this.selectedItemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'empty':
                    this.emptyTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                case 'loader':
                    this.loaderTemplate = item.template;
                    break;
                case 'removetokenicon':
                    this.removeIconTemplate = item.template;
                    break;
                case 'loadingicon':
                    this.loadingIconTemplate = item.template;
                    break;
                case 'clearicon':
                    this.clearIconTemplate = item.template;
                    break;
                case 'dropdownicon':
                    this.dropdownIconTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    handleSuggestionsChange() {
        if (this.loading) {
            this._suggestions() ? this.show() : !!this.emptyTemplate ? this.show() : this.hide();
            const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
            this.focusedOptionIndex.set(focusedOptionIndex);
            this.suggestionsUpdated = true;
            this.loading = false;
            this.cd.markForCheck();
        }
    }
    flatOptions(options) {
        return (options || []).reduce((result, option, index) => {
            result.push({ optionGroup: option, group: true, index });
            const optionGroupChildren = this.getOptionGroupChildren(option);
            optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
            return result;
        }, []);
    }
    isOptionGroup(option) {
        return this.optionGroupLabel && option.optionGroup && option.group;
    }
    findFirstOptionIndex() {
        return this.visibleOptions().findIndex((option) => this.isValidOption(option));
    }
    findLastOptionIndex() {
        return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
    }
    findFirstFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1
            ? this.visibleOptions()
                .slice(index + 1)
                .findIndex((option) => this.isValidOption(option))
            : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    isValidSelectedOption(option) {
        return this.isValidOption(option) && this.isSelected(option);
    }
    isValidOption(option) {
        return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isSelected(option) {
        if (this.multiple) {
            return this.unique ? this.modelValue()?.find((model) => ObjectUtils.equals(model, this.getOptionValue(option), this.equalityKey())) : false;
        }
        return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    isOptionMatched(option, value) {
        return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
    }
    isInputClicked(event) {
        return event.target === this.inputEL.nativeElement;
    }
    isDropdownClicked(event) {
        return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
    }
    equalityKey() {
        return this.dataKey; // TODO: The 'optionValue' properties can be added.
    }
    onContainerClick(event) {
        if (this.disabled || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
            return;
        }
        if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
            DomHandler.focus(this.inputEL.nativeElement);
        }
    }
    handleDropdownClick(event) {
        let query = undefined;
        if (this.overlayVisible) {
            this.hide(true);
        }
        else {
            DomHandler.focus(this.inputEL.nativeElement);
            query = this.inputEL.nativeElement.value;
            if (this.dropdownMode === 'blank')
                this.search(event, '', 'dropdown');
            else if (this.dropdownMode === 'current')
                this.search(event, query, 'dropdown');
        }
        this.onDropdownClick.emit({ originalEvent: event, query });
    }
    onInput(event) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        let query = event.target.value.split('').slice(0, this.maxlength).join('');
        if (!this.multiple && !this.forceSelection) {
            this.updateModel(query);
        }
        if (query.length === 0 && !this.multiple) {
            this.onClear.emit();
            setTimeout(() => {
                this.hide();
            }, this.delay / 2);
        }
        else {
            if (query.length >= this.minLength) {
                this.focusedOptionIndex.set(-1);
                this.searchTimeout = setTimeout(() => {
                    this.search(event, query, 'input');
                }, this.delay);
            }
            else {
                this.hide();
            }
        }
    }
    onInputChange(event) {
        if (this.forceSelection) {
            let valid = false;
            if (this.visibleOptions()) {
                const matchedValue = this.visibleOptions().find((option) => this.isOptionMatched(option, this.inputEL.nativeElement.value || ''));
                if (matchedValue !== undefined) {
                    valid = true;
                    !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
                }
            }
            if (!valid) {
                this.inputEL.nativeElement.value = '';
                !this.multiple && this.updateModel(null);
            }
        }
    }
    onInputFocus(event) {
        if (this.disabled) {
            // For ScreenReaders
            return;
        }
        if (!this.dirty && this.completeOnFocus) {
            this.search(event, event.target.value, 'focus');
        }
        this.dirty = true;
        this.focused = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
        this.onFocus.emit(event);
    }
    onMultipleContainerFocus(event) {
        if (this.disabled) {
            // For ScreenReaders
            return;
        }
        this.focused = true;
    }
    onMultipleContainerBlur(event) {
        this.focusedMultipleOptionIndex.set(-1);
        this.focused = false;
    }
    onMultipleContainerKeyDown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        switch (event.code) {
            case 'ArrowLeft':
                this.onArrowLeftKeyOnMultiple(event);
                break;
            case 'ArrowRight':
                this.onArrowRightKeyOnMultiple(event);
                break;
            case 'Backspace':
                this.onBackspaceKeyOnMultiple(event);
                break;
            default:
                break;
        }
    }
    onInputBlur(event) {
        this.dirty = false;
        this.focused = false;
        this.focusedOptionIndex.set(-1);
        this.onModelTouched();
        this.onBlur.emit(event);
    }
    onInputPaste(event) {
        this.onKeyDown(event);
    }
    onInputKeyUp(event) {
        this.onKeyUp.emit(event);
    }
    onKeyDown(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        switch (event.code) {
            case 'ArrowDown':
                this.onArrowDownKey(event);
                break;
            case 'ArrowUp':
                this.onArrowUpKey(event);
                break;
            case 'ArrowLeft':
                this.onArrowLeftKey(event);
                break;
            case 'ArrowRight':
                this.onArrowRightKey(event);
                break;
            case 'Home':
                this.onHomeKey(event);
                break;
            case 'End':
                this.onEndKey(event);
                break;
            case 'PageDown':
                this.onPageDownKey(event);
                break;
            case 'PageUp':
                this.onPageUpKey(event);
                break;
            case 'Enter':
            case 'NumpadEnter':
                this.onEnterKey(event);
                break;
            case 'Escape':
                this.onEscapeKey(event);
                break;
            case 'Tab':
                this.onTabKey(event);
                break;
            case 'Backspace':
                this.onBackspaceKey(event);
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                //NOOP
                break;
            default:
                break;
        }
    }
    onArrowDownKey(event) {
        if (!this.overlayVisible) {
            return;
        }
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
        event.stopPropagation();
    }
    onArrowUpKey(event) {
        if (!this.overlayVisible) {
            return;
        }
        if (event.altKey) {
            if (this.focusedOptionIndex() !== -1) {
                this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
            }
            this.overlayVisible && this.hide();
            event.preventDefault();
        }
        else {
            const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
            this.changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onArrowLeftKey(event) {
        const target = event.currentTarget;
        this.focusedOptionIndex.set(-1);
        if (this.multiple) {
            if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption()) {
                DomHandler.focus(this.multiContainerEL.nativeElement);
                this.focusedMultipleOptionIndex.set(this.modelValue().length);
            }
            else {
                event.stopPropagation(); // To prevent onArrowLeftKeyOnMultiple method
            }
        }
    }
    onArrowRightKey(event) {
        this.focusedOptionIndex.set(-1);
        this.multiple && event.stopPropagation(); // To prevent onArrowRightKeyOnMultiple method
    }
    onHomeKey(event) {
        const { currentTarget } = event;
        const len = currentTarget.value.length;
        currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
        this.focusedOptionIndex.set(-1);
        event.preventDefault();
    }
    onEndKey(event) {
        const { currentTarget } = event;
        const len = currentTarget.value.length;
        currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
        this.focusedOptionIndex.set(-1);
        event.preventDefault();
    }
    onPageDownKey(event) {
        this.scrollInView(this.visibleOptions().length - 1);
        event.preventDefault();
    }
    onPageUpKey(event) {
        this.scrollInView(0);
        event.preventDefault();
    }
    onEnterKey(event) {
        if (!this.overlayVisible) {
            this.onArrowDownKey(event);
        }
        else {
            if (this.focusedOptionIndex() !== -1) {
                this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
            }
            this.hide();
        }
        event.preventDefault();
    }
    onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
    }
    onTabKey(event) {
        if (this.focusedOptionIndex() !== -1) {
            this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
        if (this.multiple) {
            if (ObjectUtils.isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
                const removedValue = this.modelValue()[this.modelValue().length - 1];
                const newValue = this.modelValue().slice(0, -1);
                this.updateModel(newValue);
                this.onUnselect.emit({ originalEvent: event, value: removedValue });
            }
            event.stopPropagation(); // To prevent onBackspaceKeyOnMultiple method
        }
        if (!this.multiple && this.showClear && this.findSelectedOptionIndex() != -1) {
            this.clear();
        }
    }
    onArrowLeftKeyOnMultiple(event) {
        const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
        this.focusedMultipleOptionIndex.set(optionIndex);
    }
    onArrowRightKeyOnMultiple(event) {
        let optionIndex = this.focusedMultipleOptionIndex();
        optionIndex++;
        this.focusedMultipleOptionIndex.set(optionIndex);
        if (optionIndex > this.modelValue().length - 1) {
            this.focusedMultipleOptionIndex.set(-1);
            DomHandler.focus(this.inputEL.nativeElement);
        }
    }
    onBackspaceKeyOnMultiple(event) {
        if (this.focusedMultipleOptionIndex() !== -1) {
            this.removeOption(event, this.focusedMultipleOptionIndex());
        }
    }
    onOptionSelect(event, option, isHide = true) {
        const value = this.getOptionValue(option);
        if (this.multiple) {
            this.inputEL.nativeElement.value = '';
            if (!this.isSelected(option)) {
                this.updateModel([...(this.modelValue() || []), value]);
            }
        }
        else {
            this.updateModel(value);
        }
        this.onSelect.emit({ originalEvent: event, value: option });
        isHide && this.hide(true);
    }
    onOptionMouseEnter(event, index) {
        if (this.focusOnHover) {
            this.changeFocusedOptionIndex(event, index);
        }
    }
    search(event, query, source) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        //do not search blank values on input change
        if (source === 'input' && query.trim().length === 0) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({ originalEvent: event, query });
    }
    removeOption(event, index) {
        event.stopPropagation();
        const removedOption = this.modelValue()[index];
        const value = this.modelValue()
            .filter((_, i) => i !== index)
            .map((option) => this.getOptionValue(option));
        this.updateModel(value);
        this.onUnselect.emit({ originalEvent: event, value: removedOption });
        DomHandler.focus(this.inputEL.nativeElement);
    }
    updateModel(value) {
        this.value = value;
        this.modelValue.set(value);
        this.onModelChange(value);
        this.updateInputValue();
        this.cd.markForCheck();
    }
    updateInputValue() {
        if (this.inputEL && this.inputEL.nativeElement) {
            if (!this.multiple) {
                this.inputEL.nativeElement.value = this.inputValue();
            }
            else {
                this.inputEL.nativeElement.value = '';
            }
        }
    }
    autoUpdateModel() {
        if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
            const focusedOptionIndex = this.findFirstFocusedOptionIndex();
            this.focusedOptionIndex.set(focusedOptionIndex);
            this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
        }
    }
    scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
            const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
            else if (!this.virtualScrollerDisabled) {
                setTimeout(() => {
                    this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
                }, 0);
            }
        }
    }
    changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionIndex() !== index) {
            this.focusedOptionIndex.set(index);
            this.scrollInView();
            if (this.selectOnFocus) {
                this.onOptionSelect(event, this.visibleOptions()[index], false);
            }
        }
    }
    show(isFocus = false) {
        this.dirty = true;
        this.overlayVisible = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        isFocus && DomHandler.focus(this.inputEL.nativeElement);
        if (isFocus) {
            DomHandler.focus(this.inputEL.nativeElement);
        }
        this.onShow.emit();
        this.cd.markForCheck();
    }
    hide(isFocus = false) {
        const _hide = () => {
            this.dirty = isFocus;
            this.overlayVisible = false;
            this.focusedOptionIndex.set(-1);
            isFocus && DomHandler.focus(this.inputEL.nativeElement);
            this.onHide.emit();
            this.cd.markForCheck();
        };
        setTimeout(() => {
            _hide();
        }, 0); // For ScreenReaders
    }
    clear() {
        this.updateModel(null);
        this.inputEL.nativeElement.value = '';
        this.onClear.emit();
    }
    writeValue(value) {
        this.value = value;
        this.modelValue.set(value);
        this.updateInputValue();
        this.cd.markForCheck();
    }
    hasSelectedOption() {
        return ObjectUtils.isNotEmpty(this.modelValue());
    }
    getAriaPosInset(index) {
        return ((this.optionGroupLabel
            ? index -
                this.visibleOptions()
                    .slice(0, index)
                    .filter((option) => this.isOptionGroup(option)).length
            : index) + 1);
    }
    getOptionLabel(option) {
        return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option && option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
        return option; // TODO: The 'optionValue' properties can be added.
    }
    getOptionIndex(index, scrollerOptions) {
        return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
        if (event.toState === 'visible') {
            this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-autocomplete-panel');
            if (this.virtualScroll) {
                this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
                this.scroller.viewInit();
            }
            if (this.visibleOptions() && this.visibleOptions().length) {
                if (this.virtualScroll) {
                    const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
                    if (selectedIndex !== -1) {
                        this.scroller?.scrollToIndex(selectedIndex);
                    }
                }
                else {
                    let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.p-autocomplete-item.p-highlight');
                    if (selectedListItem) {
                        selectedListItem.scrollIntoView({ block: 'nearest', inline: 'center' });
                    }
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: AutoComplete, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i1.PrimeNGConfig }, { token: i1.OverlayService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "17.3.1", type: AutoComplete, selector: "p-autoComplete", inputs: { minLength: ["minLength", "minLength", numberAttribute], delay: ["delay", "delay", numberAttribute], style: "style", panelStyle: "panelStyle", styleClass: "styleClass", panelStyleClass: "panelStyleClass", inputStyle: "inputStyle", inputId: "inputId", inputStyleClass: "inputStyleClass", placeholder: "placeholder", readonly: ["readonly", "readonly", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], scrollHeight: "scrollHeight", lazy: ["lazy", "lazy", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], virtualScrollItemSize: ["virtualScrollItemSize", "virtualScrollItemSize", numberAttribute], virtualScrollOptions: "virtualScrollOptions", maxlength: ["maxlength", "maxlength", numberAttribute], name: "name", required: ["required", "required", booleanAttribute], size: ["size", "size", numberAttribute], appendTo: "appendTo", autoHighlight: ["autoHighlight", "autoHighlight", booleanAttribute], forceSelection: ["forceSelection", "forceSelection", booleanAttribute], type: "type", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], ariaLabel: "ariaLabel", dropdownAriaLabel: "dropdownAriaLabel", ariaLabelledBy: "ariaLabelledBy", dropdownIcon: "dropdownIcon", unique: ["unique", "unique", booleanAttribute], group: ["group", "group", booleanAttribute], completeOnFocus: ["completeOnFocus", "completeOnFocus", booleanAttribute], showClear: ["showClear", "showClear", booleanAttribute], field: "field", dropdown: ["dropdown", "dropdown", booleanAttribute], showEmptyMessage: ["showEmptyMessage", "showEmptyMessage", booleanAttribute], dropdownMode: "dropdownMode", multiple: ["multiple", "multiple", booleanAttribute], tabindex: ["tabindex", "tabindex", numberAttribute], dataKey: "dataKey", emptyMessage: "emptyMessage", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", autofocus: ["autofocus", "autofocus", booleanAttribute], autocomplete: "autocomplete", optionGroupChildren: "optionGroupChildren", optionGroupLabel: "optionGroupLabel", overlayOptions: "overlayOptions", suggestions: "suggestions", itemSize: "itemSize", optionLabel: "optionLabel", id: "id", searchMessage: "searchMessage", emptySelectionMessage: "emptySelectionMessage", selectionMessage: "selectionMessage", autoOptionFocus: ["autoOptionFocus", "autoOptionFocus", booleanAttribute], selectOnFocus: ["selectOnFocus", "selectOnFocus", booleanAttribute], searchLocale: ["searchLocale", "searchLocale", booleanAttribute], optionDisabled: "optionDisabled", focusOnHover: ["focusOnHover", "focusOnHover", booleanAttribute] }, outputs: { completeMethod: "completeMethod", onSelect: "onSelect", onUnselect: "onUnselect", onFocus: "onFocus", onBlur: "onBlur", onDropdownClick: "onDropdownClick", onClear: "onClear", onKeyUp: "onKeyUp", onShow: "onShow", onHide: "onHide", onLazyLoad: "onLazyLoad" }, host: { properties: { "class.p-inputwrapper-filled": "filled", "class.p-inputwrapper-focus": "((focused && !disabled) || autofocus) || overlayVisible", "class.p-autocomplete-clearable": "showClear && !disabled" }, classAttribute: "p-element p-inputwrapper" }, providers: [AUTOCOMPLETE_VALUE_ACCESSOR], queries: [{ propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "containerEL", first: true, predicate: ["container"], descendants: true }, { propertyName: "inputEL", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "multiInputEl", first: true, predicate: ["multiIn"], descendants: true }, { propertyName: "multiContainerEL", first: true, predicate: ["multiContainer"], descendants: true }, { propertyName: "dropdownButton", first: true, predicate: ["ddBtn"], descendants: true }, { propertyName: "itemsViewChild", first: true, predicate: ["items"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }], ngImport: i0, template: `
        <div #container [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <input
                *ngIf="!multiple"
                #focusInput
                pAutoFocus
                [autofocus]="autofocus"
                [ngClass]="inputClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [type]="type"
                [attr.value]="inputValue()"
                [attr.id]="inputId"
                [autocomplete]="autocomplete"
                [required]="required"
                [name]="name"
                aria-autocomplete="list"
                role="combobox"
                [attr.placeholder]="placeholder"
                [attr.size]="size"
                [maxlength]="maxlength"
                [tabindex]="!disabled ? tabindex : -1"
                [readonly]="readonly"
                [disabled]="disabled"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-required]="required"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (input)="onInput($event)"
                (keydown)="onKeyDown($event)"
                (change)="onInputChange($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (paste)="onInputPaste($event)"
                (keyup)="onInputKeyUp($event)"
            />
            <ng-container *ngIf="filled && !disabled && showClear && !loading">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-autocomplete-clear-icon'" (click)="clear()" [attr.aria-hidden]="true" />
                <span *ngIf="clearIconTemplate" class="p-autocomplete-clear-icon" (click)="clear()" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ul
                *ngIf="multiple"
                #multiContainer
                [class]="multiContainerClass"
                [tabindex]="-1"
                role="listbox"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"
                (focus)="onMultipleContainerFocus($event)"
                (blur)="onMultipleContainerBlur($event)"
                (keydown)="onMultipleContainerKeyDown($event)"
            >
                <li
                    #token
                    *ngFor="let option of modelValue(); let i = index"
                    [ngClass]="{ 'p-autocomplete-token': true, 'p-focus': focusedMultipleOptionIndex() === i }"
                    [attr.id]="id + '_multiple_option_' + i"
                    role="option"
                    [attr.aria-label]="getOptionLabel(option)"
                    [attr.aria-setsize]="modelValue().length"
                    [attr.aria-posinset]="i + 1"
                    [attr.aria-selected]="true"
                >
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: { $implicit: option }"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{ getOptionLabel(option) }}</span>
                    <span class="p-autocomplete-token-icon" (click)="!readonly ? removeOption($event, i) : ''">
                        <TimesCircleIcon [styleClass]="'p-autocomplete-token-icon'" *ngIf="!removeIconTemplate" [attr.aria-hidden]="true" />
                        <span *ngIf="removeIconTemplate" class="p-autocomplete-token-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                        </span>
                    </span>
                </li>
                <li class="p-autocomplete-input-token" role="option">
                    <input
                        #focusInput
                        pAutoFocus
                        [autofocus]="autofocus"
                        [ngClass]="inputClass"
                        [ngStyle]="inputStyle"
                        [class]="inputStyleClass"
                        [attr.type]="type"
                        [attr.id]="inputId"
                        [autocomplete]="autocomplete"
                        [required]="required"
                        [attr.name]="name"
                        role="combobox"
                        [attr.placeholder]="!filled ? placeholder : null"
                        [attr.size]="size"
                        aria-autocomplete="list"
                        [maxlength]="maxlength"
                        [tabindex]="!disabled ? tabindex : -1"
                        [readonly]="readonly"
                        [disabled]="disabled"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [attr.aria-required]="required"
                        [attr.aria-expanded]="overlayVisible ?? false"
                        [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        (input)="onInput($event)"
                        (keydown)="onKeyDown($event)"
                        (change)="onInputChange($event)"
                        (focus)="onInputFocus($event)"
                        (blur)="onInputBlur($event)"
                        (paste)="onInputPaste($event)"
                        (keyup)="onInputKeyUp($event)"
                    />
                </li>
            </ul>
            <ng-container *ngIf="loading">
                <SpinnerIcon *ngIf="!loadingIconTemplate" [styleClass]="'p-autocomplete-loader'" [spin]="true" [attr.aria-hidden]="true" />
                <span *ngIf="loadingIconTemplate" class="p-autocomplete-loader pi-spin " [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button #ddBtn type="button" pButton [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown p-button-icon-only" [disabled]="disabled" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">
                <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                <ng-container *ngIf="!dropdownIcon">
                    <ChevronDownIcon *ngIf="!dropdownIconTemplate" />
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </ng-container>
            </button>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <div [ngClass]="panelClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <p-scroller
                        *ngIf="virtualScroll"
                        #scroller
                        [items]="visibleOptions()"
                        [style]="{ height: scrollHeight }"
                        [itemSize]="virtualScrollItemSize || _itemSize"
                        [autoSize]="true"
                        [lazy]="lazy"
                        (onLazyLoad)="onLazyLoad.emit($event)"
                        [options]="virtualScrollOptions"
                    >
                        <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                        </ng-template>
                        <ng-container *ngIf="loaderTemplate">
                            <ng-template pTemplate="loader" let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                            </ng-template>
                        </ng-container>
                    </p-scroller>
                    <ng-container *ngIf="!virtualScroll">
                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                    </ng-container>

                    <ng-template #buildInItems let-items let-scrollerOptions="options">
                        <ul #items class="p-autocomplete-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + '_list'" [attr.aria-label]="listLabel">
                            <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                <ng-container *ngIf="isOptionGroup(option)">
                                    <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-autocomplete-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                        <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                    </li>
                                </ng-container>
                                <ng-container *ngIf="!isOptionGroup(option)">
                                    <li
                                        class="p-autocomplete-item"
                                        pRipple
                                        [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                        [ngClass]="{ 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                        [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                        role="option"
                                        [attr.aria-label]="getOptionLabel(option)"
                                        [attr.aria-selected]="isSelected(option)"
                                        [attr.aria-disabled]="isOptionDisabled(option)"
                                        [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                        [attr.aria-setsize]="ariaSetSize"
                                        [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                        (click)="onOptionSelect($event, option)"
                                        (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    >
                                        <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i }"></ng-container>
                                    </li>
                                </ng-container>
                            </ng-template>
                            <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" class="p-autocomplete-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                <ng-container *ngIf="!emptyTemplate; else empty">
                                    {{ searchResultMessageText }}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                            </li>
                        </ul>
                    </ng-template>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <span role="status" aria-live="polite" class="p-hidden-accessible">
                    {{ selectedMessageText }}
                </span>
            </p-overlay>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgForOf), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgIf), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgStyle), selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i0.forwardRef(() => i3.Overlay), selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: i0.forwardRef(() => i1.PrimeTemplate), selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i0.forwardRef(() => i4.ButtonDirective), selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading", "severity", "raised", "rounded", "text", "outlined", "size", "plain"] }, { kind: "directive", type: i0.forwardRef(() => i5.Ripple), selector: "[pRipple]" }, { kind: "component", type: i0.forwardRef(() => i6.Scroller), selector: "p-scroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "directive", type: i0.forwardRef(() => i7.AutoFocus), selector: "[pAutoFocus]", inputs: ["autofocus"] }, { kind: "component", type: i0.forwardRef(() => TimesCircleIcon), selector: "TimesCircleIcon" }, { kind: "component", type: i0.forwardRef(() => SpinnerIcon), selector: "SpinnerIcon" }, { kind: "component", type: i0.forwardRef(() => TimesIcon), selector: "TimesIcon" }, { kind: "component", type: i0.forwardRef(() => ChevronDownIcon), selector: "ChevronDownIcon" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: AutoComplete, decorators: [{
            type: Component,
            args: [{ selector: 'p-autoComplete', template: `
        <div #container [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (click)="onContainerClick($event)">
            <input
                *ngIf="!multiple"
                #focusInput
                pAutoFocus
                [autofocus]="autofocus"
                [ngClass]="inputClass"
                [ngStyle]="inputStyle"
                [class]="inputStyleClass"
                [type]="type"
                [attr.value]="inputValue()"
                [attr.id]="inputId"
                [autocomplete]="autocomplete"
                [required]="required"
                [name]="name"
                aria-autocomplete="list"
                role="combobox"
                [attr.placeholder]="placeholder"
                [attr.size]="size"
                [maxlength]="maxlength"
                [tabindex]="!disabled ? tabindex : -1"
                [readonly]="readonly"
                [disabled]="disabled"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-required]="required"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (input)="onInput($event)"
                (keydown)="onKeyDown($event)"
                (change)="onInputChange($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (paste)="onInputPaste($event)"
                (keyup)="onInputKeyUp($event)"
            />
            <ng-container *ngIf="filled && !disabled && showClear && !loading">
                <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-autocomplete-clear-icon'" (click)="clear()" [attr.aria-hidden]="true" />
                <span *ngIf="clearIconTemplate" class="p-autocomplete-clear-icon" (click)="clear()" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <ul
                *ngIf="multiple"
                #multiContainer
                [class]="multiContainerClass"
                [tabindex]="-1"
                role="listbox"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-activedescendant]="focused ? focusedMultipleOptionId : undefined"
                (focus)="onMultipleContainerFocus($event)"
                (blur)="onMultipleContainerBlur($event)"
                (keydown)="onMultipleContainerKeyDown($event)"
            >
                <li
                    #token
                    *ngFor="let option of modelValue(); let i = index"
                    [ngClass]="{ 'p-autocomplete-token': true, 'p-focus': focusedMultipleOptionIndex() === i }"
                    [attr.id]="id + '_multiple_option_' + i"
                    role="option"
                    [attr.aria-label]="getOptionLabel(option)"
                    [attr.aria-setsize]="modelValue().length"
                    [attr.aria-posinset]="i + 1"
                    [attr.aria-selected]="true"
                >
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: { $implicit: option }"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{ getOptionLabel(option) }}</span>
                    <span class="p-autocomplete-token-icon" (click)="!readonly ? removeOption($event, i) : ''">
                        <TimesCircleIcon [styleClass]="'p-autocomplete-token-icon'" *ngIf="!removeIconTemplate" [attr.aria-hidden]="true" />
                        <span *ngIf="removeIconTemplate" class="p-autocomplete-token-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                        </span>
                    </span>
                </li>
                <li class="p-autocomplete-input-token" role="option">
                    <input
                        #focusInput
                        pAutoFocus
                        [autofocus]="autofocus"
                        [ngClass]="inputClass"
                        [ngStyle]="inputStyle"
                        [class]="inputStyleClass"
                        [attr.type]="type"
                        [attr.id]="inputId"
                        [autocomplete]="autocomplete"
                        [required]="required"
                        [attr.name]="name"
                        role="combobox"
                        [attr.placeholder]="!filled ? placeholder : null"
                        [attr.size]="size"
                        aria-autocomplete="list"
                        [maxlength]="maxlength"
                        [tabindex]="!disabled ? tabindex : -1"
                        [readonly]="readonly"
                        [disabled]="disabled"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-labelledby]="ariaLabelledBy"
                        [attr.aria-required]="required"
                        [attr.aria-expanded]="overlayVisible ?? false"
                        [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        (input)="onInput($event)"
                        (keydown)="onKeyDown($event)"
                        (change)="onInputChange($event)"
                        (focus)="onInputFocus($event)"
                        (blur)="onInputBlur($event)"
                        (paste)="onInputPaste($event)"
                        (keyup)="onInputKeyUp($event)"
                    />
                </li>
            </ul>
            <ng-container *ngIf="loading">
                <SpinnerIcon *ngIf="!loadingIconTemplate" [styleClass]="'p-autocomplete-loader'" [spin]="true" [attr.aria-hidden]="true" />
                <span *ngIf="loadingIconTemplate" class="p-autocomplete-loader pi-spin " [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button #ddBtn type="button" pButton [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown p-button-icon-only" [disabled]="disabled" pRipple (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex">
                <span *ngIf="dropdownIcon" [ngClass]="dropdownIcon" [attr.aria-hidden]="true"></span>
                <ng-container *ngIf="!dropdownIcon">
                    <ChevronDownIcon *ngIf="!dropdownIconTemplate" />
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </ng-container>
            </button>
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <div [ngClass]="panelClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <p-scroller
                        *ngIf="virtualScroll"
                        #scroller
                        [items]="visibleOptions()"
                        [style]="{ height: scrollHeight }"
                        [itemSize]="virtualScrollItemSize || _itemSize"
                        [autoSize]="true"
                        [lazy]="lazy"
                        (onLazyLoad)="onLazyLoad.emit($event)"
                        [options]="virtualScrollOptions"
                    >
                        <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                        </ng-template>
                        <ng-container *ngIf="loaderTemplate">
                            <ng-template pTemplate="loader" let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                            </ng-template>
                        </ng-container>
                    </p-scroller>
                    <ng-container *ngIf="!virtualScroll">
                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                    </ng-container>

                    <ng-template #buildInItems let-items let-scrollerOptions="options">
                        <ul #items class="p-autocomplete-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" [attr.id]="id + '_list'" [attr.aria-label]="listLabel">
                            <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                <ng-container *ngIf="isOptionGroup(option)">
                                    <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-autocomplete-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                        <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                        <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                    </li>
                                </ng-container>
                                <ng-container *ngIf="!isOptionGroup(option)">
                                    <li
                                        class="p-autocomplete-item"
                                        pRipple
                                        [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                        [ngClass]="{ 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                        [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                        role="option"
                                        [attr.aria-label]="getOptionLabel(option)"
                                        [attr.aria-selected]="isSelected(option)"
                                        [attr.aria-disabled]="isOptionDisabled(option)"
                                        [attr.data-p-focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                        [attr.aria-setsize]="ariaSetSize"
                                        [attr.aria-posinset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                        (click)="onOptionSelect($event, option)"
                                        (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    >
                                        <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                        <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: scrollerOptions.getOptions ? scrollerOptions.getOptions(i) : i }"></ng-container>
                                    </li>
                                </ng-container>
                            </ng-template>
                            <li *ngIf="!items || (items && items.length === 0 && showEmptyMessage)" class="p-autocomplete-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                <ng-container *ngIf="!emptyTemplate; else empty">
                                    {{ searchResultMessageText }}
                                </ng-container>
                                <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                            </li>
                        </ul>
                    </ng-template>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <span role="status" aria-live="polite" class="p-hidden-accessible">
                    {{ selectedMessageText }}
                </span>
            </p-overlay>
        </div>
    `, host: {
                        class: 'p-element p-inputwrapper',
                        '[class.p-inputwrapper-filled]': 'filled',
                        '[class.p-inputwrapper-focus]': '((focused && !disabled) || autofocus) || overlayVisible',
                        '[class.p-autocomplete-clearable]': 'showClear && !disabled'
                    }, providers: [AUTOCOMPLETE_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.PrimeNGConfig }, { type: i1.OverlayService }, { type: i0.NgZone }], propDecorators: { minLength: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], style: [{
                type: Input
            }], panelStyle: [{
                type: Input
            }], styleClass: [{
                type: Input
            }], panelStyleClass: [{
                type: Input
            }], inputStyle: [{
                type: Input
            }], inputId: [{
                type: Input
            }], inputStyleClass: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], readonly: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], scrollHeight: [{
                type: Input
            }], lazy: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], virtualScroll: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], virtualScrollItemSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], virtualScrollOptions: [{
                type: Input
            }], maxlength: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], name: [{
                type: Input
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], size: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], appendTo: [{
                type: Input
            }], autoHighlight: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], forceSelection: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], type: [{
                type: Input
            }], autoZIndex: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], baseZIndex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], ariaLabel: [{
                type: Input
            }], dropdownAriaLabel: [{
                type: Input
            }], ariaLabelledBy: [{
                type: Input
            }], dropdownIcon: [{
                type: Input
            }], unique: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], group: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], completeOnFocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showClear: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], field: [{
                type: Input
            }], dropdown: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], showEmptyMessage: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], dropdownMode: [{
                type: Input
            }], multiple: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], tabindex: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], dataKey: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], showTransitionOptions: [{
                type: Input
            }], hideTransitionOptions: [{
                type: Input
            }], autofocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], autocomplete: [{
                type: Input
            }], optionGroupChildren: [{
                type: Input
            }], optionGroupLabel: [{
                type: Input
            }], overlayOptions: [{
                type: Input
            }], suggestions: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }], id: [{
                type: Input
            }], searchMessage: [{
                type: Input
            }], emptySelectionMessage: [{
                type: Input
            }], selectionMessage: [{
                type: Input
            }], autoOptionFocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], selectOnFocus: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], searchLocale: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], optionDisabled: [{
                type: Input
            }], focusOnHover: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], completeMethod: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onUnselect: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onDropdownClick: [{
                type: Output
            }], onClear: [{
                type: Output
            }], onKeyUp: [{
                type: Output
            }], onShow: [{
                type: Output
            }], onHide: [{
                type: Output
            }], onLazyLoad: [{
                type: Output
            }], containerEL: [{
                type: ViewChild,
                args: ['container']
            }], inputEL: [{
                type: ViewChild,
                args: ['focusInput']
            }], multiInputEl: [{
                type: ViewChild,
                args: ['multiIn']
            }], multiContainerEL: [{
                type: ViewChild,
                args: ['multiContainer']
            }], dropdownButton: [{
                type: ViewChild,
                args: ['ddBtn']
            }], itemsViewChild: [{
                type: ViewChild,
                args: ['items']
            }], scroller: [{
                type: ViewChild,
                args: ['scroller']
            }], overlayViewChild: [{
                type: ViewChild,
                args: ['overlay']
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
export class AutoCompleteModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: AutoCompleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.1", ngImport: i0, type: AutoCompleteModule, declarations: [AutoComplete], imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon], exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: AutoCompleteModule, imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: AutoCompleteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, InputTextModule, ButtonModule, SharedModule, RippleModule, ScrollerModule, AutoFocusModule, TimesCircleIcon, SpinnerIcon, TimesIcon, ChevronDownIcon],
                    exports: [AutoComplete, OverlayModule, SharedModule, ScrollerModule, AutoFocusModule],
                    declarations: [AutoComplete]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBR0gsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixNQUFNLEVBRU4sWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFFUixlQUFlLEVBRWYsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWlELGFBQWEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFpQyxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBVyxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFZLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7QUFJNUQsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQVE7SUFDNUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFDRjs7O0dBR0c7QUFpT0gsTUFBTSxPQUFPLFlBQVk7SUFra0JpQjtJQUEyQjtJQUF1QjtJQUE0QjtJQUE4QjtJQUE4QjtJQUF3QztJQWprQnhOOzs7T0FHRztJQUNvQyxTQUFTLEdBQVcsQ0FBQyxDQUFDO0lBQzdEOzs7T0FHRztJQUNvQyxLQUFLLEdBQVcsR0FBRyxDQUFDO0lBQzNEOzs7T0FHRztJQUNNLEtBQUssQ0FBOEM7SUFDNUQ7OztPQUdHO0lBQ00sVUFBVSxDQUE4QztJQUNqRTs7O09BR0c7SUFDTSxVQUFVLENBQXFCO0lBQ3hDOzs7T0FHRztJQUNNLGVBQWUsQ0FBcUI7SUFDN0M7OztPQUdHO0lBQ00sVUFBVSxDQUE4QztJQUNqRTs7O09BR0c7SUFDTSxPQUFPLENBQXFCO0lBQ3JDOzs7T0FHRztJQUNNLGVBQWUsQ0FBcUI7SUFDN0M7OztPQUdHO0lBQ00sV0FBVyxDQUFxQjtJQUN6Qzs7O09BR0c7SUFDcUMsUUFBUSxDQUFzQjtJQUN0RTs7O09BR0c7SUFDcUMsUUFBUSxDQUFzQjtJQUN0RTs7O09BR0c7SUFDTSxZQUFZLEdBQVcsT0FBTyxDQUFDO0lBQ3hDOzs7T0FHRztJQUNxQyxJQUFJLEdBQVksS0FBSyxDQUFDO0lBQzlEOzs7T0FHRztJQUNxQyxhQUFhLENBQXNCO0lBQzNFOzs7T0FHRztJQUNvQyxxQkFBcUIsQ0FBcUI7SUFDakY7OztPQUdHO0lBQ00sb0JBQW9CLENBQThCO0lBQzNEOzs7T0FHRztJQUNvQyxTQUFTLENBQXFCO0lBQ3JFOzs7T0FHRztJQUNNLElBQUksQ0FBcUI7SUFDbEM7OztPQUdHO0lBQ3FDLFFBQVEsQ0FBc0I7SUFDdEU7OztPQUdHO0lBQ29DLElBQUksQ0FBcUI7SUFDaEU7OztPQUdHO0lBQ00sUUFBUSxDQUFnRjtJQUNqRzs7O09BR0c7SUFDcUMsYUFBYSxDQUFzQjtJQUMzRTs7O09BR0c7SUFDcUMsY0FBYyxDQUFzQjtJQUM1RTs7O09BR0c7SUFDTSxJQUFJLEdBQVcsTUFBTSxDQUFDO0lBQy9COzs7T0FHRztJQUNxQyxVQUFVLEdBQVksSUFBSSxDQUFDO0lBQ25FOzs7T0FHRztJQUNvQyxVQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQzlEOzs7T0FHRztJQUNNLFNBQVMsQ0FBcUI7SUFDdkM7OztPQUdHO0lBQ00saUJBQWlCLENBQXFCO0lBQy9DOzs7T0FHRztJQUNNLGNBQWMsQ0FBcUI7SUFDNUM7OztPQUdHO0lBQ00sWUFBWSxDQUFxQjtJQUMxQzs7O09BR0c7SUFDcUMsTUFBTSxHQUFZLElBQUksQ0FBQztJQUMvRDs7O09BR0c7SUFDcUMsS0FBSyxDQUFzQjtJQUNuRTs7O09BR0c7SUFDcUMsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUN6RTs7O09BR0c7SUFDcUMsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUNuRTs7OztPQUlHO0lBQ00sS0FBSyxDQUFxQjtJQUNuQzs7O09BR0c7SUFDcUMsUUFBUSxDQUFzQjtJQUN0RTs7O09BR0c7SUFDcUMsZ0JBQWdCLEdBQXdCLElBQUksQ0FBQztJQUNyRjs7O09BR0c7SUFDTSxZQUFZLEdBQVcsT0FBTyxDQUFDO0lBQ3hDOzs7T0FHRztJQUNxQyxRQUFRLENBQXNCO0lBQ3RFOzs7T0FHRztJQUNvQyxRQUFRLENBQXFCO0lBQ3BFOzs7T0FHRztJQUNNLE9BQU8sQ0FBcUI7SUFDckM7OztPQUdHO0lBQ00sWUFBWSxDQUFxQjtJQUMxQzs7O09BR0c7SUFDTSxxQkFBcUIsR0FBVyxpQ0FBaUMsQ0FBQztJQUMzRTs7O09BR0c7SUFDTSxxQkFBcUIsR0FBVyxZQUFZLENBQUM7SUFDdEQ7OztPQUdHO0lBQ3FDLFNBQVMsQ0FBc0I7SUFDdkU7OztPQUdHO0lBQ00sWUFBWSxHQUFXLEtBQUssQ0FBQztJQUN0Qzs7O09BR0c7SUFDTSxtQkFBbUIsR0FBdUIsT0FBTyxDQUFDO0lBQzNEOzs7T0FHRztJQUNNLGdCQUFnQixHQUF1QixPQUFPLENBQUM7SUFDeEQ7OztPQUdHO0lBQ00sY0FBYyxDQUE2QjtJQUNwRDs7O09BR0c7SUFDSCxJQUFhLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxJQUFhLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBbUIsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLGtGQUFrRixDQUFDLENBQUM7SUFDckcsQ0FBQztJQUNEOzs7T0FHRztJQUNNLFdBQVcsQ0FBK0M7SUFDbkU7OztPQUdHO0lBQ00sRUFBRSxDQUFxQjtJQUNoQzs7OztPQUlHO0lBQ00sYUFBYSxDQUFxQjtJQUMzQzs7OztPQUlHO0lBQ00scUJBQXFCLENBQXFCO0lBQ25EOzs7O09BSUc7SUFDTSxnQkFBZ0IsQ0FBcUI7SUFDOUM7OztPQUdHO0lBQ3FDLGVBQWUsR0FBd0IsS0FBSyxDQUFDO0lBQ3JGOzs7T0FHRztJQUNxQyxhQUFhLENBQXNCO0lBQzNFOzs7T0FHRztJQUNxQyxZQUFZLENBQXNCO0lBQzFFOzs7T0FHRztJQUNNLGNBQWMsQ0FBcUI7SUFDNUM7OztPQUdHO0lBQ3FDLFlBQVksQ0FBc0I7SUFDMUU7Ozs7T0FJRztJQUNPLGNBQWMsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7SUFDbEg7Ozs7T0FJRztJQUNPLFFBQVEsR0FBMEMsSUFBSSxZQUFZLEVBQTJCLENBQUM7SUFDeEc7Ozs7T0FJRztJQUNPLFVBQVUsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7SUFDOUc7Ozs7T0FJRztJQUNPLE9BQU8sR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM1RDs7OztPQUlHO0lBQ08sTUFBTSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzNEOzs7O09BSUc7SUFDTyxlQUFlLEdBQWlELElBQUksWUFBWSxFQUFrQyxDQUFDO0lBQzdIOzs7O09BSUc7SUFDTyxPQUFPLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO0lBQzNGOzs7O09BSUc7SUFDTyxPQUFPLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7SUFDcEU7Ozs7T0FJRztJQUNPLE1BQU0sR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUNsRTs7OztPQUlHO0lBQ08sTUFBTSxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO0lBQ2xFOzs7O09BSUc7SUFDTyxVQUFVLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO0lBRXRGLFdBQVcsQ0FBdUI7SUFFakMsT0FBTyxDQUF1QjtJQUVqQyxZQUFZLENBQXVCO0lBRTVCLGdCQUFnQixDQUF1QjtJQUVoRCxjQUFjLENBQXVCO0lBRXJDLGNBQWMsQ0FBdUI7SUFFbEMsUUFBUSxDQUFxQjtJQUU5QixnQkFBZ0IsQ0FBVztJQUVqQixTQUFTLENBQXFDO0lBRTlFLFNBQVMsQ0FBbUI7SUFFNUIsWUFBWSxDQUEyQjtJQUV2QyxZQUFZLENBQTZCO0lBRXpDLGFBQWEsQ0FBNkI7SUFFMUMsY0FBYyxDQUE2QjtJQUUzQyxjQUFjLENBQTZCO0lBRTNDLG9CQUFvQixDQUE2QjtJQUVqRCxhQUFhLENBQTZCO0lBRTFDLGNBQWMsQ0FBNkI7SUFFM0Msa0JBQWtCLENBQTZCO0lBRS9DLG1CQUFtQixDQUE2QjtJQUVoRCxpQkFBaUIsQ0FBNkI7SUFFOUMsb0JBQW9CLENBQTZCO0lBRWpELEtBQUssQ0FBZTtJQUVwQixZQUFZLEdBQUcsTUFBTSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBRWpDLGFBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFbkMsY0FBYyxHQUFhLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVwQyxPQUFPLENBQWdCO0lBRXZCLGNBQWMsQ0FBc0I7SUFFcEMsa0JBQWtCLENBQW9CO0lBRXRDLGVBQWUsQ0FBTTtJQUVyQixzQkFBc0IsQ0FBb0I7SUFFMUMsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUV6QixPQUFPLENBQVU7SUFFakIsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPLENBQW9CO0lBRTNCLGFBQWEsQ0FBMEM7SUFFdkQsTUFBTSxDQUFxQjtJQUUzQixhQUFhLENBQU07SUFFbkIsS0FBSyxHQUFZLEtBQUssQ0FBQztJQUV2QixVQUFVLEdBQUcsTUFBTSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBRS9CLDBCQUEwQixHQUFHLE1BQU0sQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhELGtCQUFrQixHQUFHLE1BQU0sQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhDLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxRixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILE9BQU8sVUFBVSxDQUFDO2FBQ3JCO1NBQ0o7YUFBTTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksdUJBQXVCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsb0JBQW9CLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvSCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRixDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTztZQUNILDJDQUEyQyxFQUFFLElBQUk7WUFDakQsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN2QixtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNsQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN4QyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYztTQUN4QyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sMkRBQTJELENBQUM7SUFDdkUsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU87WUFDSCxrQ0FBa0MsRUFBRSxJQUFJO1lBQ3hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLFFBQVE7WUFDckQsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSztTQUNwRCxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU87WUFDSCw4Q0FBOEMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzlELHlCQUF5QixFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzNDLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDdkIsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZMLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBSSxzQkFBc0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztJQUNqRixDQUFDO0lBRUQsSUFBSSxvQkFBb0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO0lBQ25GLENBQUM7SUFFRCxJQUFJLHlCQUF5QjtRQUN6QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDN0YsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDbkssQ0FBQztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3hGLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQXNDLFFBQWtCLEVBQVMsRUFBYyxFQUFTLFFBQW1CLEVBQVMsRUFBcUIsRUFBUyxNQUFxQixFQUFTLGNBQThCLEVBQVUsSUFBWTtRQUE5TCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2hPLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGtCQUFrQjtRQUNkLHFHQUFxRztRQUNyRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDeEM7Z0JBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxrQkFBa0I7UUFDYixJQUFJLENBQUMsU0FBc0MsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxRCxRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDcEIsS0FBSyxNQUFNO29CQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsTUFBTTtnQkFFVixLQUFLLE9BQU87b0JBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNuQyxNQUFNO2dCQUVWLEtBQUssY0FBYztvQkFDZixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDMUMsTUFBTTtnQkFFVixLQUFLLFFBQVE7b0JBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNwQyxNQUFNO2dCQUVWLEtBQUssT0FBTztvQkFDUixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ25DLE1BQU07Z0JBRVYsS0FBSyxRQUFRO29CQUNULElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDcEMsTUFBTTtnQkFFVixLQUFLLFFBQVE7b0JBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNwQyxNQUFNO2dCQUVWLEtBQUssaUJBQWlCO29CQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDeEMsTUFBTTtnQkFFVixLQUFLLGFBQWE7b0JBQ2QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLE1BQU07Z0JBRVYsS0FBSyxXQUFXO29CQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN2QyxNQUFNO2dCQUVWLEtBQUssY0FBYztvQkFDZixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDMUMsTUFBTTtnQkFFVjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLE1BQU07YUFDYjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNmLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFekQsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEUsbUJBQW1CLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUUsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELDJCQUEyQjtRQUN2QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUVyRCxPQUFPLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDM0UsQ0FBQztJQUVELDBCQUEwQjtRQUN0QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUVyRCxPQUFPLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDMUUsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUs7UUFDckIsTUFBTSxrQkFBa0IsR0FDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtpQkFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7aUJBQ2hCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFYixPQUFPLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQUs7UUFDckIsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJKLE9BQU8sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDaEUsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQU07UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFNO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQU07UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQy9JO1FBQ0QsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUs7UUFDekIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekosQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFLO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsS0FBSztRQUNuQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN2SyxDQUFDO0lBQ0QsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1EQUFtRDtJQUM1RSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBSztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3JCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0gsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFFekMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU87Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNqRSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbkY7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtTQUNKO0lBQ0wsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVsQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxJLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtvQkFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDYixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQzlFO2FBQ0o7WUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3RDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixvQkFBb0I7WUFDcEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQUs7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2Ysb0JBQW9CO1lBQ3BCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBSztRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsT0FBTztTQUNWO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU07WUFFVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1lBRVYsS0FBSyxXQUFXO2dCQUNaLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckMsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsT0FBTztTQUNWO1FBRUQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBRVYsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFFVixLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtZQUVWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1lBRVYsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFFVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsTUFBTTtZQUVWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBRVYsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU07WUFFVixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBRVYsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU07WUFFVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsTUFBTTtZQUVWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBRVYsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxZQUFZO2dCQUNiLE1BQU07Z0JBQ04sTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRWhKLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBRUQsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBRS9JLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNoQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO2dCQUMvRCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakU7aUJBQU07Z0JBQ0gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsNkNBQTZDO2FBQ3pFO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsOENBQThDO0lBQzVGLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNYLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDaEMsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFdkMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNoQyxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUV2QyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7YUFDdkU7WUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7U0FDekU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUJBQXlCLENBQUMsS0FBSztRQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNwRCxXQUFXLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLO1FBQzFCLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztTQUMvRDtJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQUcsSUFBSTtRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU1RCxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtRQUN2Qiw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkMsT0FBTztTQUNWO1FBRUQsNENBQTRDO1FBQzVDLElBQUksTUFBTSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTthQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO2FBQzdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN4RDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ3pDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDakcsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUM5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEY7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxFQUFFLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdkUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO1lBQzFELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNGLElBQUksT0FBTyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7YUFDN0Y7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDWixJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ2pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25FO1NBQ0o7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekosSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNoQixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0lBQy9CLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDakIsT0FBTyxDQUNILENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUNsQixDQUFDLENBQUMsS0FBSztnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFO3FCQUNoQixLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztxQkFDZixNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzVELENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ25CLENBQUM7SUFDTixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQy9LLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBTTtRQUNqQixPQUFPLE1BQU0sQ0FBQyxDQUFDLG1EQUFtRDtJQUN0RSxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQUssRUFBRSxlQUFlO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxXQUFnQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDdEwsQ0FBQztJQUVELHNCQUFzQixDQUFDLFdBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzlILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFZO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFZO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQXFCO1FBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRS9KLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1QjtZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDcEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXpFLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDL0M7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztvQkFFcEcsSUFBSSxnQkFBZ0IsRUFBRTt3QkFDbEIsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztxQkFDM0U7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7dUdBajBDUSxZQUFZLGtCQWtrQkQsUUFBUTsyRkFsa0JuQixZQUFZLDhFQUtELGVBQWUsNkJBS2YsZUFBZSw0UEE2Q2YsZ0JBQWdCLHNDQUtoQixnQkFBZ0Isd0RBVWhCLGdCQUFnQixxREFLaEIsZ0JBQWdCLDZFQUtoQixlQUFlLHVGQVVmLGVBQWUsb0RBVWYsZ0JBQWdCLDBCQUtoQixlQUFlLDJFQVVmLGdCQUFnQix3REFLaEIsZ0JBQWdCLDBEQVVoQixnQkFBZ0IsNENBS2hCLGVBQWUsZ0tBeUJmLGdCQUFnQiw2QkFLaEIsZ0JBQWdCLDJEQUtoQixnQkFBZ0IseUNBS2hCLGdCQUFnQixzREFXaEIsZ0JBQWdCLDhEQUtoQixnQkFBZ0Isb0VBVWhCLGdCQUFnQixzQ0FLaEIsZUFBZSwyTEF5QmYsZ0JBQWdCLDJaQTRFaEIsZ0JBQWdCLHFEQUtoQixnQkFBZ0Isa0RBS2hCLGdCQUFnQixvRkFVaEIsZ0JBQWdCLG1pQkE1VXpCLENBQUMsMkJBQTJCLENBQUMsb0RBZ2F2QixhQUFhLHV3QkF6bkJwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa05ULHFoSEFpMUNrSSxlQUFlLGlGQUFFLFdBQVcsNkVBQUUsU0FBUywyRUFBRSxlQUFlOzsyRkFyMENsTCxZQUFZO2tCQWhPeEIsU0FBUzsrQkFDSSxnQkFBZ0IsWUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtOVCxRQUNLO3dCQUNGLEtBQUssRUFBRSwwQkFBMEI7d0JBQ2pDLCtCQUErQixFQUFFLFFBQVE7d0JBQ3pDLDhCQUE4QixFQUFFLHlEQUF5RDt3QkFDekYsa0NBQWtDLEVBQUUsd0JBQXdCO3FCQUMvRCxhQUNVLENBQUMsMkJBQTJCLENBQUMsbUJBQ3ZCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OzBCQXFrQnhCLE1BQU07MkJBQUMsUUFBUTt3TUE3akJXLFNBQVM7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUtFLEtBQUs7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUs1QixLQUFLO3NCQUFiLEtBQUs7Z0JBS0csVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBS0csVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBS0csZUFBZTtzQkFBdkIsS0FBSztnQkFLRyxXQUFXO3NCQUFuQixLQUFLO2dCQUtrQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUtFLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBSzdCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS2tDLElBQUk7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0UsYUFBYTtzQkFBcEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLQyxxQkFBcUI7c0JBQTNELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUs1QixvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBS2lDLFNBQVM7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUs1QixJQUFJO3NCQUFaLEtBQUs7Z0JBS2tDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0MsSUFBSTtzQkFBMUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBSzVCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS2tDLGFBQWE7c0JBQXBELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0UsY0FBYztzQkFBckQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLN0IsSUFBSTtzQkFBWixLQUFLO2dCQUtrQyxVQUFVO3NCQUFqRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUtDLFVBQVU7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUs1QixTQUFTO3NCQUFqQixLQUFLO2dCQUtHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFLRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS2tDLE1BQU07c0JBQTdDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0UsS0FBSztzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxlQUFlO3NCQUF0RCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUtFLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBTTdCLEtBQUs7c0JBQWIsS0FBSztnQkFLa0MsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxnQkFBZ0I7c0JBQXZELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBSzdCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS2tDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0MsUUFBUTtzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBSzVCLE9BQU87c0JBQWYsS0FBSztnQkFLRyxZQUFZO3NCQUFwQixLQUFLO2dCQUtHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFLRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBS2tDLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBSzdCLFlBQVk7c0JBQXBCLEtBQUs7Z0JBS0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUtHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFLRyxjQUFjO3NCQUF0QixLQUFLO2dCQUtPLFdBQVc7c0JBQXZCLEtBQUs7Z0JBWU8sUUFBUTtzQkFBcEIsS0FBSztnQkFXRyxXQUFXO3NCQUFuQixLQUFLO2dCQUtHLEVBQUU7c0JBQVYsS0FBSztnQkFNRyxhQUFhO3NCQUFyQixLQUFLO2dCQU1HLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFNRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS2tDLGVBQWU7c0JBQXRELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBS0UsYUFBYTtzQkFBcEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFLRSxZQUFZO3NCQUFuRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUs3QixjQUFjO3NCQUF0QixLQUFLO2dCQUtrQyxZQUFZO3NCQUFuRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU01QixjQUFjO3NCQUF2QixNQUFNO2dCQU1HLFFBQVE7c0JBQWpCLE1BQU07Z0JBTUcsVUFBVTtzQkFBbkIsTUFBTTtnQkFNRyxPQUFPO3NCQUFoQixNQUFNO2dCQU1HLE1BQU07c0JBQWYsTUFBTTtnQkFNRyxlQUFlO3NCQUF4QixNQUFNO2dCQU1HLE9BQU87c0JBQWhCLE1BQU07Z0JBTUcsT0FBTztzQkFBaEIsTUFBTTtnQkFNRyxNQUFNO3NCQUFmLE1BQU07Z0JBTUcsTUFBTTtzQkFBZixNQUFNO2dCQU1HLFVBQVU7c0JBQW5CLE1BQU07Z0JBRWlCLFdBQVc7c0JBQWxDLFNBQVM7dUJBQUMsV0FBVztnQkFFRyxPQUFPO3NCQUEvQixTQUFTO3VCQUFDLFlBQVk7Z0JBRUQsWUFBWTtzQkFBakMsU0FBUzt1QkFBQyxTQUFTO2dCQUVTLGdCQUFnQjtzQkFBNUMsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBRVAsY0FBYztzQkFBakMsU0FBUzt1QkFBQyxPQUFPO2dCQUVFLGNBQWM7c0JBQWpDLFNBQVM7dUJBQUMsT0FBTztnQkFFSyxRQUFRO3NCQUE5QixTQUFTO3VCQUFDLFVBQVU7Z0JBRUMsZ0JBQWdCO3NCQUFyQyxTQUFTO3VCQUFDLFNBQVM7Z0JBRVksU0FBUztzQkFBeEMsZUFBZTt1QkFBQyxhQUFhOztBQTg2QmxDLE1BQU0sT0FBTyxrQkFBa0I7dUdBQWxCLGtCQUFrQjt3R0FBbEIsa0JBQWtCLGlCQXowQ2xCLFlBQVksYUFxMENYLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZUFBZSxhQXIwQ2xMLFlBQVksRUFzMENHLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWU7d0dBRzNFLGtCQUFrQixZQUpqQixZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFDbkssYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZTs7MkZBRzNFLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQztvQkFDNUwsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztvQkFDckYsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgICBib29sZWFuQXR0cmlidXRlLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBjb21wdXRlZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgZWZmZWN0LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGZvcndhcmRSZWYsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nTW9kdWxlLFxuICAgIE5nWm9uZSxcbiAgICBudW1iZXJBdHRyaWJ1dGUsXG4gICAgT25EZXN0cm95LFxuICAgIE91dHB1dCxcbiAgICBRdWVyeUxpc3QsXG4gICAgUmVuZGVyZXIyLFxuICAgIHNpZ25hbCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPdmVybGF5T3B0aW9ucywgT3ZlcmxheVNlcnZpY2UsIFByaW1lTkdDb25maWcsIFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSwgVHJhbnNsYXRpb25LZXlzIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQXV0b0ZvY3VzTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hdXRvZm9jdXMnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIsIERvbUhhbmRsZXIgfSBmcm9tICdwcmltZW5nL2RvbSc7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9vdmVybGF5JztcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBTY3JvbGxlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc2Nyb2xsZXInO1xuaW1wb3J0IHsgU2Nyb2xsZXJPcHRpb25zIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgT2JqZWN0VXRpbHMsIFVuaXF1ZUNvbXBvbmVudElkIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBUaW1lc0NpcmNsZUljb24gfSBmcm9tICdwcmltZW5nL2ljb25zL3RpbWVzY2lyY2xlJztcbmltcG9ydCB7IFNwaW5uZXJJY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9zcGlubmVyJztcbmltcG9ydCB7IFRpbWVzSWNvbiB9IGZyb20gJ3ByaW1lbmcvaWNvbnMvdGltZXMnO1xuaW1wb3J0IHsgQ2hldnJvbkRvd25JY29uIH0gZnJvbSAncHJpbWVuZy9pY29ucy9jaGV2cm9uZG93bic7XG5pbXBvcnQgeyBOdWxsYWJsZSwgVm9pZExpc3RlbmVyIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZUNvbXBsZXRlRXZlbnQsIEF1dG9Db21wbGV0ZURyb3Bkb3duQ2xpY2tFdmVudCwgQXV0b0NvbXBsZXRlTGF6eUxvYWRFdmVudCwgQXV0b0NvbXBsZXRlU2VsZWN0RXZlbnQsIEF1dG9Db21wbGV0ZVVuc2VsZWN0RXZlbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQXV0b0NvbXBsZXRlKSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQXV0b0NvbXBsZXRlIGlzIGFuIGlucHV0IGNvbXBvbmVudCB0aGF0IHByb3ZpZGVzIHJlYWwtdGltZSBzdWdnZXN0aW9ucyB3aGVuIGJlaW5nIHR5cGVkLlxuICogQGdyb3VwIENvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWF1dG9Db21wbGV0ZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiIChjbGljayk9XCJvbkNvbnRhaW5lckNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIW11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICAjZm9jdXNJbnB1dFxuICAgICAgICAgICAgICAgIHBBdXRvRm9jdXNcbiAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwiaW5wdXRTdHlsZVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIudmFsdWVdPVwiaW5wdXRWYWx1ZSgpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJpbnB1dElkXCJcbiAgICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJjb21ib2JveFwiXG4gICAgICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIFthdHRyLnNpemVdPVwic2l6ZVwiXG4gICAgICAgICAgICAgICAgW21heGxlbmd0aF09XCJtYXhsZW5ndGhcIlxuICAgICAgICAgICAgICAgIFt0YWJpbmRleF09XCIhZGlzYWJsZWQgPyB0YWJpbmRleCA6IC0xXCJcbiAgICAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1yZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJvdmVybGF5VmlzaWJsZSA/PyBmYWxzZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJvdmVybGF5VmlzaWJsZSA/IGlkICsgJ19saXN0JyA6IG51bGxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkID8gZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25JbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKHBhc3RlKT1cIm9uSW5wdXRQYXN0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwib25JbnB1dEtleVVwKCRldmVudClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWxsZWQgJiYgIWRpc2FibGVkICYmIHNob3dDbGVhciAmJiAhbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxUaW1lc0ljb24gKm5nSWY9XCIhY2xlYXJJY29uVGVtcGxhdGVcIiBbc3R5bGVDbGFzc109XCIncC1hdXRvY29tcGxldGUtY2xlYXItaWNvbidcIiAoY2xpY2spPVwiY2xlYXIoKVwiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2xlYXJJY29uVGVtcGxhdGVcIiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLWNsZWFyLWljb25cIiAoY2xpY2spPVwiY2xlYXIoKVwiIFthdHRyLmFyaWEtaGlkZGVuXT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2xlYXJJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAqbmdJZj1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICAjbXVsdGlDb250YWluZXJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwibXVsdGlDb250YWluZXJDbGFzc1wiXG4gICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIi0xXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIlxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkID8gZm9jdXNlZE11bHRpcGxlT3B0aW9uSWQgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbk11bHRpcGxlQ29udGFpbmVyRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25NdWx0aXBsZUNvbnRhaW5lckJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25NdWx0aXBsZUNvbnRhaW5lcktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICN0b2tlblxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG1vZGVsVmFsdWUoKTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3AtYXV0b2NvbXBsZXRlLXRva2VuJzogdHJ1ZSwgJ3AtZm9jdXMnOiBmb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleCgpID09PSBpIH1cIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJpZCArICdfbXVsdGlwbGVfb3B0aW9uXycgKyBpXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2V0c2l6ZV09XCJtb2RlbFZhbHVlKCkubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1wb3NpbnNldF09XCJpICsgMVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic2VsZWN0ZWRJdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBvcHRpb24gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFzZWxlY3RlZEl0ZW1UZW1wbGF0ZVwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtdG9rZW4tbGFiZWxcIj57eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLXRva2VuLWljb25cIiAoY2xpY2spPVwiIXJlYWRvbmx5ID8gcmVtb3ZlT3B0aW9uKCRldmVudCwgaSkgOiAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVzQ2lyY2xlSWNvbiBbc3R5bGVDbGFzc109XCIncC1hdXRvY29tcGxldGUtdG9rZW4taWNvbidcIiAqbmdJZj1cIiFyZW1vdmVJY29uVGVtcGxhdGVcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicmVtb3ZlSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWF1dG9jb21wbGV0ZS10b2tlbi1pY29uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cInJlbW92ZUljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLWlucHV0LXRva2VuXCIgcm9sZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICNmb2N1c0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBwQXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cImlucHV0U3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImlucHV0U3R5bGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci50eXBlXT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaW5wdXRJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJjb21ib2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCIhZmlsbGVkID8gcGxhY2Vob2xkZXIgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnNpemVdPVwic2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21heGxlbmd0aF09XCJtYXhsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cIiFkaXNhYmxlZCA/IHRhYmluZGV4IDogLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkQnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1yZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cIm92ZXJsYXlWaXNpYmxlID8/IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwib3ZlcmxheVZpc2libGUgPyBpZCArICdfbGlzdCcgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJmb2N1c2VkID8gZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uSW5wdXRGb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uSW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHBhc3RlKT1cIm9uSW5wdXRQYXN0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbklucHV0S2V5VXAoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxTcGlubmVySWNvbiAqbmdJZj1cIiFsb2FkaW5nSWNvblRlbXBsYXRlXCIgW3N0eWxlQ2xhc3NdPVwiJ3AtYXV0b2NvbXBsZXRlLWxvYWRlcidcIiBbc3Bpbl09XCJ0cnVlXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsb2FkaW5nSWNvblRlbXBsYXRlXCIgY2xhc3M9XCJwLWF1dG9jb21wbGV0ZS1sb2FkZXIgcGktc3BpbiBcIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRpbmdJY29uVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGJ1dHRvbiAjZGRCdG4gdHlwZT1cImJ1dHRvblwiIHBCdXR0b24gW2F0dHIuYXJpYS1sYWJlbF09XCJkcm9wZG93bkFyaWFMYWJlbFwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtZHJvcGRvd24gcC1idXR0b24taWNvbi1vbmx5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgcFJpcHBsZSAoY2xpY2spPVwiaGFuZGxlRHJvcGRvd25DbGljaygkZXZlbnQpXCIgKm5nSWY9XCJkcm9wZG93blwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkcm9wZG93bkljb25cIiBbbmdDbGFzc109XCJkcm9wZG93bkljb25cIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZHJvcGRvd25JY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb24gKm5nSWY9XCIhZHJvcGRvd25JY29uVGVtcGxhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkcm9wZG93bkljb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwLW92ZXJsYXlcbiAgICAgICAgICAgICAgICAjb3ZlcmxheVxuICAgICAgICAgICAgICAgIFsodmlzaWJsZSldPVwib3ZlcmxheVZpc2libGVcIlxuICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cIm92ZXJsYXlPcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbdGFyZ2V0XT1cIidAcGFyZW50J1wiXG4gICAgICAgICAgICAgICAgW2FwcGVuZFRvXT1cImFwcGVuZFRvXCJcbiAgICAgICAgICAgICAgICBbc2hvd1RyYW5zaXRpb25PcHRpb25zXT1cInNob3dUcmFuc2l0aW9uT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgW2hpZGVUcmFuc2l0aW9uT3B0aW9uc109XCJoaWRlVHJhbnNpdGlvbk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIChvbkFuaW1hdGlvblN0YXJ0KT1cIm9uT3ZlcmxheUFuaW1hdGlvblN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChvbkhpZGUpPVwiaGlkZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInBhbmVsQ2xhc3NcIiBbc3R5bGUubWF4LWhlaWdodF09XCJ2aXJ0dWFsU2Nyb2xsID8gJ2F1dG8nIDogc2Nyb2xsSGVpZ2h0XCIgW25nU3R5bGVdPVwicGFuZWxTdHlsZVwiIFtjbGFzc109XCJwYW5lbFN0eWxlQ2xhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImhlYWRlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxwLXNjcm9sbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInZpcnR1YWxTY3JvbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgI3Njcm9sbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaXRlbXNdPVwidmlzaWJsZU9wdGlvbnMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwieyBoZWlnaHQ6IHNjcm9sbEhlaWdodCB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtU2l6ZV09XCJ2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgfHwgX2l0ZW1TaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYXp5XT1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKG9uTGF6eUxvYWQpPVwib25MYXp5TG9hZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwidmlydHVhbFNjcm9sbE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY29udGVudFwiIGxldC1pdGVtcyBsZXQtc2Nyb2xsZXJPcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidWlsZEluSXRlbXM7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtcywgb3B0aW9uczogc2Nyb2xsZXJPcHRpb25zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwibG9hZGVyXCIgbGV0LXNjcm9sbGVyT3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRlclRlbXBsYXRlOyBjb250ZXh0OiB7IG9wdGlvbnM6IHNjcm9sbGVyT3B0aW9ucyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2Nyb2xsZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1aWxkSW5JdGVtczsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZpc2libGVPcHRpb25zKCksIG9wdGlvbnM6IHt9IH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNidWlsZEluSXRlbXMgbGV0LWl0ZW1zIGxldC1zY3JvbGxlck9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgI2l0ZW1zIGNsYXNzPVwicC1hdXRvY29tcGxldGUtaXRlbXNcIiBbbmdDbGFzc109XCJzY3JvbGxlck9wdGlvbnMuY29udGVudFN0eWxlQ2xhc3NcIiBbc3R5bGVdPVwic2Nyb2xsZXJPcHRpb25zLmNvbnRlbnRTdHlsZVwiIHJvbGU9XCJsaXN0Ym94XCIgW2F0dHIuaWRdPVwiaWQgKyAnX2xpc3QnXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsaXN0TGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW9wdGlvbiBbbmdGb3JPZl09XCJpdGVtc1wiIGxldC1pPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzT3B0aW9uR3JvdXAob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIFthdHRyLmlkXT1cImlkICsgJ18nICsgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKVwiIGNsYXNzPVwicC1hdXRvY29tcGxldGUtaXRlbS1ncm91cFwiIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBzY3JvbGxlck9wdGlvbnMuaXRlbVNpemUgKyAncHgnIH1cIiByb2xlPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZ3JvdXBUZW1wbGF0ZVwiPnt7IGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uLm9wdGlvbkdyb3VwKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ3JvdXBUZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG9wdGlvbi5vcHRpb25Hcm91cCB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc09wdGlvbkdyb3VwKG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1hdXRvY29tcGxldGUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcFJpcHBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgaGVpZ2h0OiBzY3JvbGxlck9wdGlvbnMuaXRlbVNpemUgKyAncHgnIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3AtaGlnaGxpZ2h0JzogaXNTZWxlY3RlZChvcHRpb24pLCAncC1mb2N1cyc6IGZvY3VzZWRPcHRpb25JbmRleCgpID09PSBnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpLCAncC1kaXNhYmxlZCc6IGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJpZCArICdfJyArIGdldE9wdGlvbkluZGV4KGksIHNjcm9sbGVyT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0T3B0aW9uTGFiZWwob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpc1NlbGVjdGVkKG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiaXNPcHRpb25EaXNhYmxlZChvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLXAtZm9jdXNlZF09XCJmb2N1c2VkT3B0aW9uSW5kZXgoKSA9PT0gZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZXRzaXplXT1cImFyaWFTZXRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXBvc2luc2V0XT1cImdldEFyaWFQb3NJbnNldChnZXRPcHRpb25JbmRleChpLCBzY3JvbGxlck9wdGlvbnMpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uT3B0aW9uU2VsZWN0KCRldmVudCwgb3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25PcHRpb25Nb3VzZUVudGVyKCRldmVudCwgZ2V0T3B0aW9uSW5kZXgoaSwgc2Nyb2xsZXJPcHRpb25zKSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWl0ZW1UZW1wbGF0ZVwiPnt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml0ZW1UZW1wbGF0ZTsgY29udGV4dDogeyAkaW1wbGljaXQ6IG9wdGlvbiwgaW5kZXg6IHNjcm9sbGVyT3B0aW9ucy5nZXRPcHRpb25zID8gc2Nyb2xsZXJPcHRpb25zLmdldE9wdGlvbnMoaSkgOiBpIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiIWl0ZW1zIHx8IChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPT09IDAgJiYgc2hvd0VtcHR5TWVzc2FnZSlcIiBjbGFzcz1cInAtYXV0b2NvbXBsZXRlLWVtcHR5LW1lc3NhZ2VcIiBbbmdTdHlsZV09XCJ7IGhlaWdodDogc2Nyb2xsZXJPcHRpb25zLml0ZW1TaXplICsgJ3B4JyB9XCIgcm9sZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVtcHR5VGVtcGxhdGU7IGVsc2UgZW1wdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlYXJjaFJlc3VsdE1lc3NhZ2VUZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICNlbXB0eSAqbmdUZW1wbGF0ZU91dGxldD1cImVtcHR5VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwicC1oaWRkZW4tYWNjZXNzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZE1lc3NhZ2VUZXh0IH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wLW92ZXJsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCBwLWlucHV0d3JhcHBlcicsXG4gICAgICAgICdbY2xhc3MucC1pbnB1dHdyYXBwZXItZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICAgICAnW2NsYXNzLnAtaW5wdXR3cmFwcGVyLWZvY3VzXSc6ICcoKGZvY3VzZWQgJiYgIWRpc2FibGVkKSB8fCBhdXRvZm9jdXMpIHx8IG92ZXJsYXlWaXNpYmxlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWF1dG9jb21wbGV0ZS1jbGVhcmFibGVdJzogJ3Nob3dDbGVhciAmJiAhZGlzYWJsZWQnXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtBVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gaW5pdGlhdGUgYSBzZWFyY2guXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbWluTGVuZ3RoOiBudW1iZXIgPSAxO1xuICAgIC8qKlxuICAgICAqIERlbGF5IGJldHdlZW4ga2V5c3Ryb2tlcyB0byB3YWl0IGJlZm9yZSBzZW5kaW5nIGEgcXVlcnkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgZGVsYXk6IG51bWJlciA9IDMwMDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzdHlsZTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIG92ZXJsYXkgcGFuZWwgZWxlbWVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwYW5lbFN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBvdmVybGF5IHBhbmVsIGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgcGFuZWxTdHlsZUNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElkZW50aWZpZXIgb2YgdGhlIGZvY3VzIGlucHV0IHRvIG1hdGNoIGEgbGFiZWwgZGVmaW5lZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlQ2xhc3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBIaW50IHRleHQgZm9yIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGlucHV0IGNhbm5vdCBiZSB0eXBlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBoZWlnaHQgb2YgdGhlIHN1Z2dlc3Rpb25zIHBhbmVsLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNjcm9sbEhlaWdodDogc3RyaW5nID0gJzIwMHB4JztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGlmIGRhdGEgaXMgbG9hZGVkIGFuZCBpbnRlcmFjdGVkIHdpdGggaW4gbGF6eSBtYW5uZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxhenk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBkYXRhIHNob3VsZCBiZSBsb2FkZWQgb24gZGVtYW5kIGR1cmluZyBzY3JvbGwuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSGVpZ2h0IG9mIGFuIGl0ZW0gaW4gdGhlIGxpc3QgZm9yIFZpcnR1YWxTY3JvbGxpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byB1c2UgdGhlIHNjcm9sbGVyIGZlYXR1cmUuIFRoZSBwcm9wZXJ0aWVzIG9mIHNjcm9sbGVyIGNvbXBvbmVudCBjYW4gYmUgdXNlZCBsaWtlIGFuIG9iamVjdCBpbiBpdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsT3B0aW9uczogU2Nyb2xsZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlciBhbGxvd3MgaW4gdGhlIGlucHV0IGZpZWxkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIG1heGxlbmd0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgYW4gaW5wdXQgZmllbGQgbXVzdCBiZSBmaWxsZWQgb3V0IGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXF1aXJlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBzaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGFyZ2V0IGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBvdmVybGF5LCB2YWxpZCB2YWx1ZXMgYXJlIFwiYm9keVwiIG9yIGEgbG9jYWwgbmctdGVtcGxhdGUgdmFyaWFibGUgb2YgYW5vdGhlciBlbGVtZW50IChub3RlOiB1c2UgYmluZGluZyB3aXRoIGJyYWNrZXRzIGZvciB0ZW1wbGF0ZSB2YXJpYWJsZXMsIGUuZy4gW2FwcGVuZFRvXT1cIm15ZGl2XCIgZm9yIGEgZGl2IGVsZW1lbnQgaGF2aW5nICNteWRpdiBhcyB2YXJpYWJsZSBuYW1lKS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcHBlbmRUbzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfCBhbnk7XG4gICAgLyoqXG4gICAgICogV2hlbiBlbmFibGVkLCBoaWdobGlnaHRzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0IGJ5IGRlZmF1bHQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGF1dG9IaWdobGlnaHQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBwcmVzZW50LCBhdXRvY29tcGxldGUgY2xlYXJzIHRoZSBtYW51YWwgaW5wdXQgaWYgaXQgZG9lcyBub3QgbWF0Y2ggb2YgdGhlIHN1Z2dlc3Rpb25zIHRvIGZvcmNlIG9ubHkgYWNjZXB0aW5nIHZhbHVlcyBmcm9tIHRoZSBzdWdnZXN0aW9ucy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZm9yY2VTZWxlY3Rpb246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVHlwZSBvZiB0aGUgaW5wdXQsIGRlZmF1bHRzIHRvIFwidGV4dFwiLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgbWFuYWdlIGxheWVyaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvWkluZGV4OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBCYXNlIHpJbmRleCB2YWx1ZSB0byB1c2UgaW4gbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgYmFzZVpJbmRleDogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBpbnB1dCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGEgc3RyaW5nIHRoYXQgbGFiZWxzIHRoZSBkcm9wZG93biBidXR0b24gZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZHJvcGRvd25BcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgb25lIG9yIG1vcmUgSURzIGluIHRoZSBET00gdGhhdCBsYWJlbHMgdGhlIGlucHV0IGZpZWxkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogSWNvbiBjbGFzcyBvZiB0aGUgZHJvcGRvd24gaWNvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkcm9wZG93bkljb246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHVuaXF1ZW5lc3Mgb2Ygc2VsZWN0ZWQgaXRlbXMgb24gbXVsdGlwbGUgbW9kZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgdW5pcXVlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgb3B0aW9ucyBhcyBncm91cGVkIHdoZW4gbmVzdGVkIG9wdGlvbnMgYXJlIHByb3ZpZGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBncm91cDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIHJ1biBhIHF1ZXJ5IHdoZW4gaW5wdXQgcmVjZWl2ZXMgZm9jdXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGNvbXBsZXRlT25Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZW5hYmxlZCwgYSBjbGVhciBpY29uIGlzIGRpc3BsYXllZCB0byBjbGVhciB0aGUgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dDbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEZpZWxkIG9mIGEgc3VnZ2VzdGVkIG9iamVjdCB0byByZXNvbHZlIGFuZCBkaXNwbGF5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZXByZWNhdGVkIHVzZSBvcHRpb25MYWJlbCBwcm9wZXJ0eSBpbnN0ZWFkXG4gICAgICovXG4gICAgQElucHV0KCkgZmllbGQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyBhIGJ1dHRvbiBuZXh0IHRvIHRoZSBpbnB1dCBmaWVsZCB3aGVuIGVuYWJsZWQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRyb3Bkb3duOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgZW1wdHkgbWVzc2FnZSBvciBub3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dFbXB0eU1lc3NhZ2U6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgYmVoYXZpb3IgZHJvcGRvd24gYnV0dG9uLiBEZWZhdWx0IFwiYmxhbmtcIiBtb2RlIHNlbmRzIGFuIGVtcHR5IHN0cmluZyBhbmQgXCJjdXJyZW50XCIgbW9kZSBzZW5kcyB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZHJvcGRvd25Nb2RlOiBzdHJpbmcgPSAnYmxhbmsnO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBpZiBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBtdWx0aXBsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmRleCBvZiB0aGUgZWxlbWVudCBpbiB0YWJiaW5nIG9yZGVyLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQSBwcm9wZXJ0eSB0byB1bmlxdWVseSBpZGVudGlmeSBhIHZhbHVlIGluIG9wdGlvbnMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIG5vIGRhdGEuIERlZmF1bHRzIHRvIGdsb2JhbCB2YWx1ZSBpbiBpMThuIHRyYW5zbGF0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBzaG93IGFuaW1hdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzaG93VHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICcuMTJzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcbiAgICAvKipcbiAgICAgKiBUcmFuc2l0aW9uIG9wdGlvbnMgb2YgdGhlIGhpZGUgYW5pbWF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGhpZGVUcmFuc2l0aW9uT3B0aW9uczogc3RyaW5nID0gJy4xcyBsaW5lYXInO1xuICAgIC8qKlxuICAgICAqIFdoZW4gcHJlc2VudCwgaXQgc3BlY2lmaWVzIHRoYXQgdGhlIGNvbXBvbmVudCBzaG91bGQgYXV0b21hdGljYWxseSBnZXQgZm9jdXMgb24gbG9hZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b2ZvY3VzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gZGVmaW5lIGEgc3RyaW5nIHRoYXQgYXV0b2NvbXBsZXRlIGF0dHJpYnV0ZSB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nID0gJ29mZic7XG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgb3B0aW9ucyBmaWVsZCBvZiBhbiBvcHRpb24gZ3JvdXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBDaGlsZHJlbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJ2l0ZW1zJztcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBsYWJlbCBmaWVsZCBvZiBhbiBvcHRpb24gZ3JvdXAuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uR3JvdXBMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJ2xhYmVsJztcbiAgICAvKipcbiAgICAgKiBPcHRpb25zIGZvciB0aGUgb3ZlcmxheSBlbGVtZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG92ZXJsYXlPcHRpb25zOiBPdmVybGF5T3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBzdWdnZXN0aW9ucyB0byBkaXNwbGF5LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBzdWdnZXN0aW9ucygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgICBzZXQgc3VnZ2VzdGlvbnModmFsdWU6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuX3N1Z2dlc3Rpb25zLnNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VnZ2VzdGlvbnNDaGFuZ2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRWxlbWVudCBkaW1lbnNpb25zIG9mIG9wdGlvbiBmb3IgdmlydHVhbCBzY3JvbGxpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZSBwcm9wZXJ0eSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIEBJbnB1dCgpIGdldCBpdGVtU2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbVNpemUgYXMgbnVtYmVyO1xuICAgIH1cbiAgICBzZXQgaXRlbVNpemUodmFsOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faXRlbVNpemUgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGl0ZW1TaXplIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQsIHVzZSB2aXJ0dWFsU2Nyb2xsSXRlbVNpemUgcHJvcGVydHkgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZSBvciBnZXR0ZXIgZnVuY3Rpb24gdG8gdXNlIGFzIHRoZSBsYWJlbCBvZiBhbiBvcHRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyB8ICgoaXRlbTogYW55KSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGUgc2VhcmNoIGlzIGFjdGl2ZS4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICd7MH0gcmVzdWx0cyBhcmUgYXZhaWxhYmxlJ1xuICAgICAqL1xuICAgIEBJbnB1dCgpIHNlYXJjaE1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiBmaWx0ZXJpbmcgZG9lcyBub3QgcmV0dXJuIGFueSByZXN1bHRzLiBEZWZhdWx0cyB0byBnbG9iYWwgdmFsdWUgaW4gaTE4biB0cmFuc2xhdGlvbiBjb25maWd1cmF0aW9uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqIEBkZWZhdWx0VmFsdWUgJ05vIHNlbGVjdGVkIGl0ZW0nXG4gICAgICovXG4gICAgQElucHV0KCkgZW1wdHlTZWxlY3Rpb25NZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGV4dCB0byBiZSBkaXNwbGF5ZWQgaW4gaGlkZGVuIGFjY2Vzc2libGUgZmllbGQgd2hlbiBvcHRpb25zIGFyZSBzZWxlY3RlZC4gRGVmYXVsdHMgdG8gZ2xvYmFsIHZhbHVlIGluIGkxOG4gdHJhbnNsYXRpb24gY29uZmlndXJhdGlvbi5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKiBAZGVmYXVsdFZhbHVlICd7MH0gaXRlbXMgc2VsZWN0ZWQnXG4gICAgICovXG4gICAgQElucHV0KCkgc2VsZWN0aW9uTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gZm9jdXMgb24gdGhlIGZpcnN0IHZpc2libGUgb3Igc2VsZWN0ZWQgZWxlbWVudCB3aGVuIHRoZSBvdmVybGF5IHBhbmVsIGlzIHNob3duLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhdXRvT3B0aW9uRm9jdXM6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIGVuYWJsZWQsIHRoZSBmb2N1c2VkIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc2VsZWN0T25Gb2N1czogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBMb2NhbGUgdG8gdXNlIGluIHNlYXJjaGluZy4gVGhlIGRlZmF1bHQgbG9jYWxlIGlzIHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNlYXJjaExvY2FsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lIG9yIGdldHRlciBmdW5jdGlvbiB0byB1c2UgYXMgdGhlIGRpc2FibGVkIGZsYWcgb2YgYW4gb3B0aW9uLCBkZWZhdWx0cyB0byBmYWxzZSB3aGVuIG5vdCBkZWZpbmVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCgpIG9wdGlvbkRpc2FibGVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiBlbmFibGVkLCB0aGUgaG92ZXJlZCBvcHRpb24gd2lsbCBiZSBmb2N1c2VkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBmb2N1c09uSG92ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHRvIHNlYXJjaCBmb3Igc3VnZ2VzdGlvbnMuXG4gICAgICogQHBhcmFtIHtBdXRvQ29tcGxldGVDb21wbGV0ZUV2ZW50fSBldmVudCAtIEN1c3RvbSBjb21wbGV0ZSBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgY29tcGxldGVNZXRob2Q6IEV2ZW50RW1pdHRlcjxBdXRvQ29tcGxldGVDb21wbGV0ZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b0NvbXBsZXRlQ29tcGxldGVFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHN1Z2dlc3Rpb24gaXMgc2VsZWN0ZWQuXG4gICAgICogQHBhcmFtIHtBdXRvQ29tcGxldGVTZWxlY3RFdmVudH0gZXZlbnQgLSBjdXN0b20gc2VsZWN0IGV2ZW50LlxuICAgICAqIEBncm91cCBFbWl0c1xuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPEF1dG9Db21wbGV0ZVNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b0NvbXBsZXRlU2VsZWN0RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBzZWxlY3RlZCB2YWx1ZSBpcyByZW1vdmVkLlxuICAgICAqIEBwYXJhbSB7QXV0b0NvbXBsZXRlVW5zZWxlY3RFdmVudH0gZXZlbnQgLSBjdXN0b20gdW5zZWxlY3QgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uVW5zZWxlY3Q6IEV2ZW50RW1pdHRlcjxBdXRvQ29tcGxldGVVbnNlbGVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b0NvbXBsZXRlVW5zZWxlY3RFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgY29tcG9uZW50IHJlY2VpdmVzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Gb2N1czogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgY29tcG9uZW50IGxvc2VzIGZvY3VzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25CbHVyOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB0byB3aGVuIGRyb3Bkb3duIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIEBwYXJhbSB7QXV0b0NvbXBsZXRlRHJvcGRvd25DbGlja0V2ZW50fSBldmVudCAtIGN1c3RvbSBkcm9wZG93biBjbGljayBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25Ecm9wZG93bkNsaWNrOiBFdmVudEVtaXR0ZXI8QXV0b0NvbXBsZXRlRHJvcGRvd25DbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0b0NvbXBsZXRlRHJvcGRvd25DbGlja0V2ZW50PigpO1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGNsZWFyIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25DbGVhcjogRXZlbnRFbWl0dGVyPEV2ZW50IHwgdW5kZWZpbmVkPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQgfCB1bmRlZmluZWQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIGlucHV0IGtleSB1cC5cbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IC0gS2V5Ym9hcmQgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gb3ZlcmxheSBpcyBzaG93bi5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIEJyb3dzZXIgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIG9uU2hvdzogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uIG92ZXJsYXkgaXMgaGlkZGVuLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gQnJvd3NlciBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25IaWRlOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb24gbGF6eSBsb2FkIGRhdGEuXG4gICAgICogQHBhcmFtIHtBdXRvQ29tcGxldGVMYXp5TG9hZEV2ZW50fSBldmVudCAtIExhenkgbG9hZCBldmVudC5cbiAgICAgKiBAZ3JvdXAgRW1pdHNcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25MYXp5TG9hZDogRXZlbnRFbWl0dGVyPEF1dG9Db21wbGV0ZUxhenlMb2FkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxBdXRvQ29tcGxldGVMYXp5TG9hZEV2ZW50PigpO1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyRUw6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnZm9jdXNJbnB1dCcpIGlucHV0RUw6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnbXVsdGlJbicpIG11bHRpSW5wdXRFbDogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdtdWx0aUNvbnRhaW5lcicpIG11bHRpQ29udGFpbmVyRUw6IE51bGxhYmxlPEVsZW1lbnRSZWY+O1xuXG4gICAgQFZpZXdDaGlsZCgnZGRCdG4nKSBkcm9wZG93bkJ1dHRvbjogTnVsbGFibGU8RWxlbWVudFJlZj47XG5cbiAgICBAVmlld0NoaWxkKCdpdGVtcycpIGl0ZW1zVmlld0NoaWxkOiBOdWxsYWJsZTxFbGVtZW50UmVmPjtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbGVyJykgc2Nyb2xsZXI6IE51bGxhYmxlPFNjcm9sbGVyPjtcblxuICAgIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5Vmlld0NoaWxkITogT3ZlcmxheTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBOdWxsYWJsZTxRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4+O1xuXG4gICAgX2l0ZW1TaXplOiBOdWxsYWJsZTxudW1iZXI+O1xuXG4gICAgaXRlbXNXcmFwcGVyOiBOdWxsYWJsZTxIVE1MRGl2RWxlbWVudD47XG5cbiAgICBpdGVtVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZW1wdHlUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBmb290ZXJUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBzZWxlY3RlZEl0ZW1UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBncm91cFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGxvYWRlclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHJlbW92ZUljb25UZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBsb2FkaW5nSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGNsZWFySWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGRyb3Bkb3duSWNvblRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHZhbHVlOiBzdHJpbmcgfCBhbnk7XG5cbiAgICBfc3VnZ2VzdGlvbnMgPSBzaWduYWw8YW55PihudWxsKTtcblxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICAgIHRpbWVvdXQ6IE51bGxhYmxlPGFueT47XG5cbiAgICBvdmVybGF5VmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIHN1Z2dlc3Rpb25zVXBkYXRlZDogTnVsbGFibGU8Ym9vbGVhbj47XG5cbiAgICBoaWdobGlnaHRPcHRpb246IGFueTtcblxuICAgIGhpZ2hsaWdodE9wdGlvbkNoYW5nZWQ6IE51bGxhYmxlPGJvb2xlYW4+O1xuXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgX2ZpbGxlZDogYm9vbGVhbjtcblxuICAgIGdldCBmaWxsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWxsZWQ7XG4gICAgfVxuICAgIHNldCBmaWxsZWQodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl9maWxsZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsb2FkaW5nOiBOdWxsYWJsZTxib29sZWFuPjtcblxuICAgIHNjcm9sbEhhbmRsZXI6IE51bGxhYmxlPENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyPjtcblxuICAgIGxpc3RJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgc2VhcmNoVGltZW91dDogYW55O1xuXG4gICAgZGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG1vZGVsVmFsdWUgPSBzaWduYWw8YW55PihudWxsKTtcblxuICAgIGZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4ID0gc2lnbmFsPG51bWJlcj4oLTEpO1xuXG4gICAgZm9jdXNlZE9wdGlvbkluZGV4ID0gc2lnbmFsPG51bWJlcj4oLTEpO1xuXG4gICAgdmlzaWJsZU9wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwID8gdGhpcy5mbGF0T3B0aW9ucyh0aGlzLl9zdWdnZXN0aW9ucygpKSA6IHRoaXMuX3N1Z2dlc3Rpb25zKCkgfHwgW107XG4gICAgfSk7XG5cbiAgICBpbnB1dFZhbHVlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbFZhbHVlID0gdGhpcy5tb2RlbFZhbHVlKCk7XG4gICAgICAgIGlmIChtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZGVsVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG1vZGVsVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsICE9IG51bGwgPyBsYWJlbCA6IG1vZGVsVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBnZXQgZm9jdXNlZE11bHRpcGxlT3B0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4KCkgIT09IC0xID8gYCR7dGhpcy5pZH1fbXVsdGlwbGVfb3B0aW9uXyR7dGhpcy5mb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleCgpfWAgOiBudWxsO1xuICAgIH1cblxuICAgIGdldCBmb2N1c2VkT3B0aW9uSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IGAke3RoaXMuaWR9XyR7dGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKX1gIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgY29udGFpbmVyQ2xhc3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncC1hdXRvY29tcGxldGUgcC1jb21wb25lbnQgcC1pbnB1dHdyYXBwZXInOiB0cnVlLFxuICAgICAgICAgICAgJ3AtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgJ3AtZm9jdXMnOiB0aGlzLmZvY3VzZWQsXG4gICAgICAgICAgICAncC1hdXRvY29tcGxldGUtZGQnOiB0aGlzLmRyb3Bkb3duLFxuICAgICAgICAgICAgJ3AtYXV0b2NvbXBsZXRlLW11bHRpcGxlJzogdGhpcy5tdWx0aXBsZSxcbiAgICAgICAgICAgICdwLWlucHV0d3JhcHBlci1mb2N1cyc6IHRoaXMuZm9jdXNlZCxcbiAgICAgICAgICAgICdwLW92ZXJsYXktb3Blbic6IHRoaXMub3ZlcmxheVZpc2libGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgbXVsdGlDb250YWluZXJDbGFzcygpIHtcbiAgICAgICAgcmV0dXJuICdwLWF1dG9jb21wbGV0ZS1tdWx0aXBsZS1jb250YWluZXIgcC1jb21wb25lbnQgcC1pbnB1dHRleHQnO1xuICAgIH1cblxuICAgIGdldCBwYW5lbENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtYXV0b2NvbXBsZXRlLXBhbmVsIHAtY29tcG9uZW50JzogdHJ1ZSxcbiAgICAgICAgICAgICdwLWlucHV0LWZpbGxlZCc6IHRoaXMuY29uZmlnLmlucHV0U3R5bGUgPT09ICdmaWxsZWQnLFxuICAgICAgICAgICAgJ3AtcmlwcGxlLWRpc2FibGVkJzogdGhpcy5jb25maWcucmlwcGxlID09PSBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBpbnB1dENsYXNzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AtYXV0b2NvbXBsZXRlLWlucHV0IHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50JzogIXRoaXMubXVsdGlwbGUsXG4gICAgICAgICAgICAncC1hdXRvY29tcGxldGUtZGQtaW5wdXQnOiB0aGlzLmRyb3Bkb3duXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaFJlc3VsdE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnZpc2libGVPcHRpb25zKCkpICYmIHRoaXMub3ZlcmxheVZpc2libGUgPyB0aGlzLnNlYXJjaE1lc3NhZ2VUZXh0LnJlcGxhY2VBbGwoJ3swfScsIHRoaXMudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGgpIDogdGhpcy5lbXB0eVNlYXJjaE1lc3NhZ2VUZXh0O1xuICAgIH1cblxuICAgIGdldCBzZWFyY2hNZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5zZWFyY2hNZXNzYWdlIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCBlbXB0eVNlYXJjaE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eU1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uZW1wdHlTZWFyY2hNZXNzYWdlIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb25NZXNzYWdlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTWVzc2FnZSB8fCB0aGlzLmNvbmZpZy50cmFuc2xhdGlvbi5zZWxlY3Rpb25NZXNzYWdlIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCBlbXB0eVNlbGVjdGlvbk1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eVNlbGVjdGlvbk1lc3NhZ2UgfHwgdGhpcy5jb25maWcudHJhbnNsYXRpb24uZW1wdHlTZWxlY3Rpb25NZXNzYWdlIHx8ICcnO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZE1lc3NhZ2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpID8gdGhpcy5zZWxlY3Rpb25NZXNzYWdlVGV4dC5yZXBsYWNlQWxsKCd7MH0nLCB0aGlzLm11bHRpcGxlID8gdGhpcy5tb2RlbFZhbHVlKCkubGVuZ3RoIDogJzEnKSA6IHRoaXMuZW1wdHlTZWxlY3Rpb25NZXNzYWdlVGV4dDtcbiAgICB9XG5cbiAgICBnZXQgYXJpYVNldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmlsdGVyKChvcHRpb24pID0+ICF0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSkubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCBsaXN0TGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldFRyYW5zbGF0aW9uKFRyYW5zbGF0aW9uS2V5cy5BUklBKVsnbGlzdExhYmVsJ107XG4gICAgfVxuXG4gICAgZ2V0IHZpcnR1YWxTY3JvbGxlckRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMudmlydHVhbFNjcm9sbDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCwgcHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIGNvbmZpZzogUHJpbWVOR0NvbmZpZywgcHVibGljIG92ZXJsYXlTZXJ2aWNlOiBPdmVybGF5U2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgICAgZWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkID0gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1vZGVsVmFsdWUoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCBVbmlxdWVDb21wb25lbnRJZCgpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgICAgIC8vVXNlIHRpbWVvdXRzIGFzIHNpbmNlIEFuZ3VsYXIgNC4yLCBBZnRlclZpZXdDaGVja2VkIGlzIGJyb2tlbiBhbmQgbm90IGNhbGxlZCBhZnRlciBwYW5lbCBpcyB1cGRhdGVkXG4gICAgICAgIGlmICh0aGlzLnN1Z2dlc3Rpb25zVXBkYXRlZCAmJiB0aGlzLm92ZXJsYXlWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaWV3Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpZXdDaGlsZC5hbGlnbk92ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgKHRoaXMudGVtcGxhdGVzIGFzIFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdGVkSXRlbSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdmb290ZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsb2FkZXInOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlclRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmV0b2tlbmljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUljb25UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbG9hZGluZ2ljb24nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2Ryb3Bkb3duaWNvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25JY29uVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gaXRlbS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Z2dlc3Rpb25zQ2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWdnZXN0aW9ucygpID8gdGhpcy5zaG93KCkgOiAhIXRoaXMuZW1wdHlUZW1wbGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBjb25zdCBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IC0xO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGF0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucyB8fCBbXSkucmVkdWNlKChyZXN1bHQsIG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgb3B0aW9uR3JvdXA6IG9wdGlvbiwgZ3JvdXA6IHRydWUsIGluZGV4IH0pO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25Hcm91cENoaWxkcmVuID0gdGhpcy5nZXRPcHRpb25Hcm91cENoaWxkcmVuKG9wdGlvbik7XG5cbiAgICAgICAgICAgIG9wdGlvbkdyb3VwQ2hpbGRyZW4gJiYgb3B0aW9uR3JvdXBDaGlsZHJlbi5mb3JFYWNoKChvKSA9PiByZXN1bHQucHVzaChvKSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICBpc09wdGlvbkdyb3VwKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cExhYmVsICYmIG9wdGlvbi5vcHRpb25Hcm91cCAmJiBvcHRpb24uZ3JvdXA7XG4gICAgfVxuXG4gICAgZmluZEZpcnN0T3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kTGFzdE9wdGlvbkluZGV4KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZmluZExhc3RJbmRleCh0aGlzLnZpc2libGVPcHRpb25zKCksIChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKTtcbiAgICB9XG5cbiAgICBmaW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmZpbmRTZWxlY3RlZE9wdGlvbkluZGV4KCk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggPCAwID8gdGhpcy5maW5kRmlyc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBmaW5kTGFzdEZvY3VzZWRPcHRpb25JbmRleCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA8IDAgPyB0aGlzLmZpbmRMYXN0T3B0aW9uSW5kZXgoKSA6IHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKCkgPyB0aGlzLnZpc2libGVPcHRpb25zKCkuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikpIDogLTE7XG4gICAgfVxuXG4gICAgZmluZE5leHRPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCBtYXRjaGVkT3B0aW9uSW5kZXggPVxuICAgICAgICAgICAgaW5kZXggPCB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgID8gdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKVxuICAgICAgICAgICAgICAgIDogLTE7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4ICsgaW5kZXggKyAxIDogaW5kZXg7XG4gICAgfVxuXG4gICAgZmluZFByZXZPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgICBjb25zdCBtYXRjaGVkT3B0aW9uSW5kZXggPSBpbmRleCA+IDAgPyBPYmplY3RVdGlscy5maW5kTGFzdEluZGV4KHRoaXMudmlzaWJsZU9wdGlvbnMoKS5zbGljZSgwLCBpbmRleCksIChvcHRpb24pID0+IHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pKSA6IC0xO1xuXG4gICAgICAgIHJldHVybiBtYXRjaGVkT3B0aW9uSW5kZXggPiAtMSA/IG1hdGNoZWRPcHRpb25JbmRleCA6IGluZGV4O1xuICAgIH1cblxuICAgIGlzVmFsaWRTZWxlY3RlZE9wdGlvbihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pICYmIHRoaXMuaXNTZWxlY3RlZChvcHRpb24pO1xuICAgIH1cblxuICAgIGlzVmFsaWRPcHRpb24ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gJiYgISh0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB8fCB0aGlzLmlzT3B0aW9uR3JvdXAob3B0aW9uKSk7XG4gICAgfVxuXG4gICAgaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uRGlzYWJsZWQgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5vcHRpb25EaXNhYmxlZCkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG9wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pcXVlID8gdGhpcy5tb2RlbFZhbHVlKCk/LmZpbmQoKG1vZGVsKSA9PiBPYmplY3RVdGlscy5lcXVhbHMobW9kZWwsIHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSwgdGhpcy5lcXVhbGl0eUtleSgpKSkgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMuZXF1YWxzKHRoaXMubW9kZWxWYWx1ZSgpLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbiksIHRoaXMuZXF1YWxpdHlLZXkoKSk7XG4gICAgfVxuXG4gICAgaXNPcHRpb25NYXRjaGVkKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pICYmIHRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKS50b0xvY2FsZUxvd2VyQ2FzZSh0aGlzLnNlYXJjaExvY2FsZSkgPT09IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuc2VhcmNoTG9jYWxlKTtcbiAgICB9XG5cbiAgICBpc0lucHV0Q2xpY2tlZChldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0ID09PSB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgaXNEcm9wZG93bkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25CdXR0b24/Lm5hdGl2ZUVsZW1lbnQgPyBldmVudC50YXJnZXQgPT09IHRoaXMuZHJvcGRvd25CdXR0b24ubmF0aXZlRWxlbWVudCB8fCB0aGlzLmRyb3Bkb3duQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSA6IGZhbHNlO1xuICAgIH1cbiAgICBlcXVhbGl0eUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YUtleTsgLy8gVE9ETzogVGhlICdvcHRpb25WYWx1ZScgcHJvcGVydGllcyBjYW4gYmUgYWRkZWQuXG4gICAgfVxuXG4gICAgb25Db250YWluZXJDbGljayhldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxvYWRpbmcgfHwgdGhpcy5pc0lucHV0Q2xpY2tlZChldmVudCkgfHwgdGhpcy5pc0Ryb3Bkb3duQ2xpY2tlZChldmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vdmVybGF5Vmlld0NoaWxkIHx8ICF0aGlzLm92ZXJsYXlWaWV3Q2hpbGQub3ZlcmxheVZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZURyb3Bkb3duQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHF1ZXJ5ID0gdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bkb3duTW9kZSA9PT0gJ2JsYW5rJykgdGhpcy5zZWFyY2goZXZlbnQsICcnLCAnZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZHJvcGRvd25Nb2RlID09PSAnY3VycmVudCcpIHRoaXMuc2VhcmNoKGV2ZW50LCBxdWVyeSwgJ2Ryb3Bkb3duJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRHJvcGRvd25DbGljay5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHF1ZXJ5IH0pO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoVGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIHRoaXMubWF4bGVuZ3RoKS5qb2luKCcnKTtcblxuICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIXRoaXMuZm9yY2VTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwocXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFyLmVtaXQoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmRlbGF5IC8gMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgcXVlcnksICdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmxlT3B0aW9ucygpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZFZhbHVlID0gdGhpcy52aXNpYmxlT3B0aW9ucygpLmZpbmQoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbk1hdGNoZWQob3B0aW9uLCB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJykpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuaXNTZWxlY3RlZChtYXRjaGVkVmFsdWUpICYmIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIG1hdGNoZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAhdGhpcy5tdWx0aXBsZSAmJiB0aGlzLnVwZGF0ZU1vZGVsKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dEZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAvLyBGb3IgU2NyZWVuUmVhZGVyc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpcnR5ICYmIHRoaXMuY29tcGxldGVPbkZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaChldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlLCAnZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpIDogdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmF1dG9PcHRpb25Gb2N1cyA/IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkgOiAtMTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zY3JvbGxJblZpZXcodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSk7XG4gICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbk11bHRpcGxlQ29udGFpbmVyRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIEZvciBTY3JlZW5SZWFkZXJzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTXVsdGlwbGVDb250YWluZXJCbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE11bHRpcGxlT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25NdWx0aXBsZUNvbnRhaW5lcktleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dMZWZ0S2V5T25NdWx0aXBsZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1JpZ2h0S2V5T25NdWx0aXBsZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJhY2tzcGFjZUtleU9uTXVsdGlwbGUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICB0aGlzLm9uQmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbklucHV0UGFzdGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIG9uSW5wdXRLZXlVcChldmVudCkge1xuICAgICAgICB0aGlzLm9uS2V5VXAuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyb3dMZWZ0S2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFycm93UmlnaHRLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZEtleShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFnZURvd25LZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgICAgICAgIHRoaXMub25QYWdlVXBLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXNjYXBlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uQmFja3NwYWNlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnU2hpZnRMZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0UmlnaHQnOlxuICAgICAgICAgICAgICAgIC8vTk9PUFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0Rvd25LZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25JbmRleCA9IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgIT09IC0xID8gdGhpcy5maW5kTmV4dE9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpIDogdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIG9uQXJyb3dVcEtleShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IHRoaXMuZmluZFByZXZPcHRpb25JbmRleCh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpKSA6IHRoaXMuZmluZExhc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcblxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0xlZnRLZXkoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3RVdGlscy5pc0VtcHR5KHRhcmdldC52YWx1ZSkgJiYgdGhpcy5oYXNTZWxlY3RlZE9wdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgRG9tSGFuZGxlci5mb2N1cyh0aGlzLm11bHRpQ29udGFpbmVyRUwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleC5zZXQodGhpcy5tb2RlbFZhbHVlKCkubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFRvIHByZXZlbnQgb25BcnJvd0xlZnRLZXlPbk11bHRpcGxlIG1ldGhvZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd1JpZ2h0S2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBsZSAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gVG8gcHJldmVudCBvbkFycm93UmlnaHRLZXlPbk11bHRpcGxlIG1ldGhvZFxuICAgIH1cblxuICAgIG9uSG9tZUtleShldmVudCkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCBsZW4gPSBjdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aDtcblxuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIGV2ZW50LnNoaWZ0S2V5ID8gbGVuIDogMCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVuZEtleShldmVudCkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCBsZW4gPSBjdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aDtcblxuICAgICAgICBjdXJyZW50VGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGV2ZW50LnNoaWZ0S2V5ID8gMCA6IGxlbiwgbGVuKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KC0xKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUGFnZURvd25LZXkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcodGhpcy52aXNpYmxlT3B0aW9ucygpLmxlbmd0aCAtIDEpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uUGFnZVVwS2V5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KDApO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG9uRW50ZXJLZXkoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXJyb3dEb3duS2V5KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvbkVzY2FwZUtleShldmVudCkge1xuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSh0cnVlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBvblRhYktleShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIHRoaXMudmlzaWJsZU9wdGlvbnMoKVt0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIG9uQmFja3NwYWNlS2V5KGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLm1vZGVsVmFsdWUoKSkgJiYgIXRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZFZhbHVlID0gdGhpcy5tb2RlbFZhbHVlKClbdGhpcy5tb2RlbFZhbHVlKCkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLm1vZGVsVmFsdWUoKS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblVuc2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHJlbW92ZWRWYWx1ZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFRvIHByZXZlbnQgb25CYWNrc3BhY2VLZXlPbk11bHRpcGxlIG1ldGhvZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIHRoaXMuc2hvd0NsZWFyICYmIHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJvd0xlZnRLZXlPbk11bHRpcGxlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleCgpIDwgMSA/IDAgOiB0aGlzLmZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4KCkgLSAxO1xuICAgICAgICB0aGlzLmZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4LnNldChvcHRpb25JbmRleCk7XG4gICAgfVxuXG4gICAgb25BcnJvd1JpZ2h0S2V5T25NdWx0aXBsZShldmVudCkge1xuICAgICAgICBsZXQgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4KCk7XG4gICAgICAgIG9wdGlvbkluZGV4Kys7XG5cbiAgICAgICAgdGhpcy5mb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleC5zZXQob3B0aW9uSW5kZXgpO1xuICAgICAgICBpZiAob3B0aW9uSW5kZXggPiB0aGlzLm1vZGVsVmFsdWUoKS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRNdWx0aXBsZU9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmFja3NwYWNlS2V5T25NdWx0aXBsZShldmVudCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkTXVsdGlwbGVPcHRpb25JbmRleCgpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVPcHRpb24oZXZlbnQsIHRoaXMuZm9jdXNlZE11bHRpcGxlT3B0aW9uSW5kZXgoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk9wdGlvblNlbGVjdChldmVudCwgb3B0aW9uLCBpc0hpZGUgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZChvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChbLi4uKHRoaXMubW9kZWxWYWx1ZSgpIHx8IFtdKSwgdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIHZhbHVlOiBvcHRpb24gfSk7XG5cbiAgICAgICAgaXNIaWRlICYmIHRoaXMuaGlkZSh0cnVlKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbk1vdXNlRW50ZXIoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzT25Ib3Zlcikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaChldmVudCwgcXVlcnksIHNvdXJjZSkge1xuICAgICAgICAvL2FsbG93IGVtcHR5IHN0cmluZyBidXQgbm90IHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkIHx8IHF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL2RvIG5vdCBzZWFyY2ggYmxhbmsgdmFsdWVzIG9uIGlucHV0IGNoYW5nZVxuICAgICAgICBpZiAoc291cmNlID09PSAnaW5wdXQnICYmIHF1ZXJ5LnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlTWV0aG9kLmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgcXVlcnkgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT3B0aW9uKGV2ZW50LCBpbmRleCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCByZW1vdmVkT3B0aW9uID0gdGhpcy5tb2RlbFZhbHVlKClbaW5kZXhdO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubW9kZWxWYWx1ZSgpXG4gICAgICAgICAgICAuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlKTtcbiAgICAgICAgdGhpcy5vblVuc2VsZWN0LmVtaXQoeyBvcmlnaW5hbEV2ZW50OiBldmVudCwgdmFsdWU6IHJlbW92ZWRPcHRpb24gfSk7XG4gICAgICAgIERvbUhhbmRsZXIuZm9jdXModGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHVwZGF0ZU1vZGVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlLnNldCh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZUlucHV0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0RUwgJiYgdGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5pbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdXRvVXBkYXRlTW9kZWwoKSB7XG4gICAgICAgIGlmICgodGhpcy5zZWxlY3RPbkZvY3VzIHx8IHRoaXMuYXV0b0hpZ2hsaWdodCkgJiYgdGhpcy5hdXRvT3B0aW9uRm9jdXMgJiYgIXRoaXMuaGFzU2VsZWN0ZWRPcHRpb24oKSkge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChmb2N1c2VkT3B0aW9uSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChudWxsLCB0aGlzLnZpc2libGVPcHRpb25zKClbdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKV0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbEluVmlldyhpbmRleCA9IC0xKSB7XG4gICAgICAgIGNvbnN0IGlkID0gaW5kZXggIT09IC0xID8gYCR7dGhpcy5pZH1fJHtpbmRleH1gIDogdGhpcy5mb2N1c2VkT3B0aW9uSWQ7XG4gICAgICAgIGlmICh0aGlzLml0ZW1zVmlld0NoaWxkICYmIHRoaXMuaXRlbXNWaWV3Q2hpbGQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZSh0aGlzLml0ZW1zVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQsIGBsaVtpZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcsIGlubGluZTogJ25lYXJlc3QnIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy52aXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpcnR1YWxTY3JvbGwgJiYgdGhpcy5zY3JvbGxlcj8uc2Nyb2xsVG9JbmRleChpbmRleCAhPT0gLTEgPyBpbmRleCA6IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgoKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldChpbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEluVmlldygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdGhpcy52aXNpYmxlT3B0aW9ucygpW2luZGV4XSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhpc0ZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSB0cnVlO1xuICAgICAgICBjb25zdCBmb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpICE9PSAtMSA/IHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KCkgOiB0aGlzLmF1dG9PcHRpb25Gb2N1cyA/IHRoaXMuZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4KCkgOiAtMTtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXguc2V0KGZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgIGlzRm9jdXMgJiYgRG9tSGFuZGxlci5mb2N1cyh0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIGlmIChpc0ZvY3VzKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZvY3VzKHRoaXMuaW5wdXRFTC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uU2hvdy5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgaGlkZShpc0ZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgX2hpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gaXNGb2N1cztcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4LnNldCgtMSk7XG4gICAgICAgICAgICBpc0ZvY3VzICYmIERvbUhhbmRsZXIuZm9jdXModGhpcy5pbnB1dEVMLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIF9oaWRlKCk7XG4gICAgICAgIH0sIDApOyAvLyBGb3IgU2NyZWVuUmVhZGVyc1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKG51bGwpO1xuICAgICAgICB0aGlzLmlucHV0RUwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uQ2xlYXIuZW1pdCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZS5zZXQodmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBoYXNTZWxlY3RlZE9wdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodGhpcy5tb2RlbFZhbHVlKCkpO1xuICAgIH1cblxuICAgIGdldEFyaWFQb3NJbnNldChpbmRleCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRoaXMub3B0aW9uR3JvdXBMYWJlbFxuICAgICAgICAgICAgICAgID8gaW5kZXggLVxuICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlT3B0aW9ucygpXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gdGhpcy5pc09wdGlvbkdyb3VwKG9wdGlvbikpLmxlbmd0aFxuICAgICAgICAgICAgICAgIDogaW5kZXgpICsgMVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkIHx8IHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5maWVsZCB8fCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbiAmJiBvcHRpb24ubGFiZWwgIT0gdW5kZWZpbmVkID8gb3B0aW9uLmxhYmVsIDogb3B0aW9uO1xuICAgIH1cblxuICAgIGdldE9wdGlvblZhbHVlKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gb3B0aW9uOyAvLyBUT0RPOiBUaGUgJ29wdGlvblZhbHVlJyBwcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZC5cbiAgICB9XG5cbiAgICBnZXRPcHRpb25JbmRleChpbmRleCwgc2Nyb2xsZXJPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkID8gaW5kZXggOiBzY3JvbGxlck9wdGlvbnMgJiYgc2Nyb2xsZXJPcHRpb25zLmdldEl0ZW1PcHRpb25zKGluZGV4KVsnaW5kZXgnXTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25Hcm91cExhYmVsKG9wdGlvbkdyb3VwOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uR3JvdXBMYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBMYWJlbCkgOiBvcHRpb25Hcm91cCAmJiBvcHRpb25Hcm91cC5sYWJlbCAhPSB1bmRlZmluZWQgPyBvcHRpb25Hcm91cC5sYWJlbCA6IG9wdGlvbkdyb3VwO1xuICAgIH1cblxuICAgIGdldE9wdGlvbkdyb3VwQ2hpbGRyZW4ob3B0aW9uR3JvdXA6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb25Hcm91cCwgdGhpcy5vcHRpb25Hcm91cENoaWxkcmVuKSA6IG9wdGlvbkdyb3VwLml0ZW1zO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBvbk92ZXJsYXlBbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1dyYXBwZXIgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5vdmVybGF5Vmlld0NoaWxkLm92ZXJsYXlWaWV3Q2hpbGQ/Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudmlydHVhbFNjcm9sbCA/ICcucC1zY3JvbGxlcicgOiAnLnAtYXV0b2NvbXBsZXRlLXBhbmVsJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWxTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyPy5zZXRDb250ZW50RWwodGhpcy5pdGVtc1ZpZXdDaGlsZD8ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlci52aWV3SW5pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5tb2RlbFZhbHVlKCkgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCgpIDogLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyPy5zY3JvbGxUb0luZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGlzdEl0ZW0gPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5pdGVtc1dyYXBwZXIsICcucC1hdXRvY29tcGxldGUtaXRlbS5wLWhpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExpc3RJdGVtLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnY2VudGVyJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBSaXBwbGVNb2R1bGUsIFNjcm9sbGVyTW9kdWxlLCBBdXRvRm9jdXNNb2R1bGUsIFRpbWVzQ2lyY2xlSWNvbiwgU3Bpbm5lckljb24sIFRpbWVzSWNvbiwgQ2hldnJvbkRvd25JY29uXSxcbiAgICBleHBvcnRzOiBbQXV0b0NvbXBsZXRlLCBPdmVybGF5TW9kdWxlLCBTaGFyZWRNb2R1bGUsIFNjcm9sbGVyTW9kdWxlLCBBdXRvRm9jdXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0F1dG9Db21wbGV0ZV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlTW9kdWxlIHt9XG4iXX0=