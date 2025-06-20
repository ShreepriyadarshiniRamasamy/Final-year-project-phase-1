import * as React from 'react';
import * as PropTypes from 'prop-types';
import CheckboxGroup, { CheckboxGroupContext } from './Group';
import { ConfigConsumerProps } from '../config-provider';
export interface AbstractCheckboxProps<T> {
    prefixCls?: string;
    className?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: T) => void;
    onClick?: React.MouseEventHandler<any>;
    onMouseEnter?: React.MouseEventHandler<any>;
    onMouseLeave?: React.MouseEventHandler<any>;
    onKeyPress?: React.KeyboardEventHandler<any>;
    onKeyDown?: React.KeyboardEventHandler<any>;
    value?: any;
    tabIndex?: number;
    name?: string;
    children?: React.ReactNode;
    id?: string;
    autoFocus?: boolean;
}
export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
    indeterminate?: boolean;
}
export interface CheckboxChangeEventTarget extends CheckboxProps {
    checked: boolean;
}
export interface CheckboxChangeEvent {
    target: CheckboxChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}
declare class Checkbox extends React.Component<CheckboxProps, {}> {
    static Group: typeof CheckboxGroup;
    static defaultProps: {
        indeterminate: boolean;
    };
    static contextTypes: {
        checkboxGroup: PropTypes.Requireable<any>;
    };
    context: any;
    private rcCheckbox;
    componentDidMount(): void;
    componentDidUpdate({ value: prevValue }: CheckboxProps): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: CheckboxProps, nextState: {}, nextContext: CheckboxGroupContext): boolean;
    focus(): void;
    blur(): void;
    saveCheckbox: (node: any) => void;
    renderCheckbox: ({ getPrefixCls }: ConfigConsumerProps) => JSX.Element;
    render(): JSX.Element;
}
export default Checkbox;
