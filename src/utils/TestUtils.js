import checkPropTypes from 'check-prop-types';

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value.
 * @function
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) =>
{
    return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Returns ShallowWrapper containing node(s) with the given CSS class name.
 * @function
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of CSS class name for search.
 * @returns {ShallowWrapper}
 */
export const findByClassName = (wrapper, val) =>
{
    return wrapper.find(val);
};

/**
 * Checks PropTypes of shallow wrapped component instance and expects them to conform to declared types.
 * @param {ShallowWrapper} component - Shallow wrapped component instance.
 * @param {object} conformingProps - Props which are expected to match declared prop types for component.
 * @yields
 */
export const checkProps = (component, conformingProps) =>
{
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );

    expect(propError).toBeUndefined();
};