// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { AntdComponent, AntdProps } from '../component';

export declare class TextArea extends AntdComponent {
  $props: AntdProps & {
    /**
     * Height autosize feature, can be set to true|false or an object { minRows: 2, maxRows: 6 }
     * @default false
     * @type boolean | object
     */
    autoSize?: boolean | { minRows: number; maxRows: number };

    /**
     * The initial input content
     * @type string | number
     */
    defaultValue?: string | number;

    /**
     * The input content value
     * @type string | number
     */
    value?: string | number;
    /**
     *allow to remove input content with clear icon (1.5.0)
     * @type boolean
     */
    allowClear?: boolean;
  };
}
