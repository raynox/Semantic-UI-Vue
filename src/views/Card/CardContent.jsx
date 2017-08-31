import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiCardContent',
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('content')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
