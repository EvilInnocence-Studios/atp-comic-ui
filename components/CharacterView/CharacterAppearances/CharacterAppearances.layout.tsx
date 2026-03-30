import { ILayoutEditorProps, LayoutEditor } from "@theming/lib/layout/componentRegistry";
import { Select } from "antd";
import { Link } from "react-router";

export const CharacterAppearancesLayoutEditor:LayoutEditor = ({css, className}:ILayoutEditorProps) => {
    const options = [
        { value: '1', label: 'Page 1' },
        { value: '2', label: 'Page 2' },
        { value: '3', label: 'Page 3' },
    ];

    return <>
        {css && <style>{css}</style>}
        <div className={className}>
            <table>
                <tr>
                    <th>First appearance:</th>
                    <td><Link to="">Page 123: First Page Title</Link></td>
                </tr>
                <tr>
                    <th>Most recent appearance:</th>
                    <td><Link to="">Page 321: Last Page Title</Link></td>
                </tr>
                <tr>
                    <th>Total appearances:</th>
                    <td>123 pages</td>
                </tr>
            </table>
            <Select
                style={{ width: '100%' }}
                placeholder="All appearances"
                options={options}
            />
        </div>
    </>;
};
